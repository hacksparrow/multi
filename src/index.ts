import {MyApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {MyApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new MyApplication(options);
  await app.start();

  console.log('MyApplication!');

  return app;
}
