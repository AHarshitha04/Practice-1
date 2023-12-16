// import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// const Paper1 = () => {
//   // const { subi_id } = useParams();
//   //     const [quizData, setQuizData] = useState([]);

//   // console.log(quizData)
//   // useEffect(() => {
//   //   // Fetch data from the endpoint
//   //   fetch(`http://localhost:10000/quiz_all/`+subi_id)

//   //     .then((response) => response.json())
//   //     .then((data) => setQuizData(data))
//   //     .catch((error) => console.error('Error fetching data:', error));
//   // }, [subi_id]);

//   const [subjectNames, setSubjectNames] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:4009/quiz_all/1`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Log the data received from the API
//         setSubjectNames(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // const [answer, setAnswer] = useState([]);
//   // useEffect(() => {
//   //   // Fetch data from the endpoint
//   //   fetch(`http://localhost:4009/answers/`)
//   //     .then((response) => response.json())
//   //     .then((data) => setAnswer(data))
//   //     .catch((error) => console.error("Error fetching data:", error));
//   // }, []);

//   return (
//     <div>
//       <h1>hii</h1>

//       <div>
//         {Array.isArray(subjectNames) && subjectNames.length > 0 ? (
//           <div>
//             {subjectNames.map((subjects) => (
//               <li key={subjects.subi_id}>
//                 <p>{subjects.subject_name}</p>
//               </li>
//             ))}
//           </div>
//         ) : (
//           <p>No subjects available.</p>
//         )}
//         {/* <ul>
//            {subjectNames.map((item) => (
//           <li key={item.subi_id}>
//             <p>{item.subject_name}</p>
//           </li>
//         ))}
//         </ul> */}

//         {/* <button>Mathematics</button>
//                 <button>Physics</button>
//                 <button>Chemistry</button> */}
//       </div>

//       {/* answers display */}
//       {/* <div>
//       {answer.map((ans) => (
//           <li key={ans.subi_id}>
//             <p>{ans.answer}</p>
//           </li>
//         ))}
//       </div> */}

//       {/* <h1>Quiz Questions</h1> */}
//       <div>
//         {/* {quizData.map((question) => (
//           <div key={question.question_id}>
//             <h3>Question {question.question_id}</h3>
//             <img
//               src={`data:image/png;base64,${question.question_img}`}
//               alt={`Question ${question.question_id}`}
//             />
//             <ul>
//               {question.options.map((option) => (
//                 <li key={option.option_id}>
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt={`Option ${option.option_id}`}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// import "./Paper.css";
// const Paper1 = () => {
//   const [questionData, setQuestionData] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [Subjects, setSubjects] = useState([]);
//   const { testCreationTableId, subjectId } = useParams();
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/fetchSections/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSections(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setQuestionData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questionData.length).fill("")
//   );

//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const onAnswerSelected = (optionIndex) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const clearResponse = () => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[activeQuestion] = "";
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const goToPreviousQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       // Save the current timer value for the question

//       const updatedTimers = [...timers];

//       updatedTimers[prevIndex] = timer;

//       setTimers(updatedTimers);

//       // Move to the previous question

//       return prevIndex - 1;
//     });

//     if (questionData > 0) {
//       setActiveQuestion(questionData - 1);
//     }
//   };

//   // ---------------------------------Timer code Start--------------------------------
//   const [timer, setTimer] = useState(0);
//   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);

//     const minutes = Math.floor((seconds % 3600) / 60);

//     const remainingSeconds = seconds % 60;

//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   useEffect(() => {
//     // Set the timer to the saved value for the current question
//     setTimer(timers[currentQuestionIndex] || 0);
//     let interval;
//     interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);
//     // Clear the interval when the component unmounts or when the user moves to the next question
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers]);
//   // ------------------------------------Timer code end--------------------------------

//   return (
//     <div>
//       <div>
//         <PaperHeader />
//       </div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle, index) => (
//           <li key={index}>
//             <button className="subject-btn">{subjectTitle.subjectName}</button>
//           </li>
//         ))}
//       </div>
//       <div className="second-header">
//         <div className="single-select-question">
//           {sections.map((sectionTitle,index)=>(
//             <li key={index}>
//               <p>{sectionTitle.sectionName}</p>
//             </li>
//           ))}
//           {/* Single Select Question */}
//         </div>
//         <div className="right-header">
//           <div className="marks">
//             Marks: <div className="plus-mark">+1</div>
//             <div className="minus-mark">-1</div>
//           </div>
//           <div>Timer: {formatTime(timer)}</div>
//         </div>
//       </div>
//       {questionData.length > 0 && (
//         <div>
//           <h4>
//             {currentQuestionIndex + 1}.
//             <img
//               src={questionData[currentQuestionIndex].question_img}
//               alt={`Question ${currentQuestionIndex + 1}`}
//             />
//           </h4>

