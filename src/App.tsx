import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='flex w-full h-full'>
        <Sidebar />
        <div className='w-full'>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
