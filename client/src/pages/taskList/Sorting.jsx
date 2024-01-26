
const Sorting = ({ sortList }) => {
    const handleSorting = (e) => {
        sortList(e.target.value)
    }

    return (
        <>
            <div className='flex py-2 px-3 text-center'>

                <h3>Sorting: </h3>
                <select className='ms-3' onChange={handleSorting}>
                    <option value="none">Select </option>
                    <option value="priority">Priority</option>
                    <option value="status">Completion</option>
                </select>
            </div>
        </>
    )
}

export default Sorting