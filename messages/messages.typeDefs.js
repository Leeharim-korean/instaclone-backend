import { gql } from "apollo-server-express";

export default gql`
    type Room {
        id: Int!
        users: [User]
        messages: [Messages]
        createdAt: String!
        updatedAt: String!
    }
    type Message {
        id: Int!
        payload: String!
        user: User!
        room: Room!
        createdAt: String!
        updatedAt: String!
    }
`;