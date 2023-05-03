import React from 'react'
import ReactHtmlParser from 'react-html-parser';

export default function PageDetailDescription({ data }) {
  return (
    <main>
        <h4>About the place</h4>
        {ReactHtmlParser(data.description)}
        <div className='row' style={{marginTop: 30}}>
            {data.featureId.map((feature, index) => {
                return (
                    <div
                        key={`feature-${index}`}
                        className='col-3'
                        style={{marginBottom: 20}}
                    >
                        <img
                            width='38'
                            className='d-block mb-2'
                            src={`${process.env.REACT_APP_BASE_URL}/${feature.category.imageUrl}`}
                            alt={feature.category.name} />
                        {" "}
                        <span>{feature.qty}</span>
                        {" "}
                        <span className='text-gray-500 font-weight-light'>
                            {feature.category.name}
                        </span>
                    </div>
                );
            })}
        </div>
    </main>
  )
}
