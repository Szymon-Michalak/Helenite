import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout/layout'
import NoteList from '../components/note-list'
import Pager from '../components/pager'
import '../styles/about.css'

export default function About({ pageContext, data }) {
  return (
    <Layout>
        <div class="container-about">
          <a class="box-about" href="/tags/productivity">
            <img src="https://source.unsplash.com/random/900×700/?productivity"></img>
            <span>Productivity</span>
          </a>
          <a class="box-about" href="/tags/psychology">
            <img src="https://source.unsplash.com/random/900×700/?psychology"></img>
            <span>Psychology</span>
          </a>
          <a class="box-about" href="/tags/programming">
            <img src="https://source.unsplash.com/random/900×700/?programming"></img>
            <span>Programming</span>
          </a>
          <a class="box-about" href="/tags/mathematics">
            <img src="https://source.unsplash.com/random/900×700/?mathematics"></img>
            <span>Mathematics</span>
          </a>
          <a class="box-about" href="/tags/superuser">
            <img src="https://source.unsplash.com/random/900×700/?mac"></img>
            <span>SuperUser</span>
          </a>
          <a class="box-about" href="/tags/knowledge">
            <img src="https://source.unsplash.com/random/900×700/?knowledge"></img>
            <span>Knowledge</span>
          </a>
        </div>

        <Pager context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    notes: allMdx(
      skip: $skip
      limit: $limit
      filter: { fields: { visibility: { eq: "public" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            title
            date
            excerpt
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
