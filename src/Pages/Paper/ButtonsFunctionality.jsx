
// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { Link, useParams } from "react-router-dom";
// // import "../RightSidebar/RightSidebar.css";

// import PropTypes from "prop-types";

// // const buttons = [
// //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
// //   23, 24, 25, 26, 27, 28, 29, 30,
// // ];


// const ButtonsFunctionality = ({
//   onQuestionSelect,
//   questionStatus,
//   seconds,
//   setQuestionStatus,
//   answeredCount,
//   notAnsweredCount,
//   answeredmarkedForReviewCount,
//   markedForReviewCount,
//   VisitedCount,
//   selectedSubject,
//   updateButtonStatus,
//   data,
//   onSectionButtonClick,
//   currentSectionIndex,
//   sortedSectionsProp, 
// }) => {
//   const sections = [
//     // Your section data here (adjust based on your actual data structure)
//     { sectionId: 1, sectionName: "Mathematics", subject: "Mathematics" },
//     { sectionId: 2, sectionName: "Chemistry", subject: "Chemistry" },
//     { sectionId: 3, sectionName: "Physics", subject: "Physics" },
//     { sectionId: 4, sectionName: "Biology", subject: "Biology" },
//   ];


//   const renderQuestionButtons = Array.isArray(data.questions)
//     ? data.questions.map((question, index) => {
//         let className = "right_bar_Buttons ";
//         if (questionStatus && questionStatus[index] === "answered") {
//           className += " instruction-btn1";
//         } else if (questionStatus && questionStatus[index] === "notAnswered") {
//           className += " instruction-btn2";
//         } else if (questionStatus && questionStatus[index] === "marked") {
//           className += " instruction-btn3";
//         } else if (
//           questionStatus &&
//           questionStatus[index] === "Answered but marked for review"
//         ) {
//           className += " instruction-btn4";
//         } else if (questionStatus && questionStatus[index] === "Visited") {
//           className += " instruction-btn6";
//         }

//         return (
//           <li key={question}>
//             {/* Add your logic for rendering question buttons here */}
//             {/* onSectionButtonClick(); */}
//             <button
//               onClick={() =>{ handleButtonClick(index + 1);
//                 }}
//               className={className}
//               // className="right_bar_Buttons"
//             >
//               {index + 1}
//             </button>
//           </li>
//         );
//       })
//     : null;



//   const renderSectionButtons = () => {
//     // Filter sections based on the selected subject
//     const filteredSections = sections.filter(
//       (section) => section.subject === selectedSubject
//     );

//     // console.log("Filtered Sections:", filteredSections);
//     // console.log("Question Data:", data.questions);
//     // Render buttons for filteredSections
//     return filteredSections.map((section, index) => (
//       <li key={index}>
//         <p
//           className="section-btn"
//           onClick={() => handleButtonClick(section.sectionId)}
//         >
//           You are viewing
//           <span className="subject"> {section.sectionName} </span>Section
//           Question Palette
//         </p>
//       </li>
//     ));
//   };

//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const [isPaused, setIsPaused] = useState(false);

//   const { subjectId, testCreationTableId } = useParams();
//   // let currentSectionIndex = 0;
//   let currentQuestionCount = 0;
//   const [currentSectionName, setCurrentSectionName] = useState("");
//   const updateCurrentSection = () => {
//     currentSectionIndex += 1;
//     currentQuestionCount = 0;
//     setCurrentSectionName(
//       sortedSections[currentSectionIndex]?.sectionName || ""
//     );
//   };
//   const [ setSubjects] = useState([]);
//   // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [ setSections] = useState([]);

//   const [sortedSections] = useState("");
//   //working code
//   useEffect(() => {
//     const fetchData = async () => {
//       // let sortedSections = [];
//       try {


//          // Fetch all subjects
//          const responseSubjects = await fetch(
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
      
//         // Use linkUrl as needed in your component

//         //  ---------------------------------------------------------

