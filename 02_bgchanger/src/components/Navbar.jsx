

function Navbar(props) {
    return (
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white p-4 rounded-full">
                <button onClick={() => props.setColor("red")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "red"}}>Red</button>
                <button onClick={() => props.setColor("green")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "green"}}>Green</button>
                <button onClick={() => props.setColor("black")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "black"}}>Black</button>
                <button onClick={() => props.setColor("blue")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "blue"}}>Blue</button>
                <button onClick={() => props.setColor("olive")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "olive"}}>Olive</button>
                <button onClick={() => props.setColor("purple")} className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor: "purple"}}>Purple</button>
            </div>
        </div>
    )
}

export default Navbar