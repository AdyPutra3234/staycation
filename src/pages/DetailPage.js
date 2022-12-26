import React, { Component } from 'react';

import Header from '../elements/Header';
import PageTitle from '../elements/PageTitle';
import FeaturedImage from '../elements/FeaturedImage';

import ItemDetails from '../json/itemDetails.json';
import PageDetailDescription from '../elements/PageDetailDescription';
import BookingForm from '../elements/BookingForm';
import Categories from '../elements/Categories';
import Footer from '../elements/Footer';

export default class DetailPage extends Component {

    componentDidMount() {
        window.title = 'Detail Page';
        window.scrollTo(0,0);
    }


  render() {
    const breadcrumb = [
        {pageTitle: 'Home', pageHref: '/'},
        {pageTitle: 'House Detail', pageHref: ''}
    ];

    return (
        <>
            <Header {...this.props}/>
            <PageTitle breadcrumb={breadcrumb} data={ItemDetails} />
            <FeaturedImage data={ItemDetails.imageUrls} />
            <section className='container'>
                <div className='row'>
                    <div className='col-7 pr-5'>
                        <PageDetailDescription data={ItemDetails}/>
                    </div>
                    <div className='col-5'>
                        <BookingForm itemDetails={ItemDetails}/>
                    </div>
                </div>
            </section>
            <Categories data={ItemDetails.categories} />
            <Footer/>
        </>
    )
  }
}
