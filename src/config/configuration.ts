import {config} from 'dotenv';
import * as Joi from '@hapi/joi';
import {IConfig} from './IConfig';

config();

// joi
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().default('dev'),
  PORT: Joi.number().default(9000),
}).unknown().required();

const envVars: NodeJS.ProcessEnv = process.env;
const configuration: IConfig = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
});

export default configuration;