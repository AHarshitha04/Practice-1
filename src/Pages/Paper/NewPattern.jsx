import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonsFunctionality from "./ButtonsFunctionality";
import "./Paper.css";

const NewPattern = () => {
  const [data, setData] = useState(null);
  const { subjectId, testCreationTableId } = useParams();
  const [Subjects, setSubjects] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [questionStatus, setQuestionStatus] = useState(
    Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
  );
  const [sections, setSections] = useState([]);
  // const [setSubjectId] = useState(/* initial value */);
  const [currentQuestionType, setCurrentQuestionType] = useState(null);

  const navigate = useNavigate();

  const [answeredCount, setAnsweredCount] = useState(0);
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
    useState(0);
  const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
  const [VisitedCount, setVisitedCount] = useState(0);

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
      selectedAnswersMap[clickedSubjectId] || [];
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

  const [setSubjectId] = useState();

  const clearResponse = () => {
    const questionId = data.questions[currentQuestionIndex].question_id;
    const updatedSelectedAnswersMap = { ...selectedAnswersMap };
    updatedSelectedAnswersMap[questionId] = null;
    setSelectedAnswersMap(updatedSelectedAnswersMap);
  };

  const handlePreviousClick = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        return prevIndex + 1;
      }
    });
  };

  const handleSubmit = () => {
    window.alert("Your Test has been Submitted!! Click Ok to See Result.");

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

  //   const [questionType, setQuestionType] = useState([]);
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

          // console.log(currentQuestionType);
          // console.log("helllo");
          // if (
          //   currentQuestionType &&
          //   currentQuestionType.typeofQuestion ===
          //     "MSQ(Multiple Selection Question)"
          // ) {
          //   console.log("Hello MSQ");
          // } else if (
          //   currentQuestionType &&
          //   currentQuestionType.typeofQuestion ===
          //     "MCQ(Multiple Choice Question)"
          // ) {
          //   console.log("Hello MCQ");
          // }
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
          selectedAnswersMap[defaultSubjectId] || [];
        setSelectedAnswers(selectedAnswersForSubject);

        const linkUrl = `/subjects/${testCreationTableId}/${
          subjectId || leastSubjectId
        }`;

        // Initialize questionStatus here when you have data
        if (result && result.questions) {
          setQuestionStatus(Array(result.questions.length).fill(""));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [testCreationTableId, subjectId, selectedAnswersMap]);

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

  const onAnswerSelected = (optionIndex) => {
    const questionIndex = currentQuestionIndex + 1;
    const subjectIndex =
      Subjects.findIndex((subject) => subject.subjectId === selectedSubject) +
      1;

    console.log(`Clicked Option Index: ${optionIndex}`);
    console.log(`Question Index: ${questionIndex}`);
    console.log(`Subject Index: ${subjectIndex}`);

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

        <h3>
          Question Type:{" "}
          {questionTypes.map((type,index) => (
            <li key={index}>
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
                      {currentQuestionType &&
                        (
                        //   console.log(
                        //   "Rendering input for question type:",
                        //   currentQuestionType.typeofQuestion
                        // ),
                        currentQuestionType.typeofQuestion.toLowerCase() ===
                          "mcq(multiple choice question)" && (
                          <input
                            type="radio"
                            name={`question-${currentQuestionIndex}-option`}
                            value={optionIndex}
                            checked={
                              selectedAnswersMap[
                                data.questions[currentQuestionIndex].question_id
                              ] === optionIndex
                            }
                            onChange={() => onAnswerSelected(optionIndex)}
                          />
                        ))}

                      {currentQuestionType &&
                        (
                        //   console.log(
                        //   "Rendering input for question type:",
                        //   currentQuestionType.typeofQuestion
                        // ),
                        currentQuestionType.typeofQuestion.toLowerCase() ===
                          "msq(multiple selection question)" && (
                          <input
                            type="checkbox"
                            name={`question-${currentQuestionIndex}-option`}
                            value={optionIndex}
                            checked={
                              selectedAnswersMap[
                                data.questions[currentQuestionIndex].question_id
                              ] &&
                              selectedAnswersMap[
                                data.questions[currentQuestionIndex].question_id
                              ].includes(optionIndex)
                            }
                            onChange={() => onAnswerSelected(optionIndex)}
                          />
                        ))}

                      {currentQuestionType &&
                        (
                        //   console.log(
                        //   "Rendering input for question type:",
                        //   currentQuestionType.typeofQuestion
                        // ),
                        currentQuestionType.typeofQuestion.toLowerCase() ===
                          "nsq(numeric selections question)" && (
                          <input
                            type="text"
                            name={`question-${currentQuestionIndex}-option`}
                            value={
                              selectedAnswersMap[
                                data.questions[currentQuestionIndex].question_id
                              ] || ""
                            }
                            onChange={(e) => onAnswerSelected(e.target.value)}
                          />
                        ))}

                      {option.option_img && (
                        <img
                          src={`data:image/png;base64,${option.option_img}`}
                          alt={`Option-${optionIndex}`}
                        />
                      )}
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
