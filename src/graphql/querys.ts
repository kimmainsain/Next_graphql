import { gql } from "@apollo/client";

export const FETCH_SOLPLACE_LOGS = gql`
  query fetchSolplaceLogs($page: Int!) {
    fetchSolplaceLogs(page: $page) {
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

export const FETCH_SOLPLACE_LOG_BY_ID = gql`
  query fetchSolplaceLogById($id: ID!) {
    fetchSolplaceLogById(id: $id) {
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
