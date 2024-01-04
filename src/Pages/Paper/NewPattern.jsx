
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import ButtonsFunctionality from "./ButtonsFunctionality";
// import "./Paper.css";
// import axios from "axios";

// const NewPattern = ({ answeredQuestions }) => {
//   const [data, setData] = useState({ questions: [] });
//   const { subjectId, testCreationTableId } = useParams();
//   const [Subjects, setSubjects] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [questionStatus, setQuestionStatus] = useState(
//     Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
//   );
//   const [sections, setSections] = useState([]);
//   const [currentQuestionType, setCurrentQuestionType] = useState(null);

//   const navigate = useNavigate();

//   const [answeredCount, setAnsweredCount] = useState(0);
//   const [notAnsweredCount, setNotAnsweredCount] = useState(0);
//   const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
//     useState(0);
//   const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
//   const [VisitedCount, setVisitedCount] = useState(0);
//   const [showExamSumary, setShowExamSumary] = useState(false);
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

//   const handleQuestionSelect = (questionNumber) => {
//     setCurrentQuestionIndex(questionNumber - 1);
//   };

//   const handleSubjectsClick = async (clickedSubjectId) => {
//     setCurrentQuestionIndex(0);
//     setSelectedSubject(clickedSubjectId);

//     const selectedAnswersForSubject =
//       selectedAnswersMap1[clickedSubjectId] || [];
//     setSelectedAnswers(selectedAnswersForSubject);

//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//         setSelectedSubject(clickedSubjectId);
//         setSections(subjectsData.sections);
//         setCurrentQuestionIndex(0);

//         if (clickedSubjectId !== selectedSubject) {
//           navigate(`/getPaperData/${testCreationTableId}`);
//         }
//       } else {
//         console.error("Invalid data format:", subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // const [setSubjectId] = useState();

//   // const clearResponse = () => {
//   //   const questionId = data.questions[currentQuestionIndex].question_id;

//   //   // Clear response for radio buttons (MCQ)
//   //   const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
//   //   updatedSelectedAnswersMap1[questionId] = null;
//   //   setSelectedAnswersMap1(updatedSelectedAnswersMap1);

//   //   // Clear response for checkboxes (MSQ)
//   //   const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
//   //   updatedSelectedAnswersMap2[questionId] = [];
//   //   setSelectedAnswersMap2(updatedSelectedAnswersMap2);
//   // };

//   const handlePreviousClick = () => {
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
    
//   };

//   // const clearResponse = async () => {
//   //   try {
//   //     const questionId = data.questions[currentQuestionIndex].question_id;
  
//   //     // Send a request to your server to clear the user's response for the current question
//   //     const response = await axios.delete(`http://localhost:4009/clearResponse/${questionId}`);
      
//   //     if (response.status === 200) {
//   //       // Clear response for radio buttons (MCQ)
//   //       const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
//   //       updatedSelectedAnswersMap1[questionId] = null;
//   //       setSelectedAnswersMap1(updatedSelectedAnswersMap1);
  
//   //       // Clear response for checkboxes (MSQ)
//   //       const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
//   //       updatedSelectedAnswersMap2[questionId] = [];
//   //       setSelectedAnswersMap2(updatedSelectedAnswersMap2);
  
//   //       console.log("Response cleared successfully in frontend");
//   //       // Update any other state or perform additional actions as needed
//   //     } else {
//   //       console.error("Failed to clear response:", response.data);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error clearing response:", error);
//   //   }
//   // };
  
//   // const clearResponse = async () => {
//   //   try {
//   //     const questionId = data.questions[currentQuestionIndex].question_id;
  
//   //     // Send a request to your server to clear the user's response for the current question
//   //     const response = await axios.delete(`http://localhost:4009/clearResponse/${questionId}`);
      
//   //     if (response.status === 200) {
//   //       // Clear response for radio buttons (MCQ)
//   //       const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
//   //       updatedSelectedAnswersMap1[questionId] = null;
//   //       setSelectedAnswersMap1(updatedSelectedAnswersMap1);
  
//   //       // Clear response for checkboxes (MSQ)
//   //       const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
//   //       updatedSelectedAnswersMap2[questionId] = [];
//   //       setSelectedAnswersMap2(updatedSelectedAnswersMap2);
  
//   //       console.log("Response cleared successfully in frontend");
//   //       // Update any other state or perform additional actions as needed
//   //     } else {
//   //       console.error("Failed to clear response:", response.data);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error clearing response:", error);
//   //   }
//   // };

//   // Assuming you have these useState declarations in your component
//   // const clearResponse = async () => {
//   //   try {
//   //     const questionId = data.questions[currentQuestionIndex].question_id;
  
//   //     // Clear response in the database by sending a DELETE request to the server
//   //     const response = await axios.delete(`http://localhost:4009/clearResponse/${questionId}`);
      
