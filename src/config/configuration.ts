import {config} from 'dotenv';
import * as Joi from '@hapi/joi';
import {IConfig} from './IConfig';
import { version } from '../../package.json';

config();
export const SWAGGER_URL = '/api-docs';

export const ABOUT = {
    description: 'Swagger Implementation',
    title: 'JavaScript & TypeScript'
};

// joi
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().default('dev'),
  PORT: Joi.number().default(9000),
}).unknown().required();

const envVars: NodeJS.ProcessEnv = process.env;
const configuration: IConfig = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  secret: envVars.TOKEN_SECRET,
  mongoURL: envVars.MONGO_URL,
  password: envVars.PASSWORD,
  swaggerDefinition: {
        openapi: '3.0.0',
        servers: [{url: 'http://localhost:9000/api/'}],
        info: {
            ...ABOUT,
            version,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
    },
    swaggerUrl: SWAGGER_URL,
});

export default configuration;