//         const responseSections = await fetch(
//           `http://localhost:4009/fetchSections/${testCreationTableId}/${defaultSubjectId}`
//         );
//         const sectionsData = await responseSections.json();
//         console.log("sectionsData:", sectionsData);
//         const sortedSections = sectionsData.sort(
//           (a, b) => b.noOfQuestions - a.noOfQuestions
//         );
//         console.log("sortedSections:", sortedSections);

//         setSections(sortedSections);

//         // Track the current section index and current question count
//         let currentSectionIndex = 0;
//         let currentQuestionCount = 0;
//         let currentSectionName = "";

//         // Function to update the current section based on the question count 1st code
//         const updateCurrentSection = () => {
//           currentSectionIndex += 1;
//           currentQuestionCount = 0;
//           currentSectionName =
//           sortedSectionsProp[currentSectionIndex]?.sectionName || "";
//         };
//         // Initial display of questions

//         //2nd one
//         const displayQuestions = () => {
//           const currentSection = sortedSections[currentSectionIndex];

//           if (currentQuestionCount < currentSection.noOfQuestions) {
//             // Set the initial section name if not set
//             if (!currentSectionName) {
//               setCurrentSectionName(currentSection.sectionName);
//               console.log("Current Section ID:", currentSection.sectionId);
//             }

//             currentQuestionCount += 1;
//           } else {
//             updateCurrentSection();
//             displayQuestions();
//           }
//         };
//         displayQuestions();

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [testCreationTableId, subjectId,sortedSectionsProp]);

//   const handleButtonClick = (questionNumber) => {

//   console.log("Handle Button Click - Question Number:", questionNumber);
//   console.log("Current Section Index:", currentSectionIndex);
//   console.log("Sorted Sections:", sortedSections);
//   console.log("Question Status:", questionStatus);


//   //     // Check if questionStatus or sortedSections is undefined or an empty array
//   // if (!questionStatus || !sortedSections || sortedSections.length === 0) {
//   //   console.error("Invalid questionStatus or sortedSections");
//   //   return;
//   // }

//   // // Check if the question number is out of bounds
//   // if (questionNumber < 1 || questionNumber > sortedSections[currentSectionIndex].noOfQuestions) {
//   //   console.error("Invalid question number");
//   //   return;
//   // }

//     // Check if the question is already answered, and return early if true
//     if (questionStatus[questionNumber - 1] === "answered") {
//       // Navigate to the selected question when it's already answered
//       onQuestionSelect(questionNumber);
//       return;
//     }


//     // Update active question state
//     setActiveQuestion(questionNumber - 1);

//       // Update the current section name
//       setCurrentSectionName(sortedSections[currentSectionIndex]?.sectionName);

//     onQuestionSelect(questionNumber);
//     setAnsweredQuestions((prevAnsweredQuestions) => [
//       ...prevAnsweredQuestions,
//       questionNumber,
//     ]);
//     setIsPaused(false);

//     setQuestionStatus((prevQuestionStatus) => {
//       const currentStatus = prevQuestionStatus[questionNumber - 1];

//       if (currentStatus === "notVisited") {
//         return [
//           ...prevQuestionStatus.slice(0, questionNumber - 1),
//           "notAnswered",
//           ...prevQuestionStatus.slice(questionNumber),
//         ];
//       }
//       // If none of the conditions are met, return the current state
//       return prevQuestionStatus;
//     });
//     if (
//       currentSectionIndex >= 0 &&
//       currentSectionIndex < sortedSections.length
//     ) {
//       setCurrentSectionName(sortedSections[currentSectionIndex]?.sectionName);
//     }
//     // setCurrentSectionName(
//     //   sortedSectionsProp[currentSectionIndex]?.sectionName || ""
//     // );

//   };

