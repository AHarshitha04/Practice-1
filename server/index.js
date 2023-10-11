const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3080;

app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // File upload destination
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep original file name
    }
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name' // Replace with your actual database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.message);
        throw err;
    }
    console.log('Connected to the MySQL database');
});

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const workbook = xlsx.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet);

        // Connect to MySQL and insert data into the database
        db.query('INSERT INTO your_table_name (column1, column2, image_column) VALUES ?', [data.map(item => [item.column1, item.column2, item.image_column])], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.status(200).json({ message: 'Data inserted successfully.' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/", (req, res) => {
    // const subi_id = req.params.subi_id;
    const sql = "SELECT * FROM your_table_name";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error querying the database: ' + err.message);
            res.status(500).json({ error: 'Error fetching topics' });
            return;
        }
        res.json(result);
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
