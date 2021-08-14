import client from "../../client";

export default {
    Query: {
        seeProfile: (_, { username }) =>
            client.user.findUnique({
                where: {
                    username,
                },
                // incluse mean loading element of array
                // include: {
                //     following: true,
                //     followers: true,
                // },
            }),
    },
};