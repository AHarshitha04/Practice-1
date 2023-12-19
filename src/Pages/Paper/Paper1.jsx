// // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";

// // const Paper1 = () => {
// //   // const { subi_id } = useParams();
// //   //     const [quizData, setQuizData] = useState([]);

// //   // console.log(quizData)
// //   // useEffect(() => {
// //   //   // Fetch data from the endpoint
// //   //   fetch(`http://localhost:10000/quiz_all/`+subi_id)

// //   //     .then((response) => response.json())
// //   //     .then((data) => setQuizData(data))
// //   //     .catch((error) => console.error('Error fetching data:', error));
// //   // }, [subi_id]);

// //   const [subjectNames, setSubjectNames] = useState([]);

// //   useEffect(() => {
// //     fetch(`http://localhost:4009/quiz_all/1`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data); // Log the data received from the API
// //         setSubjectNames(data);
// //       })
// //       .catch((error) => console.error("Error fetching data:", error));
// //   }, []);

// //   // const [answer, setAnswer] = useState([]);
// //   // useEffect(() => {
// //   //   // Fetch data from the endpoint
// //   //   fetch(`http://localhost:4009/answers/`)
// //   //     .then((response) => response.json())
// //   //     .then((data) => setAnswer(data))
// //   //     .catch((error) => console.error("Error fetching data:", error));
// //   // }, []);

// //   return (
// //     <div>
// //       <h1>hii</h1>

// //       <div>
// //         {Array.isArray(subjectNames) && subjectNames.length > 0 ? (
// //           <div>
// //             {subjectNames.map((subjects) => (
// //               <li key={subjects.subi_id}>
// //                 <p>{subjects.subject_name}</p>
// //               </li>
// //             ))}
// //           </div>
// //         ) : (
// //           <p>No subjects available.</p>
// //         )}
// //         {/* <ul>
// //            {subjectNames.map((item) => (
// //           <li key={item.subi_id}>
// //             <p>{item.subject_name}</p>
// //           </li>
// //         ))}
// //         </ul> */}

// //         {/* <button>Mathematics</button>
// //                 <button>Physics</button>
// //                 <button>Chemistry</button> */}
// //       </div>

// //       {/* answers display */}
// //       {/* <div>
// //       {answer.map((ans) => (
// //           <li key={ans.subi_id}>
// //             <p>{ans.answer}</p>
// //           </li>
// //         ))}
// //       </div> */}

// //       {/* <h1>Quiz Questions</h1> */}
// //       <div>
// //         {/* {quizData.map((question) => (
// //           <div key={question.question_id}>
// //             <h3>Question {question.question_id}</h3>
// //             <img
// //               src={`data:image/png;base64,${question.question_img}`}
// //               alt={`Question ${question.question_id}`}
// //             />
// //             <ul>
// //               {question.options.map((option) => (
// //                 <li key={option.option_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt={`Option ${option.option_id}`}
// //                   />
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))} */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // import "./Paper.css";
// // const Paper1 = () => {
// //   const [questionData, setQuestionData] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [Subjects, setSubjects] = useState([]);
// //   const { testCreationTableId, subjectId } = useParams();
// //   const [sections, setSections] = useState([]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/fetchSections/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSections(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setQuestionData(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   const [selectedAnswers, setSelectedAnswers] = useState(
// //     Array(questionData.length).fill("")
// //   );

// //   const handleNextClick = () => {
// //     // Update the current question index to move to the next question
// //     setCurrentQuestionIndex((prevIndex) =>
// //       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
// //     );
// //   };

// //   const onAnswerSelected = (optionIndex) => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const [activeQuestion, setActiveQuestion] = useState(0);
// //   const clearResponse = () => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[activeQuestion] = "";
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const goToPreviousQuestion = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question

// //       const updatedTimers = [...timers];

// //       updatedTimers[prevIndex] = timer;

// //       setTimers(updatedTimers);

// //       // Move to the previous question

// //       return prevIndex - 1;
// //     });

// //     if (questionData > 0) {
// //       setActiveQuestion(questionData - 1);
// //     }
// //   };

// //   // ---------------------------------Timer code Start--------------------------------
// //   const [timer, setTimer] = useState(0);
// //   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);

// //     const minutes = Math.floor((seconds % 3600) / 60);

// //     const remainingSeconds = seconds % 60;

// //     return `${hours > 9 ? hours : "0" + hours}:${
// //       minutes > 9 ? minutes : "0" + minutes
// //     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //   };

// //   useEffect(() => {
// //     // Set the timer to the saved value for the current question
// //     setTimer(timers[currentQuestionIndex] || 0);
// //     let interval;
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //     // Clear the interval when the component unmounts or when the user moves to the next question
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentQuestionIndex, timers]);
// //   // ------------------------------------Timer code end--------------------------------

// //   return (
// //     <div>
// //       <div>
// //         <PaperHeader />
// //       </div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle, index) => (
// //           <li key={index}>
// //             <button className="subject-btn">{subjectTitle.subjectName}</button>
// //           </li>
// //         ))}
// //       </div>
// //       <div className="second-header">
// //         <div className="single-select-question">
// //           {sections.map((sectionTitle,index)=>(
// //             <li key={index}>
// //               <p>{sectionTitle.sectionName}</p>
// //             </li>
// //           ))}
// //           {/* Single Select Question */}
// //         </div>
// //         <div className="right-header">
// //           <div className="marks">
// //             Marks: <div className="plus-mark">+1</div>
// //             <div className="minus-mark">-1</div>
// //           </div>
// //           <div>Timer: {formatTime(timer)}</div>
// //         </div>
// //       </div>
// //       {questionData.length > 0 && (
// //         <div>
// //           <h4>
// //             {currentQuestionIndex + 1}.
// //             <img
// //               src={questionData[currentQuestionIndex].question_img}
// //               alt={`Question ${currentQuestionIndex + 1}`}
// //             />
// //           </h4>

// //           {questionData[currentQuestionIndex].optionImages.map(
// //             (OptionImage, optionIndex) => (
// //               <li key={optionIndex}>
// //                 <input
// //                   type="radio"
// //                   name={`question-${currentQuestionIndex}-option`}
// //                   value={optionIndex}
// //                   checked={
// //                     selectedAnswers[currentQuestionIndex] === optionIndex
// //                   }
// //                   onChange={() => onAnswerSelected(optionIndex)}
// //                 />
// //                 <img
// //                   key={optionIndex}
// //                   src={OptionImage.option_img}
// //                   alt={`Option ${optionIndex + 1}`}
// //                 />
// //               </li>
// //             )
// //           )}
// //           <div className="flex-right">
// //             <button className="clear-btn" onClick={clearResponse}>
// //               Clear Response
// //             </button>
// //             <button
// //               className="previous-btn"
// //               onClick={goToPreviousQuestion}
// //               disabled={questionData === 0}
// //             >
// //               <i className="fa-solid fa-angles-left"></i> Previous
// //             </button>
// //             <button className="save-btn" onClick={handleNextClick}>
// //               Next <i className="fa-solid fa-angles-right"></i>
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';

// // const Paper1 = () => {
// //   const [sections, setSections] = useState([]);
// //   const { testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4009/quiz_all/${testCreationTableId}`);

// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = await response.json();
// //         console.log('Received data:', data);
// //         setSections(data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]); // Use testCreationTableId as a dependency to trigger fetch when it changes

// //   return (
// //     <div>
// //       {Object.values(sections).map((section) => (
// //         <div key={section.sectionId}>
// //           <h2>{section.sectionName}</h2>
// //           {section.questions.map((question) => (
// //             <div key={question.qustion_id}>
// //               {/* Display question image */}
// //               <img src={`data:image/png;base64,${question.question_img}`} alt={`Question ${question.qustion_id}`} />

// //               {/* Display option images */}
// //               <ul>
// //                 {question.option_img.map((option, index) => (
// //                   <li key={index}>
// //                     <img src={`data:image/png;base64,${option.option_img}`} alt={`Option ${option.Option_Index}`} />
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // import "./Paper.css";
// // const Paper1 = () => {
// //   const [questionData, setQuestionData] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [Subjects, setSubjects] = useState([]);
// //   const { testCreationTableId, subjectId } = useParams();
// //   const [sections, setSections] = useState([]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/fetchSections/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSections(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setQuestionData(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   const [selectedAnswers, setSelectedAnswers] = useState(
// //     Array(questionData.length).fill("")
// //   );

// //   const handleNextClick = () => {
// //     // Update the current question index to move to the next question
// //     setCurrentQuestionIndex((prevIndex) =>
// //       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
// //     );
// //   };

// //   const onAnswerSelected = (optionIndex) => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const [activeQuestion, setActiveQuestion] = useState(0);
// //   const clearResponse = () => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[activeQuestion] = "";
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const goToPreviousQuestion = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question

// //       const updatedTimers = [...timers];

// //       updatedTimers[prevIndex] = timer;

// //       setTimers(updatedTimers);

// //       // Move to the previous question

// //       return prevIndex - 1;
// //     });

// //     if (questionData > 0) {
// //       setActiveQuestion(questionData - 1);
// //     }
// //   };

// //   // ---------------------------------Timer code Start--------------------------------
// //   const [timer, setTimer] = useState(0);
// //   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);

// //     const minutes = Math.floor((seconds % 3600) / 60);

// //     const remainingSeconds = seconds % 60;

// //     return `${hours > 9 ? hours : "0" + hours}:${
// //       minutes > 9 ? minutes : "0" + minutes
// //     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //   };

// //   useEffect(() => {
// //     // Set the timer to the saved value for the current question
// //     setTimer(timers[currentQuestionIndex] || 0);
// //     let interval;
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //     // Clear the interval when the component unmounts or when the user moves to the next question
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentQuestionIndex, timers]);
// //   // ------------------------------------Timer code end--------------------------------

// //   return (
// //     <div>
// //       <div>
// //         <PaperHeader />
// //       </div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle, index) => (
// //           <li key={index}>
// //             <button className="subject-btn">{subjectTitle.subjectName}</button>
// //           </li>
// //         ))}
// //       </div>
// //       <div className="second-header">
// //         <div className="single-select-question">
// //           {sections.map((sectionTitle,index)=>(
// //             <li key={index}>
// //               <p>{sectionTitle.sectionName}</p>
// //             </li>
// //           ))}
// //           {/* Single Select Question */}
// //         </div>
// //         <div className="right-header">
// //           <div className="marks">
// //             Marks: <div className="plus-mark">+1</div>
// //             <div className="minus-mark">-1</div>
// //           </div>
// //           <div>Timer: {formatTime(timer)}</div>
// //         </div>
// //       </div>
// //       {questionData.length > 0 && (
// //         <div>
// //           <h4>
// //             {currentQuestionIndex + 1}.
// //             <img
// //               src={questionData[currentQuestionIndex].question_img}
// //               alt={`Question ${currentQuestionIndex + 1}`}
// //             />
// //           </h4>

// //           {questionData[currentQuestionIndex].optionImages.map(
// //             (OptionImage, optionIndex) => (
// //               <li key={optionIndex}>
// //                 <input
// //                   type="radio"
// //                   name={`question-${currentQuestionIndex}-option`}
// //                   value={optionIndex}
// //                   checked={
// //                     selectedAnswers[currentQuestionIndex] === optionIndex
// //                   }
// //                   onChange={() => onAnswerSelected(optionIndex)}
// //                 />
// //                 <img
// //                   key={optionIndex}
// //                   src={OptionImage.option_img}
// //                   alt={`Option ${optionIndex + 1}`}
// //                 />
// //               </li>
// //             )
// //           )}
// //           <div className="flex-right">
// //             <button className="clear-btn" onClick={clearResponse}>
// //               Clear Response
// //             </button>
// //             <button
// //               className="previous-btn"
// //               onClick={goToPreviousQuestion}
// //               disabled={questionData === 0}
// //             >
// //               <i className="fa-solid fa-angles-left"></i> Previous
// //             </button>
// //             <button className="save-btn" onClick={handleNextClick}>
// //               Next <i className="fa-solid fa-angles-right"></i>
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';

// // const Paper1 = () => {
// //   const [sections, setSections] = useState([]);
// //   const { testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4009/quiz_all/${testCreationTableId}`);

// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }

// //         const data = await response.json();
// //         console.log('Received data:', data);
// //         setSections(data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]); // Use testCreationTableId as a dependency to trigger fetch when it changes

// //   return (
// //     <div>
// //       {Object.values(sections).map((section) => (
// //         <div key={section.sectionId}>
// //           <h2>{section.sectionName}</h2>
// //           {section.questions.map((question) => (
// //             <div key={question.qustion_id}>
// //               {/* Display question image */}
// //               <img src={`data:image/png;base64,${question.question_img}`} alt={`Question ${question.qustion_id}`} />

// //               {/* Display option images */}
// //               <ul>
// //                 {question.option_img.map((option, index) => (
// //                   <li key={index}>
// //                     <img src={`data:image/png;base64,${option.option_img}`} alt={`Option ${option.Option_Index}`} />
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // function Paper1() {

