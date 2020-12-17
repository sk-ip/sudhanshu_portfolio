import React from "react"
import Contact from "../components/Contact"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
    return (
        <Layout>
            <SEO title="Contact" description="This is Contact Me page"/>
            <Contact />
        </Layout>
    )
}

export default contact
