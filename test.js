let user = {
    nom : 'Clément',
    age: 28,
    femme: false,
    hello: function great(i) {
        console.log("say" + i);
    }
}

console.log(user.nom);
console.log(user[nom]);
console.log(user.hello);
for (let hello in user ){
    user[hello]();
}