import React from 'react';

const Card = (props) => {
    return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <img class="rounded-t-lg h-80" src={props.image} alt="" />

            <div class="p-5">
                <h5 class="mb-4  font-semibold tracking-tight text-[#7a462a] uppercase">{props.title}</h5>
                <p class="mb-3 font-normal text-gray-400 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    )
}

export default Card;