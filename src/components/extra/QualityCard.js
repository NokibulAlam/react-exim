import React from 'react';

const QualityCard = () => {
  return (
    <div className='grid grid-cols-1 space-y-5 md:grid-cols-3 md:space-y-0 md:space-x-5'>
        <div>
            <div className="block max-w-sm h-64 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7a462a] text-center">QUALITY</h5>
                <p className="font-normal text-gray-700">AYESHA focuses on quality,that's our number one priority. Our Quality is rigorously controlled from selecting raw materials to our finished leathers. A team of highly skilled technicians ensure we are selecting the best & creating the best.</p>
            </div>
        </div>

        <div>
            <div className="block max-w-sm h-64 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7a462a] text-center">INNOVATION</h5>
                <p className="font-normal text-gray-700 ">The most modern machines and latest technologies are used at SAF. A dedicated team for research and development are constantly creating newer and more sustainable articles.</p>
            </div>
        </div>

        <div>
            <div className="block max-w-sm h-64 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#7a462a] text-center">STRENGTH</h5>
                <p className="font-normal text-gray-700 ">Our strength is not only our immense passion towards leather, but also our concern towards the environment,a more sustainable future. We do our best to ensure no chemicals are being disposed into nature. Our environmentally friendly policy is one of our greatest strengths.</p>
            </div>
        </div>
    </div>
  )
}

export default QualityCard;