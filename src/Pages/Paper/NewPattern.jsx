import React, { useState, useEffect } from "react";
import { useParams,  useNavigate, NavLink } from "react-router-dom";
import ButtonsFunctionality from "./ButtonsFunctionality";
import "./Paper.css";
import axios from "axios";

const NewPattern = () => {
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

  const [activeSubject, setActiveSubject] = useState(null);
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
        // `http://localhost:4009/getPaperData1/${testCreationTableId}/${clickedSubjectId}`
        `http://localhost:4009/getPaperData/${testCreationTableId}`
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
        //   navigate(`/getPaperData/${testCreationTableId}/${clickedSubjectId}`);
        navigate(`/getPaperData/${testCreationTableId}`);
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
            `http://localhost:4009/getPaperData/${testCreationTableId}`
        //   `http://localhost:4009/getPaperData/${testCreationTableId}/${defaultSubjectId}`
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
console.log(Subjects);
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
         {/* {Subjects.map((subjectTitle) => (
          <li key={subjectTitle.subjectId}>
            <NavLink
            //   className="subject_btn"
              className={`subject_btn ${subjectTitle.subjectId === activeSubject ? 'active' : ''}`}
            >
              {subjectTitle.subjectName}
            </NavLink>
          </li>
        ))} */}
        <h3>
          Question Type:{" "}
          {questionType.map((type) => (
            <li key={type.quesionTypeId}>
              <p>{type.typeofQuestion}</p>
            </li>
          ))}
        </h3>
      </div>
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

export default NewPattern;
