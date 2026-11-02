export type Locale = "uz" | "en" | "ru";
type Localized = Record<Locale, string>;
export type SourceItem = { title: Localized; date: string; description: Localized; url: string; status?: "archive" | "upcoming" | "reference" };
export type PortalSection = {
  slug: string;
  number: string;
  title: Localized;
  summary: Localized;
  category: Localized;
  detail: Localized;
  sources: SourceItem[];
};

export const locales: Locale[] = ["uz", "en", "ru"];

export const sections: PortalSection[] = [
{
  slug: "international-relations", number: "01",
  title: { uz: "Xalqaro aloqalar departamenti", en: "International Relations Department", ru: "Департамент международных связей" },
  summary: { uz: "Departament jamoasi, institutsional aloqa va xalqaro faoliyat koordinatsiyasi.", en: "The department team, institutional contacts and coordination of international activity.", ru: "Команда департамента, институциональные контакты и координация международной деятельности." },
  category: { uz: "INSTITUTSIONAL", en: "INSTITUTIONAL", ru: "ИНСТИТУЦИОНАЛЬНОЕ" },
  detail: {
    uz: "TDIU rasmiy saytida Xalqaro aloqalar departamenti xodimlari uchun alohida ma’lumot sahifasi mavjud. Unda departament rahbari, bo‘lim boshlig‘i, menejerlar va murojaat ma’lumotlari beriladi. Xodimlar tarkibi va aloqa ma’lumotlari o‘zgarishi mumkinligi sababli eng so‘nggi holatni rasmiy sahifadan tekshiring.",
    en: "TSUE's official website maintains a dedicated page for International Relations Department staff. It lists the department head, section leadership, managers and contact details. Since staff and contact information may change, confirm the latest details on the official page.",
    ru: "На официальном сайте ТГЭУ есть отдельная страница сотрудников Департамента международных связей. На ней указаны руководитель департамента, начальник отдела, менеджеры и контактные данные. Состав сотрудников и контакты могут меняться — проверяйте актуальную информацию на официальной странице."
  },
  sources: [{
    title: { uz: "Xalqaro aloqalar departamenti xodimlari", en: "International Relations Department staff", ru: "Сотрудники Департамента международных связей" },
    date: "Official directory", description: {
      uz: "Rahbariyat va xodimlar haqidagi rasmiy ma’lumotlar hamda aloqa kanallari.",
      en: "Official staff information and contact channels.",
      ru: "Официальные сведения о сотрудниках и каналы связи."
    }, url: "https://tsue.uz/ru/structure/centers-sections/department-of-international-relations", status: "reference"
  }]
},
{
  slug: "international-grants", number: "02",
  title: { uz: "Xalqaro grantlar", en: "International Grants", ru: "Международные гранты" },
  summary: { uz: "Xalqaro grant dasturlari, ilmiy moliyalashtirish va loyiha tayyorlash.", en: "International grant programmes, research funding and project development.", ru: "Международные грантовые программы, финансирование исследований и подготовка проектов." },
  category: { uz: "IMKONIYATLAR", en: "OPPORTUNITIES", ru: "ВОЗМОЖНОСТИ" },
  detail: {
    uz: "2025-yil 12-dekabrda TDIUda “EU–Uzbekistan: Advancing Joint Research Potential – EU Partnership Day” xalqaro konferensiyasi o‘tkazilgan. Unda Erasmus+ va Horizon Europe dasturlari, Yevropa universitetlaridan loyiha hamkorlarini topish va raqobatbardosh grant arizalarini tayyorlash masalalari muhokama qilingan. Bu — tarixiy tadbir haqidagi ma’lumot; yangi grant chaqiruvlari va muddatlarini manbadan alohida tekshiring.",
    en: "On 12 December 2025, TSUE hosted the international conference “EU–Uzbekistan: Advancing Joint Research Potential – EU Partnership Day”. Discussions covered Erasmus+ and Horizon Europe, finding project partners among European universities and preparing competitive grant proposals. This is a record of a past event; verify current calls and deadlines separately.",
    ru: "12 декабря 2025 года в ТГЭУ прошла международная конференция «EU–Uzbekistan: Advancing Joint Research Potential – EU Partnership Day». Обсуждались программы Erasmus+ и Horizon Europe, поиск партнёров среди европейских университетов и подготовка конкурентоспособных грантовых заявок. Это информация о прошедшем мероприятии; актуальные конкурсы и сроки проверяйте отдельно."
  },
  sources: [{
    title: { uz: "EU–Uzbekistan: EU Partnership Day", en: "EU–Uzbekistan: EU Partnership Day", ru: "EU–Uzbekistan: EU Partnership Day" },
    date: "12 December 2025",
    description: {
      uz: "Erasmus+, Horizon Europe va qo‘shma ilmiy loyihalarni tayyorlash bo‘yicha konferensiya.",
      en: "Conference on Erasmus+, Horizon Europe and joint research project development.",
      ru: "Конференция по Erasmus+, Horizon Europe и подготовке совместных научных проектов."
    },
    url: "https://tsue.uz/oz/news/universitetda-xorijiy-grantlarni-jalb-qilish-boyicha-xalqaro-konferensiyasi-bolib-otdi",
    status: "archive"
  }]
},
{
  slug: "transformation-center", number: "03",
  title: { uz: "Transformatsiya markazi", en: "Transformation Center", ru: "Центр трансформации" },
  summary: { uz: "Universitet transformatsiyasi, akademik standartlar va institutsional rivojlanish.", en: "University transformation, academic standards and institutional development.", ru: "Трансформация университета, академические стандарты и институциональное развитие." },
  category: { uz: "RIVOJLANISH", en: "DEVELOPMENT", ru: "РАЗВИТИЕ" },
  detail: {
    uz: "TDIUning 2025-yil 27-noyabrdagi rasmiy xabarida Transformatsiya markazi direktori ishtirokidagi King’s College London vakili bilan uchrashuv yoritilgan. Muhokama yo‘nalishlari qatorida ta’lim dasturlarini xalqaro standartlarga moslashtirish, professor-o‘qituvchilar stajirovkalari, malaka oshirish va akademik almashinuvni rivojlantirish masalalari bo‘lgan.",
    en: "A TSUE news report dated 27 November 2025 describes a meeting with a representative of King's College London attended by the Director of the Transformation Center. Topics included aligning education programmes with international standards, staff internships, professional development and academic exchange.",
    ru: "В сообщении ТГЭУ от 27 ноября 2025 года описана встреча с представителем King's College London с участием директора Центра трансформации. Обсуждались приведение образовательных программ к международным стандартам, стажировки преподавателей, повышение квалификации и академический обмен."
  },
  sources: [{
    title: { uz: "King’s College London vakili bilan uchrashuv", en: "Meeting with a King's College London representative", ru: "Встреча с представителем King's College London" },
    date: "27 November 2025",
    description: {
      uz: "Transformatsiya markazi ishtirokidagi xalqaro hamkorlik va ta’limni rivojlantirish masalalari.",
      en: "International cooperation and education development topics involving the Transformation Center.",
      ru: "Вопросы международного сотрудничества и развития образования с участием Центра трансформации."
    },
    url: "https://tsue.uz/en/contests/tdiuda-london-qirollik-kolleji-vakili-bilan-hamkorlik-masalalari-boyicha-uchrashuv-bolib-otdi",
    status: "archive"
  }]
},
{
  slug: "international-conferences", number: "04",
  title: { uz: "Xalqaro konferensiyalar", en: "International Conferences", ru: "Международные конференции" },
  summary: { uz: "Xalqaro ilmiy forumlar, konferensiyalar va akademik uchrashuvlar.", en: "International research forums, conferences and academic meetings.", ru: "Международные научные форумы, конференции и академические встречи." },
  category: { uz: "ILM-FAN", en: "RESEARCH", ru: "НАУКА" },
  detail: {
    uz: "TDIU 95 yilligiga bag‘ishlangan V “Global and National Economic Trends: Uzbekistan–2030” forumi 2026-yil 29–30-oktabr kunlari universitetda o‘tkazilishi rejalashtirilgan edi. Rasmiy forum sahifasida ilmiy-amaliy konferensiyalar, mahorat darslari va ko‘rgazmalar dasturi berilgan. Sana o‘tganligi sababli ushbu e’lon arxiv ma’lumoti sifatida ko‘rsatilmoqda.",
    en: "The 5th “Global and National Economic Trends: Uzbekistan–2030” forum, dedicated to TSUE's 95th anniversary, was scheduled for 29–30 October 2026 at the university. The official forum site describes research-practice conferences, masterclasses and exhibitions. As the dates have passed, this announcement is presented as an archive item.",
    ru: "V форум «Global and National Economic Trends: Uzbekistan–2030», посвящённый 95-летию ТГЭУ, был запланирован на 29–30 октября 2026 года в университете. На официальном сайте форума представлены научно-практические конференции, мастер-классы и выставки. Поскольку даты уже прошли, объявление размещено в архиве."
  },
  sources: [{
    title: { uz: "V Global and National Economic Trends: Uzbekistan–2030", en: "V Global and National Economic Trends: Uzbekistan–2030", ru: "V Global and National Economic Trends: Uzbekistan–2030" },
    date: "29–30 October 2026 · Archive",
    description: {
      uz: "TDIU 95 yilligi doirasidagi xalqaro forumning rasmiy dasturi va konferensiya yo‘nalishlari.",
      en: "Official programme and conference themes for the international forum marking TSUE's 95th anniversary.",
      ru: "Официальная программа и тематика международного форума к 95-летию ТГЭУ."
    },
    url: "https://strategy2026.tsue.uz/",
    status: "archive"
  }]
},
{
  slug: "international-scientific-relations", number: "05",
  title: { uz: "Xalqaro ilmiy aloqalar", en: "International Scientific Relations", ru: "Международные научные связи" },
  summary: { uz: "Xalqaro ilmiy kongresslar, tadqiqot hamkorligi va akademik nashrlar.", en: "International scientific congresses, research collaboration and academic publications.", ru: "Международные научные конгрессы, научное сотрудничество и академические публикации." },
  category: { uz: "TADQIQOT", en: "RESEARCH", ru: "ИССЛЕДОВАНИЯ" },
  detail: {
    uz: "TDIU rasmiy saytida 2026-yil 28-avgustda EMIDWORLD’26 — iqtisodiyot, davlat moliyasi, biznes va ijtimoiy fanlar bo‘yicha IV xalqaro kongress haqida e’lon joylashtirilgan. Kongress 26–28-noyabr 2026-yilda Girne American University’da, oflayn va onlayn shakllarda o‘tkazilishi ko‘rsatilgan. Maqola topshirishning e’londa berilgan 31-oktabr muddati o‘tgan.",
    en: "On 28 August 2026, TSUE announced EMIDWORLD’26, the 4th International Congress on Economics, Public Finance, Business and Social Sciences. The announcement lists 26–28 November 2026 at Girne American University, with in-person and online participation. The announced paper-submission deadline of 31 October has passed.",
    ru: "28 августа 2026 года ТГЭУ опубликовал объявление о EMIDWORLD’26 — IV Международном конгрессе по экономике, государственным финансам, бизнесу и социальным наукам. В объявлении указаны даты 26–28 ноября 2026 года и Girne American University, очный и онлайн-форматы участия. Указанный срок подачи материалов — 31 октября — уже прошёл."
  },
  sources: [{
    title: { uz: "EMIDWORLD’26 — IV xalqaro kongress", en: "EMIDWORLD’26 — 4th International Congress", ru: "EMIDWORLD’26 — IV Международный конгресс" },
    date: "26–28 November 2026 · Submission deadline passed",
    description: {
      uz: "Iqtisodiyot, davlat moliyasi, biznes va ijtimoiy fanlar bo‘yicha xalqaro ilmiy tadbir.",
      en: "International event on economics, public finance, business and social sciences.",
      ru: "Международное мероприятие по экономике, государственным финансам, бизнесу и социальным наукам."
    },
    url: "https://tsue.uz/en/contests/xalqaro-ilmiy-kongressda-ishtirok-eting",
    status: "upcoming"
  }]
},
{
  slug: "international-cooperation", number: "06",
  title: { uz: "Xalqaro hamkorlik", en: "International Cooperation", ru: "Международное сотрудничество" },
  summary: { uz: "Xorijiy universitetlar va tashkilotlar bilan strategik hamkorlik.", en: "Strategic cooperation with international universities and organizations.", ru: "Стратегическое сотрудничество с зарубежными университетами и организациями." },
  category: { uz: "HAMKORLIK", en: "PARTNERSHIPS", ru: "ПАРТНЁРСТВО" },
  detail: {
    uz: "2026-yil 15-iyundagi rasmiy xabarda TDIU va Nanjing Audit University (Xitoy) o‘rtasidagi hamkorlikning yangi bosqichi yoritilgan. Unda professorlarni o‘quv jarayoniga jalb etish, 144 soatlik malaka oshirish dasturlari, “3+1” qo‘shma bakalavriat, talabalar mobilligi va “Belt and Road” doirasidagi qo‘shma tadqiqotlar muhokama qilingan.",
    en: "A TSUE report dated 15 June 2026 describes a new stage of cooperation with Nanjing Audit University, China. Areas discussed included visiting professors, 144-hour professional development programmes, a joint “3+1” bachelor's programme, student mobility and joint research under the Belt and Road initiative.",
    ru: "В сообщении ТГЭУ от 15 июня 2026 года описан новый этап сотрудничества с Nanjing Audit University (Китай). Среди обсуждаемых направлений — приглашение профессоров, 144-часовые программы повышения квалификации, совместная программа бакалавриата «3+1», студенческая мобильность и совместные исследования в рамках инициативы «Пояс и путь»."
  },
  sources: [{
    title: { uz: "TDIU va Nanjing Audit University hamkorligi", en: "TSUE–Nanjing Audit University cooperation", ru: "Сотрудничество ТГЭУ и Nanjing Audit University" },
    date: "15 June 2026",
    description: {
      uz: "Qo‘shma ta’lim, mobillik, ilmiy tadqiqotlar va professor-o‘qituvchilar malakasini oshirish yo‘nalishlari.",
      en: "Joint education, mobility, research and professional development for academic staff.",
      ru: "Совместное образование, мобильность, исследования и повышение квалификации преподавателей."
    },
    url: "https://tsue.uz/oz/news/toshkent-davlat-iqtisodiyot-universiteti-va-nankin-audit-universiteti-ortasidagi-strategik-hamkorlik-yangi-bosqichga-kotarilmoqda",
    status: "reference"
  }]
},
{
  slug: "international-memorandums", number: "07",
  title: { uz: "Xalqaro memorandumlar", en: "International Memorandums", ru: "Международные меморандумы" },
  summary: { uz: "Xalqaro memorandumlar, kelishuvlar va yo‘l xaritalari.", en: "International memorandums, agreements and cooperation roadmaps.", ru: "Международные меморандумы, соглашения и дорожные карты сотрудничества." },
  category: { uz: "KELISHUVLAR", en: "AGREEMENTS", ru: "СОГЛАШЕНИЯ" },
  detail: {
    uz: "TDIU rasmiy saytining 2026-yil 1-noyabrdagi yangiliklar ro‘yxatida xorijiy investitsiyalarni jalb qilish bo‘yicha Xitoy kompaniyasi bilan memorandum imzolangani qayd etilgan. 31-oktabr kuni esa Tojikiston davlat huquq, biznes va siyosat universiteti bilan akademik hamkorlikni rivojlantirishga qaratilgan “Yo‘l xaritasi” imzolangan. Hujjatlarning to‘liq shartlari va tomonlari bo‘yicha tafsilotlarni rasmiy e’londan tekshiring.",
    en: "TSUE's official news feed lists a memorandum signed with a Chinese company on 1 November 2026 to attract foreign investment. On 31 October, the university also signed a roadmap with the Tajik State University of Law, Business and Politics to advance academic cooperation. Consult the official announcements for the full terms and parties.",
    ru: "В официальной ленте новостей ТГЭУ указано, что 1 ноября 2026 года был подписан меморандум с китайской компанией о привлечении иностранных инвестиций. 31 октября также была подписана дорожная карта с Таджикским государственным университетом права, бизнеса и политики для развития академического сотрудничества. Полные условия и стороны документов проверяйте в официальных объявлениях."
  },
  sources: [{
    title: { uz: "TDIU rasmiy yangiliklar lentasi", en: "TSUE official news feed", ru: "Официальная лента новостей ТГЭУ" },
    date: "1 November 2026 · 31 October 2026",
    description: {
      uz: "Xitoy kompaniyasi bilan memorandum va Tojikiston universiteti bilan akademik hamkorlik yo‘l xaritasi haqidagi e’lonlar.",
      en: "Announcements covering a memorandum with a Chinese company and an academic cooperation roadmap with a Tajik university.",
      ru: "Сообщения о меморандуме с китайской компанией и дорожной карте академического сотрудничества с таджикским вузом."
    },
    url: "https://tsue.uz/",
    status: "reference"
  }]
},
{
  slug: "professional-development-abroad", number: "08",
  title: { uz: "Xorijda malaka oshirish", en: "Professional Development Abroad", ru: "Повышение квалификации за рубежом" },
  summary: { uz: "Xorijiy stajirovkalar, malaka oshirish va tajriba almashish.", en: "International internships, professional development and knowledge exchange.", ru: "Зарубежные стажировки, повышение квалификации и обмен опытом." },
  category: { uz: "MOBILLIK", en: "MOBILITY", ru: "МОБИЛЬНОСТЬ" },
  detail: {
    uz: "TDIU va Nanjing Audit University o‘rtasidagi 2026-yilgi muzokaralarda professor-o‘qituvchilar uchun 144 soatlik malaka oshirish dasturlarini tashkil etish ham muhokama qilingan. 2025-yilda King’s College London vakili bilan uchrashuvda ham xorijiy oliy ta’lim va ilmiy-tadqiqot tashkilotlarida stajirovkalarni yo‘lga qo‘yish masalasi ko‘tarilgan. Aniq tanlov, kvota va muddatlar alohida rasmiy e’lon bilan tasdiqlanishi kerak.",
    en: "In 2026 discussions between TSUE and Nanjing Audit University, 144-hour professional development programmes for academic staff were among the proposed areas. A 2025 meeting with a King's College London representative also discussed internships at overseas universities and research institutions. Specific calls, quotas and deadlines require separate official announcements.",
    ru: "В ходе переговоров ТГЭУ и Nanjing Audit University в 2026 году обсуждалась организация 144-часовых программ повышения квалификации для преподавателей. На встрече с представителем King's College London в 2025 году также поднимался вопрос стажировок в зарубежных университетах и научных организациях. Конкретные конкурсы, квоты и сроки должны подтверждаться отдельными официальными объявлениями."
  },
  sources: [
    {
      title: { uz: "TDIU – Nanjing Audit University", en: "TSUE – Nanjing Audit University", ru: "ТГЭУ – Nanjing Audit University" },
      date: "15 June 2026",
      description: {
        uz: "144 soatlik malaka oshirish dasturlari muhokama qilingan hamkorlik uchrashuvi.",
        en: "Cooperation meeting that included discussion of 144-hour professional development programmes.",
        ru: "Встреча о сотрудничестве, на которой обсуждались 144-часовые программы повышения квалификации."
      },
      url: "https://tsue.uz/oz/news/toshkent-davlat-iqtisodiyot-universiteti-va-nankin-audit-universiteti-ortasidagi-strategik-hamkorlik-yangi-bosqichga-kotarilmoqda",
      status: "reference"
    },
    {
      title: { uz: "King’s College London bilan uchrashuv", en: "Meeting with King's College London", ru: "Встреча с King's College London" },
      date: "27 November 2025",
      description: {
        uz: "Xorijiy oliy ta’lim va ilmiy-tadqiqot muassasalaridagi stajirovkalarni rivojlantirish muhokamasi.",
        en: "Discussion of internships at international universities and research institutions.",
        ru: "Обсуждение стажировок в зарубежных университетах и научно-исследовательских учреждениях."
      },
      url: "https://tsue.uz/en/contests/tdiuda-london-qirollik-kolleji-vakili-bilan-hamkorlik-masalalari-boyicha-uchrashuv-bolib-otdi",
      status: "archive"
    }
  ]
},
{
  slug: "foreign-faculty-programmes", number: "09",
  title: { uz: "Xorijiy professorlar dasturlari", en: "Programmes for Foreign Faculty", ru: "Программы для зарубежных преподавателей" },
  summary: { uz: "Xorijiy professorlarni jalb etish, ma’ruza va qo‘shma akademik faoliyat.", en: "Visiting international faculty, lectures and joint academic activity.", ru: "Приглашение зарубежных преподавателей, лекции и совместная академическая деятельность." },
  category: { uz: "FAKULTET", en: "FACULTY", ru: "ПРЕПОДАВАТЕЛИ" },
  detail: {
    uz: "Nanjing Audit University bilan 2026-yilgi strategik hamkorlik muhokamasida yetakchi professorlarni TDIUdagi o‘quv jarayoniga jalb etish va professor-o‘qituvchilar uchun malaka oshirish dasturlarini yo‘lga qo‘yish masalalari qayd etilgan. Dastur shartlari, tanlov talablari va murojaat sanalari bo‘yicha faqat mas’ul bo‘lim tasdiqlagan e’lonlarga tayanish lozim.",
    en: "The 2026 strategic cooperation discussions with Nanjing Audit University included involving leading professors in TSUE teaching and establishing professional development programmes for academic staff. Programme conditions, eligibility and application dates should be taken only from announcements confirmed by the responsible office.",
    ru: "В ходе обсуждения стратегического сотрудничества с Nanjing Audit University в 2026 году рассматривалось привлечение ведущих профессоров к учебному процессу ТГЭУ и запуск программ повышения квалификации преподавателей. Условия программ, критерии отбора и даты подачи заявок следует уточнять только по объявлениям ответственного подразделения."
  },
  sources: [{
    title: { uz: "Nanjing Audit University bilan strategik hamkorlik", en: "Strategic cooperation with Nanjing Audit University", ru: "Стратегическое сотрудничество с Nanjing Audit University" },
    date: "15 June 2026",
    description: {
      uz: "Yetakchi professorlarni jalb etish va akademik xodimlar malakasini oshirish bo‘yicha muhokama.",
      en: "Discussion of visiting professors and professional development for academic staff.",
      ru: "Обсуждение приглашения профессоров и повышения квалификации академических сотрудников."
    },
    url: "https://tsue.uz/oz/news/toshkent-davlat-iqtisodiyot-universiteti-va-nankin-audit-universiteti-ortasidagi-strategik-hamkorlik-yangi-bosqichga-kotarilmoqda",
    status: "reference"
  }]
},
{
  slug: "international-students", number: "10",
  title: { uz: "Xalqaro talabalar", en: "International Students", ru: "Иностранные студенты" },
  summary: { uz: "Xorijiy abituriyentlar uchun qabul, hujjatlar, viza va talabalik hayoti.", en: "Admissions, documents, visas and student life for international applicants.", ru: "Поступление, документы, визы и студенческая жизнь для иностранных абитуриентов." },
  category: { uz: "TALABALAR", en: "STUDENTS", ru: "СТУДЕНТЫ" },
  detail: {
    uz: "TDIUning xorijiy talabalar uchun alohida sahifasida onlayn ariza, hujjat topshirish, suhbat, rasmiy taklif xati, viza ko‘magi hamda kelish va ro‘yxatdan o‘tish bosqichlari keltirilgan. Sahifa 2025-yil 10-sentabrda e’lon qilingan; qabul talablari, ta’lim dasturlari va to‘lovlar o‘zgarishi mumkin. Ariza yuborishdan oldin joriy o‘quv yili bo‘yicha rasmiy ma’lumotni tekshiring.",
    en: "TSUE's dedicated international-students page outlines online application, document submission, interview, official invitation, visa support, arrival and enrolment. The page is dated 10 September 2025; admission rules, programmes and fees may change. Verify current academic-year information before applying.",
    ru: "На отдельной странице ТГЭУ для иностранных студентов описаны онлайн-заявка, подача документов, собеседование, официальное приглашение, визовая поддержка, прибытие и зачисление. Страница датирована 10 сентября 2025 года; правила приёма, программы и стоимость обучения могут измениться. Перед подачей заявления проверьте сведения на текущий учебный год."
  },
  sources: [{
    title: { uz: "Xorijiy talabalar — TDIU", en: "International Students — TSUE", ru: "Иностранные студенты — ТГЭУ" },
    date: "10 September 2025 · Verify current admission year",
    description: {
      uz: "Qabul bosqichlari, hujjatlar, viza ko‘magi va talabalik sharoitlari bo‘yicha rasmiy sahifa.",
      en: "Official page covering admission steps, documents, visa support and student facilities.",
      ru: "Официальная страница об этапах поступления, документах, визовой поддержке и условиях для студентов."
    },
    url: "https://tsue.uz/page/foreign-students",
    status: "reference"
  }]
}
];

