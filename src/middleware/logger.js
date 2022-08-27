
// This helper is being used for automatic logging of requests
const logger = {}

logger.loggerMiddleware = async (req, res, next) => {
    console.log(`\n\n\nRequest Url : ${req.url}`, )
    console.log(`Request Body : `, req.body,'\n\n\n')
//   let errorMessage = null;
//   let body = [];

//   req.on("data", chunk => {
//     body.push(chunk);
//   });

//   req.on("end", () => {
//     // body = Buffer.concat(body)
//     // body = body.toString();

//   });

  // req.on("error", error => {
  //   console.log("ShowError",error)
  //   errorMessage = error.message;
  // });

  next();
}

module.exports = logger;