//   //     if (response.status === 200) {
//   //       // Update the state in the frontend to reflect the cleared response
//   //       const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
//   //       updatedSelectedAnswersMap1[questionId] = null;
//   //       setSelectedAnswersMap1(updatedSelectedAnswersMap1);
  
//   //       const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
//   //       updatedSelectedAnswersMap2[questionId] = [];
//   //       setSelectedAnswersMap2(updatedSelectedAnswersMap2);
  
//   //       console.log("Response cleared successfully");
//   //       // Update any other state or perform additional actions as needed
//   //     } else {
//   //       console.error("Failed to clear response:", response.data);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error clearing response:", error);
//   //   }
//   // };




//   // const clearResponse = async () => {
//   //   try {
//   //     const questionId = data.questions[currentQuestionIndex].question_id;
//   //     console.log("Response cleared successfully");
//   //     // Clear response in the database by sending a DELETE request to the server
//   //     const response = await axios.delete(`http://localhost:4009/clearResponse/${questionId}`);
      
//   //     if (response.status === 200) {
//   //       // Update the state in the frontend to reflect the cleared response
//   //       const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
//   //       const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
  
//   //       // Clear response for radio buttons (MCQ)
//   //       if (currentQuestionType?.typeofQuestion.toLowerCase() === 'mcq') {
//   //         updatedSelectedAnswersMap1[questionId] = null;
//   //       }
  
//   //       // Clear response for checkboxes (MSQ)
//   //       if (currentQuestionType?.typeofQuestion.toLowerCase() === 'msq') {
//   //         updatedSelectedAnswersMap2[questionId] = [];
//   //       }
  
//   //       setSelectedAnswersMap1(updatedSelectedAnswersMap1);
//   //       setSelectedAnswersMap2(updatedSelectedAnswersMap2);
  
//   //       // console.log("Response cleared successfully");
//   //       // Update any other state or perform additional actions as needed
//   //     } else {
//   //       console.error("Failed to clear response:", response.data);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error clearing response:", error);
//   //   }
//   // };
  
  

  
//   const clearResponse = async () => {
    
//     try {
    

//       const questionId = data.questions[currentQuestionIndex].question_id;
//       console.log("Response cleared successfully");
// // Clear response for radio buttons (MCQ)
//     const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
//     updatedSelectedAnswersMap1[questionId] = null;
//     setSelectedAnswersMap1(updatedSelectedAnswersMap1);

//     // Clear response for checkboxes (MSQ)
//     const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
//     updatedSelectedAnswersMap2[questionId] = [];
//     setSelectedAnswersMap2(updatedSelectedAnswersMap2);


//       // Send a request to your server to clear the user's response for the current question
//       const response = await axios.delete(`http://localhost:4009/clearResponse/${questionId}`);
      
//       if (response.status === 200) {
//         console.log("Response cleared successfully");
//         // Update any state or perform additional actions as needed
//       } else {
//         console.error("Failed to clear response:", response.data);
//       }
//     } catch (error) {
//       console.error("Error clearing response:", error);
//     }
//   };
  
  

//   const [clickCount, setClickCount] = useState(0);


// const [answeredQuestionsMap, setAnsweredQuestionsMap] = useState({});
// const correctAnswer =
//   data && data.questions && data.questions[currentQuestionIndex]
//     ? data.questions[currentQuestionIndex].correct_answer
//     : null; // or provide a default value based on your logic


  
//   const handleNextClick = async () => {
//     console.log("Before state update", currentQuestionIndex);
//     setCurrentQuestionIndex((prevIndex) => {
//       if (prevIndex < data.questions.length - 1) {
      
//         return prevIndex + 1;
//       }
//     });
//     try {
//       if (!data || !data.questions) {
//         console.error('Data or questions are null or undefined');
//         return;
//       }

//       const currentQuestion = data.questions[currentQuestionIndex];
//       const selectedOption1 = selectedAnswersMap1[currentQuestion.question_id];
//       const selectedOption2 = selectedAnswersMap2[currentQuestion.question_id];

//       const optionIndexes1 = selectedOption1 !== undefined ? [selectedOption1] : [];
//       const optionIndexes2 = selectedOption2 !== undefined ? selectedOption2 : [];

//       const questionId = currentQuestion.question_id;

//       if (answeredQuestionsMap[questionId]) {
//         const updatedResponse = {
//           optionIndexes1: optionIndexes1.map((index) =>
//             String.fromCharCode("a".charCodeAt(0) + index)
//           ),
//           optionIndexes2: optionIndexes2.map((index) =>
//             String.fromCharCode("a".charCodeAt(0) + index)
//           ),
//         };

//         const updateResponse = await axios.put(`http://localhost:4009/updateResponse/${questionId}`, {
//           updatedResponse,
//         });

