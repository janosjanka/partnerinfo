import * as ko from "knockout";

/** Generates a field key for the specified property key. */
function getFieldKey(propertyKey: string): string { return "__" + propertyKey; }

/** Property decorator that creates hidden ko.observable with ES6 getter and setter for it. */
export function observable(target: any, propertyKey: string): void {
    const fieldKey = getFieldKey(propertyKey);
    const observable = target[fieldKey] = ko.observable();

    Object.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: observable,
        set: observable,
    });
}

/** Apply extenders to decorated @observable. */
export function extend(extenders: Object): PropertyDecorator {
    return function (target: any, propertyKey: string) {
        (<any>target[getFieldKey(propertyKey)]).extend(extenders);

        //getDecorators(getMetaData(prototype), propertyKey).push({
        //    type: DecoratorType.Extend,
        //    value: extendersOrFactory,
        //});
    }
}