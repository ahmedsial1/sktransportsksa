/**
 * SK TRANSPORTS KSA - CORE JAVASCRIPT ENGINE
 * Heavy Truck Mobile Crane Rental & Sales | Saudi Arabia
 * Aramco & TUV Middle East Standards Compliant
 */

// Global Configuration
const CONFIG = {
    phone: "966500000000",
    phoneDisplay: "+966 50 000 0000",
    email: "info@sktransportsksa.com",
    companyName: "SK Transports KSA"
};

// Bilingual Translations Dictionary (English & Arabic)
const TRANSLATIONS = {
    en: {
        // Top Bar
        top_phone_label: "24/7 Saudi Operations Hotline",
        top_service_areas: "Service Coverage: Riyadh | Dammam / Jubail | Jeddah | NEOM",
        top_badge: "Saudi Vision 2030 Partner",
        
        // Navigation
        nav_home: "Home",
        nav_fleet: "Fleet (Rent & Sale)",
        nav_services: "Services",
        nav_safety: "Safety & Compliance",
        nav_about: "About Us",
        nav_contact: "Contact",
        nav_quote_btn: "Request a Quote",
        
        // Hero
        hero_badge: "Aramco Standard Compliant • TUV Certified Safety Standards",
        hero_title_1: "Saudi Arabia’s Premier",
        hero_title_2: "Heavy Lifting & Mobile Crane Fleet",
        hero_desc: "Powering Vision 2030 infrastructure with heavy-duty SANY mobile truck cranes (50T to 500T). Available for short/long-term rental and direct factory sales across the Kingdom.",
        btn_explore_fleet: "Explore Fleet (50T–500T)",
        btn_instant_wa: "Instant WhatsApp Quote",
        hero_badge_sub: "Aramco GI 7.027 & 7.028 Tested Operators",
        
        // Stats
        stat_1_val: "50T–500T",
        stat_1_lbl: "Fleet Range",
        stat_1_desc: "Heavy-duty truck & all-terrain cranes ready for mega-projects.",
        stat_2_val: "100%",
        stat_2_lbl: "Aramco & TUV Compliant",
        stat_2_desc: "Certified lifting gear, load tests & certified riggers.",
        stat_3_val: "24/7",
        stat_3_lbl: "Field Support",
        stat_3_desc: "Dedicated mobile mechanical crews in Riyadh, Dammam & NEOM.",
        stat_4_val: "DIRECT",
        stat_4_lbl: "Factory-to-Site Sales",
        stat_4_desc: "Factory-direct SANY cranes with full KSA customs clearance.",
        
        // Fleet Section
        fleet_badge: "High-Capacity Equipment",
        fleet_title: "Saudi Arabia Mobile Crane Fleet",
        fleet_subtitle: "Available for Dry/Wet lease or commercial purchase with certified Aramco operator crews.",
        filter_all: "All Cranes (50T–500T)",
        filter_50_80: "50T – 80T",
        filter_100_250: "100T – 250T",
        filter_300_500: "300T – 500T",
        
        btn_rent: "Book for Rent",
        btn_buy: "Inquire to Buy",
        btn_chart: "Load Chart (PDF)",
        
        spec_capacity: "Max Capacity",
        spec_boom: "Main Boom",
        spec_jib: "Fly Jib",
        spec_drive: "Drive Config",
        
        // Services Section
        services_badge: "End-to-End Solutions",
        services_title: "Heavy Lifting & Equipment Services",
        services_subtitle: "Providing comprehensive crane rental, machinery procurement, and engineered lift execution across Saudi Arabia.",
        
        service_1_title: "Mobile Crane Rentals (Dry & Wet)",
        service_1_desc: "Short-term, long-term, and project-based crane hire with Saudi Aramco & TUV certified crane operators and riggers.",
        service_1_f1: "Certified Wet Lease with experienced crew",
        service_1_f2: "Bare Dry Lease for qualified contractors",
        service_1_f3: "Rapid on-site dispatch across KSA",
        
        service_2_title: "Direct Heavy Machinery Sales",
        service_2_desc: "Factory-direct procurement of SANY truck cranes with full Saudi customs clearance, SASO compliance, and warranty support.",
        service_2_f1: "Direct factory pricing & OEM warranty",
        service_2_f2: "Customs clearance & port logistics (Dammam/Jeddah)",
        service_2_f3: "Spare parts & commissioning support",
        
        service_3_title: "Engineered Lift Planning",
        service_3_desc: "Professional site surveys, 3D CAD lift simulation, ground bearing pressure assessments, and full method statements.",
        service_3_f1: "Aramco-compliant Critical Lift Plans (CLP)",
        service_3_f2: "Ground bearing calculation & outrigger matting",
        service_3_f3: "Tandem lift & complex rigging engineering",
        
        // 4-Step Process
        process_badge: "Deployment Workflow",
        process_title: "How We Execute Your Lifts",
        process_subtitle: "From technical specifications to safe, on-schedule lifting execution anywhere in Saudi Arabia.",
        
        step_1_title: "1. Submit Lift Specs",
        step_1_desc: "Share your payload weight, working radius, lift height, and project location in KSA.",
        step_2_title: "2. Technical Assessment",
        step_2_desc: "Our lift engineers review ground capacity, boom angle, rigging configurations, and safety clearances.",
        step_3_title: "3. Rapid Site Deployment",
        step_3_desc: "Mobilization of certified SANY mobile crane and Aramco-tested crew directly to your job site.",
        step_4_title: "4. Safe 24/7 Execution",
        step_4_desc: "Zero-incident lift execution with continuous field mechanical supervision and real-time support.",
        
        // Safety Section
        safety_badge: "Uncompromising Standards",
        safety_title: "Aramco & TUV Certified Safety Standards",
        safety_subtitle: "Safety is our first priority. Every crane and operator undergoes stringent third-party certification.",
        safety_item_1_title: "Saudi Aramco GI 7.027 & 7.028 Compliance",
        safety_item_1_desc: "All cranes meet Aramco safety inspection sticker protocols with calibrated load indicators (LMI).",
        safety_item_2_title: "TUV Middle East Third-Party Certification",
        safety_item_2_desc: "Annual and semi-annual structural and hydraulic non-destructive testing (NDT) and proof load tests.",
        safety_item_3_title: "10-Point Daily Pre-Lift Inspection",
        safety_item_3_desc: "Comprehensive daily checks on wire ropes, outriggers, hydraulic pressure, limit switches, and ground conditions.",
        safety_item_4_title: "Level 1, 2 & 3 Certified Riggers & Operators",
        safety_item_4_desc: "Trained operators with extensive experience in petrochemical, civil infrastructure, and refinery operations.",
        
        // RFQ Form
        rfq_badge: "Direct Pricing",
        rfq_title: "Request an Instant Heavy Lift Quote",
        rfq_subtitle: "Fill out the project details below for rapid quotation within 15 minutes.",
        rfq_banner_title: "Get Factory & Rental Rates Across Saudi Arabia",
        rfq_banner_sub: "Direct response from our Riyadh & Eastern Province dispatch team.",
        
        form_name: "Full Name",
        form_company: "Company Name",
        form_phone: "Phone / WhatsApp Number (+966)",
        form_service: "Service Required",
        form_service_opt1: "Rental - Wet Lease (With Aramco Operator)",
        form_service_opt2: "Rental - Dry Lease (Bare Crane)",
        form_service_opt3: "Direct Crane Purchase (Factory Sales)",
        form_capacity: "Required Tonnage Capacity",
        form_location: "Job Site Location in Saudi Arabia",
        form_loc_riyadh: "Riyadh & Central Province",
        form_loc_eastern: "Eastern Province (Dammam, Jubail, Khobar, Ras Al Khair)",
        form_loc_western: "Western Province (Jeddah, Makkah, Yanbu)",
        form_loc_neom: "NEOM / Tabuk / Red Sea Project",
        form_loc_other: "Other KSA Location",
        form_scope: "Scope of Work / Lift Radius / Duration",
        form_submit_btn: "Submit Quote Request",
        form_submitting: "Submitting Request...",
        form_note: "Your data is secure. We respond within 15 minutes during active operations.",
        
        // Footer
        footer_about_title: "About SK Transports KSA",
        footer_about_text: "Saudi Arabia’s trusted partner for heavy truck mobile crane rental and direct machinery sales. Delivering certified lifting power for Vision 2030 mega-projects.",
        footer_links_title: "Quick Links",
        footer_locations_title: "Saudi Arabia Yards & Hubs",
        footer_loc_riyadh: "Riyadh Yard: Exit 18, Industrial Area, Riyadh, KSA",
        footer_loc_dammam: "Eastern Hub: King Abdulaziz Port Rd, Dammam / Jubail",
        footer_loc_jeddah: "Western Yard: Al-Khumra Industrial Zone, Jeddah",
        footer_loc_neom: "NEOM Base: Tabuk Logistics Corridor, KSA",
        footer_rights: "© 2026 SK Transports KSA. All Rights Reserved. Aramco & TUV Standard Compliant.",
        
        // Modal
        modal_load_chart_title: "Load Capacity Chart (Tons vs Radius)",
        modal_download_btn: "Download Technical Spec Sheet (PDF)",
        modal_book_title: "Inquire About Crane",
        modal_book_btn: "Send Inquiry via WhatsApp"
    },
    ar: {
        // Top Bar
        top_phone_label: "الخط الساخن لعمليات الرفع في المملكة (24/7)",
        top_service_areas: "نطاق الخدمة: الرياض | الدمام / الجبيل | جدة | نيوم",
        top_badge: "شريك مشاريع رؤية السعودية 2030",
        
        // Navigation
        nav_home: "الرئيسية",
        nav_fleet: "الأسطول (تأجير وبيع)",
        nav_services: "خدماتنا",
        nav_safety: "السلامة والامتثال",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        nav_quote_btn: "طلب تسعيرة فورية",
        
        // Hero
        hero_badge: "معتمد وفق معايير أرامكو السعودية • شهادات سلامة TUV العالمية",
        hero_title_1: "الأسطول الرائد في المملكة العربية السعودية",
        hero_title_2: "لتأجير وبيع الرافعات المتنقلة الثقيلة",
        hero_desc: "ندعم البنية التحتية ومشاريع رؤية السعودية 2030 بأسطول متكامل من رافعات ساني SANY المتنقلة (من 50 طن إلى 500 طن). متوفرة للتأجير القصير والطويل والبيع المباشر في جميع أنحاء المملكة.",
        btn_explore_fleet: "استكشف الأسطول (50–500 طن)",
        btn_instant_wa: "تسعيرة فورية عبر واتساب",
        hero_badge_sub: "مشغلون معتمدون ومختبرون وفق معايير أرامكو GI 7.027",
        
        // Stats
        stat_1_val: "50–500 طن",
        stat_1_lbl: "سعة الأسطول",
        stat_1_desc: "رافعات هيدروليكية ثقيلة لجميع المشاريع العملاقة بالمملكة.",
        stat_2_val: "100%",
        stat_2_lbl: "مطابقة أرامكو و TUV",
        stat_2_desc: "معدات مفحوصة ومختبرة مع ريجر ومشغلين معتمدين.",
        stat_3_val: "24/7",
        stat_3_lbl: "دعم ميداني وصيانة",
        stat_3_desc: "فرق دعم وصيانة متنقلة في الرياض والدمام ونيوم.",
        stat_4_val: "مباشر",
        stat_4_lbl: "بيع من المصنع للموقع",
        stat_4_desc: "رافعات ساني جديدة ومستعملة مع التخليص الجمركي الكامل.",
        
        // Fleet Section
        fleet_badge: "معدات الرفع الثقيل",
        fleet_title: "أسطول الرافعات المتنقلة في السعودية",
        fleet_subtitle: "متوفرة للتأجير الرطب (مع طاقم عمل) أو الجاف والشراء المباشر مع طواقم معتمدة من أرامكو.",
        filter_all: "جميع الرافعات (50–500 طن)",
        filter_50_80: "50 طن – 80 طن",
        filter_100_250: "100 طن – 250 طن",
        filter_300_500: "300 طن – 500 طن",
        
        btn_rent: "حجز للإيجار",
        btn_buy: "طلب شراء",
        btn_chart: "جدول الأحمال (PDF)",
        
        spec_capacity: "الحمولة القصوى",
        spec_boom: "طول الذراع الرئيسي",
        spec_jib: "ذراع التمديد",
        spec_drive: "نظام الدفع والمحاور",
        
        // Services Section
        services_badge: "حلول رفع متكاملة",
        services_title: "خدمات الرافعات والمعدات الثقيلة",
        services_subtitle: "نوفر خدمات تأجير الرافعات، توريد المعدات، وتخطيط عمليات الرفع الهندسي في كافة مناطق المملكة.",
        
        service_1_title: "تأجير الرافعات المتنقلة (رطب وجاف)",
        service_1_desc: "تأجير رافعات قصير وطويل الأجل مع مشغلي رافعات وفنيي ربط أحمال (Riggers) معتمدين من أرامكو وTUV.",
        service_1_f1: "تأجير رطب مع طاقم فني معتمد",
        service_1_f2: "تأجير جاف للمقاولين المؤهلين",
        service_1_f3: "تجهيز ونقل فوري إلى مواقع العمل بالمملكة",
        
        service_2_title: "البيع المباشر للمعدات والرافعات",
        service_2_desc: "استيراد وتوريد مباشر لرافعات ساني SANY من المصنع مع التخليص الجمركي وشهادات سابر والضمان.",
        service_2_f1: "أسعار المصنع المباشرة وضمان الوكيل",
        service_2_f2: "تخليص جمركي عبر ميناء الدمام وجدة الإسلامي",
        service_2_f3: "توفير قطع الغيار وتدريب التشغيل الميداني",
        
        service_3_title: "التخطيط الهندسي لعمليات الرفع",
        service_3_desc: "دراسات ميدانية متكاملة، محاكاة ثلاثية الأبعاد 3D CAD، وحسابات ضغط التربة وخطة الرفع الحرجة.",
        service_3_f1: "خطط رفع حرجة معتمدة وفق اشتراطات أرامكو",
        service_3_f2: "حساب ضغط التربة وألواح الركائز",
        service_3_f3: "هندسة الرفع المزدوج والأحمال المعقدة",
        
        // 4-Step Process
        process_badge: "آلية العمل والتنفيذ",
        process_title: "خطوات تنفيذ عمليات الرفع",
        process_subtitle: "من استلام مواصفات الحمولة حتى إتمام الرفع بأمان تام في أي موقع بالمملكة.",
        
        step_1_title: "1. تقديم بيانات الرفع",
        step_1_desc: "تحديد وزن الحمولة، نصف قطر الرفع (Radius)، الارتفاع المطلوب، وموقع المشروع.",
        step_2_title: "2. التقييم الهندسي الفني",
        step_2_desc: "يقوم مهندسو الرفع بدراسة زوايا الذراع، قدرة التربة، واختيار الرافعة المثالية وفق اشتراطات السلامة.",
        step_3_title: "3. النقل والانتشار بالموقع",
        step_3_desc: "تحريك الرافعة وطاقم العمل المعتمد إلى موقع العمل في الرياض، الدمام، جدة أو نيوم.",
        step_4_title: "4. التنفيذ الآمن على مدار 24/7",
        step_4_desc: "تنفيذ عملية الرفع بأعلى معايير السلامة بدون حوادث مع إشراف فني وميكانيكي متواصل.",
        
        // Safety Section
        safety_badge: "معايير سلامة لا تهاون فيها",
        safety_title: "معايير السلامة والامتثال لأرامكو و TUV",
        safety_subtitle: "السلامة أولاً وقبل كل شيء. تخضع رافعاتنا وطواقمنا لأعلى مستويات الفحص والاعتماد الدوري.",
        safety_item_1_title: "مطابقة تعليمات أرامكو GI 7.027 و GI 7.028",
        safety_item_1_desc: "حصول الرافعات على استيكرات فحص أرامكو مع أجهزة مؤشر عزم الحمل LMI المعايرة.",
        safety_item_2_title: "شهادات طرف ثالث من TUV Middle East",
        safety_item_2_desc: "اختبارات فحص غير إتلافي (NDT) واختبارات التحميل الدوري للوايرات والهيكل الهيدروليكي.",
        safety_item_3_title: "فحص يومي شامل من 10 نقاط قبل كل رفع",
        safety_item_3_desc: "فحص يومي صارم يشمل الوايرات، الركائز الهيدروليكية، حساسات الأمان، واستقرار الأرض.",
        safety_item_4_title: "طواقم ريجر ومشغلين معتمدين (مستوى 1 و 2 و 3)",
        safety_item_4_desc: "مشغلون ذوو خبرة واسعة في مصافي النفط، محطات الطاقة، ومشاريع البنية التحتية الضخمة.",
        
        // RFQ Form
        rfq_badge: "تسعير فوري",
        rfq_title: "اطلب تسعيرة لعمليات الرفع والمعدات",
        rfq_subtitle: "أدخل تفاصيل مشروعك وسيقوم فريق العمليات بالرد عليك خلال 15 دقيقة.",
        rfq_banner_title: "احصل على أفضل أسعار الإيجار والبيع في المملكة",
        rfq_banner_sub: "تواصل مباشر مع مسؤولي العمليات في الرياض والمنطقة الشرقية.",
        
        form_name: "الاسم الكامل",
        form_company: "اسم الشركة / المؤسسة",
        form_phone: "رقم الجوال / واتساب (+966)",
        form_service: "نوع الخدمة المطلوبة",
        form_service_opt1: "تأجير رطب (مع مشغل معتمد من أرامكو)",
        form_service_opt2: "تأجير جاف (بدون مشغل)",
        form_service_opt3: "شراء رافعة جديدة / مستعملة (بيع مباشر)",
        form_capacity: "حمولة الرافعة المطلوبة",
        form_location: "موقع المشروع في المملكة",
        form_loc_riyadh: "الرياض والمنطقة الوسطى",
        form_loc_eastern: "المنطقة الشرقية (الدمام، الجبيل، الخبر، رأس الخير)",
        form_loc_western: "المنطقة الغربية (جدة، مكة، ينبع)",
        form_loc_neom: "مشروع نيوم / تبوك / البحر الأحمر",
        form_loc_other: "موقع آخر بالمملكة",
        form_scope: "طبيعة العمل / وزن الحمولة / مدة المشروع",
        form_submit_btn: "إرسال طلب التسعيرة الآن",
        form_submitting: "جاري إرسال الطلب...",
        form_note: "بياناتكم مشفرة ومحمية. نرد خلال 15 دقيقة في أوقات العمل والعمليات الميدانية.",
        
        // Footer
        footer_about_title: "عن شركة SK Transports KSA",
        footer_about_text: "الشريك الموثوق في المملكة لتأجير وبيع رافعات الشاحنات المتنقلة والمعدات الثقيلة الداعمة لمشاريع رؤية السعودية 2030.",
        footer_links_title: "روابط سريعة",
        footer_locations_title: "فروع وساحات العمليات بالمملكة",
        footer_loc_riyadh: "ساحة الرياض: مخرج 18، المنطقة الصناعية، الرياض",
        footer_loc_dammam: "فرع الشرقية: طريق ميناء الملك عبدالعزيز، الدمام / الجبيل",
        footer_loc_jeddah: "ساحة الغربية: منطقة الخمرة الصناعية، جدة",
        footer_loc_neom: "قاعدة نيوم: ممر الإمداد اللوجستي، تبوك",
        footer_rights: "© 2026 جميع الحقوق محفوظة لشركة SK Transports KSA. معتمدة وفق معايير أرامكو و TUV.",
        
        // Modal
        modal_load_chart_title: "جدول سعة الأحمال ونصف القطر (طن / متر)",
        modal_download_btn: "تحميل المواصفات الفنية وجدول الأحمال (PDF)",
        modal_book_title: "استفسار عن رافعة",
        modal_book_btn: "إرسال الاستفسار عبر واتساب"
    }
};

