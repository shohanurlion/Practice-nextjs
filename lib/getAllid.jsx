export default async function getAllid(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json()
}