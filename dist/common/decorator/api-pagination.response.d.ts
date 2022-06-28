import { Type } from '@nestjs/common';
interface IPaginatedDecoratorApiResponse {
    model: Type<any>;
    description?: string;
}
export declare const ApiPaginatedResponse: <TModel extends Type<any>>(options: IPaginatedDecoratorApiResponse) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export {};
