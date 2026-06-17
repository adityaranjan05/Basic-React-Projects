function Card(props) {
    return(
        <>
            <div className="flex justify-between p-5 w-full bg-gray-700/50 text-white/80 rounded-xl mb-3.5 shadow-md shadow-black/40 duration-300 hover:shadow-lg hover:shadow-black/50">
                <span>
                    {props.task}
                </span>
                <button className="cursor-pointer text-xl text-red-400 transition-transform duration-150 hover:text-red-500 font-bold hover:scale-105" onClick={() => {props.deleteTask(props.index)}}>
                    X
                </button>
            </div>
        </>
    )
}

export default Card