//           {questionData[currentQuestionIndex].optionImages.map(
//             (OptionImage, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type="radio"
//                   name={`question-${currentQuestionIndex}-option`}
//                   value={optionIndex}
//                   checked={
//                     selectedAnswers[currentQuestionIndex] === optionIndex
//                   }
//                   onChange={() => onAnswerSelected(optionIndex)}
//                 />
//                 <img
//                   key={optionIndex}
//                   src={OptionImage.option_img}
//                   alt={`Option ${optionIndex + 1}`}
//                 />
//               </li>
//             )
//           )}
//           <div className="flex-right">
//             <button className="clear-btn" onClick={clearResponse}>
//               Clear Response
//             </button>
//             <button
//               className="previous-btn"
//               onClick={goToPreviousQuestion}
//               disabled={questionData === 0}
//             >
//               <i className="fa-solid fa-angles-left"></i> Previous
//             </button>
//             <button className="save-btn" onClick={handleNextClick}>
//               Next <i className="fa-solid fa-angles-right"></i>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Paper1;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Paper1 = () => {
//   const [sections, setSections] = useState([]);
//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(`http://localhost:4009/quiz_all/${testCreationTableId}`);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Received data:', data);
//         setSections(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]); // Use testCreationTableId as a dependency to trigger fetch when it changes

//   return (
//     <div>
//       {Object.values(sections).map((section) => (
//         <div key={section.sectionId}>
//           <h2>{section.sectionName}</h2>
//           {section.questions.map((question) => (
//             <div key={question.qustion_id}>
//               {/* Display question image */}
//               <img src={`data:image/png;base64,${question.question_img}`} alt={`Question ${question.qustion_id}`} />

//               {/* Display option images */}
//               <ul>
//                 {question.option_img.map((option, index) => (
//                   <li key={index}>
//                     <img src={`data:image/png;base64,${option.option_img}`} alt={`Option ${option.Option_Index}`} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// import "./Paper.css";
// const Paper1 = () => {
//   const [questionData, setQuestionData] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [Subjects, setSubjects] = useState([]);
//   const { testCreationTableId, subjectId } = useParams();
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/fetchSections/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSections(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setQuestionData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questionData.length).fill("")
//   );

//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const onAnswerSelected = (optionIndex) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const clearResponse = () => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[activeQuestion] = "";
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const goToPreviousQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       // Save the current timer value for the question

//       const updatedTimers = [...timers];

//       updatedTimers[prevIndex] = timer;

//       setTimers(updatedTimers);

//       // Move to the previous question

//       return prevIndex - 1;
//     });

//     if (questionData > 0) {
//       setActiveQuestion(questionData - 1);
//     }
//   };

//   // ---------------------------------Timer code Start--------------------------------
//   const [timer, setTimer] = useState(0);
//   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);

//     const minutes = Math.floor((seconds % 3600) / 60);

//     const remainingSeconds = seconds % 60;

//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   useEffect(() => {
//     // Set the timer to the saved value for the current question
//     setTimer(timers[currentQuestionIndex] || 0);
//     let interval;
//     interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);
//     // Clear the interval when the component unmounts or when the user moves to the next question
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers]);
//   // ------------------------------------Timer code end--------------------------------

//   return (
//     <div>
//       <div>
//         <PaperHeader />
//       </div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle, index) => (
//           <li key={index}>
//             <button className="subject-btn">{subjectTitle.subjectName}</button>
//           </li>
//         ))}
//       </div>
//       <div className="second-header">
//         <div className="single-select-question">
//           {sections.map((sectionTitle,index)=>(
//             <li key={index}>
//               <p>{sectionTitle.sectionName}</p>
//             </li>
//           ))}
//           {/* Single Select Question */}
//         </div>
//         <div className="right-header">
//           <div className="marks">
//             Marks: <div className="plus-mark">+1</div>
//             <div className="minus-mark">-1</div>
//           </div>
//           <div>Timer: {formatTime(timer)}</div>
//         </div>
//       </div>
//       {questionData.length > 0 && (
//         <div>
//           <h4>
//             {currentQuestionIndex + 1}.
//             <img
//               src={questionData[currentQuestionIndex].question_img}
//               alt={`Question ${currentQuestionIndex + 1}`}
//             />
//           </h4>

//           {questionData[currentQuestionIndex].optionImages.map(
//             (OptionImage, optionIndex) => (
//               <li key={optionIndex}>
//                 <input
//                   type="radio"
//                   name={`question-${currentQuestionIndex}-option`}
//                   value={optionIndex}
//                   checked={
//                     selectedAnswers[currentQuestionIndex] === optionIndex
//                   }
//                   onChange={() => onAnswerSelected(optionIndex)}
//                 />
//                 <img
//                   key={optionIndex}
//                   src={OptionImage.option_img}
//                   alt={`Option ${optionIndex + 1}`}
//                 />
//               </li>
//             )
//           )}
//           <div className="flex-right">
//             <button className="clear-btn" onClick={clearResponse}>
//               Clear Response
//             </button>
//             <button
//               className="previous-btn"
//               onClick={goToPreviousQuestion}
//               disabled={questionData === 0}
//             >
//               <i className="fa-solid fa-angles-left"></i> Previous
//             </button>
//             <button className="save-btn" onClick={handleNextClick}>
//               Next <i className="fa-solid fa-angles-right"></i>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Paper1;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Paper1 = () => {
//   const [sections, setSections] = useState([]);
//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(`http://localhost:4009/quiz_all/${testCreationTableId}`);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Received data:', data);
//         setSections(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]); // Use testCreationTableId as a dependency to trigger fetch when it changes

