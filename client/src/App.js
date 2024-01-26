import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { fetchAllTask } from './store/slices/taskSlice';
import { setCurrentUser } from './store/slices/currentUserSlice';
import Auth from './pages/auth/Auth';
import Navbar from './component/navbar/Navbar';
import TaskList from './pages/taskList/TaskList';
import AddTask from './pages/addTask/AddTask';
import EditTask from './pages/editTask/EditTask';


function App() {

  const dispatch = useDispatch();
  const authChange = useSelector(state => state.auth.data)

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    dispatch(fetchAllTask())
  }, [authChange, dispatch])

  return (
    <>
      <div className="app">
        <Routes>

          <Route to='/' element={<Navbar />}>
            <Route index element={<TaskList />} />
            <Route path='/auth' element={<Auth />} />
            <Route path="/addTask" element={<AddTask />} />
            <Route path="/editTask/:id" element={<EditTask />} />
          </Route>

        </Routes>
      </div >
    </>
  );
}

export default App;
