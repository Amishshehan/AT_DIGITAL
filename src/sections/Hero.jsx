import React from 'react';
import HeroImg from '../assets/hero.png';
import Button from "../components/Button";

const Hero = () => {
  return (

    <section className='wide:relative wide:flex tablet:block items-center'>
      <dev>
        <img
          src={HeroImg}
          alt='logo'
          width={2500}
          className='flex-shrink-0'
        />
      </dev>
      <div className='tablet:hidden wide:absolute normal::absolute flex flex-col items-start wide:bottom-10 wide:left-20 normal:left-[60px] normal:bottom-10 tablet:left-0 bghero p-4 gap-5 pt-6 px-10 pb-8 wide:w-[630px] normal:w-[622px] tablet:w-full'>
        <h1 className='font-inter text-4xl font-bold text-white leading-[48px] tracking-[-0.96px] capitalize'>
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <Button label='Get free consultation' />
      </div>
      <div className='wide:hidden normal:hidden tablet:block items-start wide:left-20 bghero p-4 gap-5 pt-6 px-10 pb-8 tablet:w-full'>
        <h1 className='font-inter text-4xl font-bold text-white tablet:self-stretch mobile:self-stretch mobile:text-3xl leading-[48px] tracking-[-0.96px] capitalize mb-5'>
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <Button label='Get free consultation'/>
      </div>
      
    </section>

  );
};

export default Hero;
