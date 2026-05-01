// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu function
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}


// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Download Resume Function
function downloadResume() {
    // Try to download PDF resume
    const pdfPath = 'Final Resume_Suchismita Saha.pdf';
    
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'Final Resume_Suchismita Saha.pdf';
    a.target = '_blank';
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Modal Functions
function showDetailModal(type) {
    console.log('Modal function called with type:', type);
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    console.log('Modal elements found:', !!modal, !!modalTitle, !!modalBody);
    
    const content = {
        gate: {
            title: 'GATE BM 2026 Scorecard',
            content: `
                <h3>Graduate Aptitude Test in Engineering - Biomedical</h3>
                <div class="score-grid">
                    <div class="score-item">
                        <strong>All India Rank</strong>
                        140
                    </div>
                    <div class="score-item">
                        <strong>Score</strong>
                        522/1000
                    </div>
                    <div class="score-item">
                        <strong>Marks</strong>
                        33.67
                    </div>
                    <div class="score-item">
                        <strong>Category</strong>
                        General
                    </div>
                </div>
                
                <h4>Subjects in the curriculum</h4>
                <ul>
                    <li>General Aptitude</li>
                    <li>Engineering Mathematics</li>
                    <li>Electrical Circuits</li>
                    <li>Signals and Systems</li>
                    <li>Analog and Digital Electronics</li>
                    <li>Measurements and Control Systems</li>
                    <li>Sensors and Bioinstrumentation</li>
                    <li>Human Anatomy and Physiology</li>
                    <li>Medical Imaging Systems</li>
                    <li>Biomechanics</li>
                    <li>Biomaterials</li>
                </ul>
                
                <h4>Achievement Highlights</h4>
                <ul>
                    <li>Secured AIR 140 among 3041 candidates</li>
                    <li>Qualified for premier institutions (IITs, IISc)</li>
                    <li>Eligible for PSUs and research positions</li>
                </ul>
            `
        },
        education: {
            title: 'Netaji Subhash Engineering College',
            content: `
                <h3>B.Tech in Biomedical Engineering</h3>
                <div class="score-grid">
                    <div class="score-item">
                        <strong>Location</strong>
                        New Garia,Kolkata
                    </div>
                    <div class="score-item">
                        <strong>Duration</strong>
                        2023-2027
                    </div>
                    <div class="score-item">
                        <strong>Current Year</strong>
                        3rd Year
                    </div>
                    <div class="score-item">
                        <strong>CGPA</strong>
                        9.27/10.0
                    </div>
                </div>
                
                <h4>Academic Journey</h4>
                <ul>
                    <li>1st Year CGPA: 8.97</li>
                    <li>2nd Year CGPA: 9.58</li>
                    <li>3rd Year CGPA: 9.16 (ongoing)</li>
                    <li>Department Rank: Topper</li>
                </ul>
                
                <h4>Key Courses</h4>
                <ul>
                    <li>Physiology & Anatomy</li>
                    <li>Sensors & Transducers</li>
                    <li>Biomedical Signal Processing</li>
                    <li>Biomedical Instrumentation</li>
                    <li>Biomechanics</li>
                    <li>Biomaterials</li>
                    <li>Medical Imaging</li>
                </ul>
                
                <h4>Research Projects</h4>
                <ul>
                    <li>Wearable GSR Sensor for Stress Monitoring</li>
                </ul>
            `
        },
        scholarship: {
            title: 'Scholarships & Achievements',
            content: `
                <div class="scholarship-container">
                    <div class="scholarship-card">
                        <h3><i class="fas fa-award"></i> JBNSTS Scholarship</h3>
                        <div class="scholarship-details">
                            <div class="detail-grid">
                                <div class="detail-item">
                                    <strong>About JBNSTS</strong>
                                    <span><a href="https://jbnsts.ac.in/Home/aboutus.php" target="_blank" style="color: #e1e4e4;">Official Website</a></span>
                                </div>
                                <div class="detail-item">
                                    <strong>Year</strong>
                                    <span>2023</span>
                                </div>
                                <div class="detail-item">
                                    <strong>Category</strong>
                                    <span>Senior BKMB Award</span>
                                </div>
                                <div class="detail-item">
                                    <strong>Duration</strong>
                                    <span>4 Years</span>
                                </div>
                            </div>
                            <p class="scholarship-description">
                                Prestigious national scholarship recognizing exceptional talent in science and mathematics. Selected through rigorous written examination and interview process.
                            </p>
                            <div class="certificate-section">
                                <h4>JBNSTS Certificate</h4>
                                <div class="pdf-viewer">
                                    <div class="pdf-controls">
                                        <button class="pdf-btn" onclick="viewPDF('JBNSTS_Certificate.pdf')">
                                            <i class="fas fa-file-pdf"></i> View Certificate
                                        </button>
                                        <button class="pdf-btn" onclick="fullscreenPDF('JBNSTS_Certificate.pdf')">
                                            <i class="fas fa-expand"></i> Fullscreen
                                        </button>
                                        <button class="pdf-btn" onclick="downloadPDF('JBNSTS_Certificate.pdf')">
                                            <i class="fas fa-download"></i> Download
                                        </button>
                                    </div>
                                    <div class="pdf-preview" id="pdfPreview">
                                        <iframe src="JBNSTS_Certificate.pdf" width="100%" height="400px" frameborder="0"></iframe>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="scholarship-card">
                        <h3><i class="fas fa-building"></i> Disha EY Scholarship</h3>
                        <div class="scholarship-details">
                            <div class="detail-grid">
                                <div class="detail-item">
                                    <strong>Provider</strong>
                                    <span>Ernst & Young Foundation</span>
                                </div>
                                <div class="detail-item">
                                    <strong>About EY</strong>
                                    <span><a href="https://www.ey.com/en_in" target="_blank" style="color: #e1e4e4;">Official Website</a></span>
                                </div>
                                <div class="detail-item">
                                    <strong>Year</strong>
                                    <span>2021</span>
                                </div>
                                <div class="detail-item">
                                    <strong>Duration</strong>
                                    <span>6 Years</span>
                                </div>
                            </div>
                            <p class="scholarship-description">
                                Merit-based scholarship awarded to outstanding students demonstrating academic excellence and leadership potential in STEM fields.
                            </p>
                        </div>
                    </div>
                    
                    <div class="scholarship-card">
                        <h3><i class="fas fa-heart"></i> Udayan Care Scholarship</h3>
                        <div class="scholarship-details">
                            <div class="detail-grid">
                                <div class="detail-item">
                                    <strong>Provider</strong>
                                    <span>Udayan Care, Kolkata</span>
                                </div>
                                <div class="detail-item">
                                    <strong>About Udayan Care</strong>
                                    <span><a href="https://udayan.org.in/" target="_blank" style="color: #e1e4e4;">Official Website</a></span>
                                </div>
                                <div class="detail-item">
                                    <strong>Year</strong>
                                    <span>2021</span>
                                </div> 
                                <div class="detail-item">
                                    <strong>Duration</strong>
                                    <span>6 Years</span>
                                </div>
                            </div>
                            <p class="scholarship-description">
                                Scholarship recognizing academic excellence and community service involvement. Focuses on supporting meritorious students from diverse backgrounds.
                            </p>
                        </div>
                    </div>
                </div>
                
            `
        },
        academic: {
            title: 'Academic Excellence',
            content: `
                <h3>Consistent Academic Performance</h3>
                <div class="score-grid">
                    <div class="score-item">
                        <strong>CGPA</strong>
                        9.27/10
                    </div>
                    <div class="score-item">
                        <strong>Rank</strong>
                        Topper in BME Department
                    </div>
                    <div class="score-item">
                        <strong>Positions</strong>
                        Class Representative, Placement Representative
                    </div>
                </div>
            `
        },
        internship: {
            title: 'Manipal Hospitals Internship',
            content: `
                <h3>Biomedical Engineering Internship</h3>
                <div class="score-grid">
                    <div class="score-item">
                        <strong>Hospital</strong>
                        Manipal Hospital E.M. Bypass 
                    </div>
                    <div class="score-item">
                        <strong>Department</strong>
                        Biomedical Engineering
                    </div>
                    <div class="score-item">
                        <strong>Duration</strong>
                        4 Weeks
                    </div>
                    <div class="score-item">
                        <strong>Year</strong>
                        May - June 2025
                    </div>
                </div>
                
                <h4>Responsibilities</h4>
                <ul>
                    <li>Maintenance of medical equipment</li>
                    <li>Calibration of diagnostic devices</li>
                    <li>Equipment failure analysis</li>
                    <li>Patient monitoring system support</li>
                    <li>Safety protocol implementation</li>
                    <li>Documentation and reporting</li>
                </ul>
                
                <h4>Equipment Handled</h4>
                <ul>
                    <li>ECG Machines</li>
                    <li>Patient Monitors</li>
                    <li>Ultrasound Systems</li>
                    <li>X-Ray Equipment</li>
                    <li>Ventilators</li>
                    <li>Infusion Pumps</li>
                </ul>
                
                <h4>Key Learnings</h4>
                <ul>
                    <li>Real-world clinical environment experience</li>
                    <li>Healthcare technology management</li>
                    <li>Patient safety protocols</li>
                    <li>Medical equipment troubleshooting</li>
                    <li>Inter-departmental coordination</li>
                    <li>Documentation and reporting</li>
                </ul>
                
                <div class="certificate-section">
                    <h4>Internship Certificate</h4>
                    <div class="pdf-viewer">
                        <div class="pdf-controls">
                            <button class="pdf-btn" onclick="viewPDF('manipals.pdf')">
                                <i class="fas fa-file-pdf"></i> View Certificate
                            </button>
                            <button class="pdf-btn" onclick="fullscreenPDF('manipals.pdf')">
                                <i class="fas fa-expand"></i> Fullscreen
                            </button>
                            <button class="pdf-btn" onclick="downloadPDF('manipals.pdf')">
                                <i class="fas fa-download"></i> Download
                            </button>
                        </div>
                        <div class="pdf-preview" id="pdfPreview">
                            <iframe src="manipals.pdf" width="100%" height="400px" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            `
        },
    };
    
    modalTitle.textContent = content[type].title;
    modalBody.innerHTML = content[type].content;
    modal.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('detailModal');
    if (e.target === modal) {
        closeDetailModal();
    }
});

