import React, { Component } from 'react';
import { connect } from 'react-redux';

import withRouter from '../utility/withRouter';

import { getDataAsync } from '../store/slices/dataPage-slice';
import store from '../store/index';

import Header from '../elements/Header';
import PageTitle from '../elements/PageTitle';
import FeaturedImage from '../elements/FeaturedImage';

import PageDetailDescription from '../elements/PageDetailDescription';
import BookingForm from '../elements/BookingForm';
import Activities from '../elements/Activities';
import Footer from '../elements/Footer';
import { startCheckout } from '../store/slices/checkout-slice';

class DetailPage extends Component {

    constructor(props) {
        super(props);

        const pathName = this.props.location.pathname.split('/');
        const id = pathName[2];
        this._itemId = id;
    }

    componentDidMount() {
        window.title = 'Detail Page';
        window.scrollTo(0,0);

        const {data} = this.props;
        if (Object.keys(data).length === 0 || this._itemId !== data._id) {
            const urlPath = `/detail-page/${this._itemId}`;
            const page = 'detail';

            this.props.getDataAsync(urlPath, page);
        }
    }

    onCheckout(payload, href) {
        const newPayload = {
            ...payload,
            itemId: this._itemId, 
        };
        
        store.dispatch(startCheckout(newPayload))
        this.props.navigate(href);
    }

  render() {
    const breadcrumb = [
        {pageTitle: 'Home', pageHref: '/'},
        {pageTitle: 'House Detail', pageHref: ''}
    ];

    const { data } = this.props;

    if (Object.keys(data).length !== 0 && this._itemId === data._id) {
        return (
            <>
                <Header {...this.props}/>
                <PageTitle breadcrumb={breadcrumb} data={data} />
                <FeaturedImage data={data.imageId} />
                <section className='container'>
                    <div className='row'>
                        <div className='col-7 pr-5'>
                            <PageDetailDescription data={data}/>
                        </div>
                        <div className='col-5'>
                            <BookingForm itemDetails={data} startCheckout={(payload) => this.onCheckout(payload, '/checkout')}/>
                        </div>
                    </div>
                </section>
                <Activities data={data.activityId} />
                <Footer/>
            </>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }

  }
}

const mapStateToProps = state => ({
    data: state.dataPage.detail
});

export default withRouter(connect(mapStateToProps, {getDataAsync})(DetailPage));
