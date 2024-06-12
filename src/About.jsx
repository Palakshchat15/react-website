import React from 'react'
import web from "../src/Images/img4.png"
import { NavLink } from 'react-router-dom';
import Common from './Common'
const About = () => {
    return (
        <>
        <Common name='Welcome to About page'  imgsrc={web} visit='/contact' btname="Contact now"/>
        </>
    );
};
export default About;