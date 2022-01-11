import * as express from 'express';
import * as bodyParser from 'body-parser';
export default class Server {
    app: express.Express;
    constructor(private config) {
        this.app = express();
    }
    /**
     * This method use to set health-check route
     */
    setupRoutes() {
      this.app.get('/health-check', (req, res) => {
          res.send("'I am OK");
      });
    }

    /**
     * This Method use to set in initial route
     * @returns
     */

     initBodyParser() {
      // parse application/x-www-form-urlencoded
      this.app.use(bodyParser.urlencoded({ extended: false }));

      // parse application/json
      this.app.use(bodyParser.json());
    }

    bootstrap() {
      this.initBodyParser();
      this.setupRoutes();
      return this;
    }

    /**
     * This method use to listen port
     */
    run() {
        const {port, env} = this.config;
        this.app.listen(port, () => {
          const message = `|| App running on ${port} of ${env} successfully ||`
          console.log(message);
        });
    }
}