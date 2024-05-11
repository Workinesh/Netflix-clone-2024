import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-outer-container'>
     <div className='footer-inner-container'>
        <div className='footer-icons'>
            <FacebookOutlinedIcon/>
            <InstagramIcon />
            <YouTubeIcon />

        </div>
        <div className='foter-data'>
            <div>
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help center</li>
                    <li>Jobs</li>
                    <li>Cookie performance</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Media center</li>
                    <li>Privacy</li>
                    <li>Contact use</li>
                </ul>
            </div>
            <div className='service-code'>
                <p>
                    service-code
                </p>

            </div>
            <di className='copy-wright'>
                &copy;1997-2024 Netflix,Inc.

            </di>
        </div>

     </div>
    </div>
  )
}

export default Footer
