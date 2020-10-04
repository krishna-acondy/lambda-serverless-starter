var AWS = require("aws-sdk");
var ssm = new AWS.SSM();

getParameterFromStore = async (paramName) => {
  return new Promise((resolve, reject) => {
    const params = {
      Name: paramName,
      WithDecryption: true,
    };

    ssm
      .getParameter(params, (err, data) => {
        if (err) {
          console.log(err);
          console.warn("Value not found in Parameter Store", paramName);
          reject(Error("Could not fetch required configuration."));
        } else {
          resolve(data.Parameter.Value);
        }
      })
      .promise();
  });
};

module.exports = { getParameterFromStore };
