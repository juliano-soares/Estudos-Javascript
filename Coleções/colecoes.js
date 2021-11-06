function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            getAdmins.push(key)
        }
    }

    return admins;
}


const usuarios = new Map();

usuarios.set('Luis', 'Admin')
usuarios.set('Juliano', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Lucas', 'Admin')

console.log(getAdmins(usuarios));

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(array) {
    const mySet = new Set(array)
    return[...mySet];
}

console.log(valoresUnicos(meuArray))