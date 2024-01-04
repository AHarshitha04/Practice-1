
import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const Exam_Summary = () => {
    const [questionStatus, setQuestionStatus] = useState(
        // Array.isArray(data) ? Array(data.questions.length).fill("notAnswered") : []
      );
    const [answeredCount, setAnsweredCount] = useState(0);
    const [notAnsweredCount, setNotAnsweredCount] = useState(0);
    const [answeredmarkedForReviewCount, setAnsweredmarkedForReviewCount] =
      useState(0);
    const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
    const [VisitedCount, setVisitedCount] = useState(0);
    const navigate = useNavigate();
    const calculateQuestionCounts = () => {
        let noOfQuestions =0;
        let answered = 0;
        let notAnswered = 0;
        let markedForReview = 0;
        let answeredmarkedForReviewCount = 0;
        // let VisitedCount = 0;
    
        questionStatus.forEach((status, index) => {
          if (status === "answered") {
            answered++;
          } else if (status === "notAnswered") {
            notAnswered++;
          } else if (status === "marked") {
            markedForReview++;
          } else if (status === "Answered but marked for review") {
            answeredmarkedForReviewCount++;
          } else if (status === "noOfQuestions") {
            noOfQuestions++;
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

    const handleYes = () => {
       
      
        navigate("/SubmitPage");
      };

    //   const handleSubmit = () => {
    //     window.alert("Your Test has been Submitted!! Click Ok to See Result.");
    
    //     const {
    //       noOfQuestions,
    //       answered,
    //       notAnswered,
    //       markedForReview,
    //       answeredandmarkedForReviewCount
    //     } = calculateQuestionCounts();
    //     navigate("/ExamSummary", {
    //       state: {
    //         noOfQuestionsCount:noOfQuestions,
    //         answeredCount: answered,
    //         notAnsweredCount: notAnswered,
    //         markedForReviewCount: markedForReview,
    //         answeredmarkedForReviewCount: answeredandmarkedForReviewCount
    //       },
    //     });
    //   };
    const [totalnoOfQuestions, setTotalNoOfQuestions] = useState();
    const [noOfAnsweredQuestions, setNoOfAnsweredQuestions] = useState([]);
    const [noOfNotAnsweredQuestions, setNoOfNotAnsweredQuestions] = useState();
    const [noOfmarkedForReview, setNoOfMarkedForReview] = useState();
    const [noOfAnsweredAndMarkedForReview, setNoOfAnsweredAndMarkedForReview] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const examResponse = await axios.get(`http://localhost:4009/get_answers`);
        //   setCourseCard(examResponse.data);
  
          const courseResponse = await fetch(
            "http://localhost:4009/Test/count"
          );
          if (!courseResponse.ok) {
            throw new Error("Network response was not ok");
          }
          const courseData = await courseResponse.json();
          setNoOfAnsweredQuestions(courseData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);




  return (
    <div>
      <h1>Exam Summary</h1>
      <div>
      <p>No of Questions:{}</p>
      <p>Answered</p>
      <p>Not Answered</p>
      <p>Marked for Review</p>
      <p>Answered & Marked for Review</p>
      </div>
      <div>
        <h2>Are you sure you want to submit for final marking? <br />
        No changes will be allowed after submission.
        </h2>
        <button onClick={handleYes}>YES</button>
        <button>NO</button>
      </div>

    </div>
  )
}

export default Exam_Summary







