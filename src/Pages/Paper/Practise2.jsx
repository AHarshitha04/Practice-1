// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import ButtonsFunctionality from "./ButtonsFunctionality";
// import "./Paper.css";
// import axios from "axios";

// const Practise2 = () => {
//   const [data, setData] = useState(null);
//   const {
//     subjectId,
//     testCreationTableId,
//     sectionId,
//     questionId,
//     quesionTypeId,
//   } = useParams();
//   const [Subjects, setSubjects] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [sections, setSections] = useState([]);
//   const [currentSectionName, setCurrentSectionName] = useState("");
//   const [currentSection, setCurrentSection] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [questionStatus, setQuestionStatus] = useState(
//     Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
//   );

//   // ----------------------------------BUTTON CODE-----------------------------------------------------

//   const [answeredCount, setAnsweredCount] = useState(0);
//   const [notAnsweredCount, setNotAnsweredCount] = useState(0);
//   const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
//     useState(0);
//   const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
//   const [VisitedCount, setVisitedCount] = useState(0);
//   const navigate = useNavigate();
//   const [activeQuestion, setActiveQuestion] = useState(0);

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
//     setActiveQuestion(questionNumber - 1);
//   };

//   //working code

//   // if (quesionTypeId == data.currentQuestionIndex) {
//   //   console.log(100);
//   // }

//   // if (quesionTypeId != data.currentQuestionIndex) {
//   //   console.log(200);
//   // }

//   const handleSubjectsClick = async (clickedSubjectId) => {
//     // setData(null);
//     setCurrentQuestionIndex(0); // Reset current question index
//     setSections([]); // Reset sections when switching subjects
//     setSelectedSubject(clickedSubjectId);
//     console.log(clickedSubjectId);
//     // Check if there are selected answers for the current subject
//     const selectedAnswersForSubject =
//       selectedAnswersMap[clickedSubjectId] || [];
//     setSelectedAnswers(selectedAnswersForSubject);
//     setSelectedSubject(clickedSubjectId);
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//         // setSections(sections);
//         // console.log(sections);
//         setSelectedSubject(clickedSubjectId);
//         setSections(subjectsData.sections); // Assuming sections are present in subjectsData
//         // console.log(subjectsData.sections);
//         setCurrentQuestionIndex(0); // Reset current question index

//         // Check if the selected subject is the same as the current subject
//         if (clickedSubjectId !== selectedSubject) {
//           // Redirect only if the subjects are different
//           navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
//         }
//       } else {
//         console.error("Invalid data format:", subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [setSubjectId] = useState(/* initial value */);

//   const clearResponse = () => {
//     // Retrieve questionId after it's declared
//     const questionId = data.questions[currentQuestionIndex].question_id;
//     // Create a copy of the selected answers map
//     const updatedSelectedAnswersMap = { ...selectedAnswersMap };
//     // Set the answer for the current question to null
//     updatedSelectedAnswersMap[questionId] = null;
//     // Update the state with the new selected answers map
//     setSelectedAnswersMap(updatedSelectedAnswersMap);
//   };

//   const handlePreviousClick = () => {
//     // Update the current question index to move to the previous question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       if (prevIndex < data.questions.length - 1) {
//         // If there are more questions in the current section, move to the next question
//         return prevIndex + 1;
//       }
//     });
//   };

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

//   //   const fetchSections = async () => {
//   //     try {
//   //       console.log("Before fetch. testCreationTableId:", testCreationTableId, "subjectId:", data);

//   //       const response = await fetch(
//   //         `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`
//   //       );

//   //       console.log("After fetch. Response status:", response.status);

//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! Status: ${response.status}`);
//   //       }

//   //       const sectionsData = await response.json();
//   //       console.log("Sections data:",data);

//   //       setSections(sectionsData);
//   //     } catch (error) {
//   //       console.error("Error fetching sections:", error);
//   //     }
//   //   };

//   //   fetchSections();
//   // }, [testCreationTableId, subjectId]);

//   //   const [currentSection, setCurrentSection] = useState(null);
//   //   // const [subjectId, setSubjectId] = useState(initialSubjectId);
//   //   useEffect(()=> {
//   //     const fetchSections = async () => {
//   //       try {
//   //         console.log("Before fetch. testCreationTableId:", testCreationTableId, "subjectId:", subjectId);

//   //         // Check if subjectId is defined before making the request
//   //         if (testCreationTableId && subjectId) {
//   //           const response = await fetch(
//   //             `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`
//   //           );
//   //           const sectionsData = await response.json();
//   //           console.log("Sections data:", sectionsData);

//   //           setSections(sectionsData)

//   //         } else {
//   //           console.error("subjectId is undefined. Unable to make the request.");
//   //         }
//   //       } catch (error) {
//   //         console.error("Error fetching sections:", error);
//   //       }
//   //     };

//   // const fetchSections = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`
//   //     );

//   // const sectionsData = await response.json();
//   // console.log("Sections data:", sectionsData);

//   // setSections(sectionsData);

//   //     // Set the current section based on the question's sectionId
//   //     const currentSection = sectionsData.find(
//   //       (section) => section.sectionId === data.questions[currentQuestionIndex].sectionId
//   //     );
//   //     setCurrentSection(currentSection);
//   //   } catch (error) {
//   //     console.error("Error fetching sections:", error);
//   //   }
//   // };
//   //     fetchSections();
//   //   },[testCreationTableId, subjectId])

//   // const renderSections = () => {
//   //   if (sections.length === 0) {
//   //     return <p>No sections available.</p>;
//   //   }

//   // --------------------------------onclick functionalities end--------------------------

//   // Function to display questions for the current section
//   // const displayQuestions = () => {
//   //   const currentSection = sortedSections[currentSectionIndex];

//   //   if (currentSection) {
//   //     const totalQuestionsInSection = currentSection.noOfQuestions;

//   //     if (currentQuestionCount < totalQuestionsInSection) {
//   //       // Set the initial section name if not set
//   //       if (!currentSectionName) {
//   //         setCurrentSectionName(currentSection.sectionName);
//   //         console.log("Current Section Name:", currentSection.sectionName);
//   //         console.log("Current Section ID:", currentSection.sectionId);
//   //         console.log(
//   //           "Total Questions in Current Section:",
//   //           totalQuestionsInSection
//   //         );
//   //       }

//   //       setCurrentQuestionCount((prevCount) => prevCount + 1);
//   //     } else {
//   //       // Move to the next section if available
//   //       if (currentSectionIndex < sortedSections.length - 1) {
//   //         const nextSectionIndex = currentSectionIndex + 1;
//   //         const nextSection = sortedSections[nextSectionIndex];

//   //         console.log("Next Section Index:", nextSectionIndex);
//   //         console.log("Next Section Name:", nextSection?.sectionName);
//   //         console.log("Next Section ID:", nextSection?.sectionId);

//   //         // setCurrentSectionIndex(nextSectionIndex);
//   //         // setCurrentSectionName(nextSection?.sectionName || "");

//   //         // Use setTimeout to ensure that setCurrentSectionIndex is called after the state has been updated
//   //         setTimeout(() => {
//   //           setCurrentQuestionIndex(0);
//   //         }, 0);
//   //       } else {
//   //         console.log("No more sections");
//   //       }

//   //       setCurrentQuestionCount(1); // Set the current question count to 1 for the next section
//   //     }
//   //   } else {
//   //     // Handle when the current section is not found (e.g., when there are no sections)
//   //     console.error("Invalid section or no sections found");
//   //   }
//   // };

//   // const [sortedSections] = useState("");
//   //working code
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     let sortedSections = [];
//   //     try {
//   //       // Fetch all subjects
//   //       const responseSubjects = await fetch(
//   //         `http://localhost:4009/subjects/${testCreationTableId}`
//   //       );
//   //       const subjectsData = await responseSubjects.json();
//   //       setSubjects(subjectsData);
//   //       console.log(subjectsData);
//   //       // setSections(sectionsData);

//   //       // Find the least subjectId
//   //       const leastSubjectId =
//   //         subjectsData.length > 0
//   //           ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//   //           : null;

//   //       // If subjectId is not provided, set it to the least subjectId
//   //       const defaultSubjectId = subjectId || leastSubjectId;

//   //       // Fetch data for the default subject
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //       );
//   //       const result = await response.json();
//   //       setData(result);

//   //       // Initialize selected answers based on the saved answers for the current subject
//   //       const selectedAnswersForSubject =
//   //         selectedAnswersMap[defaultSubjectId] || [];
//   //       setSelectedAnswers(selectedAnswersForSubject);

//   //       // Construct the link with the least subjectId
//   //       const linkUrl = `/subjects/${testCreationTableId}/${
//   //         subjectId || leastSubjectId
//   //       }`;
//   //       // Use linkUrl as needed in your component

//   //       //  ---------------------------------------------------------

//   //       const responseSections = await fetch(
//   //         // `http://localhost:4009/fetchSections/${testCreationTableId}/${defaultSubjectId}`
//   //         `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`

//   //       );
//   //       const sectionsData = await responseSections.json();
//   //       console.log("sectionsData:", sectionsData);

//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [testCreationTableId, subjectId]);

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //         try {
//   //             // Fetch all subjects
//   //             const responseSubjects = await fetch(
//   //                 `http://localhost:4009/subjects/${testCreationTableId}`
//   //             );
//   //             const subjectsData = await responseSubjects.json();
//   //             setSubjects(subjectsData);

//   //             // Find the least subjectId
//   //             const leastSubjectId =
//   //                 subjectsData.length > 0
//   //                     ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//   //                     : null;

//   //             // If subjectId is not provided, set it to the least subjectId
//   //             const defaultSubjectId = subjectId || leastSubjectId;

//   //             // Fetch data for the default subject
//   //             const response = await fetch(
//   //                 `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //             );
//   //             const result = await response.json();
//   //             setData(result);

//   //             // Initialize selected answers based on the saved answers for the current subject
//   //             const selectedAnswersForSubject =
//   //                 selectedAnswersMap[defaultSubjectId] || [];
//   //             setSelectedAnswers(selectedAnswersForSubject);

//   //             // Construct the link with the least subjectId
//   //             const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
//   //             // Use linkUrl as needed in your component

//   //             // Fetch sections for the specified testCreationTableId and subjectId
//   //             // const responseSections = await fetch(
//   //             //   `http://localhost:4009/fetchSections/${testCreationTableId}/${defaultSubjectId}`
//   //             // );
//   //             // const sectionsData = await responseSections.json();
//   //             // // setSections(sectionsData);

//   //             // ------------------------for sections changing-------------

//   //              const qID = data.questions[currentQuestionIndex].question_id;

//   //         // Fetch sections for the specified questionId
//   //         const responseSections = await fetch(
//   //           // {data.questions[currentQuestionIndex].question_id}
//   //           // `http://localhost:4009/sections/${data.questions[currentQuestionIndex].question_id}`

//   //           `http://localhost:4009/sections/${qID}`
//   //         );
//   //         const sections = await responseSections.json();
//   //         setSections(sections);

//   //         // Find the section that corresponds to the current questionId
//   //         const sectionForQuestion = sections.find(
//   //           (section) =>
//   //             section.sectionId === data.questions[currentQuestionIndex].sectionId
//   //         );

//   //         // Set the sectionName based on the found section
//   //         if (sectionForQuestion) {
//   //           setSectionName(sectionForQuestion.sectionName);
//   //         } else {
//   //           setSectionName("Section not found");
//   //         }

