import React from 'react'
//import Switch from 'react-bootstrap/esm/Switch'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from '../Navbar'
import Display from './Display'
import Owner from './Ownerf'
import Admin from './Adminf'


export default function Food() {
    return (
        <>
        <Navbar></Navbar>

        <Display></Display>
         

        </>
    )
}
