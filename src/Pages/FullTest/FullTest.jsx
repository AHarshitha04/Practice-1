import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../SubjectTest/SubjectTest.css";
import { useRef } from "react";

const FullTest = () => {
  const [testData, setTestData] = useState([]);
  const [typeOfTest, setTypeOfTest] = useState([]);
  const { courseCreationId } = useParams();

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const responseTest = await fetch(
          `http://localhost:4009/feachingtest/${courseCreationId}`
        );
        const testData = await responseTest.json();
        setTestData(testData);

        const responseTypeOfTest = await fetch(
          "http://localhost:4009/feachingtypeoftest"
        );
        const typeOfTestData = await responseTypeOfTest.json();
        setTypeOfTest(typeOfTestData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestData();
  }, [courseCreationId]);

  const handleTypeOfTestClick = async (typeOfTestId) => {
    try {
      // Fetch tests based on both courseCreationId and typeOfTestId
      const response = await fetch(
        `http://localhost:4009/feachingtest/${courseCreationId}/${typeOfTestId}`
      );
      const testData = await response.json();
      setTestData(testData);
      console.log(testData);
    } catch (error) {
      console.error(error);
    }
  };

  const { subjectId } = useParams();
  const [SubjectData, setSubjectData] = useState([]);
  const [minsubjectid, setminsubjectid] = useState("");
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:4009/subjectData1/${courseCreationId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSubjectData(data);
        console.log();

        if (data && data.length > 0) {
          // Find the minimum value of subjectId in the array
          const minSubjectId = Math.min(...data.map((item) => item.subjectId));

          // Log the minimum value to the console
          console.log("Minimum subjectId:", minSubjectId);

          setminsubjectid(minSubjectId);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubjects();
  }, [subjectId]);

 
  const newWinRef = useRef(null);

const openPopup = () => {
  newWinRef.current = window.open(
    testData.map((test) => `/Instructions/${test.testCreationTableId}`).join('\n'),
    '_blank', // Use '_blank' to open in a new window or tab
    'width=1000,height=1000'
  );

  document.onmousedown = focusPopup;
  document.onkeyup = focusPopup;
  document.onmousemove = focusPopup;
};

const focusPopup = () => {
  if (newWinRef.current && !newWinRef.current.closed) {
    newWinRef.current.focus();
  }
};


  return (
    <div>
      <div>
        {SubjectData.map((data, i) => {
          let minSubjectId; // Declare minSubjectId outside the if block

          if (data && data.length > 0) {
            // Find the minimum value of subjectId in the array
            minSubjectId = Math.min(...data.map((item) => item.subjectId));

            // Log the minimum value to the console
            console.log("Minimum subjectId:", minSubjectId);
          }

          return (
            <div key={i}>
              <p>{minSubjectId}</p>
            </div>
          );
        })}
      </div>
      <ul>
        <div className="header-div2">
          <div className="header-links">
            {typeOfTest.map((type) => (
              <li key={type.typeOfTestId}>
                <Link
                  className="content-link"
                  to="#"
                  onClick={() => handleTypeOfTestClick(type.typeOfTestId)}
                >
                  {type.typeOfTestName}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </ul>
      <ul>
        {testData.map((test) => (
          <div className="test-card" key={test.testCreationTableId}>
            <li>
              <p className="test-card-header">
                <h3>{test.TestName}</h3>
                <div className="testCard-second-header">
                  Available Till: {test.testStartDate} to {test.testEndDate}
                </div>
              </p>
              <div className="test-contents2">
                <span className="material-symbols-outlined">schedule</span>{" "}
                <p>{test.Duration} Minutes</p>
              </div>
              <div  className="test-contents2">
                <span
                  // style={myComponentStyle1}
                  class="material-symbols-outlined"
                >
                  help
                </span>
                <p>{test.TotalQuestions} Questions</p>
              </div>
              <div  className="test-contents2">
                <span
                  // style={myComponentStyle1}
                  class="material-symbols-outlined"
                >
                  trending_up
                </span>
                <p>{test.totalMarks} Marks</p>
              </div>
              <div className="test-contents2">
                <li>
                  {/* <Link to={`/Instructions/${test.testCreationTableId}`}  onClick={openPopup}> */}
                  {/* <Link to={`/Instructions/${test.testCreationTableId}`}> */}
                  <Link to='#' onClick={openPopup}>

                    Start Test
                  </Link>
                </li>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FullTest;
