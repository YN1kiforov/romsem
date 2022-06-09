import { Link } from 'react-router-dom';
import s from './LeftPanel.module.css'
import MenuListContainer from './MenuList/MenuListContainer'

let LeftPanel = (props) => {

  return (
    <div className={s.leftPanel}>
      <div className={s.wrapper}>
        <div className={s.image}>
        <Link to="/">
          <img src='https://svgshare.com/i/f7B.svg' ></img>
        </Link>
        </div>
        <MenuListContainer />
      </div>
    </div>

  )
}

export default LeftPanel;
