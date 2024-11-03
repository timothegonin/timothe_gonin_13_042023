import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/bank-tree.jpeg')] bg-cover bg-no-repeat bg-[center_top_-3rem] h-[300px] relative min-[920px]:bg-[center_top_-12rem] min-[920px]:h-[400px]">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="text-base m-0 font-bold leading-5 min-[920px]:text-2xl min-[920px]:leading-6">
          No fees.
        </p>
        <p className="text-base m-0 font-bold leading-5 min-[920px]:text-2xl min-[920px]:leading-6">
          No minimum deposit.
        </p>
        <p className="text-base m-0 font-bold leading-5 min-[920px]:text-2xl min-[920px]:leading-6">
          High interest rates.
        </p>
        <p className="mb-0 mt-4 text-sm leading-4 min-[920px]:text-xl min-[920px]:leading-5">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  )
}

export default Hero
