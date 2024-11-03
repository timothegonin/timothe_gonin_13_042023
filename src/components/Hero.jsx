import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/bank-tree.jpeg')] bg-cover bg-no-repeat bg-[center_top_-12rem] h-[400px] relative">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

export default Hero
