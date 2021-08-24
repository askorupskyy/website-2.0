const express = require('express');
const dotenv = require('dotenv')

class App {
  app = express();
  env = dotenv.config();

  constructor() {
    this.setupRouter();
    this.listen(process.env.PORT);
  }

  setupMiddleware() {

  }

  setupRouter() {
    this.app.get('/', (req, res) => res.send("postman!"));
  }

  listen(port) {
    this.app.listen(port, () => {
      console.log(`${process.env.PROCESS_NAME} running on port ${port}`)
    });
  }

}

module.exports = App;