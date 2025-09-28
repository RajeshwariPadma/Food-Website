import { gql } from "@apollo/client";

// export const GET_PRODUCTS = gql`
// query {
//   products {
//     id
//     title
//     description
//     date
//     img {
//       url
//     }
//   }
// }
// `;

// export const GET_BLOGPOSTS = gql 
// // `query GetBlogPosts {
// //   blogPosts {
// //     id
// //     title 
   
// //     coverImage {
// //       url
// //     }
// //     date
// //   }
// // }`;

export const GET_BLOGPOSTS = gql `
query GetBlogPost {
  blogPosts {
    id
    title 
  	description {
    text
    }
   img {
      url 
    }
    date
    slug
  }
}`;

export const  GET_BLOG_BY_SLUG  = gql `
query GetBlogPost($slug : String!){
  blogPost(where: { slug: $slug}) {
    id
    title
    img {
      url
    }
    date
    
    content {
      html
    }
  }
}`;

// export const GET_BLOG_TITLES = gql`
// query GetBlogTitles {
// blogPosts {
// id
// title
// slug
// }
// }`;