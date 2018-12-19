import { request, GraphQLClient } from 'graphql-request';

import { runServer } from '../src/runServer';
import resolvers from '../src/resolvers';

let getHost = () => '';
let graphQLClient;

describe('signup', () => {
  beforeAll(async() => {
    const app = await runServer();
    const { port } = app.address();
    getHost = () => `http://127.0.0.1:${port}`;
    graphQLClient = new GraphQLClient(getHost(), {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanB1cDNvN3UwMDIyMDcxOHFubzFmOXJ4IiwiaWF0IjoxNTQ1MTk0ODI0fQ.T5vU6l4-KIptDrb9HHcUvTJNCMzYCYveekTjl9ZArWU',
      },
    });
  });

  test('successfully create & delete', async() => {
    const mutation = `
    mutation {
      signup(email: "test@test.test", password: "password12") {
        user {
          id
        }
        token
      }
    }
    `;

    const response = await request(getHost(), mutation);
    expect(typeof response).toBe('object');
    expect(typeof response.signup).toBe('object');
    expect(typeof response.signup.user).toBe('object');
    expect(typeof response.signup.user.id).toBe('string');
    expect(typeof response.signup.token).toBe('string');

    const userQuery = `
    query {
      user(id: "${response.signup.user.id}") {
      id
      name
      }
    }
    `;
    const user = await graphQLClient.request(userQuery);
    expect(user.user.id).toEqual(response.signup.user.id);

    const signoutMutation = `
    mutation {
      signout(id: "${response.signup.user.id}") {
        id
      }
    }
    `;
    const deleted = await graphQLClient.request(signoutMutation);
    expect(deleted.signout.id).toEqual(response.signup.user.id);
    return true;
  });
});
