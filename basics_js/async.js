

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    return data;
}

const res = await getData()
console.log(res.slice(0, 3))