//   return (
//     <div>
//       {Object.values(sections).map((section) => (
//         <div key={section.sectionId}>
//           <h2>{section.sectionName}</h2>
//           {section.questions.map((question) => (
//             <div key={question.qustion_id}>
//               {/* Display question image */}
//               <img src={`data:image/png;base64,${question.question_img}`} alt={`Question ${question.qustion_id}`} />

//               {/* Display option images */}
//               <ul>
//                 {question.option_img.map((option, index) => (
//                   <li key={index}>
//                     <img src={`data:image/png;base64,${option.option_img}`} alt={`Option ${option.Option_Index}`} />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function Paper1() {

//   const [questionData, setQuestionData] = useState([]);
//   const {testCreationTableId} = useParams();

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setQuestionData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   return (
//     <div>
//       {/* Access data as needed, for example: */}

//       {/* Map over questions and render them */}
//       <div
//         className="q1s"
//         style={{
//           display: "flex",
//           gap: "4rem",
//           flexDirection: "column",
//           width: "85vw",
//           margin: "2rem",
//         }}
//       >
//         {questionData.map((question, index) => (
//           <div
//             className="outColor"
//             style={{ background: "#e5e5e5", padding: "2rem 2rem" }}
//           >
//             <div key={question.question_id}>
//               <div className="question" key={index}>
//                 <h3>{index + 1}</h3>
//                 <img
//                   src={`data:image/png;base64,${question.question_img}`}
//                   alt="Question"
//                 />
//               </div>

//               {/* Map over options and render them */}
//               {questionData
//                 .filter((opt) => opt.question_id === question.question_id)
//                 .map((option) => (

//                     <img
//                       key={option.question_id}
//                       src={`data:image/png;base64,${option.option_img}`}
//                       alt="Option"
//                     />

//                 ))}

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function Paper1() {
//   const [questionData, setQuestionData] = useState([]);

//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();

//         // Check if the data has both 'questions' and 'options' properties
//         if (data && data.questions && data.options) {
//           // Assuming both questions and options are arrays, you might want to merge them
//           const mergedData = data.questions.map((question, index) => ({
//             ...question,
//             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
//           }));

//           setQuestionData(mergedData);
//         } else {
//           console.error("API response does not have expected structure:", data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   // useEffect(() => {
//   //   const fetchQuestionData = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}`
//   //       );
//   //       const data = await response.json();

//   //       // Check if the data is an array before setting state
//   //       if (Array.isArray(data)) {
//   //         setQuestionData(data);
//   //       } else {
//   //         console.error("API response is not an array:", data);
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };

//   //   fetchQuestionData();
//   // }, [testCreationTableId]);

//   return (
//     <div>
//       <div

//       >
//         {questionData.map((question, index) => (
//           <div

//             key={question.question_id}
//           >
//             <div className="question" key={index}>
//               <h3>{index + 1}</h3>
//               <img
//                 src={`data:image/png;base64,${question.question_img}`}
//                 alt="Question"
//               />
//             </div>

//             {questionData
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <img
//                   key={option.question_id}
//                   src={`data:image/png;base64,${option.option_img}`}
//                   alt="Option"
//                 />
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// function Paper1() {
//   const [questionData, setQuestionData] = useState([]);
//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();

//         // Check if the data has both 'questions' and 'options' properties
//         if (data && data.questions && data.options) {
//           // Assuming both questions and options are arrays, you might want to merge them
//           const mergedData = data.questions.map((question, index) => ({
//             ...question,
//             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
//           }));

//           setQuestionData(mergedData);
//         } else {
//           console.error("API response does not have expected structure:", data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   const [Subjects, setSubjects] = useState([]);
//   // const { testCreationTableId, subjectId } = useParams();
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/fetchSections/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSections(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questionData.length).fill("")
//   );

//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const onAnswerSelected = (optionIndex) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const clearResponse = () => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[activeQuestion] = "";
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const goToPreviousQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       // Save the current timer value for the question

//       const updatedTimers = [...timers];

//       updatedTimers[prevIndex] = timer;

//       setTimers(updatedTimers);

//       // Move to the previous question

//       return prevIndex - 1;
//     });

//     if (questionData > 0) {
//       setActiveQuestion(questionData - 1);
//     }
//   };

//   const [timer, setTimer] = useState(0);
//   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);

//     const minutes = Math.floor((seconds % 3600) / 60);

//     const remainingSeconds = seconds % 60;

//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   useEffect(() => {
//     // Set the timer to the saved value for the current question
//     setTimer(timers[currentQuestionIndex] || 0);
//     let interval;
//     interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);
//     // Clear the interval when the component unmounts or when the user moves to the next question
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers]);

