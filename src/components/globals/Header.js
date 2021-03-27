import React from 'react'
import styled from 'styled-components'
import { setColor } from '../../styles'

const Header = () => {
    return (
        <HeaderWrapper>test

        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    z-index: 1;
    backdrop-filter: blur(3px);
    height: 5vh;
    max-height: 50px;
    background: ${setColor.mainBlack};
    opacity:.9;

    color: ${setColor.mainWhite};
    position: sticky;
    top: 0px;
    border-bottom: 1px solid ${setColor.mainYellow}

`

export default Header

