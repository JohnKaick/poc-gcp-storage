const { uploadGCP } = require('../common/gcp');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {

    const file = req.files.file;

    if (!file) {
        res.status(400).send('file not send');
    };

    try {

        await fs.writeFileSync(`${__dirname}/../common/file/${file.name}`, file.data);
        let upload = path.resolve(__dirname, '..', 'common', 'file', file.name);

        const result = await uploadGCP(file);
        fs.unlinkSync(upload);
        res.send({ link: result[1].mediaLink });

    } catch (err) {
        fs.unlinkSync(upload);
        res.status(400).send('file not send');
    }
    
};