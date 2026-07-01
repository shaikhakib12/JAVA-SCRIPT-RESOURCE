// const tiderUser = new Object() // this is singleton object

const tiderUser = {} // this is non sigleton object 
tiderUser.id = "123abc"
tiderUser.name = "akib"
tiderUser.isLoggedIn = false



// console.log(tiderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sk",
            lasrname: "akib"
        }
    }

}

// console.log(regularUser.fullname?.userfullname.firstname); // "?" use for api calls


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "akib@gmail.com"
    },
    {
        id: 1,
        email: "akib@gmail.com",
    }
]

user[1].email

console.log(tiderUser);

console.log(Object.keys(tiderUser));
console.log(Object.values(tiderUser));
console.log(Object.entries(tiderUser));

console.log(tiderUser.isLoggedIn.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js ",
    price: 999,
    courseInstructor: "akib"
}

course.courseInstructor