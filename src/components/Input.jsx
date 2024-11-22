import { useNavigate, useParams } from "react-router-dom"
import Dice from '../assets/casino.png'
import { useState } from "react";

export default function Input() {
    let [inp, setInp] = useState()
    let [values, setValues] = useState([])
    let {alg} = useParams()

    const navigate = useNavigate()

    const diceClickNumber = () => {
        setValues([])
        let randomNumber = Math.floor(Math.random() * 100);
        setInp(randomNumber)
        diceClickValues()
    }

    const diceClickValues = () => {
        setValues([])
        let arr = [];
        for(let i = 0; i < inp; i++){
            arr.push(Math.floor(Math.random() * 100))
        }
        setValues(arr)
        console.log(values)
    }



    return (
        <div>
            <h1 className="mb-8">Input for {alg} sort :</h1>
            <label className="flex justify-center items-center gap-4 mb-8">
                Nr of elements :
                <input type="number" value={inp} onChange={(e) => setInp(e.target.value)} className="w-12 p-1"></input>
                <img src={Dice} alt="Dice" className="w-8 dice" onClick={diceClickNumber}/>
            </label>
            {inp && 
                <button className="btn-men" onClick={() => navigate(`/algorithm/${alg}/${inp}`)}>Start</button>
            }
        </div>
    )
}
