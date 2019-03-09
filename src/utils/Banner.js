import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export function Banner({title, subtitle, children}) {
  return (
    <BannerWrapper>
      <h1 className='title'>{title}</h1>
      <h4 className='subtitle' >{subtitle}</h4>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div `
   margin-bottom: 3rem;
   text-align:center;
   .title{
       color: ${styles.colors.mainWhite};
       font-size: 3.5rem;
       text-transform: uppercase;
       ${styles.letterSpacing({spacing: '0.25rem'})};    
   }
   .subtitle{
       color: ${styles.colors.mainWhite};
       font-size: 1.5rem;
       ${styles.letterSpacing({spacing: '0.5rem'})};
      
   }
`
Banner.defaultProps = {
    title: 'default title',
}