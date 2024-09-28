import React from 'react';
import './Tips.css'; // Optional: Add CSS file for styling
import Footer from "../../Components/Footer/Footer"; 

const Tips = () => {
  return (
    <div className="tips-container">
      <h1>Professional Resume Building Tips</h1>
      
      <section className="tip-section">
        <h2>1. Tailor Your Resume for the Job</h2>
        <p>Customize your resume to highlight the skills and experience most relevant to the job you're applying for. This shows employers you’re a good fit for their role.</p>
      </section>
      
      <section className="tip-section">
        <h2>2. Keep It Simple and Professional</h2>
        <p>Use a clean layout and font. Avoid unnecessary graphics or overly decorative fonts. Stick to professional styles and formats.</p>
      </section>
      
      <section className="tip-section">
        <h2>3. Highlight Key Skills and Achievements</h2>
        <p>Focus on your achievements and measurable outcomes rather than just listing duties. Use numbers where possible to quantify your success (e.g., "Increased sales by 20%").</p>
      </section>

      <section className="tip-section">
        <h2>4. Use Strong Action Verbs</h2>
        <p>Use powerful verbs like "led", "achieved", "improved", and "managed" to convey your experience more impactfully. Avoid weak phrases like "was responsible for."</p>
      </section>

      <section className="tip-section">
        <h2>5. Proofread and Edit Thoroughly</h2>
        <p>Typos or grammatical mistakes can leave a bad impression. Ensure your resume is error-free by proofreading it carefully and having someone else review it as well.</p>
      </section>

      <section className="tip-section">
        <h2>6. Focus on Relevant Experience</h2>
        <p>List the most relevant experience first. If you're changing careers, highlight transferable skills and downplay experience that isn’t relevant.</p>
      </section>

      <section className="tip-section">
        <h2>7. Keep It Short and Concise</h2>
        <p>Your resume should ideally be one page (two pages if you have extensive experience). Be concise and to the point, focusing on essential details.</p>
      </section>

      <section className="tip-section">
        <h2>8. Include Keywords from the Job Posting</h2>
        <p>Many companies use Applicant Tracking Systems (ATS) to filter resumes. Incorporate keywords from the job description to increase the chances of your resume getting through.</p>
      </section>
      
    </div>
    
  );
  
}
<Footer />

export default Tips;
