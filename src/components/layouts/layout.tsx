import { Outlet } from 'react-router-dom';

// $======================== Layout ========================$ //

function Layout(): React.JSX.Element {
  return (
    <div className='wrapper'>
      
      <Outlet />
      
    </div>
  );
}
export default Layout;