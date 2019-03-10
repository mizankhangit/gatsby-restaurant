import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { styles, Section } from '../../utils'

const SINGLE_IMAGE = graphql`{
    img1: file(relativePath: {eq: "homeGallery/img-1.jpg"}){
        childImageSharp{
            fluid(maxWidth: 500){
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    img2: file(relativePath: {eq: "homeGallery/img-2.jpg"}){
        childImageSharp{
            fluid(maxWidth: 500){
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    img3: file(relativePath: {eq: "homeGallery/img-3.jpg"}){
        childImageSharp{
            fluid(maxWidth: 500){
            ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }

}
`

export default function Gallery() {
  return (
    <StaticQuery query={SINGLE_IMAGE} 
    render={data => {
    const img1 = data.img1.childImageSharp.fluid;
    const img2 = data.img2.childImageSharp.fluid;
    const img3 = data.img3.childImageSharp.fluid;
    return (
        <Section>
            <GalleryWrapper>
                <div className="item item1">
                    <Img fluid={img1}/>
                    <p className="info">awesome pizza</p>
                </div>
                <div className="item item2">
                    <Img fluid={img2}/>
                    <p className="info">awesome burger</p>
                </div>
                <div className="item item3">
                    <Img fluid={img3}/>
                    <p className="info">awesome pizza</p>
                </div>
            </GalleryWrapper>
        </Section>
    )
    } }
    />
  )
}

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1rem;
    .item{
        position: relative;
    }
    .info{
        position: absolute;
        top:0;
        left:0;
        background: ${styles.colors.mainYellow2};
        padding: 0.1rem 0.3rem;
    }
    @media(min-width: 576px){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
    }
    @media(min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
        .gatsby-image-wrapper{
            height: 100%;
        }
    }
    @media(min-width: 992px){
        .gatsby-image-wrapper{
            height: 100%;
        }
        grid-template-areas: 
        'one one two two' 
        'one one three three';
        .item1{
            grid-area: one;
        }
        .item2{
            grid-area: two;
        }
        .item3{
            grid-area: three;
        }
    }
    
    
`