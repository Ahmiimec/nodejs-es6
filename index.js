import app from "./src/app.js";

  let port = process.env.PORT || 3000
  // listen on port config.port
  app.listen(port, () => {
    console.info(`server started on port ${port}`);
  });
