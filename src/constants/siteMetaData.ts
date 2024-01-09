const remoteUrl = `https://seec-theta.vercel.app`;
const localUrl = `http://localhost:3000`;
const isDevelopment = process.env.NODE_ENV === "development";
const siteUrl = isDevelopment ? localUrl : remoteUrl;

const keywordsArray = [
  "Educators Conference",
  "SEE Conference 2024",
  "Education Innovation",
  "Teaching and Learning",
  "Educational Workshops",
  "Future of Education",
  "Professional Development",
  "Educational Networking",
  "EdTech Trends",
  "Learning Strategies",
  "Teacher Collaboration",
  "Educational Excellence",
  "Keynote Speaker",
  "Classroom Innovation",
  "Educational Adventure",
  "Innovative Teaching",
  "SEE 2024 Event",
  "Educational Insights",
  "Teacher Community",
  "Learning Technologies",
  "SouthEast Innovation",
  "Making an Impact",
  "Enugu",
  "Abia",
  "Anambra",
  "Ebonyi",
  "Enugu",
  "Imo",
];

export const siteMetadata = {
  title: "SouthEast Educator's Conference",
  headerTitle: "SouthEast Educator's Conference",
  description:
    "Dive into educational innovation at SEE Conference 2024! Join talks, workshops, and a keynote on the future of education. Connect, share, and elevate your teaching journey. Unleash the potential of learning!",
  language: "en-us",
  theme: "system",
  siteUrl: siteUrl,
  publisher: "Educare",
  eventStartDate: "2024-04-18T08:30:00+01:00",
  eventEndDate: "2024-04-17T15:30:00+01:00",
  eventVenue: "The Base Event Center",
  eventOrganizer: "Evergreen Consult",
  eventOrganizerUrl: "https://evergreenschools.com.ng",
  keywords: keywordsArray,
  eventPaymentUrl: "FILL ME!!!!!",
  siteLogo: "/logo-bg.png",
  socialBanner: "/og.webp", // add social banner in the public folder
  email: "chibyk5000@gmail.com",
  facebook: "https://web.facebook.com/NgwoROCK",
  locale: "en-US",
};
