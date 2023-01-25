// Let's make a mock function to represent the whole asynchronous process
// (sending out a request to another program, which then processes the request, and sends back an answer)

function mockJourney() {
 
    setTimeout(() => {

        console.log("done")
    }, 2000);

    console.log("end of function")
    }

    mockJourney()