import { signIn } from 'next-auth/react'

export const loginUser = async (email, password) => {
    const res = await signIn('credentials', {
        redirect: false,
        email,
        password
    })

    if (res.error) {
        return { error: res.error }
    }

    return res
}