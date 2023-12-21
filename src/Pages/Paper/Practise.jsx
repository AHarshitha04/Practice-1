import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Paper1 = () => {


    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionCount,setCurrentQuestionCount] = useState(0);

  const updateCurrentSection = () => {
    setCurrentSectionIndex((prevIndex) => prevIndex + 1);
    setCurrentQuestionCount(0);
    setCurrentSectionName(sortedSections[currentSectionIndex]?.sectionName || "");
  };

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

  
  const [answeredCount, setAnsweredCount] = useState(0);
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
    useState(0);
  const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
  const [VisitedCount, setVisitedCount] = useState(0);

  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);


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

      
  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < data.questions.length - 1) {
        const nextIndex = prevIndex + 1;
        
        return nextIndex;
      } else {
        const nextSectionIndex =
          currentSectionIndex < sortedSections.length - 1
            ? currentSectionIndex + 1
            : currentSectionIndex;

        setCurrentSectionIndex(nextSectionIndex);

        // Use setTimeout to ensure that setCurrentSectionName is called after the state has been updated
        setTimeout(() => {
          setCurrentSectionName(sortedSections[nextSectionIndex]?.sectionName || "");
        }, 0);

        return 0; // Set the current question index to the first question in the next section
      }
    });
  };



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
    
              
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      );





}