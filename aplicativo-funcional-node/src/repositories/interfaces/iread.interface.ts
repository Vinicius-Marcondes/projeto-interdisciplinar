export interface IRead<T> {
    find(): Promise<Array<T>>;
    findOne(id: number | string): Promise<T>;
    findBy(field: string, value: any): Promise<Array<T>>;
}