export const copy = {
  uz: {
    about: "Portal haqida", areas: "Yo‘nalishlar", contact: "Aloqa",
    kicker: "XALQARO MUNOSABATLAR PLATFORMASI", h1: "Dunyo bilan", h2: "bog‘langan", h3: "universitet.",
    hero: "Toshkent davlat iqtisodiyot universitetining xalqaro aloqalari, akademik imkoniyatlari va global tashabbuslari uchun yagona raqamli makon.",
    explore: "Yo‘nalishlarni ko‘rish", aboutTitle: "Xalqaro maydonga ochilgan imkoniyatlar.",
    aboutText: "O‘nta xalqaro yo‘nalish yagona, sodda va ko‘p tilli tajribada jamlangan. Har bir bo‘lim o‘z mavzusiga mos vizual ko‘rinish, tekshirilgan materiallar va asl manbaga havolalar bilan taqdim etiladi.",
    areaTitle: "Barcha yo‘nalishlar", areaText: "Kerakli yo‘nalishni tanlang. Bo‘limlar o‘z mazmuni va vizual uslubiga ega.",
    details: "Bo‘limni ochish", back: "Barcha yo‘nalishlar",
    overview: "Yo‘nalish haqida", sourceHeading: "Rasmiy manbalar va materiallar",
    sourceText: "Havolalar universitetning rasmiy sahifalari yoki rasmiy tadbir saytlariga olib boradi. Sana va talablar bo‘yicha eng so‘nggi e’lonni tekshiring.",
    openSource: "Rasmiy manbani ochish", archive: "ARXIV", upcoming: "KELGUSI TADBIR", reference: "RASMIY MA’LUMOT",
    note: "Eslatma: bu mustaqil konsept-portal, TDIUning rasmiy sayti emas. Tashkilot nomidan rasmiy bayonot bermaydi.",
    footer: "Mustaqil konsept-portal · Rasmiy universitet sayti emas",
    contactLabel: "Rasmiy universitet sayti"
  },
  en: {
    about: "About", areas: "Sections", contact: "Contact",
    kicker: "INTERNATIONAL RELATIONS PLATFORM", h1: "A university", h2: "connected", h3: "to the world.",
    hero: "A single digital space for the international relations, academic opportunities and global initiatives of Tashkent State University of Economics.",
    explore: "Explore sections", aboutTitle: "Opportunities with a global outlook.",
    aboutText: "Ten international areas are brought together in one clear, multilingual experience. Each section has a topic-specific visual identity, sourced material and links to original official information.",
    areaTitle: "Explore all sections", areaText: "Choose an area to explore. Each section has its own content and visual style.",
    details: "Explore section", back: "All sections",
    overview: "About this area", sourceHeading: "Official sources and materials",
    sourceText: "Links lead to official university pages or official event websites. Check the latest announcement for current dates and requirements.",
    openSource: "Open official source", archive: "ARCHIVE", upcoming: "UPCOMING EVENT", reference: "OFFICIAL REFERENCE",
    note: "Note: this is an independent concept portal, not the official TSUE website. It does not make statements on behalf of the university.",
    footer: "Independent concept portal · Not the official university website",
    contactLabel: "Official university website"
  },
  ru: {
    about: "О портале", areas: "Разделы", contact: "Контакты",
    kicker: "ПЛАТФОРМА МЕЖДУНАРОДНЫХ СВЯЗЕЙ", h1: "Университет,", h2: "открытый", h3: "миру.",
    hero: "Единое цифровое пространство международных связей, академических возможностей и глобальных инициатив Ташкентского государственного экономического университета.",
    explore: "Все разделы", aboutTitle: "Возможности, открытые миру.",
    aboutText: "Десять международных направлений объединены в понятном многоязычном интерфейсе. Каждый раздел имеет собственный визуальный стиль, материалы с указанием источников и ссылки на официальную информацию.",
    areaTitle: "Все направления", areaText: "Выберите интересующее направление. У каждого раздела свой контент и визуальный стиль.",
    details: "Открыть раздел", back: "Все разделы",
    overview: "О направлении", sourceHeading: "Официальные источники и материалы",
    sourceText: "Ссылки ведут на официальные страницы университета или сайты официальных мероприятий. Проверяйте последние объявления и актуальные требования.",
    openSource: "Открыть официальный источник", archive: "АРХИВ", upcoming: "ПРЕДСТОЯЩЕЕ СОБЫТИЕ", reference: "ОФИЦИАЛЬНАЯ ИНФОРМАЦИЯ",
    note: "Примечание: это независимый концепт-портал, а не официальный сайт ТГЭУ. Он не выступает от имени университета.",
    footer: "Независимый концепт-портал · Не официальный сайт университета",
    contactLabel: "Официальный сайт университета"
  }
} satisfies Record<Locale, Record<string, string>>;
