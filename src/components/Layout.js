import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

export default Layout;