// //   const [questionData, setQuestionData] = useState([]);
// //   const {testCreationTableId} = useParams();

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setQuestionData(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   return (
// //     <div>
// //       {/* Access data as needed, for example: */}

// //       {/* Map over questions and render them */}
// //       <div
// //         className="q1s"
// //         style={{
// //           display: "flex",
// //           gap: "4rem",
// //           flexDirection: "column",
// //           width: "85vw",
// //           margin: "2rem",
// //         }}
// //       >
// //         {questionData.map((question, index) => (
// //           <div
// //             className="outColor"
// //             style={{ background: "#e5e5e5", padding: "2rem 2rem" }}
// //           >
// //             <div key={question.question_id}>
// //               <div className="question" key={index}>
// //                 <h3>{index + 1}</h3>
// //                 <img
// //                   src={`data:image/png;base64,${question.question_img}`}
// //                   alt="Question"
// //                 />
// //               </div>

// //               {/* Map over options and render them */}
// //               {questionData
// //                 .filter((opt) => opt.question_id === question.question_id)
// //                 .map((option) => (

// //                     <img
// //                       key={option.question_id}
// //                       src={`data:image/png;base64,${option.option_img}`}
// //                       alt="Option"
// //                     />

// //                 ))}

// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // function Paper1() {
// //   const [questionData, setQuestionData] = useState([]);

// //   const { testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();

// //         // Check if the data has both 'questions' and 'options' properties
// //         if (data && data.questions && data.options) {
// //           // Assuming both questions and options are arrays, you might want to merge them
// //           const mergedData = data.questions.map((question, index) => ({
// //             ...question,
// //             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
// //           }));

// //           setQuestionData(mergedData);
// //         } else {
// //           console.error("API response does not have expected structure:", data);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   // useEffect(() => {
// //   //   const fetchQuestionData = async () => {
// //   //     try {
// //   //       const response = await fetch(
// //   //         `http://localhost:4009/getPaperData/${testCreationTableId}`
// //   //       );
// //   //       const data = await response.json();

// //   //       // Check if the data is an array before setting state
// //   //       if (Array.isArray(data)) {
// //   //         setQuestionData(data);
// //   //       } else {
// //   //         console.error("API response is not an array:", data);
// //   //       }
// //   //     } catch (error) {
// //   //       console.error(error);
// //   //     }
// //   //   };

// //   //   fetchQuestionData();
// //   // }, [testCreationTableId]);

// //   return (
// //     <div>
// //       <div

// //       >
// //         {questionData.map((question, index) => (
// //           <div

// //             key={question.question_id}
// //           >
// //             <div className="question" key={index}>
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {questionData
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <img
// //                   key={option.question_id}
// //                   src={`data:image/png;base64,${option.option_img}`}
// //                   alt="Option"
// //                 />
// //               ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // function Paper1() {
// //   const [questionData, setQuestionData] = useState([]);
// //   const { testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();

// //         // Check if the data has both 'questions' and 'options' properties
// //         if (data && data.questions && data.options) {
// //           // Assuming both questions and options are arrays, you might want to merge them
// //           const mergedData = data.questions.map((question, index) => ({
// //             ...question,
// //             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
// //           }));

// //           setQuestionData(mergedData);
// //         } else {
// //           console.error("API response does not have expected structure:", data);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   const [Subjects, setSubjects] = useState([]);
// //   // const { testCreationTableId, subjectId } = useParams();
// //   const [sections, setSections] = useState([]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/fetchSections/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSections(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]);

// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedAnswers, setSelectedAnswers] = useState(
// //     Array(questionData.length).fill("")
// //   );

// //   const handleNextClick = () => {
// //     // Update the current question index to move to the next question
// //     setCurrentQuestionIndex((prevIndex) =>
// //       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
// //     );
// //   };

// //   const onAnswerSelected = (optionIndex) => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const [activeQuestion, setActiveQuestion] = useState(0);
// //   const clearResponse = () => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[activeQuestion] = "";
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const goToPreviousQuestion = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question

// //       const updatedTimers = [...timers];

// //       updatedTimers[prevIndex] = timer;

// //       setTimers(updatedTimers);

// //       // Move to the previous question

// //       return prevIndex - 1;
// //     });

// //     if (questionData > 0) {
// //       setActiveQuestion(questionData - 1);
// //     }
// //   };

// //   const [timer, setTimer] = useState(0);
// //   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);

// //     const minutes = Math.floor((seconds % 3600) / 60);

// //     const remainingSeconds = seconds % 60;

// //     return `${hours > 9 ? hours : "0" + hours}:${
// //       minutes > 9 ? minutes : "0" + minutes
// //     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //   };

// //   useEffect(() => {
// //     // Set the timer to the saved value for the current question
// //     setTimer(timers[currentQuestionIndex] || 0);
// //     let interval;
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //     // Clear the interval when the component unmounts or when the user moves to the next question
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentQuestionIndex, timers]);

// //   return (
// //     <div>
// //       <div>
// //         <PaperHeader />
// //       </div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle, index) => (
// //           <li key={index}>
// //             <button className="subject-btn">{subjectTitle.subjectName}</button>
// //           </li>
// //         ))}
// //       </div>
// //       <div className="second-header">
// //         <div className="single-select-question">
// //           {sections.map((sectionTitle, index) => (
// //             <li key={index}>
// //               <p>{sectionTitle.sectionName}</p>
// //             </li>
// //           ))}
// //           {/* Single Select Question */}
// //         </div>
// //         <div className="right-header">
// //           <div className="marks">
// //             Marks: <div className="plus-mark">+1</div>
// //             <div className="minus-mark">-1</div>
// //           </div>
// //           <div>Timer: {formatTime(timer)}</div>
// //         </div>
// //       </div>

// //           <div>
// //           {questionData.map((question, index) => (
// //             <>
// //               <div key={question.question_id}>
// //                 <div className="question" key={index}>
// //                   <h3>{index + 1}</h3>
// //                   {question.question_img ? (
// //                     <img
// //                       src={`data:image/png;base64,${question.question_img}`}
// //                       alt="Question"
// //                     />
// //                   ) : (
// //                     <p>No question image available</p>
// //                   )}
// //                 </div>

// //                 {question.options &&
// //                   question.options.map((option, optionIndex) => (
// //                     <div key={option.question_id}>
// //                       {option.option_img ? (
// //                         <li key={optionIndex}>
// //                           <input
// //                             type="radio"
// //                             name={`question-${currentQuestionIndex}-option`}
// //                             value={optionIndex}
// //                             checked={
// //                               selectedAnswers[currentQuestionIndex] ===
// //                               optionIndex
// //                             }
// //                             onChange={() => onAnswerSelected(optionIndex)}
// //                           />
// //                           <img
// //                             src={`data:image/png;base64,${option.option_img}`}
// //                             alt="Option"
// //                           />
// //                         </li>
// //                       ) : (
// //                         <p>No option image available</p>
// //                       )}
// //                     </div>
// //                   ))}
// //               </div>
// //               {/* <div className="flex-right">
// //                 <button className="clear-btn" onClick={clearResponse}>
// //                   Clear Response
// //                 </button>
// //                 <button
// //                   className="previous-btn"
// //                   onClick={goToPreviousQuestion}
// //                   disabled={questionData === 0}
// //                 >
// //                   <i className="fa-solid fa-angles-left"></i> Previous
// //                 </button>
// //                 <button className="save-btn" onClick={handleNextClick}>
// //                   Next <i className="fa-solid fa-angles-right"></i>
// //                 </button>
// //               </div> */}
// //             </>
// //           ))}
// //         </div>

// //     </div>
// //   );
// // }

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // function Paper1() {
// //   const [questionData, setQuestionData] = useState([]);
// //   const { testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();

// //         // Check if the data has both 'questions' and 'options' properties
// //         if (data && data.questions && data.options) {
// //           // Assuming both questions and options are arrays, you might want to merge them
// //           const mergedData = data.questions.map((question, index) => ({
// //             ...question,
// //             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
// //           }));

// //           setQuestionData(mergedData);
// //         } else {
// //           console.error("API response does not have expected structure:", data);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   const [Subjects, setSubjects] = useState([]);
// //   // const { testCreationTableId, subjectId } = useParams();
// //   const [sections, setSections] = useState([]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/fetchSections/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSections(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]);

// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedAnswers, setSelectedAnswers] = useState(
// //     Array(questionData.length).fill("")
// //   );

// //   const handleNextClick = () => {
// //     // Update the current question index to move to the next question
// //     setCurrentQuestionIndex((prevIndex) =>
// //       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
// //     );
// //   };

// //   const onAnswerSelected = (optionIndex) => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const [activeQuestion, setActiveQuestion] = useState(0);
// //   const clearResponse = () => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[activeQuestion] = "";
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const goToPreviousQuestion = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question

// //       const updatedTimers = [...timers];

// //       updatedTimers[prevIndex] = timer;

// //       setTimers(updatedTimers);

// //       // Move to the previous question

// //       return prevIndex - 1;
// //     });

// //     if (questionData > 0) {
// //       setActiveQuestion(questionData - 1);
// //     }
// //   };

// //   const [timer, setTimer] = useState(0);
// //   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);

// //     const minutes = Math.floor((seconds % 3600) / 60);

// //     const remainingSeconds = seconds % 60;

// //     return `${hours > 9 ? hours : "0" + hours}:${
// //       minutes > 9 ? minutes : "0" + minutes
// //     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //   };

// //   useEffect(() => {
// //     // Set the timer to the saved value for the current question
// //     setTimer(timers[currentQuestionIndex] || 0);
// //     let interval;
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //     // Clear the interval when the component unmounts or when the user moves to the next question
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentQuestionIndex, timers]);

// //   return (
// //     <div>
// //       <div>
// //         <PaperHeader />
// //       </div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle, index) => (
// //           <li key={index}>
// //             <button className="subject-btn">{subjectTitle.subjectName}</button>
// //           </li>
// //         ))}
// //       </div>
// //       <div className="second-header">
// //         <div className="single-select-question">
// //           {sections.map((sectionTitle, index) => (
// //             <li key={index}>
// //               <p>{sectionTitle.sectionName}</p>
// //             </li>
// //           ))}
// //           {/* Single Select Question */}
// //         </div>
// //         <div className="right-header">
// //           <div className="marks">
// //             Marks: <div className="plus-mark">+1</div>
// //             <div className="minus-mark">-1</div>
// //           </div>
// //           <div>Timer: {formatTime(timer)}</div>
// //         </div>
// //       </div>
// //       {questionData.length > 0 && (
// //         <div>
// //           {questionData.map((question, index) => (
// //             <>
// //               <div key={question.question_id}>
// //                 <div className="question" key={index}>
// //                   <h4>
// //                     {currentQuestionIndex + 1}.
// //                     <img
// //                       src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
// //                       alt={`Question ${currentQuestionIndex + 1}`}
// //                     />
// //                   </h4>
// //                 </div>

// //                 {questionData[currentQuestionIndex].optionImages.map(
// //                   (OptionImage, optionIndex) => (
// //                     <li key={optionIndex}>
// //                       <input
// //                         type="radio"
// //                         name={`question-${currentQuestionIndex}-option`}
// //                         value={optionIndex}
// //                         checked={
// //                           selectedAnswers[currentQuestionIndex] === optionIndex
// //                         }
// //                         onChange={() => onAnswerSelected(optionIndex)}
// //                       />
// //                       <img
// //                         key={optionIndex}
// //                         src={`data:image/png;base64,${OptionImage.option_img}`}
// //                         alt={`Option ${optionIndex + 1}`}
// //                       />
// //                     </li>
// //                   )
// //                 )}

// //               </div>
// //               <div className="flex-right">
// //                 <button className="clear-btn" onClick={clearResponse}>
// //                   Clear Response
// //                 </button>
// //                 <button
// //                   className="previous-btn"
// //                   onClick={goToPreviousQuestion}
// //                   disabled={questionData === 0}
// //                 >
// //                   <i className="fa-solid fa-angles-left"></i> Previous
// //                 </button>
// //                 <button className="save-btn" onClick={handleNextClick}>
// //                   Next <i className="fa-solid fa-angles-right"></i>
// //                 </button>
// //               </div>
// //             </>
// //            ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // import "./Paper.css";
// // const Paper1 = () => {
// //   const [questionData, setQuestionData] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [Subjects, setSubjects] = useState([]);
// //   const { testCreationTableId, subjectId } = useParams();
// //   const [sections, setSections] = useState([]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/fetchSections/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSections(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]);

// //   // useEffect(() => {
// //   //   const fetchQuestionData = async () => {
// //   //     try {
// //   //       const response = await fetch(
// //   //         `http://localhost:4009/getPaperData/${testCreationTableId}`
// //   //       );
// //   //       const data = await response.json();

// //   //       // Check if the data has both 'questions' and 'options' properties
// //   //       if (data && data.questions && data.options) {
// //   //         // Assuming both questions and options are arrays, you might want to merge them
// //   //         const mergedData = data.questions.map((question, index) => ({
// //   //           ...question,
// //   //           options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
// //   //         }));

// //   //         setQuestionData(mergedData);
// //   //       } else {
// //   //         console.error("API response does not have expected structure:", data);
// //   //       }
// //   //     } catch (error) {
// //   //       console.error(error);
// //   //     }
// //   //   };

// //   //   fetchQuestionData();
// //   // }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchQuestionDataBySubjectId = async () => {
// //       try {
// //         if (!subjectId) {
// //           // Handle the case where subjectId is undefined (e.g., set default value or skip the API call)
// //           console.warn("subjectId is undefined. Skipping API call.");
// //           return;
// //         }

// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //         );
// //         const data = await response.json();
// //         console.log(subjectId);

// //         // Check if the data has both 'questions' and 'options' properties
// //         if (data && data.questions && data.options) {
// //           // Assuming both questions and options are arrays, you might want to merge them
// //           const mergedData = data.questions.map((question, index) => ({
// //             ...question,
// //             options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
// //           }));

// //           setQuestionData(mergedData);
// //         } else {
// //           console.error("API response does not have expected structure:", data);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionDataBySubjectId();
// //   }, [testCreationTableId, subjectId]);

// //   const [selectedAnswers, setSelectedAnswers] = useState(
// //     Array(questionData.length).fill("")
// //   );

// //   const handleNextClick = () => {
// //     // Update the current question index to move to the next question
// //     setCurrentQuestionIndex((prevIndex) =>
// //       prevIndex < questionData.length - 1 ? prevIndex + 1 : prevIndex
// //     );
// //   };

// //   const onAnswerSelected = (optionIndex) => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const [activeQuestion, setActiveQuestion] = useState(0);
// //   // const clearResponse = () => {
// //   //   const updatedSelectedAnswers = [...selectedAnswers];
// //   //   updatedSelectedAnswers[activeQuestion] = "";
// //   //   setSelectedAnswers(updatedSelectedAnswers);
// //   // };
// //   const clearResponse = () => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = "";
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const goToPreviousQuestion = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question
// //       const updatedTimers = [...timers];
// //       updatedTimers[prevIndex] = timer;
// //       setTimers(updatedTimers);
// //       // Move to the previous question
// //       return prevIndex - 1;
// //     });

// //     if (questionData > 0) {
// //       setActiveQuestion(questionData - 1);
// //     }
// //   };

// //   // ---------------------------------Timer code Start--------------------------------
// //   const [timer, setTimer] = useState(0);
// //   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);

// //     const minutes = Math.floor((seconds % 3600) / 60);

// //     const remainingSeconds = seconds % 60;

// //     return `${hours > 9 ? hours : "0" + hours}:${
// //       minutes > 9 ? minutes : "0" + minutes
// //     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //   };

// //   useEffect(() => {
// //     // Set the timer to the saved value for the current question
// //     setTimer(timers[currentQuestionIndex] || 0);
// //     let interval;
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //     // Clear the interval when the component unmounts or when the user moves to the next question
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentQuestionIndex, timers]);
// //   // ------------------------------------Timer code end--------------------------------
// //   // const handleSubjectsClick = async (subjectId) => {
// //   //   console.log("testCreationTableId:", testCreationTableId);
// //   //   console.log("subjectId:", subjectId);
// //   //   try {
// //   //     const response = await fetch(
// //   //       `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //   //     );
// //   //     const data = await response.json();
// //   //     setQuestionData(data);

// //   //     // Other data you might want to set, such as sections, subjects, etc.
// //   //     // setSections(data.sections);
// //   //     // setSubjects(data.subjects);
// //   //   } catch (error) {
// //   //     console.error(error);
// //   //   }
// //   // };

// //   return (
// //     <div>
// //       <div>
// //         <PaperHeader />
// //       </div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               // onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //               {subjectTitle.subjectName}
// //             </Link>
// //             {/* <button className="subject-btn">{subjectTitle.subjectName}</button> */}
// //           </li>
// //         ))}
// //       </div>
// //       <div className="second-header">
// //         <div className="single-select-question">
// //           {sections.map((sectionTitle, index) => (
// //             <li key={index}>
// //               <p>{sectionTitle.sectionName}</p>
// //             </li>
// //           ))}
// //           {/* Single Select Question */}
// //         </div>
// //         <div className="right-header">
// //           <div className="marks">
// //             Marks: <div className="plus-mark">+1</div>
// //             <div className="minus-mark">-1</div>
// //           </div>
// //           <div>Timer: {formatTime(timer)}</div>
// //         </div>
// //       </div>
// //       <div>
// //         <p>
// //           {" "}
// //           Question No. {currentQuestionIndex + 1} of {questionData.length}
// //         </p>
// //       </div>

// //       {/* {questionData &&
// //         questionData.length > 0 &&
// //         questionData[currentQuestionIndex].options && (
// //           <div>
// //             <h4>
// //               <img
// //                 src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
// //                 alt={`Question ${currentQuestionIndex + 1}`}
// //               />
// //             </h4>

