import { gql } from "apollo-server-express";

export default gql`
    type LikePhtoResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        likePhoto(id: Int!): LikePhotoResult
    }
`;