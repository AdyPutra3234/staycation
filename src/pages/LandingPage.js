import React, { Component } from 'react'
import Header from '../elements/Header';
import Hero from '../elements/Hero';
import MostPicked from '../elements/MostPicked'
import Categories from '../elements/Categories';

// Json
import dataLandingPage from '../json/landingPage.json';


export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }
    
    render() {
        console.log(this.props);
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={dataLandingPage.hero} refMostPicked={this.refMostPicked}/>
                <MostPicked data={dataLandingPage.mostPicked} refMostPicked={this.refMostPicked}/>
                <Categories data={dataLandingPage.categories} />
            </>
        );
    }
}
