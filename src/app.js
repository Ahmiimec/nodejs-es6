// Requiring necessary npm middleware packages
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './middleware/logger.js'
import routes from './routes/index.js'
// Requiring .env Configuration
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //For body parser
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5000"
    ],
  })
);

app.use((request, response, next) => {
  logger.loggerMiddleware(request, response, next);
});

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Running successfully" })
});

app.use("/api", routes);

export default app;
