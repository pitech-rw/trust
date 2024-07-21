import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
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
        })
    ]
    const pages = {
        signIn: '/auth'
    }
const handler = NextAuth({
    providers,
    pages
})

export { handler as GET, handler as POST}