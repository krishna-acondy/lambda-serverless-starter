const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

const badRequest = (message) => {
  return {
    statusCode: 400,
    headers: HEADERS,
    body: JSON.stringify({ message }),
  };
};

const internalServerError = (error) => {
  return {
    statusCode: 500,
    headers: HEADERS,
    body: JSON.stringify(error),
  };
};

const forbidden = (message) => {
  return {
    statusCode: 403,
    headers: HEADERS,
    body: JSON.stringify({ message }),
  };
};

const unauthorized = (message) => {
  return {
    statusCode: 401,
    headers: HEADERS,
    body: JSON.stringify({ message }),
  };
};

const ok = (data) => {
  return {
    statusCode: 200,
    headers: HEADERS,
    body: JSON.stringify(data),
  };
};

module.exports = {
  ok,
  badRequest,
  internalServerError,
  forbidden,
  unauthorized,
};
