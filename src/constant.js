import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
export { logoImg };

export const companyDetails = {
  phone: "+91-9656610792",
  address: `Corporate Address
BOX 63513 , Woodside Square , Ontario , Canada M1V5K2`,
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Emma R.",
    position: "Marketing Director, [Client's Company Name]",
    // img: require("./assets/images/testimonial1.png"),
    desc: "“Working with [Your Company Name] was an absolute pleasure. They really took the time to understand our business needs and delivered a website that looks incredible and performs even better. Since launching, we’ve noticed a huge boost in traffic and engagement. The team was communicative and highly responsive throughout the entire project. We couldn’t be happier with the results!”",
  },
  {
    id: 2,
    name: "Jason L.",
    position: "CEO, [Client's Company Name]",
    // img: require("./assets/images/testimonial2.png"),
    desc: "“We had a vision for a website that was both visually appealing and easy to use, and [Your Company Name] brought that vision to life perfectly. The entire process was smooth, with clear communication and quick turnarounds. Our new website has been a huge success, helping us improve customer engagement and generate more leads.”",
  },
  {
    id: 3,
    name: "Carla T.",
    position: "Head of Product Development, [Client's Company Name]",
    // img: require("./assets/images/testimonial3.png"),
    desc: "“Our mobile app was a critical part of our strategy for expanding our online store. The team at [Your Company Name] exceeded our expectations with a beautifully designed app that’s easy to navigate and performs flawlessly. The feedback from our customers has been overwhelmingly positive, and we’ve seen a significant increase in mobile sales since launch.”",
  },
  {
    id: 4,
    name: "Mark S.",
    position: "Operations Manager, [Client's Company Name]",
    // img: require("./assets/images/testimonial4.png"),
    desc: "“From the start, [Your Company Name] understood the importance of getting our mobile app just right. They listened to our needs and delivered a product that not only meets but surpasses our expectations. The app is stable, intuitive, and well-loved by our users. It’s been a pleasure working with them, and we look forward to continuing our partnership.”",
  },
  {
    id: 5,
    name: "Lily W.",
    position: "Digital Marketing Manager, [Client's Company Name]",
    // img: require("./assets/images/testimonial5.png"),
    desc: "“The redesign of our website’s user experience was a game-changer. The team at [Your Company Name] didn’t just focus on how the site looked—they truly understood our users' needs and behaviors. The results have been fantastic: a smoother, more engaging experience for our visitors and a significant increase in conversions.”",
  },
  {
    id: 6,
    name: "Daniel G.",
    position: "Head of Mobile Development, [Client's Company Name]",
    // img: require("./assets/images/testimonial6.png"),
    desc: "“We partnered with [Your Company Name] to overhaul the UX of our mobile app, and the difference is night and day. The new design is sleek, intuitive, and has vastly improved how users interact with our app. We've received tons of positive feedback, and our customer satisfaction rates have gone up considerably.”",
  },
  {
    id: 7,
    name: "Grace A.",
    position: "Operations Director, [Client's Company Name]",
    // img: require("./assets/images/testimonial7.png"),
    desc: "“Adopting RPA with [Your Company Name] has transformed how we operate. They helped us automate several tedious, repetitive tasks, and the results have been immediate. We’ve seen dramatic improvements in efficiency, and our team now has more time to focus on higher-value work. The implementation was seamless, and the ongoing support has been excellent.”",
  },
  {
    id: 8,
    name: "John M.",
    position: "IT Manager, [Client's Company Name]",
    // img: require("./assets/images/testimonial8.png"),
    desc: "“We’ve been using RPA for several months now, and it’s made a massive impact on our productivity. From data entry to handling basic customer service tasks, [Your Company Name] helped us automate processes that were once time-consuming and prone to error. The solution has saved us both time and money, and we’re excited about exploring more automation opportunities.”",
  },
  {
    id: 9,
    name: "Rachel P.",
    position: "Customer Service Manager, [Client's Company Name]",
    // img: require("./assets/images/testimonial9.png"),
    desc: "“We’ve been using AI-powered calls for customer support, and it has been a game-changer. [Your Company Name] helped us implement an automated system that answers routine queries and provides quick solutions, freeing up our human agents to focus on more complex issues. Our customers appreciate the fast response times, and our agents are more efficient than ever.”",
  },
  {
    id: 10,
    name: "Anthony H.",
    position: "VP of Customer Experience, [Client's Company Name]",
    // img: require("./assets/images/testimonial10.png"),
    desc: "“Integrating AI-driven call agents into our customer support system was one of the best decisions we’ve made. The solution was easy to implement and immediately effective. It has cut down on wait times and boosted our overall customer satisfaction. Working with [Your Company Name] was a smooth and rewarding experience.”",
  },
  {
    id: 11,
    name: "Brian C.",
    position: "Chief Technology Officer, [Client's Company Name]",
    // img: require("./assets/images/testimonial11.png"),
    desc: "“Our experience migrating to the cloud with [Your Company Name] has been seamless. They handled everything from planning to execution, and now our systems are more secure, scalable, and reliable. The cloud solution has made it easier for our teams to collaborate and access data, and we've already seen cost savings. The [Your Company Name] team provided outstanding support throughout the entire process.”",
  },
  {
    id: 12,
    name: "Emily F.",
    position: "IT Director, [Client's Company Name]",
    // img: require("./assets/images/testimonial12.png"),
    desc: "“With [Your Company Name]'s help, we moved all of our infrastructure to the cloud, and it’s been a huge success. They ensured everything was set up correctly, securely, and with scalability in mind. We now have greater flexibility to grow and adapt, and the cost savings have been significant. We’re confident that we made the right choice partnering with them.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building Custom Websites That Make an Impact. We design visually appealing, easy-to-navigate, and performance-optimized websites tailored to your business needs.",
    icon: require("./assets/images/servicesImages/webdev.jpg"),
    detailContent:
      "Your website is often the first touchpoint for potential customers, so it needs to be more than just functional – it has to make a statement. At Silver Shot Technologies, we focus on designing websites that are visually appealing, easy to navigate, and optimized for performance. Whether you need a sleek, modern site or a feature-rich platform, our team works closely with you to deliver a tailored solution that meets your unique business needs. We combine creativity with cutting-edge technology to ensure your site stands out and provides an exceptional user experience.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Innovative Mobile Apps for Every Business Need. We build custom apps for iOS and Android that engage users and align with your business goals.",
    icon: require("./assets/images/servicesImages/appdev.jpg"),
    detailContent:
      "In an increasingly mobile-driven world, your business needs an app that provides value, engages users, and enhances your services. Our mobile development team specializes in building custom apps that work seamlessly on both iOS and Android platforms. Whether you’re starting from scratch or need to improve an existing app, we’re here to create solutions that align with your business objectives. We leverage the latest frameworks and technologies to build fast, reliable, and secure apps that help your brand connect with customers wherever they are.",
  },
  {
    id: 3,
    title: "UI & UX Design",
    description:
      "Designing Experiences That Delight Users. We create intuitive, seamless, and enjoyable designs that drive conversions and customer loyalty.",
    icon: require("./assets/images/servicesImages/uiux.jpg"),
    detailContent:
      "Great design is about more than just looking good – it’s about creating an experience that is intuitive, seamless, and enjoyable. Our UI/UX team is dedicated to creating designs that not only captivate users but also drive conversions and customer loyalty. We focus on every touchpoint, ensuring that your digital product is easy to use and leaves a lasting impression. By understanding your users’ needs and behaviors, we create designs that solve problems and make interactions smoother.",
  },
  {
    id: 4,
    title: "Robotic Process Automation (RPA)",
    description:
      "Streamline Your Workflow with Intelligent Automation. We help businesses automate repetitive tasks, reduce errors, and improve efficiency.",
    icon: require("./assets/images/servicesImages/rpa.jpg"),
    detailContent:
      "Robotic Process Automation (RPA) allows businesses to automate repetitive tasks, reducing errors, cutting costs, and freeing up your team to focus on more strategic initiatives. At Silver Shot Technologies, we help organizations implement RPA solutions that improve efficiency and scale operations. Whether it’s handling data entry, managing customer service requests, or automating complex workflows, our team develops custom bots that work seamlessly with your systems. By leveraging RPA, you can reduce operational overhead and drive productivity across your business.",
  },
  {
    id: 5,
    title: "AI Calling Solutions",
    description:
      "Enhance Customer Interactions with AI-Driven Calling. Automate customer service, appointment scheduling, and lead generation with AI-powered solutions.",
    icon: require("./assets/images/servicesImages/aicalling.jpg"),
    detailContent:
      "In today’s world, customers expect fast, accurate, and personalized service. With our AI-powered calling solutions, businesses can provide 24/7 support and automate routine tasks, all without the need for human agents. Our AI technology uses natural language processing (NLP) and machine learning to create lifelike voice interactions that resolve customer inquiries, schedule appointments, collect feedback, and more. By integrating AI into your customer service operations, you can deliver instant responses, improve efficiency, and reduce costs.",
  },
  {
    id: 6,
    title: "Cloud Computing Solutions",
    description:
      "Harness the Flexibility and Power of the Cloud. We provide secure, scalable, and cost-effective cloud solutions tailored to your business needs.",
    icon: require("./assets/images/servicesImages/cloud.jpg"),
    detailContent:
      "The cloud offers businesses the ability to scale operations, collaborate more effectively, and access powerful resources without the constraints of traditional infrastructure. At Silver Shot Technologies, we provide comprehensive cloud solutions that enable businesses to innovate and grow. Whether you're looking to migrate to the cloud, develop cloud-native applications, or enhance your cloud security, we have the expertise to help. With partnerships with top cloud providers like AWS, Microsoft Azure, and Google Cloud, we offer secure, cost-effective solutions that are tailored to your needs.",
  },
];
// portfolio images (web development)
// export const webPortfolio = [
//   {
//     id: 1,
//     img: require("./assets/images/web_projects/1.webp"),
//     title: "FE-Finance",
//   },
//   {
//     id: 2,
//     img: require("./assets/images/web_projects/2.webp"),
//     title: "Ocxee",
//   },
//   {
//     id: 3,
//     img: require("./assets/images/web_projects/3.webp"),
//     title: "Leaderbridge",
//   },
//   {
//     id: 4,
//     img: require("./assets/images/web_projects/4.webp"),
//     title: "Gigzio",
//   },
//   {
//     id: 5,
//     img: require("./assets/images/web_projects/5.webp"),
//     title: "FE Group",
//   },
//   {
//     id: 6,
//     img: require("./assets/images/web_projects/6.webp"),
//     title: "V Talkz",
//   },
// ];

// portfolio images (app development)
// export const appPortfolio = [
//   {
//     id: 1,
//     img: require("./assets/images/app_projects/1.webp"),
//     title: "PartEx",
//   },
//   {
//     id: 2,
//     img: require("./assets/images/app_projects/2.webp"),
//     title: "Find A Driver",
//   },
//   {
//     id: 3,
//     img: require("./assets/images/app_projects/3.webp"),
//     title: "Artisan Express",
//   },
//   {
//     id: 4,
//     img: require("./assets/images/app_projects/4.webp"),
//     title: "House of Deliverance",
//   },
// ];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
