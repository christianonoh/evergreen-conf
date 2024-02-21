import EvergreenLogo from "/public/hosts/host-01.png";
import EnuguMinstryLogo from "/public/hosts/host-02.png";
import Peter_Mba from "/public/speakers/Peter_Mba.jpg";
import ProfileP from "/public/speakers/profile.jpg";
import Njorteah from "/public/speakers/Njorteah.jpeg";
import Adewuiyi from "/public/speakers/Adewuiyi.webp";
import Isa from "/public/speakers/joy-isa.webp";
import Osita from "/public/speakers/Osita.jpeg";
import Verdegem from "/public/speakers/Verdegem.jpg";
import Dike from "/public/speakers/Dike.webp";
import Okoro from "/public/speakers/doris-okoro.webp";
import Onyia from "/public/speakers/onyia.webp";
import Eyitayo from "/public/speakers/rotimi-eyitayo.webp";
import Odigboh from "/public/speakers/rhoda-odigboh.webp";
import Ofobuike from "/public/speakers/chibueze-ofobuike.webp";
import Ogundere from "/public/speakers/abimbola-ogundere.webp";

export const navLinks = [
  { path: "/#about", title: "About" },
  { path: "/#program", title: "Program" },
  { path: "/#speakers", title: "Speakers" },
  { path: "/#partners", title: "Partners" },
];

export type EventDetails = {
  time: string;
  event: string;
  details?: string;
};

export type EventDay = {
  day: string;
  schedule: EventDetails[];
};

export type EventProgram = EventDay[];

