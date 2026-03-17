import { Page, Text, View, Document, StyleSheet, Link, Svg, Path, Circle } from '@react-pdf/renderer';

// Register fonts if needed, or use default Helvetica
// Font.register({ family: 'Open Sans', src: '...' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    sidebar: {
        width: '32%',
        backgroundColor: '#1e293b',
        color: '#f1f5f9',
        padding: 20,
        height: '100%',
    },
    main: {
        width: '68%',
        padding: 30,
        height: '100%',
    },
    sidebarSection: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    sidebarTitle: {
        fontSize: 10,
        textTransform: 'uppercase',
        color: '#94a3b8',
        borderBottomWidth: 1,
        borderBottomColor: '#334155',
        paddingBottom: 4,
        marginBottom: 8,
        letterSpacing: 1,
        fontWeight: 'bold', // Helvetica bold
    },
    contactItem: {
        fontSize: 9,
        flexDirection: 'row',
        alignItems: 'flex-start', // Use flex-start for multiline text alignment
        marginBottom: 8,
        color: '#f1f5f9',
        minHeight: 12,
    },
    contactIconView: {
        width: 14,
        height: 14,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0, // Fine tune vertical position relative to text cap height
    },
    contactText: {
        flex: 1,
        lineHeight: 1.4,
        marginTop: 1, // Visual offset to align with icon center
    },
    link: {
        color: '#f1f5f9',
        textDecoration: 'none',
    },
    skillSubtitle: {
        fontSize: 9,
        textTransform: 'uppercase',
        color: '#cbd5e1',
        marginTop: 6,
        marginBottom: 3,
        fontWeight: 'bold',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    tag: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 8,
        color: '#e2e8f0',
        marginBottom: 4,
        marginRight: 4,
    },
    eduBlock: {
        marginBottom: 10,
    },
    eduDegree: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    eduPlace: {
        fontSize: 9,
        color: '#cbd5e1',
        marginTop: 1,
    },
    eduDate: {
        fontSize: 8,
        color: '#94a3b8',
        marginTop: 1,
    },
    eduDistinction: {
        fontSize: 8,
        color: '#60a5fa',
        fontStyle: 'italic', // Helvetica-Oblique
        marginTop: 1,
    },
    eduNote: {
        fontSize: 8,
        color: '#94a3b8',
        marginTop: 1,
        lineHeight: 1.2,
    },
    // Main Content Styles
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0f172a',
        marginBottom: 4,
        textTransform: 'none',
    },
    title: {
        fontSize: 14,
        color: '#3b82f6',
        textTransform: 'uppercase',
        marginBottom: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    profileText: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#334155',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0f172a',
        textTransform: 'uppercase',
        borderBottomWidth: 2,
        borderBottomColor: '#e2e8f0',
        paddingBottom: 5,
        marginBottom: 12,
        marginTop: 15,
        letterSpacing: 1,
    },
    jobItem: {
        marginBottom: 15,
    },
    jobHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 2,
    },
    company: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    dates: {
        fontSize: 9,
        color: '#64748b',
    },
    role: {
        fontSize: 10,
        color: '#3b82f6',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    jobList: {
        marginLeft: 0,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    bullet: {
        width: 10,
        fontSize: 10,
        color: '#475569',
    },
    bulletText: {
        flex: 1,
        fontSize: 10,
        lineHeight: 1.4,
        color: '#475569',
    },
    projectItem: {
        marginBottom: 10,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 2,
    },
    projectText: {
        fontSize: 10,
        lineHeight: 1.4,
        color: '#475569',
    },
});

