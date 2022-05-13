import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
query($slug: String!) {
  getProductList(where: {slug: {eq: $slug}}) {
    items {
      _id
      description
      image {
        _id
        caption
        credit
        description
        filename
        mimeType
        path
        sourceUrl
        title
        uploadStatus
      }
      name
      price
      slug
    }
  }
}`;

export const GET_PRODUCTS = gql`
query($slug: String!) {
  getCategoryList(where: {products: {slug: {eq: $slug }}}){
    items {
      _id
      name
        products{
          _id
          description
          name
          price
          slug
          image {
            path
          }
        }
      slug
    }
    total
  }
}`;