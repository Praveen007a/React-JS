import React from 'react'

export const QR = () => {
  return (
    <>
        <div className='cont'>
            <label htmlFor="dataInput" className='inp-lab'>
                Data for QR  Code:
            </label>
            <input type="text" id='dataInput' placeholder='Enter URL...'/>
            <label htmlFor="dataInput" className='inp-lab'>
                Image size (e.g., 150):
            </label>
            <input type="text" id='image-inp' placeholder='Enter image size...'/>
        </div>
    </>
  )
}
