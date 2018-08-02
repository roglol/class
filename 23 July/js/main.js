
// let a = 11;

// console.log(a)
// try {
//     console.log(b)
// }
// catch(error){
//     console.log(error.message)
// }

// let b = 13;

// console.log( a + b );

// JSON
// javascript Object Notation

/*
    <user>
        <name>XML Guy</name>
        <id>666</id>
        <isAdmin>1</isAdmin>
    </user>

    {
        name: "JSON Guy",
        id: 667,
        isAdmin: true
    }
*/

// try {
//     console.log("Start of try");
//     undefinedVar;
//     console.log("End of try");
// }
// catch(error){
//     // stack, name, message
//     console.log(`Error has occured: ${error.message}`);
// }
// finally {
//     console.log("Always ready to run");
// }

let myPerson = {
    name: "JSON Guy",
    id: 667,
    isAdmin: true
};

let toSendData = [myPerson, myPerson, myPerson];
// console.log(toSendData);
let serialized = JSON.stringify(toSendData);
// console.log(serialized)
let unserialized = JSON.parse(serialized);
// console.log(unserialized);


let json = `{"name":"JSON Guy","id":667}`;
// try {
//     undefinedVar;
//     let data = JSON.parse(json);
//     if( ! data.isAdmin ){
//         throw new SyntaxError("Incomplete data: isAdmin property is not provided")
//     }
// }
// catch(error) {
//     if( error instanceof SyntaxError){
//         console.log(`JSON Error - ${error}`)
//     }
//     else {
//         console.log(`Other Error - ${error}`)
//     }
// }

// causeError;
// window.onerror = (message, url, line, col, error) => {
//     console.log(message, url, line, col, error)
// }

class Error {
    constructor(message){
        this.message = message;
        this.name = "Error";
        // this.stack = 
    }
}

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

class PropertyRequiredError extends ValidationError { 
    constructor(missingProp){
        super(`No property - ${missingProp}`);
        this.name = 'PropertyRequiredError';
        this.missingProperty = missingProp;
    }
}

function validateJSON(json){
    let user = JSON.parse(json);
    if( !user.age ){
        throw new PropertyRequiredError("age");
    }
    if( !user.isAdmin ){
        throw new PropertyRequiredError("isAdmin");
    }
}

try {
    let user = validateJSON(json);
}
catch(error){
    if( error instanceof ValidationError ){
        console.log(`Invalid data - ${error.message}`)
    }
    else if ( error instanceof SyntaxError ){
        console.log(`JSON Syntax Error - ${error.message}`)
    }
    else {
        throw error;
    }
}