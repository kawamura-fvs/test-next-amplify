/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
      id
      title
      detail
      contact_type
      isResolve
      updated_at
      createdAt
      updatedAt
    }
  }
`;
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        detail
        contact_type
        isResolve
        updated_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