//   return (
//     <div>
//       <div>
//         <PaperHeader />
//       </div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle, index) => (
//           <li key={index}>
//             <button className="subject-btn">{subjectTitle.subjectName}</button>
//           </li>
//         ))}
//       </div>
//       <div className="second-header">
//         <div className="single-select-question">
//           {sections.map((sectionTitle, index) => (
//             <li key={index}>
//               <p>{sectionTitle.sectionName}</p>
//             </li>
//           ))}
//           {/* Single Select Question */}
//         </div>
//         <div className="right-header">
//           <div className="marks">
//             Marks: <div className="plus-mark">+1</div>
//             <div className="minus-mark">-1</div>
//           </div>
//           <div>Timer: {formatTime(timer)}</div>
//         </div>
//       </div>

//           <div>
//           {questionData.map((question, index) => (
//             <>
//               <div key={question.question_id}>
//                 <div className="question" key={index}>
//                   <h3>{index + 1}</h3>
//                   {question.question_img ? (
//                     <img
//                       src={`data:image/png;base64,${question.question_img}`}
//                       alt="Question"
//                     />
//                   ) : (
//                     <p>No question image available</p>
//                   )}
//                 </div>

//                 {question.options &&
//                   question.options.map((option, optionIndex) => (
//                     <div key={option.question_id}>
//                       {option.option_img ? (
//                         <li key={optionIndex}>
//                           <input
//                             type="radio"
//                             name={`question-${currentQuestionIndex}-option`}
//                             value={optionIndex}
//                             checked={
//                               selectedAnswers[currentQuestionIndex] ===
//                               optionIndex
//                             }
//                             onChange={() => onAnswerSelected(optionIndex)}
//                           />
//                           <img
//                             src={`data:image/png;base64,${option.option_img}`}
//                             alt="Option"
//                           />
//                         </li>
//                       ) : (
//                         <p>No option image available</p>
//                       )}
//                     </div>
//                   ))}
//               </div>
//               {/* <div className="flex-right">
//                 <button className="clear-btn" onClick={clearResponse}>
//                   Clear Response
//                 </button>
//                 <button
//                   className="previous-btn"
//                   onClick={goToPreviousQuestion}
//                   disabled={questionData === 0}
//                 >
//                   <i className="fa-solid fa-angles-left"></i> Previous
//                 </button>
//                 <button className="save-btn" onClick={handleNextClick}>
//                   Next <i className="fa-solid fa-angles-right"></i>
//                 </button>
//               </div> */}
//             </>
//           ))}
//         </div>

//     </div>
//   );
// }

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// function Paper1() {
//   const [questionData, setQuestionData] = useState([]);
//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();

//         // Check if the data has both 'questions' and 'options' properties
//         if (data && data.questions && data.options) {
//           // Assuming both questions and options are arrays, you might want to merge them
//           const mergedData = data.questions.map((question, index) => ({
//             ...question,
//             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
//           }));

//           setQuestionData(mergedData);
//         } else {
//           console.error("API response does not have expected structure:", data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   const [Subjects, setSubjects] = useState([]);
//   // const { testCreationTableId, subjectId } = useParams();
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/fetchSections/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSections(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questionData.length).fill("")
//   );

//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const onAnswerSelected = (optionIndex) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const clearResponse = () => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[activeQuestion] = "";
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const goToPreviousQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       // Save the current timer value for the question

//       const updatedTimers = [...timers];

//       updatedTimers[prevIndex] = timer;

//       setTimers(updatedTimers);

//       // Move to the previous question

//       return prevIndex - 1;
//     });

//     if (questionData > 0) {
//       setActiveQuestion(questionData - 1);
//     }
//   };

//   const [timer, setTimer] = useState(0);
//   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);

//     const minutes = Math.floor((seconds % 3600) / 60);

//     const remainingSeconds = seconds % 60;

//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   useEffect(() => {
//     // Set the timer to the saved value for the current question
//     setTimer(timers[currentQuestionIndex] || 0);
//     let interval;
//     interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);
//     // Clear the interval when the component unmounts or when the user moves to the next question
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers]);

//   return (
//     <div>
//       <div>
//         <PaperHeader />
//       </div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle, index) => (
//           <li key={index}>
//             <button className="subject-btn">{subjectTitle.subjectName}</button>
//           </li>
//         ))}
//       </div>
//       <div className="second-header">
//         <div className="single-select-question">
//           {sections.map((sectionTitle, index) => (
//             <li key={index}>
//               <p>{sectionTitle.sectionName}</p>
//             </li>
//           ))}
//           {/* Single Select Question */}
//         </div>
//         <div className="right-header">
//           <div className="marks">
//             Marks: <div className="plus-mark">+1</div>
//             <div className="minus-mark">-1</div>
//           </div>
//           <div>Timer: {formatTime(timer)}</div>
//         </div>
//       </div>
//       {questionData.length > 0 && (
//         <div>
//           {questionData.map((question, index) => (
//             <>
//               <div key={question.question_id}>
//                 <div className="question" key={index}>
//                   <h4>
//                     {currentQuestionIndex + 1}.
//                     <img
//                       src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
//                       alt={`Question ${currentQuestionIndex + 1}`}
//                     />
//                   </h4>
//                 </div>

