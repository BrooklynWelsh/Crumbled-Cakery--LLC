import type { CakeUpdate, TierUpdate, TierCountUpdate } from './ICakeUpdate'
import Tier from './Tier'

import { createCheckers } from 'ts-interface-checker'
import type { CheckerT } from 'ts-interface-checker'
import ICakeUpdateTI from './ICakeUpdate-ti'
const checkers = createCheckers(ICakeUpdateTI) as { TierUpdate: CheckerT<TierUpdate>, TierCountUpdate: CheckerT<TierCountUpdate> }

export default class CakeBuilder {
  #tiers: Tier[]
  #height: number // Height of each layer in pixels

  constructor (tiers: Tier[] = [new Tier(1)], height = 10) {
    this.#tiers = tiers
    this.#height = height
  }

  addTier (tier: Tier = new Tier(this.#tiers.length)): void {
    this.#tiers.push(tier)
  }

  pop (): Tier | undefined {
    return this.#tiers.pop()
  }

  getTiers (): Tier[] {
    return this.#tiers
  }

  getLastTier (): Tier {
    return this.#tiers[this.#tiers.length - 1]
  }

  getHeight (): number {
    return this.#height
  }

  setHeight (newHeight: number): void {
    this.#height = newHeight
  }

  editTier (update: TierUpdate): void {
    const tier = this.#tiers[update.tierIndex]
    if (tier === null || tier === undefined) throw new Error(`No tier available at index ${update.tierIndex}`)
    tier.set(update)
  }

  #updateTierCount (update: TierCountUpdate): void {
    while (this.#tiers.length !== update.value) {
      if (this.#tiers.length > update.value) {
        this.pop()
      } else if (this.#tiers.length < update.value) {
        this.#tiers.push(new Tier(this.#tiers.length + 1, 1, this.getLastTier()?.diameter, this.getLastTier()?.flavor))
      }
    }
  }

  #createTierElement = (): HTMLDivElement => {
    const tier = document.createElement('div')

    // Diameter for last tier, needed so that we can determine this tier's diameter
    const diameter = this.getLastTier().diameter

    tier.classList.add('tier')
    tier.style.width = `${50 * (diameter / 10)}%`
    tier.style.height = `${this.#height}%`
    return tier
  }

  #removeTierElement = (): void => {
    document.getElementsByClassName('tier')[document.getElementsByClassName('tier').length - 1].remove()
  }

  update (updateObject: CakeUpdate): void {
    if (checkers.TierUpdate.test(updateObject.update)) {
      this.editTier(updateObject.update)
    } else if (checkers.TierCountUpdate.test(updateObject.update)) {
      this.#updateTierCount(updateObject.update)
    } else {
      throw new Error('Unexpected update type.')
    }
  }
}
