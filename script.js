/* ═══════════════════════════════════════════════
   OPLIZ — Portfolio JavaScript
   Bilingual (EN/AR) · Light/Dark Theme · Animations
   ═══════════════════════════════════════════════ */

/* ─── Language Dictionary ─── */
const i18n = {
    en: {
        // Nav
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.techstack': 'Tech Stack',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'SYSTEMS ONLINE',
        'hero.greeting': 'I\'m <span class="text-neon">Opliz</span>',
        'hero.tagline': 'I Build the Logic<br>Behind the <span class="text-neon-green">Pixels</span>',
        'hero.subtitle': 'Back-End Developer · Product Photographer · Digital Strategist<br><span class="hero-subtitle--dim">Fusing <strong>AI</strong>, <strong>Code</strong>, and <strong>Creative Vision</strong> into digital experiences.</span>',
        'hero.cta1': 'View Projects',
        'hero.cta2': 'Get In Touch',
        'hero.stat1': 'Major Projects',
        'hero.stat2': 'Technologies',
        'hero.stat3': 'Years Learning',
        'hero.tag1': 'Backend Dev',
        'hero.tag2': 'Photography',
        'hero.tag3': 'AI Powered',
        'hero.scroll': 'SCROLL',

        // About
        'about.title': 'The Developer Behind<br><span class="text-neon">The Terminal</span>',
        'about.lead': 'I\'m <strong class="text-neon">Mohamed</strong>, known online as <strong class="text-neon-green">Opliz</strong> — a Computer Science student at the <em>Faculty of Computers, Information, and Artificial Intelligence (RST)</em>, driven by a relentless curiosity for how systems work under the hood.',
        'about.p1': 'My world lives at the intersection of two disciplines: the <strong>rigid logic of back-end architecture</strong> — where databases breathe, APIs connect, and servers never sleep — and the <strong>meticulous art of product photography</strong>, where light, composition, and storytelling turn objects into experiences.',
        'about.p2': 'Currently deep-diving into <strong>ERD design</strong>, <strong>database relationships</strong>, and <strong>server-side logic</strong>, I\'m building a foundation to create intelligent, scalable platforms that solve real-world problems — from AI-powered pharmacies to industrial digital presences.',
        'about.quote': '<em>"I don\'t just write code — I architect solutions. I don\'t just take photos — I tell stories."</em>',
        'about.edu_label': 'Education',
        'about.edu_value': 'RST — CS & AI',
        'about.focus_label': 'Focus',
        'about.focus_value': 'Back-End Development',
        'about.creative_label': 'Creative Side',
        'about.creative_value': 'Product Photography',
        'about.side_label': 'Side Quest',
        'about.side_value': 'Game Server Management',

        // Services
        'services.title': 'What I <span class="text-neon-green">Bring</span><br>To The Table',
        'services.s1_title': 'Backend Development',
        'services.s1_desc': 'Designing robust server-side architectures, RESTful APIs, database schemas (ERD), and scalable systems that form the invisible backbone of every great application.',
        'services.s1_t2': 'Databases',
        'services.s1_t3': 'Server Logic',
        'services.s2_title': 'Product Photography',
        'services.s2_desc': 'Capturing products with precision and artistry — controlled lighting, creative compositions, and post-production that makes every item look its absolute best.',
        'services.s2_t1': 'Lighting',
        'services.s2_t2': 'Editing',
        'services.s2_t3': 'Branding',
        'services.s3_title': 'Digital Strategy',
        'services.s3_desc': 'End-to-end digital presence management — from social media content planning and analytics to website development and brand positioning that drives real engagement.',
        'services.s3_t1': 'Social Media',
        'services.s3_t2': 'Branding',
        'services.s3_t3': 'Analytics',

        // Portfolio
        'portfolio.title': 'Projects That<br><span class="text-neon">Prove The Point</span>',
        'portfolio.p1_status': 'Completed ✅',
        'portfolio.p1_tag1': 'Web Dev',
        'portfolio.p1_tag2': 'Digital Presence',
        'portfolio.p1_tag3': 'Industrial',
        'portfolio.p1_title': 'Kanana Roofing Sheet',
        'portfolio.p1_desc': 'Managing the complete digital presence and developing a professional industrial website for an Egyptian manufacturing company — from social media strategy to bilingual web platform.',
        'portfolio.p2_status': 'In Development',
        'portfolio.p2_tag1': 'AI',
        'portfolio.p2_tag2': 'Healthcare',
        'portfolio.p2_tag3': 'Full-Stack',
        'portfolio.p2_title': 'Opliz Pharmacy',
        'portfolio.p2_desc': 'An AI-powered online pharmacy platform with Gemini API chatbot integration, smart medicine recommendations, and safety validation systems.',
        'portfolio.p3_status': 'Experience',
        'portfolio.p3_tag2': 'Gaming',
        'portfolio.p3_tag3': 'Infrastructure',
        'portfolio.p3_title': 'Gaming Server Management',
        'portfolio.p3_desc': 'Configuring and managing dedicated game servers (Palworld & others) — handling deployment, performance tuning, and community management.',

        // Tech
        'tech.title': 'Tools of<br><span class="text-neon-green">The Trade</span>',
        'tech.cat1': 'Databases',
        'tech.cat2': 'Backend & Frameworks',
        'tech.cat3': 'AI & Integration',
        'tech.cat4': 'Creative & Strategy',
        'tech.erd': 'ERD Design',
        'tech.chatbots': 'AI Chatbots',
        'tech.prompts': 'Prompt Engineering',
        'tech.photo': 'Product Photography',
        'tech.social': 'Social Media Mgmt',

        // Contact
        'contact.title': 'Let\'s Build Something<br><span class="text-neon">Extraordinary</span>',
        'contact.text': 'Whether you need a powerful back-end system, stunning product photography, or a complete digital strategy — I\'m ready to make it happen.',
        'contact.cta1': 'Initialize Connection',
        'contact.cta2': 'Download CV',

        // Footer
        'footer.tagline': 'Where Code Meets Creativity.',
        'footer.copy': 'All systems operational.',
        'footer.credit': 'Designed & Built by Mohamed',

        // Testimonials
        'testimonials.title': 'What Clients<br><span class="text-neon-green">Say About Me</span>',
        'testimonials.t1_text': '"Opliz transformed our digital presence completely. The website he built for Kanana Roofing Sheet is professional, fast, and bilingual — exactly what we needed to reach both Arabic and English-speaking clients."',
        'testimonials.t1_name': 'Kanana Roofing Sheet',
        'testimonials.t1_role': 'Industrial Manufacturing',
        'testimonials.t2_text': '"His product photography skills are outstanding. Every shot tells a story and makes our products look premium. Highly recommend for anyone needing professional visual content."',
        'testimonials.t2_name': 'Ahmed Hassan',
        'testimonials.t2_role': 'Business Owner',
        'testimonials.t3_text': '"Mohamed doesn\'t just write code — he truly understands business needs. His digital strategy and social media management helped us grow our online engagement significantly."',
        'testimonials.t3_name': 'Sara Mohamed',
        'testimonials.t3_role': 'Marketing Manager',

        // WhatsApp
        'whatsapp.tooltip': 'Chat with me!',
    },

    ar: {
        // Nav
        'nav.about': 'عنّي',
        'nav.services': 'خدماتي',
        'nav.projects': 'مشاريعي',
        'nav.techstack': 'التقنيات',
        'nav.contact': 'تواصل',

        // Hero
        'hero.badge': 'الأنظمة تعمل',
        'hero.greeting': 'أنا <span class="text-neon">Opliz</span>',
        'hero.tagline': 'أبني المنطق<br>خلف <span class="text-neon-green">البكسلات</span>',
        'hero.subtitle': 'مطوّر خلفي · مصوّر منتجات · استراتيجي رقمي<br><span class="hero-subtitle--dim">أدمج <strong>الذكاء الاصطناعي</strong>، <strong>البرمجة</strong>، و<strong>الرؤية الإبداعية</strong> في تجارب رقمية.</span>',
        'hero.cta1': 'عرض المشاريع',
        'hero.cta2': 'تواصل معي',
        'hero.stat1': 'مشاريع رئيسية',
        'hero.stat2': 'تقنيات',
        'hero.stat3': 'سنوات تعلّم',
        'hero.tag1': 'تطوير خلفي',
        'hero.tag2': 'تصوير',
        'hero.tag3': 'ذكاء اصطناعي',
        'hero.scroll': 'اسحب لأسفل',

        // About
        'about.title': 'المطوّر خلف<br><span class="text-neon">الشاشة</span>',
        'about.lead': 'أنا <strong class="text-neon">محمد</strong>، المعروف على الإنترنت بـ <strong class="text-neon-green">Opliz</strong> — طالب في كلية الحاسبات والمعلومات والذكاء الاصطناعي بجامعة الريادة <em>(RST)</em>، مدفوع بفضول لا ينتهي لفهم كيف تعمل الأنظمة من الداخل.',
        'about.p1': 'عالمي يقع عند تقاطع عالمَين: <strong>المنطق الصارم لهندسة الخلفية</strong> — حيث تتنفس قواعد البيانات، تتصل الـ APIs، ولا تنام السيرفرات أبداً — و<strong>فن تصوير المنتجات الدقيق</strong>، حيث يحوّل الضوء والتكوين والسرد الأشياء إلى تجارب.',
        'about.p2': 'أتعمق حالياً في <strong>تصميم ERD</strong>، <strong>علاقات قواعد البيانات</strong>، و<strong>منطق الخادم</strong>، لبناء أساس لمنصات ذكية وقابلة للتطوير تحل مشاكل حقيقية — من صيدليات مدعومة بالذكاء الاصطناعي إلى منصات رقمية صناعية.',
        'about.quote': '<em>"أنا لا أكتب كود فقط — أنا أبني حلول. لا ألتقط صوراً فقط — أنا أحكي قصص."</em>',
        'about.edu_label': 'التعليم',
        'about.edu_value': 'جامعة الريادة RST — حاسبات وذكاء اصطناعي',
        'about.focus_label': 'التخصص',
        'about.focus_value': 'تطوير الواجهة الخلفية',
        'about.creative_label': 'الجانب الإبداعي',
        'about.creative_value': 'تصوير المنتجات',
        'about.side_label': 'مهمة جانبية',
        'about.side_value': 'إدارة سيرفرات الألعاب',

        // Services
        'services.title': 'ما الذي <span class="text-neon-green">أقدّمه</span><br>لك',
        'services.s1_title': 'تطوير الواجهة الخلفية',
        'services.s1_desc': 'تصميم بنيات خادم قوية، واجهات RESTful APIs، مخططات قواعد بيانات (ERD)، وأنظمة قابلة للتطوير تشكّل العمود الفقري لكل تطبيق رائع.',
        'services.s1_t2': 'قواعد بيانات',
        'services.s1_t3': 'منطق الخادم',
        'services.s2_title': 'تصوير المنتجات',
        'services.s2_desc': 'التقاط المنتجات بدقة وفن — إضاءة محكمة، تكوينات إبداعية، ومعالجة لاحقة تجعل كل منتج يبدو في أفضل صورة.',
        'services.s2_t1': 'إضاءة',
        'services.s2_t2': 'مونتاج',
        'services.s2_t3': 'هوية بصرية',
        'services.s3_title': 'استراتيجية رقمية',
        'services.s3_desc': 'إدارة شاملة للحضور الرقمي — من تخطيط محتوى السوشيال ميديا والتحليلات إلى تطوير المواقع وبناء العلامة التجارية.',
        'services.s3_t1': 'سوشيال ميديا',
        'services.s3_t2': 'هوية بصرية',
        'services.s3_t3': 'تحليلات',

        // Portfolio
        'portfolio.title': 'مشاريع<br><span class="text-neon">تثبت الفكرة</span>',
        'portfolio.p1_status': 'مكتمل ✅',
        'portfolio.p1_tag1': 'تطوير ويب',
        'portfolio.p1_tag2': 'حضور رقمي',
        'portfolio.p1_tag3': 'صناعي',
        'portfolio.p1_title': 'كنانه روفنك شيت',
        'portfolio.p1_desc': 'إدارة الحضور الرقمي الكامل وتطوير موقع ويب صناعي احترافي لشركة تصنيع مصرية — من استراتيجية السوشيال ميديا إلى منصة ويب ثنائية اللغة.',
        'portfolio.p2_status': 'قيد التطوير',
        'portfolio.p2_tag1': 'ذكاء اصطناعي',
        'portfolio.p2_tag2': 'رعاية صحية',
        'portfolio.p2_tag3': 'فول ستاك',
        'portfolio.p2_title': 'صيدلية Opliz',
        'portfolio.p2_desc': 'منصة صيدلية إلكترونية مدعومة بالذكاء الاصطناعي مع شات بوت Gemini API، توصيات أدوية ذكية، وأنظمة التحقق من السلامة.',
        'portfolio.p3_status': 'خبرة',
        'portfolio.p3_tag2': 'ألعاب',
        'portfolio.p3_tag3': 'بنية تحتية',
        'portfolio.p3_title': 'إدارة سيرفرات الألعاب',
        'portfolio.p3_desc': 'إعداد وإدارة سيرفرات ألعاب مخصصة (Palworld وغيرها) — تشمل النشر، ضبط الأداء، وإدارة المجتمع.',

        // Tech
        'tech.title': 'أدوات<br><span class="text-neon-green">الصنعة</span>',
        'tech.cat1': 'قواعد البيانات',
        'tech.cat2': 'الخلفية والأُطر',
        'tech.cat3': 'الذكاء الاصطناعي والتكامل',
        'tech.cat4': 'الإبداع والاستراتيجية',
        'tech.erd': 'تصميم ERD',
        'tech.chatbots': 'شات بوت ذكي',
        'tech.prompts': 'هندسة الـ Prompts',
        'tech.photo': 'تصوير المنتجات',
        'tech.social': 'إدارة سوشيال ميديا',

        // Contact
        'contact.title': 'لنبني شيئاً<br><span class="text-neon">استثنائياً</span>',
        'contact.text': 'سواء كنت تحتاج نظام خلفي قوي، تصوير منتجات مذهل، أو استراتيجية رقمية شاملة — أنا مستعد لتحقيق ذلك.',
        'contact.cta1': 'ابدأ التواصل',
        'contact.cta2': 'تحميل السيرة الذاتية',

        // Footer
        'footer.tagline': 'حيث يلتقي الكود بالإبداع.',
        'footer.copy': 'جميع الأنظمة تعمل.',
        'footer.credit': 'تصميم وبناء بواسطة محمد',

        // Testimonials
        'testimonials.title': 'ماذا يقول<br><span class="text-neon-green">العملاء عنّي</span>',
        'testimonials.t1_text': '"أوبليز غيّر حضورنا الرقمي بالكامل. الموقع اللي بناه لكنانه روفنك شيت احترافي وسريع وثنائي اللغة — بالظبط اللي كنا محتاجينه."',
        'testimonials.t1_name': 'كنانه روفنك شيت',
        'testimonials.t1_role': 'تصنيع صناعي',
        'testimonials.t2_text': '"مهاراته في تصوير المنتجات مذهلة. كل صورة بتحكي قصة وبتخلي المنتجات تبان فخمة. أنصح بيه جداً لأي حد محتاج محتوى بصري احترافي."',
        'testimonials.t2_name': 'أحمد حسن',
        'testimonials.t2_role': 'صاحب عمل',
        'testimonials.t3_text': '"محمد مش بس بيكتب كود — هو فاهم احتياجات البيزنس فعلاً. استراتيجيته الرقمية وإدارته للسوشيال ميديا ساعدتنا نكبر تفاعلنا بشكل ملحوظ."',
        'testimonials.t3_name': 'سارة محمد',
        'testimonials.t3_role': 'مدير تسويق',

        // WhatsApp
        'whatsapp.tooltip': 'تواصل معي!',
    }
};


