import React from "react";
const logo01 = '/img/appStore.png';
const logo02 = '/img/googlePlay.png';
const logo03 = '/img/amazon.png';
const logo04 = '/img/euGdpr.png';

class ContactUs extends React.Component {

    render(){
        return (
            <section className="main background ">
                <div className='grid-wrapper' style={{textAlign: 'center'}}>
                    <div className='col-12' >
                        <h1>We would love to hear from you!</h1>
                        <p>If we‘ve missed a feature you are looking for in <em>BlueMail</em>, or you would like to give us some feedback,<br /> please contact us for any question you may have.</p>
                    </div>
                </div>
                <div className='grid-wrapper' style={{paddingBottom: '40px'}}>
                    <div className='col-3' />
                    <div className='col-3' style={{textAlign: 'center'}}>
                        <a href='mailto:support@bluemail.me'>
                        <div><span className='icon major fa-envelope'></span><br /><span>Contact Corporate</span></div>
                        </a>
                    </div>
                    <div className='col-3' style={{textAlign: 'center'}}>
                        <a href='mailto:corporate@bluemail.me'>
                            <div><span className='icon major fa-question-circle'></span><br /><span>Contact Support</span></div>
                        </a>
                    </div>
                    <div className='col-3' />
                </div>
            </section>
        )
    }
}

export default ContactUs;