//         console.log(updateResponse.data);
//         console.log('Handle Next Click - Response Updated');
//       } else {
//         const responses = {
//           [questionId]: {
//             optionIndexes1: optionIndexes1.map((index) =>
//               String.fromCharCode("a".charCodeAt(0) + index)
//             ),
//             optionIndexes2: optionIndexes2.map((index) =>
//               String.fromCharCode("a".charCodeAt(0) + index)
//             ),
//           },
//         };

//         const saveResponse = await axios.post("http://localhost:4009/response", {
//           responses,
//         });

//         console.log(saveResponse.data);
//         console.log('Handle Next Click - New Response Saved');

//         setAnsweredQuestionsMap((prevMap) => ({
//           ...prevMap,
//           [questionId]: true,
//         }));
//       }

//       setClickCount((prevCount) => prevCount + 1);
//     } catch (error) {
//       console.error("Error handling next click:", error);
//     }







//     // setCurrentQuestionIndex((prevIndex) => {
//     //   // Save the current timer value for the question

//     //   const updatedTimers = [...timers];

//     //   updatedTimers[prevIndex] = timer;

//     //   setTimers(updatedTimers);
//     //   return prevIndex + 1;
//     // });

//     const updatedQuestionStatus = [...questionStatus];
//     // && !markForReview()
//   // Set status of the next question (if any) based on the conditions
//   if (currentQuestionIndex < data.questions.length - 1) {
//     if (!selectedAnswers[currentQuestionIndex]) {
//       // Not answered and not marked for review
//       updatedQuestionStatus[currentQuestionIndex + 1] = "notAnswered";
//     } else if (selectedAnswers[currentQuestionIndex]) {
//       // Answered
//       updatedQuestionStatus[currentQuestionIndex + 1] = "answered";
//     } else if (markForReview()) {
//       // Marked for review
//       updatedQuestionStatus[currentQuestionIndex + 1] = "marked";
//     }
//   }

//   setQuestionStatus(updatedQuestionStatus);

//     // const correctAnswer = data[currentQuestionIndex].correct_answer; // Replace 'correct_answer' with the actual property name
//     // const selectedAnswer = selectedAnswers[currentQuestionIndex];

//     // if (selectedAnswer === correctAnswer) {
//     //   setShowExamSumary((prevResult) => ({
//     //     ...prevResult,
//     //     score: prevResult.score + 5,
//     //     correctAnswers: prevResult.correctAnswers + 1,
//     //   }));
//     // } else {
//     //   setShowExamSumary((prevResult) => ({
//     //     ...prevResult,
//     //     wrongAnswers: prevResult.wrongAnswers + 1,
//     //   }));
//     // }

//     if (currentQuestionIndex < data.length - 1) {
//       // setCurrentQuestionIndex((prevActiveQuestion) => prevActiveQuestion + 1);
//     } else {
//       // setShowResult(true);
//       calculateResult();
//     }








//   };

//   useEffect(() => {
//     const counts = calculateQuestionCounts();
//     setAnsweredCount(counts.answered);
//     setNotAnsweredCount(counts.notAnswered);
//     setMarkedForReviewCount(counts.markedForReview);
//     setAnsweredmarkedForReviewCount(counts.answeredmarkedForReviewCount);
//     setVisitedCount(counts.VisitedCount);
//   }, [questionStatus]);
  

//   const handleSubmit = () => {
//     window.alert("Your Test has been Submitted!! Click Ok to See Result.");
//     setShowExamSumary(true);
//     calculateResult();
//     const counts = calculateQuestionCounts();
//     setAnsweredCount(counts.answered);
//     setNotAnsweredCount(counts.notAnswered);
//     setMarkedForReviewCount(counts.markedForReview);
//     setAnsweredmarkedForReviewCount(counts.answeredmarkedForReviewCount);
//     setVisitedCount(counts.VisitedCount);
  
//   };

//   const markForReview = () => {
//     // Update questionStatus for the marked question
//     const updatedQuestionStatus = [...questionStatus];
//     if (selectedAnswers[currentQuestionIndex]) {
//       updatedQuestionStatus[currentQuestionIndex] = "Answered but marked for review";
//       // if(selectedAnswers[activeQuestion] === "Answered but marked for review"){
//       //   updatedQuestionStatus[activeQuestion] = "Answered but marked for review";
//       // }
//     } else if (!selectedAnswers[currentQuestionIndex]) {
//       updatedQuestionStatus[currentQuestionIndex] = "marked";
//     }

//     setQuestionStatus(updatedQuestionStatus);
//   };


//   const [sectionName, setSectionName] = useState("");
//   const [selectedAnswersMap1, setSelectedAnswersMap1] = useState({});
//   const [selectedAnswersMap2, setSelectedAnswersMap2] = useState({});
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const [questionTypes, setQuestionTypes] = useState([]);

