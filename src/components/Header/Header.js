import React from 'react'
import MenuItem from './MenuItem'
import { getMenuOptions } from '../../utils'

const options = getMenuOptions()

const Header = () => (
  <section className="w-100 dt h3 f6 mb2">
    <div className="dtc v-mid">
      <div className="w-100 w-third-ns dib-ns red ttu">
        <h1>Netflix Roulette</h1>
      </div>
      <div className="w-100 w-two-thirds-ns tr-ns dib-ns f5">
        <ul className="list ph0 mh0">
          {options.map((option, index) => (
            <MenuItem {...option} key={index} />
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Header
