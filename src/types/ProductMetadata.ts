import fs from 'node:fs'

interface IProductMetadata {
  productName: string
  imageLoc: string
  link: string
}

export default class ProductMetadata implements IProductMetadata {
  productName: string
  imageLoc: string
  link: string

  constructor (jsonObject: IProductMetadata) {
    this.productName = jsonObject.productName
    this.imageLoc = (jsonObject.imageLoc)
    this.link = jsonObject.link
  }

  private isValidMetadata (productObject: IProductMetadata | object): productObject is IProductMetadata {
    const cast = productObject as IProductMetadata
    console.log('cast')
    console.log(cast)
    return fs.lstatSync((cast).imageLoc).isFile() && Object.prototype.hasOwnProperty.call(cast, 'productName') && Object.prototype.hasOwnProperty.call(cast, 'link')
  }
}
