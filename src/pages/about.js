import React from "react"
import { Link } from 'gatsby';
import Layout from '../component/layout';
const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p> Hi I'm Varoon </p>
            <p> Need a developer? <Link to ="/contact">Contact me</Link></p>
            
        </Layout>

    )
}

export default AboutPage