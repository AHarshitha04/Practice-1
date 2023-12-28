const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const multer = require("multer");
const mammoth = require("mammoth");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs").promises;
const app = express();
const port = 4009;

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "admin_project",
});

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = "uploads/";
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    cb(null, Date.now() + path.extname(file.originalname));
    // cb(null, file.originalname);
  },
});


  

const upload = multer({ storage });


//_________________________________________________FRONT END_______________________________________

app.get("/examData", async (req, res) => {
  // FetchData
  try {
    const [rows] = await db.query("SELECT * FROM exams");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingcourse/:examId", async (req, res) => {
  const { examId } = req.params;
  try {
    // Fetch exams from the database
    const [rows] = await db.query(
      "SELECT * FROM course_creation_table WHERE examId = ?",
      [examId]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingtest/:courseCreationId/:typeOfTestId", async (req, res) => {
  const { courseCreationId, typeOfTestId } = req.params;
  try {
    // Fetch tests from the database based on courseCreationId and typeOfTestId
    const [testRows] = await db.query(
      "SELECT * FROM test_creation_table WHERE courseCreationId = ? AND courseTypeOfTestId = ?",
      [courseCreationId, typeOfTestId]
    );
    res.json(testRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingtest/:courseCreationId", async (req, res) => {
  const { courseCreationId } = req.params;
  try {
    // Fetch exams from the database
    const [rows] = await db.query(
      "SELECT * FROM test_creation_table WHERE 	courseCreationId  = ?",
      [courseCreationId]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/feachingtypeoftest", async (req, res) => {
  try {
    // Fetch type_of_test data from the database
    const [typeOfTestRows] = await db.query("SELECT * FROM type_of_test");
    res.json(typeOfTestRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/fetchinstructions/:testCreationTableId", async (req, res) => {
  const { testCreationTableId } = req.params;
  try {
    // Fetch instructions from the database based on testCreationTableId
    const [instructionsRows] = await db.query(
      "SELECT tc.testCreationTableId,it.instructionHeading, ipt.points, it.instructionId, ipt.id FROM test_creation_table tc JOIN instruction it ON tc.instructionId = it.instructionId JOIN instructions_points ipt ON it.instructionId = ipt.instructionId  WHERE tc.testCreationTableId = ?;",
      [testCreationTableId]
    );
    res.json(instructionsRows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/subjects/:testCreationTableId', async (req, res) => {
  const { testCreationTableId } = req.params;
  try {
    const [subjects] = await db.query(
      'SELECT subjects.subjectName,subjects.subjectId FROM test_creation_table JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId JOIN Subjects ON course_subjects.subjectId = Subjects.subjectId WHERE test_creation_table.testCreationTableId = ?',
      [testCreationTableId]
    );
    res.json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// app.get('/subjects/:testCreationTableId', async (req, res) => {
//   const { testCreationTableId } = req.params;
//   try {
//     const [subjects] = await db.query(
//       // 'SELECT subjects.subjectName,subjects.subjectId,questions.question_id FROM test_creation_table JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId JOIN subjects ON course_subjects.subjectId = subjects.subjectId JOIN questions ON test_creation_table.testCreationTableId= questions.testCreationTableId WHERE test_creation_table.testCreationTableId = ?',
//       'SELECT DISTINCT subjects.subjectName, subjects.subjectId, questions.question_id FROM test_creation_table JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId JOIN subjects ON course_subjects.subjectId = subjects.subjectId JOIN questions ON test_creation_table.testCreationTableId = questions.testCreationTableId WHERE test_creation_table.testCreationTableId = ?;'
//       [testCreationTableId]
//     );
//     res.json(subjects);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// SELECT subjects.subjectName,subjects.subjectId,questions.question_id FROM test_creation_table JOIN course_creation_table ON test_creation_table.courseCreationId = course_creation_table.courseCreationId JOIN course_subjects ON course_creation_table.courseCreationId = course_subjects.courseCreationId JOIN subjects ON course_subjects.subjectId = subjects.subjectId JOIN questions ON test_creation_table.testCreationTableId= questions.testCreationTableId WHERE test_creation_table.testCreationTableId = 8;


app.get("/subjectData1/:courseCreationId", async (req, res) => {
  // FetchData
  try {
    const {courseCreationId } = req.params;
    const [rows] = await db.query("SELECT DISTINCT subjectId FROM course_subjects JOIN test_creation_table ON course_subjects.courseCreationId = test_creation_table.courseCreationId WHERE test_creation_table.courseCreationId = ?;",[courseCreationId]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/subjectData2/:testCreationTableId", async (req, res) => {
  // FetchData
  try {
    const {testCreationTableId } = req.params;
    const [rows] = await db.query("SELECT DISTINCT subjectId FROM course_subjects JOIN test_creation_table ON course_subjects.courseCreationId = test_creation_table.courseCreationId WHERE test_creation_table.testCreationTableId  = ?;",[testCreationTableId]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get('/sections/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    const [results] = await db.query(`
      SELECT s.sectionId, s.sectionName
      FROM sections s 
      JOIN questions q ON s.sectionId = q.sectionId AND s.subjectId = q.subjectId 
      WHERE q.question_id = ?;
    `, [questionId]);

    res.json(results);

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


// SELECT q.question_id, qt.qtypeId, qt.qtype_text FROM questions q JOIN qtype qt ON qt.question_id q.question_id WHERE q.question_id = 26;


// SELECT q.question_id, qt.qtypeId, qt.qtype_text, qts.quesionTypeId
// FROM questions q
// JOIN qtype qt ON q.question_id = qt.question_id
// JOIN quesion_type qts ON qt.quesionTypeId = qts.quesionTypeId
// WHERE q.question_id = 26;

app.get('/questionType/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    const [results] = await db.query(`
    SELECT q.question_id, qt.qtypeId, qt.qtype_text, qts.typeofQuestion, qts.quesionTypeId FROM questions q JOIN qtype qt ON q.question_id = qt.question_id JOIN quesion_type qts ON qt.quesionTypeId = qts.quesionTypeId WHERE q.question_id = ?;
    `, [questionId]);

    res.json(results);

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.get("/fetchSections/:testCreationTableId/:subjectId", async (req, res) => {
  const { testCreationTableId, subjectId } = req.params;
  try {
    // Use a connection from the pool
    const connection = await db.getConnection();

    // Fetch sections for the specified testCreationTableId and selected subjectId
    const [rows] = await connection.execute(
      "SELECT sectionName, noOfQuestions, sectionId FROM sections WHERE testCreationTableId = ? AND subjectId = ?",
      [testCreationTableId, subjectId]
    );

    // Release the connection back to the pool
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// /SNMALFNSA

app.get("/fetchSections/:testCreationTableId/:subjectId", async (req, res) => {
  const { testCreationTableId, subjectId } = req.params;
  try {
    const [rows] = await db.query(
      "SELECT sectionName, noOfQuestions, sectionId FROM sections WHERE testCreationTableId = ? AND subjectId = ?",
      [testCreationTableId, subjectId]
    );

    // Calculate question length for each section and include it in the response
    const sectionsWithQuestionLength = rows.map((section) => {
      const questionLength = calculateQuestionLength(section.sectionId); // Replace with your logic
      return { ...section, questionLength };
    });

    res.json(sectionsWithQuestionLength);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get('/courses/count', async (req, res) => {
  try {
    const [results, fields] = await db.execute(
      'SELECT examId, COUNT(*) AS numberOfCourses FROM course_creation_table GROUP BY examId;'
    );
    res.json(results);
  } catch (error) {
    console.error('Error fetching course count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/Test/count', async (req, res) => {
  try {
    const [results, fields] = await db.execute(
      'SELECT courseCreationId, COUNT(*) AS numberOfTests FROM test_creation_table GROUP BY courseCreationId;'
    );
    res.json(results);
  } catch (error) {
    console.error('Error fetching course count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});










// app.get("/getPaperData/:testCreationTableId", async (req, res) => {
//   try {
//     // const subjectId = req.params.subjectId;
//     const testCreationTableId = req.params.testCreationTableId;
 
//     // Fetch data from testCreationTableId table
//     const testData = await getDataByTestCreationTableId(testCreationTableId);
 
//     // Fetch question data based on subjectId and document_Id
//     const questions = await getQuestionsBySubjectAndDocumentId( testCreationTableId);
 
//     // Fetch option data based on questions and document_Id
//     const options = await getOptionsByQuestionsAndDocumentId(questions, testCreationTableId);
 
//     // Fetch solution data based on questions and document_Id
//     const solutions = await getSolutionsByQuestionsAndDocumentId(questions, testCreationTableId);
 
//     res.json({
//       testData,
//       questions,
//       options,
//       solutions,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error fetching data from the database.');
//   }
// });
// // Reusable function to get data from testCreationTableId table
// async function getDataByTestCreationTableId(testCreationTableId) {
//   try {
//     const query = `
//       SELECT *
//       FROM test_creation_table
//       WHERE testCreationTableId = ?  
//     `;
//     const [results] = await db.query(query, [testCreationTableId]);
 
//     return results; // Adjust this based on your actual table structure
//   } catch (err) {
//     console.error(`Error fetching data from test_creation_table: ${err}`);
//     throw err;
//   }
// }
 
 
// // Reusable function to get questions data based on subjectId and document_Id
// async function getQuestionsBySubjectAndDocumentId( testCreationTableId) {
//   try {
//     const query = `
//       SELECT question_id, question_img
//       FROM questions
//       WHERE testCreationTableId = ?  
//     `;
//     const [results] = await db.query(query, [ testCreationTableId]);
//     const optionsWithBase64 = results.map(option => ({
//       question_id: option.question_id,
//       question_img: option.question_img.toString('base64'),
//     }));
//     return optionsWithBase64;
//   } catch (err) {
//     console.error(`Error fetching questions: ${err}`);
//     throw err;
//   }
// }
 
// // Reusable function to get options data based on questions and document_Id
// async function getOptionsByQuestionsAndDocumentId(questions, testCreationTableId) {
//   try {
//     const questionIds = questions.map(question => question.question_id);
//     const query = `
//     SELECT question_id, option_img
//     FROM options
//     WHERE question_id IN (?)
//     `;
//     const [results] = await db.query(query, [questionIds, testCreationTableId]);
 
//     // Convert BLOB data to base64 for sending in the response
//     const optionsWithBase64 = results.map(option => ({
//       question_id: option.question_id,
//       option_img: option.option_img.toString('base64'),
//     }));
 
//     return optionsWithBase64;
//   } catch (err) {
//     console.error(`Error fetching options: ${err.message}`);
//     throw err;
//   }
// }
 
 
// // Reusable function to get solutions data based on questions and document_Id
// async function getSolutionsByQuestionsAndDocumentId(questions, testCreationTableId) {
//   try {
//     const questionIds = questions.map(question => question.question_id);
//     const query = `
//       SELECT question_id, solution_img
//       FROM solution
//       WHERE question_id IN (?)
//     `;
//     const [results] = await db.query(query, [questionIds, testCreationTableId]);
 
//     // Convert BLOB data to base64 for sending in the response
//     const solutionsWithBase64 = results.map(solution => ({
//       question_id: solution.question_id,
//       solution_img: solution.solution_img.toString('base64'),
//     }));
 
//     return solutionsWithBase64;
//   } catch (err) {
//     console.error(`Error fetching solutions: ${err}`);
//     throw err;
//   }
// }
 
// function combineImage(questions, options, solutions) {
//   const combinedImages = [];
 
//   for (let i = 0; i < questions.length; i++) {
//     const questionImage = questions[i].question_img;
//     const optionImages = options
//       .filter((opt) => opt.question_id === questions[i].question_id)
//       .map((opt) => opt.option_img);
//     const solutionImage = solutions.find(
//       (sol) => sol.question_id === questions[i].question_id
//     )?.solution_img;
 
//     combinedImages.push({
//       questionImage,
//       optionImages,
//       solutionImage,
//     });
//   }
 
//   return combinedImages;
// }























// //main working code
app.get("/getPaperData/:testCreationTableId/:subjectId", async (req, res) => {
  try {
    const subjectId = req.params.subjectId;
    const testCreationTableId = req.params.testCreationTableId;
 
    // Fetch data from testCreationTableId table
    const testData = await getDataByTestCreationTableId(testCreationTableId);
 
    // Fetch question data based on subjectId and document_Id
    const questions = await getQuestionsBySubjectAndDocumentId(subjectId, testCreationTableId);
 
    // Fetch option data based on questions and document_Id
    const options = await getOptionsByQuestionsAndDocumentId(questions, testCreationTableId);
 
    // Fetch solution data based on questions and document_Id
    const solutions = await getSolutionsByQuestionsAndDocumentId(questions, testCreationTableId);
 
    res.json({
      testData,
      questions,
      options,
      solutions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from the database.');
  }
});
// Reusable function to get data from testCreationTableId table
async function getDataByTestCreationTableId(testCreationTableId) {
  try {
    const query = `
      SELECT *
      FROM test_creation_table
      WHERE testCreationTableId = ?  
    `;
    const [results] = await db.query(query, [testCreationTableId]);
 
    return results; // Adjust this based on your actual table structure
  } catch (err) {
    console.error(`Error fetching data from test_creation_table: ${err}`);
    throw err;
  }
}
 
 
// Reusable function to get questions data based on subjectId and document_Id
async function getQuestionsBySubjectAndDocumentId(subjectId, testCreationTableId) {
  try {
    const query = `
      SELECT question_id, question_img
      FROM questions
      WHERE subjectId = ? AND testCreationTableId = ?  
    `;
    const [results] = await db.query(query, [subjectId, testCreationTableId]);
    const optionsWithBase64 = results.map(option => ({
      question_id: option.question_id,
      question_img: option.question_img.toString('base64'),
    }));
    return optionsWithBase64;
  } catch (err) {
    console.error(`Error fetching questions: ${err}`);
    throw err;
  }
}
 
// Reusable function to get options data based on questions and document_Id
async function getOptionsByQuestionsAndDocumentId(questions, testCreationTableId) {
  try {
    const questionIds = questions.map(question => question.question_id);
    const query = `
    SELECT question_id, option_img
    FROM options
    WHERE question_id IN (?)
    `;
    const [results] = await db.query(query, [questionIds, testCreationTableId]);
 
    // Convert BLOB data to base64 for sending in the response
    const optionsWithBase64 = results.map(option => ({
      question_id: option.question_id,
      option_img: option.option_img.toString('base64'),
    }));
 
    return optionsWithBase64;
  } catch (err) {
    console.error(`Error fetching options: ${err.message}`);
    throw err;
  }
}
 
 
// Reusable function to get solutions data based on questions and document_Id
async function getSolutionsByQuestionsAndDocumentId(questions, testCreationTableId) {
  try {
    const questionIds = questions.map(question => question.question_id);
    const query = `
      SELECT question_id, solution_img
      FROM solution
      WHERE question_id IN (?)
    `;
    const [results] = await db.query(query, [questionIds, testCreationTableId]);
 
    // Convert BLOB data to base64 for sending in the response
    const solutionsWithBase64 = results.map(solution => ({
      question_id: solution.question_id,
      solution_img: solution.solution_img.toString('base64'),
    }));
 
    return solutionsWithBase64;
  } catch (err) {
    console.error(`Error fetching solutions: ${err}`);
    throw err;
  }
}
 
function combineImage(questions, options, solutions) {
  const combinedImages = [];
 
  for (let i = 0; i < questions.length; i++) {
    const questionImage = questions[i].question_img;
    const optionImages = options
      .filter((opt) => opt.question_id === questions[i].question_id)
      .map((opt) => opt.option_img);
    const solutionImage = solutions.find(
      (sol) => sol.question_id === questions[i].question_id
    )?.solution_img;
 
    combinedImages.push({
      questionImage,
      optionImages,
      solutionImage,
    });
  }
 
  return combinedImages;
}



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
