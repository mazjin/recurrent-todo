'use server';


const apiUrl = 'http://127.0.0.1:8090/api/';
export async function getTodos() {
    'use server';
    const res = await fetch(`${apiUrl}collections/todos/records?filter=(isComplete=false)`);
    const data = await res.json();
    return data.items;
}   