//   useEffect(() => {
//     const fetchQuestionTypes = async () => {
//       try {
//         if (data && data.questions) {
//           const qID = data.questions[currentQuestionIndex].question_id;

//           const responseQuestionTypes = await fetch(
//             `http://localhost:4009/questionType/${qID}`
//           );
//           const questionTypes = await responseQuestionTypes.json();
//           setQuestionTypes(questionTypes);

//           const currentQuestionType = questionTypes.find(
//             (q) => q.question_id === qID
//           );

//           setCurrentQuestionType(currentQuestionType);
//         }
//       } catch (error) {
//         console.error("Error fetching question types:", error);
//       }
//     };

//     fetchQuestionTypes();
//   }, [data, currentQuestionIndex]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responseSubjects = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await responseSubjects.json();
//         setSubjects(subjectsData);

//         const leastSubjectId =
//           subjectsData.length > 0
//             ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//             : null;

//         const defaultSubjectId = subjectId || leastSubjectId;

//         const response = await fetch(
//           `http://localhost:4009/getPaperData/${testCreationTableId}`
//         );
//         const result = await response.json();
//         setData(result);

//         const selectedAnswersForSubject =
//           selectedAnswersMap1[defaultSubjectId] || [];
//         setSelectedAnswers(selectedAnswersForSubject);

//         const linkUrl = `/subjects/${testCreationTableId}/${
//           subjectId || leastSubjectId
//         }`;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId, selectedAnswersMap1]);

//   const [timer, setTimer] = useState(0);
//   const [timers, setTimers] = useState(Array(data));
//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };

//   useEffect(() => {
//     setTimer(timers[currentQuestionIndex] || 0);
//     let interval;
//     interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers]);
  

//   const onAnswerSelected1 = (optionIndex) => {
//     const questionId = data.questions[currentQuestionIndex].question_id;
//     const charcodeatopt = String.fromCharCode("a".charCodeAt(0) + optionIndex);
//     const questionIndex = currentQuestionIndex + 1;
//     console.log(`Question Index: ${questionIndex}`);
//     console.log(`Clicked Option Index: ${charcodeatopt}`);
//     setSelectedAnswersMap1((prevMap) => ({
//       ...prevMap,
//       [questionId]: optionIndex,
//     }));
//     setSelectedAnswersMap2((prevMap) => ({
//       ...prevMap,
//       [questionId]: [],
//     }));
//   };

//   const onAnswerSelected2 = (optionIndex) => {
//     const questionId = data.questions[currentQuestionIndex].question_id;
//     const charcodeatopt = String.fromCharCode("a".charCodeAt(0) + optionIndex);
//     const questionIndex = currentQuestionIndex + 1;
//     console.log(`Question Index: ${questionIndex}`);
//     console.log(`Clicked Option Index: ${charcodeatopt}`);
//     setSelectedAnswersMap2((prevMap) => {
//       const updatedSelection = [...(prevMap[questionId] || [])];
//       const index = updatedSelection.indexOf(optionIndex);

//       if (index !== -1) {
//         updatedSelection.splice(index, 1);
//       } else {
//         updatedSelection.push(optionIndex);
//       }

//       return {
//         ...prevMap,
//         [questionId]: updatedSelection,
//       };
//     });
//   };

//   // const [showExamSumary, setShowExamSumary] = useState(false);
//   const calculateResult = () => {
//     // Make sure answeredQuestions is defined before accessing its length
//     const totalAttempted = answeredQuestions ? answeredQuestions.length : 0;
//     // const totalCorrect = result.correctAnswers;


    
//   };
//   // const handleSubmit = () => {
//   //   window.alert("Your Test has been Submitted!! Click Ok to See Result.");
//   //   setShowResult(true);
//   //   calculateResult();

//   // };

//   const handleYes = () => {
       
      
//     navigate("/SubmitPage");
//   };

//   return (
//     <div>
//       {!showExamSumary ?(
      

//       <div>
//           <div className="subjects">
//         {Subjects.map((subjectTitle) => (
//           <li key={subjectTitle.subjectId}>
//             <button
//               onClick={() => handleSubjectsClick(subjectTitle.subjectId)}
//               className="subject_btn"
//             >
//               {subjectTitle.subjectName}
//             </button>
//           </li>
//         ))}

//         <h3>
//           Question Type:{" "}
//           {questionTypes.map((type) => (
//             <li key={type.quesionTypeId}>
//               <p>{type.typeofQuestion}</p>
//             </li>
//           ))}
//         </h3>
//         <div className="right-header">
//                 <div className="marks">
//                   Marks: <div className="plus-mark">+1</div>
//                   <div className="minus-mark">-1</div>
//                 </div>
//                 <div>Timer: {formatTime(timer)}</div>
//               </div>
//       </div>
//       <div>
//       {data !== null && data.questions.length > 0 ? (
//     <div className="qps_button_sections">
//       <div className="question_paper_section">
//         <div className="question_options_container">
//           <div className="question">
//             <h3>{currentQuestionIndex + 1}.</h3>
//             <img
//               src={`data:image/png;base64,${data.questions[currentQuestionIndex].question_img}`}
//               alt="Question"
//             />
//           </div>

