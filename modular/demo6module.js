const fs = require("fs"); //filesystem

//exporting the following function so that it becomes a module
//A module is a feature or collection a features
//allows importing and exporting stuff
//herr we export the function, so that we can make use of it in another file
filterDir = function (filePath, ext, callback) {
    fs.readdir(filePath, function (err, result) {
        if (err) {
            throw new Error(" Something bad happend " + err)
        }
        const res = result.filter(function (fileName) {
            return (fileName.indexOf('.' + ext) !== -1);
        }).map(fileName => {
            return fileName
        })
        // const filtered = data.filter(filename => path.extname(filename) === ext);
        return callback(null, res);
    })
}
module.exports = filterDir;