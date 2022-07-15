import './Main.css';
import ContentContainer from './Content/ContentContainer';
import Footer from './Footer/Footer';
import HeaderContainer from './Header/HeaderContainer';



function Main(props) {

  return (
    <div className="Main">
      <HeaderContainer/>
      <ContentContainer/>
      <Footer/>
    </div>
  );
}

export default Main;
