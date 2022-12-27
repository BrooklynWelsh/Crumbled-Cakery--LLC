/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-namespace */
import * as GenericFieldTypes from './GenericOrderFormFields'

export abstract class IDefaultOrderForm {

    abstract maxColors: number;
    abstract startingPrice: number;
    abstract count: GenericFieldTypes.CountField;
    abstract style: GenericFieldTypes.RadioOptionField;
    abstract colors: GenericFieldTypes.FreeTextField;
    abstract addOns: GenericFieldTypes.FreeTextField;
    abstract comments: GenericFieldTypes.FreeTextField;

    constructor() {

    }

    public createForm(): void {
        for (const key of IDefaultOrderForm.keys(this)) {
            const value = this[key as keyof IDefaultOrderForm]
            if (GenericFieldTypes.isFormField(value)) {
                GenericFieldTypes.createFieldsElement(value)
            }
        }
    }

    static keys<T extends IDefaultOrderForm>(obj: T) {
        return Object.keys(obj) as Array<keyof T>;
    }

    public getOptions() {
        const options = []
        for (const key of IDefaultOrderForm.keys(this)) {
            const value = this[key as keyof IDefaultOrderForm]
            if (GenericFieldTypes.isFormField(value)) {
                options.push(value)
            }
        }
        return options
    }
}

interface ISugarCookieOrderForm extends IDefaultOrderForm {
    event: GenericFieldTypes.RadioOptionField
}

export abstract class DefaultOrderForm extends IDefaultOrderForm {
    maxColors: number;
    startingPrice: number;
    count: GenericFieldTypes.CountField;
    style: GenericFieldTypes.RadioOptionField;
    colors: GenericFieldTypes.FreeTextField;
    addOns: GenericFieldTypes.FreeTextField;
    comments: GenericFieldTypes.FreeTextField;

    constructor() {
        super();
        this.maxColors = 0
        this.startingPrice = -1.11;
        this.count = { id: "count", title: "Count | ", minimum: "", options: [{ name: "", price: -1 }] }
        this.style = { id: "style", title: "Style or Theme", options: [{ name: "", price: -1 }] }
        this.colors = {
            id: "colors",
            title: "Colors",
            description: `Decor can be a collection of ${this.maxColors} colors of your 
								choosing and white. List your choices here! You may submit a link to a 
								color palette if you would like`
        }
        this.addOns = { id: "addons", title: "Add-ons", description: "" }
        this.comments = { id: "comments", title: "Final Comments, Questions, or Ideas?", description: "" }
    }
}