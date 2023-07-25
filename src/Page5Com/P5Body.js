import React from 'react'
import '../ComStyles/P5Body.css'
import BoxMain from '../images/how yozoi works/how yozoi 1.png'
import BozSub from '../images/how yozoi works/how yozoi.png'

function P5Body() {
    return (
        <div className='P5body'>
            <div className="section1">
                How Yozoi Works
                <hr />
            </div>
            <div className='p5card'>
                <div className='left'>
                    <img src={BoxMain} className="BoxMain" />
                    <img src={BozSub} className='BozSub' />
                </div>
                <div className='right'>
                    <h2>Our vision is “To empower people to fulfill the domiciliary service needs of their societies”</h2>
                    <p>Yozoi mobile app is used by customers to request services and service providers to deliver services. The services are available 24/7 and the app is easy to operate in simple steps as shown below.</p>

                </div>
            </div>
            <section className='P5card2'>
                <div className="section1">
                    Steps to follow
                    <hr />
                </div>
            </section>

        {/* Card 3 */}

            <section className='P5card3'>

                {/* <!-- car1  01 --> */}
                <div class="c3card1" id="c1change">
                    <div class="para" >

                    </div>



                    <div class="ccenter">
                        <div class="left">Step</div>
                        <div class="verLine">
                        </div>
                        <div class="round"></div>
                        <div class="right">01</div>

                    </div>


                    <div class="para">
                        Customers and service providers complete the registration process either on the mobile app or the
                        website. This enables Yozoi to fully understand customer’s requirements and service provider’s
                        capabilities and match service requests with the appropriate service provider. The registration
                        process has embedded technologies for security screening of the registrants.
                    </div>

                </div>

                {/* <!-- CARD 2 02 --> */}
                <div class="c3card1 " id="c2reverse">
                    <div class="para">
                        Customer opens the app, selects a service, and requests delivery either immediately or on a future date and time.
                    </div>



                    <div class="ccenter">
                        <div class="left">Step</div>
                        <div class="verLine">
                        </div>
                        <div class="round"></div>
                        <div class="right">02

                        </div>

                    </div>


                    <div class="para">

                    </div>

                </div>

                {/* <!-- CARD 3 03 --> */}
                <div class="c3card1" id="c3change">
                    <div class="para">
                    </div>



                    <div class="ccenter">
                        <div class="left">Step</div>
                        <div class="verLine">
                        </div>
                        <div class="round"></div>
                        <div class="right">03

                        </div>

                    </div>


                    <div class="para">
                        The customer’s service request becomes visible to the service providers selected by the app. A service provider chooses to confirm that he/she will deliver the service. The customer sees the service provider’s profile and decides whether to accept the service offer or request an alternative.
                    </div>

                </div>

                {/* <!-- CARD 4 04 --> */}
                <div class="c3card1" id="c4reverse" >
                    <div class="para">
                        Once the service is booked, Yozoi app tracks the service providers journey to the customer, entry into the customer’s house, monitors the service’s progress and determines its end.
                    </div>




                    <div class="ccenter">
                        <div class="left">Step</div>
                        <div class="verLine">
                        </div>
                        <div class="round"></div>
                        <div class="right">04

                        </div>

                    </div>


                    <div class="para">
                    </div>

                </div>

                {/* <!-- CARD 5 05 --> */}

                <div class="c3card1" id="c5change">
                    <div class="para">
                    </div>



                    <div class="ccenter">
                        <div class="left">Step</div>
                        <div class="verLine">
                        </div>
                        <div class="round"></div>
                        <div class="right">05

                        </div>

                    </div>


                    <div class="para">The customer and service provider rate each other. Additionally, Yozoi prepares a service report which is saved in the customer account’s database. This can be accessed  providers; however, each modified copy and the original are saved and the original can never be deleted. In this way, Yozoi keeps full provenance and transparency of every service delivered to a customer as well as a record the customer’s wellbeing history.
                    </div>

                </div>

                {/* <!-- CARD 6 06 --> */}
                <div class="c3card1Last">
                    <div class="para">
                        The customer may request installation of service enhancing and personalised technologies in his/her home. For example: keyless entry, movement analytics, life pattern analytics, vital life signs monitoring and other technology systems. These wireless n data analytics and AI technology, Yozoi can automate services provided, documentation and reporting as well as recommending service plans and making interventions to ensure optimum well-being of the customers.
                    </div>



                    <div class="ccenter">
                        <div class="left">Step</div>
                        <div class="verLineLast">
                        </div>
                        <div class="round"></div>
                        <div class="right">06

                        </div>

                    </div>


                    <div class="para">
                    </div>

                </div>

            </section>
            {/* END OF CARD 3  */}
            
        </div>
    )
}

export default P5Body