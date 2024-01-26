
const Avatar = ({ children }) => {

    const MyStyle = {
        backgroundColor: '#009dff',
        borderRadius: "50%",
        color: 'black',
        fontSize: "1rem",
        cursor: "pointer",
        textAlign: "center",
    }

    return (
        <>
            <div className="py-2 px-5 font-bold " style={MyStyle}>{children}</div>
        </>
    )
}

export default Avatar