//           {data.options
//             .filter(
//               (opt) =>
//                 opt.question_id ===
//                 data.questions[currentQuestionIndex].question_id
//             )
//             .map((option, optionIndex) => (
//               <div className="option" key={option.option_id}>
//                 <li className="option_li" key={optionIndex}>
//                   {currentQuestionType &&
//                     currentQuestionType.typeofQuestion.toLowerCase() ===
//                       "mcq(multiple choice question)" && (
//                       <input
//                         type="radio"
//                         name={`question-${currentQuestionIndex}-option`}
//                         value={String.fromCharCode(
//                           "A".charCodeAt(0) + optionIndex
//                         )}
//                         checked={
//                           selectedAnswersMap1[
//                             data.questions[currentQuestionIndex].question_id
//                           ] === optionIndex
//                         }
//                         onChange={() => onAnswerSelected1(optionIndex)}
//                       />
//                     )}

//                   {currentQuestionType &&
//                     currentQuestionType.typeofQuestion.toLowerCase() ===
//                       "msq(multiple selection question)" && (
//                       <input
//                         type="checkbox"
//                         name={`question-${currentQuestionIndex}-optionIndex`}
//                         value={String.fromCharCode(
//                           "A".charCodeAt(0) + optionIndex
//                         )}
//                         checked={
//                           selectedAnswersMap2[
//                             data.questions[currentQuestionIndex].question_id
//                           ] &&
//                           selectedAnswersMap2[
//                             data.questions[currentQuestionIndex].question_id
//                           ].includes(optionIndex)
//                         }
//                         onChange={() => onAnswerSelected2(optionIndex)}
//                       />
//                     )}

//                   {currentQuestionType &&
//                     currentQuestionType.typeofQuestion.toLowerCase() ===
//                       "nat(numerical answer type)" && (
//                       <input
//                         type="text"
//                         name={`question-${currentQuestionIndex}`}
//                         value={
//                           selectedAnswersMap2[
//                             data.questions[currentQuestionIndex].question_id
//                           ] || ""
//                         }
//                         onChange={(e) => onAnswerSelected2(e.target.value)}
//                       />
//                     )}

//                   {option.option_img && (
//                     <div className="option_contents">
//                       <p>
//                         (
//                         {String.fromCharCode(
//                           "A".charCodeAt(0) + optionIndex
//                         )}
//                         )
//                       </p>
//                       <img
//                         src={`data:image/png;base64,${option.option_img}`}
//                         alt={`Option-${optionIndex}`}
//                       />
//                     </div>
//                   )}
//                 </li>
//               </div>
//             ))}
//         </div>

//         <div>
//         <button className="clear-btn" onClick={markForReview}>
//                     Mark for Review & Next
//                   </button>
//           <button className="clear-btn" onClick={clearResponse}>
//             Clear Response
//           </button>
//           <button
//             className="previous-btn"
//             onClick={handlePreviousClick}
//             disabled={currentQuestionIndex === 0}
//           >
//             <i className="fa-solid fa-angles-left"></i> Previous
//           </button>
//           <button className="save-btn" onClick={handleNextClick}>
//             Save and Next <i className="fa-solid fa-angles-right"></i>
//           </button>
    
//         </div>
//       </div>

//       <div className="rightsidebar">
//         <ButtonsFunctionality
//           onQuestionSelect={handleQuestionSelect}
//           questionStatus={questionStatus}
//           setQuestionStatus={setQuestionStatus}
//           answeredCount={answeredCount}
//           notAnsweredCount={notAnsweredCount}
//           answeredmarkedForReviewCount={answeredmarkedForReviewCount}
//           markedForReviewCount={markedForReviewCount}
//           VisitedCount={VisitedCount}
//           selectedSubject={selectedSubject}
//           data={data}
//         />
//         <button onClick={handleSubmit} id="resume_btn">
//           Submit
//         </button>
//       </div>
//     </div>
//   ) : (
//     <p>Loading data...</p>
//   )}

//       </div>
//       </div>
//       ):
//       ( <div className="result">
//       <h3 id="result_header">Exam Summary</h3>
//       <div className="result_page_links">
       
//       </div>
//       <div className="result_contents">
 
//         <p>
//           Total Questions: <span>{ data.questions.length}</span>
//         </p>
//         <p>
//            Answered Questions:<span> {data.AnsweredQuestions}</span>
//         </p>
//         <p>
//         Not Answered Questions:<span> {data. NotAnsweredQuestions}</span>
//         </p>
//         <p>
//         Marked for Review Questions:<span> {data. MarkedforReviewQuestions}</span>
//         </p>
//         <p>
//         Answered & Marked for Review Questions:<span> {data.AnsweredAndMarkedforReviewQuestions}</span>
//         </p>
       
