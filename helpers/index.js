import { signIn } from 'next-auth/react'
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_NEXTAUTH_SECRET);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }

}