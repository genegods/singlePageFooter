import React from 'react'
import { FooterData } from '../data/FooterData'
import { Link} from 'react-scroll'

const Footer = () => {
  return (
   
  <React.Fragment>
  <main>
    <div className='bg-white text-black font-semibold py-5 px-2'>
      <div className='md:flex md:justify-center md:space-x-3'>
        {
            FooterData.map((item) => {
                return(
                    <div key={item.id}>
                        <div>
                            <Link to={item.path} spy={true} smooth={true} offset={2} duration={500}>
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    </div>
                )
            })
        }
      </div>
      <p className='text-center'>Gooddo Micro Projects © 2023</p>
    </div>
  </main>
</React.Fragment>
  )
}

export default Footer