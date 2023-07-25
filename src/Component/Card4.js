import React from 'react'
import tracking from '../images/company/Service tracking.png'
import '../ComStyles/Card4.css'
import reporting from '../images/company/Reporting.png'
import servicePartner from '../images/company/Service provider ratings.png'
import servicepartnerb from '../images/company/Service provider training.png'
import common from '../images/company/Customer health.png'
import family from '../images/company/Family access.png'
import payment from '../images/company/Payment automation.png'
import personlized from '../images/company/Personalised service plans.png'


function Card4() {
    return (
<>
        <div className="card4Main">
            <div className='subpart'>
                <section className="C4card1">
                    <img src={tracking} /><p className='Imgheading'>Service tracking</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>The Yozoi app can track the presence and movements of the service providers in the customers’ homes. This helps us to assess the effectiveness and duration.
                            <h5>read more</h5> </p>
                    </div>

                </section>
                <section className="C4card1">
                    <img src={personlized} /><p className='Imgheading'>Personalised service plans</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>The customer or family and friends can access the app upon the customer’s permission. The app can be used to develop personalised service plans and payment .
                            <h5>read more</h5> </p>
                    </div>

                </section>
                <section className="C4card1">
                    <img src={common} /><p className='Imgheading'>Customer health</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>Yozoi provides support in real-time for independent living, health insights & early actions to
                        improve wellbeing of senior citizens.
                            <h5>read more</h5> </p>
                    </div>

                </section>

            </div>
            

        </div>
{/* End of 3 Cards */}
        <div className="card4Main">
            <div className='subpart'>
                <section className="C4card1">
                    <img src={family} /><p className='Imgheading'>Family access</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>The customer can give access to his/her account to a proxy who can be a family member or a
                        friend. This enables the proxy to see the service being provided in
                            <h5>read more</h5> </p>
                    </div>

                </section>
                <section className="C4card1">
                    <img src={servicePartner} /><p className='Imgheading'>Service provider rating</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>On delivery of a service, the service provider is given a performance rating by the customer or
                        the customer’s proxy. This rating is used by the Yozoi app
                            <h5>read more</h5> </p>
                    </div>

                </section>
                <section className="C4card1">
                    <img src={servicepartnerb} /><p className='Imgheading'>Service provider training</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>We offer free training to service providers to help them improve their service delivery. The
                        selection of service providers for training is carried out by Yozoi AI based.
                            <h5>read more</h5> </p>
                    </div>

                </section>

            </div>
            

        </div>

{/* END OF 3 Cards */}
        <div className="card4Main" id="lastCard">
            <div className='subpart2'>
                <section className="C4card1">
                    <img src={reporting} /><p className='Imgheading'>Reporting</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>Yozoi app requires post-service reporting by service providers. The app enables service
                        providers to complete service reports in a fast and simple manner.
                            <h5>read more</h5> </p>
                    </div>

                </section>
                <section className="C4card1">
                    <img src={payment} /><p className='Imgheading'>Payment automation</p>
                    <div className='para'>
                        <div>  <hr /></div>
                        <p>A service duration is timed by the Yozoi app and the type of service is also recorded, the
                        customer is billed accordingly and a payment transaction is.
                            <h5>read more</h5> </p>
                    </div>

                </section>

            </div>
            

        </div>
    
    
    
    
    
    
    
    </>
    )
}

export default React.memo(Card4)