// //             {questionData[currentQuestionIndex].options.map(
// //               (option, optionIndex) => (
// //                 <li key={optionIndex}>
// //                   <input
// //                     type="radio"
// //                     name={`question-${currentQuestionIndex}-option`}
// //                     value={optionIndex}
// //                     checked={
// //                       selectedAnswers[currentQuestionIndex] === optionIndex
// //                     }
// //                     onChange={() => onAnswerSelected(optionIndex)}
// //                   />
// //                   {option.options &&
// //                     option.options.map((subOption, subOptionIndex) => (
// //                       <img
// //                         key={subOptionIndex}
// //                         src={`data:image/png;base64,${subOption.option_img}`}
// //                         alt={`Option ${subOptionIndex + 1}`}
// //                         onLoad={() =>
// //                           console.log(
// //                             `Image ${subOptionIndex + 1} loaded successfully`
// //                           )
// //                         }
// //                         onError={(error) =>
// //                           console.error(`Error loading image: ${error.message}`)
// //                         }
// //                       />
// //                     ))}
// //                 </li>
// //               )
// //             )}

// //             <div className="flex-right">
// //               <button className="clear-btn" onClick={clearResponse}>
// //                 Clear Response
// //               </button>
// //               <button
// //                 className="previous-btn"
// //                 onClick={goToPreviousQuestion}
// //                 disabled={questionData === 0}
// //               >
// //                 <i className="fa-solid fa-angles-left"></i> Previous
// //               </button>
// //               <button className="save-btn" onClick={handleNextClick}>
// //                 Next <i className="fa-solid fa-angles-right"></i>
// //               </button>
// //             </div>
// //           </div>
// //          )} */}

// //      {questionData &&
// //         questionData.length > 0 &&
// //         questionData[currentQuestionIndex].options && (
// //           <div>
// //             <h4>
// //               <img
// //                 src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
// //                 alt={`Question ${currentQuestionIndex + 1}`}
// //               />
// //             </h4>

// //             {questionData[currentQuestionIndex].options.map(
// //               (OptionImage, optionIndex) => (
// //                 <li key={optionIndex}>
// //                   <input
// //                     type="radio"
// //                     name={`question-${currentQuestionIndex}-option`}
// //                     value={optionIndex}
// //                     checked={
// //                       selectedAnswers[currentQuestionIndex] === optionIndex
// //                     }
// //                     onChange={() => onAnswerSelected(optionIndex)}
// //                   />

// //                   {OptionImage.options &&
// //                     OptionImage.options.map((option, optionIndex) => (
// //                       <img
// //                         key={option.question_id}
// //                         src={`data:image/png;base64,${option.option_img}`}
// //                         alt={`Option ${optionIndex + 1}`}
// //                         onLoad={() =>
// //                           console.log(
// //                             `Image ${optionIndex + 1} loaded successfully`
// //                           )
// //                         }
// //                         onError={(error) =>
// //                           console.error(`Error loading image: ${error.message}`)
// //                         }
// //                       />
// //                     ))}
// //                 </li>
// //               )
// //             )}

// //             <div className="flex-right">
// //               <button className="clear-btn" onClick={clearResponse}>
// //                 Clear Response
// //               </button>
// //               <button
// //                 className="previous-btn"
// //                 onClick={goToPreviousQuestion}
// //                 disabled={questionData === 0}
// //               >
// //                 <i className="fa-solid fa-angles-left"></i> Previous
// //               </button>
// //               <button className="save-btn" onClick={handleNextClick}>
// //                 Next <i className="fa-solid fa-angles-right"></i>
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // function Paper1() {
// //   const [questionData, setQuestionData] = useState([]);

// //   const { testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchQuestionData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         );
// //         const data = await response.json();

// //         // Check if the data is an array before setting state
// //         if (Array.isArray(data)) {
// //           setQuestionData(data);
// //         } else {
// //           console.error("API response is not an array:", data);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchQuestionData();
// //   }, [testCreationTableId]);

// //   return (
// //     <div>
// //       <div
// //         className="q1s"
// //         style={{
// //           display: "flex",
// //           gap: "4rem",
// //           flexDirection: "column",
// //           width: "85vw",
// //           margin: "2rem",
// //         }}
// //       >
// //         {questionData.map((question, index) => (
// //           <div
// //             className="outColor"
// //             style={{ background: "#e5e5e5", padding: "2rem 2rem" }}
// //             key={question.question_id}
// //           >
// //             <div className="question" key={index}>
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {questionData
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <img
// //                   key={option.question_id}
// //                   src={`data:image/png;base64,${option.option_img}`}
// //                   alt="Option"
// //                 />
// //               ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Paper1;

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // const Paper1 = () => {

// //   const [data, setData] = useState(null);
// // const {subjectId, testCreationTableId} = useParams();
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`);
// //         const result = await response.json();
// //         setData(result);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div>
// //        {data.map((question, index) => (

// //      <div className='outColor' style={{background:'#e5e5e5',padding:'2rem 2rem'}}>
// //       <div key={question.question_id} >
// //       <div className='question' key={index}>
// //        <h3>{index+1}</h3>
// //       <img src={`data:image/png;base64,${question.question_img}`} alt="Question" />
// //       </div>

// //        {/* Map over options and render them */}
// //        {data
// //          .filter((opt) => opt.question_id === question.question_id)
// //          .map((option) => (
// //           <div className='option'>
// //               <img key={option.question_id} src={`data:image/png;base64,${option.option_img}`} alt="Option" />
// //           </div>
// //          ))}

// //      </div>
// //     </div>

// //    ))}
// //     </div>
// //   )
// // }

// // export default Paper1

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`);
// //         const result = await response.json();
// //         console.log('Result:', result); // Add this line
// //         setData(result);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   return (
// //     <div>
// //       {data !== null ? (
// //         data.map((question, index) => (
// //           <div  key={index}>
// //             <div className='question'>
// //               <h3>{index + 1}</h3>
// //               <img src={`data:image/png;base64,${question.question_img}`} alt="Question" />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className='option' key={option.question_id}>
// //                   <img src={`data:image/png;base64,${option.option_img}`} alt="Option" />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // //main working code
// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   const handleSubjectsClick = async (subjectId) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (Array.isArray(subjectsData)) {
// //         setSubjects(subjectsData);
// //       } else {
// //         console.error('Invalid data format:', subjectsData);
// //       }

// //       console.log(subjectId);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   // const handleSubjectsClick = async (subjectId) => {
// //   //   try {
// //   //     // Fetch tests based on both courseCreationId and typeOfTestId
// //   //     const response = await fetch(
// //   //       `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //   //     );
// //   //     const Subjects = await response.json();
// //   //     setSubjects(Subjects);
// //   //     console.log(subjectId);
// //   //   } catch (error) {
// //   //     console.error(error);
// //   //   }
// //   // };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// //1st main working code
// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);
// //         console.log(data)
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSubjects(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId]);

// //   const handleSubjectsClick = async (subjectId) => {
// //       setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error('Invalid data format:', subjectsData);
// //       }

// //       console.log(subjectId);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // ----------------------------------------------------------------MAIN WORKING CODE-----------------------------------------------------------
// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all subjects
// //         const responseSubjects = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await responseSubjects.json();
// //         setSubjects(subjectsData);
// //         console.log(subjectsData);

// //         // Find the least subjectId
// //         const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;

// //         // If subjectId is not provided, set it to the least subjectId
// //         const defaultSubjectId = subjectId || leastSubjectId;

// //         // Fetch data for the default subject
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);

// //         // Construct the link with the least subjectId
// //         const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
// //         // Use linkUrl as needed in your component

// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     try {
// //   //       // Fetch all subjects
// //   //       const responseSubjects = await fetch(
// //   //         `http://localhost:4009/subjects/${testCreationTableId}`
// //   //       );
// //   //       const subjectsData = await responseSubjects.json();
// //   //       setSubjects(subjectsData);
// //   //       console.log(subjectsData);

// //   //       // If subjectId is not provided, set it to the first subject
// //   //       // const subjectId ='1';
// //   //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
// //   //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

// //   //       // Fetch data for the default subject
// //   //       const response = await fetch(
// //   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //   //       );
// //   //       const result = await response.json();
// //   //       setData(result);
// //   //     } catch (error) {
// //   //       console.error("Error fetching data:", error);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (clickedSubjectId) => {
// //     setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error('Invalid data format:', subjectsData);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //         {/* {subjectTitle.subjectId[0]} */}
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// //2nd working code for default data displaying

// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all subjects
// //         const responseSubjects = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await responseSubjects.json();
// //         setSubjects(subjectsData);
// //         console.log(subjectsData);

// //         // Find the least subjectId
// //         const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;

// //         // If subjectId is not provided, set it to the least subjectId
// //         const defaultSubjectId = subjectId || leastSubjectId;

// //         // Fetch data for the default subject
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);

// //         // Construct the link with the least subjectId
// //         const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
// //         // Use linkUrl as needed in your component

// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     try {
// //   //       // Fetch all subjects
// //   //       const responseSubjects = await fetch(
// //   //         `http://localhost:4009/subjects/${testCreationTableId}`
// //   //       );
// //   //       const subjectsData = await responseSubjects.json();
// //   //       setSubjects(subjectsData);
// //   //       console.log(subjectsData);

// //   //       // If subjectId is not provided, set it to the first subject
// //   //       // const subjectId ='1';
// //   //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
// //   //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

// //   //       // Fetch data for the default subject
// //   //       const response = await fetch(
// //   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //   //       );
// //   //       const result = await response.json();
// //   //       setData(result);
// //   //     } catch (error) {
// //   //       console.error("Error fetching data:", error);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (clickedSubjectId) => {
// //     setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error('Invalid data format:', subjectsData);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //         {/* {subjectTitle.subjectId[0]} */}
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all subjects
// //         const responseSubjects = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await responseSubjects.json();
// //         setSubjects(subjectsData);

// //         // If subjectId is not provided, set it to the least subject id
// //         const defaultSubjectId = subjectId || (subjectsData.length > 0 ? subjectsData.reduce((min, subject) => subject.subjectId < min ? subject.subjectId : min, subjectsData[0].subjectId) : null);

