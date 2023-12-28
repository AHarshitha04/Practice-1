import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeLandingPage from './Pages/HomeLandingPage/HomeLandingPage'

import QuizHome from './Pages/QuizHome/QuizHome'
import NewPattern from './Pages/Paper/NewPattern'
// import Practise2 from './Pages/Paper/Practise2'
// import Paper1 from './Pages/Paper/Paper1'
import SubjectTest from './Pages/SubjectTest/SubjectTest'
import FullTest from './Pages/FullTest/FullTest'
// import ChapterTest from './Pages/ChapterTest/ChapterTest'
// import PreviousTest from './Pages/PreviousTest/PreviousTest'
import Instructions from './Pages/Instructions/Instructions';
import General_intructions_page from './Pages/General_intructions_page/General_intructions_page'
import Payment from './Pages/Payment/Payment'
import DownloadQuizPage from './Pages/DownloadQuizPage/DownloadQuizPage'
import CoursePage from './Pages/HomeLandingPage/CoursePage'
import Document_ImageInfo from './Pages/Paper/Document_ImageInfo';
import TestResultsPage from './Pages/Paper/TestResultsPage';


function App() {

  return (

    <BrowserRouter>
    {/* <Instructions/> */}
       <Routes>
        <Route path='/' element={<HomeLandingPage/>}/> 
      
        <Route path='/feachingcourse/:examId' element={<CoursePage/>} />
          <Route path='/QuizHome' element={<QuizHome/>}/>
      
        
        {/* <Route path='/getPaperData/:testCreationTableId/:minsubjectid/'  element={<Paper1 />} /> */}
        {/* <Route path='/getPaperData/:testCreationTableId/:minsubjectid/'  element={<Practise2 />} /> */}
        <Route path='/getPaperData/:testCreationTableId'  element={<NewPattern />} />
       
        <Route path='/Payment'  element={<Payment />} />
        <Route path={'#'} element={<SubjectTest/>} />
   
        <Route path='/Test_List/:courseCreationId' element={<FullTest />} />
       
        <Route path='/Instructions/:testCreationTableId' element={<Instructions />} />
        <Route path='/General_intructions_page/:testCreationTableId' element={<General_intructions_page />} />
        {/* <Route path='/General_intructions_page/:testCreationTableId/:minSubjectId' element={<General_intructions_page />} /> */}
        <Route path='/result'  element={<TestResultsPage />} />
      
       </Routes>
    </BrowserRouter>


  );
}



// Practise2


export default App;