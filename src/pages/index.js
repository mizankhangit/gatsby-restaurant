import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {HomeHeader, Banner, BannerButton} from '../utils'
import img from '../images/bcg/homeBcg.jpg'
import Quickinfo from '../components/HomePageComponents/Quickinfo'
import Gallery from '../components/HomePageComponents/Gallery.1'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Restaurant" subtitle="The Best Restaurant Ever">
        <BannerButton style={{margin: '2rem auto'}}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <Quickinfo/>
    <Gallery/>
  </Layout>
)

export default IndexPage
