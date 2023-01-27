import { createCheckers } from 'ts-interface-checker'
import type { CheckerT } from 'ts-interface-checker'
import ICakeUpdateTI from './ICakeUpdate-ti'
const checkers = createCheckers(ICakeUpdateTI) as { ICakeUpdate: CheckerT<CakeUpdate> }

export type LayerType = 1 | 2 | 3 | 4
export type DiameterType = 4 | 6 | 8 | 10 | 12
export type TierCountType = 1 | 2 | 3 | 4
export type FlavorType = string

interface LayerUpdate {
  field: 'layers'
  value: LayerType
  tierIndex: number
}

interface FlavorUpdate {
  field: 'flavor'
  value: FlavorType
  tierIndex: number
}

interface DiameterUpdate {
  field: 'diameter'
  value: DiameterType
  tierIndex: number
}

export interface TierCountUpdate {
  field: 'tiers'
  value: number
}

export type TierTypes = DiameterType | LayerType | FlavorType
export type TierUpdate = LayerUpdate | FlavorUpdate | DiameterUpdate

export interface ICakeUpdate {
  update: TierUpdate | TierCountUpdate
}

export class CakeUpdate implements ICakeUpdate {
  update: TierUpdate | TierCountUpdate

  constructor (updateObject: ICakeUpdate) {
    if (updateObject.update.field !== 'flavor' && updateObject.update.field !== 'flavor') {
      updateObject.update.value = parseInt(updateObject.update.value)
    }
    if (checkers.ICakeUpdate.test(updateObject)) {
      this.update = updateObject.update
    } else {
      throw new TypeError('Expected an object that conforms to ICakeUpdate, but object failed the type check.')
    }
  }
}
