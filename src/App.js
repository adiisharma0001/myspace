import Content from "./components/Content"
import GetMoreHelp from "./components/GetMoreHelp";
import Layout from './components/Layout';
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { 
  paybills, 
  scholarships, 
  examregestration, 
  sportsregestration, 
  booktickets, 
  takeinsurance, 
  latestnews
} from './Data.js/data';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>} >
        <Route path="home" element={< Home />}/>
        <Route path="scholarship" element={<Content head="About ScholarShips" data={scholarships} />} />
        <Route path="examregistration" element={<Content head="About Exams Registration" data={examregestration}/>} />
        <Route path="sportsregistration" element={<Content head="About Sports Registration" data={sportsregestration}/>} />
        <Route path="paybills" element={<Content head="Pay Bills" data={paybills}/>} />
        <Route path="takeinsurance" element={<Content head="Take Insurance" data={takeinsurance}/>} />
        <Route path="booktickets" element={<Content head="Book Tickets" data={booktickets}/>} />
        <Route path="getmorehelp" element={< GetMoreHelp />} />
        <Route path="latestnews" element={<Content head="Latest News" data={latestnews}/>} />
        <Route path="login" element={< LogIn />} />
        <Route path="signin" element={< SignIn />} />
        </Route>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
