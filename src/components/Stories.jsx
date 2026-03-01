import React from "react";

export default function Stories() {
  return (
    <section className="section stories" id="stories">
      <div className="container">
        <h2>Stories of Struggle</h2>
        <p>
          Empirical research and lived experiences reveal the human faces behind
          educational inequality. These narratives ground abstract policy in
          concrete reality—transforming how we understand the fight for
          equitable schooling.
        </p>

        <div className="story" style={{ marginTop: "2rem" }}>
          <h3>🌟 Story 1: From Child Labour to Classroom Success</h3>
          <strong>Theme:</strong> Rescue, Bridge Schooling, Mainstream Education
          <p>
            In rural Andhra Pradesh, many children once worked in farms, brick
            kilns, and households instead of attending school. Through community
            mobilization and bridge camps run by MV Foundation, thousands of
            children were withdrawn from labour and enrolled in schools.
          </p>
          <ul>
            <li>Over 600,000 child labourers were withdrawn from work.</li>
            <li>
              Many were mainstreamed into formal education and retained in
              schools.
            </li>
          </ul>
          <p>
            <strong>Impact:</strong>
          </p>
          <ul className="impact-list">
            <li>Children gained literacy and confidence</li>
            <li>Families began valuing education over child labour</li>
            <li>Villages declared “child-labour-free”</li>
          </ul>
        </div>

        <div className="story" style={{ marginTop: "2rem" }}>
          <h3>🌟 Story 2: A Survivor Who Became a Child Rights Advocate</h3>
          <strong>Related Example:</strong> Anoyara Khatun
          <p>
            Born into poverty in West Bengal, Anoyara was trafficked to Delhi
            and forced into domestic work as a child. She escaped and returned
            to her village, where she began campaigning against child
            trafficking, child labour, and child marriage.
          </p>
          <p>
            <strong>Impact:</strong>
          </p>
          <ul className="impact-list">
            <li>Helped rescue vulnerable children</li>
            <li>Raised awareness about trafficking and child marriage</li>
            <li>Received the Nari Shakti Puraskar for her work</li>
          </ul>
        </div>

        <div className="story-video">
          <h3>🎬 Documentary: The Battle for Schools</h3>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/pRpG86XBAtM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="The Battle for Schools Documentary"
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
}
