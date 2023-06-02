import { NavLink } from 'react-router-dom';

const NavLinkMenu = () => {
     
    return (
        <div>
        <NavLink className={({ isActive }) =>
   `link` + (isActive ? ` link-min` : '')} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
   `link` + (isActive ? ` link-min` : '')} to='/show'>Show</NavLink>
        <NavLink className={({ isActive }) =>
   `link` + (isActive ? ` link-min` : '')} to='/pictures'>Show pictures</NavLink>
    </div>);
}
 
export default NavLinkMenu;

 