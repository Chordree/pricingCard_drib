import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Click from './components/clicker'
import PricingCard from './components/pricingCard/PricingCard'
import styles from './App.module.css'

function App() {

  const cards = [
    {
      label : 'Start-Up',
      price : "Free",
      image : '/images/bike.png',
      imageAlt : 'moving bike with clouds',
      benefits: [
        'unlimited downloads',
        'Email support',
        'Limited Access'
      ]
    },
    {
      label : 'Pro',
      price : "$49",
      duration : '/annum',
      image : '/images/car.png',
      imageAlt : 'moving car with clouds',
      benefits: [
          'Upto 10 Users',
          'Email and call support',
          '1 year Access'
      ]
    },
    {
      label : 'Enterprise',
      price : "$999",
      duration : 'unlimited',
      image : '/images/plane.png',
      imageAlt : 'moving plane with clouds',
      benefits: [
        'Unlimted acces with terabytes of cloud storage',
        '24/7 on demand request',
        'Lifetime Access'
      ]
    }

  ]

  return (
    <div>
      <div className={styles.bg}>
          <div className={styles.info}>
              <h1 className={styles.heading}>Choose your plan</h1>
              <p className={styles.description}>
                some random text just checking out
                the sampling effects of this background
              </p>
          </div>
      </div>

      <div className={styles.prices +' container'}>

      {cards.map((card)=> (

        <PricingCard key = {card.price}
          label = {card.label}
          price = {card.price}
          duration = {card.duration}
          image = {card.image}
          imageAlt = {card.imageAlt}
          benefits = {card.benefits}
        />

      ))}

      </div>

    </div>
  )
}

export default App
