import React from 'react'
import ReactDom from 'react-dom'
import './List.css'

function List({open,close}) {
   if(!open) return null
        return ReactDom.createPortal(
           
        <div className='ListBody'>
            <select>
                <option>Company</option>
            </select>
            <a>Safety</a>
            <a>Services</a>
            <a>Log in</a>
            <button type="button">Sign up</button>
            <a onClick={close}>Close</a>
        </div>,
        document.getElementById('L')
    )
}

export default React.memo(List)