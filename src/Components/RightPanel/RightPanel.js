import './RightPanel.css';
import CartContainer from './Cart/CartContainer';
import CartInfoContainer from './CartInfo/CartInfoContainer';

function RightPanel(props) {

  return (
    <div className="RightPanel">
      <div className='wrapper'>
        <CartContainer />
        <CartInfoContainer />
      </div>
    </div>
  );
}

export default RightPanel;
