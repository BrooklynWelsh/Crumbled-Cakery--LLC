export type ValidFormField = RadioInput | FreeTextInput & { key: string }
export interface RadioOption {
  index: number
  name: string
  price: number
}

export interface RadioInput {
  id: string
  index: number
  title: string
  options: RadioOption[]
}

export interface CountField extends RadioInput {
  minimum: number
}

export interface FreeTextInput {
  id: string
  index: number
  title: string
  description: string
}

export interface ColorField extends FreeTextInput {
  maxColors: number
}

export function isFreeTextInput (field: FreeTextInput | RadioInput): field is FreeTextInput {
  return (field as FreeTextInput).description !== undefined
}

export function isRadioField (field: RadioInput | FreeTextInput): field is RadioInput {
  return (field as RadioInput).options !== undefined
}

export function isFormField (field: unknown): field is ValidFormField {
  return (field as RadioInput).options !== undefined || (field as FreeTextInput).description !== undefined || false
}

export function createFieldsElement (optionObject: RadioInput | FreeTextInput): string {
  const fieldset = document.createElement('fieldset')

  const legendHtml = `<legend>${optionObject.title}</legend>`
  const legend = document.createElement(legendHtml)
  fieldset.prepend(legend)

  if (isRadioField(optionObject)) {
    for (const option of optionObject.options) {
      const id = option.name.toLowerCase()

      const radioHtml = `<label for="${id}>${option.name}</label> <input id="${id}" type="radio" name="${optionObject.title}" value="${option.name} />""`
      const thisOption = document.createElement(radioHtml)

      fieldset.appendChild(thisOption)
    }
  } else if (isFreeTextInput(optionObject)) {
    const id = optionObject.title.toLowerCase()
    const freeTextHtml = `<label for="${id}">${optionObject.description}</label> <textarea form="order-form" id="${id}" name="${optionObject.title}" />`

    fieldset.appendChild(document.createElement(freeTextHtml))
  } else {
    throw new Error('Unknown element')
  }
}
