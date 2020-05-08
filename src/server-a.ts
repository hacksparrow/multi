import { Server } from '@loopback/core';

export class ServerA implements Server {
  private _listen = false;

  get listening() {
    return this._listen;
  }

  async start() {
    console.log('A: START');
  }

  async stop() {
    console.log('A: STOP');
  }
}