// //         // Fetch data for the default subject
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (clickedSubjectId) => {
// //     setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error('Invalid data format:', subjectsData);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);
// //         console.log(data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   useEffect(() => {
// //     const fetchSubjects = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await response.json();
// //         setSubjects(subjectsData);

// //         // Check if subjectId is not specified in the URL, set the first subject as default
// //         if (!subjectId && subjectsData.length > 0) {
// //           handleSubjectsClick(subjectsData[0].subjectId);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSubjects();
// //   }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (subjectId) => {
// //     setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${subjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error("Invalid data format:", subjectsData);
// //       }

// //       console.log(subjectId);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { Link, useParams, useNavigate } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // import "../Paper/Paper.css";
// // import ButtonsFunctionality from "./ButtonsFunctionality";
// // import TestResultsPage from "./TestResultsPage";

// // const Paper1 = ({ answeredQuestions }) => {

// //     const [selectedSubject, setSelectedSubject] = useState(null);

// //     const handleSubjectSelect = (subject) => {
// //         // Set the selected subject when a subject button is clicked
// //         setSelectedSubject(subject);
// //     };

// //     const [questionData, setQuestionData] = useState([]);
// //     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //     const [Subjects, setSubjects] = useState([]);
// //     const { testCreationTableId, subjectId } = useParams();
// //     const [sections, setSections] = useState([]);

// //     const [questionStatus, setQuestionStatus] = useState(
// //         Array(questionData.length).fill("notAnswered")
// //     );

// //     const [answeredCount, setAnsweredCount] = useState(0);
// //     const [notAnsweredCount, setNotAnsweredCount] = useState(0);
// //     const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
// //         useState(0);
// //     const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
// //     const [VisitedCount, setVisitedCount] = useState(0);

// //     const updateCounters = () => {
// //         let answered = 0;
// //         let notAnswered = 0;
// //         let marked = 0;
// //         let markedForReview = 0;
// //         let Visited = 0;

// //         questionStatus.forEach((status) => {
// //             if (status === "answered") {
// //                 answered++;
// //             } else if (status === "notAnswered") {
// //                 notAnswered++;
// //             } else if (status === "marked") {
// //                 marked++;
// //             } else if (status === "Answered but marked for review") {
// //                 markedForReview++;
// //             } else if (status === "notVisited") {
// //                 Visited++;
// //             }
// //         });

// //         setAnsweredCount(answered);
// //         setNotAnsweredCount(notAnswered);
// //         setAnsweredmarkedForReviewCount(marked);
// //         setMarkedForReviewCount(markedForReview);
// //         setVisitedCount(Visited);
// //     };

// //     // ---------------------------------Timer code Start--------------------------------
// //     const [timer, setTimer] = useState(0);
// //     const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //     const formatTime = (seconds) => {
// //         const hours = Math.floor(seconds / 3600);

// //         const minutes = Math.floor((seconds % 3600) / 60);

// //         const remainingSeconds = seconds % 60;

// //         return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes
// //             }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //     };

// //     useEffect(() => {
// //         // Set the timer to the saved value for the current question
// //         setTimer(timers[currentQuestionIndex] || 0);
// //         let interval;
// //         interval = setInterval(() => {
// //             setTimer((prevTimer) => prevTimer + 1);
// //         }, 1000);
// //         // Clear the interval when the component unmounts or when the user moves to the next question
// //         return () => {
// //             clearInterval(interval);
// //         };
// //     }, [currentQuestionIndex, timers]);
// //     // ------------------------------------Timer code end--------------------------------

// //     useEffect(() => {
// //         // const fetchSubjects = async () => {
// //         //     try {
// //         //         const response = await fetch(
// //         //             `http://localhost:4009/subjects/${testCreationTableId}`
// //         //         );
// //         //         const data = await response.json();
// //         //         setSubjects(data);
// //         //     } catch (error) {
// //         //         console.error(error);
// //         //     }
// //         // };

// //         const fetchSections = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `http://localhost:4009/fetchSections/${testCreationTableId}`
// //                 );
// //                 const data = await response.json();
// //                 setSections(data);
// //             } catch (error) {
// //                 console.error(error);
// //             }
// //         };

// //         // const fetchQuestionData = async () => {
// //         //     try {
// //         //         const response = await fetch(
// //         //             `http://localhost:4009/getPaperData/${testCreationTableId}`
// //         //         );
// //         //         const data = await response.json();

// //         //         // Check if the data has both 'questions' and 'options' properties
// //         //         if (data && data.questions && data.options) {
// //         //             // Assuming both questions and options are arrays, you might want to merge them
// //         //             const mergedData = data.questions.map((question, index) => ({
// //         //                 ...question,
// //         //                 options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
// //         //             }));

// //         //             setQuestionData(mergedData);
// //         //             setQuestionStatus([
// //         //                 "notAnswered",
// //         //                 ...Array(mergedData.length - 1).fill("notVisited"),
// //         //             ]);
// //         //         } else {
// //         //             console.error("API response does not have expected structure:", data);
// //         //         }
// //         //     } catch (error) {
// //         //         console.error(error);
// //         //     }
// //         // };

// //         // fetchSubjects();
// //         fetchSections();
// //         // fetchQuestionData();
// //     }, [testCreationTableId]);

// //     useEffect(() => {
// //         // Call the updateCounters function initially when the component mounts
// //         updateCounters();
// //     }, [questionStatus]);

// //     const [selectedAnswers, setSelectedAnswers] = useState(
// //         Array(questionData.length).fill("")
// //     );

// //     const onAnswerSelected = (OptionLetter) => {
// //         const updatedSelectedAnswers = [...selectedAnswers];
// //         updatedSelectedAnswers[activeQuestion] = OptionLetter;
// //         setSelectedAnswers(updatedSelectedAnswers);

// //         const updatedQuestionStatus = [...questionStatus];
// //         updatedQuestionStatus[activeQuestion] = "answered";
// //         setQuestionStatus(updatedQuestionStatus);
// //     };

// //     const [activeQuestion, setActiveQuestion] = useState(0);

// //     const markForReview = () => {
// //         // Update questionStatus for the marked question
// //         const updatedQuestionStatus = [...questionStatus];
// //         if (selectedAnswers[activeQuestion]) {
// //             updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
// //             if (selectedAnswers[activeQuestion] === "Answered but marked for review") {
// //                 updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
// //             }
// //         } else if (!selectedAnswers[activeQuestion]) {
// //             updatedQuestionStatus[activeQuestion] = "marked";
// //         }

// //         setQuestionStatus(updatedQuestionStatus);
// //     };

// //     const clearResponse = () => {
// //         const updatedSelectedAnswers = [...selectedAnswers];
// //         updatedSelectedAnswers[currentQuestionIndex] = "";
// //         setSelectedAnswers(updatedSelectedAnswers);
// //     };

// //     // const goToPreviousQuestion = () => {
// //     //     setCurrentQuestionIndex((prevIndex) => {
// //     //         // Save the current timer value for the question
// //     //         const updatedTimers = [...timers];
// //     //         updatedTimers[prevIndex] = timer;
// //     //         setTimers(updatedTimers);
// //     //         // Move to the previous question
// //     //         return prevIndex > 0 ? prevIndex - 1 : prevIndex;
// //     //     });

// //     //     if (questionData.length > 0) {
// //     //         setActiveQuestion((prevActiveQuestion) => prevActiveQuestion > 0 ? prevActiveQuestion - 1 : prevActiveQuestion);
// //     //     }
// //     // };

// //     const goToPreviousQuestion = () => {
// //         setCurrentQuestionIndex((prevIndex) => {
// //             // Save the current timer value for the question
// //             const updatedTimers = [...timers];
// //             updatedTimers[prevIndex] = timer;
// //             setTimers(updatedTimers);
// //             // Move to the previous question
// //             return prevIndex - 1;
// //         });

// //         setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
// //     };

// //     const handleNextClick = () => {

// //         setCurrentQuestionIndex((prevIndex) => {
// //             // Save the current timer value for the question

// //             const updatedTimers = [...timers];

// //             updatedTimers[prevIndex] = timer;

// //             setTimers(updatedTimers);
// //             return prevIndex + 1;
// //         });

// //         const updatedQuestionStatus = [...questionStatus];

// //         if (activeQuestion < questionData.length - 1) {
// //             // Check the status of the next question
// //             const nextQuestionStatus = questionStatus[activeQuestion + 1];

// //             if (nextQuestionStatus === "answered") {
// //                 updatedQuestionStatus[activeQuestion + 1] = "answered";
// //             } else if (nextQuestionStatus === "notAnswered") {
// //                 updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
// //             } else if (!markForReview() === false) {
// //                 markForReview();
// //             }

// //             setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
// //         }

// //         updateCounters();

// //         // Set status of the next question (if any) to "notAnswered"

// //         if (activeQuestion < questionData.length - 1) {
// //             const updatedQuestionStatus = [...questionStatus];
// //             const nextQuestionStatus = questionStatus[activeQuestion + 1];

// //             if (nextQuestionStatus === "notVisited") {
// //                 updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
// //             }

// //             if (selectedAnswers[activeQuestion] === "answered") {
// //                 updatedQuestionStatus[activeQuestion] = "answered";
// //             } else if (markForReview() === true) {
// //                 updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
// //             } else if (markForReview() === false) {
// //                 updatedQuestionStatus[activeQuestion] = "marked";
// //             }

// //             if (nextQuestionStatus === "notAnswered") {
// //                 updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
// //             }

// //             setQuestionStatus(updatedQuestionStatus);
// //         }

// //     };

// //     const [accuracy, setAccuracy] = useState(0);
// //     const [averageScore, setAverageScore] = useState(0);
// //     const [topScore, setTopScore] = useState(0);
// //     const [liveRank, setLiveRank] = useState(0);

// //     const calculateQuestionCounts = () => {
// //         let answered = 0;
// //         let notAnswered = 0;
// //         let markedForReview = 0;
// //         let answeredmarkedForReviewCount = 0;
// //         let VisitedCount = 0;

// //         questionStatus.forEach((status, index) => {
// //             if (status === "answered") {
// //                 answered++;
// //             } else if (status === "notAnswered") {
// //                 notAnswered++;
// //             } else if (status === "marked") {
// //                 markedForReview++;
// //             } else if (status === "Answered but marked for review") {
// //                 answeredmarkedForReviewCount++;
// //             } else if (status === "notVisited") {
// //                 VisitedCount++;
// //             }
// //         });

// //         return {
// //             answered,
// //             notAnswered,
// //             markedForReview,
// //             answeredmarkedForReviewCount,
// //             VisitedCount,
// //         };
// //     };

// //     const [showResult, setShowResult] = useState(false);
// //     const navigate = useNavigate();

// //     const handleSubmit = () => {
// //         window.alert("Your Test has been Submitted!! Click Ok to See Result.");

// //         // Call the function to get question counts
// //         const {
// //             answered,
// //             notAnswered,
// //             markedForReview,
// //             answeredmarkedForReviewCount,
// //             VisitedCount,
// //         } = calculateQuestionCounts();

// //         // Add any additional logic you need for submitting the exam
// //         // For example, you might want to send this data to the server.
// //          // Redirect to the result page
// //          navigate("/result", {
// //             state: {
// //               answeredCount: answered,
// //               notAnsweredCount: notAnswered,
// //               markedForReviewCount: markedForReview,
// //               answeredmarkedForReviewCount: answeredmarkedForReviewCount,
// //               VisitedCount: VisitedCount,
// //             },
// //         });
// //     };

// //     const handleQuestionSelect = (questionNumber) => {
// //         setCurrentQuestionIndex(questionNumber - 1);
// //         setActiveQuestion(questionNumber - 1);
// //     };

// //     return (

// //         <div className="Main-Page">
// //            {showResult ? (
// //         // Render the ResultPage component here
// //         <TestResultsPage
// //           answeredCount={answeredCount}
// //           notAnsweredCount={notAnsweredCount}
// //           markedForReviewCount={markedForReviewCount}
// //           answeredmarkedForReviewCount={answeredmarkedForReviewCount}
// //           VisitedCount={VisitedCount}
// //         />
// //       ) : (
// //         <div>
// //         <div>
// //             <PaperHeader />
// //         </div>
// //         <div className="QUESTIONS_CONTAINER">
// //             <div className="QUESTIONS_CONTAINER_subpart">
// //             <div className="subjects">
// //             {Subjects.map((subjectTitle, index) => (
// //                 <li key={index}>
// //                     <Link ><button className="subject-btn" onClick={() => handleSubjectSelect(subjectTitle.subjectName)}>{subjectTitle.subjectName}</button></Link>
// //                     {/* <button className="subject-btn">{subjectTitle.subjectName}</button> */}
// //                 </li>
// //             ))}

// //         </div>

// //         <div className="second-header">
// //             <div className="single-select-question">
// //                 {sections.map((sectionTitle, index) => (
// //                     <li key={index}>
// //                         <p>{sectionTitle.sectionName}</p>

// //                     </li>
// //                 ))}
// //                 {/* Single Select Question */}
// //             </div>
// //             <div className="right-header">
// //                 <div className="marks">
// //                     Marks: <div className="plus-mark">+1</div>
// //                     <div className="minus-mark">-1</div>
// //                 </div>
// //                 <div>Timer: {formatTime(timer)}</div>
// //             </div>
// //         </div>

// //         <div className="Question_No_heading">
// //             <p>  Question No. {currentQuestionIndex + 1}  of {questionData.length}</p>
// //         </div>

// //         <div  className="_quizexampart ">
// // {questionData.length > 0 && (
// //             <div className="quizexampart_q_O_container">
// //                 <h4>
// //                     {/* {currentQuestionIndex + 1}. */}

// //                     <img
// //                         src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
// //                         alt={`Question ${currentQuestionIndex + 1}`}
// //                     />
// //                 </h4>

// //                 {questionData[currentQuestionIndex].options.map(
// //                     (OptionImage, optionIndex) => (
// //                         <li key={optionIndex}>
// //                             <input
// //                                 type="radio"
// //                                 name={`question-${currentQuestionIndex}-option`}
// //                                 value={optionIndex}
// //                                 checked={
// //                                     selectedAnswers[currentQuestionIndex] === optionIndex
// //                                 }
// //                                 onChange={() => onAnswerSelected(optionIndex)}
// //                             />
// //                             {OptionImage && OptionImage.option_img && (
// //                                 <img
// //                                     key={OptionImage.question_id}
// //                                     src={`data:image/png;base64,${OptionImage.option_img}`}
// //                                     alt={`Option ${optionIndex + 1}`}
// //                                 />
// //                             )}
// //                         </li>
// //                     )
// //                 )}
// //                 <div className="flex-right">
// //                     <button className="clear-btn" onClick={markForReview}>
// //                         Mark for Review & Next
// //                     </button>
// //                     <button className="clear-btn" onClick={clearResponse}>
// //                         Clear Response
// //                     </button>
// //                     <button
// //                         className="previous-btn"
// //                         onClick={goToPreviousQuestion}
// //                         disabled={currentQuestionIndex === 0}
// //                     >
// //                         <i className="fa-solid fa-angles-left"></i> Previous
// //                     </button>
// //                     <button className="save-btn" onClick={handleNextClick}>
// //                         Next <i className="fa-solid fa-angles-right"></i>
// //                     </button>
// //                 </div>
// //             </div>
// //         )}
// // </div>
// //             </div>

// // <div className="rightsidebar">
// //                 <ButtonsFunctionality
// //                     onQuestionSelect={handleQuestionSelect}
// //                     questionStatus={questionStatus}
// //                     setQuestionStatus={setQuestionStatus}
// //                     answeredCount={answeredCount}
// //                     notAnsweredCount={notAnsweredCount}
// //                     answeredmarkedForReviewCount={answeredmarkedForReviewCount}
// //                     markedForReviewCount={markedForReviewCount}
// //                     VisitedCount={VisitedCount}
// //                     selectedSubject={selectedSubject}
// //                     questionData={questionData}
// //                 />
// //                 <button onClick={handleSubmit} id="resume_btn">
// //                     Submit
// //                 </button>
// //             </div>

// //         </div>

// //     </div>
// //       )}

// //         </div>
// //     )
// // }

// // export default Paper1

// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all subjects
// //         const responseSubjects = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await responseSubjects.json();
// //         setSubjects(subjectsData);
// //         console.log(subjectsData);

// //         // Find the least subjectId
// //         const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;

// //         // If subjectId is not provided, set it to the least subjectId
// //         const defaultSubjectId = subjectId || leastSubjectId;

// //         // Fetch data for the default subject
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);

// //         // Construct the link with the least subjectId
// //         const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
// //         // Use linkUrl as needed in your component

// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     try {
// //   //       // Fetch all subjects
// //   //       const responseSubjects = await fetch(
// //   //         `http://localhost:4009/subjects/${testCreationTableId}`
// //   //       );
// //   //       const subjectsData = await responseSubjects.json();
// //   //       setSubjects(subjectsData);
// //   //       console.log(subjectsData);

// //   //       // If subjectId is not provided, set it to the first subject
// //   //       // const subjectId ='1';
// //   //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
// //   //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

// //   //       // Fetch data for the default subject
// //   //       const response = await fetch(
// //   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //   //       );
// //   //       const result = await response.json();
// //   //       setData(result);
// //   //     } catch (error) {
// //   //       console.error("Error fetching data:", error);
// //   //     }
// //   //   };

// //   //   fetchData();
// //   // }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (clickedSubjectId) => {
// //     setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error('Invalid data format:', subjectsData);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //         {/* {subjectTitle.subjectId[0]} */}
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>
// //       {data !== null ? (
// //         data.questions.map((question, index) => (
// //           <div key={index}>
// //             <div className="question">
// //               <h3>{index + 1}</h3>
// //               <img
// //                 src={`data:image/png;base64,${question.question_img}`}
// //                 alt="Question"
// //               />
// //             </div>

// //             {/* Map over options and render them */}
// //             {data.options
// //               .filter((opt) => opt.question_id === question.question_id)
// //               .map((option) => (
// //                 <div className="option" key={option.question_id}>
// //                   <img
// //                     src={`data:image/png;base64,${option.option_img}`}
// //                     alt="Option"
// //                   />
// //                 </div>
// //               ))}
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // ----------------------------------------------------MAIN WORKING CODE-----------------------------------------------------------------------------

// // import React, { useState, useEffect } from "react";
// // import { Link, useParams, useNavigate } from "react-router-dom";
// // import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// // import "../Paper/Paper.css";
// // import ButtonsFunctionality from "./ButtonsFunctionality";
// // import TestResultsPage from "./TestResultsPage";

// // const Paper1 = ({ answeredQuestions }) => {
// //   const [selectedSubject, setSelectedSubject] = useState(null);

// //   //   const handleSubjectSelect = (subject) => {
// //   //     // Set the selected subject when a subject button is clicked
// //   //     setSelectedSubject(subject);
// //   //   };

// //   const [questionData, setQuestionData] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [Subjects, setSubjects] = useState([]);
// //   const { testCreationTableId, subjectId } = useParams();
// //   const [sections, setSections] = useState([]);

// //   const [questionStatus, setQuestionStatus] = useState(
// //     Array(questionData.length).fill("notAnswered")
// //   );

// //   const [answeredCount, setAnsweredCount] = useState(0);
// //   const [notAnsweredCount, setNotAnsweredCount] = useState(0);
// //   const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
// //     useState(0);
// //   const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
// //   const [VisitedCount, setVisitedCount] = useState(0);

// //   const updateCounters = () => {
// //     let answered = 0;
// //     let notAnswered = 0;
// //     let marked = 0;
// //     let markedForReview = 0;
// //     let Visited = 0;

// //     questionStatus.forEach((status) => {
// //       if (status === "answered") {
// //         answered++;
// //       } else if (status === "notAnswered") {
// //         notAnswered++;
// //       } else if (status === "marked") {
// //         marked++;
// //       } else if (status === "Answered but marked for review") {
// //         markedForReview++;
// //       } else if (status === "notVisited") {
// //         Visited++;
// //       }
// //     });

// //     setAnsweredCount(answered);
// //     setNotAnsweredCount(notAnswered);
// //     setAnsweredmarkedForReviewCount(marked);
// //     setMarkedForReviewCount(markedForReview);
// //     setVisitedCount(Visited);
// //   };

// //   // ---------------------------------Timer code Start--------------------------------
// //   const [timer, setTimer] = useState(0);
// //   const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);

// //     const minutes = Math.floor((seconds % 3600) / 60);

// //     const remainingSeconds = seconds % 60;

// //     return `${hours > 9 ? hours : "0" + hours}:${
// //       minutes > 9 ? minutes : "0" + minutes
// //     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
// //   };

// //   useEffect(() => {
// //     // Set the timer to the saved value for the current question
// //     setTimer(timers[currentQuestionIndex] || 0);
// //     let interval;
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer + 1);
// //     }, 1000);
// //     // Clear the interval when the component unmounts or when the user moves to the next question
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [currentQuestionIndex, timers]);
// //   // ------------------------------------Timer code end--------------------------------

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://localhost:4009/fetchSections/${testCreationTableId}`
// //         );
// //         const data = await response.json();
// //         setSections(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchSections();
// //   }, [testCreationTableId]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all subjects
// //         const responseSubjects = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await responseSubjects.json();
// //         setSubjects(subjectsData);
// //         console.log(subjectsData);

