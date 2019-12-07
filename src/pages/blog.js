import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../component/layout';
import blogStyles from './blog.module.scss'
//const fs = require('fs');
//const pageData = JSON.parse(fs.readFileSync('./data/guy18.json', { encoding: 'utf-8' }));

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
                fields {
                    slug
                }

              } 
            }
          }
    }
    `)
    console.log("data"+data);
    
    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to ={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            
        </Layout>

    )
}

export default BlogPage