import React from 'react'
import Fade from 'react-reveal/Fade';

import heroImage from '../assets/images/hero_img.jpg'
import frame from '../assets/images/frame.jpg'
import ic_cities from '../assets/icons/ic_cities.svg'
import ic_travelers from '../assets/icons/ic_traveler.svg'
import ic_treasure from '../assets/icons/ic_treasure.svg'

import Button from '../components/Button'

import numberFormator from '../utility/numberFormator';


export default function Hero(props) {

  const showMostPicked = () => {
    window.scrollTo({
        top: props.refMostPicked.current.offsetTop - 30,
        behavior: "smooth",
    });
  };

  return (
    <Fade bottom >
        <section className='container pt-4'>
            <div className='row align-item-center'>
                <div className='col-auto pr-5' style={{width: 500}}>
                    <h1 className='font-weight-bold line-height-1 mb-3'>
                        Forget Busy Work, <br/>
                        Start Next Vacation
                    </h1>
                    <p className='mb-4 font-weight-light text-gray-500 w-75' style={{lineHeight: "170%"}}>
                        We provide what you need to enjoy your 
                        holiday with family. Time to make another 
                        memorable moments
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className='row' style={{marginTop: "80px"}}>
                        <div className='col-auto' style={{marginRight: 35}}>
                            <img src={ic_travelers} alt="travelers icon" width="36" height="36" />
                            <h6 className='mt-3'>
                                {numberFormator(props.data.travelers)} <span className='text-gray-500 font-weight-light'>Travelers</span>
                            </h6>
                        </div>
                        <div className='col-auto' style={{marginRight: 35}}>
                            <img src={ic_cities} alt="cities icon" width="36" height="36" />
                            <h6 className='mt-3'>
                                {numberFormator(props.data.cities)} <span className='text-gray-500 font-weight-light'>Cities</span>
                            </h6>
                        </div>
                        <div className='col-auto'>
                            <img src={ic_treasure} alt="treasure icon" width="36" height="36" />
                            <h6 className='mt-3'>
                                {numberFormator(props.data.treasures)} <span className='text-gray-500 font-weight-light'>Treasure</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='col-6 pl-5'>
                    <div style={{width: 520, height: 410}}>
                        <img src={heroImage} alt="room with couches" className='img-fluid position-absolute' style={{margin: "-30px 0 0 -30px", zIndex: 1}}/>
                        <img src={frame} alt="room with couches" className='img-fluid position-absolute' style={{margin: "0 -15px -15px 0"}}/>
                    </div>
                </div>
            </div>
        </section>
    </Fade>
  );
}
