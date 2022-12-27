export interface RadioOption {
    name: string,
    price: number
}

export interface RadioOptionField {
    id: string,
    title: string,
    options: Array<RadioOption>,
}

export interface CountField extends RadioOptionField {
    minimum: string
}

export interface FreeTextField {
    id: string,
    title: string,
    description: string,
}

export interface ColorField extends FreeTextField {
    maxColors: number
}

export function isFreeTextField(field: FreeTextField | RadioOptionField): field is FreeTextField {
    return (field as FreeTextField).description !== undefined
}

export function isRadioField(field: RadioOptionField | FreeTextField): field is RadioOptionField {
    return (field as RadioOptionField).options !== undefined
}

export function isFormField(field: unknown): field is boolean | RadioOptionField | FreeTextField {
    return (field as RadioOptionField).options !== undefined || (field as FreeTextField).description !== undefined || false;
}

export function createFieldsElement(optionObject: RadioOptionField | FreeTextField): string {
    const fieldset = document.createElement('fieldset');

    const legendHtml = `<legend>${optionObject.title}</legend>`
    const legend = document.createElement(legendHtml)
    fieldset.prepend(legend)

    if (isRadioField(optionObject)) {
        for (const option of optionObject.options) {
            const id = option.name.toLowerCase()

            const radioHtml = `<label for="${id}>${option.name}</label> <input id="${id}" type="radio" name="${optionObject.title}" value="${option.name} />""`
            const thisOption = document.createElement(radioHtml);

            fieldset.appendChild(thisOption)
        }
    } else if (isFreeTextField(optionObject)) {
        const id = optionObject.title.toLowerCase()
        const freeTextHtml = `<label for="${id}">${optionObject.description}</label> <textarea form="order-form" id="${id}" name="${optionObject.title}" />`

        fieldset.appendChild(document.createElement(freeTextHtml))
    } else {
        throw new Error('Unknown element')
    }
}