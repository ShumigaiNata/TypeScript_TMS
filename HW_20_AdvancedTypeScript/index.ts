interface IUsers {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: IUsers[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

//1. Создать строку из имен пользователей через запятую
let stringUserName: string = users.map(item => item.name).join(", ");
console.log(stringUserName)

// 2. Посчитать общее количество машин у пользователей
let totalNumberOfCars: number = 0;

users.map(function (item) {
    if (item.cars) {
        totalNumberOfCars += item.cars.length
    }
})

console.log(totalNumberOfCars)

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function educatedUsers<Type extends IUsers>(users: Type[]): Type[] {
    return users.filter(item => item.hasEducation === true)
}

console.log(educatedUsers(users))

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животны
function doesAnimalsUsers<Type extends IUsers>(users: Type[]): Type[] {
    return users.filter(item => item.animals)
}

console.log(doesAnimalsUsers(users))

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

function userCarsName<Type extends IUsers>(users: Type[]): string {

    let arrCars: string[] = [];

    users.filter(item => item.cars)
        .map(function (item) {
            if (item.cars) {
                arrCars.push(item.cars.join(", "))
            }
        })
    return arrCars.join(", ")
}

console.log(userCarsName(users));