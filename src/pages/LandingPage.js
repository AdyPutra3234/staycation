import React, { Component } from 'react'
import Header from '../elements/Header';
import Hero from '../elements/Hero';
import MostPicked from '../elements/MostPicked'
import Categories from '../elements/Categories';
import Testimony from '../elements/Testimony';
import Footer from '../elements/Footer';

import { connect } from 'react-redux';
import { getDataAsync } from '../store/slices/dataPage-slice';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = 'Staycation | Home';
        window.scrollTo(0,0);
        const {data} = this.props;

        if (Object.keys(data).length === 0) {
            const urlPath = '/landing-page';
            const page = 'home';

            this.props.getDataAsync(urlPath, page);
        }
    }
    
    render() {
        const { data } = this.props;

        if (Object.keys(data).length !== 0) {
            return (
                <>
                    <Header {...this.props}></Header>
                    <Hero data={data.hero} refMostPicked={this.refMostPicked}/>
                    <MostPicked data={data.mostPicked} refMostPicked={this.refMostPicked}/>
                    <Categories data={data.category}/>
                    <Testimony data={data.testimonial}/>
                    <Footer/>
                </>
            );
        }
    }
}

const mapStateToProps = state => ({
    data: state.dataPage.home
});

export default connect(mapStateToProps, {getDataAsync})(LandingPage);