// Fleet Technical Data for Load Charts & Specifications
const FLEET_DATA = {
    "50t": {
        model: "SANY STC500",
        tonnage: "50 Ton",
        boom: "43.5 m",
        jib: "16.0 m",
        maxTipHeight: "59.5 m",
        drive: "8 × 4",
        engine: "Weichai WP10.336 (247 kW)",
        chassis: "Heavy-duty 4-axle chassis with full differential locks",
        category: "50-80",
        image: "/assets/fleet-50t.jpg.png",
        loadChart: [
            { radius: "3.0 m", capacity: "50.0 T", boomLength: "11.3 m" },
            { radius: "4.0 m", capacity: "40.0 T", boomLength: "15.5 m" },
            { radius: "6.0 m", capacity: "28.5 T", boomLength: "23.5 m" },
            { radius: "8.0 m", capacity: "19.2 T", boomLength: "31.5 m" },
            { radius: "12.0 m", capacity: "11.0 T", boomLength: "39.5 m" },
            { radius: "16.0 m", capacity: "6.8 T", boomLength: "43.5 m" },
            { radius: "22.0 m", capacity: "3.4 T", boomLength: "43.5 m" },
            { radius: "28.0 m", capacity: "1.8 T", boomLength: "43.5 m + Jib" }
        ]
    },
    "80t": {
        model: "SANY STC800",
        tonnage: "80 Ton",
        boom: "48.0 m",
        jib: "17.5 m",
        maxTipHeight: "65.5 m",
        drive: "8 × 4",
        engine: "Dongfeng Cummins ISLe375 30",
        chassis: "Heavy-duty 4-axle carrier with high torque drivetrain",
        category: "50-80",
        image: "/assets/fleet-80t.jpg.png",
        loadChart: [
            { radius: "3.0 m", capacity: "80.0 T", boomLength: "12.2 m" },
            { radius: "5.0 m", capacity: "55.0 T", boomLength: "16.8 m" },
            { radius: "8.0 m", capacity: "32.0 T", boomLength: "25.8 m" },
            { radius: "12.0 m", capacity: "18.5 T", boomLength: "34.8 m" },
            { radius: "16.0 m", capacity: "11.8 T", boomLength: "43.8 m" },
            { radius: "20.0 m", capacity: "8.2 T", boomLength: "48.0 m" },
            { radius: "26.0 m", capacity: "4.5 T", boomLength: "48.0 m" },
            { radius: "32.0 m", capacity: "2.5 T", boomLength: "48.0 m + Jib" }
        ]
    },
    "100t": {
        model: "SANY STC1000",
        tonnage: "100 Ton",
        boom: "60.0 m",
        jib: "18.5 m",
        maxTipHeight: "78.5 m",
        drive: "8 × 6",
        engine: "Mercedes-Benz / Weichai 338 kW",
        chassis: "All-wheel steer capable 4-axle heavy chassis",
        category: "100-250",
        image: "/assets/fleet-100t.jpg.png",
        loadChart: [
            { radius: "3.0 m", capacity: "100.0 T", boomLength: "13.5 m" },
            { radius: "6.0 m", capacity: "62.0 T", boomLength: "22.5 m" },
            { radius: "10.0 m", capacity: "38.0 T", boomLength: "35.0 m" },
            { radius: "14.0 m", capacity: "24.0 T", boomLength: "44.0 m" },
            { radius: "18.0 m", capacity: "16.5 T", boomLength: "52.0 m" },
            { radius: "24.0 m", capacity: "10.2 T", boomLength: "60.0 m" },
            { radius: "30.0 m", capacity: "6.5 T", boomLength: "60.0 m" },
            { radius: "38.0 m", capacity: "3.2 T", boomLength: "60.0 m + Jib" }
        ]
    },
    "130t": {
        model: "SANY STC1300",
        tonnage: "130 Ton",
        boom: "63.0 m",
        jib: "22.0 m",
        maxTipHeight: "85.0 m",
        drive: "10 × 6",
        engine: "Mercedes-Benz OM471LA (360 kW)",
        chassis: "5-axle all-terrain chassis with hydropneumatic suspension",
        category: "100-250",
        image: "/assets/fleet-130t.jpg.png",
        loadChart: [
            { radius: "3.0 m", capacity: "130.0 T", boomLength: "13.4 m" },
            { radius: "6.0 m", capacity: "80.0 T", boomLength: "23.0 m" },
            { radius: "10.0 m", capacity: "49.0 T", boomLength: "36.0 m" },
            { radius: "16.0 m", capacity: "28.0 T", boomLength: "49.0 m" },
            { radius: "22.0 m", capacity: "17.5 T", boomLength: "58.0 m" },
            { radius: "28.0 m", capacity: "11.2 T", boomLength: "63.0 m" },
            { radius: "36.0 m", capacity: "6.8 T", boomLength: "63.0 m" },
            { radius: "44.0 m", capacity: "3.5 T", boomLength: "63.0 m + Jib" }
        ]
    },
    "160t": {
        model: "SANY STC1600",
        tonnage: "160 Ton",
        boom: "65.0 m",
        jib: "28.0 m",
        maxTipHeight: "93.0 m",
        drive: "10 × 6",
        engine: "Mercedes-Benz OM471LA (390 kW)",
        chassis: "5-axle chassis with multi-mode steering",
        category: "100-250",
        image: "/assets/fleet-160t.jpg.png",
        loadChart: [
            { radius: "3.0 m", capacity: "160.0 T", boomLength: "14.2 m" },
            { radius: "6.0 m", capacity: "95.0 T", boomLength: "24.5 m" },
            { radius: "12.0 m", capacity: "54.0 T", boomLength: "39.0 m" },
            { radius: "18.0 m", capacity: "31.0 T", boomLength: "52.0 m" },
            { radius: "24.0 m", capacity: "19.5 T", boomLength: "60.0 m" },
            { radius: "32.0 m", capacity: "12.0 T", boomLength: "65.0 m" },
            { radius: "40.0 m", capacity: "7.2 T", boomLength: "65.0 m" },
            { radius: "50.0 m", capacity: "3.8 T", boomLength: "65.0 m + Jib" }
        ]
    },
    "200t": {
        model: "SANY SAC2000",
        tonnage: "200 Ton",
        boom: "68.0 m",
        jib: "34.0 m",
        maxTipHeight: "102.0 m",
        drive: "10 × 8",
        engine: "Mercedes-Benz OM502LA",
        chassis: "5-axle all-terrain carrier with crab-steering",
        category: "100-250",
        image: "/assets/fleet-200t.jpg.png",
        loadChart: [
            { radius: "3.0 m", capacity: "200.0 T", boomLength: "14.5 m" },
            { radius: "8.0 m", capacity: "105.0 T", boomLength: "27.0 m" },
            { radius: "14.0 m", capacity: "58.0 T", boomLength: "42.0 m" },
            { radius: "20.0 m", capacity: "36.0 T", boomLength: "56.0 m" },
            { radius: "28.0 m", capacity: "21.0 T", boomLength: "64.0 m" },
            { radius: "36.0 m", capacity: "13.5 T", boomLength: "68.0 m" },
            { radius: "46.0 m", capacity: "8.0 T", boomLength: "68.0 m" },
            { radius: "56.0 m", capacity: "4.2 T", boomLength: "68.0 m + Jib" }
        ]
    },
    "220t": {
        model: "SANY SAC2200",
        tonnage: "220 Ton",
        boom: "72.0 m",
        jib: "36.0 m",
        maxTipHeight: "108.0 m",
        drive: "10 × 8",
        engine: "Mercedes-Benz OM502LA (405 kW)",
        chassis: "5-axle all-terrain carrier with full electronic levelling",
        category: "100-250",
        image: "/assets/fleet-220t.jpg.jpg",
        loadChart: [
            { radius: "3.0 m", capacity: "220.0 T", boomLength: "15.0 m" },
            { radius: "8.0 m", capacity: "115.0 T", boomLength: "28.5 m" },
            { radius: "14.0 m", capacity: "65.0 T", boomLength: "44.0 m" },
            { radius: "22.0 m", capacity: "38.0 T", boomLength: "58.0 m" },
            { radius: "30.0 m", capacity: "22.5 T", boomLength: "67.0 m" },
            { radius: "40.0 m", capacity: "13.0 T", boomLength: "72.0 m" },
            { radius: "50.0 m", capacity: "7.8 T", boomLength: "72.0 m" },
            { radius: "60.0 m", capacity: "4.0 T", boomLength: "72.0 m + Jib" }
        ]
    },
    "350t": {
        model: "SANY SAC3500",
        tonnage: "350 Ton",
        boom: "84.0 m",
        jib: "42.0 m",
        maxTipHeight: "126.0 m",
        drive: "12 × 8",
        engine: "Mercedes-Benz OM502LA (480 kW)",
        chassis: "6-axle heavy-duty heavy lifting carrier with Y-guying superlift",
        category: "300-500",
        image: "/assets/fleet-350t.jpg.png",
        loadChart: [
            { radius: "3.5 m", capacity: "350.0 T", boomLength: "16.2 m" },
            { radius: "10.0 m", capacity: "165.0 T", boomLength: "32.0 m" },
            { radius: "16.0 m", capacity: "92.0 T", boomLength: "51.0 m" },
            { radius: "24.0 m", capacity: "54.0 T", boomLength: "68.0 m" },
            { radius: "34.0 m", capacity: "31.0 T", boomLength: "78.0 m" },
            { radius: "44.0 m", capacity: "18.5 T", boomLength: "84.0 m" },
            { radius: "56.0 m", capacity: "10.5 T", boomLength: "84.0 m" },
            { radius: "68.0 m", capacity: "5.5 T", boomLength: "84.0 m + Jib" }
        ]
    },
    "500t": {
        model: "SANY SAC5000",
        tonnage: "500 Ton",
        boom: "90.0 m",
        jib: "63.0 m",
        maxTipHeight: "153.0 m",
        drive: "16 × 8",
        engine: "Mercedes-Benz OM502LA Twin Turbo (500 kW)",
        chassis: "8-axle mega all-terrain crane with full modular counterweight & superlift",
        category: "300-500",
        image: "/assets/hero.png",
        loadChart: [
            { radius: "4.0 m", capacity: "500.0 T", boomLength: "18.0 m" },
            { radius: "12.0 m", capacity: "240.0 T", boomLength: "36.0 m" },
            { radius: "20.0 m", capacity: "135.0 T", boomLength: "58.0 m" },
            { radius: "30.0 m", capacity: "78.0 T", boomLength: "75.0 m" },
            { radius: "42.0 m", capacity: "44.0 T", boomLength: "85.0 m" },
            { radius: "54.0 m", capacity: "26.0 T", boomLength: "90.0 m" },
            { radius: "68.0 m", capacity: "15.0 T", boomLength: "90.0 m" },
            { radius: "82.0 m", capacity: "8.2 T", boomLength: "90.0 m + Jib" }
        ]
    }
};

