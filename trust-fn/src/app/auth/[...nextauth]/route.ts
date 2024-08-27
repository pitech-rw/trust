import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { auth } from '../../../app/utils/server'
import { z } from 'zod'


    const providers = [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'username', type: 'text', placeholder: 'your username'},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials, req) {
                const parsedCreds = z.object(
                    {
                        email: z.string().email(),
                        password: z.string().min(4)
                    }
                ).safeParse(credentials)

                if (parsedCreds.success) {
                    const { email, password } = parsedCreds.data
                    const userData = {email, password}
                    const body = JSON.stringify(userData)
                    const res = await auth('/api/v1/signin/credentials', body)
                    const user = res.json()
                    if (res.ok && user ) return user
                    return null
                }

            },
        }),
        GoogleProvider({
            clientId:'1066046816733-m5gmkrniff2m2u9tdat55tg9rof4mlm4.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ]
const handler = NextAuth({
    providers,
    callbacks: {
        async signIn({credentials}) {

            const res = await auth('/api/v1/signin/credentials', credentials)

            const user = res.json()
            if (res.ok && user ) return user
        }
    },
    pages: {
        newUser: 'auth/signup'
    }
})

export { handler as GET, handler as POST}