// PDF Functions
function viewPDF(pdfPath) {
    const pdfPreview = document.getElementById('pdfPreview');
    pdfPreview.innerHTML = `<iframe src="${pdfPath}" width="100%" height="400px" frameborder="0"></iframe>`;
}

function downloadPDF(pdfPath) {
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = pdfPath.split('/').pop();
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function fullscreenPDF(pdfPath) {
    // Create fullscreen modal
    const fullscreenModal = document.createElement('div');
    fullscreenModal.className = 'fullscreen-pdf-modal';
    fullscreenModal.innerHTML = `
        <div class="fullscreen-pdf-content">
            <div class="fullscreen-pdf-header">
                <h3>JBNSTS Certificate - Fullscreen View</h3>
                <button class="fullscreen-close" onclick="closeFullscreenPDF()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="fullscreen-pdf-body">
                <iframe src="${pdfPath}" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(fullscreenModal);
    document.body.style.overflow = 'hidden';
    
    // Add keyboard event listener for ESC key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeFullscreenPDF();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function closeFullscreenPDF() {
    const modal = document.querySelector('.fullscreen-pdf-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Open separate pages for activities
function openPage(page) {
    const pages = {
        seminars: 'seminars.html',
        courses: 'courses.html',
        'social-activities': 'social-activities.html'
    };
    
    if (pages[page]) {
        window.open(pages[page], '_blank');
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});


// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
});


// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Open page function
function openPage(page) {
    // Handle specific page mappings
    if (page === 'magazines') {
        window.location.href = 'articles.html';
    } else if (page === 'seminars') {
        window.location.href = 'seminars.html';
    } else if (page === 'courses') {
        window.location.href = 'index.html#education';
    } else if (page === 'social-activities') {
        window.location.href = 'index.html#activities';
    } else {
        // Default behavior for other pages
        window.location.href = page + '.html';
    }
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #4ade80 !important;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

