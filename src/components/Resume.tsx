import { forwardRef } from 'react';
import './Resume.css';

export const Resume = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="resume-container" ref={ref}>
            <div className="resume-card">
                <div className="sidebar-col">
                    <div className="sidebar-section contact-section">
                        <h3 className="sidebar-title">Contact</h3>
                        <div className="contact-item">
                            <span className="icon">
                                <svg width="14" height="14" viewBox="0 0 24 24">
                                    <path fill="#ef4444" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </span>
                            <span>Tbilisi, Georgia / Rostov, Russia<br />(UTC +4 / +3)</span>

                        </div>
                        <div className="contact-item">
                            <span className="icon">
                                <svg width="14" height="14" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </span>
                            <a href="mailto:glchernenko1@gmail.com">glchernenko1@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="icon">
                                <svg width="14" height="14" viewBox="0 0 24 24">
                                    <path fill="#38bdf8" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </span>
                            <a href="https://t.me/glcher">@glcher</a>
                        </div>
                    </div>

                    <div className="sidebar-section skills-section">
                        <h3 className="sidebar-title">Skills</h3>

                        <div className="skill-group">
                            <h4 className="skill-subtitle">Languages</h4>
                            <div className="tags">
                                <span>Python</span>
                                <span>Go</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4 className="skill-subtitle">Frameworks</h4>
                            <div className="tags">
                                <span>FastAPI</span>
                                <span>SQLAlchemy</span>
                                <span>PyTorch</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4 className="skill-subtitle">Libraries & Tools</h4>
                            <div className="tags">
                                <span>Pandas</span>
                                <span>Faiss</span>
                                <span>NumPy</span>
                                <span>Scikit-learn</span>
                                <span>OpenCV</span>
                                <span>Tesseract</span>
                                <span>Hugging Face</span>
                                <span>ML/DL libraries</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4 className="skill-subtitle">Databases</h4>
                            <div className="tags">
                                <span>PostgreSQL</span>
                                <span>Redis</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4 className="skill-subtitle">DevOps</h4>
                            <div className="tags">
                                <span>Docker</span>
                                <span>Linux</span>
                                <span>Oracle Cloud</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4 className="skill-subtitle">Other</h4>
                            <div className="tags">
                                <span>Reverse engineering</span>
                                <span>API integrations</span>
                                <span>Data Engineering</span>
                                <span>Data analysis</span>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-section education-section">
                        <h3 className="sidebar-title">Education</h3>

                        <div className="edu-block">
                            <div className="edu-degree">M.Sc. Fundamental Informatics</div>
                            <div className="edu-place">Southern Federal University</div>
                            <div className="edu-date">2021 – 2024</div>
                            <div className="edu-distinction" style={{ color: '#60a5fa', fontSize: '11px', fontStyle: 'italic' }}>With Distinction</div>
                            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px', lineHeight: '1.2' }}>
                                (Erasmus+ MAGnUS program: Mobile Application and Game Development)
                            </div>
                        </div>

                        <div className="edu-block">
                            <div className="edu-degree">B.Sc. Applied Math & CS</div>
                            <div className="edu-place">Southern Federal University</div>
                            <div className="edu-date">2016 – 2021</div>
                        </div>
                    </div>

                    <div className="sidebar-section interests-section">
                        <h3 className="sidebar-title">Interests</h3>
                        <div className="tags">
                            <span>Hiking</span>
                            <span>Tennis</span>
                            <span>Chess</span>
                            <span>3D Printing</span>
                        </div>
                    </div>
                </div>

                <div className="main-col">
                    <header className="main-header">
                        <h1 className="name">Gleb Chernenko</h1>
                        <h2 className="title">Backend & ML Developer</h2>
                        <p className="profile-text">
                            Experienced developer specializing in computer vision, NLP, LLMs, and AI-driven services, with strong understanding of classical ML and modern deep learning models. Skilled in integrating APIs and applying ML models in production. Focused on RAG pipelines, CV, and NLP tasks. Open to remote work and relocation opportunities.
                        </p>
                    </header>

                    <section className="main-section">
                        <h3 className="section-title">Professional Experience</h3>

                        <div className="job-item">
                            <div className="job-head">
                                <h4 className="company">Cancun_Live_CH</h4>
                                <span className="dates">May 2022 – present</span>
                            </div>
                            <div className="role">ML / Backend Developer</div>
                            <ul className="job-list">
                                <li>Developed a comprehensive system for recognizing and structuring data from Mexican bank cheques, combining OCR, layout analysis, and adaptive algorithms for different bank formats.</li>
                                <li>Built post-processing and validation mechanisms to correct OCR errors and ensure high accuracy for critical fields such as amounts, dates, and account numbers.</li>
                                <li>Prompt engineering</li>
                                <li>Designed and deployed a RAG pipeline for an internal AI assistant, helping staff process US visa applications using documents provided by the client.</li>
                                <li>Reverse engineered APIs of the Central Bank of Mexico, Binance, and Bybit to track payment statuses and collect USDT market data across currencies.</li>
                                <li>Developed tools for analyzing the cryptocurrency financial market, including real-time data collection, filtering, and aggregation.</li>
                                <li>Conducted fine-tuning of OpenAI and other models.</li>
                                <li>Ensured reliable deployment and operation of services.</li>
                            </ul>
                        </div>

                        <div className="job-item">
                            <div className="job-head">
                                <h4 className="company">NDA</h4>
                                <span className="dates">October 2021 – March 2022</span>
                            </div>
                            <div className="role">ML / Backend Developer</div>
                            <ul className="job-list">
                                <li>Developed an intelligent text auto-completion system based on transformer models.</li>
                                <li>Performed text classification, improving prediction accuracy by 10% (Accuracy metric) across different news categories.</li>
                                <li>Conducted text clustering using FAISS to accelerate processing of large datasets.</li>
                                <li>Migrated from a NoSQL database to PostgreSQL to optimize storage and processing of text data.</li>
                                <li>Developed REST APIs for integrating and loading texts from external sources.</li>
                            </ul>
                        </div>

                        <div className="job-item">
                            <div className="job-head">
                                <h4 className="company">BrightLab</h4>
                                <span className="dates">March 2021 – September 2021</span>
                            </div>
                            <div className="role">ML / Backend Developer</div>
                            <ul className="job-list">
                                <li>Developed a bot for automated likes and dating on Tinder, using computer vision to analyze profiles.</li>
                                <li>Performed image and text classification to identify interesting profiles and optimize interactions.</li>
                                <li>Applied CV and ML techniques to analyze images and predict user interest.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="main-section" id="academic-section">
                        <h3 className="section-title">Academic Achievements</h3>

                        <div className="project-item">
                            <h4 className="project-title">VR Vision Recovery App (M.Sc. Thesis)</h4>
                            <p>Implemented a VR training application in Unity simulating exercises for restoring synchronized eye work, using gaze tracking and configurable depth parameters.</p>
                        </div>

                        <div className="project-item">
                            <h4 className="project-title">Video Super-Resolution Service (B.Sc. Thesis)</h4>
                            <p>Developed a GAN-based service for intelligent video upscaling, automatically selecting optimal models based on quality metrics.</p>
                        </div>
                    </section>

                    <section className="main-section">
                        <h3 className="section-title">Pet Projects</h3>

                        <div className="project-item">
                            <h4 className="project-title">WSL Port Forwarding Tool (Go)</h4>
                            <p>Tool for forwarding SSH ports directly to WSL, bypassing Windows.</p>
                        </div>

                        <div className="project-item">
                            <h4 className="project-title">WSL Monitor (Go)</h4>
                            <p>Utility for monitoring WSL state and controlling it from the system tray/status bar.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
});
