/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-namespace */
import * as GenericFieldTypes from './GenericOrderFormFields'

export interface IDefaultOrderForm {
  // Title / info vars
  productName: string
  maxColors: number
  startingPrice: number
  imageFilePath: string

  // Form input vars
  count: GenericFieldTypes.CountField
  style: GenericFieldTypes.RadioInput
  colors: GenericFieldTypes.FreeTextInput
  addOns: GenericFieldTypes.FreeTextInput
  comments: GenericFieldTypes.FreeTextInput
  nonDefaultOptions: GenericFieldTypes.ValidFormField[] | null
}

export type test = GenericFieldTypes.ValidFormField & IDefaultOrderForm

export class DefaultOrderForm implements IDefaultOrderForm {
  productName!: string
  maxColors!: number
  startingPrice!: number
  imageFilePath!: string
  count!: GenericFieldTypes.CountField
  style!: GenericFieldTypes.RadioInput
  colors!: GenericFieldTypes.FreeTextInput
  addOns!: GenericFieldTypes.FreeTextInput
  comments!: GenericFieldTypes.FreeTextInput
  nonDefaultOptions!: GenericFieldTypes.ValidFormField[]

  public keys<T extends IDefaultOrderForm>(): Array<keyof T> {
    return Object.keys(this) as Array<keyof T>
  }

  // Return all fields that represent option objects (i.e. exclude primitives and any non-valid objects)
  public getOptions (): Map<number, GenericFieldTypes.ValidFormField> {
    const options: Map<number, GenericFieldTypes.ValidFormField> = new Map()
    for (const key of this.keys()) {
      const value = this[key]
      if (GenericFieldTypes.isFormField(value)) {
        // If valid and default field, check index and add to map
        if (options.has(value.index)) {
          throw new Error('Duplicate option index found, aborting form creation.')
        }
        options.set(value.index, value)
      } else if (Array.isArray(value)) {
        // Unpack non-default options
        for (const nonDefaultOption of value) {
          if (GenericFieldTypes.isFormField(nonDefaultOption)) {
            if (options.has(nonDefaultOption.index)) {
              throw new Error('Duplicate option index found, aborting form creation.')
            }
            options.set(nonDefaultOption.index, nonDefaultOption)
          }
        }
      }
    }
    // Sort map by indices
    return new Map([...options].sort((a, b) => a[0] - b[0]))
  }

  constructor (productObject: IDefaultOrderForm) {
    Object.assign(this, productObject)
    return this
  }
}
