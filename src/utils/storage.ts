class MyStorage {
  #storage: Storage = localStorage
  constructor(storage: Storage) {
    this.#storage = storage
  }
  get(v: string) {
    const res = this.#storage.getItem(v)
    if (res !== null) {
      return JSON.parse(res)
    }
  }

  set(k: string, v: any) {
    this.#storage.setItem(k, JSON.stringify(v))
  }

  remove(v: string) {
    return this.#storage.removeItem(v)
  }

  clear() {
    this.#storage.clear()
  }
}

export const local = new MyStorage(localStorage)
export const session = new MyStorage(sessionStorage)
