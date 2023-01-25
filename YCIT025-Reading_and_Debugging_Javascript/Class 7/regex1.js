const validFileName = /([\w ]+)\.(html|jpg|txt)$/;


// regex starts and finish with /


// ^^ better way than the one down
const validFileName2 = new RegExp (`([\w ]+)\.(html|jpg|txt)$`)

// add g at the end of regex sentence to do it globally (after the /)
// add m for multiline
// add i for case sensitive to replace [Yyes] into [yes] but evaluate all letter type (capital or small)

