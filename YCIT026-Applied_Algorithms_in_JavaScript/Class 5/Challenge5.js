const x = 10;

switch (x) {
    case "10" :
        const typeA = "string";
        alert(`x is not a number, but a ${typeA}`);
        break;
    case 10:
        const typeB = "number";
        alert(`x is a ${typeB}`);
        break;
}