/* ─── DOM Ready ─── */
document.addEventListener('DOMContentLoaded', () => {

    const html = document.documentElement;
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const themeBtn = document.getElementById('theme-toggle');
    const langBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    // ─── Load saved preferences ───
    let currentLang = localStorage.getItem('opliz-lang') || 'en';
    let currentTheme = localStorage.getItem('opliz-theme') || 'dark';

    setTheme(currentTheme, false);
    setLang(currentLang, false);

    // ─── Theme Toggle ───
    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.classList.add('theme-transitioning');
        setTheme(currentTheme, true);
        setTimeout(() => document.body.classList.remove('theme-transitioning'), 600);
    });

    function setTheme(theme, save) {
        html.setAttribute('data-theme', theme);
        currentTheme = theme;
        if (save) localStorage.setItem('opliz-theme', theme);
    }

    // ─── Language Toggle ───
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLang(currentLang, true);
    });

    function setLang(lang, save) {
        currentLang = lang;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langLabel.textContent = lang === 'en' ? 'AR' : 'EN';

        // Apply translations
        const dict = i18n[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        if (save) localStorage.setItem('opliz-lang', lang);
    }

    // ─── Mobile Menu ───
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navLinks.classList.toggle('is-open');
        document.body.classList.toggle('no-scroll');
    });

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            navLinks.classList.remove('is-open');
            document.body.classList.remove('no-scroll');
        });
    });

    // ─── Navbar Scroll ───
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        navbar.classList.toggle('navbar--scrolled', y > 80);
        if (y > lastScroll && y > 400) {
            navbar.classList.add('navbar--hidden');
        } else {
            navbar.classList.remove('navbar--hidden');
        }
        lastScroll = y;
    });

    // ─── Active Nav Link ───
    const sectionObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                allNavLinks.forEach(l => l.classList.remove('is-active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('is-active');
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(s => sectionObs.observe(s));

    // ─── Scroll-Triggered Fade In ───
    const animEls = document.querySelectorAll('.animate-on-scroll');
    const animObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                animObs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    animEls.forEach(el => animObs.observe(el));

    // ─── Smooth Scroll ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ─── Stat Counter ───
    let statsCounted = false;
    const statsObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsCounted) {
                statsCounted = true;
                document.querySelectorAll('.stat-number').forEach(el => {
                    const target = parseInt(el.getAttribute('data-target') || el.textContent);
                    let current = 0;
                    const step = Math.max(1, Math.ceil(target / 30));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current;
                    }, 50);
                });
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObs.observe(heroStats);

    // ─── Tech Bar Animation ───
    const techObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.tech-fill').forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.classList.add('is-animated');
                    bar.style.width = width + '%';
                });
                techObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.tech-category').forEach(cat => techObs.observe(cat));

    // ─── Hero Parallax Glows ───
    const heroGlows = document.querySelectorAll('.hero-glow');
    window.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth - 0.5) * 25;
        const y = (e.clientY / window.innerHeight - 0.5) * 25;
        heroGlows.forEach((glow, i) => {
            const f = i === 0 ? 1 : -0.7;
            glow.style.transform = `translate(${x * f}px, ${y * f}px)`;
        });
    });

    // ─── Particle Generator ───
    const particleContainer = document.getElementById('particles');
    if (particleContainer) {
        const count = 30;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = (60 + Math.random() * 40) + '%';
            p.style.animationDuration = (6 + Math.random() * 10) + 's';
            p.style.animationDelay = Math.random() * 8 + 's';
            p.style.width = (1 + Math.random() * 2) + 'px';
            p.style.height = p.style.width;

            if (Math.random() > 0.6) {
                p.style.background = '#39FF14';
                p.style.boxShadow = '0 0 6px #39FF14';
            }

            particleContainer.appendChild(p);
        }
    }


    // ─── Preloader ───
    const preloader = document.getElementById('preloader');
    const preloaderFill = document.getElementById('preloader-fill');
    if (preloader && preloaderFill) {
        let progress = 0;
        const preloaderInterval = setInterval(() => {
            progress += Math.random() * 25 + 10;
            if (progress >= 100) progress = 100;
            preloaderFill.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(preloaderInterval);
                setTimeout(() => {
                    preloader.classList.add('is-hidden');
                    document.body.classList.remove('no-scroll');
                }, 400);
            }
        }, 200);
        document.body.classList.add('no-scroll');
    }


    // ─── Scroll Progress Bar ───
    const scrollProgress = document.getElementById('scroll-progress');
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (scrollProgress) scrollProgress.style.width = percent + '%';
    }
    window.addEventListener('scroll', updateScrollProgress);


    // ─── Back to Top Button ───
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('is-visible', window.scrollY > 500);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // ─── WhatsApp Float Visibility ───
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappFloat) {
        setTimeout(() => {
            whatsappFloat.classList.add('is-visible');
        }, 2500);
    }


    // ─── Custom Cursor ───
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    if (cursorDot && cursorRing && window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        const hoverTargets = document.querySelectorAll('a, button, .project-card, .service-card, .testimonial-card, .tech-item');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('is-hover');
                cursorRing.classList.add('is-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('is-hover');
                cursorRing.classList.remove('is-hover');
            });
        });

        document.body.style.cursor = 'none';
        document.querySelectorAll('a, button').forEach(el => el.style.cursor = 'none');
    }


    // ─── Easter Egg (Konami Code) ───
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    // Create Easter Egg overlay
    const easterOverlay = document.createElement('div');
    easterOverlay.className = 'easter-egg-overlay';
    easterOverlay.innerHTML = `
        <div class="easter-egg-text">🚀 YOU FOUND THE SECRET!</div>
        <div class="easter-egg-sub">Konami Code Activated — Keep Building Amazing Things</div>
    `;
    document.body.appendChild(easterOverlay);

    easterOverlay.addEventListener('click', () => {
        easterOverlay.classList.remove('is-active');
    });

    document.addEventListener('keydown', e => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                easterOverlay.classList.add('is-active');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });


});
