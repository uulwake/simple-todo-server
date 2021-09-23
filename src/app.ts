import express from "express";

import usersRouter from "./routers/users";
import tasksRouter from "./routers/tasks";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

export default app;
