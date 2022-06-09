import './Main.css';
import Content from './Content/Content';
import ContentContainer from './Content/ContentContainer';
import Header from './Header/Header';
import Footer from './Footer/Footer';



function Main(props) {

  return (
    <div className="Main">
      <Header/>
      <ContentContainer/>
      <Footer/>
    </div>
  );
}

export default Main;
