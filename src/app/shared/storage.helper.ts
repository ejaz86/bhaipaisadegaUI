export class StorageHelper {
  static getLocal<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  static setLocal(key: string, value: any): any {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeLocal(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
