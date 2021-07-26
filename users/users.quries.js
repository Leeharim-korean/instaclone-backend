import client from "../client";

export default {
    Query: {
        seeProfile: (_, { usernaem }) => client.user.findUnique({
            where: {
                username,
            },
        }),
    },
};