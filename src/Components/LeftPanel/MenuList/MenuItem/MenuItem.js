import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";
let MenuItem = (props) => {
  return (
    <NavLink to = {props.link} className={`${s.item} link`}>
      <img src= {props.img} className= {s.img}></img>
      <span>{props.name}</span>
    </NavLink>
  )
}

export default MenuItem;
