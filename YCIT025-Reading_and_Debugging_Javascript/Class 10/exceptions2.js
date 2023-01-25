let json = "{ bad json }";

try {
    let user = JSON.parse(json); // <-- when the error occurs
    console.log(user.name); // we never get here

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log('Error has occured'); // (3)
}