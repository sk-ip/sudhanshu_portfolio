import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
	return <Layout>
		<SEO title="Error" description="This is the Error page"/>
		<main className="error-page">
			<div className="error-container">
				<h1>opps it's a dead end!!</h1>
				<Link to="/" className="btn center-btn">back home</Link>
			</div>
		</main>
	</Layout>
}

export default Error
