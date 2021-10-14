import { observable, action, makeObservable } from 'mobx';

class counterStore {
  
  @observable count: number  = 0;

  constructor() {
    makeObservable(this)
  }

  @action add() {
    this.count ++;
  }

}

export default new counterStore();