//   //         // console.log(sectionForQuestion);
//   //             // ------------------------for sections changing-------------

//   //         } catch (error) {
//   //             console.error("Error fetching data:", error);
//   //         }
//   //     };

//   //     fetchData();
//   // }, [testCreationTableId, subjectId,sectionId,questionId,data]);

//   const [sectionName, setSectionName] = useState("");

//   const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const [questionType, setQuestionType] = useState([]);

//   // Fetch question types when the current question index changes
//   //   useEffect(() => {
//   //     const fetchQuestionTypes = async () => {
//   //       try {
//   //         if (data && data.questions) {
//   //           const qID = data.questions[currentQuestionIndex].question_id;

//   //           // Fetch question types for the specified questionId
//   //           const responseQuestionTypes = await fetch(
//   //             `http://localhost:4009/questionType/${qID}`
//   //           );
//   //           const questionTypes = await responseQuestionTypes.json();
//   //           setQuestionType(questionTypes);

//   //         }
//   // if (questionId.typeofQuestion == "MSQ(Multiple Selection Question)") {
//   //   console.log("helo msq");
//   // } else if (questionId.typeofQuestion == "MCQ(Multiple Choice Question)") {
//   //   console.log("helo mcq");
//   // }

//   //       } catch (error) {
//   //         console.error("Error fetching question types:", error);
//   //       }
//   //     };

//   //     fetchQuestionTypes();
//   //   }, [currentQuestionIndex, data]);

//   useEffect(() => {
//     const fetchQuestionTypes = async () => {
//       try {
//         if (data && data.questions) {
//           const qID = data.questions[currentQuestionIndex].question_id;

//           // Fetch question types for the specified questionId
//           const responseQuestionTypes = await fetch(
//             `http://localhost:4009/questionType/${qID}`
//           );
//           const questionTypes = await responseQuestionTypes.json();
//           setQuestionType(questionTypes);

//           // Check if the current question is of type "MCQ"
//           const currentQuestionType = questionTypes.find(
//             (q) => q.question_id === qID
//           );

//           console.log(currentQuestionType);
//           console.log("helllo");
//           if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion ===
//               "MSQ(Multiple Selection Question)"
//           ) {
//             console.log("Hello MSQ");

//             // Render your MCQ logic here
//           } else if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion ===
//               "MCQ(Multiple Choice Question)"
//           ) {
//             console.log("Hello MCQ");
//           } else if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion ===
//               "NSQ(Numerical Selection Question)"
//           ) {
//             console.log("Hello NSQ");
//           } else if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion === "T/F(True or False)"
//           ) {
//             console.log("Hello T/F");
//           }
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
//         // Fetch all subjects
//         const responseSubjects = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await responseSubjects.json();
//         setSubjects(subjectsData);

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

//         // Initialize selected answers based on the saved answers for the current subject
//         const selectedAnswersForSubject =
//           selectedAnswersMap[defaultSubjectId] || [];
//         setSelectedAnswers(selectedAnswersForSubject);

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
//   }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

//   // Fetch sections when the current question index changes
//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         if (selectedSubject && data && data.questions) {
//           const qID = data.questions[currentQuestionIndex].question_id;

//           // Fetch sections for the specified questionId
//           const responseSections = await fetch(
//             `http://localhost:4009/sections/${qID}`
//           );
//           const sections = await responseSections.json();
//           setSections(sections);

//           // Find the section that corresponds to the current questionId
//           const sectionForQuestion = sections.find(
//             (section) =>
//               section.sectionId ===
//               data.questions[currentQuestionIndex].sectionId
//           );

//           // Set the sectionName based on the found section
//           if (sectionForQuestion) {
//             setSectionName(sectionForQuestion.sectionName);
//           } else {
//             setSectionName("Section not found");
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching sections:", error);
//       }
//     };

//     fetchSections();
//   }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

//   //working code
//   //   const onAnswerSelected = (optionIndex) => {
//   //     console.log("selectedSubject:", selectedSubject);
//   //     console.log("currentQuestionIndex:", currentQuestionIndex);

//   //     const questionId = data.questions[currentQuestionIndex].question_id;

//   //     setSelectedAnswersMap((prevMap) => ({
//   //       ...prevMap,
//   //       [questionId]: optionIndex,
//   //     }));

//   //     const updatedSelectedAnswers = {
//   //       ...selectedAnswersMap,
//   //       [data.questions[currentQuestionIndex].question_id]: optionIndex,
//   //     };
//   //   };

//   const onAnswerSelected = (optionIndex) => {
//     const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
//     const subjectIndex =
//       Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
//       1; // Adding 1 to make it human-readable (1-based index)
//     // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

//     console.log(`Clicked Option Index: ${optionIndex}`);
//     console.log(`Question Index: ${questionIndex}`);
//     console.log(`Subject Index: ${subjectIndex}`);
//     // console.log(`section Index: ${sectionIndex}`);

//     const questionId = data.questions[currentQuestionIndex].question_id;

//     setSelectedAnswersMap((prevMap) => ({
//       ...prevMap,
//       [questionId]: optionIndex,
//     }));

//     const updatedSelectedAnswers = {
//       ...selectedAnswersMap,
//       [data.questions[currentQuestionIndex].question_id]: optionIndex,
//     };
//   };

//   const [questionTypes, setquestionTypes] = useState([]);

//   return (
//     <div>
//       {/* {typeofQuestion === "MCQ(Multiple Choice Question)" &&(
//         (
//           <>

//           <p>hello mcq</p>
//           </>
//         )
//       )} */}
//       {/* <>
//         {questionType.map((type) => {
//           switch (type.typeofQuestion) {
//             case "MCQ(Multiple Choice Question)":
//               return <MCQ key={type.quesionTypeId} />;
//             case "MSQ(Multiple Selection Question)":
//               return <MSQ key={type.quesionTypeId} />;
//             case "NSQ(Numeric selection Question)":
//               return <NSQ key={type.quesionTypeId} />;
//             case "True/False Questions":
//               return <TF key={type.quesionTypeId} />;
//             default:
//               return null;
//           }
//         })}
//       </> */}

//       <div className="subjects">
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
//       </div>
//       {data !== null && data.questions.length > 0 ? (
//         <div className="qps_button_sections">
//           <div className="question_paper_section">
//             <div className="second-header">
//               <div className="single-select-question">
//                 <li>
//                   {sections &&
//                     sections.map((section) => (
//                       <li key={section.sectionId}>
//                         <p>{section.sectionName}</p>
//                       </li>
//                     ))}

//                   {questionType.map((type) => (
//                     <li key={type.quesionTypeId}>
//                       <p>{type.typeofQuestion}</p>
//                     </li>
//                   ))}

//                   {/* <p>Current Section: {currentSectionName}</p> */}
//                 </li>
//               </div>
//               <div className="right-header">
//                 <div className="marks">
//                   Marks: <div className="plus-mark">+1</div>
//                   <div className="minus-mark">-1</div>
//                 </div>
//                 <div>Timer: {formatTime(timer)}</div>
//               </div>
//             </div>
//             <>
//         {questionType.map((type) => {
//           switch (type.typeofQuestion) {
//             case "MCQ(Multiple Choice Question)":
//               return <MCQ key={type.quesionTypeId} />;
//             case "MSQ(Multiple Selection Question)":
//               return <MSQ key={type.quesionTypeId} />;
//             case "NSQ(Numeric selection Question)":
//               return <NSQ key={type.quesionTypeId} />;
//             case "True/False Questions":
//               return <TF key={type.quesionTypeId} />;
//             default:
//               return null;
//           }
//         })}
//       </>

//             <div>
//               <button className="clear-btn" onClick={clearResponse}>
//                 Clear Response
//               </button>
//               <button
//                 className="previous-btn"
//                 onClick={handlePreviousClick}
//                 disabled={currentQuestionIndex === 0}
//               >
//                 <i className="fa-solid fa-angles-left"></i> Previous
//               </button>
//               <button
//                 className="save-btn"
//                 onClick={handleNextClick}
//                 // disabled={
//                 //   currentQuestionIndex ===
//                 //   sortedSections[currentSectionIndex]?.noOfQuestions - 1
//                 // }
//               >
//                 Next <i className="fa-solid fa-angles-right"></i>
//               </button>
//             </div>
//           </div>

//           <div className="rightsidebar">
//             <ButtonsFunctionality
//               onQuestionSelect={handleQuestionSelect}
//               questionStatus={questionStatus}
//               setQuestionStatus={setQuestionStatus}
//               answeredCount={answeredCount}
//               notAnsweredCount={notAnsweredCount}
//               answeredmarkedForReviewCount={answeredmarkedForReviewCount}
//               markedForReviewCount={markedForReviewCount}
//               VisitedCount={VisitedCount}
//               selectedSubject={selectedSubject}
//               data={data}
//               //   onSectionButtonClick={handleSectionButtonClick}
//               // currentSectionIndex={currentSectionIndex}
//             />
//             <button onClick={handleSubmit} id="resume_btn">
//               Submit
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>

//     // PRATICE CODE
//   );
// };

// export default Practise2;

// //MCQ

// export const MCQ = () => {
//   const [data, setData] = useState(null);
//   const {
//     subjectId,
//     testCreationTableId,
//     sectionId,
//     questionId,
//     quesionTypeId,
//   } = useParams();
//   const [Subjects, setSubjects] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [sections, setSections] = useState([]);
//   const [currentSectionName, setCurrentSectionName] = useState("");
//   const [currentSection, setCurrentSection] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [questionStatus, setQuestionStatus] = useState(
//     Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
//   );

//   // ----------------------------------BUTTON CODE-----------------------------------------------------

//   const [answeredCount, setAnsweredCount] = useState(0);
//   const [notAnsweredCount, setNotAnsweredCount] = useState(0);
//   const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
//     useState(0);
//   const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
//   const [VisitedCount, setVisitedCount] = useState(0);
//   const navigate = useNavigate();
//   const [activeQuestion, setActiveQuestion] = useState(0);

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
//     setActiveQuestion(questionNumber - 1);
//   };

//   //working code

//   // if (quesionTypeId == data.currentQuestionIndex) {
//   //   console.log(100);
//   // }

//   // if (quesionTypeId != data.currentQuestionIndex) {
//   //   console.log(200);
//   // }

//   const handleSubjectsClick = async (clickedSubjectId) => {
//     // setData(null);
//     setCurrentQuestionIndex(0); // Reset current question index
//     setSections([]); // Reset sections when switching subjects
//     setSelectedSubject(clickedSubjectId);
//     console.log(clickedSubjectId);
//     // Check if there are selected answers for the current subject
//     const selectedAnswersForSubject =
//       selectedAnswersMap[clickedSubjectId] || [];
//     setSelectedAnswers(selectedAnswersForSubject);
//     setSelectedSubject(clickedSubjectId);
//     try {
//       const response = await fetch(
//         `http://localhost:4009/getPaperData/${testCreationTableId}/${clickedSubjectId}`
//       );
//       const subjectsData = await response.json();

//       if (subjectsData && subjectsData.questions) {
//         setData(subjectsData);
//         // setSections(sections);
//         // console.log(sections);
//         setSelectedSubject(clickedSubjectId);
//         setSections(subjectsData.sections); // Assuming sections are present in subjectsData
//         // console.log(subjectsData.sections);
//         setCurrentQuestionIndex(0); // Reset current question index

