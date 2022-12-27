/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-namespace */
import * as GenericFieldTypes from './GenericOrderFormFields'

type Pageable<K extends keyof GenericFieldTypes.ValidFormField> = test &
    Record<Exclude<K, keyof IDefaultOrderForm>, IDefaultOrderForm>;

interface IOptionalKeys {
    [key: string]: GenericFieldTypes.ValidFormField
}
export interface IDefaultOrderForm {
    // Title / info vars
    productName: string;
    maxColors: number;
    startingPrice: number;

    // Form input vars
    count: GenericFieldTypes.CountField;
    style: GenericFieldTypes.RadioInput;
    colors: GenericFieldTypes.FreeTextInput;
    addOns: GenericFieldTypes.FreeTextInput;
    comments: GenericFieldTypes.FreeTextInput;
    nonDefaultOptions: Array<GenericFieldTypes.ValidFormField> | null;
}

export type test = GenericFieldTypes.ValidFormField & IDefaultOrderForm


export class DefaultOrderForm implements IDefaultOrderForm {
    productName!: string;
    maxColors!: number;
    startingPrice!: number;
    count!: GenericFieldTypes.CountField;
    style!: GenericFieldTypes.RadioInput;
    colors!: GenericFieldTypes.FreeTextInput;
    addOns!: GenericFieldTypes.FreeTextInput;
    comments!: GenericFieldTypes.FreeTextInput;
    nonDefaultOptions!: Array<GenericFieldTypes.ValidFormField>;

    getMaxColors() {
        return this.maxColors;
    }

    // public createForm(): void {
    //     for (const key of IDefaultOrderForm.keys(this)) {
    //         const value = this[key as keyof IDefaultOrderForm]
    //         if (GenericFieldTypes.isFormField(value)) {
    //             GenericFieldTypes.createFieldsElement(value)
    //         }
    //     }
    // }

    public keys<T extends IDefaultOrderForm>() {
        return Object.keys(this) as Array<keyof T>;
    }

    public getOptions(): Array<GenericFieldTypes.ValidFormField> {
        const options: Array<GenericFieldTypes.ValidFormField> = []
        for (const key of this.keys()) {
            const value = this[key as keyof IDefaultOrderForm]
            if (GenericFieldTypes.isFormField(value)) {
                options.push(value)
            }
        }
        return options
    }

    constructor(productObject: IDefaultOrderForm) {
        Object.assign(this, productObject)
        return this
    }
}