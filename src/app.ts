import express, { Express } from "express";
import router from "../routes";

const app: Express = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(8000, () => {
  console.log("server is running");
});
