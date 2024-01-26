import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ReactDatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllTask, updateTask } from "../../store/slices/taskSlice";



const EditTask = () => {

    const { id } = useParams()
    const data = useSelector(state => state.tasks?.data?.filter(task => task._id === id)[0])
    const [updatedTask, setUpdatedTask] = useState({ ...data, dueDate: new Date(data?.dueDate) });
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!updatedTask.title) {
            alert("Title required");
            return;
        } else {
            await dispatch(updateTask({ id, updatedTask }))
            await dispatch(fetchAllTask())
            navigate("/")
        }
    }

    const handleTitle = (e) => setUpdatedTask(pre => ({ ...pre, title: e.target.value }))
    const handleDescription = (e) => setUpdatedTask(pre => ({ ...pre, content: e.target.value }))
    const handlePriority = (e) => setUpdatedTask(pre => ({ ...pre, priority: e.target.value }))
    const handleDueDate = (date) => setUpdatedTask(pre => ({ ...pre, dueDate: date }))


    return (

        <>
            {
                updatedTask &&
                <form onSubmit={handleSubmit} className="flex flex-col mt-[5rem] px-20">

                    <input type="text" name="title" id="title" value={updatedTask.title} className="border border-slate-500 mt-10 px-5 py-3 font-bold" placeholder="Add Topic" autoComplete="off" onChange={handleTitle} />

                    <textarea name="description" id="description" value={updatedTask.content} className="border border-slate-500 my-4 px-5 py-3" placeholder="Description" autoComplete="off" onChange={(e) => handleDescription(e)} />

                    <div className="flex justify-between">
                        <select name="priority" id="priority" value={updatedTask.priority} className="max-w-xs py-2 px-3 text-center float-left outline-slate-500 " onChange={handlePriority}>
                            <option value="" disabled className="font-bold">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <div className="flex text-lg">

                            <p className="me-3">Due Date:</p>
                            <div className="border border-slate-600 ">
                                <ReactDatePicker name="dueDate" selected={updatedTask.dueDate} onChange={handleDueDate} minDate={updatedTask.dueDate} className="w-fit outline-none text-center" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="bg-green-400 hover:bg-green-800 text-white hover:font-bold  py-3 mt-4"> Update </button>

                </form>
            }
        </>
    )
}

export default EditTask