// //         // Find the least subjectId
// //         const leastSubjectId =
// //           subjectsData.length > 0
// //             ? Math.min(...subjectsData.map((subject) => subject.subjectId))
// //             : null;

// //         // If subjectId is not provided, set it to the least subjectId
// //         const defaultSubjectId = subjectId || leastSubjectId;

// //         // Fetch data for the default subject
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //         );
// //         const result = await response.json();
// //         setQuestionData(result);

// //         // Construct the link with the least subjectId
// //         const linkUrl = `/subjects/${testCreationTableId}/${
// //           subjectId || leastSubjectId
// //         }`;
// //         // Use linkUrl as needed in your component
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (clickedSubjectId) => {
// //     setQuestionData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setQuestionData(subjectsData);
// //       } else {
// //         console.error("Invalid data format:", subjectsData);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   useEffect(() => {
// //     // Call the updateCounters function initially when the component mounts
// //     updateCounters();
// //   }, [questionStatus]);

// //   const [selectedAnswers, setSelectedAnswers] = useState(
// //     Array(questionData.length).fill("")
// //   );

// //   const onAnswerSelected = (OptionLetter) => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[activeQuestion] = OptionLetter;
// //     setSelectedAnswers(updatedSelectedAnswers);

// //     const updatedQuestionStatus = [...questionStatus];
// //     updatedQuestionStatus[activeQuestion] = "answered";
// //     setQuestionStatus(updatedQuestionStatus);
// //   };

// //   const [activeQuestion, setActiveQuestion] = useState(0);

// //   const markForReview = () => {
// //     // Update questionStatus for the marked question
// //     const updatedQuestionStatus = [...questionStatus];
// //     if (selectedAnswers[activeQuestion]) {
// //       updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
// //       if (
// //         selectedAnswers[activeQuestion] === "Answered but marked for review"
// //       ) {
// //         updatedQuestionStatus[activeQuestion] =
// //           "Answered but marked for review";
// //       }
// //     } else if (!selectedAnswers[activeQuestion]) {
// //       updatedQuestionStatus[activeQuestion] = "marked";
// //     }

// //     setQuestionStatus(updatedQuestionStatus);
// //   };

// //   const clearResponse = () => {
// //     const updatedSelectedAnswers = [...selectedAnswers];
// //     updatedSelectedAnswers[currentQuestionIndex] = "";
// //     setSelectedAnswers(updatedSelectedAnswers);
// //   };

// //   const goToPreviousQuestion = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question
// //       const updatedTimers = [...timers];
// //       updatedTimers[prevIndex] = timer;
// //       setTimers(updatedTimers);
// //       // Move to the previous question
// //       return prevIndex - 1;
// //     });

// //     setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
// //   };

// //   const handleNextClick = () => {
// //     setCurrentQuestionIndex((prevIndex) => {
// //       // Save the current timer value for the question

// //       const updatedTimers = [...timers];

// //       updatedTimers[prevIndex] = timer;

// //       setTimers(updatedTimers);
// //       return prevIndex + 1;
// //     });

// //     const updatedQuestionStatus = [...questionStatus];

// //     if (activeQuestion < questionData.length - 1) {
// //       // Check the status of the next question
// //       const nextQuestionStatus = questionStatus[activeQuestion + 1];

// //       if (nextQuestionStatus === "answered") {
// //         updatedQuestionStatus[activeQuestion + 1] = "answered";
// //       } else if (nextQuestionStatus === "notAnswered") {
// //         updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
// //       } else if (!markForReview() === false) {
// //         markForReview();
// //       }

// //       setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
// //     }

// //     updateCounters();

// //     // Set status of the next question (if any) to "notAnswered"

// //     if (activeQuestion < questionData.length - 1) {
// //       const updatedQuestionStatus = [...questionStatus];
// //       const nextQuestionStatus = questionStatus[activeQuestion + 1];

// //       if (nextQuestionStatus === "notVisited") {
// //         updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
// //       }

// //       if (selectedAnswers[activeQuestion] === "answered") {
// //         updatedQuestionStatus[activeQuestion] = "answered";
// //       } else if (markForReview() === true) {
// //         updatedQuestionStatus[activeQuestion] =
// //           "Answered but marked for review";
// //       } else if (markForReview() === false) {
// //         updatedQuestionStatus[activeQuestion] = "marked";
// //       }

// //       if (nextQuestionStatus === "notAnswered") {
// //         updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
// //       }

// //       setQuestionStatus(updatedQuestionStatus);
// //     }
// //   };

// //   const [accuracy, setAccuracy] = useState(0);
// //   const [averageScore, setAverageScore] = useState(0);
// //   const [topScore, setTopScore] = useState(0);
// //   const [liveRank, setLiveRank] = useState(0);

// //   const calculateQuestionCounts = () => {
// //     let answered = 0;
// //     let notAnswered = 0;
// //     let markedForReview = 0;
// //     let answeredmarkedForReviewCount = 0;
// //     let VisitedCount = 0;

// //     questionStatus.forEach((status, index) => {
// //       if (status === "answered") {
// //         answered++;
// //       } else if (status === "notAnswered") {
// //         notAnswered++;
// //       } else if (status === "marked") {
// //         markedForReview++;
// //       } else if (status === "Answered but marked for review") {
// //         answeredmarkedForReviewCount++;
// //       } else if (status === "notVisited") {
// //         VisitedCount++;
// //       }
// //     });

// //     return {
// //       answered,
// //       notAnswered,
// //       markedForReview,
// //       answeredmarkedForReviewCount,
// //       VisitedCount,
// //     };
// //   };

// //   const [showResult, setShowResult] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = () => {
// //     window.alert("Your Test has been Submitted!! Click Ok to See Result.");

// //     // Call the function to get question counts
// //     const {
// //       answered,
// //       notAnswered,
// //       markedForReview,
// //       answeredmarkedForReviewCount,
// //       VisitedCount,
// //     } = calculateQuestionCounts();

// //     // Add any additional logic you need for submitting the exam
// //     // For example, you might want to send this data to the server.
// //     // Redirect to the result page
// //     navigate("/result", {
// //       state: {
// //         answeredCount: answered,
// //         notAnsweredCount: notAnswered,
// //         markedForReviewCount: markedForReview,
// //         answeredmarkedForReviewCount: answeredmarkedForReviewCount,
// //         VisitedCount: VisitedCount,
// //       },
// //     });
// //   };

// //   const handleQuestionSelect = (questionNumber) => {
// //     setCurrentQuestionIndex(questionNumber - 1);
// //     setActiveQuestion(questionNumber - 1);
// //   };

// //   return (
// //     <div className="Main-Page">
// //       {showResult ? (
// //         // Render the ResultPage component here
// //         <TestResultsPage
// //           answeredCount={answeredCount}
// //           notAnsweredCount={notAnsweredCount}
// //           markedForReviewCount={markedForReviewCount}
// //           answeredmarkedForReviewCount={answeredmarkedForReviewCount}
// //           VisitedCount={VisitedCount}
// //         />
// //       ) : (
// //         <div>
// //           <div>
// //             <PaperHeader />
// //           </div>
// //           <div className="QUESTIONS_CONTAINER">
// //             <div className="QUESTIONS_CONTAINER_subpart">
// //               <div className="subjects">
// //                 {Subjects.map((subjectTitle) => (
// //                   <li key={subjectTitle.subjectId}>
// //                     <Link
// //                       to="#"
// //                       onClick={() =>
// //                         handleSubjectsClick(subjectTitle.subjectId)
// //                       }
// //                       className="subject-btn"
// //                     >
// //                       {/* {subjectTitle.subjectId[0]} */}
// //                       {subjectTitle.subjectName}
// //                     </Link>
// //                   </li>
// //                 ))}
// //               </div>
// //               {/* <div className="subjects">
// //                 {Subjects.map((subjectTitle, index) => (
// //                   <li key={index}>
// //                     <Link>
// //                       <button
// //                         className="subject-btn"
// //                         onClick={() =>
// //                           handleSubjectSelect(subjectTitle.subjectName)
// //                         }
// //                       >
// //                         {subjectTitle.subjectName}
// //                       </button>
// //                     </Link>

// //                   </li>
// //                 ))}
// //               </div> */}

// //               <div className="second-header">
// //                 <div className="single-select-question">
// //                   {sections.map((sectionTitle, index) => (
// //                     <li key={index}>
// //                       <p>{sectionTitle.sectionName}</p>
// //                     </li>
// //                   ))}
// //                   {/* Single Select Question */}
// //                 </div>
// //                 <div className="right-header">
// //                   <div className="marks">
// //                     Marks: <div className="plus-mark">+1</div>
// //                     <div className="minus-mark">-1</div>
// //                   </div>
// //                   <div>Timer: {formatTime(timer)}</div>
// //                 </div>
// //               </div>

// //               <div className="Question_No_heading">
// //                 <p>
// //                   {" "}
// //                   Question No. {currentQuestionIndex + 1} of{" "}
// //                   {questionData.length}
// //                 </p>
// //               </div>

// //               <div className="_quizexampart ">
// //                 {questionData !== null ? (
// //                   questionData.length > 0 && (
// //                     <div className="quizexampart_q_O_container">
// //                       <div className="question">
// //                         <h3>
// //                           {currentQuestionIndex + 1}.
// //                           <img
// //                             src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
// //                             alt={`Question ${currentQuestionIndex + 1}`}
// //                           />
// //                         </h3>
// //                       </div>

// //                       {/* Map over options and render them */}
// //                       {questionData[currentQuestionIndex].options
// //                         .filter(
// //                           (opt) => opt.question_id === questionData.question_id
// //                         )
// //                         .map((OptionImage, optionIndex) => (
// //                           <div className="option" key={OptionImage.question_id}>
// //                             <li key={optionIndex}>
// //                               <input
// //                                 type="radio"
// //                                 name={`question-${currentQuestionIndex}-option`}
// //                                 value={optionIndex}
// //                                 checked={
// //                                   selectedAnswers[currentQuestionIndex] ===
// //                                   optionIndex
// //                                 }
// //                                 onChange={() => onAnswerSelected(optionIndex)}
// //                               />
// //                               {OptionImage && OptionImage.option_img && (
// //                                 <img
// //                                   key={OptionImage.question_id}
// //                                   src={`data:image/png;base64,${OptionImage.option_img}`}
// //                                   alt={`Option ${optionIndex + 1}`}
// //                                 />
// //                               )}
// //                             </li>
// //                           </div>
// //                         ))}

// //                       <div className="flex-right">
// //                         <button className="clear-btn" onClick={markForReview}>
// //                           Mark for Review & Next
// //                         </button>
// //                         <button className="clear-btn" onClick={clearResponse}>
// //                           Clear Response
// //                         </button>
// //                         <button
// //                           className="previous-btn"
// //                           onClick={goToPreviousQuestion}
// //                           disabled={currentQuestionIndex === 0}
// //                         >
// //                           <i className="fa-solid fa-angles-left"></i> Previous
// //                         </button>
// //                         <button className="save-btn" onClick={handleNextClick}>
// //                           Next <i className="fa-solid fa-angles-right"></i>
// //                         </button>
// //                       </div>
// //                     </div>
// //                   )
// //                 ) : (
// //                   <p>Loading data...</p>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="rightsidebar">
// //               <ButtonsFunctionality
// //                 onQuestionSelect={handleQuestionSelect}
// //                 questionStatus={questionStatus}
// //                 setQuestionStatus={setQuestionStatus}
// //                 answeredCount={answeredCount}
// //                 notAnsweredCount={notAnsweredCount}
// //                 answeredmarkedForReviewCount={answeredmarkedForReviewCount}
// //                 markedForReviewCount={markedForReviewCount}
// //                 VisitedCount={VisitedCount}
// //                 selectedSubject={selectedSubject}
// //                 questionData={questionData}
// //               />
// //               <button onClick={handleSubmit} id="resume_btn">
// //                 Submit
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// // import React, { useState, useEffect } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const Paper1 = () => {
// //   const [data, setData] = useState(null);
// //   const { subjectId, testCreationTableId } = useParams();
// //   const [Subjects, setSubjects] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all subjects
// //         const responseSubjects = await fetch(
// //           `http://localhost:4009/subjects/${testCreationTableId}`
// //         );
// //         const subjectsData = await responseSubjects.json();
// //         setSubjects(subjectsData);
// //         console.log(subjectsData);

// //         // Find the least subjectId
// //         const leastSubjectId =
// //           subjectsData.length > 0
// //             ? Math.min(...subjectsData.map((subject) => subject.subjectId))
// //             : null;

// //         // If subjectId is not provided, set it to the least subjectId
// //         const defaultSubjectId = subjectId || leastSubjectId;

// //         // Fetch data for the default subject
// //         const response = await fetch(
// //           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
// //         );
// //         const result = await response.json();
// //         setData(result);

// //         // Construct the link with the least subjectId
// //         const linkUrl = `/subjects/${testCreationTableId}/${
// //           subjectId || leastSubjectId
// //         }`;
// //         // Use linkUrl as needed in your component
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, [testCreationTableId, subjectId]);

// //   const handleSubjectsClick = async (clickedSubjectId) => {
// //     setData(null);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
// //       );
// //       const subjectsData = await response.json();

// //       if (subjectsData && subjectsData.questions) {
// //         setData(subjectsData);
// //       } else {
// //         console.error("Invalid data format:", subjectsData);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const handleNextClick = () => {
// //     // Update the current question index to move to the next question
// //     setCurrentQuestionIndex((prevIndex) =>
// //       prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
// //     );
// //   };

// //   return (
// //     <div>
// //       <div className="subjects">
// //         {Subjects.map((subjectTitle) => (
// //           <li key={subjectTitle.subjectId}>
// //             <Link
// //               to="#"
// //               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
// //               className="subject-btn"
// //             >
// //               {/* {subjectTitle.subjectId[0]} */}
// //               {subjectTitle.subjectName}
// //             </Link>
// //           </li>
// //         ))}
// //       </div>

// //       {data !== null ? (

// //         data.questions.map((question, index) => (
// //           <div>
// //             <div key={index}>
// //               <div className="question">
// //                 <h3>{index + 1}.</h3>
// //                 <img
// //                   src={`data:image/png;base64,${question.question_img}`}
// //                   alt="Question"
// //                 />
// //               </div>

// //               {/* Map over options and render them */}
// //               {data.options
// //                 .filter((opt) => opt.question_id === question.question_id)
// //                 .map((option) => (
// //                   <div className="option" key={option.question_id}>
// //                     <input type="radio" />
// //                     <img
// //                       src={`data:image/png;base64,${option.option_img}`}
// //                       alt="Option"
// //                     />
// //                   </div>
// //                 ))}
// //             </div>
// //             <div>
// //               <button
// //                 className="previous-btn"
// //                 // onClick={goToPreviousQuestion}
// //                 // disabled={questionData === 0}
// //               >
// //                 <i className="fa-solid fa-angles-left"></i> Previous
// //               </button>
// //               <button className="save-btn" onClick={handleNextClick}>
// //                 Next <i className="fa-solid fa-angles-right"></i>
// //               </button>
// //             </div>
// //           </div>
// //         ))
// //       ) : (
// //         <p>Loading data...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Paper1;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const Paper1 = () => {
//   const [data, setData] = useState(null);
//   const { subjectId, testCreationTableId } = useParams();
//   const [Subjects, setSubjects] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   //working code
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch all subjects
//         const responseSubjects = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await responseSubjects.json();
//         setSubjects(subjectsData);
//         console.log(subjectsData);

//         // Find the least subjectId
//         const leastSubjectId =
//           subjectsData.length > 0
//             ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//             : null;

//         // If subjectId is not provided, set it to the least subjectId
//         const defaultSubjectId = subjectId || leastSubjectId;

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setData(result);