//         // Check if the selected subject is the same as the current subject
//         if (clickedSubjectId !== selectedSubject) {
//           // Redirect only if the subjects are different
//           navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
//         }
//       } else {
//         console.error("Invalid data format:", subjectsData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [setSubjectId] = useState(/* initial value */);

//   const clearResponse = () => {
//     // Retrieve questionId after it's declared
//     const questionId = data.questions[currentQuestionIndex].question_id;
//     // Create a copy of the selected answers map
//     const updatedSelectedAnswersMap = { ...selectedAnswersMap };
//     // Set the answer for the current question to null
//     updatedSelectedAnswersMap[questionId] = null;
//     // Update the state with the new selected answers map
//     setSelectedAnswersMap(updatedSelectedAnswersMap);
//   };

//   const handlePreviousClick = () => {
//     // Update the current question index to move to the previous question
//     setCurrentQuestionIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//   };

//   const handleNextClick = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       if (prevIndex < data.questions.length - 1) {
//         // If there are more questions in the current section, move to the next question
//         return prevIndex + 1;
//       }
//     });
//   };

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

//   //   const fetchSections = async () => {
//   //     try {
//   //       console.log("Before fetch. testCreationTableId:", testCreationTableId, "subjectId:", data);

//   //       const response = await fetch(
//   //         `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`
//   //       );

//   //       console.log("After fetch. Response status:", response.status);

//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! Status: ${response.status}`);
//   //       }

//   //       const sectionsData = await response.json();
//   //       console.log("Sections data:",data);

//   //       setSections(sectionsData);
//   //     } catch (error) {
//   //       console.error("Error fetching sections:", error);
//   //     }
//   //   };

//   //   fetchSections();
//   // }, [testCreationTableId, subjectId]);

//   //   const [currentSection, setCurrentSection] = useState(null);
//   //   // const [subjectId, setSubjectId] = useState(initialSubjectId);
//   //   useEffect(()=> {
//   //     const fetchSections = async () => {
//   //       try {
//   //         console.log("Before fetch. testCreationTableId:", testCreationTableId, "subjectId:", subjectId);

//   //         // Check if subjectId is defined before making the request
//   //         if (testCreationTableId && subjectId) {
//   //           const response = await fetch(
//   //             `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`
//   //           );
//   //           const sectionsData = await response.json();
//   //           console.log("Sections data:", sectionsData);

//   //           setSections(sectionsData)

//   //         } else {
//   //           console.error("subjectId is undefined. Unable to make the request.");
//   //         }
//   //       } catch (error) {
//   //         console.error("Error fetching sections:", error);
//   //       }
//   //     };

//   // const fetchSections = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`
//   //     );

//   // const sectionsData = await response.json();
//   // console.log("Sections data:", sectionsData);

//   // setSections(sectionsData);

//   //     // Set the current section based on the question's sectionId
//   //     const currentSection = sectionsData.find(
//   //       (section) => section.sectionId === data.questions[currentQuestionIndex].sectionId
//   //     );
//   //     setCurrentSection(currentSection);
//   //   } catch (error) {
//   //     console.error("Error fetching sections:", error);
//   //   }
//   // };
//   //     fetchSections();
//   //   },[testCreationTableId, subjectId])

//   // const renderSections = () => {
//   //   if (sections.length === 0) {
//   //     return <p>No sections available.</p>;
//   //   }

//   // --------------------------------onclick functionalities end--------------------------

//   // Function to display questions for the current section
//   // const displayQuestions = () => {
//   //   const currentSection = sortedSections[currentSectionIndex];

//   //   if (currentSection) {
//   //     const totalQuestionsInSection = currentSection.noOfQuestions;

//   //     if (currentQuestionCount < totalQuestionsInSection) {
//   //       // Set the initial section name if not set
//   //       if (!currentSectionName) {
//   //         setCurrentSectionName(currentSection.sectionName);
//   //         console.log("Current Section Name:", currentSection.sectionName);
//   //         console.log("Current Section ID:", currentSection.sectionId);
//   //         console.log(
//   //           "Total Questions in Current Section:",
//   //           totalQuestionsInSection
//   //         );
//   //       }

//   //       setCurrentQuestionCount((prevCount) => prevCount + 1);
//   //     } else {
//   //       // Move to the next section if available
//   //       if (currentSectionIndex < sortedSections.length - 1) {
//   //         const nextSectionIndex = currentSectionIndex + 1;
//   //         const nextSection = sortedSections[nextSectionIndex];

//   //         console.log("Next Section Index:", nextSectionIndex);
//   //         console.log("Next Section Name:", nextSection?.sectionName);
//   //         console.log("Next Section ID:", nextSection?.sectionId);

//   //         // setCurrentSectionIndex(nextSectionIndex);
//   //         // setCurrentSectionName(nextSection?.sectionName || "");

//   //         // Use setTimeout to ensure that setCurrentSectionIndex is called after the state has been updated
//   //         setTimeout(() => {
//   //           setCurrentQuestionIndex(0);
//   //         }, 0);
//   //       } else {
//   //         console.log("No more sections");
//   //       }

//   //       setCurrentQuestionCount(1); // Set the current question count to 1 for the next section
//   //     }
//   //   } else {
//   //     // Handle when the current section is not found (e.g., when there are no sections)
//   //     console.error("Invalid section or no sections found");
//   //   }
//   // };

//   // const [sortedSections] = useState("");
//   //working code
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     let sortedSections = [];
//   //     try {
//   //       // Fetch all subjects
//   //       const responseSubjects = await fetch(
//   //         `http://localhost:4009/subjects/${testCreationTableId}`
//   //       );
//   //       const subjectsData = await responseSubjects.json();
//   //       setSubjects(subjectsData);
//   //       console.log(subjectsData);
//   //       // setSections(sectionsData);

//   //       // Find the least subjectId
//   //       const leastSubjectId =
//   //         subjectsData.length > 0
//   //           ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//   //           : null;

//   //       // If subjectId is not provided, set it to the least subjectId
//   //       const defaultSubjectId = subjectId || leastSubjectId;

//   //       // Fetch data for the default subject
//   //       const response = await fetch(
//   //         `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //       );
//   //       const result = await response.json();
//   //       setData(result);

//   //       // Initialize selected answers based on the saved answers for the current subject
//   //       const selectedAnswersForSubject =
//   //         selectedAnswersMap[defaultSubjectId] || [];
//   //       setSelectedAnswers(selectedAnswersForSubject);

//   //       // Construct the link with the least subjectId
//   //       const linkUrl = `/subjects/${testCreationTableId}/${
//   //         subjectId || leastSubjectId
//   //       }`;
//   //       // Use linkUrl as needed in your component

//   //       //  ---------------------------------------------------------

//   //       const responseSections = await fetch(
//   //         // `http://localhost:4009/fetchSections/${testCreationTableId}/${defaultSubjectId}`
//   //         `http://localhost:4009/fetchSections/${testCreationTableId}/${subjectId}`

//   //       );
//   //       const sectionsData = await responseSections.json();
//   //       console.log("sectionsData:", sectionsData);

//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [testCreationTableId, subjectId]);

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //         try {
//   //             // Fetch all subjects
//   //             const responseSubjects = await fetch(
//   //                 `http://localhost:4009/subjects/${testCreationTableId}`
//   //             );
//   //             const subjectsData = await responseSubjects.json();
//   //             setSubjects(subjectsData);

//   //             // Find the least subjectId
//   //             const leastSubjectId =
//   //                 subjectsData.length > 0
//   //                     ? Math.min(...subjectsData.map((subject) => subject.subjectId))
//   //                     : null;

//   //             // If subjectId is not provided, set it to the least subjectId
//   //             const defaultSubjectId = subjectId || leastSubjectId;

//   //             // Fetch data for the default subject
//   //             const response = await fetch(
//   //                 `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
//   //             );
//   //             const result = await response.json();
//   //             setData(result);

//   //             // Initialize selected answers based on the saved answers for the current subject
//   //             const selectedAnswersForSubject =
//   //                 selectedAnswersMap[defaultSubjectId] || [];
//   //             setSelectedAnswers(selectedAnswersForSubject);

//   //             // Construct the link with the least subjectId
//   //             const linkUrl = `/subjects/${testCreationTableId}/${subjectId || leastSubjectId}`;
//   //             // Use linkUrl as needed in your component

//   //             // Fetch sections for the specified testCreationTableId and subjectId
//   //             // const responseSections = await fetch(
//   //             //   `http://localhost:4009/fetchSections/${testCreationTableId}/${defaultSubjectId}`
//   //             // );
//   //             // const sectionsData = await responseSections.json();
//   //             // // setSections(sectionsData);

//   //             // ------------------------for sections changing-------------

//   //              const qID = data.questions[currentQuestionIndex].question_id;

//   //         // Fetch sections for the specified questionId
//   //         const responseSections = await fetch(
//   //           // {data.questions[currentQuestionIndex].question_id}
//   //           // `http://localhost:4009/sections/${data.questions[currentQuestionIndex].question_id}`

//   //           `http://localhost:4009/sections/${qID}`
//   //         );
//   //         const sections = await responseSections.json();
//   //         setSections(sections);

//   //         // Find the section that corresponds to the current questionId
//   //         const sectionForQuestion = sections.find(
//   //           (section) =>
//   //             section.sectionId === data.questions[currentQuestionIndex].sectionId
//   //         );

//   //         // Set the sectionName based on the found section
//   //         if (sectionForQuestion) {
//   //           setSectionName(sectionForQuestion.sectionName);
//   //         } else {
//   //           setSectionName("Section not found");
//   //         }

//   //         // console.log(sectionForQuestion);
//   //             // ------------------------for sections changing-------------

//   //         } catch (error) {
//   //             console.error("Error fetching data:", error);
//   //         }
//   //     };

//   //     fetchData();
//   // }, [testCreationTableId, subjectId,sectionId,questionId,data]);

//   const [sectionName, setSectionName] = useState("");

//   const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const [questionType, setQuestionType] = useState([]);

//   // Fetch question types when the current question index changes
//   //   useEffect(() => {
//   //     const fetchQuestionTypes = async () => {
//   //       try {
//   //         if (data && data.questions) {
//   //           const qID = data.questions[currentQuestionIndex].question_id;

//   //           // Fetch question types for the specified questionId
//   //           const responseQuestionTypes = await fetch(
//   //             `http://localhost:4009/questionType/${qID}`
//   //           );
//   //           const questionTypes = await responseQuestionTypes.json();
//   //           setQuestionType(questionTypes);

//   //         }
//   // if (questionId.typeofQuestion == "MSQ(Multiple Selection Question)") {
//   //   console.log("helo msq");
//   // } else if (questionId.typeofQuestion == "MCQ(Multiple Choice Question)") {
//   //   console.log("helo mcq");
//   // }

//   //       } catch (error) {
//   //         console.error("Error fetching question types:", error);
//   //       }
//   //     };

//   //     fetchQuestionTypes();
//   //   }, [currentQuestionIndex, data]);

//   useEffect(() => {
//     const fetchQuestionTypes = async () => {
//       try {
//         if (data && data.questions) {
//           const qID = data.questions[currentQuestionIndex].question_id;

//           // Fetch question types for the specified questionId
//           const responseQuestionTypes = await fetch(
//             `http://localhost:4009/questionType/${qID}`
//           );
//           const questionTypes = await responseQuestionTypes.json();
//           setQuestionType(questionTypes);

//           // Check if the current question is of type "MCQ"
//           const currentQuestionType = questionTypes.find(
//             (q) => q.question_id === qID
//           );

