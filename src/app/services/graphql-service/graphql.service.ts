import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { pingQuery, signInMutation } from './graphql.schema';
import { UserSignInInput } from './graphql.types';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  ping() {
    const getPingQuery = this.apollo.query({
      query: pingQuery,
    });
    return getPingQuery;
  }

  userSignInMutation(inputs: UserSignInInput) {
    const variables = {
      inputs,
    };
    return this.apollo.mutate({
      mutation: signInMutation,
      variables,
    });
  }
}