//       </div>
//       <div>
//         <h2>Are you sure you want to submit for final marking? <br />
//         No changes will be allowed after submission.
//         </h2>
//         <button onClick={handleYes}>YES</button>
//         <button>NO</button>
//       </div>
//     </div>)}
      


      
//     </div>
//   );
// };

// export default NewPattern;











import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonsFunctionality from "./ButtonsFunctionality";
import "./Paper.css";
import axios from "axios";

const NewPattern = () => {
  const [data, setData] = useState({ questions: [] });
  const { subjectId, testCreationTableId } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [questionStatus, setQuestionStatus] = useState(
    Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
  );
  const [sections, setSections] = useState([]);
  const [currentQuestionType, setCurrentQuestionType] = useState(null);

  const navigate = useNavigate();

  const [answeredCount, setAnsweredCount] = useState(0);
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
    useState(0);
  const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
  const [VisitedCount, setVisitedCount] = useState(0);
  const [showExamSumary, setShowExamSumary] = useState(false);
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

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
  };

  const handleSubjectsClick = async (clickedSubjectId) => {
    setCurrentQuestionIndex(0);
    setSelectedSubject(clickedSubjectId);

    const selectedAnswersForSubject =
      selectedAnswersMap1[clickedSubjectId] || [];
    setSelectedAnswers(selectedAnswersForSubject);

    try {
      const response = await fetch(
        `http://localhost:4009/getPaperData/${testCreationTableId}`
      );
      const subjectsData = await response.json();

      if (subjectsData && subjectsData.questions) {
        setData(subjectsData);
        setSelectedSubject(clickedSubjectId);
        setSections(subjectsData.sections);
        setCurrentQuestionIndex(0);

        if (clickedSubjectId !== selectedSubject) {
          navigate(`/getPaperData/${testCreationTableId}`);
        }
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };



  const handlePreviousClick = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
    
  };




 
  
  

  
  const clearResponse = async () => {
    
    try {
    
      
      const questionId = data.questions[currentQuestionIndex].question_id;
      console.log("Response cleared successfully");
// Clear response for radio buttons (MCQ)
    const updatedSelectedAnswersMap1 = { ...selectedAnswersMap1 };
    updatedSelectedAnswersMap1[questionId] = null;
    setSelectedAnswersMap1(updatedSelectedAnswersMap1);

    // Clear response for checkboxes (MSQ)
    const updatedSelectedAnswersMap2 = { ...selectedAnswersMap2 };
    updatedSelectedAnswersMap2[questionId] = [];
    setSelectedAnswersMap2(updatedSelectedAnswersMap2);


      // Send a request to your server to clear the user's response for the current question
      const response = await axios.delete(`http://localhost:4009/clearResponse/${questionId}`);
      
      if (response.status === 200) {
        console.log("Response cleared successfully");
        // Update any state or perform additional actions as needed
      } else {
        console.error("Failed to clear response:", response.data);
      }
    } catch (error) {
      console.error("Error clearing response:", error);
    }
  };
  
  

  const [clickCount, setClickCount] = useState(0);


const [answeredQuestionsMap, setAnsweredQuestionsMap] = useState({});
const correctAnswer =
  data && data.questions && data.questions[currentQuestionIndex]
    ? data.questions[currentQuestionIndex].correct_answer
    : null; // or provide a default value based on your logic


  
  const handleNextClick = async () => {
    console.log("Before state update", currentQuestionIndex);
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
      
        return prevIndex + 1;
      }
    });
    try {
      if (!data || !data.questions) {
        console.error('Data or questions are null or undefined');
        return;
      }

      const currentQuestion = data.questions[currentQuestionIndex];
      const selectedOption1 = selectedAnswersMap1[currentQuestion.question_id];
      const selectedOption2 = selectedAnswersMap2[currentQuestion.question_id];

      const optionIndexes1 = selectedOption1 !== undefined ? [selectedOption1] : [];
      const optionIndexes2 = selectedOption2 !== undefined ? selectedOption2 : [];

      const questionId = currentQuestion.question_id;

      if (answeredQuestionsMap[questionId]) {
        const updatedResponse = {
          optionIndexes1: optionIndexes1.map((index) =>
            String.fromCharCode("a".charCodeAt(0) + index)
          ),
          optionIndexes2: optionIndexes2.map((index) =>
            String.fromCharCode("a".charCodeAt(0) + index)
          ),
        };

        const updateResponse = await axios.put(`http://localhost:4009/updateResponse/${questionId}`, {
          updatedResponse,
        });

        console.log(updateResponse.data);
        console.log('Handle Next Click - Response Updated');
      } else {
        const responses = {
          [questionId]: {
            optionIndexes1: optionIndexes1.map((index) =>
              String.fromCharCode("a".charCodeAt(0) + index)
            ),
            optionIndexes2: optionIndexes2.map((index) =>
              String.fromCharCode("a".charCodeAt(0) + index)
            ),
          },
        };

        const saveResponse = await axios.post("http://localhost:4009/response", {
          responses,
        });

        console.log(saveResponse.data);
        console.log('Handle Next Click - New Response Saved');

        setAnsweredQuestionsMap((prevMap) => ({
          ...prevMap,
          [questionId]: true,
        }));
      }

      setClickCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error handling next click:", error);
    }

    if (currentQuestionIndex < data.length - 1) {
      // setCurrentQuestionIndex((prevActiveQuestion) => prevActiveQuestion + 1);
    } else {
      // setShowResult(true);
      calculateResult();
    }


  };

  useEffect(() => {
    const counts = calculateQuestionCounts();
    setAnsweredCount(counts.answered);
    setNotAnsweredCount(counts.notAnswered);
    setMarkedForReviewCount(counts.markedForReview);
    setAnsweredmarkedForReviewCount(counts.answeredmarkedForReviewCount);
    setVisitedCount(counts.VisitedCount);
  }, [questionStatus]);
  

  const handleSubmit = () => {
    window.alert("Your Test has been Submitted!! Click Ok to See Result.");
    setShowExamSumary(true);
    calculateResult();
    const counts = calculateQuestionCounts();
    setAnsweredCount(counts.answered);
    setNotAnsweredCount(counts.notAnswered);
    setMarkedForReviewCount(counts.markedForReview);
    setAnsweredmarkedForReviewCount(counts.answeredmarkedForReviewCount);
    setVisitedCount(counts.VisitedCount);
  
  };




  const [selectedAnswersMap1, setSelectedAnswersMap1] = useState({});
  const [selectedAnswersMap2, setSelectedAnswersMap2] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [questionTypes, setQuestionTypes] = useState([]);

  useEffect(() => {
    const fetchQuestionTypes = async () => {
      try {
        if (data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          const responseQuestionTypes = await fetch(
            `http://localhost:4009/questionType/${qID}`
          );
          const questionTypes = await responseQuestionTypes.json();
          setQuestionTypes(questionTypes);

          const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

          setCurrentQuestionType(currentQuestionType);
        }
      } catch (error) {
        console.error("Error fetching question types:", error);
      }
    };

    fetchQuestionTypes();
  }, [data, currentQuestionIndex]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);

        const leastSubjectId =
          subjectsData.length > 0
            ? Math.min(...subjectsData.map((subject) => subject.subjectId))
            : null;

        const defaultSubjectId = subjectId || leastSubjectId;

        const response = await fetch(
          `http://localhost:4009/getPaperData/${testCreationTableId}`
        );
        const result = await response.json();
        setData(result);

        const selectedAnswersForSubject =
          selectedAnswersMap1[defaultSubjectId] || [];
        setSelectedAnswers(selectedAnswersForSubject);

        const linkUrl = `/subjects/${testCreationTableId}/${
          subjectId || leastSubjectId
        }`;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap1]);

  const [timer, setTimer] = useState(0);
  const [timers, setTimers] = useState(Array(data));
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
  };

  useEffect(() => {
    setTimer(timers[currentQuestionIndex] || 0);
    let interval;
    interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentQuestionIndex, timers]);
  

  const onAnswerSelected1 = (optionIndex) => {
    const questionId = data.questions[currentQuestionIndex].question_id;
    const charcodeatopt = String.fromCharCode("a".charCodeAt(0) + optionIndex);
    const questionIndex = currentQuestionIndex + 1;
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Clicked Option Index: ${charcodeatopt}`);
    setSelectedAnswersMap1((prevMap) => ({
      ...prevMap,
      [questionId]: optionIndex,
    }));
    setSelectedAnswersMap2((prevMap) => ({
      ...prevMap,
      [questionId]: [],
    }));
  };

  const onAnswerSelected2 = (optionIndex) => {
    const questionId = data.questions[currentQuestionIndex].question_id;
    const charcodeatopt = String.fromCharCode("a".charCodeAt(0) + optionIndex);
    const questionIndex = currentQuestionIndex + 1;
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Clicked Option Index: ${charcodeatopt}`);
    setSelectedAnswersMap2((prevMap) => {
      const updatedSelection = [...(prevMap[questionId] || [])];
      const index = updatedSelection.indexOf(optionIndex);

      if (index !== -1) {
        updatedSelection.splice(index, 1);
      } else {
        updatedSelection.push(optionIndex);
      }

      return {
        ...prevMap,
        [questionId]: updatedSelection,
      };
    });
  };

  // const [showExamSumary, setShowExamSumary] = useState(false);
  const calculateResult = () => {
    // // Make sure answeredQuestions is defined before accessing its length
    // const totalAttempted = answeredQuestions ? answeredQuestions.length : 0;
    // // const totalCorrect = result.correctAnswers;
  };


  const handleYes = () => {
    navigate("/SubmitPage");
  };

  const markForReview =()=>{

  }

  return (
    <div>
      {!showExamSumary ?(
      

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

        <h3>
          Question Type:{" "}
          {questionTypes.map((type) => (
            <li key={type.quesionTypeId}>
              <p>{type.typeofQuestion}</p>
            </li>
          ))}
        </h3>
        <div className="right-header">
                <div className="marks">
                  Marks: <div className="plus-mark">+1</div>
                  <div className="minus-mark">-1</div>
                </div>
                <div>Timer: {formatTime(timer)}</div>
              </div>
      </div>
      <div>
      {data !== null && data.questions.length > 0 ? (
    <div className="qps_button_sections">
      <div className="question_paper_section">
        <div className="question_options_container">
          <div className="question">
            <h3>{currentQuestionIndex + 1}.</h3>
            <img
              src={`data:image/png;base64,${data.questions[currentQuestionIndex].question_img}`}
              alt="Question"
            />
          </div>

          {data.options
            .filter(
              (opt) =>
                opt.question_id ===
                data.questions[currentQuestionIndex].question_id
            )
            .map((option, optionIndex) => (
              <div className="option" key={option.option_id}>
                <li className="option_li" key={optionIndex}>
                  {currentQuestionType &&
                    currentQuestionType.typeofQuestion.toLowerCase() ===
                      "mcq(multiple choice question)" && (
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}-option`}
                        value={String.fromCharCode(
                          "A".charCodeAt(0) + optionIndex
                        )}
                        checked={
                          selectedAnswersMap1[
                            data.questions[currentQuestionIndex].question_id
                          ] === optionIndex
                        }
                        onChange={() => onAnswerSelected1(optionIndex)}
                      />
                    )}

                  {currentQuestionType &&
                    currentQuestionType.typeofQuestion.toLowerCase() ===
                      "msq(multiple selection question)" && (
                      <input
                        type="checkbox"
                        name={`question-${currentQuestionIndex}-optionIndex`}
                        value={String.fromCharCode(
                          "A".charCodeAt(0) + optionIndex
                        )}
                        checked={
                          selectedAnswersMap2[
                            data.questions[currentQuestionIndex].question_id
                          ] &&
                          selectedAnswersMap2[
                            data.questions[currentQuestionIndex].question_id
                          ].includes(optionIndex)
                        }
                        onChange={() => onAnswerSelected2(optionIndex)}
                      />
                    )}

                  {currentQuestionType &&
                    currentQuestionType.typeofQuestion.toLowerCase() ===
                      "nat(numerical answer type)" && (
                      <input
                        type="text"
                        name={`question-${currentQuestionIndex}`}
                        value={
                          selectedAnswersMap2[
                            data.questions[currentQuestionIndex].question_id
                          ] || ""
                        }
                        onChange={(e) => onAnswerSelected2(e.target.value)}
                      />
                    )}

                  {option.option_img && (
                    <div className="option_contents">
                      <p>
                        (
                        {String.fromCharCode(
                          "A".charCodeAt(0) + optionIndex
                        )}
                        )
                      </p>
                      <img
                        src={`data:image/png;base64,${option.option_img}`}
                        alt={`Option-${optionIndex}`}
                      />
                    </div>
                  )}
                </li>
              </div>
            ))}
        </div>

        <div>
        <button className="clear-btn" onClick={markForReview}>
                    Mark for Review & Next
                  </button>
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
            Save and Next <i className="fa-solid fa-angles-right"></i>
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
      </div>
      ):
      ( <div className="result">
      <h3 id="result_header">Exam Summary</h3>
      <div className="result_page_links">
       
      </div>
      <div className="result_contents">
 
        <p>
          Total Questions: <span>{ data.questions.length}</span>
        </p>
        <p>
           Answered Questions:<span> {data.AnsweredQuestions}</span>
        </p>
        <p>
        Not Answered Questions:<span> {data. NotAnsweredQuestions}</span>
        </p>
        <p>
        Marked for Review Questions:<span> {data. MarkedforReviewQuestions}</span>
        </p>
        <p>
        Answered & Marked for Review Questions:<span> {data.AnsweredAndMarkedforReviewQuestions}</span>
        </p>
       
      </div>
      <div>
        <h2>Are you sure you want to submit for final marking? <br />
        No changes will be allowed after submission.
        </h2>
        <button onClick={handleYes}>YES</button>
        <button>NO</button>
      </div>
    </div>)}
      


      
    </div>
  );
};

export default NewPattern;



















