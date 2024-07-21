import dotenv from 'dotenv'

dotenv.config()

export const auth = async (endpoint: string, body: Record<"username" | "password", string> | undefined) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1${endpoint}`, 
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-Type": "application/json"}
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        const userMessage = {
            message:'something went wrong' 
        }
        console.error( error)
        return JSON.stringify(userMessage)
    }
};
