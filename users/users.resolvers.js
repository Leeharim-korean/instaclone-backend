import client from "../client";

export default {
    User: {
        totalFollowing: ({ id }) =>
            client.user.count({
                where: {
                    followers: {
                        some: {
                            id,
                        }
                    }
                }
            }),
        totalFollowers: () =>
            client.user.count({
                where: {
                    following: {
                        some: {
                            id,
                        }
                    }
                }
            }),
        isMe: ({ id }, _, { loggedInUser }) => {
            if (!loggedInUser) {
                return false;
            }
            return id === loggedInUser.id;
        }
    },
};