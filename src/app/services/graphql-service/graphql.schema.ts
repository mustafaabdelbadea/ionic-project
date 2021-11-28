import { gql } from 'apollo-angular';

export const pingQuery = gql`
  query {
    ping
  }
`;

export const signInMutation = gql`
  mutation ($inputs: UserSignInInput!) {
    userSignIn(inputs: $inputs) {
      message
      token
    }
  }
`;
