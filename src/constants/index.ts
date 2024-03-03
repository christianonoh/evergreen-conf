import EvergreenLogo from "/public/hosts/evergreen-foundation-logo.jpeg";
import Educare from "/public/hosts/host-02.webp";
import ProfileP from "/public/speakers/profile.jpg";
import Njorteah from "/public/speakers/Njorteah.jpeg";
import Adewuiyi from "/public/speakers/bukola-adewuiyi.webp";
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
import Israel from "/public/speakers/israel.webp";
import Imole from "/public/speakers/imole.webp";
import Angelina from "/public/speakers/angelina.webp";
import {
  InnovationIcon,
  MentorIcon,
  NetworkIcon,
  PartnershipIcon,
} from "@/components/icons";

export const navLinks = [
  { path: "/#about", title: "About" },
  { path: "/#program", title: "Program" },
  { path: "/#speakers", title: "Speakers" },
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
      { time: "7:30 AM - 8:30 AM", event: "Registration and Welcome" },
      { time: "8:30 AM - 9:00 AM", event: "Opening Prayer", details: "" },
      {
        time: "9:05 AM - 9:15 AM",
        event: "Opening Address by Barr. Mrs. Doris Chinedu-Okoro",
        details: "",
      },
      {
        time: "9:15 AM - 9:35 AM",
        event: "Address by Prof. Ndubueze Mbah",
        details:
          "Special address by the Honourable Commissioner for Education, Enugu State.",
      },
      {
        time: "9:35 AM - 10:15 AM",
        event: "Keynote Address by Hon. Osita Chidoka OFR, NPOM",
        details:
          "Honourable Osita Chidoka OFR, NPOM delivers a keynote address. Topic recommendation: Prof. Petier.",
      },
      {
        time: "10:15 AM - 11:00 AM",
        event:
          "Artificial Intelligence and Society: Disruptor or Destroyer by Professor Pieter Verdegem",
        details:
          "Professor Pieter Verdegem from the University of Westminster, London, explores the implications of artificial intelligence on society.",
      },
      {
        time: "11:00 AM - 11:10 AM",
        event: "School Performance",
        details: "Showcasing school achievements and performance.",
      },
      {
        time: "11:10 AM - 11:45 AM",
        event: "Tea Break",
        details: "Refreshment break for attendees.",
      },
      {
        time: "11:40 AM - 12:25 PM",
        event: "Global Citizenship by Angelina Ikeakor",
        details: "Insights on global citizenship by Angelina Ikeakor.",
      },
      {
        time: "12:25 PM - 12:45 PM",
        event: "Future of Ai by Educare",
        details: "Presentation by Educare on the future of AI in education.",
      },
      {
        time: "12:45 PM - 1:15 PM",
        event: "Sponsors Presentations",
        details: "",
      },
      { time: "1:15 PM - 1:40 PM", event: "Lunch Break", details: "" },
      {
        time: "1:40 PM - 2:40 PM",
        event: "Breakout session",
        details:
          "<b>&#8226; </b> AI Tools for Lesson Content by Ebenezer Odetola. <br /> <b>&#8226; </b> Purpose-Driven Leadership by Rhoda Odigboh",
      },
      {
        time: "2:40 PM - 3:30 PM",
        event: "Panel Session:  Future Trends in Education",
        details:
          "",
      },
      {
        time: "3:30 PM - 4:00 PM",
        event: "Ai and Inequalities - A Nigerian Perspective by John Njorteah",
        details: "",
      },
      { time: "4:00 PM", event: "Closing Address", details: "" },
    ],
  },
  {
    day: "Day 2",
    schedule: [
      {
          time: "7:30 AM - 8:30 AM",
          event: "Registration"
      },
      {
          time: "8:30 AM - 9:00 AM",
          event: "Opening Prayer"
      },
      {
          time: "9:00 AM - 9:30 AM",
          event: "Special Guest Address by Dr. Chibueze Ofobuike"
      },
      {
          time: "9:35 AM - 10:20 AM",
          event: "General Session – Best Practices in 21st Century Education"
      },
      {
          time: "10:20 AM - 11:00 AM",
          event: "Positive Discipline for Transformation and Impact in Education by Joy Isa"
      },
      {
          time: "11:00 AM - 11:25 AM",
          event: "Tea Break"
      },
      {
          time: "11:30 AM - 12:10 PM",
          event: "Integrating the 4C's in Education"
      },
      {
          time: "12:10 PM - 1:00 PM",
          event: "Leading a Learning Environment for Transformational Impact by Dr. Abimbola Ogundere"
      },
      {
          time: "1:00 PM - 1:15 PM",
          event: "School Performance"
      },
      {
          time: "1:15 PM - 1:45 PM",
          event: "Lunch Break"
      },
      {
          time: "1:45 PM - 2:10 PM",
          event: "Sponsors Presentations"
      },
      {
          time: "2:10 PM - 3:00 PM",
          event: "Breakout Session"
      },
      {
          time: "3:00 PM - 3:30 PM",
          event: "Panel Session: Growing A Successful School"
      },
      {
          time: "3:30 PM - 4:00 PM",
          event: "Debate - Flipped Classroom in 21st Century Learning"
      },
      {
          time: "4:00 PM",
          event: "Closing Prayer, Remarks and Acknowledgments"
      },
      {
          time: "6:30 PM - 9:30 PM",
          event: "Gala Night / Closing Ceremony"
      }
  ],
  },
];

