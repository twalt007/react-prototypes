import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from "./welcome";
import Nav from "./nav";
import OurMacarons from "./our_macarons";
import GiftsParties from "./gifts_parties";
import Contact from "./contact"

export default function(){
    return <div className="container">
        <Nav />
        <Route exact path="/" component={Welcome}></Route>
        <Route path="/our-macarons" component={OurMacarons}></Route>
        <Route path="/gifts-parties" component={GiftsParties}></Route>
        <Route path="/contact" component={Contact}></Route>

    </div>
}

