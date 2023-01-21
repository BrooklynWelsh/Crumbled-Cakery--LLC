import type { TierUpdate, TierTypes, LayerType, DiameterType, FlavorType } from './ICakeUpdate'

export default class Tier {
  id: number
  layers: LayerType
  diameter: DiameterType
  flavor: FlavorType

  constructor (id: number, layers: LayerType = 1, diameter: DiameterType = 10, flavor: FlavorType = 'vanilla') {
    this.id = id
    this.layers = layers
    this.diameter = diameter
    this.flavor = flavor
  }

  get (field: 'layers' | 'diameter' | 'flavor'): TierTypes {
    return this[field]
  }

  set (update: TierUpdate): void {
    this[update.field] = update.value
  }
}