//           console.log(currentQuestionType);
//           console.log("helllo");
//           if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion ===
//               "MSQ(Multiple Selection Question)"
//           ) {
//             console.log("Hello MSQ");

//             // Render your MCQ logic here
//           } else if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion ===
//               "MCQ(Multiple Choice Question)"
//           ) {
//             console.log("Hello MCQ");
//           } else if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion ===
//               "NSQ(Numerical Selection Question)"
//           ) {
//             console.log("Hello NSQ");
//           } else if (
//             currentQuestionType &&
//             currentQuestionType.typeofQuestion === "T/F(True or False)"
//           ) {
//             console.log("Hello T/F");
//           }
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
//         // Fetch all subjects
//         const responseSubjects = await fetch(
//           `http://localhost:4009/subjects/${testCreationTableId}`
//         );
//         const subjectsData = await responseSubjects.json();
//         setSubjects(subjectsData);

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

//         // Initialize selected answers based on the saved answers for the current subject
//         const selectedAnswersForSubject =
//           selectedAnswersMap[defaultSubjectId] || [];
//         setSelectedAnswers(selectedAnswersForSubject);

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
//   }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

//   // Fetch sections when the current question index changes
//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         if (selectedSubject && data && data.questions) {
//           const qID = data.questions[currentQuestionIndex].question_id;

//           // Fetch sections for the specified questionId
//           const responseSections = await fetch(
//             `http://localhost:4009/sections/${qID}`
//           );
//           const sections = await responseSections.json();
//           setSections(sections);

//           // Find the section that corresponds to the current questionId
//           const sectionForQuestion = sections.find(
//             (section) =>
//               section.sectionId ===
//               data.questions[currentQuestionIndex].sectionId
//           );

//           // Set the sectionName based on the found section
//           if (sectionForQuestion) {
//             setSectionName(sectionForQuestion.sectionName);
//           } else {
//             setSectionName("Section not found");
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching sections:", error);
//       }
//     };

//     fetchSections();
//   }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

//   //working code
//   //   const onAnswerSelected = (optionIndex) => {
//   //     console.log("selectedSubject:", selectedSubject);
//   //     console.log("currentQuestionIndex:", currentQuestionIndex);

//   //     const questionId = data.questions[currentQuestionIndex].question_id;

//   //     setSelectedAnswersMap((prevMap) => ({
//   //       ...prevMap,
//   //       [questionId]: optionIndex,
//   //     }));

//   //     const updatedSelectedAnswers = {
//   //       ...selectedAnswersMap,
//   //       [data.questions[currentQuestionIndex].question_id]: optionIndex,
//   //     };
//   //   };

//   const onAnswerSelected = (optionIndex) => {
//     const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
//     const subjectIndex =
//       Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
//       1; // Adding 1 to make it human-readable (1-based index)
//     // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

//     console.log(`Clicked Option Index: ${optionIndex}`);
//     console.log(`Question Index: ${questionIndex}`);
//     console.log(`Subject Index: ${subjectIndex}`);
//     // console.log(`section Index: ${sectionIndex}`);

//     const questionId = data.questions[currentQuestionIndex].question_id;

//     setSelectedAnswersMap((prevMap) => ({
//       ...prevMap,
//       [questionId]: optionIndex,
//     }));

//     const updatedSelectedAnswers = {
//       ...selectedAnswersMap,
//       [data.questions[currentQuestionIndex].question_id]: optionIndex,
//     };
//   };

//   const [questionTypes, setquestionTypes] = useState([]);

//   return (
//     <div>
//       <p>MCQ (Multiple Choice Question)</p>
//       {data &&
//         data.questions.map((question) => (
//           <div className="qps_button_sections" key={question.question_id}>
//             <div className="question_paper_section">
//               <div className="question_options_container">
//                 <div className="question">
//                   <h3>{currentQuestionIndex + 1}.</h3>
//                   <img
//                     src={`data:image/png;base64,${question.question_img}`}
//                     alt="Question"
//                   />
//                 </div>

//                 <ul className="options">
//                   {data.options
//                     .filter((opt) => opt.question_id === question.question_id)
//                     .map((option, optionIndex) => (
//                       <li key={option.option_id}>
//                         <input
//                           type="radio"
//                           name={`question-${currentQuestionIndex}-option`}
//                           value={optionIndex}
//                           checked={
//                             selectedAnswersMap[question.question_id] ===
//                             optionIndex
//                           }
//                           onChange={() => onAnswerSelected(optionIndex)}
//                         />
//                         <img
//                           src={`data:image/png;base64,${option.option_img}`}
//                           alt={`Option ${optionIndex + 1}`}
//                         />
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// // export const MCQ = () => {
// //   return (
// //     <div>
// //       <p>hello world1</p>
// //     </div>
// //   );
// // };

// // MSQ
// export const MSQ = () => {
//   return (
//     <div>
//       <p>hello world2</p>
//     </div>
//   );
// };

// //NSQ
// export const NSQ = () => {
//   return (
//     <div>
//       <p>hello world3</p>
//     </div>
//   );
// };

// //TF
// export const TF = () => {
//   return (
//     <div>
//       <p>hello world5</p>
//     </div>
//   );
// };

// // useEffect(()=> {
// //   const fetchQuestionTypes = async () => {
// //     const renderQuestion = () => {

// //     try {
// //       if(data && data.questions){
// //           const qID = data.questions[currentQuestionIndex].question_id;
// //           console.log("Rendering question...", data, currentQuestionIndex);
// //            if (data && data.questions && data.questions.length > 0) {
// //              const currentQuestion = data.questions[currentQuestionIndex];

// //              console.log("currentQuestion:", currentQuestion);
// //              const currentQuestionType = questionTypes.find(
// //                (q) => q.question_id === qID
// //              );
// //               //  console.log(currentQuestionType);

// //              if (
// //                currentQuestionType &&
// //                currentQuestionType.typeofQuestion ===
// //                  "MSQ(Multiple Selection Question)"
// //              ) {

// //               console.log("Hello MSQ");

// //               //  return (
// //               //    <div key={currentQuestion.question_id}>

// //               //      <h3>{currentQuestionIndex + 1}.</h3>
// //               //      <img
// //               //        src={`data:image/png;base64,${currentQuestion.question_img}`}
// //               //        alt="Question"
// //               //      />
// //               //      {currentQuestion.options.map((option) => (
// //               //        <label key={option.option_id}>
// //               //          <input
// //               //            type="radio"
// //               //            name={`question-${currentQuestionIndex}-option`}
// //               //            value={option.option_id}
// //               //            onChange={() => onAnswerSelected(option.option_id)}
// //               //            checked={
// //               //              selectedAnswersMap[
// //               //                currentQuestion.question_id
// //               //              ] === option.option_id
// //               //            }
// //               //          />
// //               //          <img
// //               //            src={`data:image/png;base64,${option.option_img}`}
// //               //            alt="Option"
// //               //          />
// //               //        </label>
// //               //      ))}
// //               //    </div>
// //               //  );
// //              }

// //              else if (
// //                currentQuestionType &&
// //                currentQuestionType.typeofQuestion ===
// //                  "MCQ(Multiple Choice Question)"
// //              ) {
// //                console.log("Hello MCQ");
// //                // Checkbox pattern for multiple correct options
// //                return (
// //                  <div key={currentQuestion.question_id}>
// //                    {/* console.log("Hello MCQ"); */}
// //                    <h3>{currentQuestionIndex + 1}.</h3>
// //                    <img
// //                      src={`data:image/png;base64,${currentQuestion.question_img}`}
// //                      alt="Question"
// //                    />
// //                    {currentQuestion.options.map((option) => (
// //                      <label key={option.option_id}>
// //                        <input
// //                          type="checkbox"
// //                          name={`question-${currentQuestionIndex}-option`}
// //                          value={option.option_id}
// //                          onChange={() => onAnswerSelected(option.option_id)}
// //                          checked={selectedAnswersMap[
// //                            currentQuestion.question_id
// //                          ]?.includes(option.option_id)}
// //                        />
// //                        <img
// //                          src={`data:image/png;base64,${option.option_img}`}
// //                          alt="Option"
// //                        />
// //                      </label>
// //                    ))}
// //                  </div>
// //                );
// //              }

// //              else if (
// //                currentQuestionType &&
// //                currentQuestionType.typeofQuestion ===
// //                  "NSQ(Numeric selection Question)"
// //              )

// //              {
// //                console.log("Hello NSQ");
// //                return (
// //                  <div key={currentQuestion.question_id}>
// //                    {/* console.log("Hello NSQ"); */}
// //                    <h3>{currentQuestionIndex + 1}.</h3>
// //                    <img
// //                      src={`data:image/png;base64,${currentQuestion.question_img}`}
// //                      alt="Question"
// //                    />
// //                    <input
// //                      type="text"
// //                      value={
// //                        selectedAnswersMap[currentQuestion.question_id] || ""
// //                      }
// //                      onChange={(e) => onAnswerSelected(e.target.value)}
// //                    />
// //                  </div>
// //                );
// //              }

// //              else if (
// //                currentQuestionType &&
// //                currentQuestionType.typeofQuestion === "True/False Questions"
// //              ) {
// //               console.log("Hello t/f");
// //                return (
// //                  <div key={currentQuestion.question_id}>
// //                    {/* console.log("Hello t/f"); */}
// //                    <p>{currentQuestion.question_text}</p>
// //                    <label>
// //                      <input
// //                        type="radio"
// //                        name={`question-${currentQuestion.question_id}`}
// //                        value="True"
// //                        onChange={() => onAnswerSelected("True")}
// //                        checked={
// //                          selectedAnswersMap[currentQuestion.question_id] ===
// //                          "True"
// //                        }
// //                      />
// //                      True
// //                    </label>
// //                    <label>
// //                      <input
// //                        type="radio"
// //                        name={`question-${currentQuestion.question_id}`}
// //                        value="False"
// //                        onChange={() => onAnswerSelected("False")}
// //                        checked={
// //                          selectedAnswersMap[currentQuestion.question_id] ===
// //                          "False"
// //                        }
// //                      />
// //                      False
// //                    </label>
// //                  </div>
// //                );
// //              }
// //            }
// //       }
// //     }catch (error) {
// //        console.error("Error fetching question types:", error);
// //     }
// //   }
// // }
// // })
// // const qID = data.questions[currentQuestionIndex].question_id;

// // console.log("Rendering question...", data, currentQuestionIndex);

// // if (data && data.questions && data.questions.length > 0) {
// //   const currentQuestion = data.questions[currentQuestionIndex];

// //   console.log("currentQuestion:", currentQuestion);
// //   const currentQuestionType = questionTypes.find(
// //     (q) => q.question_id === qID
// //   );

