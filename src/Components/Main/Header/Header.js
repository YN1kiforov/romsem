import { Link } from 'react-router-dom';
import s from './Header.module.css';
//import Header from './LeftPanel/LeftPanel'


function Header() {
  return (
    <div className={s.header}>
      <div className={s.contact}>
        <span className= {s.title}>Наш телефон</span>
        <div>
          <div className={s.number}>+7 (913) 200 ‑10‑10</div>
          <div className={s.number}>+7 (913) 200 ‑10‑10</div>
        </div>
        <div className={s.time}>работаем с 10:00 до 00:00</div>
      </div>
      <div className={s.city}>
        Город:
        <div>Санкт-Петербург</div>
      </div>
      <ul className={s.links}>
        <li className={s.link}>
          <Link className='link' to = '/review'>Отзывы</Link>
        </li>
        <li className={s.link}>
          <Link className='link' to = '/delivery'>Доставка и оплата</Link>
        </li>
      </ul>
    </div>

  );
}

export default Header;
