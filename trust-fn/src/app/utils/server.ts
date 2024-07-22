import dotenv from 'dotenv'

dotenv.config()

export const auth = async (endpoint: string, body: Record<"username" | "password", string> | undefined) => {
    try {
        const response = await fetch(`http://localhost:8080/${endpoint}`, 
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-Type": "application/json"}
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if (response.ok && response.headers.get('Content-Type')?.includes('application/json'))
            return response.json();
        else {
            return response.text().then(
                t => {console.info(t)}
            )
        }
    } catch (error) {
        const userMessage = {
            message:'something went wrong' 
        }
        console.error( error)
        return JSON.stringify(userMessage)
    }
};
