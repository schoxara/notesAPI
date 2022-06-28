import { BaseEntity } from "typeorm";
export declare const buildLeftJoinsConfig: <T>(Type: new (p: T) => T, alias: string, config: TypeORMJoinsNested<Partial<SubType<Unpacked<T>, TypeORMRelationsType>>>, getUniqueidArg?: () => number) => any;
export declare type TypeORMRelationsType = BaseEntity | BaseEntity[];
declare type TypeORMJoinsNested<T> = {
    [P in keyof T]: T[P] extends TypeORMRelationsType ? TypeORMJoinsNested<Partial<SubType<Unpacked<T[P]>, TypeORMRelationsType>>> : never;
};
export declare type TypeORMJoinsShallow<T> = Partial<{
    [P in keyof T]: T[P] extends TypeORMRelationsType ? TypeORMJoinsShallow<T[P]> : T[P];
}>;
export declare type TypeORMJoins<T> = TypeORMJoinsNested<Partial<SubType<Unpacked<T>, TypeORMRelationsType>>>;
export declare type TypeORMJoinsNestedWithProps<T> = {
    [P in keyof T]: T[P] extends TypeORMRelationsType ? TypeORMJoinsNestedWithProps<Partial<Unpacked<T[P]>>> : true;
};
export declare type TypeORMJoinsWithProps<T> = TypeORMJoinsNestedWithProps<Partial<Unpacked<T>>>;
declare type PickByType<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
};
export declare type PickKeysOfType<T, U> = PickByType<T, U>[keyof T];
declare type SubType<Base, Condition> = Pick<Base, {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
}[keyof Base]>;
export declare type Unpacked<T> = T extends Array<infer U> ? U : T;
export declare const getUniqueLeftJoinId: (this: any) => any;
export {};
