import pubsub from "../../pubsub";

export default {
    Subscription: {
        roomUpdates: {
            subscription: () => pubsub.asyncIterator(NEW_MESSAGE)
        }
    }
}