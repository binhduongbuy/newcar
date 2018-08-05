import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
            <div className='grid-wrapper'>
                <div className='col-4'>
                    <h4>Follow us</h4>
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/BlueMailApp/" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://plus.google.com/communities/113334614898050229791" target="_blank" className="icon alt fa-google"><span className="label">google</span></a></li>
                        <li><a href="https://www.linkedin.com/company/bluemail" target="_blank" className="icon alt fa-linkedin"><span className="label">linkedin</span></a></li>
                        <li><a href="https://www.pinterest.com/bluemail0413/" target="_blank" className="icon alt fa-pinterest-p"><span className="label">printerest</span></a></li>
                        <li><a href="https://twitter.com/BlueMail" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.youtube.com/c/BlueMailInc" target="_blank" className="icon alt fa-youtube"><span className="label">youtube</span></a></li>                   
                        <li><a href="https://www.instagram.com/bluemailme/" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h4>Blog</h4>
                    <ul className='styled-list'>
                        <li><a href=''>One Tap to Unsubscribe</a></li>
                        <li><a href=''>Clusters by BlueMail</a></li>
                        <li><a href=''>BlueMail to announce a secured solution for Android devices</a></li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h4>Help Center</h4>
                    <ul className='styled-list'>
                        <li><a href='https://bluemail.help/'>Android Tips</a></li>
                        <li><a href='https://bluemail.help/'>IOS Tips</a></li>
                    </ul>
                </div>
            </div>
                <ul className="copyright">
                    <li>&copy; 2018 Blue Mail Inc </li><li><a href="https://bluemail.me/tos/">Terms of Service</a></li><li><a href="https://bluemail.me/privacy/">Privacy</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
