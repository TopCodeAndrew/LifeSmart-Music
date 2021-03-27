import React from 'react'
import Hero from '../globals/Hero'
import homeImg from '../../images/homeBcg.jpeg'
import logo from '../../images/LifeSmart-Logo.png'
import Banner from '../globals/Banner'
import { PrimaryBtn } from '../globals/Buttons'


const Header = () => {
    return (
        <Hero img={homeImg} position='right'>
            <Banner img={logo} greeting='MUSIC INSTRUCTION ' title='DONE RIGHT' text='Online or In-Home Lessons in Guitar, Ukulele, Bass, Mandolin, Voice, and Keyboard. ' >
                <PrimaryBtn t='2rem'>Learn More</PrimaryBtn>
                {/* <PrimaryBtn as="a" href="https://www.google.com">View Deets</PrimaryBtn> */}
            </Banner>
        </Hero>
    )
};

export default Header