export const eventProgram: EventProgram = [
  {
    day: "Day 1",
    schedule: [
      { time: "8:30 AM - 9:00 AM", event: "Registration and Welcome" },
      {
        time: "9:00 AM – 9:05 AM",
        event: "Opening Prayer",
        details: "",
      },
      {
        time: "9:05 AM - 9:15 AM",
        event: "Opening Address by Barr. Mrs. Doris Chinedu-Okoro",
        details: "",
      },
      {
        time: "9:15 AM – 9:35 AM",
        event: "Address by Prof. Ndubueze Mbah",
        details:
          "Special address by the Honourable Commissioner for Education, Enugu State.",
      },
      {
        time: "9:35 AM",
        event: "Keynote Address by Hon. Osita Chidoka OFR, NPOM",
        details:
          "Honourable Osita Chidoka OFR, NPOM delivers a keynote address. Topic recommendation: Prof. Petier.",
      },
      {
        time: "10:00 AM - 10:30 AM",
        event:
          "Artificial Intelligence and Society: Disruptor or Destroyer by Professor Pieter Verdegem",
        details:
          "Professor Pieter Verdegem from the University of Westminster, London, explores the implications of artificial intelligence on society.",
      },
      {
        time: "10:55 AM – 11:05 AM",
        event: "School Performance",
        details: "Showcasing school achievements and performance.",
      },
      {
        time: "11:05 AM – 11:35 AM",
        event: "Tea Break",
        details: "Refreshment break for attendees.",
      },
      {
        time: "11:40 AM – 12:25 PM",
        event: "Global Citizenship by Angelina Ikeakor",
        details: "Insights on global citizenship by Angelina Ikeakor.",
      },
      {
        time: "12:25 PM – 12:35 PM",
        event: "Sponsors Session: Educare",
        details: "Educare presents their contributions and initiatives.",
      },
      {
        time: "12:35 PM – 12:45 PM",
        event: "Sponsors Session: Wowbii",
        details: "Wowbii showcases their contributions and innovations.",
      },
      {
        time: "1:20 PM – 1:40 PM",
        event: "Lunch Break",
        details: "Time for lunch and networking.",
      },
      {
        time: "1:40 PM – 2:10 PM",
        event: "Breakout: AI Tools for Lesson Content by Ebenezer Odetola",
        details:
          "Explore the use of AI tools for lesson content with Ebenezer Odetola.",
      },
      {
        time: "2:10 PM – 2:40 PM",
        event: "Breakout: Purpose-Driven Leadership by Rhoda",
        details: "Rhoda discusses purpose-driven leadership.",
      },
      {
        time: "2:40 PM – 3:30 PM",
        event: "Panel: Future Trends in Education",
        details:
          "Panel discussion on future trends with Uju (British springs), Evergreen, Joy Isa, Abimbola.",
      },
      {
        time: "3:30 PM",
        event: "Closing Address",
        details: "Concluding remarks and acknowledgments.",
      },
    ],
  },
  {
    day: "Day 2",
    schedule: [
      {
        time: "9:00 AM – 9:05 AM",
        event: "Opening Prayer",
        details: "A moment of prayer to commence the day.",
      },
      {
        time: "9:05 AM",
        event: "Special Guest Address by Dr. Chibueze Ofobuike",
        details: "Dr. Chibueze Ofobuike delivers a special address.",
      },
      {
        time: "9:15 AM",
        event: "General Session – Best Practices in 21st Century Education",
        details: "Insights shared by Mr. Eitayo Rotimi.",
      },
      {
        time: "10:00 AM – 10:45 AM",
        event:
          "Positive Discipline for Transformation and Impact in Education by Joy Isa",
        details:
          "Joy Isa discusses using positive discipline as a tool for transformation and impact in education.",
      },
      {
        time: "11:20 AM – 11:50 AM",
        event: "Tea Break",
        details: "A break for tea and refreshments.",
      },
      {
        time: "11:50 AM",
        event: "Digital Safeguarding by Ify Obidi Essien",
        details: "Presentation on digital safeguarding by Ify Obidi Essien.",
      },
      {
        time: "12:45 PM – 1:30 PM",
        event:
          "Leading a Learning Environment for Transformational Impact by Dr. Abimbola Ogundere",
        details:
          "Dr. Abimbola Ogundere shares insights on leading a learning environment for transformational impact.",
      },
      {
        time: "10:50 AM – 11:10 AM",
        event: "Session by Eben",
        details: "Session conducted by Eben.",
      },
      {
        time: "11:10 AM – 11:20 AM",
        event: "Entertainment",
        details: "A brief entertainment segment.",
      },
      {
        time: "1:30 PM – 2:00 PM",
        event: "Lunch Break",
        details: "Time for lunch and networking.",
      },
      {
        time: "2:05 PM – 2:10 PM",
        event: "Sponsor Session - Success Tab",
        details: "Presentation by Success Tab, one of the sponsors.",
      },
      {
        time: "2:10 PM – 2:20 PM",
        event: "Sponsor Session - Educare",
        details: "Presentation by Educare, one of the sponsors.",
      },
      {
        time: "2:20 PM – 2:25 PM",
        event: "Sponsor Session - Wowbii",
        details: "Presentation by Wowbii, one of the sponsors.",
      },
      {
        time: "2:25 PM – 2:30 PM",
        event: "Sponsor Session - UBA",
        details: "Presentation by UBA, one of the sponsors.",
      },
      {
        time: "2:30 PM - ?? PM",
        event: "Debate - Flipped Classroom in 21st Century Learning",
        details:
          "Debate on the effectiveness of the flipped classroom model. Participants: Onyii Nwandu, Uche Osassah, Phil.",
      },
      {
        time: "?? PM – ?? PM",
        event: "Closing Prayer, Remarks and Acknowledgments",
        details:
          "Express gratitude to participants, speakers, and sponsors, and encourage ongoing collaboration for impactful education.",
      },
      {
        time: "?? PM – ?? PM",
        event: "Gala Night / Closing Ceremony",
        details: "Closing event for the conference.",
      },
    ],
  },
];

export const hosts = [
  {
    name: "Evergreen Consult",
    image: EvergreenLogo,
  },
  {
    name: "Ministry of Education Enugu State",
    image: EnuguMinstryLogo,
  },
];

