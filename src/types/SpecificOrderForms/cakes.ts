import { type IDefaultOrderForm, DefaultOrderForm } from './../type.GenericOrderForm';
import type * as GenericFormFields from './../GenericOrderFormFields'

export default class CakeOrderForm extends DefaultOrderForm {
    public layers: GenericFormFields.RadioOptionField;
    public flavors: GenericFormFields.RadioOptionField;
    public style: GenericFormFields.RadioOptionField;
    public event: GenericFormFields.RadioOptionField;

    constructor() {
        console.log('cake constructor')
        super();
        this.maxColors = 4;
        this.layers = { id: "layers", title: "Layers | Per Tier", options: [{ name: "2", price: 1 }] }
        this.flavors = { id: "flavors", title: "Flavor Offerings", options: [{ name: "Vanilla | A rich classic, more flavors to come.", price: 1 }] }
        this.style = { id: "style", title: "Style", options: [{ name: "Simple | Yet beautiful! Stylishly decorated and an eye-catching presentation.", price: 1 }] }
        this.event = { id: "event", title: "Event | Please provide specifics in Final Comments", options: [{ name: "Birthday", price: 1 }] }
        console.log(this)
        return this;
    }

}