export const ResumePDF = () => (
    <Document>
        {/* PAGE 1 */}
        <Page size="A4" style={styles.page}>
            {/* Sidebar Page 1 */}
            <View style={styles.sidebar}>
                {/* Contact */}
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Contact</Text>

                    {/* Location: Red Pin */}
                    <View style={styles.contactItem}>
                        <View style={styles.contactIconView}>
                            {/* Cleaner Red Pin */}
                            <Svg width={14} height={14} viewBox="0 0 24 24">
                                <Path fill="#ef4444" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                <Circle cx="12" cy="9" r="2.5" fill="#7f1d1d" fillOpacity={0.4} />
                            </Svg>
                        </View>
                        {/* Manually break lines to avoid ugly hyphenation */}
                        <Text style={[styles.contactText, { flex: 1 }]}>
                            Tbilisi, Georgia /{"\n"}
                            Rostov, Russia{"\n"}
                            (UTC +4 / +3)
                        </Text>
                    </View>

                    {/* Email: White Envelope */}
                    <View style={styles.contactItem}>
                        <View style={styles.contactIconView}>
                            <Svg width={14} height={14} viewBox="0 0 24 24">
                                <Path fill="#ffffff" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </Svg>
                        </View>
                        <Text style={styles.contactText}>
                            <Link src="mailto:glchernenko1@gmail.com" style={styles.link}>glchernenko1@gmail.com</Link>
                        </Text>
                    </View>

                    {/* Telegram: Blue Plane */}
                    <View style={styles.contactItem}>
                        <View style={styles.contactIconView}>
                            <Svg width={14} height={14} viewBox="0 0 24 24">
                                <Path fill="#38bdf8" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </Svg>
                        </View>
                        <Text style={styles.contactText}>
                            <Link src="https://t.me/glcher" style={styles.link}>@glcher</Link>
                        </Text>
                    </View>
                </View>

                {/* Skills */}
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Skills</Text>

                    <Text style={styles.skillSubtitle}>Languages</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>Python</Text><Text style={styles.tag}>Go</Text>
                    </View>

                    <Text style={styles.skillSubtitle}>Frameworks</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>FastAPI</Text><Text style={styles.tag}>SQLAlchemy</Text><Text style={styles.tag}>PyTorch</Text>
                    </View>

                    <Text style={styles.skillSubtitle}>Libraries & Tools</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>Pandas</Text><Text style={styles.tag}>Faiss</Text><Text style={styles.tag}>NumPy</Text>
                        <Text style={styles.tag}>Scikit-learn</Text><Text style={styles.tag}>OpenCV</Text>
                        <Text style={styles.tag}>Tesseract</Text><Text style={styles.tag}>Hugging Face</Text>
                        <Text style={styles.tag}>ML/DL libraries</Text>
                    </View>

                    <Text style={styles.skillSubtitle}>Databases</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>PostgreSQL</Text><Text style={styles.tag}>Redis</Text>
                    </View>

                    <Text style={styles.skillSubtitle}>DevOps</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>Docker</Text><Text style={styles.tag}>Linux</Text><Text style={styles.tag}>Oracle Cloud</Text>
                    </View>

                    <Text style={styles.skillSubtitle}>Other</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>Reverse engineering</Text><Text style={styles.tag}>API integrations</Text>
                        <Text style={styles.tag}>Data Engineering</Text><Text style={styles.tag}>Data analysis</Text>
                    </View>
                </View>

                {/* Education */}
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Education</Text>
                    <View style={styles.eduBlock}>
                        <Text style={styles.eduDegree}>M.Sc. Fundamental Informatics</Text>
                        <Text style={styles.eduPlace}>Southern Federal University</Text>
                        <Text style={styles.eduDate}>2021 – 2024</Text>
                        <Text style={styles.eduDistinction}>With Distinction</Text>
                        <Text style={styles.eduNote}>(Erasmus+ MAGnUS program: Mobile {"\n"}Application and Game Development)</Text>
                    </View>
                    <View style={styles.eduBlock}>
                        <Text style={styles.eduDegree}>B.Sc. Applied Math & CS</Text>
                        <Text style={styles.eduPlace}>Southern Federal University</Text>
                        <Text style={styles.eduDate}>2016 – 2021</Text>
                    </View>
                </View>
            </View>

            {/* Main Page 1 */}
            <View style={styles.main}>
                {/* Header */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.name}>Gleb Chernenko</Text>
                    <Text style={styles.title}>Backend & ML Developer</Text>
                    <Text style={styles.profileText}>
                        Experienced developer specializing in computer vision, NLP, LLMs, and AI-driven services, with strong understanding of classical ML and modern deep learning models. Skilled in integrating APIs and applying ML models in production. Focused on RAG pipelines, CV, and NLP tasks. Open to remote work and relocation opportunities.
                    </Text>
                </View>

                {/* Professional Experience */}
                <Text style={[styles.sectionTitle, { marginTop: 0 }]}>Professional Experience</Text>

                {/* Cancun_Live_CH */}
                <View style={styles.jobItem}>
                    <View style={styles.jobHead}>
                        <Text style={styles.company}>Cancun_Live_CH</Text>
                        <Text style={styles.dates}>May 2022 – present</Text>
                    </View>
                    <Text style={styles.role}>ML / Backend Developer</Text>
                    <View style={styles.jobList}>
                        {[
                            "Developed a comprehensive system for recognizing and structuring data from Mexican bank cheques, combining OCR, layout analysis, and adaptive algorithms for different bank formats.",
                            "Built post-processing and validation mechanisms to correct OCR errors and ensure high accuracy for critical fields such as amounts, dates, and account numbers.",
                            "Prompt engineering",
                            "Designed and deployed a RAG pipeline for an internal AI assistant, helping staff process US visa applications using documents provided by the client.",
                            "Reverse engineered APIs of the Central Bank of Mexico, Binance, and Bybit to track payment statuses and collect USDT market data across currencies.",
                            "Developed tools for analyzing the cryptocurrency financial market, including real-time data collection, filtering, and aggregation.",
                            "Conducted fine-tuning of OpenAI and other models.",
                            "Ensured reliable deployment and operation of services."
                        ].map((item, i) => (
                            <View key={i} style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.bulletText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* NDA */}
                <View style={styles.jobItem}>
                    <View style={styles.jobHead}>
                        <Text style={styles.company}>NDA</Text>
                        <Text style={styles.dates}>October 2021 – March 2022</Text>
                    </View>
                    <Text style={styles.role}>ML / Backend Developer</Text>
                    <View style={styles.jobList}>
                        {[
                            "Developed an intelligent text auto-completion system based on transformer models.",
                            "Performed text classification, improving prediction accuracy by 10% (Accuracy metric) across different news categories.",
                            "Conducted text clustering using FAISS to accelerate processing of large datasets.",
                            "Migrated from a NoSQL database to PostgreSQL to optimize storage and processing of text data.",
                            "Developed REST APIs for integrating and loading texts from external sources."
                        ].map((item, i) => (
                            <View key={i} style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.bulletText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* BrightLab */}
                <View style={styles.jobItem}>
                    <View style={styles.jobHead}>
                        <Text style={styles.company}>BrightLab</Text>
                        <Text style={styles.dates}>March 2021 – September 2021</Text>
                    </View>
                    <Text style={styles.role}>ML / Backend Developer</Text>
                    <View style={styles.jobList}>
                        {[
                            "Developed a bot for automated likes and dating on Tinder, using computer vision to analyze profiles.",
                            "Performed image and text classification to identify interesting profiles and optimize interactions.",
                            "Applied CV and ML techniques to analyze images and predict user interest."
                        ].map((item, i) => (
                            <View key={i} style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.bulletText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Page>

        {/* PAGE 2 */}
        <Page size="A4" style={styles.page}>
            {/* Sidebar Page 2 */}
            <View style={styles.sidebar}>
                <View style={styles.sidebarSection}>
                    <Text style={styles.sidebarTitle}>Interests</Text>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tag}>Hiking</Text><Text style={styles.tag}>Tennis</Text>
                        <Text style={styles.tag}>Chess</Text><Text style={styles.tag}>3D Printing</Text>
                    </View>
                </View>
            </View>

            {/* Main Page 2 */}
            <View style={styles.main}>
                {/* Academic Achievements */}
                <Text style={[styles.sectionTitle, { marginTop: 0 }]}>Academic Achievements</Text>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>VR Vision Recovery App (M.Sc. Thesis)</Text>
                    <Text style={styles.projectText}>Implemented a VR training application in Unity simulating exercises for restoring synchronized eye work, using gaze tracking and configurable depth parameters.</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Video Super-Resolution Service (B.Sc. Thesis)</Text>
                    <Text style={styles.projectText}>Developed a GAN-based service for intelligent video upscaling, automatically selecting optimal models based on quality metrics.</Text>
                </View>

                {/* Pet Projects */}
                <Text style={styles.sectionTitle}>Pet Projects</Text>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>WSL Port Forwarding Tool (Go)</Text>
                    <Text style={styles.projectText}>Tool for forwarding SSH ports directly to WSL, bypassing Windows.</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>WSL Monitor (Go)</Text>
                    <Text style={styles.projectText}>Utility for monitoring WSL state and controlling it from the system tray/status bar.</Text>
                </View>
            </View>
        </Page>
    </Document>
);