//                 {questionData[currentQuestionIndex].optionImages.map(
//                   (OptionImage, optionIndex) => (
//                     <li key={optionIndex}>
//                       <input
//                         type="radio"
//                         name={`question-${currentQuestionIndex}-option`}
//                         value={optionIndex}
//                         checked={
//                           selectedAnswers[currentQuestionIndex] === optionIndex
//                         }
//                         onChange={() => onAnswerSelected(optionIndex)}
//                       />
//                       <img
//                         key={optionIndex}
//                         src={`data:image/png;base64,${OptionImage.option_img}`}
//                         alt={`Option ${optionIndex + 1}`}
//                       />
//                     </li>
//                   )
//                 )}

//               </div>
//               <div className="flex-right">
//                 <button className="clear-btn" onClick={clearResponse}>
//                   Clear Response
//                 </button>
//                 <button
//                   className="previous-btn"
//                   onClick={goToPreviousQuestion}
//                   disabled={questionData === 0}
//                 >
//                   <i className="fa-solid fa-angles-left"></i> Previous
//                 </button>
//                 <button className="save-btn" onClick={handleNextClick}>
//                   Next <i className="fa-solid fa-angles-right"></i>
//                 </button>
//               </div>
//             </>
//            ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// import "./Paper.css";
// const Paper1 = () => {
//   const [questionData, setQuestionData] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [Subjects, setSubjects] = useState([]);
//   const { testCreationTableId, subjectId } = useParams();
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/fetchSections/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSections(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSections();
//   }, [testCreationTableId]);

//   // useEffect(() => {
//   //   const fetchQuestionData = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}`
//   //       );
//   //       const data = await response.json();

//   //       // Check if the data has both 'questions' and 'options' properties
//   //       if (data && data.questions && data.options) {
//   //         // Assuming both questions and options are arrays, you might want to merge them
//   //         const mergedData = data.questions.map((question, index) => ({
//   //           ...question,
//   //           options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
//   //         }));

//   //         setQuestionData(mergedData);
//   //       } else {
//   //         console.error("API response does not have expected structure:", data);
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };

//   //   fetchQuestionData();
//   // }, [testCreationTableId]);

//   useEffect(() => {
//     const fetchQuestionDataBySubjectId = async () => {
//       try {
//         if (!subjectId) {
//           // Handle the case where subjectId is undefined (e.g., set default value or skip the API call)
//           console.warn("subjectId is undefined. Skipping API call.");
//           return;
//         }

//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//         );
//         const data = await response.json();
//         console.log(subjectId);

//         // Check if the data has both 'questions' and 'options' properties
//         if (data && data.questions && data.options) {
//           // Assuming both questions and options are arrays, you might want to merge them
//           const mergedData = data.questions.map((question, index) => ({
//             ...question,
//             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
//           }));

//           setQuestionData(mergedData);
//         } else {
//           console.error("API response does not have expected structure:", data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionDataBySubjectId();
//   }, [testCreationTableId, subjectId]);

//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questionData.length).fill("")
//   );

//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const onAnswerSelected = (optionIndex) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   // const clearResponse = () => {
//   //   const updatedSelectedAnswers = [...selectedAnswers];
//   //   updatedSelectedAnswers[activeQuestion] = "";
//   //   setSelectedAnswers(updatedSelectedAnswers);
//   // };
//   const clearResponse = () => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = "";
//     setSelectedAnswers(updatedSelectedAnswers);
//   };

//   const goToPreviousQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       // Save the current timer value for the question
//       const updatedTimers = [...timers];
//       updatedTimers[prevIndex] = timer;
//       setTimers(updatedTimers);
//       // Move to the previous question
//       return prevIndex - 1;
//     });

//     if (questionData > 0) {
//       setActiveQuestion(questionData - 1);
//     }
//   };

//   // ---------------------------------Timer code Start--------------------------------
//   const [timer, setTimer] = useState(0);
//   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);

//     const minutes = Math.floor((seconds % 3600) / 60);

//     const remainingSeconds = seconds % 60;

//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   useEffect(() => {
//     // Set the timer to the saved value for the current question
//     setTimer(timers[currentQuestionIndex] || 0);
//     let interval;
//     interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);
//     // Clear the interval when the component unmounts or when the user moves to the next question
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers]);
//   // ------------------------------------Timer code end--------------------------------
//   // const handleSubjectsClick = async (subjectId) => {
//   //   console.log("testCreationTableId:", testCreationTableId);
//   //   console.log("subjectId:", subjectId);
//   //   try {
//   //     const response = await fetch(
//   //       `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//   //     );
//   //     const data = await response.json();
//   //     setQuestionData(data);

