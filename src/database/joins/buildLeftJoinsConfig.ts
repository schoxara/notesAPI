import { BaseEntity } from "typeorm";

export const buildLeftJoinsConfig = <T>(
    Type: new (p: T) => T,
    alias: string,
    config: TypeORMJoins<T>,
    getUniqueidArg?: () => number,
  ) => {
    const getUniqueId = getUniqueidArg || getUniqueLeftJoinId.bind({});
  
    return Object.keys(config).reduce((acc, key, index) => {
      const newAliasName = `${key}${getUniqueId()}`;
      return {
        ...acc,
        [newAliasName]: `${alias}.${key}`,
        ...buildLeftJoinsConfig(Type, newAliasName, config[key], getUniqueId),
      };
    }, {});
  };
  
  export type TypeORMRelationsType = BaseEntity | BaseEntity[];
  type TypeORMJoinsNested<T> = {
    [P in keyof T]: T[P] extends TypeORMRelationsType
      ? TypeORMJoinsNested<Partial<SubType<Unpacked<T[P]>, TypeORMRelationsType>>>
      : never
  };
  
  export type TypeORMJoinsShallow<T> = Partial<{
    [P in keyof T]: T[P] extends TypeORMRelationsType
      ? TypeORMJoinsShallow<T[P]>
      : T[P]
  }>;
  
  export type TypeORMJoins<T> = TypeORMJoinsNested<
  Partial<SubType<Unpacked<T>, TypeORMRelationsType>>
  >;
  
  export type TypeORMJoinsNestedWithProps<T> = {
    [P in keyof T]: T[P] extends TypeORMRelationsType
      ? TypeORMJoinsNestedWithProps<Partial<Unpacked<T[P]>>>
      : true
  };
  
  export type TypeORMJoinsWithProps<T> = TypeORMJoinsNestedWithProps<
  Partial<Unpacked<T>>
  >;
  
  type PickByType<T, U> = {[P in keyof T]: T[P] extends U ? P: never};
  export type PickKeysOfType<T, U> = PickByType<T, U>[keyof T];
  
  
  type SubType<Base, Condition> = Pick<
  Base,
  { [Key in keyof Base]: Base[Key] extends Condition ? Key : never }[keyof Base]
  >;
  
  export type Unpacked<T> = T extends Array<infer U> ? U : T;
  
  export const getUniqueLeftJoinId = function(this: any) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return (this.count = (this.count || 0) + 1);
  };