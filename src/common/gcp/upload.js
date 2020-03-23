const { storage, bucket } = require('./config');
const path = require('path');

module.exports = (file) => {
    let upload = path.resolve(__dirname, '..', 'file', file.name);
    return storage.bucket(bucket).upload(upload, {
        destination: `test/${file.name}`
    })
};