//   //     // Other data you might want to set, such as sections, subjects, etc.
//   //     // setSections(data.sections);
//   //     // setSubjects(data.subjects);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <div>
//       <div>
//         <PaperHeader />
//       </div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle) => (
//           <li key={subjectTitle.subjectId}>
//             <Link
//               to="#"
//               // onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
//               className="subject-btn"
//             >
//               {subjectTitle.subjectName}
//             </Link>
//             {/* <button className="subject-btn">{subjectTitle.subjectName}</button> */}
//           </li>
//         ))}
//       </div>
//       <div className="second-header">
//         <div className="single-select-question">
//           {sections.map((sectionTitle, index) => (
//             <li key={index}>
//               <p>{sectionTitle.sectionName}</p>
//             </li>
//           ))}
//           {/* Single Select Question */}
//         </div>
//         <div className="right-header">
//           <div className="marks">
//             Marks: <div className="plus-mark">+1</div>
//             <div className="minus-mark">-1</div>
//           </div>
//           <div>Timer: {formatTime(timer)}</div>
//         </div>
//       </div>
//       <div>
//         <p>
//           {" "}
//           Question No. {currentQuestionIndex + 1} of {questionData.length}
//         </p>
//       </div>

//       {/* {questionData &&
//         questionData.length > 0 &&
//         questionData[currentQuestionIndex].options && (
//           <div>
//             <h4>
//               <img
//                 src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
//                 alt={`Question ${currentQuestionIndex + 1}`}
//               />
//             </h4>

//             {questionData[currentQuestionIndex].options.map(
//               (option, optionIndex) => (
//                 <li key={optionIndex}>
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestionIndex}-option`}
//                     value={optionIndex}
//                     checked={
//                       selectedAnswers[currentQuestionIndex] === optionIndex
//                     }
//                     onChange={() => onAnswerSelected(optionIndex)}
//                   />
//                   {option.options &&
//                     option.options.map((subOption, subOptionIndex) => (
//                       <img
//                         key={subOptionIndex}
//                         src={`data:image/png;base64,${subOption.option_img}`}
//                         alt={`Option ${subOptionIndex + 1}`}
//                         onLoad={() =>
//                           console.log(
//                             `Image ${subOptionIndex + 1} loaded successfully`
//                           )
//                         }
//                         onError={(error) =>
//                           console.error(`Error loading image: ${error.message}`)
//                         }
//                       />
//                     ))}
//                 </li>
//               )
//             )}

//             <div className="flex-right">
//               <button className="clear-btn" onClick={clearResponse}>
//                 Clear Response
//               </button>
//               <button
//                 className="previous-btn"
//                 onClick={goToPreviousQuestion}
//                 disabled={questionData === 0}
//               >
//                 <i className="fa-solid fa-angles-left"></i> Previous
//               </button>
//               <button className="save-btn" onClick={handleNextClick}>
//                 Next <i className="fa-solid fa-angles-right"></i>
//               </button>
//             </div>
//           </div>
//          )} */}

//      {questionData &&
//         questionData.length > 0 &&
//         questionData[currentQuestionIndex].options && (
//           <div>
//             <h4>
//               <img
//                 src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
//                 alt={`Question ${currentQuestionIndex + 1}`}
//               />
//             </h4>

//             {questionData[currentQuestionIndex].options.map(
//               (OptionImage, optionIndex) => (
//                 <li key={optionIndex}>
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestionIndex}-option`}
//                     value={optionIndex}
//                     checked={
//                       selectedAnswers[currentQuestionIndex] === optionIndex
//                     }
//                     onChange={() => onAnswerSelected(optionIndex)}
//                   />

//                   {OptionImage.options &&
//                     OptionImage.options.map((option, optionIndex) => (
//                       <img
//                         key={option.question_id}
//                         src={`data:image/png;base64,${option.option_img}`}
//                         alt={`Option ${optionIndex + 1}`}
//                         onLoad={() =>
//                           console.log(
//                             `Image ${optionIndex + 1} loaded successfully`
//                           )
//                         }
//                         onError={(error) =>
//                           console.error(`Error loading image: ${error.message}`)
//                         }
//                       />
//                     ))}
//                 </li>
//               )
//             )}

//             <div className="flex-right">
//               <button className="clear-btn" onClick={clearResponse}>
//                 Clear Response
//               </button>
//               <button
//                 className="previous-btn"
//                 onClick={goToPreviousQuestion}
//                 disabled={questionData === 0}
//               >
//                 <i className="fa-solid fa-angles-left"></i> Previous
//               </button>
//               <button className="save-btn" onClick={handleNextClick}>
//                 Next <i className="fa-solid fa-angles-right"></i>
//               </button>
//             </div>
//           </div>
//         )}
//     </div>
//   );
// };

// export default Paper1;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function Paper1() {
//   const [questionData, setQuestionData] = useState([]);

//   const { testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchQuestionData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const data = await response.json();

//         // Check if the data is an array before setting state
//         if (Array.isArray(data)) {
//           setQuestionData(data);
//         } else {
//           console.error("API response is not an array:", data);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestionData();
//   }, [testCreationTableId]);

