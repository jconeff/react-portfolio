import React from 'react';
import '../../assets/css/footer.css';

function Footer() {
    return (
        <div className='footer'>
            <ul className='icon-row'>
                <li>
                    <a href='https://github.com/jconeff'>
                    <img
                    src={require('../../assets/Social-Media/Octocat.png').default}
                    alt='Github logo'
                    className='github'
                    />
                   </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/jconeff/'>
                    <img
                    src={require('../../assets/Social-Media/LI-In-Bug.png').default}
                    alt='LinkedIn Logo'
                    className='linkedIn'
                    />
                    </a>
                </li>
             
            </ul>
        </div>
    )
}

export default Footer;