/* eslint-disable react/prop-types */

export default function Table({nums}) {
    const Values = nums.map(i => <span key={i}
        className={`w-[1rem] h-[${i}%] bg-slate-300`}
        >{i}</span>)

    return (
        <div className="bg-red-400 h-[100%] flex gap-8 items-end w-[50rem]">
            {Values}
        </div>
    )
}