// State Management
let currentLanguage = localStorage.getItem('sk_lang') || 'en';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initLanguage(currentLanguage);
    initNavigation();
    initFleetFilters();
    initModals();
    initRFQForm();
});

/**
 * 1. Language & i18n Engine
 */
function initLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('sk_lang', lang);
    
    // Set HTML Dir and Lang attributes
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all i18n elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = TRANSLATIONS[lang][key];
            } else {
                el.innerHTML = TRANSLATIONS[lang][key];
            }
        }
    });
    
    // Update Language Toggle Button Label
    const langBtnText = document.getElementById('lang-toggle-text');
    if (langBtnText) {
        langBtnText.textContent = lang === 'ar' ? 'English (EN)' : 'العربية (AR)';
    }
}

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en';
    initLanguage(newLang);
}

/**
 * 2. Sticky Nav & Mobile Drawer
 */
function initNavigation() {
    const header = document.querySelector('.header-main');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * 3. Fleet Filter Tabs
 */
function initFleetFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const fleetCards = document.querySelectorAll('.fleet-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            fleetCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

/**
 * 4. Load Chart Viewer Modal & Inquiry Triggers
 */
function initModals() {
    // Close modal on background or close button click
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('.modal-close-btn')) {
                closeAllModals();
            }
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
}

function openLoadChart(craneKey) {
    const crane = FLEET_DATA[craneKey];
    if (!crane) return;
    
    const modal = document.getElementById('load-chart-modal');
    if (!modal) return;
    
    const titleEl = modal.querySelector('.modal-crane-title');
    const specsEl = modal.querySelector('.modal-crane-specs');
    const tableBodyEl = modal.querySelector('.modal-chart-body');
    const downloadBtn = modal.querySelector('.modal-download-btn');
    
    if (titleEl) titleEl.textContent = `${crane.model} (${crane.tonnage})`;
    if (specsEl) {
        specsEl.innerHTML = `
            <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 15px; font-size: 0.85rem; color: var(--text-dim);">
                <span><strong style="color: #FFF;">Main Boom:</strong> ${crane.boom}</span>
                <span><strong style="color: #FFF;">Fly Jib:</strong> ${crane.jib}</span>
                <span><strong style="color: #FFF;">Max Tip Height:</strong> ${crane.maxTipHeight}</span>
                <span><strong style="color: #FFF;">Drive:</strong> ${crane.drive}</span>
            </div>
        `;
    }
    
    if (tableBodyEl) {
        tableBodyEl.innerHTML = crane.loadChart.map(row => `
            <tr>
                <td style="font-weight: 700; color: var(--text-main);">${row.radius}</td>
                <td style="color: var(--primary); font-weight: 800; font-size: 0.95rem;">${row.capacity}</td>
                <td style="color: var(--text-dim);">${row.boomLength}</td>
            </tr>
        `).join('');
    }
    
    if (downloadBtn) {
        downloadBtn.onclick = () => {
            showToast(`Generating load chart PDF for ${crane.model}...`);
            setTimeout(() => {
                window.print();
            }, 500);
        };
    }
    
    modal.classList.add('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

/**
 * Direct WhatsApp Booking & Inquiries
 */
function bookCrane(craneKey, type = 'rent') {
    const crane = FLEET_DATA[craneKey];
    const craneName = crane ? `${crane.model} (${crane.tonnage})` : craneKey;
    const actionText = type === 'rent' ? 'Rental (Dry/Wet)' : 'Commercial Direct Purchase';
    
    const message = currentLanguage === 'ar'
        ? `السلام عليكم، أرغب في الاستفسار عن ${actionText} لرافعة ${craneName} في المملكة العربية السعودية.`
        : `Hello SK Transports KSA, I would like to inquire about ${actionText} for ${craneName} in Saudi Arabia.`;
        
    window.open(`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function contactGeneralWA() {
    const message = currentLanguage === 'ar'
        ? "السلام عليكم، أرغب في الاستفسار عن خدمات وأسعار الرافعات المتنقلة في المملكة العربية السعودية."
        : "Hello SK Transports KSA, I am inquiring about Heavy Mobile Crane rental and sales in Saudi Arabia.";
    window.open(`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`, '_blank');
}

/**
 * 5. Interactive Lead Gen / RFQ Form Handler
 */
function initRFQForm() {
    const form = document.getElementById('rfq-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Collect Form Data
        const name = form.querySelector('#rfq-name')?.value || '';
        const company = form.querySelector('#rfq-company')?.value || '';
        const phone = form.querySelector('#rfq-phone')?.value || '';
        const service = form.querySelector('#rfq-service')?.value || '';
        const capacity = form.querySelector('#rfq-capacity')?.value || '';
        const location = form.querySelector('#rfq-location')?.value || '';
        const scope = form.querySelector('#rfq-scope')?.value || '';
        
        // Validation
        if (!name || !phone) {
            showToast(currentLanguage === 'ar' ? 'يرجى إدخال الاسم ورقم الجوال' : 'Please provide your Name and Phone number', 'danger');
            return;
        }
        
        // Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${currentLanguage === 'ar' ? 'جاري إرسال الطلب...' : 'Submitting Request...'}`;
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Format WhatsApp Message for direct fast-track dispatch
            const waMsg = currentLanguage === 'ar'
                ? `*طلب تسعيرة رافعة جديدة - SK Transports KSA*\n` +
                  `👤 *الاسم:* ${name}\n` +
                  `🏢 *الشركة:* ${company || 'غير محدد'}\n` +
                  `📱 *الجوال:* ${phone}\n` +
                  `⚙️ *نوع الخدمة:* ${service}\n` +
                  `🏗️ *الحمولة المطلوبة:* ${capacity}\n` +
                  `📍 *الموقع:* ${location}\n` +
                  `📝 *تفاصيل العمل:* ${scope || 'تسعير قياسي'}`
                : `*NEW LIFT QUOTE REQUEST - SK Transports KSA*\n` +
                  `👤 *Name:* ${name}\n` +
                  `🏢 *Company:* ${company || 'N/A'}\n` +
                  `📱 *Phone:* ${phone}\n` +
                  `⚙️ *Service:* ${service}\n` +
                  `🏗️ *Capacity:* ${capacity}\n` +
                  `📍 *Location:* ${location}\n` +
                  `📝 *Scope:* ${scope || 'Standard lift inquiry'}`;
                  
            showToast(currentLanguage === 'ar' ? 'تم استلام طلبكم بنجاح! جاري تحويلكم إلى مسؤول العمليات...' : 'Quote submitted! Connecting you to our operations desk...', 'success');
            
            form.reset();
            
            // Redirect to WhatsApp with prefilled data after 1 second
            setTimeout(() => {
                window.open(`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(waMsg)}`, '_blank');
            }, 1200);
        }, 800);
    });
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'danger') icon = 'fa-triangle-exclamation';
    
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--primary); font-size: 1.1rem;"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