// //   if (
// //     currentQuestionType &&
// //     currentQuestionType.typeofQuestion ===
// //       "MSQ(Multiple Selection Question)"
// //   ) {
// //     return (
// //       <div key={currentQuestion.question_id}>
// //         console.log("Hello MSQ");
// //         <h3>{currentQuestionIndex + 1}.</h3>
// //         <img
// //           src={`data:image/png;base64,${currentQuestion.question_img}`}
// //           alt="Question"
// //         />
// //         {currentQuestion.options.map((option) => (
// //           <label key={option.option_id}>
// //             <input
// //               type="radio"
// //               name={`question-${currentQuestionIndex}-option`}
// //               value={option.option_id}
// //               onChange={() => onAnswerSelected(option.option_id)}
// //               checked={
// //                 selectedAnswersMap[currentQuestion.question_id] ===
// //                 option.option_id
// //               }
// //             />
// //             <img
// //               src={`data:image/png;base64,${option.option_img}`}
// //               alt="Option"
// //             />
// //           </label>
// //         ))}
// //       </div>
// //     );
// //   } else if (
// //     currentQuestionType &&
// //     currentQuestionType.typeofQuestion === "MCQ(Multiple Choice Question)"
// //   ) {
// //     // Checkbox pattern for multiple correct options
// //     return (
// //       <div key={currentQuestion.question_id}>
// //         console.log("Hello MCQ");
// //         <h3>{currentQuestionIndex + 1}.</h3>
// //         <img
// //           src={`data:image/png;base64,${currentQuestion.question_img}`}
// //           alt="Question"
// //         />
// //         {currentQuestion.options.map((option) => (
// //           <label key={option.option_id}>
// //             <input
// //               type="checkbox"
// //               name={`question-${currentQuestionIndex}-option`}
// //               value={option.option_id}
// //               onChange={() => onAnswerSelected(option.option_id)}
// //               checked={selectedAnswersMap[
// //                 currentQuestion.question_id
// //               ]?.includes(option.option_id)}
// //             />
// //             <img
// //               src={`data:image/png;base64,${option.option_img}`}
// //               alt="Option"
// //             />
// //           </label>
// //         ))}
// //       </div>
// //     );
// //   } else if (
// //     currentQuestionType &&
// //     currentQuestionType.typeofQuestion === "NSQ(Numeric selection Question)"
// //   ) {
// //     return (
// //       <div key={currentQuestion.question_id}>
// //         console.log("Hello NSQ");
// //         <h3>{currentQuestionIndex + 1}.</h3>
// //         <img
// //           src={`data:image/png;base64,${currentQuestion.question_img}`}
// //           alt="Question"
// //         />
// //         <input
// //           type="text"
// //           value={selectedAnswersMap[currentQuestion.question_id] || ""}
// //           onChange={(e) => onAnswerSelected(e.target.value)}
// //         />
// //       </div>
// //     );
// //   } else if (
// //     currentQuestionType &&
// //     currentQuestionType.typeofQuestion === "True/False Questions"
// //   ) {
// //     return (
// //       <div key={currentQuestion.question_id}>
// //         console.log("Hello t/f");
// //         <p>{currentQuestion.question_text}</p>
// //         <label>
// //           <input
// //             type="radio"
// //             name={`question-${currentQuestion.question_id}`}
// //             value="True"
// //             onChange={() => onAnswerSelected("True")}
// //             checked={
// //               selectedAnswersMap[currentQuestion.question_id] === "True"
// //             }
// //           />
// //           True
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name={`question-${currentQuestion.question_id}`}
// //             value="False"
// //             onChange={() => onAnswerSelected("False")}
// //             checked={
// //               selectedAnswersMap[currentQuestion.question_id] === "False"
// //             }
// //           />
// //           False
// //         </label>
// //       </div>
// //     );
// //   }
// // }

// // dfkjflkdjsfdskgj

// // <div className="question_options_container">
// // <div className="question">
// //   {/* Render the current question based on currentQuestionIndex */}
// //   <h3>{currentQuestionIndex + 1}.</h3>
// //   <img
// //     src={`data:image/png;base64,${data.questions[currentQuestionIndex].question_img}`}
// //     alt="Question"
// //   />
// // </div>
// // {/* Map over options for the current question and render them */}

// // {data.options
// //   .filter(
// //     (opt) =>
// //       opt.question_id ===
// //       data.questions[currentQuestionIndex].question_id
// //   )
// //   .map((option, optionIndex) => (
// //     <div className="option" key={option.option_id}>
// //       <li key={optionIndex}>
// //         <input
// //           type="radio"
// //           name={`question-${currentQuestionIndex}-option`}
// //           value={optionIndex}
// //           // checked={selectedAnswers[currentQuestionIndex] === optionIndex}
// //           checked={
// //             selectedAnswersMap[
// //               data.questions[currentQuestionIndex].question_id
// //             ] === optionIndex
// //           }
// //           // onChange={() => onAnswerSelected(subjectIndex, optionIndex)}
// //           onChange={() => onAnswerSelected(optionIndex)}
// //         />

// //         <img
// //           src={`data:image/png;base64,${option.option_img}`}
// //           alt="Option"
// //         />
// //       </li>
// //     </div>
// //   ))}
// // </div>

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ButtonsFunctionality from "./ButtonsFunctionality";
import "./Paper.css";
import axios from "axios";

