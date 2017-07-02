import React from 'react'
import { Link } from 'react-router-dom'
import { getMenuOptions } from '../../utils'

const options = getMenuOptions()

const Header = () => (
  <section className="w-100 ph3 dt h3 f6">
    <div className="dtc v-mid">
      <div className="w-100 w-third-ns dib-ns red ttu">
        <h1>Netflix Roulette</h1>
      </div>
      <div className="w-100 w-two-thirds-ns dib-ns f5">
        <ul className="list">
          {options.map((option, index) => (
            <li className="dib-ns ph2" key={index}>
              <Link to={option.path} className="link white normal pv3 ph2">
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Header
