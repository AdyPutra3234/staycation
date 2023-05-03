import React from 'react';
import Fade from 'react-reveal/Fade';

export default function FeaturedImage({ data }) {
  return (
    <section className='container'>
        <div className='container-grid sm'>
            {data.map((item, index) => {
                return (
                    <div
                        key={`FeaturedImage-${index}`} 
                        className={`item ${index > 0 ? 'column-5 row-1' : 'column-7 row-2'}`}
                    >
                        <Fade bottom delay={300 * index}>
                            <div className='card h-100'>
                                <figure className='img-wrapper'>
                                    <img className='img-cover' src={`${process.env.REACT_APP_BASE_URL}/${item.imageUrl}`} alt={item._id} />
                                </figure>
                            </div>
                        </Fade>    
                    </div>
                );
            })}
        </div>
    </section>
  )
}
