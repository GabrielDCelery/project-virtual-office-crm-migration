import React from 'react';
import {
  //TableCell,
  TableBody,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button
} from '@material-ui/core';
import {
  DataTableBodyCell,
  DataTableBodyCellCheckbox,
  DataTableCellContent,
  DataTableHeadCell,
  DataTableHeadCellCheckbox
} from '../components';
import { VerticalGutter } from '../../layout';

const ActionableDataTableView = ({
  StyledPaper,
  StyledPaperOverflow,
  StyledPapersContainer,
  StyledTable,
  StyledTablesContainer,
  getter,
  handler
}) => {
  return (
    <React.Fragment>
      <StyledPapersContainer>
        <StyledPaperOverflow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={getter('pagination', 'numOfTotalRecords')}
            rowsPerPage={getter('pagination', 'numOfRecordsPerPage')}
            page={getter('pagination', 'currentPage')}
            backIconButtonProps={{
              'aria-label': 'previous page'
            }}
            nextIconButtonProps={{
              'aria-label': 'next page'
            }}
            onChangePage={(e, newPage) => {
              handler('pagination', 'setCurrentPage')(newPage);
            }}
            onChangeRowsPerPage={e => {
              handler('pagination', 'setNumOfRecordsPerPage')(e.target.value);
            }}
          />

          <StyledTablesContainer>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <DataTableHeadCellCheckbox
                    isChecked={getter('dataTable', 'isHeadChecked')()}
                    isIndeterminate={getter(
                      'dataTable',
                      'isHeadIndeterminate'
                    )()}
                    handleClick={() => {
                      handler('dataTable', 'toggleAllCheckedItems')();
                    }}
                  />
                  {getter('dataTable', 'columnConfigs').map(
                    ({ type, label, width }, index) => {
                      return (
                        <React.Fragment key={`table-head-cell-${index}`}>
                          <DataTableHeadCell width={width}>
                            <DataTableCellContent label={label} />
                          </DataTableHeadCell>
                        </React.Fragment>
                      );
                    }
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {getter('dataTable', 'itemsToShow')().map((item, indexRow) => {
                  return (
                    <TableRow key={`table-row-${indexRow}`}>
                      <DataTableBodyCellCheckbox
                        isChecked={getter('dataTable', 'isRowChecked')(
                          item['id']
                        )}
                        handleClick={() => {
                          handler('dataTable', 'toggleCheckedItem')(item['id']);
                        }}
                      />
                      {getter('dataTable', 'columnConfigs').map(
                        ({ type, field, width }, indexCell) => {
                          return (
                            <React.Fragment key={`table-cell-${indexCell}`}>
                              <DataTableBodyCell
                                width={width}
                                onClick={() => {
                                  handler(
                                    'dataTable',
                                    'handleActionForClicked'
                                  )(item);
                                }}
                              >
                                <DataTableCellContent
                                  type={type}
                                  label={item[field]}
                                />
                              </DataTableBodyCell>
                            </React.Fragment>
                          );
                        }
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </StyledTable>
          </StyledTablesContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={getter('pagination', 'numOfTotalRecords')}
            rowsPerPage={getter('pagination', 'numOfRecordsPerPage')}
            page={getter('pagination', 'currentPage')}
            backIconButtonProps={{
              'aria-label': 'previous page'
            }}
            nextIconButtonProps={{
              'aria-label': 'next page'
            }}
            onChangePage={(e, newPage) => {
              handler('pagination', 'setCurrentPage')(newPage);
            }}
            onChangeRowsPerPage={e => {
              handler('pagination', 'setNumOfRecordsPerPage')(e.target.value);
            }}
          />
        </StyledPaperOverflow>
      </StyledPapersContainer>

      <VerticalGutter />

      <StyledPaper>
        <div style={{ display: 'flex' }}>
          <Typography
            align="center"
            component="div"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {getter('dataTable', 'numOfSelected')()} record(s) selected
          </Typography>
          <Typography component="div" style={{ flexGrow: 1 }}></Typography>
          <Button
            disabled={getter('dataTable', 'isSubmitDisabled')()}
            variant="contained"
            color="primary"
            onClick={handler('dataTable', 'handleActionForSelecteds')}
          >
            {getter('dataTable', 'isSubmitDisabled')()
              ? 'Use Checkboxes To Select Records For Submission'
              : 'Submit Selected Records'}
          </Button>
        </div>
      </StyledPaper>
    </React.Fragment>
  );
};

export default ActionableDataTableView;
