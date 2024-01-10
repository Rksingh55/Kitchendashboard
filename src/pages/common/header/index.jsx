import React from 'react'

function index({ heading }) {
    return (
        <div className='h-[170px] mt-[80px] flex items-center ' style={{ background: 'linear-gradient(10deg, #4c1d92, black, #4c1d82)' }}>
            <h4 className='text-4xl  text-white px-6 py-3 ml-12 '>
                {heading}
            </h4>
        </div>



    )
}

export default index