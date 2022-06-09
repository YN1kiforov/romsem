import { Link } from 'react-router-dom';
import s from './Footer.module.css'



function Footer() {
  return (
    <div>
      <div className="footer">
        <div className={`${s.container} container`}>
          <ul className={s.about}>
            <li className={s.link}>
              <Link className='link' to='/about'>О компании</Link>
            </li>
            <li className={s.link}>
              <Link className='link' to='/delivery'>Доставка и оплата</Link>
            </li>
            <li className={s.link}>
              <Link className='link' to='/'>Лента материалов</Link>
            </li>
            <li className={s.link}>
              <Link className='link' to='/policy'> Политика возврата</Link>
            </li>
          </ul>
          <div className={s.column}>
            <div className={s.text}>Выберите удобный <br></br> мессенджер для общения</div>
            <div className={s.networks}>
              <div>
                <img src='https://i.postimg.cc/rwZytGr0/instagram.png' />
              </div>
              <div>
                <img src='https://i.postimg.cc/mrcL3cYd/Telegram.png' />
              </div>
              <div>
                <img src='https://i.postimg.cc/nL6H3HTn/wu.png' />
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.number}>Тел: <span>+996 705 188 955</span></div>
            <div className={s.number}>Тел: <span>+996 705 188 955</span></div>
            <div className={s.address}>Адрес:Бакаева 126</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
