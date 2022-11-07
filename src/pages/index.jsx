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
          <a class="box-about" href="/Helenite/tags/productivity">
            <img src="https://source.unsplash.com/random/900×800/?productivity"></img>
            <span>Productivity</span>
          </a>
          <a class="box-about" href="/Helenite/tags/psychology">
            <img src="https://source.unsplash.com/random/900×800/?psychology"></img>
            <span>Psychology</span>
          </a>
          <a class="box-about" href="/Helenite/tags/programming">
            <img src="https://source.unsplash.com/random/900×800/?programming"></img>
            <span>Programming</span>
          </a>
          <a class="box-about" href="/Helenite/tags/mathematics">
            <img src="https://source.unsplash.com/random/900×800/?mathematics"></img>
            <span>Mathematics</span>
          </a>
          <a class="box-about" href="/Helenite/tags/superuser">
            <img src="https://source.unsplash.com/random/900×800/?mac"></img>
            <span>SuperUser</span>
          </a>
          <a class="box-about" href="/Helenite/tags/knowledge">
            <img src="https://source.unsplash.com/random/900×800/?knowledge"></img>
            <span>Knowledge</span>
          </a>
        </div>

        <Pager context={pageContext} />
    </Layout>
  )
}

// export const query = graphql`
//   query($skip: Int!, $limit: Int!) {
//     notes: allMdx(
//       skip: $skip
//       limit: $limit
//       filter: { fields: { visibility: { eq: "public" } } }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//             title
//             date
//             excerpt
//           }
//           frontmatter {
//             tags
//           }
//         }
//       }
//     }
//   }
// `
