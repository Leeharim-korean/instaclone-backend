import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        deleteComment: protectedResolver(async (_, { id }, { loggedInUser }) => {
            const comment = await client.comment.findUnique({
                where: {
                    id,
                },
                select: {
                    userId: true,
                }
            });
            if (!commnet) {
                return {
                    ok: false,
                    error: "Comment no found."
                };
            } else if (comment.userId !== loggedInUser.id) {
                return {
                    ok: false,
                    error: "Not authorized."
                };
            } else {
                await client.comment.delete({
                    where: {
                        id,
                    }
                });
                return {
                    ok: true,
                }
            }
        })
    }
};