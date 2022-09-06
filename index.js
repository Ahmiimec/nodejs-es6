import app from "./src/app.js";


  // listen on port config.port
  app.listen(5000, () => {
    console.info(`server started on port ${5000}`);
  });
