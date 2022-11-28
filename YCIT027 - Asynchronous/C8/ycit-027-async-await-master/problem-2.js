// Convert asyn/await code into promise code

async function getLastUploadedReport(username) {
    try {
        const result = await fetchLastUploadedReport(username);
        return result;
    } catch (error) {
        console.log(error);
    }
}
