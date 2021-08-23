import { gql } from "apollo-server";

export default gql`
type MutationResponse {
    ok: Boolean!
    error: String
}
    type Mutation {
        followUser(username: String!): MutationResponse!
    }
`;