const Practise2 = () => {
  const [data, setData] = useState(null);
  const {
    subjectId,
    testCreationTableId,
    sectionId,
    questionId,
    quesionTypeId,
  } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSectionName, setCurrentSectionName] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
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

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
    setActiveQuestion(questionNumber - 1);
  };

  const handleSubjectsClick = async (clickedSubjectId) => {
    // setData(null);
    setCurrentQuestionIndex(0); // Reset current question index
    setSections([]); // Reset sections when switching subjects
    setSelectedSubject(clickedSubjectId);
    console.log(clickedSubjectId);
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
        // setSections(sections);
        // console.log(sections);
        setSelectedSubject(clickedSubjectId);
        setSections(subjectsData.sections); // Assuming sections are present in subjectsData
        // console.log(subjectsData.sections);
        setCurrentQuestionIndex(0); // Reset current question index

        // Check if the selected subject is the same as the current subject
        if (clickedSubjectId !== selectedSubject) {
          // Redirect only if the subjects are different
          navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
        }
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [setSubjectId] = useState(/* initial value */);

  const clearResponse = () => {
    // Retrieve questionId after it's declared
    const questionId = data.questions[currentQuestionIndex].question_id;
    // Create a copy of the selected answers map
    const updatedSelectedAnswersMap = { ...selectedAnswersMap };
    // Set the answer for the current question to null
    updatedSelectedAnswersMap[questionId] = null;
    // Update the state with the new selected answers map
    setSelectedAnswersMap(updatedSelectedAnswersMap);
  };

  const handlePreviousClick = () => {
    // Update the current question index to move to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextClick = () => {
    console.log("Before state update", currentQuestionIndex);
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        // If there are more questions in the current section, move to the next question
        return prevIndex + 1;
      }
    });
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

  const [sectionName, setSectionName] = useState("");

  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [questionType, setQuestionType] = useState([]);

  useEffect(() => {
    const fetchQuestionTypes = async () => {
      try {
        if (data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch question types for the specified questionId
          const responseQuestionTypes = await fetch(
            `http://localhost:4009/questionType/${qID}`
          );
          const questionTypes = await responseQuestionTypes.json();
          setQuestionType(questionTypes);

          // Check if the current question is of type "MCQ"
          const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

          console.log(currentQuestionType);
          console.log("helllo");
          if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MSQ(Multiple Selection Question)"
          ) {
            console.log("Hello MSQ");

            // Render your MCQ logic here
          } else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ) {
            console.log("Hello MCQ");
          }
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
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

  // Fetch sections when the current question index changes
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (selectedSubject && data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch sections for the specified questionId
          const responseSections = await fetch(
            `http://localhost:4009/sections/${qID}`
          );
          const sections = await responseSections.json();
          setSections(sections);

          // Find the section that corresponds to the current questionId
          const sectionForQuestion = sections.find(
            (section) =>
              section.sectionId ===
              data.questions[currentQuestionIndex].sectionId
          );

          // Set the sectionName based on the found section
          if (sectionForQuestion) {
            setSectionName(sectionForQuestion.sectionName);
          } else {
            setSectionName("Section not found");
          }
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

  //working code
  //   const onAnswerSelected = (optionIndex) => {
  //     console.log("selectedSubject:", selectedSubject);
  //     console.log("currentQuestionIndex:", currentQuestionIndex);

  //     const questionId = data.questions[currentQuestionIndex].question_id;

  //     setSelectedAnswersMap((prevMap) => ({
  //       ...prevMap,
  //       [questionId]: optionIndex,
  //     }));

  //     const updatedSelectedAnswers = {
  //       ...selectedAnswersMap,
  //       [data.questions[currentQuestionIndex].question_id]: optionIndex,
  //     };
  //   };

  const onAnswerSelected = (optionIndex) => {
    const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
    const subjectIndex =
      Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
      1; // Adding 1 to make it human-readable (1-based index)
    // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

    console.log(`Clicked Option Index: ${optionIndex}`);
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Subject Index: ${subjectIndex}`);
    // console.log(`section Index: ${sectionIndex}`);

    const questionId = data.questions[currentQuestionIndex].question_id;

    setSelectedAnswersMap((prevMap) => ({
      ...prevMap,
      [questionId]: optionIndex,
    }));

    const updatedSelectedAnswers = {
      ...selectedAnswersMap,
      [data.questions[currentQuestionIndex].question_id]: optionIndex,
    };
  };



const renderQuestion = () => {
  console.log("Rendering question...", data, currentQuestionIndex);

  if (data && data.questions && data.questions.length > 0) {
    const currentQuestion = data.questions[currentQuestionIndex];

    console.log("currentQuestion:", currentQuestion);
  // const currentQuestionType = questionTypes.find(
  //           (q) => q.question_id === qID
  //         );
  const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

    if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MSQ(Multiple Selection Question)"
          ) {
     
        return (
          <div key={currentQuestion.question_id}>
            <h3>{currentQuestionIndex + 1}.</h3>
            <img
              src={`data:image/png;base64,${currentQuestion.question_img}`}
              alt="Question"
            />
            {currentQuestion.options.map((option) => (
              <label key={option.option_id}>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}-option`}
                  value={option.option_id}
                  onChange={() => onAnswerSelected(option.option_id)}
                  checked={
                    selectedAnswersMap[currentQuestion.question_id] ===
                    option.option_id
                  }
                />
                <img
                  src={`data:image/png;base64,${option.option_img}`}
                  alt="Option"
                />
              </label>
            ))}
          </div>
        );}

     else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ){// Checkbox pattern for multiple correct options
        return (
          <div key={currentQuestion.question_id}>
            <h3>{currentQuestionIndex + 1}.</h3>
            <img
              src={`data:image/png;base64,${currentQuestion.question_img}`}
              alt="Question"
            />
            {currentQuestion.options.map((option) => (
              <label key={option.option_id}>
                <input
                  type="checkbox"
                  name={`question-${currentQuestionIndex}-option`}
                  value={option.option_id}
                  onChange={() => onAnswerSelected(option.option_id)}
                  checked={selectedAnswersMap[
                    currentQuestion.question_id
                  ]?.includes(option.option_id)}
                />
                <img
                  src={`data:image/png;base64,${option.option_img}`}
                  alt="Option"
                />
              </label>
            ))}
          </div>
        );}

     else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ){
        return (
          <div key={currentQuestion.question_id}>
            <h3>{currentQuestionIndex + 1}.</h3>
            <img
              src={`data:image/png;base64,${currentQuestion.question_img}`}
              alt="Question"
            />
            <input
              type="text"
              value={selectedAnswersMap[currentQuestion.question_id] || ""}
              onChange={(e) => onAnswerSelected(e.target.value)}
            />
          </div>
        );}
   else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ){

        return (
          <div key={currentQuestion.question_id}>
            <p>{currentQuestion.question_text}</p>
            <label>
              <input
                type="radio"
                name={`question-${currentQuestion.question_id}`}
                value="True"
                onChange={() => onAnswerSelected("True")}
                checked={
                  selectedAnswersMap[currentQuestion.question_id] === "True"
                }
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name={`question-${currentQuestion.question_id}`}
                value="False"
                onChange={() => onAnswerSelected("False")}
                checked={
                  selectedAnswersMap[currentQuestion.question_id] === "False"
                }
              />
              False
            </label>
          </div>
        );
              }

    
    
  
            }}






  return (
    <div>
      {/* {typeofQuestion === "MCQ(Multiple Choice Question)" &&(
        (
          <>

          <p>hello mcq</p>
          </>
        )
      )} */}
      {/* <>
        {questionType.map((type) => {
          switch (type.typeofQuestion) {
            case "MCQ(Multiple Choice Question)":
              return <MCQ key={type.quesionTypeId} />;
            case "MSQ(Multiple Selection Question)":
              return <MSQ key={type.quesionTypeId} />;
            case "NSQ(Numerical Solution Question)":
              return <NSQ key={type.quesionTypeId} />;
            case "TF(True/False Question)":
              return <TF key={type.quesionTypeId} />;
            default:
              return null;
          }
        })}
      </> */}

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
                  {sections &&
                    sections.map((section) => (
                      <li key={section.sectionId}>
                        <p>{section.sectionName}</p>
                      </li>
                    ))}

                  {questionType.map((type) => (
                    <li key={type.quesionTypeId}>
                      <p>{type.typeofQuestion}</p>
                    </li>
                  ))}

                  {/* <p>Current Section: {currentSectionName}</p> */}
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
            <div>
              <div>
              {/* {(() => {
  const qID = data.questions[currentQuestionIndex]?.question_id;
  const currentQuestionType = questionTypes.find((q) => q.question_id === qID);

  if (
    currentQuestionType &&
    currentQuestionType.typeofQuestion === "MSQ(Multiple Selection Question)"
  ) {
    // console.log("Rendering MSQ component");
    // console.log('Question ID:', qID);
    // // return <MCQ key={currentQuestionType.quesionTypeId} key{{optionIndex} }/>;

    // return <MCQ key={currentQuestionType.quesionTypeId} optionIndex={data.optionIndex} />;
    console.log("Rendering MSQ component");
    console.log('Question ID:', qID);
    return <MCQ key={currentQuestionType.quesionTypeId} optionIndex={data.optionIndex} />;

  }

  console.log("Not rendering MSQ component");
  // Handle other question types here
  return null;
})()} */}

{/* {(() => {
  const qID = data.questions[currentQuestionIndex]?.question_id;
  const currentQuestionType = questionTypes.find((q) => q.question_id === qID);

  switch (
    currentQuestionType &&
    currentQuestionType.typeofQuestion === "MSQ(Multiple Selection Question)"
  ) {
    case "MCQ(Multiple Choice Question)":
      // return
    console.log("Rendering MSQ component");
    console.log('Question ID:', qID);
    // return <MCQ key={currentQuestionType.quesionTypeId} key{{optionIndex} }/>;

    return <MCQ key={currentQuestionType.quesionTypeId} optionIndex={data.optionIndex} />;

  }

  console.log("Not rendering MSQ component");
  // Handle other question types here
  return null;
})()} */}

{/* {(() => {
   const qID = data.questions[currentQuestionIndex]?.question_id;
   const currentQuestionType = questionTypes.find((q) => q.question_id === qID);
                  switch (qID.typeofQuestion) {
                    case "MCQ(Multiple Choice Question)":
                      // return <MCQ key={type.quesionTypeId} key={type.questionId} key={type.optionIndex}/>;
                      return <MCQ key={`${qID.quesionTypeId}-${qID.questionId}-${qID.optionIndex}`} />;

                      case "MSQ(Multiple Selection Question)":
                      return <MSQ key={`${qID.quesionTypeId}-${qID.questionId}-${qID.optionIndex}`}/>;
                    case "NSQ(Numeric selection Question)":
                      return <NSQ key={`${qID.quesionTypeId}-${qID.questionId}-${qID.optionIndex}`} />;
                    case "True/False Questions":
                      return <TF key={`${qID.quesionTypeId}-${qID.questionId}-${qID.optionIndex}`} />;
                    default:
                      return null;
                  }
                })}  */}

                {questionType.map((type,data) => {
                  switch (type.typeofQuestion) {
                    case "MCQ(Multiple Choice Question)":
                      // return <MCQ key={type.quesionTypeId} key={type.questionId} key={type.optionIndex}/>;
                      return <MCQ key={`${type.quesionTypeId}-${data.questionId}-${data.optionIndex} {data.questions.length} `}  />;

                      case "MSQ(Multiple Selection Question)":
                      return <MSQ key={`${type.quesionTypeId}-${data.questionId}-${data.optionIndex}`}/>;
                    case "NSQ(Numeric selection Question)":
                      return <NSQ key={`${type.quesionTypeId}-${data.questionId}-${data.optionIndex}`} />;
                    case "True/False Questions":
                      return <TF key={`${type.quesionTypeId}-${data.questionId}-${data.optionIndex}`} />;
                    default:
                      return null;
                  }
                })}  
              </div>
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
              <button
                className="save-btn"
                onClick={handleNextClick}
                // disabled={
                //   currentQuestionIndex ===
                //   sortedSections[currentSectionIndex]?.noOfQuestions - 1
                // }
              >
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
              //   onSectionButtonClick={handleSectionButtonClick}
              // currentSectionIndex={currentSectionIndex}
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

export default Practise2;


//main
// MCQ
export const MCQ = () => {
  const [data, setData] = useState(null);
  const {
    subjectId,
    testCreationTableId,
    sectionId,
    questionId,
    quesionTypeId,
  } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSectionName, setCurrentSectionName] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
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

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
    setActiveQuestion(questionNumber - 1);
  };

  const handleSubjectsClick = async (clickedSubjectId) => {
    // setData(null);
    setCurrentQuestionIndex(0); // Reset current question index
    setSections([]); // Reset sections when switching subjects
    setSelectedSubject(clickedSubjectId);
    console.log(clickedSubjectId);
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
        // setSections(sections);
        // console.log(sections);
        setSelectedSubject(clickedSubjectId);
        setSections(subjectsData.sections); // Assuming sections are present in subjectsData
        // console.log(subjectsData.sections);
        setCurrentQuestionIndex(0); // Reset current question index

        // Check if the selected subject is the same as the current subject
        if (clickedSubjectId !== selectedSubject) {
          // Redirect only if the subjects are different
          navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
        }
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [setSubjectId] = useState(/* initial value */);

  const clearResponse = () => {
    // Retrieve questionId after it's declared
    const questionId = data.questions[currentQuestionIndex].question_id;
    // Create a copy of the selected answers map
    const updatedSelectedAnswersMap = { ...selectedAnswersMap };
    // Set the answer for the current question to null
    updatedSelectedAnswersMap[questionId] = null;
    // Update the state with the new selected answers map
    setSelectedAnswersMap(updatedSelectedAnswersMap);
  };

  const handlePreviousClick = () => {
    // Update the current question index to move to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextClick = () => {
    // console.log('Before state update', currentQuestionIndex);

    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        // If there are more questions in the current section, move to the next question

        // console.log("kaka ")
        return prevIndex + 1;
      }
      // console.log("iddkfj")
      // console.log( currentQuestionIndex);
    });
  };

  // const handleNextClick = () => {
  //   console.log('Before state update', currentQuestionIndex);
  //   setCurrentQuestionIndex((prevIndex) => {
  //     const newIndex = prevIndex < data.questions.length - 1 ? prevIndex + 1 : prevIndex;
  //     console.log('After state update', newIndex);
  //     return newIndex;
  //   });

  // };

  // console.log(currentQuestionIndex)

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

  const [sectionName, setSectionName] = useState("");

  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [questionType, setQuestionType] = useState([]);

  useEffect(() => {
    const fetchQuestionTypes = async () => {
      try {
        if (data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch question types for the specified questionId
          const responseQuestionTypes = await fetch(
            `http://localhost:4009/questionType/${qID}`
          );
          const questionTypes = await responseQuestionTypes.json();
          setQuestionType(questionTypes);

          // Check if the current question is of type "MCQ"
          const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

          console.log(currentQuestionType);
          console.log("helllo");
          if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MSQ(Multiple Selection Question)"
          ) {
            console.log("Hello MSQ");

            // Render your MCQ logic here
          } else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ) {
            console.log("Hello MCQ");
          }
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
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

  // Fetch sections when the current question index changes
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (selectedSubject && data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch sections for the specified questionId
          const responseSections = await fetch(
            `http://localhost:4009/sections/${qID}`
          );
          const sections = await responseSections.json();
          setSections(sections);

          // Find the section that corresponds to the current questionId
          const sectionForQuestion = sections.find(
            (section) =>
              section.sectionId ===
              data.questions[currentQuestionIndex].sectionId
          );

          // Set the sectionName based on the found section
          if (sectionForQuestion) {
            setSectionName(sectionForQuestion.sectionName);
          } else {
            setSectionName("Section not found");
          }
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

  const onAnswerSelected = (optionIndex) => {
    const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
    const subjectIndex =
      Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
      1; // Adding 1 to make it human-readable (1-based index)
    // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

    console.log(`Clicked Option Index: ${optionIndex}`);
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Subject Index: ${subjectIndex}`);
    // console.log(`section Index: ${sectionIndex}`);

    const questionId = data.questions[currentQuestionIndex].question_id;

    setSelectedAnswersMap((prevMap) => ({
      ...prevMap,
      [questionId]: optionIndex,
    }));

    const updatedSelectedAnswers = {
      ...selectedAnswersMap,
      [data.questions[currentQuestionIndex].question_id]: optionIndex,
    };
  };

  const [questionTypes, setquestionTypes] = useState([]);

  return (
    <div>
      <p>MCQ(Multiple Choice Question)</p>

      {data !== null && data.questions.length > 0 ? (
        <div className="qps_button_sections">
          <div className="question_paper_section">
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
                        // checked={selectedAnswers[currentQuestionIndex] === optionIndex}
                        checked={
                          selectedAnswersMap[
                            data.questions[currentQuestionIndex].question_id
                          ] === optionIndex
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
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

// MSQ
export const MSQ = () => {
  const [data, setData] = useState(null);
  const {
    subjectId,
    testCreationTableId,
    sectionId,
    questionId,
    quesionTypeId,
  } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSectionName, setCurrentSectionName] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
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

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
    setActiveQuestion(questionNumber - 1);
  };

  const handleSubjectsClick = async (clickedSubjectId) => {
    // setData(null);
    setCurrentQuestionIndex(0); // Reset current question index
    setSections([]); // Reset sections when switching subjects
    setSelectedSubject(clickedSubjectId);
    console.log(clickedSubjectId);
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
        // setSections(sections);
        // console.log(sections);
        setSelectedSubject(clickedSubjectId);
        setSections(subjectsData.sections); // Assuming sections are present in subjectsData
        // console.log(subjectsData.sections);
        setCurrentQuestionIndex(0); // Reset current question index

        // Check if the selected subject is the same as the current subject
        if (clickedSubjectId !== selectedSubject) {
          // Redirect only if the subjects are different
          navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
        }
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [setSubjectId] = useState(/* initial value */);

  const clearResponse = () => {
    // Retrieve questionId after it's declared
    const questionId = data.questions[currentQuestionIndex].question_id;
    // Create a copy of the selected answers map
    const updatedSelectedAnswersMap = { ...selectedAnswersMap };
    // Set the answer for the current question to null
    updatedSelectedAnswersMap[questionId] = null;
    // Update the state with the new selected answers map
    setSelectedAnswersMap(updatedSelectedAnswersMap);
  };

  const handlePreviousClick = () => {
    // Update the current question index to move to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        // If there are more questions in the current section, move to the next question
        return prevIndex + 1;
      }
    });
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

  const [sectionName, setSectionName] = useState("");

  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [questionType, setQuestionType] = useState([]);

  useEffect(() => {
    const fetchQuestionTypes = async () => {
      try {
        if (data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch question types for the specified questionId
          const responseQuestionTypes = await fetch(
            `http://localhost:4009/questionType/${qID}`
          );
          const questionTypes = await responseQuestionTypes.json();
          setQuestionType(questionTypes);

          // Check if the current question is of type "MCQ"
          const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

          console.log(currentQuestionType);
          console.log("helllo");
          if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MSQ(Multiple Selection Question)"
          ) {
            console.log("Hello MSQ");

            // Render your MCQ logic here
          } else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ) {
            console.log("Hello MCQ");
          }
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
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

  // Fetch sections when the current question index changes
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (selectedSubject && data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch sections for the specified questionId
          const responseSections = await fetch(
            `http://localhost:4009/sections/${qID}`
          );
          const sections = await responseSections.json();
          setSections(sections);

          // Find the section that corresponds to the current questionId
          const sectionForQuestion = sections.find(
            (section) =>
              section.sectionId ===
              data.questions[currentQuestionIndex].sectionId
          );

          // Set the sectionName based on the found section
          if (sectionForQuestion) {
            setSectionName(sectionForQuestion.sectionName);
          } else {
            setSectionName("Section not found");
          }
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

  const onAnswerSelected = (optionIndex) => {
    const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
    const subjectIndex =
      Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
      1; // Adding 1 to make it human-readable (1-based index)
    // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

    console.log(`Clicked Option Index: ${optionIndex}`);
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Subject Index: ${subjectIndex}`);
    // console.log(`section Index: ${sectionIndex}`);

    const questionId = data.questions[currentQuestionIndex].question_id;

    setSelectedAnswersMap((prevMap) => ({
      ...prevMap,
      [questionId]: optionIndex,
    }));

    const updatedSelectedAnswers = {
      ...selectedAnswersMap,
      [data.questions[currentQuestionIndex].question_id]: optionIndex,
    };
  };

  const [questionTypes, setquestionTypes] = useState([]);

  return (
    <div>
      <p>MSQ(Multiple Selection Question)</p>

      {data !== null && data.questions.length > 0 ? (
        <div className="qps_button_sections">
          <div className="question_paper_section">
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
                        type="checkbox"
                        name={`question-${currentQuestionIndex}-option`}
                        value={optionIndex}
                        // checked={selectedAnswers[currentQuestionIndex] === optionIndex}
                        checked={
                          selectedAnswersMap[
                            data.questions[currentQuestionIndex].question_id
                          ] === optionIndex
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
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

// NSQ
export const NSQ = () => {
  const [data, setData] = useState(null);
  const {
    subjectId,
    testCreationTableId,
    sectionId,
    questionId,
    quesionTypeId,
  } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSectionName, setCurrentSectionName] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
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

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
    setActiveQuestion(questionNumber - 1);
  };

  const handleSubjectsClick = async (clickedSubjectId) => {
    // setData(null);
    setCurrentQuestionIndex(0); // Reset current question index
    setSections([]); // Reset sections when switching subjects
    setSelectedSubject(clickedSubjectId);
    console.log(clickedSubjectId);
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
        // setSections(sections);
        // console.log(sections);
        setSelectedSubject(clickedSubjectId);
        setSections(subjectsData.sections); // Assuming sections are present in subjectsData
        // console.log(subjectsData.sections);
        setCurrentQuestionIndex(0); // Reset current question index

        // Check if the selected subject is the same as the current subject
        if (clickedSubjectId !== selectedSubject) {
          // Redirect only if the subjects are different
          navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
        }
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [setSubjectId] = useState(/* initial value */);

  const clearResponse = () => {
    // Retrieve questionId after it's declared
    const questionId = data.questions[currentQuestionIndex].question_id;
    // Create a copy of the selected answers map
    const updatedSelectedAnswersMap = { ...selectedAnswersMap };
    // Set the answer for the current question to null
    updatedSelectedAnswersMap[questionId] = null;
    // Update the state with the new selected answers map
    setSelectedAnswersMap(updatedSelectedAnswersMap);
  };

  const handlePreviousClick = () => {
    // Update the current question index to move to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        // If there are more questions in the current section, move to the next question
        return prevIndex + 1;
      }
    });
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

  const [sectionName, setSectionName] = useState("");

  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [questionType, setQuestionType] = useState([]);

  useEffect(() => {
    const fetchQuestionTypes = async () => {
      try {
        if (data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch question types for the specified questionId
          const responseQuestionTypes = await fetch(
            `http://localhost:4009/questionType/${qID}`
          );
          const questionTypes = await responseQuestionTypes.json();
          setQuestionType(questionTypes);

          // Check if the current question is of type "MCQ"
          const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

          console.log(currentQuestionType);
          console.log("helllo");
          if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MSQ(Multiple Selection Question)"
          ) {
            console.log("Hello MSQ");

            // Render your MCQ logic here
          } else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ) {
            console.log("Hello MCQ");
          }
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
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

  // Fetch sections when the current question index changes
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (selectedSubject && data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch sections for the specified questionId
          const responseSections = await fetch(
            `http://localhost:4009/sections/${qID}`
          );
          const sections = await responseSections.json();
          setSections(sections);

          // Find the section that corresponds to the current questionId
          const sectionForQuestion = sections.find(
            (section) =>
              section.sectionId ===
              data.questions[currentQuestionIndex].sectionId
          );

          // Set the sectionName based on the found section
          if (sectionForQuestion) {
            setSectionName(sectionForQuestion.sectionName);
          } else {
            setSectionName("Section not found");
          }
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

  const onAnswerSelected = (optionIndex) => {
    const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
    const subjectIndex =
      Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
      1; // Adding 1 to make it human-readable (1-based index)
    // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

    console.log(`Clicked Option Index: ${optionIndex}`);
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Subject Index: ${subjectIndex}`);
    // console.log(`section Index: ${sectionIndex}`);

    const questionId = data.questions[currentQuestionIndex].question_id;

    setSelectedAnswersMap((prevMap) => ({
      ...prevMap,
      [questionId]: optionIndex,
    }));

    const updatedSelectedAnswers = {
      ...selectedAnswersMap,
      [data.questions[currentQuestionIndex].question_id]: optionIndex,
    };
  };

  const [questionTypes, setquestionTypes] = useState([]);

  return (
    <div>
      <p>hello world3</p>

      {data !== null && data.questions.length > 0 ? (
        <div className="qps_button_sections">
          <div className="question_paper_section">
            //{" "}
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
                        type="text"
                        name={`question-${currentQuestionIndex}-option`}
                        // value={optionIndex}
                        // checked={selectedAnswers[currentQuestionIndex] === optionIndex}
                        checked={
                          selectedAnswersMap[
                            data.questions[currentQuestionIndex].question_id
                          ] === optionIndex
                        }
                        // onChange={() => onAnswerSelected(subjectIndex, optionIndex)}
                        onChange={() => onAnswerSelected(optionIndex)}
                      />

                      {/* <img
                        src={`data:image/png;base64,${option.option_img}`}
                        alt="Option"
                      /> */}
                    </li>
                  </div>
                ))}
            </div>
            ;
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

//TF
export const TF = () => {
  const [data, setData] = useState(null);
  const {
    subjectId,
    testCreationTableId,
    sectionId,
    questionId,
    quesionTypeId,
  } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const [currentSectionName, setCurrentSectionName] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
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

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestionIndex(questionNumber - 1);
    setActiveQuestion(questionNumber - 1);
  };

  const handleSubjectsClick = async (clickedSubjectId) => {
    // setData(null);
    setCurrentQuestionIndex(0); // Reset current question index
    setSections([]); // Reset sections when switching subjects
    setSelectedSubject(clickedSubjectId);
    console.log(clickedSubjectId);
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
        // setSections(sections);
        // console.log(sections);
        setSelectedSubject(clickedSubjectId);
        setSections(subjectsData.sections); // Assuming sections are present in subjectsData
        // console.log(subjectsData.sections);
        setCurrentQuestionIndex(0); // Reset current question index

        // Check if the selected subject is the same as the current subject
        if (clickedSubjectId !== selectedSubject) {
          // Redirect only if the subjects are different
          navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
        }
      } else {
        console.error("Invalid data format:", subjectsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [setSubjectId] = useState(/* initial value */);

  const clearResponse = () => {
    // Retrieve questionId after it's declared
    const questionId = data.questions[currentQuestionIndex].question_id;
    // Create a copy of the selected answers map
    const updatedSelectedAnswersMap = { ...selectedAnswersMap };
    // Set the answer for the current question to null
    updatedSelectedAnswersMap[questionId] = null;
    // Update the state with the new selected answers map
    setSelectedAnswersMap(updatedSelectedAnswersMap);
  };

  const handlePreviousClick = () => {
    // Update the current question index to move to the previous question
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        // If there are more questions in the current section, move to the next question
        return prevIndex + 1;
      }
    });
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

  const [sectionName, setSectionName] = useState("");

  const [selectedAnswersMap, setSelectedAnswersMap] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [questionType, setQuestionType] = useState([]);

  useEffect(() => {
    const fetchQuestionTypes = async () => {
      try {
        if (data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch question types for the specified questionId
          const responseQuestionTypes = await fetch(
            `http://localhost:4009/questionType/${qID}`
          );
          const questionTypes = await responseQuestionTypes.json();
          setQuestionType(questionTypes);

          // Check if the current question is of type "MCQ"
          const currentQuestionType = questionTypes.find(
            (q) => q.question_id === qID
          );

          console.log(currentQuestionType);
          console.log("helllo");
          if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MSQ(Multiple Selection Question)"
          ) {
            console.log("Hello MSQ");

            // Render your MCQ logic here
          } else if (
            currentQuestionType &&
            currentQuestionType.typeofQuestion ===
              "MCQ(Multiple Choice Question)"
          ) {
            console.log("Hello MCQ");
          }
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
        // Fetch all subjects
        const responseSubjects = await fetch(
          `http://localhost:4009/subjects/${testCreationTableId}`
        );
        const subjectsData = await responseSubjects.json();
        setSubjects(subjectsData);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap]); // data removed from dependencies

  // Fetch sections when the current question index changes
  useEffect(() => {
    const fetchSections = async () => {
      try {
        if (selectedSubject && data && data.questions) {
          const qID = data.questions[currentQuestionIndex].question_id;

          // Fetch sections for the specified questionId
          const responseSections = await fetch(
            `http://localhost:4009/sections/${qID}`
          );
          const sections = await responseSections.json();
          setSections(sections);

          // Find the section that corresponds to the current questionId
          const sectionForQuestion = sections.find(
            (section) =>
              section.sectionId ===
              data.questions[currentQuestionIndex].sectionId
          );

          // Set the sectionName based on the found section
          if (sectionForQuestion) {
            setSectionName(sectionForQuestion.sectionName);
          } else {
            setSectionName("Section not found");
          }
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [currentQuestionIndex, data, selectedSubject, selectedAnswersMap]);

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

  const onAnswerSelected = (optionIndex) => {
    const questionIndex = currentQuestionIndex + 1; // Adding 1 to make it human-readable (1-based index)
    const subjectIndex =
      Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
      1; // Adding 1 to make it human-readable (1-based index)
    // const sectionIndex = sections.findIndex(section => section.sectionId === currentQuestionIndex) +1;

    console.log(`Clicked Option Index: ${optionIndex}`);
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Subject Index: ${subjectIndex}`);
    // console.log(`section Index: ${sectionIndex}`);

    const questionId = data.questions[currentQuestionIndex].question_id;

    setSelectedAnswersMap((prevMap) => ({
      ...prevMap,
      [questionId]: optionIndex,
    }));

    const updatedSelectedAnswers = {
      ...selectedAnswersMap,
      [data.questions[currentQuestionIndex].question_id]: optionIndex,
    };
  };

  const [questionTypes, setquestionTypes] = useState([]);

  return (
    <div>
      <p>hello world4</p>

      {data !== null && data.questions.length > 0 ? (
        <div className="qps_button_sections">
          <div className="question_paper_section">
            {" "}
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
                        // checked={selectedAnswers[currentQuestionIndex] === optionIndex}
                        checked={
                          selectedAnswersMap[
                            data.questions[currentQuestionIndex].question_id
                          ] === optionIndex
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
            ;
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};










// useEffect(()=> {
//   const fetchQuestionTypes = async () => {
//     const renderQuestion = () => {

//     try {
//       if(data && data.questions){
//           const qID = data.questions[currentQuestionIndex].question_id;
//           console.log("Rendering question...", data, currentQuestionIndex);
//            if (data && data.questions && data.questions.length > 0) {
//              const currentQuestion = data.questions[currentQuestionIndex];

//              console.log("currentQuestion:", currentQuestion);
//              const currentQuestionType = questionTypes.find(
//                (q) => q.question_id === qID
//              );
//               //  console.log(currentQuestionType);

//              if (
//                currentQuestionType &&
//                currentQuestionType.typeofQuestion ===
//                  "MSQ(Multiple Selection Question)"
//              ) {

//               console.log("Hello MSQ");

//               //  return (
//               //    <div key={currentQuestion.question_id}>

//               //      <h3>{currentQuestionIndex + 1}.</h3>
//               //      <img
//               //        src={`data:image/png;base64,${currentQuestion.question_img}`}
//               //        alt="Question"
//               //      />
//               //      {currentQuestion.options.map((option) => (
//               //        <label key={option.option_id}>
//               //          <input
//               //            type="radio"
//               //            name={`question-${currentQuestionIndex}-option`}
//               //            value={option.option_id}
//               //            onChange={() => onAnswerSelected(option.option_id)}
//               //            checked={
//               //              selectedAnswersMap[
//               //                currentQuestion.question_id
//               //              ] === option.option_id
//               //            }
//               //          />
//               //          <img
//               //            src={`data:image/png;base64,${option.option_img}`}
//               //            alt="Option"
//               //          />
//               //        </label>
//               //      ))}
//               //    </div>
//               //  );
//              }

//              else if (
//                currentQuestionType &&
//                currentQuestionType.typeofQuestion ===
//                  "MCQ(Multiple Choice Question)"
//              ) {
//                console.log("Hello MCQ");
//                // Checkbox pattern for multiple correct options
//                return (
//                  <div key={currentQuestion.question_id}>
//                    {/* console.log("Hello MCQ"); */}
//                    <h3>{currentQuestionIndex + 1}.</h3>
//                    <img
//                      src={`data:image/png;base64,${currentQuestion.question_img}`}
//                      alt="Question"
//                    />
//                    {currentQuestion.options.map((option) => (
//                      <label key={option.option_id}>
//                        <input
//                          type="checkbox"
//                          name={`question-${currentQuestionIndex}-option`}
//                          value={option.option_id}
//                          onChange={() => onAnswerSelected(option.option_id)}
//                          checked={selectedAnswersMap[
//                            currentQuestion.question_id
//                          ]?.includes(option.option_id)}
//                        />
//                        <img
//                          src={`data:image/png;base64,${option.option_img}`}
//                          alt="Option"
//                        />
//                      </label>
//                    ))}
//                  </div>
//                );
//              }

//              else if (
//                currentQuestionType &&
//                currentQuestionType.typeofQuestion ===
//                  "NSQ(Numeric selection Question)"
//              )

//              {
//                console.log("Hello NSQ");
//                return (
//                  <div key={currentQuestion.question_id}>
//                    {/* console.log("Hello NSQ"); */}
//                    <h3>{currentQuestionIndex + 1}.</h3>
//                    <img
//                      src={`data:image/png;base64,${currentQuestion.question_img}`}
//                      alt="Question"
//                    />
//                    <input
//                      type="text"
//                      value={
//                        selectedAnswersMap[currentQuestion.question_id] || ""
//                      }
//                      onChange={(e) => onAnswerSelected(e.target.value)}
//                    />
//                  </div>
//                );
//              }

//              else if (
//                currentQuestionType &&
//                currentQuestionType.typeofQuestion === "True/False Questions"
//              ) {
//               console.log("Hello t/f");
//                return (
//                  <div key={currentQuestion.question_id}>
//                    {/* console.log("Hello t/f"); */}
//                    <p>{currentQuestion.question_text}</p>
//                    <label>
//                      <input
//                        type="radio"
//                        name={`question-${currentQuestion.question_id}`}
//                        value="True"
//                        onChange={() => onAnswerSelected("True")}
//                        checked={
//                          selectedAnswersMap[currentQuestion.question_id] ===
//                          "True"
//                        }
//                      />
//                      True
//                    </label>
//                    <label>
//                      <input
//                        type="radio"
//                        name={`question-${currentQuestion.question_id}`}
//                        value="False"
//                        onChange={() => onAnswerSelected("False")}
//                        checked={
//                          selectedAnswersMap[currentQuestion.question_id] ===
//                          "False"
//                        }
//                      />
//                      False
//                    </label>
//                  </div>
//                );
//              }
//            }
//       }
//     }catch (error) {
//        console.error("Error fetching question types:", error);
//     }
//   }
// }
// })
// const qID = data.questions[currentQuestionIndex].question_id;

// console.log("Rendering question...", data, currentQuestionIndex);

// if (data && data.questions && data.questions.length > 0) {
//   const currentQuestion = data.questions[currentQuestionIndex];

//   console.log("currentQuestion:", currentQuestion);
//   const currentQuestionType = questionTypes.find(
//     (q) => q.question_id === qID
//   );

//   if (
//     currentQuestionType &&
//     currentQuestionType.typeofQuestion ===
//       "MSQ(Multiple Selection Question)"
//   ) {
//     return (
//       <div key={currentQuestion.question_id}>
//         console.log("Hello MSQ");
//         <h3>{currentQuestionIndex + 1}.</h3>
//         <img
//           src={`data:image/png;base64,${currentQuestion.question_img}`}
//           alt="Question"
//         />
//         {currentQuestion.options.map((option) => (
//           <label key={option.option_id}>
//             <input
//               type="radio"
//               name={`question-${currentQuestionIndex}-option`}
//               value={option.option_id}
//               onChange={() => onAnswerSelected(option.option_id)}
//               checked={
//                 selectedAnswersMap[currentQuestion.question_id] ===
//                 option.option_id
//               }
//             />
//             <img
//               src={`data:image/png;base64,${option.option_img}`}
//               alt="Option"
//             />
//           </label>
//         ))}
//       </div>
//     );
//   } else if (
//     currentQuestionType &&
//     currentQuestionType.typeofQuestion === "MCQ(Multiple Choice Question)"
//   ) {
//     // Checkbox pattern for multiple correct options
//     return (
//       <div key={currentQuestion.question_id}>
//         console.log("Hello MCQ");
//         <h3>{currentQuestionIndex + 1}.</h3>
//         <img
//           src={`data:image/png;base64,${currentQuestion.question_img}`}
//           alt="Question"
//         />
//         {currentQuestion.options.map((option) => (
//           <label key={option.option_id}>
//             <input
//               type="checkbox"
//               name={`question-${currentQuestionIndex}-option`}
//               value={option.option_id}
//               onChange={() => onAnswerSelected(option.option_id)}
//               checked={selectedAnswersMap[
//                 currentQuestion.question_id
//               ]?.includes(option.option_id)}
//             />
//             <img
//               src={`data:image/png;base64,${option.option_img}`}
//               alt="Option"
//             />
//           </label>
//         ))}
//       </div>
//     );
//   } else if (
//     currentQuestionType &&
//     currentQuestionType.typeofQuestion === "NSQ(Numeric selection Question)"
//   ) {
//     return (
//       <div key={currentQuestion.question_id}>
//         console.log("Hello NSQ");
//         <h3>{currentQuestionIndex + 1}.</h3>
//         <img
//           src={`data:image/png;base64,${currentQuestion.question_img}`}
//           alt="Question"
//         />
//         <input
//           type="text"
//           value={selectedAnswersMap[currentQuestion.question_id] || ""}
//           onChange={(e) => onAnswerSelected(e.target.value)}
//         />
//       </div>
//     );
//   } else if (
//     currentQuestionType &&
//     currentQuestionType.typeofQuestion === "True/False Questions"
//   ) {
//     return (
//       <div key={currentQuestion.question_id}>
//         console.log("Hello t/f");
//         <p>{currentQuestion.question_text}</p>
//         <label>
//           <input
//             type="radio"
//             name={`question-${currentQuestion.question_id}`}
//             value="True"
//             onChange={() => onAnswerSelected("True")}
//             checked={
//               selectedAnswersMap[currentQuestion.question_id] === "True"
//             }
//           />
//           True
//         </label>
//         <label>
//           <input
//             type="radio"
//             name={`question-${currentQuestion.question_id}`}
//             value="False"
//             onChange={() => onAnswerSelected("False")}
//             checked={
//               selectedAnswersMap[currentQuestion.question_id] === "False"
//             }
//           />
//           False
//         </label>
//       </div>
//     );
//   }
// }

//main origianal code
//  <div className="question_options_container">
//    <div className="question">
//      {/* Render the current question based on currentQuestionIndex */}
//      <h3>{currentQuestionIndex + 1}.</h3>
//      <img
//        src={`data:image/png;base64,${data.questions[currentQuestionIndex].question_img}`}
//        alt="Question"
//      />
//    </div>
//    {/* Map over options for the current question and render them */}

//    {data.options
//      .filter(
//        (opt) =>
//          opt.question_id === data.questions[currentQuestionIndex].question_id
//      )

//      .map((option, optionIndex) => (
//        <div className="option" key={option.option_id}>
//          <li key={optionIndex}>
//            <input
//              type="radio"
//              name={`question-${currentQuestionIndex}-option`}
//              value={optionIndex}
//              // checked={selectedAnswers[currentQuestionIndex] === optionIndex}
//              checked={
//                selectedAnswersMap[
//                  data.questions[currentQuestionIndex].question_id
//                ] === optionIndex
//              }
//              // onChange={() => onAnswerSelected(subjectIndex, optionIndex)}
//              onChange={() => onAnswerSelected(optionIndex)}
//            />

//            <img
//              src={`data:image/png;base64,${option.option_img}`}
//              alt="Option"
//            />
//          </li>
//        </div>
//      ))}
//  </div>;