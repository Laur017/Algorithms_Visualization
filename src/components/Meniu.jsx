import { useNavigate } from "react-router-dom"

export default function Meniu() {
    const navigate = useNavigate()

    const goTo = (n) => {
        const algorithm = n === 1 ? "bubble": n === 2 ? "quick" : "merge";
        navigate(`/input/${algorithm}`)
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold mb-16">Choose an Algorithm</h1>
            <button className="btn-men" onClick={()=>goTo(1)}>Bubble Sort</button>
            <button className="btn-men" onClick={()=>goTo(2)}>Quick Sort</button>
            <button className="btn-men" onClick={()=>goTo(3)}>Merge Sort</button>
        </div>
    )
}
