import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
    Mutation: {
        uploadPhoto: protectedResolver(
            async (_, { file, caption }, { loggedInUser }) => {
                if (caption) {
                    /// parse caption
                    // get or create Hashtags
                    const hashtags = caption.match(/#[\w]+/g);
                    console.log(hashtags);
                }
                client.photo.create({
                    data: {
                        file,
                        caption,
                        hashtags: {
                            connectOrCreate: {
                                where: {
                                    hashtag: "#food",
                                },
                                create: {
                                    hashtag: "#food",
                                }
                            }
                        }
                    }
                })
                // save the photo WITH the parsed hashtags
                // add the photo to the hashtags
            }
        )
    }
}