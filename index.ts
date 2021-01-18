class User {
    fName: string;
    lName: string;
    luckyNum: number;
    username: string;
    email: string;
    constructor(f_name: string, l_name: string, username: string, email: string, luckyNum?: number) {
        this.fName = f_name;
        this.lName = l_name;
        this.username = username;
        this.email = email;
        this.luckyNum = luckyNum;
    }
    static random(user?: {}): number {
        return Math.floor(Math.random() * (user['luckyNum'] ? user['luckyNum'] : 1000));
    }
}
let user = new User('admin', 'admin', 'admin', 'admin@admin', 1);
document.getElementById('body').append(document.createElement('div'));
document.getElementById('body').lastElementChild.setAttribute('id', 'form');
['first_name', 'last_name', 'username', 'age', 'email', 'sign_up'].forEach((element, index, arr) => {
    switch (index) {
        case (arr.length - 1): {
            addInput('form', 'sign_up', 'input', 'button');
            document.getElementById('sign_up').setAttribute('value', 'sign up');
            break;
        } case (arr.length - 2): {
            addInput('form', element, 'input', 'email');
            break;
        } case (arr.length - 3): {
            addInput('form', element, 'input', 'number');
            break;
        } default: {
            addInput('form', element, 'input', 'text');
        }
    }
});
document.getElementById('sign_up').addEventListener('click', signUp);
function signUp(): void {
    let newUser = new User((<HTMLInputElement>document.getElementById('first_name')).value, (<HTMLInputElement>document.getElementById('last_name')).value,
        (<HTMLInputElement>document.getElementById('username')).value,
        (<HTMLInputElement>document.getElementById('email')).value,
        (+(<HTMLInputElement>document.getElementById('age')).value));
    isValid(user, newUser) ? alert(`welcome back ${(<HTMLInputElement>document.getElementById('last_name')).value} ${(<HTMLInputElement>document.getElementById('first_name')).value} :)`) : console.log('invalid');
}
function isValid(user: {}, user2: {}): boolean {
    if (user && user2) {
        for (const key in user) {
            if (Object.prototype.hasOwnProperty.call(user, key)) {
                if (user[key] != user2[key]) {
                    console.log(user[key] == user2[key]);
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
function addInput(elementId: string, inputId: string, inputClass: string, inputType: string): void {
    if (inputType != 'button') {
        document.getElementById(elementId).innerHTML += `<div id='${inputId}Div'></div>`;
        document.getElementById(`${inputId}Div`).innerHTML = `<label id='${inputId}Label' for='${inputId}'>${inputId}:</label>`;
        document.getElementById(`${inputId}Div`).innerHTML += `<input id='${inputId}' 
        class='${inputClass}' name='${inputId}' type='${inputType}'>`;
    } else {
        document.getElementById(elementId).innerHTML += `<input id='${inputId}' 
        class='${inputClass}' name='${inputId}' type='${inputType}'>`;
    }
}