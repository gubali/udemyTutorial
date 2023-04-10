type Point = {
    readonly x:number;
    readonly y:number;
}

const point:Point = {
x:2,
y:6663,
}

console.log(`(${point.x}, ${point.y})`);

function add(x:number, y:number){
    return x*y;
}
console.log(add(2,5))
type User = {
    name:string,
    age:number
}
const users = [
    {name:'asifq', age:30},
    {name:'aaa', age:20}
]

function getUserName(name:string):number{
const user = users.find(
    user => user.name === name
    );
    if(user==null){
        throw new Error(`user not found : ${name}`)
    }
return user.age
}

console.log(getUserName('aaa'));



function decorate (value: string |  null | undefined){
    return `--${value.trim()} --`
}

console.log(decorate('5    '));