import dotenvSafe from "dotenv-safe";
import express from "express";

import usersRouter from "./routers/users";
import tasksRouter from "./routers/tasks";
import errorHandler from "./middlewares/error-handler";

dotenvSafe.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use(errorHandler);

export default app;
