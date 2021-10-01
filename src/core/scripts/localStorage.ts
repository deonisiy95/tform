import {createStore, set, get, del} from 'idb-keyval';

export const localStore = createStore('app-db', 'local-storage');

class LocalStorage {
  public async setItem(key: string, value: any): Promise<void> {
    return set(key, value, localStore).catch(this.handleError);
  }

  public async getItem(key: string): Promise<any> {
    return get(key, localStore).catch(this.handleError);
  }

  public async removeItem(key: string): Promise<void> {
    return del(key, localStore).catch(this.handleError);
  }

  public async getItemAsObject<T = any>(key: string): Promise<T> {
    let object = {};

    try {
      const json = await this.getItem(key);
      object = JSON.parse(json);
    } catch (error) {
      this.handleError(error);
    }

    return object as T;
  }

  private handleError = (error: Error): void => {
    console.error('Cant use the local storage: ', error?.message);
  };
}

export const localStorage = new LocalStorage();
