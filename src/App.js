import logo from './logo.svg';
import './App.css';
import './css/landing_page.css';
import './css/create_event.css';
import './css/eventsummary.css';
import Navbar from './components/landing_page/navbar';
import LandingBox1 from './components/landing_page/box1';
import { Route, Routes } from 'react-router-dom';
import Navbar1 from './components/create_event/create_navbar';
import EventDetailsForm from './components/create_event/event_details_form';
import EventSummary from './components/event_summary/event_summary';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <LandingBox1 />
//     </div>
//   );
// }

function App(){
  return(
    <main className='App'>
      <Routes>
        <Route path='/' element={<div><Navbar /><LandingBox1 /></div>} exact/>
        <Route path='/create_event' element={<div><Navbar1 /><EventDetailsForm/></div>} exact/>
        <Route path='/event_details' element={<div><Navbar1 /><EventSummary /></div>} exact/>
      </Routes>
    </main>
  )
}
export default App;
