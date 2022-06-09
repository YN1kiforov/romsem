import s from './MenuList.module.css'
import MenuItem from './MenuItem/MenuItem'

let MenuList = (props) => {

  return (
    <div className={`${s.menu}`}>
      {props.catalogList.map(item => <MenuItem img={item['img']} link={item['link']} name={item['name']}></MenuItem>)}
    </div>
  )
}

export default MenuList;