//   ButtonsFunctionality.propTypes = {
//     onQuestionSelect: PropTypes.func.isRequired,
//     questionStatus: PropTypes.arrayOf(PropTypes.string),
//     onResumeTimer: PropTypes.func.isRequired, // Define the prop type for onResumeTimer
//     questionData: PropTypes.array.isRequired,
//     setQuestionStatus: PropTypes.func.isRequired,
//     sortedSectionsProp: PropTypes.array.isRequired,
    
//   };

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timers, setTimers] = useState(new Array().fill(0));
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     // Set the timer to the saved value for the current question
//     setTimer(timers[currentQuestionIndex] || 0);

//     let interval;
//     // interval = setInterval(() => {
//     //     setTimer(prevTimer => prevTimer + 1);
//     // }, 1000);

//     if (!isPaused) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer + 1);
//       }, 1000);
//     }

//     // Clear the interval when the component unmounts or when the user moves to the next question
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentQuestionIndex, timers, isPaused]);

//   const visted = () => {
//     setQuestionStatus(Array(1).fill("Visited"));
//   };

//   const totalTime = 180 * 60; // 180 minutes in seconds
//   const [wtimer, setWTimer] = useState(totalTime);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setWTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     // Clear the interval and handle time-up logic when timer reaches 0
//     if (wtimer <= 0) {
//       clearInterval(interval);
//       // Handle time-up logic here (e.g., navigate to a different component)
//     }

//     // Clean up the interval on component unmount or when navigating away
//     return () => {
//       clearInterval(interval);
//     };
//   }, [wtimer]);

//   const WformatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return `${hours > 9 ? hours : "0" + hours}:${
//       minutes > 9 ? minutes : "0" + minutes
//     }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
//   };
//   const filteredSections = sections.filter(
//     (section) => section.subject === selectedSubject
// );



//   return (
//     <div className="right-side-bar">
//       <div className="rightSidebar-topHeader">
//         <p>Name of the person</p>
//         <p>Time Left: {WformatTime(wtimer)}</p>
//       </div>
      
//       <div className="buttons_container">
//         <div className="sidebar-header">
//           <p className="header-para">{renderSectionButtons()}</p>
//         </div>

//         <div className="ques-btn">
//           <ul className="btn-ul quesAns-btn ">{renderQuestionButtons}</ul>
//         </div>
//       </div>

//       {/* <div key={index}>
//                 <button className='quesAns-btn'>{item}</button>
//             </div> */}

//       <div className="sidebar-footer">
//         <h4 className="sidebar-footer-header">Legend</h4>
//         <div className="footer-btns">
//           <div className="inst-btns">
//             <button className="instruction-btn1">{answeredCount}</button>
//             <p>Answerd</p>
//             <br />
//           </div>
//           <br />
//           <div className="inst-btns">
//             <button className="instruction-btn2">{notAnsweredCount}</button>
//             <p>Not Answered</p>
//             <br />
//           </div>
//           <br />
//           <div className="inst-btns">
//             <button className="instruction-btn3">
//               {answeredmarkedForReviewCount}
//             </button>
//             <p>Marked</p>
//             <br />
//           </div>
//           <br />
//           <div className="inst-btns">
//             <button className="instruction-btn4">{markedForReviewCount}</button>
//             <p>Answered but marked for review</p>
//           </div>
//           <br />
//           <div className="inst-btns">
//             <button className="instruction-btn5">{VisitedCount}</button>
//             <p>Not Visited</p>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default ButtonsFunctionality;






























