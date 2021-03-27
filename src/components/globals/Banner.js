import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { setColor, setRem, setLetterSpacing, setBorder, setBackground, media } from '../../styles'

const fadeIn = (start, point, end) => {
    const animation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(${start})
    }
    50%{
        opacity: 0.5;
        transform: translateY(${point})
    }
    100%{
        opacity: 1;
        transform: translateY(${end})
    }
`
    return css`animation: ${animation} 3s ease-in-out`
};

const displayImg = (image) => {
    return image ? <div className='logo-img'>
        <img src={image} alt='about us' />
    </div> : null
};


const Banner = ({ className, title, text, children, greeting, img }) => {
    return (
        <div className={className}>
            {displayImg(img)}
            <h1>{greeting}<span>{title}</span></h1>
            <div className='info'>
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}

const BannerWrapper = styled(Banner)`
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(3px);
    text-align: center;
    padding: ${setRem(60)} ${setRem(32)};
    ${setLetterSpacing(3)};
    color:${setColor.mainWhite};
    .logo-img{
        img{
        width: 300px;
        }
        margin-bottom: ${setRem(50)};

    }
    h1{
        text-transform: capitalize;
        font-size: ${setRem(36)};
        color:${setColor.mainWhite};
        span{
            color:${setColor.mainYellow}
        }
    }
    p{
        width: 85%;
        margin: 0 auto;
    }
    ${media.tablet`
        width: 70vw;
        ${setBorder({ width: '6px', color: setColor.mainWhite })};
        p{
            width: 75% ;
        }`} 

    h1{
        ${fadeIn('100%', '-10%', '0%')};
        /*animation*/
    }
    .info{
        ${fadeIn('-100%', '10%', '0%')};
        /*animation*/ 
    }

`

export default BannerWrapper