//             // Initialize selected answers based on the saved answers for the current subject
//             const selectedAnswersForSubject = selectedAnswersMap[defaultSubjectId] || [];
//             setSelectedAnswers(selectedAnswersForSubject);

//         // Construct the link with the least subjectId
//         const linkUrl = `/subjects/${testCreationTableId}/${
//           subjectId || leastSubjectId
//         }`;
//         // Use linkUrl as needed in your component
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   const [sections, setSections] = useState([]);
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

//   const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
//   //working code
//   const handleSubjectsClick = async (clickedSubjectId) => {
//     setData(null);
//     setCurrentQuestionIndex(0); // Reset current question index

//     // Check if there are selected answers for the current subject
//     const selectedAnswersForSubject = selectedAnswersMap[clickedSubjectId] || [];
//     setSelectedAnswers(selectedAnswersForSubject);

//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//       } else {
//         console.error("Invalid data format:", subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //working code
//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < data.questions.length - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const handlePreviousClick = () => {
//     // Update the current question index to move to the previous question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//   };

//   const clearResponse = () => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = "";
//     setSelectedAnswers(updatedSelectedAnswers);
// };

//   // ---------------------------------Timer code Start--------------------------------
//   const [timer, setTimer] = useState(0);
//   // const [timers, setTimers] = useState(new Array(data.length).fill(0));
//   const [timers, setTimers] = useState(Array(data));
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   //working code
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

//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   //working code
//   const onAnswerSelected = (optionIndex) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[currentQuestionIndex] = optionIndex;

//     // Update the selected answers map for the current subject
//     setSelectedAnswersMap((prevMap) => ({
//       ...prevMap,
//       [data.subjectId]: updatedSelectedAnswers,
//     }));

//     setSelectedAnswers(updatedSelectedAnswers);
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
//               {/* {subjectTitle.subjectId[0]} */}
//               {subjectTitle.subjectName}
//             </Link>
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

//       {data !== null && data.questions.length > 0 ? (
//         <div>
//           <div className="question">
//             {/* Render the current question based on currentQuestionIndex */}
//             <h3>{currentQuestionIndex + 1}.</h3>
//             <img
//               src={`data:image/png;base64,${data.questions[currentQuestionIndex].question_img}`}
//               alt="Question"
//             />
//           </div>

//           {/* Map over options for the current question and render them */}
//           {data.options
//             .filter(
//               (opt) =>

//                 opt.question_id ===
//                 data.questions[currentQuestionIndex].question_id
//             )
//             .map((option, optionIndex) => (
//               <div className="option" key={option.option_id}>
//                 <li key={optionIndex}>
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestionIndex}-option`}
//                     value={optionIndex}
//                     checked={
//                       selectedAnswers[currentQuestionIndex] === optionIndex
//                     }
//                     // onChange={() => onAnswerSelected(subjectIndex, optionIndex)}
//                     onChange={() => onAnswerSelected(optionIndex)}
//                   />
//                   <img
//                     src={`data:image/png;base64,${option.option_img}`}
//                     alt="Option"
//                   />
//                 </li>
//               </div>
//             ))}

//           <div>
//           <button className="clear-btn" onClick={clearResponse}>
//                         Clear Response
//                     </button>
//             <button
//               className="previous-btn"
//               onClick={handlePreviousClick}
//               disabled={currentQuestionIndex === 0}
//             >
//               <i className="fa-solid fa-angles-left"></i> Previous
//             </button>
//             <button className="save-btn" onClick={handleNextClick}>
//               Next <i className="fa-solid fa-angles-right"></i>
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;

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

// ----------------------------------------------------------------MAIN WORKING CODE-----------------------------------------------------------
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
//         console.log(subjectsData);

//         // Find the least subjectId
//         const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;

//         // If subjectId is not provided, set it to the least subjectId
//         const defaultSubjectId = subjectId || leastSubjectId;

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setData(result);

//         // Construct the link with the least subjectId
//         const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
//         // Use linkUrl as needed in your component

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch all subjects
//   //       const responseSubjects = await fetch(
//   //         `http://localhost:4009/subjects/${testCreationTableId}`
//   //       );
//   //       const subjectsData = await responseSubjects.json();
//   //       setSubjects(subjectsData);
//   //       console.log(subjectsData);

//   //       // If subjectId is not provided, set it to the first subject
//   //       // const subjectId ='1';
//   //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
//   //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

//   //       // Fetch data for the default subject
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //       );
//   //       const result = await response.json();
//   //       setData(result);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [testCreationTableId, subjectId]);

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
//         {/* {subjectTitle.subjectId[0]} */}
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
//         console.log(subjectsData);

//         // Find the least subjectId
//         const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;

//         // If subjectId is not provided, set it to the least subjectId
//         const defaultSubjectId = subjectId || leastSubjectId;

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setData(result);

//         // Construct the link with the least subjectId
//         const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
//         // Use linkUrl as needed in your component

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch all subjects
//   //       const responseSubjects = await fetch(
//   //         `http://localhost:4009/subjects/${testCreationTableId}`
//   //       );
//   //       const subjectsData = await responseSubjects.json();
//   //       setSubjects(subjectsData);
//   //       console.log(subjectsData);

//   //       // If subjectId is not provided, set it to the first subject
//   //       // const subjectId ='1';
//   //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
//   //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

//   //       // Fetch data for the default subject
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //       );
//   //       const result = await response.json();
//   //       setData(result);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [testCreationTableId, subjectId]);

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
//         {/* {subjectTitle.subjectId[0]} */}
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

// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// import "../Paper/Paper.css";
// import ButtonsFunctionality from "./ButtonsFunctionality";
// import TestResultsPage from "./TestResultsPage";

// const Paper1 = ({ answeredQuestions }) => {

//     const [selectedSubject, setSelectedSubject] = useState(null);

//     const handleSubjectSelect = (subject) => {
//         // Set the selected subject when a subject button is clicked
//         setSelectedSubject(subject);
//     };

//     const [questionData, setQuestionData] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [Subjects, setSubjects] = useState([]);
//     const { testCreationTableId, subjectId } = useParams();
//     const [sections, setSections] = useState([]);

//     const [questionStatus, setQuestionStatus] = useState(
//         Array(questionData.length).fill("notAnswered")
//     );

//     const [answeredCount, setAnsweredCount] = useState(0);
//     const [notAnsweredCount, setNotAnsweredCount] = useState(0);
//     const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
//         useState(0);
//     const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
//     const [VisitedCount, setVisitedCount] = useState(0);

//     const updateCounters = () => {
//         let answered = 0;
//         let notAnswered = 0;
//         let marked = 0;
//         let markedForReview = 0;
//         let Visited = 0;

//         questionStatus.forEach((status) => {
//             if (status === "answered") {
//                 answered++;
//             } else if (status === "notAnswered") {
//                 notAnswered++;
//             } else if (status === "marked") {
//                 marked++;
//             } else if (status === "Answered but marked for review") {
//                 markedForReview++;
//             } else if (status === "notVisited") {
//                 Visited++;
//             }
//         });

//         setAnsweredCount(answered);
//         setNotAnsweredCount(notAnswered);
//         setAnsweredmarkedForReviewCount(marked);
//         setMarkedForReviewCount(markedForReview);
//         setVisitedCount(Visited);
//     };

//     // ---------------------------------Timer code Start--------------------------------
//     const [timer, setTimer] = useState(0);
//     const [timers, setTimers] = useState(new Array(questionData.length).fill(0));

//     const formatTime = (seconds) => {
//         const hours = Math.floor(seconds / 3600);

//         const minutes = Math.floor((seconds % 3600) / 60);

//         const remainingSeconds = seconds % 60;

//         return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes
//             }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//     };

//     useEffect(() => {
//         // Set the timer to the saved value for the current question
//         setTimer(timers[currentQuestionIndex] || 0);
//         let interval;
//         interval = setInterval(() => {
//             setTimer((prevTimer) => prevTimer + 1);
//         }, 1000);
//         // Clear the interval when the component unmounts or when the user moves to the next question
//         return () => {
//             clearInterval(interval);
//         };
//     }, [currentQuestionIndex, timers]);
//     // ------------------------------------Timer code end--------------------------------

//     useEffect(() => {
//         // const fetchSubjects = async () => {
//         //     try {
//         //         const response = await fetch(
//         //             `http://localhost:4009/subjects/${testCreationTableId}`
//         //         );
//         //         const data = await response.json();
//         //         setSubjects(data);
//         //     } catch (error) {
//         //         console.error(error);
//         //     }
//         // };

//         const fetchSections = async () => {
//             try {
//                 const response = await fetch(
//                     `http://localhost:4009/fetchSections/${testCreationTableId}`
//                 );
//                 const data = await response.json();
//                 setSections(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         // const fetchQuestionData = async () => {
//         //     try {
//         //         const response = await fetch(
//         //             `http://localhost:4009/getPaperData/${testCreationTableId}`
//         //         );
//         //         const data = await response.json();

//         //         // Check if the data has both 'questions' and 'options' properties
//         //         if (data && data.questions && data.options) {
//         //             // Assuming both questions and options are arrays, you might want to merge them
//         //             const mergedData = data.questions.map((question, index) => ({
//         //                 ...question,
//         //                 options: data.options.slice(index * 4, (index + 1) * 4), // Assuming 4 options per question
//         //             }));

//         //             setQuestionData(mergedData);
//         //             setQuestionStatus([
//         //                 "notAnswered",
//         //                 ...Array(mergedData.length - 1).fill("notVisited"),
//         //             ]);
//         //         } else {
//         //             console.error("API response does not have expected structure:", data);
//         //         }
//         //     } catch (error) {
//         //         console.error(error);
//         //     }
//         // };

//         // fetchSubjects();
//         fetchSections();
//         // fetchQuestionData();
//     }, [testCreationTableId]);

//     useEffect(() => {
//         // Call the updateCounters function initially when the component mounts
//         updateCounters();
//     }, [questionStatus]);

//     const [selectedAnswers, setSelectedAnswers] = useState(
//         Array(questionData.length).fill("")
//     );

//     const onAnswerSelected = (OptionLetter) => {
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[activeQuestion] = OptionLetter;
//         setSelectedAnswers(updatedSelectedAnswers);

//         const updatedQuestionStatus = [...questionStatus];
//         updatedQuestionStatus[activeQuestion] = "answered";
//         setQuestionStatus(updatedQuestionStatus);
//     };

//     const [activeQuestion, setActiveQuestion] = useState(0);

//     const markForReview = () => {
//         // Update questionStatus for the marked question
//         const updatedQuestionStatus = [...questionStatus];
//         if (selectedAnswers[activeQuestion]) {
//             updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
//             if (selectedAnswers[activeQuestion] === "Answered but marked for review") {
//                 updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
//             }
//         } else if (!selectedAnswers[activeQuestion]) {
//             updatedQuestionStatus[activeQuestion] = "marked";
//         }

//         setQuestionStatus(updatedQuestionStatus);
//     };

//     const clearResponse = () => {
//         const updatedSelectedAnswers = [...selectedAnswers];
//         updatedSelectedAnswers[currentQuestionIndex] = "";
//         setSelectedAnswers(updatedSelectedAnswers);
//     };

//     // const goToPreviousQuestion = () => {
//     //     setCurrentQuestionIndex((prevIndex) => {
//     //         // Save the current timer value for the question
//     //         const updatedTimers = [...timers];
//     //         updatedTimers[prevIndex] = timer;
//     //         setTimers(updatedTimers);
//     //         // Move to the previous question
//     //         return prevIndex > 0 ? prevIndex - 1 : prevIndex;
//     //     });

//     //     if (questionData.length > 0) {
//     //         setActiveQuestion((prevActiveQuestion) => prevActiveQuestion > 0 ? prevActiveQuestion - 1 : prevActiveQuestion);
//     //     }
//     // };

//     const goToPreviousQuestion = () => {
//         setCurrentQuestionIndex((prevIndex) => {
//             // Save the current timer value for the question
//             const updatedTimers = [...timers];
//             updatedTimers[prevIndex] = timer;
//             setTimers(updatedTimers);
//             // Move to the previous question
//             return prevIndex - 1;
//         });

//         setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
//     };

//     const handleNextClick = () => {

//         setCurrentQuestionIndex((prevIndex) => {
//             // Save the current timer value for the question

//             const updatedTimers = [...timers];

//             updatedTimers[prevIndex] = timer;

//             setTimers(updatedTimers);
//             return prevIndex + 1;
//         });

//         const updatedQuestionStatus = [...questionStatus];

//         if (activeQuestion < questionData.length - 1) {
//             // Check the status of the next question
//             const nextQuestionStatus = questionStatus[activeQuestion + 1];

//             if (nextQuestionStatus === "answered") {
//                 updatedQuestionStatus[activeQuestion + 1] = "answered";
//             } else if (nextQuestionStatus === "notAnswered") {
//                 updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
//             } else if (!markForReview() === false) {
//                 markForReview();
//             }

//             setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
//         }

//         updateCounters();

//         // Set status of the next question (if any) to "notAnswered"

//         if (activeQuestion < questionData.length - 1) {
//             const updatedQuestionStatus = [...questionStatus];
//             const nextQuestionStatus = questionStatus[activeQuestion + 1];

//             if (nextQuestionStatus === "notVisited") {
//                 updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
//             }

//             if (selectedAnswers[activeQuestion] === "answered") {
//                 updatedQuestionStatus[activeQuestion] = "answered";
//             } else if (markForReview() === true) {
//                 updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
//             } else if (markForReview() === false) {
//                 updatedQuestionStatus[activeQuestion] = "marked";
//             }

//             if (nextQuestionStatus === "notAnswered") {
//                 updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
//             }

//             setQuestionStatus(updatedQuestionStatus);
//         }

//     };

//     const [accuracy, setAccuracy] = useState(0);
//     const [averageScore, setAverageScore] = useState(0);
//     const [topScore, setTopScore] = useState(0);
//     const [liveRank, setLiveRank] = useState(0);

//     const calculateQuestionCounts = () => {
//         let answered = 0;
//         let notAnswered = 0;
//         let markedForReview = 0;
//         let answeredmarkedForReviewCount = 0;
//         let VisitedCount = 0;

//         questionStatus.forEach((status, index) => {
//             if (status === "answered") {
//                 answered++;
//             } else if (status === "notAnswered") {
//                 notAnswered++;
//             } else if (status === "marked") {
//                 markedForReview++;
//             } else if (status === "Answered but marked for review") {
//                 answeredmarkedForReviewCount++;
//             } else if (status === "notVisited") {
//                 VisitedCount++;
//             }
//         });

//         return {
//             answered,
//             notAnswered,
//             markedForReview,
//             answeredmarkedForReviewCount,
//             VisitedCount,
//         };
//     };

//     const [showResult, setShowResult] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         window.alert("Your Test has been Submitted!! Click Ok to See Result.");

//         // Call the function to get question counts
//         const {
//             answered,
//             notAnswered,
//             markedForReview,
//             answeredmarkedForReviewCount,
//             VisitedCount,
//         } = calculateQuestionCounts();

//         // Add any additional logic you need for submitting the exam
//         // For example, you might want to send this data to the server.
//          // Redirect to the result page
//          navigate("/result", {
//             state: {
//               answeredCount: answered,
//               notAnsweredCount: notAnswered,
//               markedForReviewCount: markedForReview,
//               answeredmarkedForReviewCount: answeredmarkedForReviewCount,
//               VisitedCount: VisitedCount,
//             },
//         });
//     };

