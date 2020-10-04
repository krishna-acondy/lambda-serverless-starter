const {
  ok,
  badRequest,
  internalServerError,
  forbidden,
  unauthorized,
} = require("../utils/responseWrapper");

exports.handler = async function (event) {
  // Parse POST request body
  let requestBody;
  try {
    requestBody = JSON.parse(event.body);
  } catch (e) {
    return badRequest("Invalid request body");
  }

  try {
    // Do actual stuff here
    const response = true;
    return ok(response);
  } catch (e) {
    if (e.status === 401) {
      return unauthorized(e.message);
    }
    console.error("Error handling request", e);
    return internalServerError({ message: "Error handling request" });
  }
};
