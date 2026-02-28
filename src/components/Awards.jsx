import React from 'react'
import awardImage from '../assets/National-Bravery-Awards-2013-300x200.jpg'
import awardImage1998 from '../assets/Award-1998.jpg'

export default function Awards() {
  return (
    <section className="section awards" id="awards">
      <div className="container">
        <h2>Awards & Honours</h2>
        
        <div className="awards-content">
          <div className="awards-images-vertical">
            <img src={awardImage} alt="National Bravery Awards" className="award-img-large" />
            <img src={awardImage1998} alt="Award 1998" className="award-img-large" />
          </div>
          
          <div className="awards-list">
            <h3>🏅 Major National & International Awards</h3>
            <ul className="honors-list">
              <li>
                <span className="award-title">Ramon Magsaysay Award</span>
                <span className="award-desc">For community leadership in ending child labour</span>
              </li>
              <li>
                <span className="award-title">Padma Shri</span>
                <span className="award-desc">Government of India civilian award</span>
              </li>
              <li>
                <span className="award-title">Albert Shanker International Award (1999)</span>
                <span className="award-desc">Recognition of excellence in child rights advocacy</span>
              </li>
              <li>
                <span className="award-title">Rotary India Award</span>
                <span className="award-desc">For elimination of child labour</span>
              </li>
              {/* <li>
                <span className="award-title">Goldene Feder Award (Germany)</span>
                <span className="award-desc">International recognition for social impact</span>
              </li> */}
              {/* <li>
                <span className="award-title">Hyderabad Women of the Decade Achievers Award</span>
                <span className="award-desc">For exceptional contributions to society</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
