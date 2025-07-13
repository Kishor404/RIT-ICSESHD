import "../styles/CallForPapers.css";

function CallForPapers() {
    return (
        <div className="call-for-papers">
            <h2>CALL FOR PAPERS</h2>
            <section className="call-for-papers-cont">
                <div className="cfp-para">
                    <p><span>T</span>he organizing committee of the conference invites papers from research scholars, faculty members, and students of various institutions and professionals from the industry. Topics of interest include, but are not limited to,</p>
                </div>
                <div className="cfp-all-track">
                    <div className="cfp-track">
                        <h4>TRACK 1 : Smart Manufacturing & Automation</h4>
                        <ul>
                            <li>Smart automation for Industry 4.0</li>
                            <li>Smart Manufacturing Systems </li>
                            <li>Industrial Robotics & Control Systems</li>
                            <li>Design and Product Development</li>
                            <li>Sustainable Packaging </li>
                            <li>Additive Manufacturing </li>
                        </ul>
                    </div>
                    <div className="cfp-track">
                        <h4>TRACK 2 : Sustainable Energy & Green Technologies for Industry </h4>
                        <ul>
                            <li>Renewable Energy Technologies </li>
                            <li>Energy Storage Systems </li>
                            <li>Recent advancement in agriculture</li>
                            <li>Circular Economy Systems </li>
                            <li>Green & Bio Manufacturing </li>
                            <li>Trends in zero carbon initiatives </li>
                        </ul>
                    </div>
                    <div className="cfp-track">
                        <h4>TRACK 3 : Digital Transformation & Skill Development in Manufacturing </h4>
                        <ul>
                            <li>Cybersecurity in Digitally Transformed Manufacturing Ecosystems </li>
                            <li>AI/ML and Cloud Applications in Industrial Contexts </li>
                            <li>Augmented/ Virtual Reality for Industrial Environment </li>
                            <li>IoT & Cloud Computing for academics and industries </li>
                            <li>Process Optimization for Industrial aspects </li>
                            <li>Digital Supply Chains for Logistics </li>
                        </ul>
                    </div>
                    <div className="cfp-track">
                        <h4>TRACK 4 : Business Systems & Industrial Transformation </h4>
                        <ul>
                            <li>Smart ERP & Industrial Decision Support Systems </li>
                            <li>Quantum Computing in Manufacturing </li>
                            <li>Agentic AI Systems</li>
                            <li>Industrial IoT & 5G Integration </li>
                            <li>Digital Twin & Blockchain for Manufacturing </li>
                            <li>Human-Machine Interaction & Cobots  </li>
                        </ul>
                    </div>
                    <div className="cfp-track">
                        <h4>TRACK 5 : Global Sustainability & High-Tech Manufacturing</h4>
                        <ul>
                            <li>Smart Materials & Nanotechnology </li>
                            <li>Green Factory Architectures </li>
                            <li>Green Supply Chains </li>
                            <li>Green Manufacturing Ecosystems </li>
                            <li>Career Waste Management Technologies </li>
                            <li>AI for Industrial Safety & Quality  </li>
                        </ul>
                    </div>
                </div>
                <div className="gta-cont">
                    <h3>GUIDELINES TO AUTHORS</h3>
                    <p>We invite the submission of articles presenting novel and unpublished results in the form of conceptual, creative, experimental, or theoretical work within the topic areas outlined in the Call for Papers. Authors are encouraged to submit their original manuscripts following the IEEE Conference Format. Please refer to the guidelines and submit your paper using the following link: <a href="https://cmt3.research.microsoft.com/ICSESHD2026">https://cmt3.research.microsoft.com/ICSESHD2026</a>.</p>
                    <p>All submissions will undergo a double-blind peer review process. The assessment will consider relevance, research methodology, ethical standards, language quality, results presentation, technical proficiency, formatting, and other criteria. Submissions will be screened for plagiarism and similarity. Based on the reviewers' recommendations and careful consideration by the Program Committee Chair, manuscripts will be shortlisted for presentation at the conference. Authors will be notified of the acceptance decision. Shortlisted authors must submit a camera-ready copy in the required format, incorporating all reviewer suggestions.</p>
                </div>
            </section>
            <a href="https://www.internationalconf.org/submit-paper/" className="cfp-submit">Submit Your Paper</a>
        </div>
    );
}

export default CallForPapers;