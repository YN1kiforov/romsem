import './Content.scss';
import { Routes, Route} from "react-router-dom";


import PaymentContainer from './Payment/PaymentContainer';
import MainPageContainer from './MainPage/MainPageContainer';
import ReviewContainer from './Review/ReviewContainer';
import About from './About/About';
import Delivery from './Delivery/Delivery';


import Pizza from './Pizza/Pizza';
import Sets from './Sets/Sets';
import Drinks from './Drinks/Drinks';
import Rolls from './Rolls/Rolls';
import Salad from './Salad/Salad';
import Sushi from './Sushi/Sushi';
import Soup from './Soup/Soup';
import Wok from './Wok/Wok';


function Content(props) {


  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<MainPageContainer />} />
        <Route path='/pizza' element={<Pizza/>} />
        <Route path='/sets' element={<Sets />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/rolls' element={<Rolls />} />
        <Route path='/salad' element={<Salad />} />
        <Route path='/soup' element={<Soup />} />
        <Route path='/sushi' element={<Sushi />} />
        <Route path='/wok' element={<Wok />} />
        <Route path='/payment' element={<PaymentContainer />} />
        <Route path='/about' element={<About />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/review' element={<ReviewContainer />} />
      </Routes>
    </div>
  );
}

export default Content;
