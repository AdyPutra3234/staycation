import React from 'react'

import propTypes from 'prop-types';
import Button from '../Button';

import './index.scss';

export default function BreadCrumb(props) {
  return (
    <nav className='breadcrumb'>
        <ul>
            {props.data.map((item, index) => {
                return (
                    <li 
                        className={`breadcrumb-item ${index === props.data.length -1 ? 'active': ''}`}
                        key={`breadcrumb-${index}`}
                    >
                        {index === props.data.length - 1 ? ( item.pageTitle ) : (
                            <Button type='link' href={item.pageHref}>
                                {item.pageTitle}                                
                            </Button>
                        )}
                    </li>
                );
            })}
        </ul>
    </nav>
  )
}

BreadCrumb.propTypes = {
    data: propTypes.array,
}
