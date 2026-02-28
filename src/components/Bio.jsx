import React from 'react'
import profileImage from '../assets/shantha.jpg' // ensure you place an image here or change the path

export default function Bio() {
  return (
    <section className="section" id="bio">
      <h2>Bio Note of Prof. Shantha Sinha</h2>
      <img
        src={profileImage}
        alt="Prof. Shantha Sinha"
        className="profile"
      />
      <p>
        Prof. Shantha Sinha is a noted child‑rights activist and educator. She was
        the first Chairperson of the National Commission for Protection of
        Child Rights, founder of Mahita Village Foundation and a 2003 Ramon
        Magsaysay Awardee.
      </p>
      <ul>
        <li>Child Rights Commissioner, Government of India</li>
        <li>Founder – MVF (Mahita Village Foundation)</li>
        <li>Awards: Ramon Magsaysay Award, etc.</li>
      </ul>
    </section>
  )
}
