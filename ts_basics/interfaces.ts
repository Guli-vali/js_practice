
interface User {
    id: number;
    name: string;
    email?: string;
}


const user: User = {
    id: 1,
    name: 'Ilya'
}

console.log(user);