//     const handleQuestionSelect = (questionNumber) => {
//         setCurrentQuestionIndex(questionNumber - 1);
//         setActiveQuestion(questionNumber - 1);
//     };

//     return (

//         <div className="Main-Page">
//            {showResult ? (
//         // Render the ResultPage component here
//         <TestResultsPage
//           answeredCount={answeredCount}
//           notAnsweredCount={notAnsweredCount}
//           markedForReviewCount={markedForReviewCount}
//           answeredmarkedForReviewCount={answeredmarkedForReviewCount}
//           VisitedCount={VisitedCount}
//         />
//       ) : (
//         <div>
//         <div>
//             <PaperHeader />
//         </div>
//         <div className="QUESTIONS_CONTAINER">
//             <div className="QUESTIONS_CONTAINER_subpart">
//             <div className="subjects">
//             {Subjects.map((subjectTitle, index) => (
//                 <li key={index}>
//                     <Link ><button className="subject-btn" onClick={() => handleSubjectSelect(subjectTitle.subjectName)}>{subjectTitle.subjectName}</button></Link>
//                     {/* <button className="subject-btn">{subjectTitle.subjectName}</button> */}
//                 </li>
//             ))}

//         </div>

//         <div className="second-header">
//             <div className="single-select-question">
//                 {sections.map((sectionTitle, index) => (
//                     <li key={index}>
//                         <p>{sectionTitle.sectionName}</p>

//                     </li>
//                 ))}
//                 {/* Single Select Question */}
//             </div>
//             <div className="right-header">
//                 <div className="marks">
//                     Marks: <div className="plus-mark">+1</div>
//                     <div className="minus-mark">-1</div>
//                 </div>
//                 <div>Timer: {formatTime(timer)}</div>
//             </div>
//         </div>

//         <div className="Question_No_heading">
//             <p>  Question No. {currentQuestionIndex + 1}  of {questionData.length}</p>
//         </div>

//         <div  className="_quizexampart ">
// {questionData.length > 0 && (
//             <div className="quizexampart_q_O_container">
//                 <h4>
//                     {/* {currentQuestionIndex + 1}. */}

//                     <img
//                         src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
//                         alt={`Question ${currentQuestionIndex + 1}`}
//                     />
//                 </h4>

//                 {questionData[currentQuestionIndex].options.map(
//                     (OptionImage, optionIndex) => (
//                         <li key={optionIndex}>
//                             <input
//                                 type="radio"
//                                 name={`question-${currentQuestionIndex}-option`}
//                                 value={optionIndex}
//                                 checked={
//                                     selectedAnswers[currentQuestionIndex] === optionIndex
//                                 }
//                                 onChange={() => onAnswerSelected(optionIndex)}
//                             />
//                             {OptionImage && OptionImage.option_img && (
//                                 <img
//                                     key={OptionImage.question_id}
//                                     src={`data:image/png;base64,${OptionImage.option_img}`}
//                                     alt={`Option ${optionIndex + 1}`}
//                                 />
//                             )}
//                         </li>
//                     )
//                 )}
//                 <div className="flex-right">
//                     <button className="clear-btn" onClick={markForReview}>
//                         Mark for Review & Next
//                     </button>
//                     <button className="clear-btn" onClick={clearResponse}>
//                         Clear Response
//                     </button>
//                     <button
//                         className="previous-btn"
//                         onClick={goToPreviousQuestion}
//                         disabled={currentQuestionIndex === 0}
//                     >
//                         <i className="fa-solid fa-angles-left"></i> Previous
//                     </button>
//                     <button className="save-btn" onClick={handleNextClick}>
//                         Next <i className="fa-solid fa-angles-right"></i>
//                     </button>
//                 </div>
//             </div>
//         )}
// </div>
//             </div>

// <div className="rightsidebar">
//                 <ButtonsFunctionality
//                     onQuestionSelect={handleQuestionSelect}
//                     questionStatus={questionStatus}
//                     setQuestionStatus={setQuestionStatus}
//                     answeredCount={answeredCount}
//                     notAnsweredCount={notAnsweredCount}
//                     answeredmarkedForReviewCount={answeredmarkedForReviewCount}
//                     markedForReviewCount={markedForReviewCount}
//                     VisitedCount={VisitedCount}
//                     selectedSubject={selectedSubject}
//                     questionData={questionData}
//                 />
//                 <button onClick={handleSubmit} id="resume_btn">
//                     Submit
//                 </button>
//             </div>

//         </div>

//     </div>
//       )}

//         </div>
//     )
// }

// export default Paper1

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
//         console.log(subjectsData);

//         // Find the least subjectId
//         const leastSubjectId = subjectsData.length > 0 ? Math.min(...subjectsData.map(subject => subject.subjectId)) : null;

//         // If subjectId is not provided, set it to the least subjectId
//         const defaultSubjectId = subjectId || leastSubjectId;

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setData(result);

//         // Construct the link with the least subjectId
//         const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
//         // Use linkUrl as needed in your component

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       // Fetch all subjects
//   //       const responseSubjects = await fetch(
//   //         `http://localhost:4009/subjects/${testCreationTableId}`
//   //       );
//   //       const subjectsData = await responseSubjects.json();
//   //       setSubjects(subjectsData);
//   //       console.log(subjectsData);

//   //       // If subjectId is not provided, set it to the first subject
//   //       // const subjectId ='1';
//   //       // const defaultSubjectId = subjectId || subjectsData[0]?.subjectId;
//   //       const defaultSubjectId = subjectId || (Subjects.length > 0 ? Subjects[0].subjectId : null);

//   //       // Fetch data for the default subject
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //       );
//   //       const result = await response.json();
//   //       setData(result);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [testCreationTableId, subjectId]);

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
//         {/* {subjectTitle.subjectId[0]} */}
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

// ----------------------------------------------------MAIN WORKING CODE-----------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import PaperHeader from "../../Components/PaperHeader/PaperHeader";
// import "../Paper/Paper.css";
// import ButtonsFunctionality from "./ButtonsFunctionality";
// import TestResultsPage from "./TestResultsPage";

// const Paper1 = ({ answeredQuestions }) => {
//   const [selectedSubject, setSelectedSubject] = useState(null);

//   //   const handleSubjectSelect = (subject) => {
//   //     // Set the selected subject when a subject button is clicked
//   //     setSelectedSubject(subject);
//   //   };

//   const [questionData, setQuestionData] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [Subjects, setSubjects] = useState([]);
//   const { testCreationTableId, subjectId } = useParams();
//   const [sections, setSections] = useState([]);

//   const [questionStatus, setQuestionStatus] = useState(
//     Array(questionData.length).fill("notAnswered")
//   );

//   const [answeredCount, setAnsweredCount] = useState(0);
//   const [notAnsweredCount, setNotAnsweredCount] = useState(0);
//   const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
//     useState(0);
//   const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
//   const [VisitedCount, setVisitedCount] = useState(0);

//   const updateCounters = () => {
//     let answered = 0;
//     let notAnswered = 0;
//     let marked = 0;
//     let markedForReview = 0;
//     let Visited = 0;

//     questionStatus.forEach((status) => {
//       if (status === "answered") {
//         answered++;
//       } else if (status === "notAnswered") {
//         notAnswered++;
//       } else if (status === "marked") {
//         marked++;
//       } else if (status === "Answered but marked for review") {
//         markedForReview++;
//       } else if (status === "notVisited") {
//         Visited++;
//       }
//     });

//     setAnsweredCount(answered);
//     setNotAnsweredCount(notAnswered);
//     setAnsweredmarkedForReviewCount(marked);
//     setMarkedForReviewCount(markedForReview);
//     setVisitedCount(Visited);
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
//     const fetchData = async () => {
//       try {
//         // Fetch all subjects
//         const responseSubjects = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await responseSubjects.json();
//         setSubjects(subjectsData);
//         console.log(subjectsData);

//         // Find the least subjectId
//         const leastSubjectId =
//           subjectsData.length > 0
//             ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//             : null;

//         // If subjectId is not provided, set it to the least subjectId
//         const defaultSubjectId = subjectId || leastSubjectId;

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setQuestionData(result);

//         // Construct the link with the least subjectId
//         const linkUrl = `/subjects/${testCreationTableId}/${
//           subjectId || leastSubjectId
//         }`;
//         // Use linkUrl as needed in your component
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId]);

//   const handleSubjectsClick = async (clickedSubjectId) => {
//     setQuestionData(null);
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setQuestionData(subjectsData);
//       } else {
//         console.error("Invalid data format:", subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // Call the updateCounters function initially when the component mounts
//     updateCounters();
//   }, [questionStatus]);

//   const [selectedAnswers, setSelectedAnswers] = useState(
//     Array(questionData.length).fill("")
//   );

//   const onAnswerSelected = (OptionLetter) => {
//     const updatedSelectedAnswers = [...selectedAnswers];
//     updatedSelectedAnswers[activeQuestion] = OptionLetter;
//     setSelectedAnswers(updatedSelectedAnswers);

//     const updatedQuestionStatus = [...questionStatus];
//     updatedQuestionStatus[activeQuestion] = "answered";
//     setQuestionStatus(updatedQuestionStatus);
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);

//   const markForReview = () => {
//     // Update questionStatus for the marked question
//     const updatedQuestionStatus = [...questionStatus];
//     if (selectedAnswers[activeQuestion]) {
//       updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
//       if (
//         selectedAnswers[activeQuestion] === "Answered but marked for review"
//       ) {
//         updatedQuestionStatus[activeQuestion] =
//           "Answered but marked for review";
//       }
//     } else if (!selectedAnswers[activeQuestion]) {
//       updatedQuestionStatus[activeQuestion] = "marked";
//     }

//     setQuestionStatus(updatedQuestionStatus);
//   };

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

//     setActiveQuestion((prevActiveQuestion) => prevActiveQuestion - 1);
//   };

//   const handleNextClick = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       // Save the current timer value for the question

//       const updatedTimers = [...timers];

//       updatedTimers[prevIndex] = timer;

//       setTimers(updatedTimers);
//       return prevIndex + 1;
//     });

//     const updatedQuestionStatus = [...questionStatus];

//     if (activeQuestion < questionData.length - 1) {
//       // Check the status of the next question
//       const nextQuestionStatus = questionStatus[activeQuestion + 1];

//       if (nextQuestionStatus === "answered") {
//         updatedQuestionStatus[activeQuestion + 1] = "answered";
//       } else if (nextQuestionStatus === "notAnswered") {
//         updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
//       } else if (!markForReview() === false) {
//         markForReview();
//       }

//       setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
//     }

//     updateCounters();

//     // Set status of the next question (if any) to "notAnswered"

//     if (activeQuestion < questionData.length - 1) {
//       const updatedQuestionStatus = [...questionStatus];
//       const nextQuestionStatus = questionStatus[activeQuestion + 1];

//       if (nextQuestionStatus === "notVisited") {
//         updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
//       }

//       if (selectedAnswers[activeQuestion] === "answered") {
//         updatedQuestionStatus[activeQuestion] = "answered";
//       } else if (markForReview() === true) {
//         updatedQuestionStatus[activeQuestion] =
//           "Answered but marked for review";
//       } else if (markForReview() === false) {
//         updatedQuestionStatus[activeQuestion] = "marked";
//       }

//       if (nextQuestionStatus === "notAnswered") {
//         updatedQuestionStatus[activeQuestion + 1] = "notAnswered";
//       }

//       setQuestionStatus(updatedQuestionStatus);
//     }
//   };

//   const [accuracy, setAccuracy] = useState(0);
//   const [averageScore, setAverageScore] = useState(0);
//   const [topScore, setTopScore] = useState(0);
//   const [liveRank, setLiveRank] = useState(0);

//   const calculateQuestionCounts = () => {
//     let answered = 0;
//     let notAnswered = 0;
//     let markedForReview = 0;
//     let answeredmarkedForReviewCount = 0;
//     let VisitedCount = 0;

//     questionStatus.forEach((status, index) => {
//       if (status === "answered") {
//         answered++;
//       } else if (status === "notAnswered") {
//         notAnswered++;
//       } else if (status === "marked") {
//         markedForReview++;
//       } else if (status === "Answered but marked for review") {
//         answeredmarkedForReviewCount++;
//       } else if (status === "notVisited") {
//         VisitedCount++;
//       }
//     });

//     return {
//       answered,
//       notAnswered,
//       markedForReview,
//       answeredmarkedForReviewCount,
//       VisitedCount,
//     };
//   };

//   const [showResult, setShowResult] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     window.alert("Your Test has been Submitted!! Click Ok to See Result.");

//     // Call the function to get question counts
//     const {
//       answered,
//       notAnswered,
//       markedForReview,
//       answeredmarkedForReviewCount,
//       VisitedCount,
//     } = calculateQuestionCounts();

//     // Add any additional logic you need for submitting the exam
//     // For example, you might want to send this data to the server.
//     // Redirect to the result page
//     navigate("/result", {
//       state: {
//         answeredCount: answered,
//         notAnsweredCount: notAnswered,
//         markedForReviewCount: markedForReview,
//         answeredmarkedForReviewCount: answeredmarkedForReviewCount,
//         VisitedCount: VisitedCount,
//       },
//     });
//   };

//   const handleQuestionSelect = (questionNumber) => {
//     setCurrentQuestionIndex(questionNumber - 1);
//     setActiveQuestion(questionNumber - 1);
//   };

//   return (
//     <div className="Main-Page">
//       {showResult ? (
//         // Render the ResultPage component here
//         <TestResultsPage
//           answeredCount={answeredCount}
//           notAnsweredCount={notAnsweredCount}
//           markedForReviewCount={markedForReviewCount}
//           answeredmarkedForReviewCount={answeredmarkedForReviewCount}
//           VisitedCount={VisitedCount}
//         />
//       ) : (
//         <div>
//           <div>
//             <PaperHeader />
//           </div>
//           <div className="QUESTIONS_CONTAINER">
//             <div className="QUESTIONS_CONTAINER_subpart">
//               <div className="subjects">
//                 {Subjects.map((subjectTitle) => (
//                   <li key={subjectTitle.subjectId}>
//                     <Link
//                       to="#"
//                       onClick={() =>
//                         handleSubjectsClick(subjectTitle.subjectId)
//                       }
//                       className="subject-btn"
//                     >
//                       {/* {subjectTitle.subjectId[0]} */}
//                       {subjectTitle.subjectName}
//                     </Link>
//                   </li>
//                 ))}
//               </div>
//               {/* <div className="subjects">
//                 {Subjects.map((subjectTitle, index) => (
//                   <li key={index}>
//                     <Link>
//                       <button
//                         className="subject-btn"
//                         onClick={() =>
//                           handleSubjectSelect(subjectTitle.subjectName)
//                         }
//                       >
//                         {subjectTitle.subjectName}
//                       </button>
//                     </Link>

//                   </li>
//                 ))}
//               </div> */}

//               <div className="second-header">
//                 <div className="single-select-question">
//                   {sections.map((sectionTitle, index) => (
//                     <li key={index}>
//                       <p>{sectionTitle.sectionName}</p>
//                     </li>
//                   ))}
//                   {/* Single Select Question */}
//                 </div>
//                 <div className="right-header">
//                   <div className="marks">
//                     Marks: <div className="plus-mark">+1</div>
//                     <div className="minus-mark">-1</div>
//                   </div>
//                   <div>Timer: {formatTime(timer)}</div>
//                 </div>
//               </div>

//               <div className="Question_No_heading">
//                 <p>
//                   {" "}
//                   Question No. {currentQuestionIndex + 1} of{" "}
//                   {questionData.length}
//                 </p>
//               </div>

