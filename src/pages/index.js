import React from "react"
import { Link } from "gatsby"

import Carousel from 'react-bootstrap/Carousel';
import Item from 'react-bootstrap/CarouselItem';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FilterBar from '../components/filter-bar';

import Waffles from '../images/waffles-slider.png';
import Cereal from '../images/cereal.jpg';

import '../index.css';


const IndexPage = () => (
  <>
    <Navbar />
    <div className="body-container">
    <Carousel id="main-carousel">
      <Item>
        <img src={Waffles} />
      </Item>
      <Item>
        <img src={Cereal} />
      </Item>
    </Carousel>
    <FilterBar heading="OUR PRODUCTS" />
    {/* <Layout>
      <SEO title="Waffles" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout> */}
    <p className="pg-main"><em>At Van’s Foods, we’re proud to offer you and your family wholesome, nutritious foods that are seriously delicious.</em></p>
    <Footer />
    </div> 
  </>
)

export default IndexPage
