import React from 'react'
import Hero from '../globals/Hero'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'
import { PrimaryBtn } from '../globals/Buttons'


const Header = () => {
    return (
        <Hero img={homeImg} position='left'>
            <Banner greeting='Welcome to ' title='Beachwalk Resort' text='Nostrud amet nulla ea sit magna id culpa. Mollit nulla consequat ex id labore tempor dolor fugiat cillum labore deserunt incididun' >
                <PrimaryBtn t='2rem'>View Deets</PrimaryBtn>
                {/* <PrimaryBtn as="a" href="https://www.google.com">View Deets</PrimaryBtn> */}
            </Banner>
        </Hero>
    )
};

export default Header
