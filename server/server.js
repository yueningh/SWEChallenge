const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/attendance', (req, res) => {
    //const { name, netID, year, major } = req.body;
    const { name, netID } = req.body;
    const year = req.body.year || '';
    const major = req.body.major || '';

    const filename = 'sweAttendance.csv';
    let alreadyExists = false;
    let updated = false;
    let count = 0;

    // check if user already exists in the CSV file
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (row) => {
            if (row.name === name && row.netID === netID) {
                alreadyExists = true;
                count = parseInt(row.attendance) || 0;
            }
        })
        .on('end', () => {
            if (alreadyExists) {
                // if user already exists, increase cumulative number of attendances by 1
                count++;
                const rows = [];
                fs.createReadStream(filename)
                    .pipe(csv())
                    .on('data', (row) => {
                        if (row.name === name && row.netID === netID) {
                            rows.push({ ...row, attendance: count });
                        } else {
                            rows.push(row);
                        }
                    })
                    .on('end', () => {
                        fs.truncateSync(filename, 0);
                        rows.forEach((row) => {
                            const data = `${row.name},${row.netID},${row.year},${row.major},${row.attendance}\n`;
                            fs.appendFileSync(filename, data);
                        });
                        res.send({ success: true, message: 'User attendance updated' });
                    });
            } else {
                // if user does not exist, add a new row to the CSV file
                const newRecord = `${name},${netID},${year},${major},1\n`;
                fs.appendFileSync(filename, newRecord);
                res.send({ success: true, message: 'New user attendance added' });
            }
        });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
