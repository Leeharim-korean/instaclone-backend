import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
    Mutation: {
        editProfile: async (
            _,
            { firstName, lastName, username, email, password: newPassword },
            { token }
        ) => {
            const { id } = await jwt.verify(token, process.env.SECRET_KEY);
            let uglyPassword = null;
            if (newPassword) {
                uglyPassword = await bcrypt.hash(newPassword, 10);
            }
            const updatedUser = await client.user.update({
                where: {
                    id,
                },
                data: {
                    firstName,
                    lastName,
                    username,
                    email,
                    ...(uglyPassword && { password: uglyPassword }),
                },
            });
            if (updatedUser.id) {
                return {
                    ok: true,
                };
            } else {
                return {
                    ok: false,
                    error: "Could not update profile.",
                };
            }
        },
    },
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI3Mzg4NjQ0fQ.5HUzC1ZSTpww1qU__ChGj1fo04UGFfB_VDCm5xnkAXc