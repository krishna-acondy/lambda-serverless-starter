const {
  ok,
  badRequest,
  internalServerError,
} = require("../utils/responseWrapper");

exports.handler = async function (event) {
  // Get query string parameters
  const { exampleParam } = event.queryStringParameters;
  if (!exampleParam) {
    return badRequest("Missing param");
  }
  try {
    // Do actual stuff here
    const response = true;
    return ok(response);
  } catch (e) {
    console.error("Error processing request", e);
    return internalServerError({ message: "Error processing request" });
  }
};
