import React from 'react'
import FooterLogo from '../assets/Logo.png'
import { footerLinks1, footerLinks2 } from '../constants/constants'

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <dev className='max-container w-full padding-f flex flex-col items-center gap-10'>
        {/* start 503 */}
        <div className='flex items-start wide:justify-between self-stretch normal:gap-28 tablet:flex-col tablet:gap-[60px] mobile:flex-col mobile:gap-[60px]-'>
          {/* Start of 500 */}
          <div className='flex flex-col items-start gap-5 max-w-[413px] mobile:self-stretch'>
            <a href='/'>
              <img
                src={FooterLogo}
                alt='logo'
                height={25}
                className='m-0'
              />
            </a>
            <p className='font-lato text-white text-base font-normal leading-normal'>
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>
          {/* End of 500 */}
          {/* Start of 502 */}
          <div className='flex items-start wide:gap-32 normal:gap-5 normal:flex-[1_0_0] tablet:gap-[79px]  mobile:flex-col mobile:gap-10 mobile:self-stretch '>
            {footerLinks1.map((section) => (
              // Start of 501
              <div className='flex flex-col items-start gap-3 wide:w-[197px] normal:w-[255px] tablet:w-[216px] mobile:w-[216px]' key={section.title}>
                <h4 className='font-inter text-xl leading-normal font-semibold gap-3 text-white'>
                  {section.title}
                </h4>
                <ul className='flex flex-col items-start gap-3'>
                  {section.links.map((link) => (
                    <li
                      className='font-inter text-sm leading-normal text-white font-medium capitalize'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              // End of 501
            ))}
            {footerLinks2.map((section) => (
              // Start of 496
              <div className='flex flex-col items-start gap-3 wide:w-[197px] normal:flex-[1_0_0] tablet:w-[216px] mobile:w-[216px]' key={section.title}>
                <h4 className='font-inter text-xl leading-normal font-semibold gap-3 text-white'>
                  {section.title}
                </h4>
                <ul className='flex flex-col items-start gap-3 self-stretch'>
                  {section.links.map((link) => (
                    <li
                      className='font-inter text-sm leading-normal text-white font-medium capitalize'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              // End of 496
            ))}
          </div>
          {/* End of 502 */}
        </div>
        {/* End of 503 */}
        {/* Start of 505 */}
        <div className='flex flex-col items-center gap-2 wide:w-[630px] normal:w-[630px] tablet:w-[630px] mobile:w-full mobile:self-stretch'>
          <hr className='w-full h-[1px] bg-white' />
          <dev className='flex items-center justify-center gap-4'>
            <p className='font-inter text-sm font-medium leading-normal capitalize text-white'>
              Privacy Policy | Terms & Conditions
            </p>
          </dev>
        </div>
        {/* End of 505 */}
      </dev>
    </footer >
  )
}

export default Footer