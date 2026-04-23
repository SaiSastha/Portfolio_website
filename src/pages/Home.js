import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// ─── Personal Data ─────────────────────────────────────────────────────────────
// 🔧 EDIT THIS SECTION with your real details
const PERSONAL = {
  name: 'Sai Sastha',
  fullName: 'Pentapalli PVG Sai Sastha',
  phone: '+91 9063711347',
  personalEmail: 'saisasthaoff@gmail.com',
  collegeEmail: 'se23ucse141@mahindrauniversity.edu.in',
  role: 'CSE Student',
  college: 'Mahindra University',
  bio: (
    <>
      I'm a passionate <strong>Computer Science student</strong> who loves building
      things from scratch. I enjoy exploring the intersection of{' '}
      <strong>systems programming, networking, and AI</strong>. Always curious,
      always learning.
    </>
  ),
  skills: [
    'C',
    'Python',
    'React',
    'Node.js',
    'MATLAB',
    'Linux',
    'Git & GitHub',
    'HTML & CSS',
    'JavaScript',
    'Data Structures',
    'SQL',
  ],
};

const RESEARCH_INTERESTS = [
  {
    icon: '🧠',
    title: 'Artificial Intelligence',
    description: 'Machine learning, neural networks, and intelligent systems that learn from data.',
  },
  {
    icon: '🌐',
    title: 'Computer Networking',
    description: 'Network protocols, socket programming, and distributed communication systems.',
  },
  {
    icon: '⚙️',
    title: 'Systems Programming',
    description: 'Low-level programming, OS concepts, memory management, and performance optimization.',
  },
];
// ───────────────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__inner">
          {/* Left */}
          <div className="hero__text">
            <p className="hero__eyebrow">Hello, world</p>
            <h1 className="hero__title">
              I'm{' '}
              <span className="hero__title-accent">{PERSONAL.name}</span>
            </h1>
            <p className="hero__subtitle">
              {PERSONAL.role} · {PERSONAL.college}
            </p>
            <p className="hero__bio">{PERSONAL.bio}</p>
            <div className="hero__actions">
              <Link to="/projects" className="btn-primary">
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href={`mailto:${PERSONAL.personalEmail}`} className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-card">
              <div className="hero__avatar-frame">
                {
                  <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt={PERSONAL.name} />
                  //this is the line if i ever want to put an image in the future//
                }
                {/* <span className="hero__avatar-initials">
                  {PERSONAL.name.slice(0, 3).toUpperCase()}
                </span> */}
              </div>
              <div className="hero__status-badge">
                <span className="hero__status-dot"></span>
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONAL DETAILS ── */}
      <section className="details-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">01</span>
            <h2 className="section-title">Personal Details</h2>
            <div className="section-line"></div>
          </div>

          <div className="details-grid">
            {[
              { label: 'Full Name',      value: PERSONAL.fullName },
              { label: 'Phone',          value: PERSONAL.phone },
              { label: 'Personal Email', value: PERSONAL.personalEmail },
              { label: 'College Email',  value: PERSONAL.collegeEmail },
              { label: 'College',        value: PERSONAL.college },
              { label: 'Role',           value: PERSONAL.role },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className="detail-item"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className="detail-item__label">{label}</span>
                <span className="detail-item__value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">02</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-list">
            {PERSONAL.skills.map((skill, i) => (
              <span
                key={skill}
                className="skill-tag"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="research-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">03</span>
            <h2 className="section-title">Research Interests</h2>
            <div className="section-line"></div>
          </div>
          <div className="research-grid">
            {RESEARCH_INTERESTS.map((item, i) => (
              <div
                key={item.title}
                className="research-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="research-card__icon">{item.icon}</div>
                <div className="research-card__content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