export const speakers = [
  {
    name: "Barr Mrs Doris ChineduOkoro",
    title: "CEO, Evergreen group",
    tag: "Convener",
    image: Okoro,
  },
  {
    name: "Osita Chidoka",
    title: "Former Minister of Aviation and Aerospace Development of Nigeria",
    tag: "Keynote Speaker",
    image: Osita,
  },
  {
    name: "Dr Joy Isa",
    title: "College President ISA School of Education (ISED)",
    image: Isa,
    bio: `
    <p>Dr. Joy Isa is an experienced educator, a management consultant, a youth counsellor, and a speaker who passionately supports young people through varied challenges. She holds a Master of Science in Multidisciplinary Studies from Buffalo State University and a Doctorate in Education from Walden University.</p>
    <p>She is a WIMBIZ Associate and mentor, a fellow of the Nigerian Institute of Management Consultants, and for almost three decades, she has contributed to developing education in Africa by facilitating professional development sessions on multiple platforms locally and internationally. Additionally, she served briefly as President of a women’s university in East Africa.</p>
    <p>Dr. Isa now serves as President of the Isa School of Education – a college of education set up to upskill educational leaders in Africa. She also serves as Vice-Chairman of the Board of Osnan Academy and as Chair of the Management Board of the Pistis Leadership and Life Institute.</p>
  `,
  },
  {
    name: "Mrs. Bukola Adewuiyi",
    title: "CEO Supreme education foundation",
    image: Adewuiyi,
  },
  {
    name: "Dr. Verdegem",
    title: "University of Westminser London",
    image: Verdegem,
  },
  {
    name: "Lady Uju Dike",
    title: "CEO British Spring College Awka",
    image: Dike,
  },
  {
    name: "Fr. John Njorteah",
    title: "University of Westminster (Studies)",
    image: Njorteah,
  },
  {
    name: "Alex Onyia ",
    title: "CEO, Educare",
    image: Onyia,
  },
  {
    name: "Rotimi Eyitayo",
    title: "CEO, TEAMMASTERS LIMITED",
    image: Eyitayo,
    bio: `
    <p>Rotimi Eyitayo is a distinguished Business Consulting Authority, recognized for delivering strategic and transformative business consulting services that propel organizations to unparalleled heights. As a trusted advisor to global enterprises, he specializes in providing innovative solutions and sustainable growth strategies. Renowned as a Growth Management Expert, Mr. Eyitayo excels in orchestrating and implementing growth strategies that drive profound organizational transformation.</p>
    <p>With a proven track record of maximizing business potential, navigating complexities, and fostering enduring success, Mr. Eyitayo is a facilitation master with a unique ability to engage and inspire diverse audiences. His expertise extends to being an invited speaker at high-profile conferences, retreats, and workshops, delivering impactful and memorable presentations both within and outside Nigeria.</p>
    <p>Mr. Eyitayo is a sought-after keynote speaker, focusing on topics such as business innovation, leadership, growth, institutional reforms and transformation, culture change, and the attainment of smart and safe cities. Known for his dynamic and captivating speaking style, he leaves a lasting impression on audiences worldwide, drawing from his extensive experience as a speaker at conferences and retreats in Nigeria and across the globe.</p>
    <p>Recognized as a catalyst for change, Rotimi Eyitayo empowers businesses and individuals to thrive in today's dynamic landscape. His active contributions to the global business community involve fostering connections and sharing insightful perspectives. Additionally, he has championed interventions within agencies, ministries, state governments, and commissions.</p>
    <p>Currently serving as the Chief Executive Officer of TEAMMASTERS LIMITED, Mr. Eyitayo plays a pivotal role in transforming individuals, businesses, and institutions.</p>
    <p>For further insights and updates, you can follow him on LinkedIn, Twitter, Facebook, and Instagram: @rotimieyitayo.</p>
  `,
  },
  {
    name: "Rhoda Odigboh",
    title: "Head of Africa Programs, Kizazi",
    image: Odigboh,
    bio: `
    <p>Rhoda Odigboh is a global education practitioner supporting holistic education transformation programs across Africa; with almost two decades of classroom teaching experience. She is a trained early childhood specialist, curriculum theorist, and learning strategist. An advocate for inclusive education systems rooted in the science of learning, a culture of care, and relationships. Rhoda is committed to unlocking opportunities for African children through education.</p>
    <p>Rhoda serves as the Head of Africa Programs at Kizazi - a global nonprofit supporting local nonprofits to design, implement, and codify breakthrough school programs in partnerships with their families, communities, and governments across Asia and Africa. Today, along with our local NGO partners, we are working on redesign projects with government systems directly impacting over 35,000+ children and over 2 million children through system-adoption across India, Sierra Leone, and Armenia.</p>
    <p>Before joining Kizazi, Rhoda served as Regional Director, Academics at NewGlobe overseeing academic programming for government partnerships and community school programs. Her experience includes launching and leading large-scale programs.</p>
    <p>She is the Vice President, Professional Association of Curriculum Theorists in Nigeria (PACTPiN); and serves on the board of the Let Cerebral Palsy Kids Learn Foundation & AIFA Reading Society. Rhoda co-founded The Learning Craft in 2012, a social enterprise focused on supporting the public and private sector in achieving inclusive and equitable whole school education systems towards nation building.</p>
  `,
  },
  {
    name: "Dr Chibueze Lawrence Ofobuike",
    title: "Chairman, Aguata Local Government Area",
    image: Ofobuike,
    bio: `
    <p>Dr. Chibueze Ofobuike is a passionate community builder who has to his credit several years of involvement in community service, both in his town, Umuchu, and beyond.</p>
    <p>Being the last child of HRH Igwe I. O. Ofobuike, MFR (Ezeọra I of Umuchu) and Ocheze Chinwe Ofobuike, his exemplary efforts towards community development can be easily traced to his roots. He has, through different platforms, contributed immensely to the betterment of his people, and prominent among them is his role as the administrative anchor of the Umuchu Covid-19 Response Team and the Umuchu Security Upgrade Committee. His services in these two committees further endeared him to his people who consider him a shining light.</p>
    <p>Driven by his belief in the power of education and right mentorship, he set up the Project Umuchu Future Icons and has utilized the platform to identify high-flying secondary school students who not only become his mentees but are also given scholarships and other educational aids.</p>
    <p>Dr. Ofobuike is a strong believer in the ideals of Prof. Chukwuma Charles Soludo. As one of the founders and the current Director of Projects of the Youths Earnestly Seek Soludo [Solution] (YESS), he contributed to the initiation and execution of mind-blowing programmes and projects that massively galvanized youth support for Prof, C. C. Soludo. He was a member of the Anambra 50-Year Development Plan Committee where he served as the Secretary of the Value, Culture and Identity sub-committee.</p>
    <p>Professionally, Dr. Chibueze Ofobuike teaches Political Science at Chukwuemeka Odumegwu Ojukwu University, Igbariam, Anambra State, and as an avid researcher, his interest in documentation manifested in his widely-hailed publication titled "Umuchu Icons: A Documentary of Amazing Achievers". He has written many articles and has contributed to many book chapters.</p>
    <p>When he is not teaching, mentoring, or serving his community, he travels for leadership and academic conferences and trainings. He has presented his researches and participated in leadership trainings in Nigeria, Ghana, Togo, Tanzania, France, Italy, Germany, and Spain. He is fluent in English, Igbo, and French languages, with a smattering of German.</p>
    <p>On August 2, 2022, Dr. Ofobuike was inaugurated by the Governor of Anambra State, Prof. Charles Chukwuma Soludo, CFR to serve as the Transition Committee Chairman of Aguata Local Government Area. He is the youngest person to serve in such capacity in the State and has continued to excellently carry out the duty of providing leadership at the grassroots.</p>
  `,
  },
  {
    name: "Dr Abimbola Ogundere",
    title: "",
    image: Ogundere,
  },
  {
    name: "Barr. Doris Chinedu Okoro",
    title: "CEO Evergreen Group Of Schools",
    image: Okoro,
  },
];

export const rolesOptions = [
  { label: "Counselor", value: "Counselor" },
  { label: "Curriculum Developer", value: "Curriculum Developer" },
  { label: "Education Consultant", value: "Education Consultant" },
  { label: "Education Researcher", value: "Education Researcher" },
  { label: "Parent", value: "Parent" },
  { label: "Principal", value: "Principal" },
  { label: "School Administrator", value: "School Administrator" },
  { label: "School Owner", value: "School Owner" },
  { label: "Student", value: "Student" },
  { label: "Teacher", value: "Teacher" },
  { label: "Other (please specify)", value: "Other" },
];

export const partners = [
  {
    name: "Evergreen Consult",
    image: EvergreenLogo,
  },
  {
    name: "Ministry of Education Enugu State",
    image: EnuguMinstryLogo,
  },
];
