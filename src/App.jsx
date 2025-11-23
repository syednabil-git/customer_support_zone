import { useState, useEffect } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/navbar/nav';
import Cover from './components/cover/cover';
import Card from './components/card/card';
import Footer from './components/footer/footer';

function App() {
  const [services, setServices] = useState([]);
  const [inProgressCount, setInProgressCount] =useState(0);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
       const loadData = async () => {
              const res = await fetch("/services.json");
              const data = await res.json();
              setServices(data);
              };
              loadData();
  
    }, []);

  return (
    <>
     <div className='bg-gray-50'>
         <div className='bg-white'>
        <Nav />
      </div>
      <div className='bg-gray-50'>
        <Cover inProgressCount={inProgressCount}
        resolvedTasks={resolvedTasks} />
      </div>
      <div className='bg-gray-50'>
        <Card 
        services={services}
        setServices ={setServices}
        setInProgressCount={setInProgressCount}
        inProgressCount={inProgressCount}
        resolvedTasks ={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
        />
      </div>
      <div>
        <Footer />
      </div>
     </div>
     <ToastContainer />
    </>
  )
}

export default App
