import React from 'react';
import {NavLink} from "react-router-dom";
import "./nav.css"

export default function (){
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active selected">Welcome</NavLink>
                <NavLink to="/our-macarons" className="nav-link" activeClassName="active selected">Our Macarons</NavLink>
                <NavLink to="/gifts-parties" className="nav-link" activeClassName="active selected">Gifts &amp; Parties</NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="active selected">Contact</NavLink>
            </li>
        </ul>
    )
}