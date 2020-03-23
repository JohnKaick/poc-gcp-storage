const path = require('path');
const { Storage } = require('@google-cloud/storage');

const projectId = process.env.GCP_PROJECT_ID;
const bucket = process.env.GCP_BUCKET_NAME;

const storage = new Storage({
    projectId: projectId,
    keyFileName: path.resolve(__dirname, 'key', 'poc-gcp-node-3738c5d49387.json')
});

module.exports = { storage, bucket };