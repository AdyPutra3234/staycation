import React from 'react'

import Button from '../components/Button';
import IconText from '../parts/IconText';

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row'>

                <div className='col-auto mr-2'>
                    <IconText/>
                    <p className='brand-tagline'>
                        We kaboom your beauty holiday instantly and memorable.
                    </p>
                </div>

                <div className='col-2 mr-3'>
                    <h6 className='mt-2'>
                        For Beinners
                    </h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' href='/register'>New Account</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/properties'>Start Booking a Room</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/payments'>Use Payments</Button>
                        </li>
                    </ul>
                </div>

                <div className='col-2 mr-3'>
                    <h6 className='mt-2'>
                        Explore Us
                    </h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' href='/careers'>Our Careers</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/privacy'>Privacy</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/terms'>Term condition</Button>
                        </li>
                    </ul>
                </div>

                <div className='col-2 mr-3'>
                    <h6 className='mt-2'>
                        Connect Us
                    </h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' isExternal href='mailto:support@staycation.id'>support@staycation.id</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' isExternal href='tel:+6224448381234'>+62 2444 8381 234</Button>
                        </li>
                        <li className='list-group-item'>
                            <span>Staycation, kemang, Jakarta</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col text-center copyrights'>
                    Copyright 2022 - All rights reserved - Staycation
                </div>
            </div>
        </div>
    </footer>
  )
}