//   return (
//     <div>
//       <div
//         className="q1s"
//         style={{
//           display: "flex",
//           gap: "4rem",
//           flexDirection: "column",
//           width: "85vw",
//           margin: "2rem",
//         }}
//       >
//         {questionData.map((question, index) => (
//           <div
//             className="outColor"
//             style={{ background: "#e5e5e5", padding: "2rem 2rem" }}
//             key={question.question_id}
//           >
//             <div className="question" key={index}>
//               <h3>{index + 1}</h3>
//               <img
//                 src={`data:image/png;base64,${question.question_img}`}
//                 alt="Question"
//               />
//             </div>

//             {questionData
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <img
//                   key={option.question_id}
//                   src={`data:image/png;base64,${option.option_img}`}
//                   alt="Option"
//                 />
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Paper1;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// const Paper1 = () => {

//   const [data, setData] = useState(null);
// const {subjectId, testCreationTableId} = useParams();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//        {data.map((question, index) => (

//      <div className='outColor' style={{background:'#e5e5e5',padding:'2rem 2rem'}}>
//       <div key={question.question_id} >
//       <div className='question' key={index}>
//        <h3>{index+1}</h3>
//       <img src={`data:image/png;base64,${question.question_img}`} alt="Question" />
//       </div>

//        {/* Map over options and render them */}
//        {data
//          .filter((opt) => opt.question_id === question.question_id)
//          .map((option) => (
//           <div className='option'>
//               <img key={option.question_id} src={`data:image/png;base64,${option.option_img}`} alt="Option" />
//           </div>
//          ))}

//      </div>
//     </div>

//    ))}
//     </div>
//   )
// }

