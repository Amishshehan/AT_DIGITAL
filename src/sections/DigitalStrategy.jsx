import React from 'react'
import searchImg from '../assets/search.png';
import Button from '../components/Button';

const DigitalStrategy = () => {
  return (
    <section className='flex flex-row-reverse items-center gap-[108px] wide:justify-center normal:justify-center normal:gap-5 tablet:wide:[688px] mobile:w-[375px] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-5 mb-10 tablet:my-10'>
      <img src={searchImg} className='wide:w-[414px] normal:w-[346px] tablet:w-[275px] mobile:w-[275px]' alt='Web and Mobile' />
      <div className='flex flex-col mobile:items-center wide:w-[542px] normal:w-[530px] tablet:w-[393px] mobile:w-[275px] gap-5'>
        <h2 className='text-primary text-2xl font-semibold tracking-[0.4px] leading-[33px] mobile:text-center'>
          Digital Strategy Consulting
        </h2>
        <p className='self-stretch text-black font-inter text-base font-normal leading-normal max-mobile:w-[335px] mobile:text-center'>
          Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every 
          business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business. Your web and mobile Apps are pieces 
          of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
        </p>
        <div className='flex items-center'>
          <Button label='LEARN MORE' />
        </div>
      </div>
    </section>
  )
}

export default DigitalStrategy