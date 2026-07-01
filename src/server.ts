import app from "./app"
import config from "./config/env"
import { initDB } from "./database/database";

const main = () => {
  initDB();
  app.listen(config.port, () => {
  console.log(`The server is listening on port ${config.port}`)
})
}

main();