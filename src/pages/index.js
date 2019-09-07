import React from "react"
import { Link } from "gatsby"

import Carousel from 'react-bootstrap/Carousel';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Waffles from '../images/waffles-slider.png';
import Cereal from '../images/cereal.jpg';


const IndexPage = () => (
  <>
    <Navbar />
    <Carousel>
      <Carousel.Item>
        <img src={Waffles} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Cereal} />
      </Carousel.Item>
    </Carousel>
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
    <Footer />
  </>
)

export default IndexPage
