import React from 'react';

const Card = (props) => {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-6">
            <img className="rounded-t-lg h-48 w-full" src={props.image} alt="" />

            <div className="p-5">
                <h5 className="mb-4  font-semibold tracking-tight text-[#7a462a] uppercase">{props.title}</h5>
                <p className="mb-3 font-normal text-gray-400 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )
}

export default Card;