// export default Paper1

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Paper1 = () => {
//   const [data, setData] = useState(null);
//   const { subjectId, testCreationTableId } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`);
//         const result = await response.json();
//         console.log('Result:', result); // Add this line
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   return (
//     <div>
//       {data !== null ? (
//         data.map((question, index) => (
//           <div  key={index}>
//             <div className='question'>
//               <h3>{index + 1}</h3>
//               <img src={`data:image/png;base64,${question.question_img}`} alt="Question" />
//             </div>

//             {/* Map over options and render them */}
//             {data
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <div className='option' key={option.question_id}>
//                   <img src={`data:image/png;base64,${option.option_img}`} alt="Option" />
//                 </div>
//               ))}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;

// //main working code
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const Paper1 = () => {
//   const [data, setData] = useState(null);
//   const { subjectId, testCreationTableId } = useParams();
//   const [Subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//         );
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);


  

//   const handleSubjectsClick = async (subjectId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//       );
//       const subjectsData = await response.json();
  
//       if (Array.isArray(subjectsData)) {
//         setSubjects(subjectsData);
//       } else {
//         console.error('Invalid data format:', subjectsData);
//       }
  
//       console.log(subjectId);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   // const handleSubjectsClick = async (subjectId) => {
//   //   try {
//   //     // Fetch tests based on both courseCreationId and typeOfTestId
//   //     const response = await fetch(
//   //       `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//   //     );
//   //     const Subjects = await response.json();
//   //     setSubjects(Subjects);
//   //     console.log(subjectId);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle) => (
//           <li key={subjectTitle.subjectId}>
//             <Link
//               to="#"
//               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
//               className="subject-btn"
//             >
//               {subjectTitle.subjectName}
//             </Link>
//           </li>
//         ))}
//       </div>
//       {data !== null ? (
//         data.questions.map((question, index) => (
//           <div key={index}>
//             <div className="question">
//               <h3>{index + 1}</h3>
//               <img
//                 src={`data:image/png;base64,${question.question_img}`}
//                 alt="Question"
//               />
//             </div>

//             {/* Map over options and render them */}
//             {data.options
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <div className="option" key={option.question_id}>
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt="Option"
//                   />
//                 </div>
//               ))}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;











//1st main working code
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const Paper1 = () => {
//   const [data, setData] = useState(null);
//   const { subjectId, testCreationTableId } = useParams();
//   const [Subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//         );
//         const result = await response.json();
//         setData(result);
//         console.log(data)
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const data = await response.json();
//         setSubjects(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId]);

//   const handleSubjectsClick = async (subjectId) => {
//       setData(null);
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//       } else {
//         console.error('Invalid data format:', subjectsData);
//       }

//       console.log(subjectId);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle) => (
//           <li key={subjectTitle.subjectId}>
//             <Link
//               to="#"
//               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
//               className="subject-btn"
//             >
//               {subjectTitle.subjectName}
//             </Link>
//           </li>
//         ))}
//       </div>
//       {data !== null ? (
//         data.questions.map((question, index) => (
//           <div key={index}>
//             <div className="question">
//               <h3>{index + 1}</h3>
//               <img
//                 src={`data:image/png;base64,${question.question_img}`}
//                 alt="Question"
//               />
//             </div>

//             {/* Map over options and render them */}
//             {data.options
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <div className="option" key={option.question_id}>
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt="Option"
//                   />
//                 </div>
//               ))}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;











//2nd working code for default data displaying

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Paper1 = () => {
  const [data, setData] = useState(null);
  const { subjectId, testCreationTableId } = useParams();
  const [Subjects, setSubjects] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);
        console.log(subjectsData);
  
        // Find the least subjectId
        const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;
  
        // If subjectId is not provided, set it to the least subjectId
        const defaultSubjectId = subjectId || leastSubjectId;
  
        // Fetch data for the default subject
        const response = await fetch(
          `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
        );
        const result = await response.json();
        setData(result);
  
        // Construct the link with the least subjectId
        const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
        // Use linkUrl as needed in your component
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [testCreationTableId, subjectId]);
  
  



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch all subjects
  //       const responseSubjects = await fetch(
  //         `http://localhost:4009/subjects/${testCreationTableId}`
  //       );
  //       const subjectsData = await responseSubjects.json();
  //       setSubjects(subjectsData);
  //       console.log(subjectsData);
        

  //       // If subjectId is not provided, set it to the first subject
  //       // const subjectId ='1';
  //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
  //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

  //       // Fetch data for the default subject
  //       const response = await fetch(
  //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
  //       );
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [testCreationTableId, subjectId]);


  
  const handleSubjectsClick = async (clickedSubjectId) => {
    setData(null);
    try {
      const response = await fetch(
        `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
      );
      const subjectsData = await response.json();

      if (subjectsData && subjectsData.questions) {
        setData(subjectsData);
      } else {
        console.error('Invalid data format:', subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <div className="subjects">
        {Subjects.map((subjectTitle) => (
          <li key={subjectTitle.subjectId}>
            <Link
              to="#"
              onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
              className="subject-btn"
            >
        {/* {subjectTitle.subjectId[0]} */}
              {subjectTitle.subjectName}
            </Link>
          </li>
        ))}
      </div>
      {data !== null ? (
        data.questions.map((question, index) => (
          <div key={index}>
            <div className="question">
              <h3>{index + 1}</h3>
              <img
                src={`data:image/png;base64,${question.question_img}`}
                alt="Question"
              />
            </div>

            {/* Map over options and render them */}
            {data.options
              .filter((opt) => opt.question_id === question.question_id)
              .map((option) => (
                <div className="option" key={option.question_id}>
                  <img
                    src={`data:image/png;base64,${option.option_img}`}
                    alt="Option"
                  />
                </div>
              ))}
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Paper1;





// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const Paper1 = () => {
//   const [data, setData] = useState(null);
//   const { subjectId, testCreationTableId } = useParams();
//   const [Subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch all subjects
//         const responseSubjects = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await responseSubjects.json();
//         setSubjects(subjectsData);

//         // If subjectId is not provided, set it to the least subject id
//         const defaultSubjectId = subjectId || (subjectsData.length > 0 ? subjectsData.reduce((min, subject) => subject.subjectId < min ? subject.subjectId : min, subjectsData[0].subjectId) : null);

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   const handleSubjectsClick = async (clickedSubjectId) => {
//     setData(null);
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//       } else {
//         console.error('Invalid data format:', subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle) => (
//           <li key={subjectTitle.subjectId}>
//             <Link
//               to="#"
//               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
//               className="subject-btn"
//             >
//               {subjectTitle.subjectName}
//             </Link>
//           </li>
//         ))}
//       </div>
//       {data !== null ? (
//         data.questions.map((question, index) => (
//           <div key={index}>
//             <div className="question">
//               <h3>{index + 1}</h3>
//               <img
//                 src={`data:image/png;base64,${question.question_img}`}
//                 alt="Question"
//               />
//             </div>

//             {/* Map over options and render them */}
//             {data.options
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <div className="option" key={option.question_id}>
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt="Option"
//                   />
//                 </div>
//               ))}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;






// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const Paper1 = () => {
//   const [data, setData] = useState(null);
//   const { subjectId, testCreationTableId } = useParams();
//   const [Subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//         );
//         const result = await response.json();
//         setData(result);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await response.json();
//         setSubjects(subjectsData);

//         // Check if subjectId is not specified in the URL, set the first subject as default
//         if (!subjectId && subjectsData.length > 0) {
//           handleSubjectsClick(subjectsData[0].subjectId);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSubjects();
//   }, [testCreationTableId, subjectId]);

//   const handleSubjectsClick = async (subjectId) => {
//     setData(null);
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//       } else {
//         console.error("Invalid data format:", subjectsData);
//       }

//       console.log(subjectId);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div className="subjects">
//         {Subjects.map((subjectTitle) => (
//           <li key={subjectTitle.subjectId}>
//             <Link
//               to="#"
//               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
//               className="subject-btn"
//             >
//               {subjectTitle.subjectName}
//             </Link>
//           </li>
//         ))}
//       </div>
//       {data !== null ? (
//         data.questions.map((question, index) => (
//           <div key={index}>
//             <div className="question">
//               <h3>{index + 1}</h3>
//               <img
//                 src={`data:image/png;base64,${question.question_img}`}
//                 alt="Question"
//               />
//             </div>

//             {/* Map over options and render them */}
//             {data.options
//               .filter((opt) => opt.question_id === question.question_id)
//               .map((option) => (
//                 <div className="option" key={option.question_id}>
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt="Option"
//                   />
//                 </div>
//               ))}
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;


