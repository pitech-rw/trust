import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const authOptions = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials =credentials
            },
        })
    ]
}
const handler = NextAuth({
    authOptions
})

export { handler as GET, handler as POST}