import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './libs/routes';
import router from './routes';
import Database from './libs/Database';
import Swagger from './libs/Swagger';

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
      res.send("I am OK");
    });
    this.app.use('/api', router);
    this.app.use(routes.notFoundRoute);
    this.app.use(routes.errorHandler);
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
    this.initSwagger();
    this.setupRoutes();
    return this.app;
  }

  /**
   * This method use to listen port
   */
  public async run() {
    const { port, env, mongoURL } = this.config;
    try {
      await Database.open(mongoURL);
      this.app.listen(port, () => {
        const message = `|| App running on ${port} of ${env} successfully ||`
        console.log(message);
      });
    } catch (e) {
      console.log('error', e);
    }
    return this;
  }
  
  // Initialise Swagger
  private initSwagger() {
    const { swaggerDefinition, swaggerUrl } = this.config;
    const SwaggerSetup = new Swagger();

    // JSON ROUTES
    this.app.use(`${swaggerUrl}.json`, SwaggerSetup.getRouter({
      swaggerDefinition,
    }));
    // UI Route
    const { serve, setup } = SwaggerSetup.getUI(swaggerUrl);
    this.app.use(swaggerUrl, serve, setup);
  }
}