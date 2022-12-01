export interface IWrite<T> {
    create(params: T): Promise<T>;
    update(id: number | string, params: T): Promise<T>;
    delete(id: number | string): Promise<Boolean>;
}