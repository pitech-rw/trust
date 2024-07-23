import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { auth } from '../../../app/utils/server'


    const providers = [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'username', type: 'text', placeholder: 'your username'},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials, req) {
                const res = await auth('/api/v1/signin/credentials', credentials)

                const user = res.json()
                if (res.ok && user ) return user
                return null
            },
        }),
        GoogleProvider({
            clientId:'1011553561920-mjpvsiia5dcqc0hqoub4phlsmmuvhbrh.apps.googleusercontent.com',
            clientSecret: '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',
            callbacks: {
                async signIn({account, profile}) {
                    if
                }
            }
        })
    ]
const handler = NextAuth({
    providers,
})

export { handler as GET, handler as POST}