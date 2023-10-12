const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');

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
    password: 'naveen',
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

        // Read the image file as a buffer
        const imageBuffer = fs.readFileSync(req.file.path);

        // Insert data and image into the MySQL database
        db.query('INSERT INTO your_table_name (column1, column2, image_column) VALUES ?', 
            [data.map(item => [item.column1, item.column2, imageBuffer])], 
            (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(200).json({ message: 'Data inserted successfully.' });
                }
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// app.get('/images/:id', (req, res) => {
app.get('/images/:id', (req, res) => {
    const imageId = req.params.id;
    // Fetch the image data from your MySQL database using the ID and store it in 'imageBuffer'
    const sql = 'SELECT image_column FROM your_table_name WHERE id = ?';
    db.query(sql, [imageId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (result.length === 0) {
            res.status(404).json({ error: 'Image not found' });
        } else {
            const imageBuffer = result[0].image_column;
            res.set('Content-Type', 'image/jpeg'); // Adjust content type as needed
            res.send(imageBuffer);
        }
    });
});

// app.get("/", (req, res) => {
//     const sql = "SELECT * FROM your_table_name";
//     db.query(sql, (err, result) => {
//         if (err) {
//             console.error('Error querying the database: ' + err.message);
//             res.status(500).json({ error: 'Error fetching data' });
//             return;
//         }
//         res.json(result);
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
