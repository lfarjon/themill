import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
query($slug: String!) {
    getCategoryList(where: {slug: {eq: $slug }}) {
      items {
        _id
        name
        products {
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

export const GET_CATEGORIES = gql`
{
  getCategoryList {
    items {
      _id
      name
      products {
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
