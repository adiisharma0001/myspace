import './App.css';
import Header from "./MyComponents/Header";
import ScholarShip from "./MyComponents/ScholarShip";
import ExamRegestration from "./MyComponents/ExamRegestration";
import SportsRegestration from "./MyComponents/SportsRegestration";
import PayBills from "./MyComponents/PayBills";
import TakeInsurance from "./MyComponents/TakeInsurance";
import BookTickets from "./MyComponents/BookTickets";
import GetMoreHelp from "./MyComponents/GetMoreHelp";
import LatestNews from "./MyComponents/LatestNews";
import LogIn from "./MyComponents/LogIn";
import SignIn from "./MyComponents/SignIn";
import Side from "./MyComponents/Side";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <ScholarShip />
      {/* <ExamRegestration /> */}
      {/* <SportsRegestration /> */}
      {/* <PayBills /> */}
      {/* <TakeInsurance /> */}
      {/* <BookTickets/> */}
      {/* <GetMoreHelp/> */}
      {/* <LatestNews/> */}
      {/* <LogIn/> */}
      {/* <SignIn /> */}
      {/* <Side/> */}
      <Footer/>
    </div>
  );
}

export default App;
