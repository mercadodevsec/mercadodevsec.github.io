<style>
  /* ===== CUSTOM BACKGROUND COLOR ===== */
  body {
    background-color: #f0f4f8 !important;
  }

  /* ===== FIXED HEADER ON THE LEFT ===== */
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh; /* Full viewport height */
    background: #1a2a3a; /* Dark sidebar background */
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    overflow-y: auto;
  }

  /* ===== HEADER TEXT COLORS ===== */
  .fixed-header h1 {
    color: #ffffff !important;
    font-size: 1.8rem;
    margin: 15px 0 5px 0;
  }

  .fixed-header h3 {
    color: #94a3b8 !important;
    font-size: 1rem;
    margin: 5px 0;
    font-weight: 400;
  }

  .fixed-header .tagline {
    color: #94a3b8 !important;
    font-size: 0.9rem;
    margin-top: 5px;
  }

  /* ===== PROFILE PHOTO IN HEADER ===== */
  .fixed-header .profile-photo {
    border-radius: 50%;
    border: 4px solid #2563eb;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  /* ===== SOCIAL LINKS IN HEADER ===== */
  .fixed-header .social-links {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .fixed-header .social-links a {
    display: inline-block;
  }

  .fixed-header .social-links img {
    height: 32px;
  }

  /* ===== MAIN CONTENT (Shifts to the right) ===== */
  .main-content {
    margin-left: 340px; /* Width of sidebar + gap */
    padding: 40px 50px 40px 30px;
    max-width: 800px;
    background-color: #f0f4f8;
    min-height: 100vh;
  }

  /* ===== RESPONSIVE: Stack on mobile ===== */
  @media (max-width: 768px) {
    .fixed-header {
      position: relative;
      width: 100%;
      height: auto;
      min-height: 100vh;
      padding: 30px 20px;
      flex-direction: column;
    }
    
    .main-content {
      margin-left: 0;
      padding: 30px 20px;
    }
    
    .fixed-header .profile-photo {
      width: 120px;
      height: 120px;
    }
  }

  /* ===== STYLING FOR YOUR CONTENT ===== */
  .main-content h2 {
    color: #1a2a3a;
    border-bottom: 3px solid #2563eb;
    padding-bottom: 8px;
  }

  .main-content a {
    color: #2563eb;
    text-decoration: none;
  }

  .main-content a:hover {
    text-decoration: underline;
  }

  .main-content hr {
    border: 1px solid #d1d9e6;
    margin: 30px 0;
  }

  /* ===== NEW: About Me card styles ===== */
  .about-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0;
  }
  .about-card {
    flex: 1;
    min-width: 150px;
    background: #e8edf3;
    padding: 12px 18px;
    border-radius: 8px;
    border-left: 4px solid #2563eb;
  }
  .about-card strong {
    display: block;
    font-size: 1rem;
    color: #1a2a3a;
  }
  .about-card span {
    font-size: 0.95rem;
    color: #2d3f52;
  }
</style>

<!-- ===== FIXED LEFT HEADER ===== -->
<div class="fixed-header">
  <img src="profile.jpg" alt="John Micah Mercado" class="profile-photo" />
  
  <h1>John Micah Mercado</h1>
  <h3>IT Senior · University of North Florida</h3>
  <p class="tagline">3.96 GPA · CompTIA Security+</p>
  
  <div class="social-links">
    <a href="https://github.com/mercadodevsec">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/john-micah-mercado-03611624a/">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="mailto:mikkomercado97@gmail.com">
      <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
  </div>
</div>

<!-- ===== MAIN CONTENT ===== -->
<div class="main-content" markdown="1">

---

## 👨‍💻 About Me

I'm a senior IT student at the University of North Florida with a 3.96 GPA. and strong experience in **Java, Kotlin, C++, and C#**. I've built a multithreaded socket server, custom data structures, and data-driven applications — from Android financial calculators to customer churn pipelines. I also hold **CompTIA Security+** and have completed hands-on cybersecurity labs.

---

## 🎓 Education

**University of North Florida** · Jacksonville, FL  
B.S. Information Technology (Senior) · GPA: 3.96  
*August 2024 – Present*

**Relevant Coursework:** Computer Networks, Cloud Computing, Cybersecurity Systems, Intrusion Detection, Forensics, Systems Administration, Computer Programming, IT Project Management

---

## 📁 Projects

### FinCal: Financial Calculator App → [Check the App here](https://github.com/mercadodevsec/FinCal)
*Java/Kotlin · Android*

- Building an Android app with 30+ financial calculators covering mortgage, investment, retirement, and tax planning
- Leveraging AI-assisted development for compound interest, loan amortization, and ROI calculation engines
- Designing category-based UI navigation with Jetpack Compose
- Managing project with Git/GitHub for version control

### Customer Churn Pipeline
*C#*

- Built a C# application to read, parse, and process customer data from CSV files
- Developed logic to analyze user behavior (login frequency, spending, tenure, support issues) to identify high-risk customers
- Implemented file handling, data validation, and input/output operations

### Java Programming Projects
*Java · Academic*

- Built a Concurrent Socket Server supporting multiple simultaneous clients using multithreading
- Developed EncodedList with real-time Byte Pair Encoding (BPE) compression
- Implemented Binary Search Tree with efficient operations
- Created modified Tic-Tac-Toe game with rolling board mechanic

### C++ Programming Projects
*C++ · Academic*

- Developed CO2 emissions data calculation and analysis program
- Built text analysis application for word and vowel counting
- Implemented file input/output operations

---

## 🛠️ Skills

**Languages:** Java, Kotlin, C++, C#  
**Technologies:** Android Development, Jetpack Compose, Multithreading, Socket Programming, Git/GitHub, Linux  
**Office:** Microsoft Excel, Word, Access

---

## 📜 Certifications

- CompTIA Security+ (December 2024)
- Excel White Belt – McGraw Hill
- Word White Belt – McGraw Hill
- PowerPoint White Belt – McGraw Hill

</div>
