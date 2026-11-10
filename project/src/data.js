

export const profile = {
  name: "Dewnith",
  initials: "Chanindu",
  email: import.meta.env.VITE_PROFILE_EMAIL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  github: import.meta.env.VITE_GITHUB_URL,

  status: "Open to software development opportunities",

  facts: [
    { label: "Based in", value: "Sri Lanka" },
    { label: "Education", value: "4th Year Software Engineering Student" },
    { label: "Focus", value: "Full-Stack & iOS Development" },
  ],
};

export const experience = [
  {
    title: "Software Engineering Intern",
    text: "Completed a six-month Software Engineering internship, gaining practical experience in software development, building user interfaces, developing backend functionality, integrating databases and working with development tools.",
    period: "6 Months",
  },
];

export const projects = [
  {
    name: "Workly",
    tone: "t1",
    title: "Home Service Finding & Booking iOS App",
    text: "An iOS application that connects customers with service professionals such as electricians, plumbers and cleaners. Includes worker discovery, MapKit integration, booking management, Face ID authentication and Firebase integration.",
    tags: ["SwiftUI", "Firebase", "MapKit", "iOS"],
  },
  {
    name: "Votero",
    tone: "t2",
    title: "Voters Registration System",
    text: "A web-based voters registration system designed to manage voter information and registration processes through a simple and user-friendly interface.",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Harbour Management System",
    tone: "t3",
    title: "Harbour Management System",
    text: "A web-based harbour management application designed to manage harbour-related information and operations with an interactive user interface and Firebase integration.",
    tags: ["React", "Firebase", "JavaScript"],
  },
  {
    name: "Smart Plug IoT",
    tone: "t1",
    title: "Smart Plug IoT System",
    text: "An Internet of Things project focused on smart plug functionality, enabling connected device control and smart power management.",
    tags: ["IoT", "Embedded Systems", "Smart Devices"],
  },
];
