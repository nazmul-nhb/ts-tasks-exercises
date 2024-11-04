type Role = "admin" | "user" | "guest";

const logValues = (name:string, age:number, role:Role): void => { 
    console.log(`${name} is ${age} years old, working as ${role}`);
};

logValues("Abul", 35, 'guest')