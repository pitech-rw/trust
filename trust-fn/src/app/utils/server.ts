
export const auth = async (endpoint: string, body: Record<"username" | "password", string> | undefined) => {
    try {
        const response = await fetch(`${process.env.SERVER}${endpoint}`, 
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
            message:'There was a problem contacting the server' 
        }
        console.error( error)
        return JSON.stringify(userMessage)
    }
};
