const {
  ok,
  badRequest,
  internalServerError,
} = require("../utils/responseWrapper");

exports.handler = async function (event) {
  // Access path parameters
  const { id } = event.pathParameters;
  if (!id) {
    return badRequest("Missing ID.");
  }

  try {
    // Do actual stuff here
    const response = true;
    return ok(response);
  } catch (e) {
    console.error("Error handling request", e);
    return internalServerError({ message: "Error handling request" });
  }
};
