import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby';
import { styles } from '../../utils'


export default class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let us tell you" title="our mission"/>
        <QuickinfoWrapper>
            <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure veniam repellat nostrum laboriosam unde ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex porro quas, voluptas perferendis optio consectetur animi quaerat magnam possimus consequatur harum nostrum unde inventore delectus natus ipsam vero dolorum. maxime harum? Autem vel debitis reiciendis in cum. Eos ipsa similique debitis cumque officiis?</p>
        </QuickinfoWrapper>
        <Link to='/about/' style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
        </Link>
      </Section>
    )
  }
}

const QuickinfoWrapper = styled.div `
    width: 90%;
    margin: 2rem auto;
    .text{
        line-height: 2rem;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }
    @media (min-width: 768px){
        width:70%;
    }
    @media (min-width: 992px){
        width:60%;
    }
`