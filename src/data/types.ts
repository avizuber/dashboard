export type DataParamType = {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
};

type DataRequestType = {
  urlParams: DataParamType[];
  queryParams: DataParamType[];
  headers: DataParamType[];
  body: DataParamType[];
};

type DataResponseType = {
  headers: DataParamType[];
  body: DataParamType[];
};

export type DataType = {
  api: string;
  method: string;
  path: string;
  request: DataRequestType;
  response: DataResponseType;
};
