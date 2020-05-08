import { Server } from '@loopback/core';

export class ServerB implements Server {
  private _listen = false;

  get listening() {
    return this._listen;
  }

  async start() {
    console.log('B: START');
  }

  async stop() {
    console.log('B: STOP');
  }
}
