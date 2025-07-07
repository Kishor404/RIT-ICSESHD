import React from "react";
import "../styles/Home.css";
import DateImg from "../assets/images/date.jpg";
import VenueImg from "../assets/images/venue.png";
import College2Img from "../assets/images/college2.jpg"

const Home = () => {
  return (
    <div className="home-section">
      <section className="intro">
        <div className="fade-overlay"></div>
        <div className="intro-cont">
          <h1>ICSESHD 2026</h1>
          <p className="conference-subtitle">
            3<sup>rd</sup> International Conference on Smart Engineering Solutions for Sustainable and Humanitarian Development
          </p>
          <p className="highlight">Hybrid Mode | Technically Co-sponsored by IEEE</p>
          <div className="date-box">
            <strong>Date of Conference :</strong> 26<sup>th</sup> - 27<sup>th</sup> June 2026
          </div>
        </div>
      </section>

      <section className="info-panel">
        <div className="info-block">
          <div className="icon-wrap">
            <img src={DateImg} alt="Date Icon" />
          </div>
          <div className="info-text">
            <h3>Date of Conference</h3>
            <p>26<sup>th</sup> - 27<sup>th</sup> June 2026</p>
          </div>
        </div>

        <div className="info-block">
          <div className="icon-wrap">
            <img src={VenueImg} alt="Location Icon" />
        </div>
        <div className="info-text">
          <h3>Venue</h3>
          <p>
          Ramco Institute of Technology,<br />
          Rajapalayam - 626117<br />
          Tamil Nadu, India
          </p>
        </div>
      </div>
    </section>


      <section className="about-container">
        <div className="about-box">
          <h2>| ABOUT ICSESHD 2026 CONFERENCE</h2>
          <p>
            <strong>ICSESHD 2026</strong> is an International Conference on Smart Engineering Solutions for Sustainable and Humanitarian Development.International Conference on Smart Engineering Solutions for Sustainable and Humanitarian
            Development (ICSESHD 26) aims to serve as a premier platform for researchers,
            academicians, industry professionals, and policy-makers to exchange knowledge and explore
            the latest innovations in intelligent, eco-friendly, and digitally integrated manufacturing
            systems. Organized by Ramco Institute of Technology, in collaboration with the IEEE and
            the Photonics Society, this conference reflects a strategic initiative to address the global
            demand for sustainable industrial transformation driven by advanced technologies.
            The conference will focus on emerging trends that combine smart manufacturing, artificial
            intelligence, photonics, data science, cyber-physical systems, and green technologies. It also
            emphasizes the integration of business intelligence and computing to develop agile, resilient,
            and sustainable manufacturing enterprises aligned with the United Nations Sustainable
            Development Goals (UN-SDGs) and Viksit Bharat 2047 vision. Participants will gain
            valuable insights through: Keynote lectures by eminent international and national experts;
            Technical paper presentations and research sessions; Workshops, panel discussions, and
            networking events and Industry-academia collaborations and product demonstrations. The
            conference aspires to promote knowledge dissemination, foster interdisciplinary innovation,
            and strengthen global partnerships to build a future-ready manufacturing ecosystem that is
            both intelligent and sustainable.
          </p>
        </div>

        <div className="about-box">
          <h2>| ABOUT HOST INSTITUTE</h2>
          <p>
            Ramco Institute of Technology (RIT) was established in the year 2013 by the
            esteemed Shri. P. R. Ramasubrahmaneya Rajha, Chairman of the Ramco Group, with a
            visionary goal to impart high-quality engineering education that meets global standards. The
            institution continues its remarkable journey under the dynamic and visionary leadership of
            our present Chairman of RIT Governing Council, Shri. P. R. Venketrama Raja, who upholds
            the legacy of academic excellence and innovation. Strategically located at the foothills of the
            picturesque Western Ghats. The tranquil surroundings offer a conducive environment for
            learning and personal growth. The campus is equipped with state-of-the-art infrastructure and
            world-class facilities that support academic, co-curricular, and research activities. RIT stands
            as a beacon of excellence, nurturing future-ready engineers and innovators committed to
            building a sustainable and intelligent future.
          </p>
          <div className="img-fluid">
            <img src={College2Img} alt="rit-campus"/>
          </div>
          
        </div>
      </section>

      <section className="departments-section">
        <h2>| ABOUT THE DEPARTMENT</h2>
        <div className="department-box">
          <h3>Department of CSBS, ECE and Mechanical Engineering</h3>
            <p>International Conference on Smart Engineering Solutions for Sustainable and
            Humanitarian Development (ICSESHD 26) is collaboratively organized by the Departments
            of Electronics and Communication Engineering (ECE), Mechanical Engineering (MECH),
            and Computer Science and Business Systems (CSBS) of Ramco Institute of Technology
            (RIT), a premier institution committed to academic excellence and technological innovation.
            Our faculty team comprises highly qualified and experienced academicians and
            industry experts, many of whom hold doctorates and have specialized expertise in cutting-
            edge domains such as smart manufacturing, embedded systems, Industry 4.0, AI-driven
            automation, advanced materials, machine learning, industrial IoT, and sustainable computing.
            Their collective efforts in faculty development and research publications have significantly
            contributed to national and international journals, conferences, and funded research
            initiatives.
            RIT hosts state-of-the-art laboratories and dedicated R&amp;D facilities that support
            innovation and advanced experimentation. Key facilities include: Centre for Intelligent
            Manufacturing Systems; Advanced Electronics System Design Lab; AI and Data Analytics
            Lab; Robotics and Mechatronics Lab; Additive Manufacturing Lab and Sustainable Energy
            Research Hub.

            Our departments actively foster a culture of research and professional engagement,
            supported by vibrant student chapters of reputed technical bodies like CSI, ACM, IEEE,
            ISTE, SAEINDIA, ISHRAE, and IE(I). Faculty members regularly mentor student teams for
            technical symposiums, paper presentations, product development challenges, and national-
            level hackathons. This culture of innovation has led to remarkable student outcomes,
            including: Student-led research publications in reputed journals and international
            conferences; Patent and copyrights for novel product designs; Award-winning projects in
            areas such as smart energy management, AI-based diagnostics, and sustainable automation
            solutions.
            Our consistent focus on quality training, industry collaboration, and hands-on learning
            has resulted in excellent placement outcomes. Core sector recruitment has steadily increased,
            with students being placed in leading companies like TCS, CTS, L&amp;T, Renault Nissan, Data
            Pattern, Bosch, TVS, Ramco Cements, Ramco Systems, Infosys, ZOHO, KAAR
            Technologies, EmbedUR, Tessolve Semiconductor and ZF WABCO, with roles in design,
            development, automation, and digital transformation.
           </p>           
        </div>
      </section>
    </div>
  );
};

export default Home;