import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ButtonsFunctionality = ({
  onQuestionSelect,
  questionStatus,
  seconds,
  setQuestionStatus,
  answeredCount,
  notAnsweredCount,
  answeredmarkedForReviewCount,
  markedForReviewCount,
  VisitedCount,
  data,
}) => {



  const [wtimer, setWTimer] = useState(0);
 

  const [activeQuestion, setActiveQuestion] = useState(0);
const [answeredQuestions, setAnsweredQuestions] = useState([]);
const [isPaused, setIsPaused] = useState(false);


  const handleButtonClick = (questionNumber,status) => {
 
    
      // Check if the question is already answered, and return early if true
  if (questionStatus[questionNumber - 1] === "answered") {
    // Navigate to the selected question when it's already answered
    onQuestionSelect(questionNumber);
    return;
  }
    setActiveQuestion(questionNumber - 1);

    onQuestionSelect(questionNumber);
    setAnsweredQuestions((prevAnsweredQuestions) => [
      ...prevAnsweredQuestions,
      questionNumber,
    ]);
    setIsPaused(false);

    setQuestionStatus((prevQuestionStatus) => {
      const currentStatus = prevQuestionStatus[questionNumber - 1];

      if (currentStatus === "notVisited") {
        return [
          ...prevQuestionStatus.slice(0, questionNumber - 1),
          "notAnswered",
          ...prevQuestionStatus.slice(questionNumber),
        ];
      }
      // If none of the conditions are met, return the current state
      return prevQuestionStatus;
    });
   

  };


  

  const WformatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds}`;
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setWTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clear the interval and handle time-up logic when timer reaches 0
    if (wtimer <= 0) {
      clearInterval(interval);
      // Handle time-up logic here (e.g., navigate to a different component)
    }

    // Clean up the interval on component unmount or when navigating away
    return () => {
      clearInterval(interval);
    };
  }, [wtimer]);

  const renderQuestionButtons = Array.isArray(data.questions)
  ? data.questions.map((question, index) => {
      let className = "right_bar_Buttons ";
      const questionKey = question.id || index;

      if (questionStatus && questionStatus[index] === "answered") {
        className += "instruction-btn1";
      } else if (questionStatus && questionStatus[index] === "notAnswered") {
        className += "instruction-btn2";
      } else if (questionStatus && questionStatus[index] === "marked") {
        className += "instruction-btn3";
      } else if (
        questionStatus &&
        questionStatus[index] === "Answered but marked for review"
      ) {
        className += "instruction-btn4";
      } else if (questionStatus && questionStatus[index] === "Visited") {
        className += "instruction-btn2";
      } else {
        className += "instruction-btn5"; // Default to instruction-btn5 for not visited
      }

      // Highlight the current question being displayed
      if (index === activeQuestion) {
        className += " active-question";
      }

      return (
        <li key={questionKey}>
          <button
            onClick={() => handleButtonClick(index + 1, "Visited")}
            className={className}
          >
            {index + 1}
          </button>
        </li>
      );
    })
  : null;



  return (
    <>
      <div className="right-side-bar">
        <div className="rightSidebar-topHeader">
          <p>Name of the person</p>
          <p>Time Left: {WformatTime(wtimer)}</p>
        </div>

        <div className="buttons_container">
         

          <div className="ques-btn">
            <ul className="btn-ul quesAns-btn ">{renderQuestionButtons}</ul>
          </div>
        </div>

        <div className="sidebar-footer">
          <h4 className="sidebar-footer-header">Legend</h4>
          <div className="footer-btns">
            <div className="inst-btns">
              <button className="instruction-btn1">{answeredCount}</button>
              <p>Answerd</p>
              <br />
            </div>
            <br />
            <div className="inst-btns">
              <button className="instruction-btn2">{notAnsweredCount}</button>
              <p>Not Answered</p>
              <br />
            </div>
            <br />
            <div className="inst-btns">
              <button className="instruction-btn3">
                {answeredmarkedForReviewCount}
              </button>
              <p>Marked</p>
              <br />
            </div>
            <br />
            <div className="inst-btns">
              <button className="instruction-btn4">
                {markedForReviewCount}
              </button>
              <p>Answered but marked for review</p>
            </div>{" "}
            <br />{" "}
            <div className="inst-btns">
              {" "}
              <button className="instruction-btn5">{VisitedCount}</button>
              <p>Not Visited</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


ButtonsFunctionality.propTypes = {
  onQuestionSelect: PropTypes.func.isRequired,
  questionStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
  setQuestionStatus: PropTypes.func.isRequired,

};



export default ButtonsFunctionality;