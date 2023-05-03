import React from 'react'
import Fade from 'react-reveal/Fade';
import BreadCrumb from '../components/BreadCrumb';

export default function PageTitle({data, breadcrumb}) {
  return (
    <section className='container spacing-sm'>
        <Fade bottom>
            <div className='row align-items-center'>
                <div className='col'>
                    <BreadCrumb data={breadcrumb} />
                </div>
                <div className='col-auto text-center'>
                    <h3 className='h2'>{data.title}</h3>
                    <span className='text-gray-400'>
                        {data.city}, {data.country}
                    </span>
                </div>
                <div className='col'></div>
            </div>
        </Fade>
    </section>
  )
}
