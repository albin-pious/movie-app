import React from 'react'
import './LastContainer.css'

function LastContainer() {
  return (
    <div className='footer'>
        <div className="foot-start-txt">
            <p>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</p>
        </div>
        <h4>Questions? Contact us.</h4>
        <div className="foot-row">
            <div className="col">
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>Media Centre</li>
                    <li>Terms to Use</li>
                    <li>Contact US</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default LastContainer