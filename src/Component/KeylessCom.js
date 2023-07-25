import React from 'react'
import '../ComStyles/KeylessCom.css'
import Kimg from '../images/company/keyless entry.png'
function KeylessCom() {
  return (
    <>
    <div className="Kheading">
        Keyless entry
        <hr/>
    </div>
    <div className='Kimg'><img src={Kimg}/><p>
    A part of our Aware Home technology system is keyless entry equipment that once installed in the customers home, allows Yozoi app to:</p>
    </div>
    <section className='Kcard'>
        <div>
            <button type="button">1</button><br/>
            Conduct identity test in real-time on the service provider at the doorstep of the customer’s home
        </div>
        
        <div>
            <button type="button">2</button><br/>
            Give keyless entry to the service provide once he/she has passed the test
        </div>
        
        <div>
            <button type="button">3</button><br/>
            This feature is valuable if the customer is not at home or is unable to come to the door.
        </div>
    </section>
    </>
  )
}

export default KeylessCom