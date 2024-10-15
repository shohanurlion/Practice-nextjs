export default async function getAllpost(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
    return result.json()
}