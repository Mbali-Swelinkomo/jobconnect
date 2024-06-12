const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Pool } = require('pg');
require('dotenv').config();
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// CORS configuration to allow requests from any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Endpoint to handle root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Job Application API');
});

// Endpoint to submit the application
app.post('/submit-application', upload.fields([{ name: 'resume' }, { name: 'otherDocuments' }]), async (req, res) => {
  const applicationData = req.body;
  const files = req.files;

  try {
    // Save the application data to the database
    const query = `
      INSERT INTO applications (name, surname, mobile_number, email, gender, ethnicity, general_consent, cover_letter, resume, other_documents)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id;
    `;
    const values = [
      applicationData.name,
      applicationData.surname,
      applicationData.mobileNumber,
      applicationData.email,
      applicationData.gender,
      applicationData.ethnicity,
      applicationData.generalConsent,
      applicationData.coverLetter,
      files ? files.resume[0].path : null,  // Save the resume file path to the database
      files ? files.otherDocuments[0].path : null,  // Save the otherDocuments file path to the database
    ];

    const result = await pool.query(query, values);
    const newApplicationId = result.rows[0].id;

    // Respond with a success message
    res.status(200).json({ message: 'Application submitted successfully!', applicationId: newApplicationId });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Error submitting application.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
