import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      name
    }
  }
`;
export const CREATE_SOLPLACE_LOG_BY_SOLPLACE_NAME = gql`
  mutation CreateSolplaceLogBySolplaceName(
    $solplaceName: String!
    $createSolplaceLogInput: CreateSolplaceLogInput!
  ) {
    createSolplaceLogBySolplaceName(
      solplaceName: $solplaceName
      createSolplaceLogInput: $createSolplaceLogInput
    ) {
      id
      introduction
      solplaceName
      images
      userId
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const DELETE_SOLPLACE_LOG_BY_ID = gql`
  mutation DeleteSolplaceLogById($id: ID!) {
    deleteSolplaceLogById(id: $id)
  }
`;

export const UPDATE_SOLPLACE_LOG_BY_ID = gql`
  mutation UpdateSolplaceLogById(
    $id: ID!
    $updateSolplaceLogInput: UpdateSolplaceLogInput!
  ) {
    updateSolplaceLogById(
      id: $id
      updateSolplaceLogInput: $updateSolplaceLogInput
    ) {
      introduction
    }
  }
`;
