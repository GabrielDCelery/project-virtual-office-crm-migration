const _ = require('lodash');
const { CStatusCode } = globalRequire('common/constants');
const { STATUS_CODE_OK } = CStatusCode;

module.exports = class APIResultWrapper {
  constructor() {
    this.returnJsonSuccess = this.returnJsonSuccess.bind(this);
    this.returnOrchestratorResult = this.returnOrchestratorResult.bind(this);
  }

  _normalizeOrchestratorResult({ orchestratorResult, omit }) {
    const { success, error, payload } = orchestratorResult;

    return {
      success,
      error,
      payload: Array.isArray(payload) ? payload : _.omit(payload, omit || [])
    };
  }

  _createSuccessObjectFromOrchestratorResult(orchestratorResult) {
    const { payload } = orchestratorResult;

    return {
      success: true,
      error: null,
      payload
    };
  }

  _createFailObjectFromOrchestratorResult(orchestratorResult) {
    const { error } = orchestratorResult;

    return {
      success: false,
      error,
      payload: null
    };
  }

  returnJsonSuccess({ res }) {
    res.statusCode = STATUS_CODE_OK;

    return res.json({
      success: true,
      error: null,
      payload: null
    });
  }

  returnOrchestratorResult({
    res,
    statusCodeSuccess,
    statusCodeFail,
    orchestratorResult,
    omit
  }) {
    const { success } = orchestratorResult;

    if (success === false) {
      res.statusCode = statusCodeFail;

      return res.json(
        this._createFailObjectFromOrchestratorResult(
          this._normalizeOrchestratorResult({
            orchestratorResult,
            omit
          })
        )
      );
    }

    res.statusCode = statusCodeSuccess;

    return res.json(
      this._createSuccessObjectFromOrchestratorResult(
        this._normalizeOrchestratorResult({
          orchestratorResult,
          omit
        })
      )
    );
  }
};
