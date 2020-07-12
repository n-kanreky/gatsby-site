import React from "react"
import Layout from "../components/layout.js"
import styled from "styled-components"

const H1red = styled.h1`
  color: red;
`

const BlogPage = () => {
  return (
    <div>
      <Layout>
        <H1red>Gatsby Blog Site</H1red>
      </Layout>
    </div>
  )
}

export default BlogPage
