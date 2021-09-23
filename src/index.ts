import "reflect-metadata";
import { createConnection } from "typeorm";

import app from "./app";

const PORT = process.env.PORT || 3000;

const main = async () => {
  await createConnection();
  app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
};

main();
