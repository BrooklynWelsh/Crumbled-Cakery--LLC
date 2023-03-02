import type { TierUpdate, TierTypes, LayerType, DiameterType, FlavorType } from './ICakeUpdate'

export default class Tier {
  id: number
  layers: Array<{ layerIndex: number }>
  diameter: DiameterType
  flavor: FlavorType

  constructor (id: number, layers: LayerType = 1, diameter: DiameterType = 10, flavor: FlavorType = 'vanilla') {
    this.id = id
    this.layers = []
    for (let i = 1; i <= layers; i++) {
      this.layers.push({ layerIndex: i })
    }
    this.diameter = diameter
    this.flavor = flavor
  }

  get (field: 'layers' | 'diameter' | 'flavor'): TierTypes {
    return this[field]
  }

  set (update: TierUpdate): void {
    if (update.field === 'layers') {
      while (this.layers.length !== update.value) {
        if (this.layers.length < update.value) {
          this.layers.push({ layerIndex: this.layers.length + 1 })
        } else if (this.layers.length > update.value) {
          this.layers.pop()
        }
      }
    } else {
      this[update.field] = update.value
    }
  }

  getCircumference (): number {
    return this.diameter * 3.14
  }
}
