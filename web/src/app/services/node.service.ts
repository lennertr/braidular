import { Injectable } from '@angular/core';
import { Proxy } from 'braid-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  public braid: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {}

  getBraidObservable(): Observable<any> {
    return this.braid.asObservable();
  }

  async setNode(_url: String) {
    await this.braid.next(await new Proxy({
      url: _url + '/api/'
    },
    async () => {
      console.log('Connected to node.');
      },
    async () => {
      console.log('Disconnected from node.');
    },
    async (err) => {
      console.error(err);
    },
    { strictSSL: false }));
  }

}
