export const fetchData = async (endpoint: string) => {
    const response = await fetch(`${process.env.SERVER}${endpoint}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
