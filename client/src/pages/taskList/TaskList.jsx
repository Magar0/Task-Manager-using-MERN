import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Sorting from './Sorting';
import DeleteAll from '../../component/deleteButton/DeleteAll';
import TaskItem from '../../component/taskItem/TaskItem';


const TaskList = () => {

    const list = useSelector(state => state.tasks.data)
    const [taskList, setTaskList] = useState(list)
    const [sort, setSort] = useState("")
    const user = useSelector(state => state.currentUser?.data)

    const sortingValue = (e) => {
        setSort(e)
    }

    const sortList = (e) => {
        let arr = [...taskList]
        if (e === "none") {
            setTaskList(list)

        } else if (e === "priority") {
            let sortedArray = arr.sort((a, b) => {
                if (a.priority === "high") {
                    return -1;
                } else if (b.priority === "high") {
                    return 1;
                } else if (a.priority === "medium") {
                    return -1;
                } else if (b.priority === "medium") {
                    return 1;
                } else {
                    return 0;
                }
            })
            console.log(sortedArray);
            setTaskList(sortedArray)

        } else if (e === "status") {
            const sortedArray = arr.sort((a, b) => {
                if (a.status === false) {
                    return -1;
                } else if (b.status === false) {
                    return 1;
                } else {
                    return 0;
                }
            })
            setTaskList(sortedArray)
        }
        setSort(e)
    }

    useEffect(() => {
        setTaskList(list)
    }, [list])

    return (
        <>
            <div className='mt-[5rem] px-10'>
                {Boolean(taskList?.length) && <Sorting sortList={sortList} />}
                {
                    user &&
                    <Link to='/addTask' className="bg-blue-400 float-end  text-black hover:bg-gray-500  hover:text-white  rounded-2xl px-4 py-2 " >Add Task</Link>
                }
                {
                    taskList && taskList.map(task => {
                        return <TaskItem task={task} key={task._id} />
                    })
                }
                {!user && <h2 className='text-center mt-10 font-bold text-2xl text-red-500 '>Sign up or login to add Tasks</h2>}
                {(!taskList?.length && user) && <h2 className='text-center mt-10 font-bold text-2xl text-red-500 '>No Task Found</h2>}

                {taskList?.length ? <DeleteAll /> : null}
            </div>
        </>
    )
}

export default TaskList