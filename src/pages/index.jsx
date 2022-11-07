import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout/layout'
import NoteList from '../components/note-list'
import Pager from '../components/pager'
import '../styles/about.css'
import '../styles/indexmobile.css'
import {useEffect, useState} from 'react';

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const useWindowWidth = () => {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
};

export default function About({ pageContext, data }) {
  console.log(pageContext);
  let currentWidth;
  if (typeof window !== 'undefined') currentWidth = useWindowWidth()
  else currentWidth = 700;
  let isMobile = currentWidth <= 500;
  if (isMobile)
  return (
    <Layout>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>

<div class="menu">
  <input type="checkbox" id="toggle" />
  <label id="show-menu" for="toggle">
    <div class="btn">
      <i class="material-icons md-36 toggleBtn menuBtn">category</i>
      <i class="material-icons md-36 toggleBtn closeBtn">close</i>
    </div>
    <a class="btn" href="Helenite/tags/productivity">
      <i class="material-icons md-36">task_alt</i>
    </a>
    <a class="btn" href="Helenite/tags/psychology">
      <i class="material-icons md-36">psychology</i>
    </a>
    <a class="btn" href="Helenite/tags/programming">
      <i class="material-icons md-36">code</i>
    </a>
    <a class="btn" href="Helenite/tags/mathematics">
      <i class="material-icons md-36">functions</i>
    </a>
    <a class="btn" href="Helenite/tags/superuser">
      <i class="material-icons md-36">laptop_mac</i>
    </a>
    <a class="btn" href="Helenite/tags/knowledge">
      <i class="material-icons md-36">school</i>
    </a>
    <div class="btn">
      <i class="material-icons md-36">close</i>
    </div>
    <div class="btn">
      <i class="material-icons md-36">close</i>
    </div>
  </label>
</div>
</Layout>
  )
  else
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
