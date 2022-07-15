import { Link } from 'react-router-dom';
import s from './Header.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Header(props) {
  return (
    <div className={s.header}>
      <div className={s.contact}>
        <span className={s.title}>Наш телефон</span>
        <div>
          <div className={s.number}>+7 (913) 200 ‑10‑10</div>
          <div className={s.number}>+7 (913) 200 ‑10‑10</div>
        </div>
        <div className={s.time}>работаем с 10:00 до 00:00</div>
      </div>
      <div className={s.city}>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel >Город:</InputLabel>
          <Select
            value={props.city}
            onChange={(e) => { props.setCity(e.target.value) }}
          >
            {props.cities.map(city => {
              return <MenuItem value={city}>{city}</MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
      <ul className={s.links}>
        <li className={s.link}>
          <Link className='link' to='/review'>Отзывы</Link>
        </li>
        <li className={s.link}>
          <Link className='link' to='/delivery'>Доставка и оплата</Link>
        </li>
      </ul>
    </div>

  );
}

export default Header;
