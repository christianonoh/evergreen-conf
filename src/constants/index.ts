import EvergreenLogo from "/public/hosts/host-01.png";
import EnuguMinstryLogo from "/public/hosts/host-02.png";
import Peter_Mba from "/public/speakers/Peter_Mba.jpg";
import ProfileP from "/public/speakers/profile.jpg";
import Njorteah from "/public/speakers/Njorteah.jpeg";
import Adewuiyi from "/public/speakers/Adewuiyi.webp";
import Koiki from "/public/speakers/Koiki.png";
import Osita from "/public/speakers/Osita.jpeg";
import Verdegem from "/public/speakers/Verdegem.jpg";
import Dike from "/public/speakers/Dike.webp";
import Okoro from "/public/speakers/okoro.webp";
import Onyia from "/public/speakers/onyia.webp";

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
        time: "9:00 AM - 9:30 AM",
        event: "Opening Address",
        details:
          'Welcome participants and set the tone for the conference, emphasizing the theme of "Educating for Impact and Transformation."',
      },
      {
        time: "9:30 AM - 10:10 AM",
        event: "Keynote Address by the State Governor",
        details:
          "Governor to share insights on the importance of education in driving societal impact and transformation, setting the stage for the conference.",
      },
      { time: "10:10 AM - 10:30 AM", event: "Networking Break" },
      {
        time: "10:30 AM - 11:10 AM",
        event: "Holistic Learning Approach",
        details:
          "Speaker 1: Explore holistic learning methods, focusing on fostering critical thinking, creativity, and emotional intelligence alongside academic knowledge.",
      },
      {
        time: "11:10 AM - 11:50 AM",
        event: "Technology Integration",
        details:
          "Speaker 2: Discuss the incorporation of innovative educational technologies and their role in enhancing the learning experience, preparing students for the modern world.",
      },
      { time: "11:50 AM - 1:00 PM", event: "Lunch Break" },
      {
        time: "1:00 PM - 1:40 PM",
        event: "Global Citizenship",
        details:
          "Speaker 3: Advocate for an education that promotes global awareness and responsibility, encouraging understanding of diverse perspectives, cultures, and global issues.",
      },
      {
        time: "1:40 PM - 2:20 PM",
        event: "Life-Long Learning",
        details:
          "Speaker 4: Stress the importance of continuous learning and adapting to new information, preparing individuals to navigate evolving career paths and societal changes.",
      },
      { time: "2:20 PM - 2:40 PM", event: "Networking Break" },
      {
        time: "2:40 PM - 3:20 PM",
        event: "Community Engagement",
        details:
          "Speaker 5: Highlight the significance of education that connects with the community, fostering partnerships between schools, families, and local organizations.",
      },
      { time: "3:20 PM - 3:30 PM", event: "Day 1 Closing Remarks" },
    ],
  },
  {
    day: "Day 2",
    schedule: [
      { time: "9:00 AM - 9:30 AM", event: "Recap and Welcome" },
      {
        time: "9:30 AM - 10:10 AM",
        event: "Special Session on Best Practices in Education",
        details:
          "Invite an expert to share successful case studies and best practices in education for impact and transformation.",
      },
      { time: "10:10 AM - 10:30 AM", event: "Networking Break" },
      {
        time: "10:30 AM - 11:10 AM",
        event: "Breakout Sessions (Parallel Workshops)",
        details:
          "Participants can choose from workshops focusing on specific themes such as Holistic Learning, Technology Integration, Global Citizenship, Life-Long Learning, or Community Engagement.",
      },
      { time: "11:10 AM - 11:30 AM", event: "Networking Break" },
      {
        time: "11:30 AM - 12:10 PM",
        event: "Panel Discussion - Future Trends in Education",
        details:
          "Engage experts in a panel discussion on emerging trends and future directions in education, considering the evolving needs of learners and society.",
      },
      { time: "12:10 PM - 1:30 PM", event: "Lunch Break" },
      {
        time: "1:30 PM - 2:10 PM",
        event: "Interactive Workshop - Implementing Transformative Practices",
        details:
          "Facilitate a hands-on workshop where educators can collaboratively explore practical strategies for implementing transformative practices in their teaching.",
      },
      { time: "2:10 PM - 2:30 PM", event: "Networking Break" },
      {
        time: "2:30 PM - 3:10 PM",
        event: "Closing Keynote - Vision for the Future of Education",
        details:
          "Invite a visionary speaker to share insights and a vision for the future of education, wrapping up the conference with inspiration and motivation.",
      },
      {
        time: "3:10 PM - 3:30 PM",
        event: "Closing Remarks and Acknowledgments",
        details:
          "Express gratitude to participants, speakers, and sponsors, and encourage ongoing collaboration for impactful education.",
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
    name: "Barr. Peter Ndubuisi Mbah",
    title: "Executive Governor, Enugu State",
    image: Peter_Mba,
  },
  {
    name: "Osita Chidoka",
    title: "Former Minister of Aviation and Aerospace Development of Nigeria",
    image: Osita,
  },
  {
    name: "Mrs. Lai Koiki",
    title: "CEO Greensprings Schools & Chair APEN",
    image: Koiki,
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
    title: "University of Westminster London",
    image: Njorteah,
  },
  {
    name: "Alex Onyia ",
    title: "CEO of Educare",
    image: Onyia,
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
