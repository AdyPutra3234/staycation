import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../components/Button'

export default function Categories({ data }) {
    return data.map((category, catIndex) => {
        return (
            <section className='container' key={`category-${catIndex}`}>
                <Fade bottom>
                    <h4 className='mb-3 font-weight-medium'>{category.name}</h4>
                    <div className='container-grid'>
                        {category.itemId.length === 0 ? (
                            <div className='row'>
                                <div className='col-auto align-items-center'>
                                    There is no property at this category
                                </div>
                            </div>
                        ) : category.itemId.map((item, itemIndex) => {
                            return (
                                <div className='item column-3 row-1' key={`category-${catIndex}-item-${itemIndex}`}>
                                    <Fade bottom delay={200 * itemIndex}>
                                        <div className='card'>
                                            {item.isPopular && (
                                                <div className='tag font-weight-bold'>
                                                    Popular{" "}
                                                    <span className='font-weight-light'>Choice</span>
                                                </div>
                                            )}
                                            <figure className='img-wrapper' style={{height: 180}}>
                                                <img src={`${process.env.REACT_APP_BASE_URL}/${item.imageId[0].imageUrl}`} alt={item.title} className='img-cover'/>
                                            </figure>
                                            <div className='meta-wrapper'>
                                                <Button type='link' href={`/properties/${item._id}`} className='stretched-link d-bok text-gray-800'>
                                                    <h5 className='h4'>{item.title}</h5>
                                                </Button>
                                                <span className='text-gray-500'>
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        })}
                    </div>
                </Fade>
            </section>
        )
    })
}
