    // time O(n^2)
    // space O(n^2)

var sortPeople = function (names, heights) {
    const items = names.map((name, i) => [name, heights[i]])

    items.sort((A, B) => B[1] - A[1])
    return items.map(A => A[0])
};

sortPeople = function (names, heights) {

    if (names.length === 1) return names
    let nameHeightMatrix = []
    let result = []

    for (let i = 0; i < names.length; i++) {
        nameHeightMatrix.push([names[i], heights[i]])
    }

    nameHeightMatrix.sort((a, b) => b[1] - a[1])

    for (let [name, height] of nameHeightMatrix) {
        result.push(name)
    }

    return result
};



console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