export const hosts = [
  {
    name: "Evergreen Foundation Initiative",
    image: EvergreenLogo,
    tag: "Host",
  },
  {
    name: "Educare",
    image: Educare,
    tag: "Partner",
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
    name: "Prof. Pieter Verdegem",
    title: "University of Westminser London",
    image: Verdegem,
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
    bio: `
    <p>Olubukola Ola Adewuyi is a preeminent figure in Africa's education sector, renowned for her extensive experience and dynamic approach in school management, leadership transformation, and team formation.</p>
    <p>Her journey in the world of education began at Middlesex University London, with a remarkable feat by distinguishing herself as an Ofsted Outstanding teacher in the United Kingdom before transitioning to head the Lekki British School in Nigeria.</p>
    <p>As the CEO of Supreme Education Foundation School, Mrs. Adewuyi embodies the qualities of a visionary entrepreneur, with work ethics marked by dedication, selflessness, and professionalism. Recognized by The Guardian Newspaper as one of the value-driven CEOs of Excellence that powered Nigeria's growth in 2022 and commended by Business Day as a notable woman in business.</p>
    <p>Bukola Adewuyi has made substantial contributions to the Nigerian educational landscape. Her roles as Chairman of the ACCA Advisory Committee and head of the Quality Assurance arm of APEN (Association of Private Educators of Nigeria) highlight her multifaceted influence in the sector.</p>
    <p>Her professional affiliations, including the GTCE, NBA, APEN, and the Institute of Family Life System Engineering, complement her background as a lawyer and family life system coach.</p>
    <p>Bukola Adewuyi's unique philosophy, rooted in creativity, resourcefulness, and relentless hard work, elevates her as an exceptional strategist, trainer, consultant, and childcare expert, solidifying her status as a preeminent, transformative leader in education. She plays a pivotal role in the drive for school transformation in the education sector within Nigeria and across West Africa.</p>
  `,
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
    bio: `
    <p>Alex Onyia is the CEO of Educare, the #1 leading education technology platform in Africa for K-12, serving more than 1 million students and 300 thousand parents.</p>
    <p>Before that, Alex partnered with Facebook's Platform Partnerships team in Middle East and Africa, working with different content partners and developers in the region as part of Facebook's drive to make its platform more relevant in the day-to-day lives of people all over the world.</p>
    <p>At Winexviv International Limited from 2015 to the present, Alex is the Head of Products leading developer programs in Sub-Saharan Africa. His mission is to grow the tech ecosystem in Sub-Saharan Africa and other emerging market regions through the use of Web and Mobile technology platforms as the "Growth Engine".</p>
    <p>Before Winexviv, Alex worked as a software developer and later as a strategic business development manager in projects and initiatives that took him across Sub-Saharan Africa and the Indian Subcontinent. These projects and initiatives span the education and electronic payment verticals.</p>
    <p>He is a graduate of Agricultural & Bio-resources Engineering from the University of Nigeria. He also holds a certificate as Certified Internet Webmaster.</p>
  `,
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
    name: "Elfrida Diete-Spiff Omole",
    title: "Executive Director, Bere-Mont Group",
    image: Imole,
    bio: `
    <p>A ‘Value Builder’ committed to developing human capacity and ensuring people identify and fulfil their purpose in life.</p>
    <p>Elfrida Diete-Spiff Omole is the Executive Director of Bere-Mont Group. Bere-Mont is a leading provider of educational and healthcare services in Nigeria. The Group comprises two schools: Bereton Montessori Early Years, Primary and Secondary School (Day School) founded in 1978 and Charles Dale Memorial International School (Boarding Secondary School) which she co-founded in 2006; and a hospital – Daily Spring Hospital.</p>
    <p>She had her early career in the banking sector at United Bank for Africa Plc (UBA) between 1998 and 2000 when she decided to further her education. With her passion for innovation and strong entrepreneurial spirit, she joined Bere-Mont Group as an Executive Management staff in 2002.</p>
    <p>Elfrida Diete-Spiff Omole holds a first degree in Banking and Finance with Second Class Upper honours from the University of Port Harcourt and a Master’s degree in Information Technology from Queen Mary, University of London. She is an alumna of the Stanford Seed Transformation Programme. Stanford Seed is an initiative of the Stanford Graduate School of Business.</p>
    <p>She is a member of the Stanford Seed Transformation Network and an associate member of Women in Management, Business and Public Service (WIMBIZ).</p>
    <p>She loves coaching and mentoring young people, reading, and traveling. She is happily married.</p>
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
    name: "Angelina Ikeako FSET",
    title: "Governor at Sydney Russell School London",
    image: Angelina,
    bio: `
    <p>Angelina is one of the thought leaders in education internationally. She is a qualified teacher, and her extensive experience as an educator spans over two decades, covering teaching, student support, senior management, and senior leadership. She earned a Masters in Education Management from Roehampton University London and is currently a Ph.D. Researcher in Education at the same institution.</p>
    <p>Angelina works in one borough in London as Deputy Head within School Improvement in the Education department for the council. Her portfolio is to champion education equality in supporting high achievement among the most vulnerable and high-risk children, working with 100 schools within and outside the borough. Her role involves delivering training and providing quality assurance to enable effective interventions for the most vulnerable children with a budget of £450,000 to ensure the attainment and progress of this cohort.</p>
    <p>Her expertise has been acknowledged by the Department for Education London, as she was invited by the Department for Education in 2019 to provide expert advice on the new T-Levels. She is a Fellow with the Society for Education and Training UK. She was previously a teacher training lecturer and served as Mayoral Special Adviser on Education in Barking and Dagenham United Kingdom from 2018 to 2019.</p>
    <p>Angelina is a qualified Assessor and has just completed a certification with distinction with the Chartered Management Institute and Coventry University in leadership and management. She has been invited to the House of Lords in the United Kingdom in relation to education initiatives for the most vulnerable to examine effective education and progression interventions. She was also part of the team invited to the House of Parliament to chart a new direction for further education in the United Kingdom.</p>
    <p>She is a Governor at Sydney Russell School London. Her passion is to improve social capital and research skills of African students by providing opportunities to enhance their understanding of global citizenship. She does this through the Global Schools Connect and Award Programme, which partners schools in Africa with schools in the United Kingdom. She has worked with Lagos State Ministry of Education, training 450 of their school inspectors in 2019. She is currently working with Katsina State Basic Education led by the Honourable Commissioner for Education Katsina State.</p>
    <p>Angelina has authored several professional development courses on training for teachers and school leaders. She has written 2 books: “Teach like an Expert” and “Secrets to Staff Retention”. She is the CEO of Golden Links Educational Consultants, Convener of the International School Leaders Conference London, and a distinguished international speaker and trainer.</p>
  `,
  },
  {
    name: "Odetola Ebenezer Israel",
    title: "Teacher of creativity and practice",
    image: Israel,
    bio: `
    <p>Odetola Ebenezer Israel is a multi-talented and innovative education professional with a background in creative art teaching, school consulting, school decorating, training, coaching, and technology resources. He is the founder of Ebencut, Creative Mind Educo, and CME Foundation, three companies that are dedicated to improving education and empowering students and teachers to reach their full potential.</p>
    <p>With CME Foundation, Odetola has created a continuous WhatsApp platform for teacher professional development, with over 50,000 teachers on WhatsApp groups. The platform offers a range of resources, including webinars, workshops, and online courses, that can be accessed at any time and from any location, making it a convenient and flexible way for teachers to learn and grow.</p>
    <p>With over a decade of experience in the field, Odetola brings a wealth of knowledge and expertise to his work. As an art teacher, he is skilled in a range of media and art across the curriculum and is known for his engaging and interactive teaching style. As a school consultant and learning environment therapist, he is adept at creating visually appealing and inspiring learning environments that support student learning and development. And as a trainer and coach, he helps educators and school staff to develop their own creative and technological skills and incorporate them into their practice.</p>
    <p>In addition to his professional work, Odetola is active in the education community, frequently participating in conferences and workshops to continue learning and growing as a teacher and consultant. He is also a strong advocate for the power of creativity and technology in education and is always seeking out new ways to bring these concepts into his work with schools.</p>
    <p>Overall, Odetola Ebenezer Israel is a dedicated and experienced education professional who is committed to improving education and empowering students and teachers to reach their full potential through his work with Ebencut, Creative Mind Educo, and CME Foundation.</p>
  `,
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
  { label: "Other", value: "Other" },
];

export const workshopsOptions = [
  {
    label: "AI Tools for Lesson Content by Ebenezer Odetola",
    value: "AI Tools for Lesson Content by Ebenezer Odetola",
  },
  {
    label: "Purpose-Driven Leadership by Rhoda Odigboh",
    value: "Purpose-Driven Leadership by Rhoda Odigboh",
  },
];
export const partners = [
  {
    name: "Evergreen Consult",
    image: EvergreenLogo,
  },
  // {
  //   name: "Ministry of Education Enugu State",
  //   image: EnuguMinstryLogo,
  // },
];

export const whyAttend = [
  {
    title: "Unparalleled Networking",
    description:
      "Meet and connect with other educators, school owners, and industry professionals to foster collaborations and share best practices.",
    icon: NetworkIcon,
  },
  {
    title: "Insights from Visionary Leaders",
    description:
      "Gain insights from experienced educators and industry professionals, as they share their insights and experiences on driving educational innovation and transformation.",
    icon: MentorIcon,
  },
  {
    title: "Partnerships",
    description:
      "Proudly partner with key stakeholders in the educational sector, including Evergreen Consult and the Ministry of Education Enugu State, ensuring a rich and diverse learning experience.",
    icon: PartnershipIcon,
  },
  {
    title: "Innovative Learning Practices",
    description:
      "From holistic approaches to the integration of AI tools, SEEC'24 is dedicated to exploring practices that transcend traditional education boundaries",
    icon: InnovationIcon,
  },
];

export const whoShouldAttend = [
  "School Owners",
  "Heads of Schools (Public and Private)",
  "Educational Stakeholders",
  "Counselors",
  "Teachers",
  "Parents",
  "All Educators",
];

export const feeCovers = [
  "Access to the conference",
  "Conference Materials",
  "Tea breaks",
  "Lunch",
  "Access to the Gala Night",
];

export const feeDoesNotCover = ["Accommodation", "Dinner", "Transportation"];

export const thePlan = [
  "Participants will have the opportunity to engage in two full days of conference sessions, diving deep into the future of Education.",
  "There will be ample networking opportunities with school leaders from across the geopolitical zone and beyond.",
  "The evening Gala Night promises a delightful atmosphere for dancing, dining, wining, and fostering deeper connections in a relaxed setting.",
];