//               <div className="_quizexampart ">
//                 {questionData !== null ? (
//                   questionData.length > 0 && (
//                     <div className="quizexampart_q_O_container">
//                       <div className="question">
//                         <h3>
//                           {currentQuestionIndex + 1}.
//                           <img
//                             src={`data:image/png;base64,${questionData[currentQuestionIndex].question_img}`}
//                             alt={`Question ${currentQuestionIndex + 1}`}
//                           />
//                         </h3>
//                       </div>

//                       {/* Map over options and render them */}
//                       {questionData[currentQuestionIndex].options
//                         .filter(
//                           (opt) => opt.question_id === questionData.question_id
//                         )
//                         .map((OptionImage, optionIndex) => (
//                           <div className="option" key={OptionImage.question_id}>
//                             <li key={optionIndex}>
//                               <input
//                                 type="radio"
//                                 name={`question-${currentQuestionIndex}-option`}
//                                 value={optionIndex}
//                                 checked={
//                                   selectedAnswers[currentQuestionIndex] ===
//                                   optionIndex
//                                 }
//                                 onChange={() => onAnswerSelected(optionIndex)}
//                               />
//                               {OptionImage && OptionImage.option_img && (
//                                 <img
//                                   key={OptionImage.question_id}
//                                   src={`data:image/png;base64,${OptionImage.option_img}`}
//                                   alt={`Option ${optionIndex + 1}`}
//                                 />
//                               )}
//                             </li>
//                           </div>
//                         ))}

//                       <div className="flex-right">
//                         <button className="clear-btn" onClick={markForReview}>
//                           Mark for Review & Next
//                         </button>
//                         <button className="clear-btn" onClick={clearResponse}>
//                           Clear Response
//                         </button>
//                         <button
//                           className="previous-btn"
//                           onClick={goToPreviousQuestion}
//                           disabled={currentQuestionIndex === 0}
//                         >
//                           <i className="fa-solid fa-angles-left"></i> Previous
//                         </button>
//                         <button className="save-btn" onClick={handleNextClick}>
//                           Next <i className="fa-solid fa-angles-right"></i>
//                         </button>
//                       </div>
//                     </div>
//                   )
//                 ) : (
//                   <p>Loading data...</p>
//                 )}
//               </div>
//             </div>

//             <div className="rightsidebar">
//               <ButtonsFunctionality
//                 onQuestionSelect={handleQuestionSelect}
//                 questionStatus={questionStatus}
//                 setQuestionStatus={setQuestionStatus}
//                 answeredCount={answeredCount}
//                 notAnsweredCount={notAnsweredCount}
//                 answeredmarkedForReviewCount={answeredmarkedForReviewCount}
//                 markedForReviewCount={markedForReviewCount}
//                 VisitedCount={VisitedCount}
//                 selectedSubject={selectedSubject}
//                 questionData={questionData}
//               />
//               <button onClick={handleSubmit} id="resume_btn">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Paper1;

// ----------------------------------------------MAIN WORKING CODE------------------------
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
//         console.log(subjectsData);

//         // Find the least subjectId
//         const leastSubjectId =
//           subjectsData.length > 0
//             ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//             : null;

//         // If subjectId is not provided, set it to the least subjectId
//         const defaultSubjectId = subjectId || leastSubjectId;

//         // Fetch data for the default subject
//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const result = await response.json();
//         setData(result);

//         // Construct the link with the least subjectId
//         const linkUrl = `/subjects/${testCreationTableId}/${
//           subjectId || leastSubjectId
//         }`;
//         // Use linkUrl as needed in your component
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
//         console.error("Invalid data format:", subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const handleNextClick = () => {
//     // Update the current question index to move to the next question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
//     );
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
//               {/* {subjectTitle.subjectId[0]} */}
//               {subjectTitle.subjectName}
//             </Link>
//           </li>
//         ))}
//       </div>

//       {data !== null ? (

//         data.questions.map((question, index) => (
//           <div>
//             <div key={index}>
//               <div className="question">
//                 <h3>{index + 1}.</h3>
//                 <img
//                   src={`data:image/png;base64,${question.question_img}`}
//                   alt="Question"
//                 />
//               </div>

//               {/* Map over options and render them */}
//               {data.options
//                 .filter((opt) => opt.question_id === question.question_id)
//                 .map((option) => (
//                   <div className="option" key={option.question_id}>
//                     <input type="radio" />
//                     <img
//                       src={`data:image/png;base64,${option.option_img}`}
//                       alt="Option"
//                     />
//                   </div>
//                 ))}
//             </div>
//             <div>
//               <button
//                 className="previous-btn"
//                 // onClick={goToPreviousQuestion}
//                 // disabled={questionData === 0}
//               >
//                 <i className="fa-solid fa-angles-left"></i> Previous
//               </button>
//               <button className="save-btn" onClick={handleNextClick}>
//                 Next <i className="fa-solid fa-angles-right"></i>
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default Paper1;

// -----------------------------------------------END MAIN WORKING CODE--------------------------


















import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ButtonsFunctionality from "./ButtonsFunctionality";
import './Paper.css'

const Paper1 = () => {
  const [data, setData] = useState(null);
  const { subjectId, testCreationTableId } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSectionName, setCurrentSectionName] = useState("");
  // const [currentSection, setCurrentSection] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [questionStatus, setQuestionStatus] = useState(
    Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
  );

  // ----------------------------------BUTTON CODE-----------------------------------------------------

  const [answeredCount, setAnsweredCount] = useState(0);
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
    useState(0);
  const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
  const [VisitedCount, setVisitedCount] = useState(0);

  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);

  const calculateQuestionCounts = () => {
    let answered = 0;
    let notAnswered = 0;
    let markedForReview = 0;
    let answeredmarkedForReviewCount = 0;
    let VisitedCount = 0;

    questionStatus.forEach((status, index) => {
      if (status === "answered") {
        answered++;
      } else if (status === "notAnswered") {
        notAnswered++;
      } else if (status === "marked") {
        markedForReview++;
      } else if (status === "Answered but marked for review") {
        answeredmarkedForReviewCount++;
      } else if (status === "notVisited") {
        VisitedCount++;
      }
    });

    return {
      answered,
      notAnswered,
      markedForReview,
      answeredmarkedForReviewCount,
      VisitedCount,
    };
  };

  let currentSectionIndex = 0;
  let currentQuestionCount = 0;

  const updateCurrentSection = () => {
    currentSectionIndex += 1;
    currentQuestionCount = 0;
    setCurrentSectionName(
      sortedSections[currentSectionIndex]?.sectionName || ""
    );
  };

  const handleSubmit = () => {
    window.alert("Your Test has been Submitted!! Click Ok to See Result.");

    // Call the function to get question counts
    const {
      answered,
      notAnswered,
      markedForReview,
      answeredmarkedForReviewCount,
      VisitedCount,
    } = calculateQuestionCounts();

    // Add any additional logic you need for submitting the exam
    // For example, you might want to send this data to the server.
    // Redirect to the result page

    navigate("/result", {
      state: {
        answeredCount: answered,
        notAnsweredCount: notAnswered,
        markedForReviewCount: markedForReview,
        answeredmarkedForReviewCount: answeredmarkedForReviewCount,
        VisitedCount: VisitedCount,
      },
    });

  };

  //main
  // const handleQuestionSelect = (questionNumber) => {
  //   setCurrentQuestionIndex(questionNumber - 1);
  //   setActiveQuestion(questionNumber - 1);
  // };

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
    setActiveQuestion(questionNumber - 1);
  
    // Call the function to update the current section when a question is selected
    updateCurrentSection();
  
    // Update the current section name
    setCurrentSectionName(sortedSections[currentSectionIndex]?.sectionName || "");
  };

  // Function to set data in local storage
  const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Function to get data from local storage
  const getLocalStorageData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  // const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState([]);

  const initialSelectedOption = localStorage.getItem("selectedAnswers") || [];

  // const [selectedAnswers, setSelectedAnswers] = useState(initialSelectedOption);

  // ----------------------------------BUTTON CODE-----------------------------------------------------
  const [sortedSections] = useState("");
  //working code
  useEffect(() => {
    const fetchData = async () => {
      let sortedSections = [];
      try {
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);
        console.log(subjectsData);

        // Find the least subjectId
        const leastSubjectId =
          subjectsData.length > 0
            ? Math.min(...subjectsData.map((subject) => subject.subjectId))
            : null;

        // If subjectId is not provided, set it to the least subjectId
        const defaultSubjectId = subjectId || leastSubjectId;

        // Fetch data for the default subject
        const response = await fetch(
          `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
        );
        const result = await response.json();
        setData(result);

        // Initialize selected answers based on the saved answers for the current subject
        const selectedAnswersForSubject =
          selectedAnswersMap[defaultSubjectId] || [];
        setSelectedAnswers(selectedAnswersForSubject);

        // Construct the link with the least subjectId
        const linkUrl = `/subjects/${testCreationTableId}/${
          subjectId || leastSubjectId
        }`;
        // Use linkUrl as needed in your component

        //  ---------------------------------------------------------

        const responseSections = await fetch(
          `http://localhost:4009/fetchSections/${testCreationTableId}/${defaultSubjectId}`
        );
        const sectionsData = await responseSections.json();
        console.log("sectionsData:", sectionsData);
        const sortedSections = sectionsData.sort(
          (a, b) => b.noOfQuestions - a.noOfQuestions
        );
        console.log("sortedSections:", sortedSections);

        setSections(sortedSections);

        // Track the current section index and current question count
        let currentSectionIndex = 0;
        let currentQuestionCount = 0;
        let currentSectionName = "";

        // Function to update the current section based on the question count 1st code
        const updateCurrentSection = () => {
          currentSectionIndex += 1;
          currentQuestionCount = 0;
          currentSectionName =
            sortedSections[currentSectionIndex]?.sectionName || "";
        };
        // Initial display of questions

        //2nd one
        const displayQuestions = () => {
          const currentSection = sortedSections[currentSectionIndex];

          if (currentQuestionCount < currentSection.noOfQuestions) {
            // Set the initial section name if not set
            if (!currentSectionName) {
              setCurrentSectionName(currentSection.sectionName);
              console.log("Current Section ID:", currentSection.sectionId);
            }

            currentQuestionCount += 1;
          } else {
            updateCurrentSection();
            displayQuestions();
          }
        };
        displayQuestions();

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId]);


  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});

  //working code

  const handleSubjectsClick = async (clickedSubjectId) => {
    setData(null);
    setCurrentQuestionIndex(0); // Reset current question index

    // Check if there are selected answers for the current subject
    const selectedAnswersForSubject =
      selectedAnswersMap[clickedSubjectId] || [];
    setSelectedAnswers(selectedAnswersForSubject);
    setSelectedSubject(clickedSubjectId);
    try {
      const response = await fetch(
        `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
      );
      const subjectsData = await response.json();

      if (subjectsData && subjectsData.questions) {
        setData(subjectsData);
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //working code

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        const nextIndex = prevIndex + 1;
        return nextIndex;
      } else {
        const currentSectionIndex = data.sections.findIndex(
          (section) => section.questions === data.questions
        );
  
        const nextSectionIndex =
          currentSectionIndex < data.sections.length - 1
            ? currentSectionIndex + 1
            : currentSectionIndex;
  
        // Set the current question index to the first question in the next section
        setCurrentQuestionIndex(nextSectionIndex);
  
        // Update the current section name when moving to the next section
        setCurrentSectionName(sortedSections[nextSectionIndex]?.sectionName || "");
  
        return nextSectionIndex;
      }
    });
  };
  
  const handlePreviousClick = () => {
    // Update the current question index to move to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const clearResponse = () => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = "";
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleSectionButtonClick = (clickedSectionId) => {
    // Use the clicked section ID to update the section name or perform any other actions
    setCurrentSectionName(sortedSections[clickedSectionId]?.sectionName || "");
  };


//   const handleSubjectSelect = (subject) => {
//     // Set the selected subject when a subject button is clicked
//     setSelectedSubject(subject);
// };

  // ---------------------------------Timer code Start--------------------------------
  const [timer, setTimer] = useState(0);
  // const [timers, setTimers] = useState(new Array(data.length).fill(0));
  const [timers, setTimers] = useState(Array(data));
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
  };

  //working code
  useEffect(() => {
    // Set the timer to the saved value for the current question
    setTimer(timers[currentQuestionIndex] || 0);
    let interval;
    interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    // Clear the interval when the component unmounts or when the user moves to the next question
    return () => {
      clearInterval(interval);
    };
  }, [currentQuestionIndex, timers]);

  // ------------------------------------Timer code end--------------------------------

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  //working code
  const onAnswerSelected = (optionIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = optionIndex;

    // Update the selected answers map for the current subject
    setSelectedAnswersMap((prevMap) => ({
      ...prevMap,
      [data.subjectId]: updatedSelectedAnswers,
    }));

    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div>
      
      <div className="subjects">
        {Subjects.map((subjectTitle) => (
          <li key={subjectTitle.subjectId}>
            <button
              onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
              className="subject_btn"
            >
              {subjectTitle.subjectName}
            </button>
          </li>
        ))}
      </div>

      {data !== null && data.questions.length > 0 ? (
        <div className="qps_button_sections">
          <div className="question_paper_section">
            <div className="second-header">
              <div className="single-select-question">
                <li>
                  <p>Current Section: {currentSectionName}</p>
                </li>
              </div>
              <div className="right-header">
                <div className="marks">
                  Marks: <div className="plus-mark">+1</div>
                  <div className="minus-mark">-1</div>
                </div>
                <div>Timer: {formatTime(timer)}</div>
              </div>
            </div>
            <div className="question_options_container">
              <div className="question">
                {/* Render the current question based on currentQuestionIndex */}
                <h3>{currentQuestionIndex + 1}.</h3>
                <img
                  src={`data:image/png;base64,${data.questions[currentQuestionIndex].question_img}`}
                  alt="Question"
                />
              </div>
              {/* Map over options for the current question and render them */}
              {data.options
                .filter(
                  (opt) =>
                    opt.question_id ===
                    data.questions[currentQuestionIndex].question_id
                )
                .map((option, optionIndex) => (
                  <div className="option" key={option.option_id}>
                    <li key={optionIndex}>
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}-option`}
                        value={optionIndex}
                        checked={
                          selectedAnswers[currentQuestionIndex] === optionIndex
                        }
                        // onChange={() => onAnswerSelected(subjectIndex, optionIndex)}
                        onChange={() => onAnswerSelected(optionIndex)}
                      />
                      <img
                        src={`data:image/png;base64,${option.option_img}`}
                        alt="Option"
                      />
                    </li>
                  </div>
                ))}
            </div>

            <div>
              <button className="clear-btn" onClick={clearResponse}>
                Clear Response
              </button>
              <button
                className="previous-btn"
                onClick={handlePreviousClick}
                disabled={currentQuestionIndex === 0}
              >
                <i className="fa-solid fa-angles-left"></i> Previous
              </button>
              <button className="save-btn" onClick={handleNextClick}>
                Next <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>
          </div>

          <div className="rightsidebar">
            <ButtonsFunctionality
              onQuestionSelect={handleQuestionSelect}
              questionStatus={questionStatus}
              setQuestionStatus={setQuestionStatus}
              answeredCount={answeredCount}
              notAnsweredCount={notAnsweredCount}
              answeredmarkedForReviewCount={answeredmarkedForReviewCount}
              markedForReviewCount={markedForReviewCount}
              VisitedCount={VisitedCount}
              selectedSubject={selectedSubject}
              data={data}
              onSectionButtonClick={handleSectionButtonClick} 
            />
            <button onClick={handleSubmit} id="resume_btn">
              Submit
            </button>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Paper1;
