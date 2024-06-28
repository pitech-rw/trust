export async function data  () {
    return new Promise((resolve) => setTimeout(() => {
        resolve(
            'Yay'
        )
        
    }, 4000))
}