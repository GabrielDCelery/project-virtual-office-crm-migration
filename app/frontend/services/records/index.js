import { EServiceMethod } from '../../common/enums';
const { SERVICE_METHOD_CREATE_PREVIEW_VERSION_OF_ADDRESS } = EServiceMethod;
import createPreviewVersionAddress from './createPreviewVersionAddress';

export default {
  [SERVICE_METHOD_CREATE_PREVIEW_VERSION_OF_ADDRESS]: createPreviewVersionAddress
};
