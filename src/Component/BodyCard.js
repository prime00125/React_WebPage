import React from 'react'
import '../ComStyles/BodyCard.css'
import Card from './Card'
import Card2 from '../Component/Card2'
import techImg from '../images/company/our technology.png'
import techlogo from '../images/company/technology icon.svg'
import arrow2 from '../images/company/arrow 2.png'
import aiImg from '../images/company/ai.png'
import ailogo from '../images/company/ai icon.svg'
import securityImg from '../images/company/safety-1.png'
import securityLogo from '../images/company/safety icon.svg'
import arrow from '../images/company/arrow 1.png'
import KeylessCom from './KeylessCom'
import Card4 from './Card4'
import Card3 from '../Component/Card3'



function BodyCard() {
  return (
<div className='BodyCardbody'>
<div className="section1">
        What we Do ?
        <hr />
      </div>
     

      {/* CARD 1 */}
      <Card content={"Yozoi’s services model is based on a mobile applications platform comprising a deep technology back-end working in tandem with a human front-end. We believe that such a hybrid model can fulfil the domiciliary support services needs of aging societies.We are continuously improving and developing our mobile applications platform in line with the latest developments in sensors, IoT, big data and artificial intelligence technology. The current key features of the Yozoi platform are described .below"}
        heading={"Our Technology"} img1={techImg} logo={techlogo} arrow={arrow} />
      {/* END OF CARD 1 */}
      <Card2 content={"Yozoi mobile app platform is where service transactions are initiated, monitored, delivered and payments processed. The app has the capability to continuously collect data using a combination of methods such as smart phone sensors, service provider reporting and customised sensor technologies installed in the customer’s to what we call an Aware Home envirand wellbeing issues. The predictive AI provides opportunities for early interventions for optimal wellbeing of customers and prevention of health and wellbeing emergencies."}
        heading={"AI driven mobile app"} img1={aiImg} logo={ailogo} arrow={arrow2} />
      {/* END OF CARD 2 */}
      <Card3 content={"Yozoi app compares service providers face pictures in real-time against national identity documents such as passports to verify identity. Next, the app verifies residential addresses against utility bills and bank account statements. The app also checks national databases for any criminal history, for example in UK, we check DBS certificates, criminal convictions and credit rating, will have their membership cancelled. By applying such stringent procedures, we ensure that customers and service providers can operate in a safe and secure manner."}
        heading={"Safety & security"} img1={securityImg} logo={securityLogo} />

      {/* END OF CARD 3 */}
      <KeylessCom />
      <Card4 />
      </div>
  )
}

export default BodyCard