// Write your solution here!

function destructivelyAppendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    cats.shift();
    return cats;
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    return [...cats, name];
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    return [name, ...cats];
}

function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(0, 2);
}

function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(1);
}
console.log(destructivelyAppendCat("Ralph"));
console.log(destructivelyPrependCat("Bob"));
console.log(destructivelyRemoveLastCat());
console.log(destructivelyRemoveFirstCat());
console.log(appendCat("Broom"));
console.log(prependCat("Arnold"));
console.log(removeLastCat());
console.log(removeFirstCat());