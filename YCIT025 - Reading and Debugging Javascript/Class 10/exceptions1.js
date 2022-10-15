
try {
    console.log('Start of try runs'); // (1) <--
    lalala; // error, variable is not defined)
    console.log('End of try (Never reached'); // (2)
}   catch (err) {
    console.log('Error has occured'); // (3)
}
