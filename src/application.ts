import {Application, ApplicationConfig, Server} from '@loopback/core';
import {ServerA} from './server-a';
import {ServerB} from './server-b';

export class MyApplication extends Application {
  options: ApplicationConfig;
  constructor(options: ApplicationConfig = {}) {
    super(options);
    // this.server(ServerA, 'server.a');
    // this.server(ServerB, 'server.b');
    this.servers<Server>([ServerA, ServerB]);
  }
}
