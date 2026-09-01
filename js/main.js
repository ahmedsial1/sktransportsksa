// SK TRANSPORTS KSA - Multi-Language Engine (English, Arabic, Chinese)

// 1. WhatsApp Lead Script
function contactSK() {
    const phone = "966500000000";
    const message = "Hello SK Transports KSA, I am interested in your heavy mobile crane services for [Rental/Sale]. Please provide details.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// 2. Navigation & UX Logic
const nav = document.getElementById('main-nav');
const hoist = document.getElementById('hoist-cable');

window.addEventListener('scroll', () => {
    if (nav) {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }

    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (hoist) {
        hoist.style.height = (20 + scrollPercent * 0.8) + '%';
        hoist.style.opacity = 0.2 + (scrollPercent / 200);
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.mobile-burger');
    if (navLinks) navLinks.classList.toggle('active');
    if (burger) burger.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const burger = document.querySelector('.mobile-burger');
        if (navLinks) navLinks.classList.remove('active');
        if (burger) burger.classList.remove('active');
    });
});

// Leadership Slider Navigation
function slideLeadership(direction) {
    const slider = document.getElementById('leadership-slider');
    if (!slider) return;
    const cardWidth = 350;
    if (direction === 'next') {
        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
}

// Language Dropdown Toggle
function toggleLangMenu() {
    const dropdown = document.querySelector('.lang-dropdown-content');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
    if (!e.target.closest('.lang-selector-container')) {
        const dropdown = document.querySelector('.lang-dropdown-content');
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

// 3. Translation Data Hub (Saudi Arabia Adapted)
const translations = {
    en: {
        nav_home: "Home",
        ticker_text: "Aramco Standard SANY Fleet | 18+ Years of Expertise | Direct Sourcing from China | 24/7 Technical Support in Riyadh, Dammam, Jeddah & NEOM",
        nav_fleet: "Fleet",
        nav_services: "Services",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        hero_tagline: "Saudi Arabia's Ultimate Heavy Lifting Force • Aramco Standard • 18+ Years Excellence",
        hero_title: "THE ULTIMATE FORCE IN <span>SAUDI ARABIA'S INFRASTRUCTURE.</span>",
        hero_desc: "Driving the Kingdom of Saudi Arabia's Vision 2030 progress with high-performance SANY Mobile Truck Cranes. From large-scale industrial lifts to complex urban developments, we provide the power, precision, and reliability your projects demand.",
        btn_quote: "View SANY Fleet",
        btn_fleet: "Contact Our Experts",
        stat_350_title: "500T",
        stat_350_desc: "Lifting Capacity",
        stat_350_sub: "One of the most powerful and versatile mobile crane fleets in the Saudi market (50T–500T).",
        stat_pdo_title: "ARAMCO",
        stat_pdo_desc: "Approved Standards",
        stat_pdo_sub: "Machinery and operators fully compliant with Saudi Aramco GI 7.027/7.028 safety protocols.",
        stat_branches_title: "18+",
        stat_branches_desc: "Years of Expertise",
        stat_branches_sub: "A trusted legacy of supporting major industrial developments across the Middle East.",
        section_logistics_tag: "WORLD-CLASS SOLUTIONS",
        section_logistics_title: "Beyond Rental,<br><span>Strength Inherited.</span>",
        section_logistics_desc: "Based in Saudi Arabia, SK Transports KSA is a premier leader in heavy machinery solutions. We specialize in the sale and rental of SANY Mobile Truck Cranes, ensuring every project from Riyadh, Dammam, and Jubail to Jeddah and NEOM is backed by world-class engineering.",
        ceo_specialization: "<strong style=\"color: var(--primary);\">CEO Specialization:</strong> We offer a unique bridge for direct procurement from China. Our CEO personally facilitates the sourcing and import of new or used SANY machinery, managing all logistics, SASO compliance, and Saudi customs with total transparency.",
        direct_source_tag: "DIRECT FROM SOURCE",
        factory_direct_desc: "Factory-Direct Heavy Equipment Procurement.",
        badge_pdo: "ARAMCO",
        badge_certified: "APPROVED",
        why_tag: "The SK Transports Advantage",
        why_title: "Strategic Lifting Power.",
        why_desc: "SK Transports bridges the gap between world-class Chinese manufacturing and Saudi Arabia's infrastructure needs. We provide unparalleled reliability, Aramco compliance, and technical expertise.",
        check_1_head: "Safety First:",
        check_1: "Aramco-approved fleet and TUV certified rigging gear ensuring the highest operational standards in Saudi Arabia.",
        check_2_head: "Direct Imports:",
        check_2: "Expert facilitation of direct-from-China SANY machinery sales and Saudi port delivery.",
        check_3_head: "Technical Support:",
        check_3: "24/7 assistance, mobile mechanic vans, and maintenance to ensure zero project downtime.",
        card_350_tag: "Heavy Lift Specialist",
        ton_350: "350 TON",
        card_220_tag: "Engineering Master",
        ton_220: "220 TON",
        card_160_tag: "Industrial Workhorse",
        ton_160: "160 TON",
        book_now: "Book Now",
        btn_view_full_fleet: "View Full Fleet Portfolio →",
        testimonials_tag: "Client Reviews",
        testimonials_title: "Trusted by <span>Industry Leaders.</span>",
        rev1_content: "\"SK Transports has been instrumental in our Eastern Province energy expansion. Their SANY 350T cranes handled complex structural lifts with absolute precision. Truly a trusted partner for Saudi Vision 2030.\"",
        rev1_author: "Eng. Fahad Al-Zahrani",
        rev1_role: "Senior Project Director, Jubail Industrial Area",
        rev2_content: "\"Working with an Aramco-standard contractor is non-negotiable for us. SK's commitment to safety and rapid response in the Dammam Port & Ras Al Khair area has made them our go-to lifting provider.\"",
        rev2_author: "Faisal Bin Hamad",
        rev2_role: "Project Manager, Energy Infrastructure",
        rev3_content: "\"The reliability of their certified operators and the scale of their fleet in Riyadh and NEOM have helped us hit our infrastructure milestones ahead of schedule. Excellent service.\"",
        rev3_author: "Sultan Al-Otaibi",
        rev3_role: "Director, Riyadh Mega Infrastructure",
        leadership_tag: "Visionary Leadership",
        leadership_title: "Strategic <span>Excellence.</span>",
        ceo_name: "Muhammad Amjad",
        ceo_role: "Chief Executive Officer",
        ceo_desc: "Architect of the strategic vision driving our growth in the Saudi Arabian heavy machinery sector.",
        chairman_name: "Ch Munawar Hussain Sial",
        chairman_role: "Chairman",
        chairman_desc: "Guardian of our ethical standards and legacy of trust across the Kingdom.",
        md_name: "Ch Arshad Ali Sial",
        md_role: "Managing Director",
        md_desc: "Specialist in global procurement, connecting China’s manufacturing power with Saudi Arabia's infrastructure needs.",
        md2_name: "Tasawar Hussain Sial",
        md2_role: "Managing Director",
        md2_desc: "Leading operational excellence and fleet reliability for every client project in KSA.",
        footer_desc: "Elevating Saudi Arabia’s infrastructure with unmatched lifting power. Aramco standard excellence since inception, bridging the gap between global sourcing and local expertise.",
        footer_links_title: "Quick Links",
        footer_contact_title: "Contact Info",
        footer_hq: "Riyadh Headquarters",
        footer_addr: "Exit 18, Industrial Area, Riyadh, KSA",
        footer_hotline: "Direct Hotline",
        footer_email: "Official Email",
        footer_sourcing_title: "Direct Sourcing",
        footer_sourcing_desc: "Direct sourcing from China factory outlets for used and new heavy equipment procurement.",
        footer_wa_inquiry: "WhatsApp Inquiry",
        footer_rights: "© 2026 SK Transports KSA. All Rights Reserved.",
        footer_designed: "Designed by M.Ahmed Sial",
        floating_chat: "Chat with us"
    },
    ar: {
        nav_home: "الرئيسية",
        ticker_text: "أسطول ساني المعتمد وفق معايير أرامكو | خبرة أكثر من 18 عاماً | استيراد مباشر من الصين | دعم فني 24/7 في الرياض والدمام وجدة ونيوم",
        nav_fleet: "الأسطول",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_tagline: "القوة الرائدة في الرفع الثقيل بالمملكة العربية السعودية • معتمد وفق معايير أرامكو • خبرة 18+ عاماً",
        hero_title: "القوة المطلقة في <span>البنية التحتية للمملكة.</span>",
        hero_desc: "دعم تقدم رؤية المملكة 2030 بأحدث رافعات ساني الهيدروليكية المتنقلة. من عمليات الرفع الصناعية الكبرى إلى مشاريع البنية التحتية، نوفر القوة والدقة والموثوقية.",
        btn_quote: "استعرض أسطول ساني",
        btn_fleet: "تواصل مع خبرائنا",
        stat_350_title: "500 طن",
        stat_350_desc: "طاقة الرفع القصوى",
        stat_350_sub: "واحد من أقوى أساطيل الرافعات المتنقلة وأكثرها تنوعاً في السوق السعودي (50 طن إلى 500 طن).",
        stat_pdo_title: "أرامكو",
        stat_pdo_desc: "معايير معتمدة",
        stat_pdo_sub: "معدات ومشغلون معتمدون ومطابقون تماماً لاشتراطات أرامكو السعودية للسلامة GI 7.027/7.028.",
        stat_branches_title: "+18",
        stat_branches_desc: "عاماً من الخبرة",
        stat_branches_sub: "إرث موثوق في دعم كبرى مشاريع الطاقة والبنية التحتية في الشرق الأوسط.",
        section_logistics_tag: "حلول بمستوى عالمي",
        section_logistics_title: "أكثر من مجرد تأجير،<br><span>قوة متوارثة.</span>",
        section_logistics_desc: "انطلاقاً من المملكة العربية السعودية، تعد شركة إس كيه للمواصلات رائدة في حلول الآليات الثقيلة وتأجير وبيع رافعات ساني المتنقلة لتغطية كافة المشاريع في الرياض والدمام والجبيل وجدة ونيوم.",
        ceo_specialization: "<strong style=\"color: var(--primary);\">تخصص الإدارة التنفيذية:</strong> نوفر جسراً فريداً للاستيراد المباشر من مصانع الصين لكافة رافعات ساني الجديدة والمستعملة، مع إدارة كاملة لإجراءات الجمارك والمطابقة السعودية (SASO).",
        direct_source_tag: "مباشرة من المصدر",
        factory_direct_desc: "استيراد مباشر للمعدات الثقيلة من المصانع.",
        badge_pdo: "أرامكو",
        badge_certified: "معتمد",
        why_tag: "ميزة إس كيه للمواصلات",
        why_title: "قوة رفع استراتيجية.",
        why_desc: "نربط بين القوة التصنيعية العالمية واحتياجات البنية التحتية في السعودية بأعلى معايير الأمان والسلامة.",
        check_1_head: "السلامة أولاً:",
        check_1: "أسطول معتمد ومعدات رفع متوافقة مع اشتراطات السلامة الصارمة في المملكة.",
        check_2_head: "استيراد مباشر:",
        check_2: "تسهيل احترافي لشراء وتوريد رافعات ساني مباشرة من الصين إلى الموانئ السعودية.",
        check_3_head: "دعم فني متواصل:",
        check_3: "فرق دعم وصيانة متنقلة على مدار 24/7 لضمان استمرارية العمل دون توقف.",
        card_350_tag: "خبير الرفع الثقيل",
        ton_350: "350 طن",
        card_220_tag: "ماستر الهندسة",
        ton_220: "220 طن",
        card_160_tag: "عملاق العمليات الصناعية",
        ton_160: "160 طن",
        book_now: "احجز الآن",
        btn_view_full_fleet: "عرض كامل الأسطول ←",
        testimonials_tag: "آراء العملاء",
        testimonials_title: "موثوق من <span>قادة الصناعة.</span>",
        rev1_content: "\"كانت رافعات إس كيه عاملاً أساسياً في نجاح مشروعنا في المنطقة الشرقية. تم تنفيذ عمليات الرفع المعقدة بدقة متناهية والتزام تام بمعايير السلامة.\"",
        rev1_author: "م. فهد الزهراني",
        rev1_role: "مدير مشاريع أول، منطقة الجبيل الصناعية",
        rev2_content: "\"العمل مع مقاول معتمد ومطابق لاشتراطات أرامكو أمر ضروري بالنسبة لنا. استجابتهم السريعة وجودة رافعاتهم تجعلهم خيارنا الأول دائماً.\"",
        rev2_author: "فيصل بن حمد",
        rev2_role: "مدير مشروع، البنية التحتية للطاقة",
        rev3_content: "\"كفاءة مشغلي الرافعات وتوفر الأسطول على مدار الساعة في الرياض ونيوم ساعدنا على إنجاز مراحل المشروع قبل الموعد المحدد.\"",
        rev3_author: "سلطان العتيبي",
        rev3_role: "مدير لوجستيات المشاريع الكبرى، الرياض",
        leadership_tag: "القيادة الرؤيوية",
        leadership_title: "التميز <span>الاستراتيجي.</span>",
        ceo_name: "محمد أمجد",
        ceo_role: "الرئيس التنفيذي",
        ceo_desc: "مهندس الرؤية الاستراتيجية التي تقود نمونا وتوسعنا في قطاع المعدات الثقيلة بالمملكة.",
        chairman_name: "تشودري منور حسين سيال",
        chairman_role: "رئيس مجلس الإدارة",
        chairman_desc: "حارس معاييرنا الأخلاقية وإرث الثقة عبر سنوات من النجاح.",
        md_name: "تشودري أرشد علي سيال",
        md_role: "العضو المنتدب",
        md_desc: "متخصص في التوريد العالمي وربط القدرات التصنيعية باحتياجات المشاريع السعودية.",
        md2_name: "تصور حسين سيال",
        md2_role: "العضو المنتدب",
        md2_desc: "قيادة التميز التشغيلي وضمان جاهزية وموثوقية الأسطول لكافة العملاء.",
        footer_desc: "الارتقاء بالبنية التحتية في المملكة العربية السعودية بأعلى طاقات الرفع والاعتمادية.",
        footer_links_title: "روابط سريعة",
        footer_contact_title: "معلومات الاتصال",
        footer_hq: "المقر الرئيسي - الرياض",
        footer_addr: "مخرج 18، المنطقة الصناعية، الرياض، السعودية",
        footer_hotline: "الخط الساخن المباشر",
        footer_email: "البريد الإلكتروني",
        footer_sourcing_title: "التوريد المباشر",
        footer_sourcing_desc: "استيراد مباشر من مصانع الصين للمعدات والرافعات الجديدة والمستعملة.",
        footer_wa_inquiry: "استفسار عبر واتساب",
        footer_rights: "© 2026 إس كيه للمواصلات السعودية. جميع الحقوق محفوظة.",
        footer_designed: "تصميم م. أحمد سيال",
        floating_chat: "تحدث معنا"
    }
};

// Language Switcher Function
function setLanguage(lang) {
    const activeFlag = document.getElementById('active-flag');
    if (activeFlag) {
        if (lang === 'en') activeFlag.innerHTML = "🇬🇧 EN";
        else if (lang === 'ar') activeFlag.innerHTML = "🇸🇦 AR";
    }

    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    localStorage.setItem('preferred_language', lang);
    const dropdown = document.querySelector('.lang-dropdown-content');
    if (dropdown) dropdown.classList.remove('show');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    if (savedLang === 'ar') {
        setLanguage('ar');
    }
});
