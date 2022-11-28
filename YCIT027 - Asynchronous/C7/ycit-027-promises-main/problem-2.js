// Convert async/await code into promise code

async function getLastUploadReport(username) {
  try {
    const result = await fetchLastUploadedReport(username);
    return result;
  } catch (error) {
    console.log(error);
  }
}
