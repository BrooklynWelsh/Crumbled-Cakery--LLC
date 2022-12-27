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

    // Return all fields that represent option objects (i.e. exclude primitives and any non-valid objects)
    public getOptions(): Map<number, GenericFieldTypes.ValidFormField> {
        const options: Map<number, GenericFieldTypes.ValidFormField> = new Map();
        for (const key of this.keys()) {
            const value = this[key as keyof IDefaultOrderForm]
            if (GenericFieldTypes.isFormField(value)) {
                // If valid and default field, check index and add to map
                if (options.has(value.index)) {
                    throw new Error("Duplicate option index found, aborting form creation.")
                }
                options.set(value.index, value)
            } else if (Array.isArray(value)) {
                // Unpack non-default options
                for (const nonDefaultOption of value) {
                    if (GenericFieldTypes.isFormField(nonDefaultOption)) {
                        if (options.has(nonDefaultOption.index)) {
                            throw new Error("Duplicate option index found, aborting form creation.")
                        }
                        options.set(nonDefaultOption.index, nonDefaultOption)
                    }
                }
            }
        }
        // Sort map by indices
        return new Map([...options].sort((a, b) => a[0] - b[0]));
    }

    constructor(productObject: IDefaultOrderForm) {
        Object.assign(this, productObject)
        return this
    }
}