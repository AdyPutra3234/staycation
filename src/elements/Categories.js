import React from 'react'
import Button from '../components/Button'

export default function Categories({ data }) {
    return data.map((category, catIndex) => {
        return (
            <section className='container' key={`category-${catIndex}`}>
                <h4 className='mb-3 font-weight-medium'>{category.name}</h4>
                <div className='container-grid'>
                    {category.items.length === 0 ? (
                        <div className='row'>
                            <div className='col-auto align-items-center'>
                                There is no property at this category
                            </div>
                        </div>
                    ) : category.items.map((item, itemIndex) => {
                        return (
                            <div className='item column-3 row-1' key={`category-${catIndex}-item-${itemIndex}`}>
                                <div className='card'>
                                    {item.isPopular && (
                                        <div className='tag font-weight-bold'>
                                            Popular{" "}
                                            <span className='font-weight-light'>Choice</span>
                                        </div>
                                    )}
                                    <figure className='img-wrapper' style={{height: 180}}>
                                        <img src={item.imageUrl} alt={item.name} className='img-cover'/>
                                    </figure>
                                    <div className='meta-wrapper'>
                                        <Button type='link' href={`/properties/${item._id}`} className='stretched-link d-bok text-gray-800'>
                                            <h5 className='h4'>{item.name}</h5>
                                        </Button>
                                        <span className='text-gray-500'>
                                            {item.city}, {item.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    })
}
