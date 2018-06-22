// @flow

export const HEADERS = {
  JSON: 'application/json',
  JSON_CHARSET: 'application/json; charset=utf-8',
  OCTET_STREAM: 'application/octet-stream',
  GZIP: 'gzip',
};

export const HEADER_TYPE = {
  CONTENT_ENCODING: 'content-encoding',
  ACCEPT_ENCODING: 'accept-encoding',
};

export const ERROR_CODE = {
  token_required: 'token is required',
};

export const TOKEN_BASIC = 'Basic';
export const TOKEN_BEARER = 'Bearer';
export const DEFAULT_REGISTRY = 'https://registry.npmjs.org/';


export const HTTP_STATUS = {
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

export const PORT_SERVER_1 = '55551';
export const PORT_SERVER_2 = '55552';
export const PORT_SERVER_3 = '55551';
