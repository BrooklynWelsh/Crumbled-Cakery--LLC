import { type IDefaultOrderForm, DefaultOrderForm } from './../type.GenericOrderForm';
import type * as GenericFormFields from './../GenericOrderFormFields'

export default class CakeOrderForm extends DefaultOrderForm implements IDefaultOrderForm {
    public layers: GenericFormFields.RadioInput | null = null;
    public flavors: GenericFormFields.RadioInput | null = null;
    public event: GenericFormFields.RadioInput | null = null;

    private defaultObject = {}

    constructor(productObject: Partial<IDefaultOrderForm> = {}) {
        console.log('cake constructor')
        super(productObject);
        Object.assign(this, productObject)
        console.log(this)
        return this;
    }

}