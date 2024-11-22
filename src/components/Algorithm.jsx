import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Table from "./Table"

export default function Algorithm() {
    let [values, setValues] = useState([])
    let {alg,num} = useParams()

    const diceClickValues = () => {
        setValues([])
        let arr = [];
        for(let i = 0; i < num; i++){
            arr.push(Math.floor(Math.random() * 100))
        }
        setValues(arr)
        console.log(values)
    }
    useEffect(() => {
        diceClickValues()
    },[])
    return (
        <div>
            <h1>{alg} Algorithm</h1>
            <Table nums={values} />
        </div>
    )
}
