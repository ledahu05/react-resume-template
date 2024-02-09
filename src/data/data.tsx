import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import adminuiProduct from '../../public/images/adminui-product.png';
import porfolioImage1 from '../../public/images/blueplan-4.png';
import porfolioImage2 from '../../public/images/blueplan-5.png';
import porfolioImage3 from '../../public/images/blueplan-6.png';
import catalog from '../../public/images/catalog.png';
import porfolioImage4 from '../../public/images/lalilo-1.png';
import porfolioImage5 from '../../public/images/lalilo-2.png';
import porfolioImage7 from '../../public/images/moona-1.png';
import porfolioImage6 from '../../public/images/moona-2.png';
import porfolioImage8 from '../../public/images/moona-3.png';
import porfolioImage9 from '../../public/images/renovationman-1.png';
import storefrontHome from '../../public/images/storefront-home.png';
import porfolioImage10 from '../../public/images/syment-1.png';
import porfolioImage11 from '../../public/images/syment-2.png';
import porfolioImage12 from '../../public/images/syment-3.png';
import porfolioImage13 from '../../public/images/syment-4.png';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profile.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume',
  description: 'Christophe Seguinot - Senior Frontend Developer - Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Christophe Seguinot.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Hautes-Alpes based <strong className="text-stone-100">Senior Frontend Software Engineer</strong>,
        currently working as a freelance. I'm expert in React/Typescript with extensive experience developing
        high-quality applications using modern React, Next, Typescript and Redux.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a strong advocate for <strong className="text-stone-100">best practices</strong> and{' '}
        <strong className="text-stone-100">clean code</strong>. I always strive to maintain a balance between{' '}
        <strong className="text-stone-100">code quality</strong> and{' '}
        <strong className="text-stone-100">project timelines</strong> while adapting my coding standards to the
        expectations of the teams I work with.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  // Initially working as a freelancer to explore various projects and working styles, I now seek continuity and belonging to contribute long-term to a product I believe in. I am looking for a remote role with 2-3 days on-site per month.
  description: `I have been in web development for over 10 years. With expertise in React, Next.js, TypeScript, and other web technologies, I have a proven track record of delivering high-quality applications and integrating seamlessly into development teams.
  I have extensive experience in creating dynamic user interfaces and I am committed to pixel-perfect design. I balance code quality with project timelines and adapt to team expectations. My diverse experience includes corporate web site, web3 web games, SaaS solutions and e-commerce.
`,
  aboutItems: [
    {label: 'Location', text: 'Chorges, France', Icon: MapIcon},
    {label: 'Age', text: '44', Icon: CalendarIcon},
    {label: 'Nationality', text: 'French', Icon: FlagIcon},
    {label: 'Interests', text: 'Trekking, running, climbing, learning, reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Engineer from Ecole Centrale Marseille', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'freelance', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Soft skills',
    skills: [
      {
        name: 'Agile, Scrum, Kanban',
        level: 10,
      },

      {
        name: 'Teamwork',
        level: 10,
      },
      {
        name: 'Good learner',
        level: 10,
      },
      {
        name: 'Empathy',
        level: 10,
      },
      {
        name: 'Communication',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React, Next, Typescript',
        level: 10,
      },
      {
        name: 'Redux',
        level: 10,
      },
      {
        name: 'Tailwind, Styled-Component, CSS',
        level: 10,
      },
      {
        name: 'React-Query',
        level: 10,
      },
      {
        name: 'GraphQL & Rest API',
        level: 10,
      },
      {
        name: 'Copilot',
        level: 10,
      },
    ],
  },
  {
    name: 'CI/CD',
    skills: [
      {
        name: 'Git, Code Review, CI/CD',
        level: 10,
      },
      {
        name: 'Jest, React-Testing, Cypress',
        level: 10,
      },
      {
        name: 'Storybook',
        level: 10,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Linux',
        level: 8,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'French',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Smurfs Society',
    description: 'Web3 Web Game',
    url: 'https://app.thesmurfssociety.com/',
    image: porfolioImage1,
  },
  {
    title: 'The Smurfs Society',
    description: 'Web3 Web Game',
    url: 'https://app.thesmurfssociety.com/',
    image: porfolioImage2,
  },
  {
    title: 'The Smurfs Society',
    description: 'Web3 Web Game',
    url: 'https://app.thesmurfssociety.com/',
    image: porfolioImage3,
  },
  {
    title: 'Clickn Collect',
    description: 'Vitrine Web Site',
    url: '',
    image: storefrontHome,
  },
  {
    title: 'Clickn Collect',
    description: 'Admin Web Site',
    url: '',
    image: catalog,
  },
  {
    title: 'Clickn Collect',
    description: 'Admin Web Site',
    url: '',
    image: adminuiProduct,
  },
  {
    title: 'The Smurfs Society',
    description: 'Web3 Web Game',
    url: 'https://app.thesmurfssociety.com/',
    image: porfolioImage3,
  },
  {
    title: 'Lalilo',
    description: 'Educational Web Site',
    url: 'https://p2ia.lalilo.com',
    image: porfolioImage4,
  },
  {
    title: 'Lalilo',
    description: 'Educational Web Site',
    url: 'https://p2ia.lalilo.com',
    image: porfolioImage5,
  },
  {
    title: 'Moona',
    description: 'Payment platform',
    url: 'https://moona.com/',
    image: porfolioImage6,
  },
  {
    title: 'Moona',
    description: 'Payment platform',
    url: 'https://moona.com/',
    image: porfolioImage7,
  },
  {
    title: 'Moona',
    description: 'Payment platform',
    url: 'https://moona.com/',
    image: porfolioImage8,
  },
  {
    title: 'RenovationMan',
    description: 'Corporate Web Site',
    url: 'https://www.renovationman.com/',
    image: porfolioImage9,
  },
  {
    title: 'Syment',
    description: 'Saas for real estate syndic',
    url: 'https://www.syment.com/',
    image: porfolioImage10,
  },
  {
    title: 'Syment',
    description: 'Saas for real estate syndic',
    url: 'https://www.syment.com/',
    image: porfolioImage11,
  },
  {
    title: 'Syment',
    description: 'Saas for real estate syndic',
    url: 'https://www.syment.com/',
    image: porfolioImage12,
  },
  {
    title: 'Syment',
    description: 'Saas for real estate syndic',
    url: 'https://www.syment.com/',
    image: porfolioImage13,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2000 - September 2003',
    location: '',
    title: 'Central Marseille engineering school',
    content: <p>Engineer graduated with honours</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2019 – Present',
    location: 'Full Remote',
    title: 'React Frontend Developer (freelance)',
    content: (
      <div>
        <p>
          - Since the end of 2019, I have been freelancing for various clients across multiple industries so I have
          experience integrating into existing development teams to assist with feature development.
        </p>
        <p>
          - I developed applications using React, TypeScript and Redux, as well as Graphql and React-Query, to create
          dynamic and scalable user interfaces.
        </p>
        <p>
          - I conducted rigorous unit testing using React-Testing, Jest, and Cypress to ensure the quality and
          functionality of the applications.
        </p>
        <p>
          - As a proponent of pixel-perfect design, I develop graphical interfaces from Figma mockups with meticulous
          attention to detail. Strong advocate of TailwindCSS and Styled-Component
        </p>
        <p>
          - I Contributed to team collaboration and code quality by conducting thorough code reviews and pull requests
          on GitHub.
        </p>
        <p>- I led junior developers</p>
      </div>
    ),
  },

  {
    date: 'May 2023 – December 2023',
    location: 'Full Remote',
    title: 'React/Next Frontend Developper - Clickn collect',
    content: (
      <>
        <p>- Context: Ecommerce and SAAS, development from scratch</p>
        <p>- Project: An e-commerce showcase and SaaS platform for creating digital catalogs</p>
        <p>- Team: One product owner and one backend developer</p>
        <p>
          - Main achievements: Front-end development lead for both solutions, from creation to online launch.
          Integration of a Figma model and graphql endpoints provided by the Vendure backend. Participation in product
          definition, solution roadmap and share of my experience in Web and SaaS development. Integration of payments
          via Stripe. Development of a mobile-first, high-performance solution, optimized for SEO and accessibility.
        </p>
        <p>- Stack: Next 14, Typescript, Graphql, Redux, Tailwind, HeadlessUI, Jest, React-testing, Cypress</p>
      </>
    ),
  },
  {
    date: 'January 2023 – May 2023',
    location: 'Full Remote',
    title: 'React Frontend Developper - GMRounded',
    content: (
      <>
        <p>- Context: Crypto and SaaS accounting</p>
        <p>- Project: Development of an accounting solution for the US and cryptocurrencies</p>
        <p>- Team: One Product Owner, one Python backend developer and one junior react developer.</p>
        <p>
          - Main achievements: Audit of existing codebase and suggestions for improvements. Integration of the Python
          Rest API. Implementation of new functionalities and maintenance
        </p>
        <p>- Stack: Next.js, React.js, TypeScript, Redux, Material UI, Tailwind, Styled Components, Cypress</p>
      </>
    ),
  },
  {
    date: 'September 2022 – December 2022',
    location: 'Full Remote',
    title: 'React Frontend Developper - Blueplan',
    content: (
      <>
        <p>- Context: Web3, NFT and web games</p>
        <p>- Project: Development of a web game to promote NFT "The Smurfs".</p>
        <p>- Team: A CTO in San Fransisco and a Web3 developer in Bali</p>
        <p>
          - Main achievements: Understanding the challenges of Web3 and the architecture of a React/Web3 application.
          Pixel-perfect integration of a Figma model with an artistic design. From scratch development of the game in
          mock mode to enable the web3 developer to easily integrate the backend logic. Collaboration in an
          international context
        </p>
        <p>
          - Stack: Next.js, React.js, TypeScript, Styled Components, Tailwind, Rest API, Web3, Git, CI/CD, Mobile first
        </p>
      </>
    ),
  },
  {
    date: 'December 2022 – August 2022',
    location: 'Full Remote',
    title: 'React Frontend Developper - Syment',
    content: (
      <>
        <p>- Context: Real Estate and SaaS</p>
        <p>- Project: Operating platform for condominium managers</p>
        <p>- Team: A CTO, a Product Owner, a Project Manager/Designer, 2 Symponie PHP backend developers</p>
        <p>
          {' '}
          - Main achievements: Takeover of the existing codebase. Maintenance and development of new functionalities
          such Automating the mailing of official reports by recorded delivery with acknowledgement of receipt.
          Performance optimization. Lead of junior developers
        </p>
        <p>
          - Stack: React, TypeScript, Redux, React-Query, TailwindCSS, Styled-Components, UX, WebSocket, React-Testing,
          Cypress, Git, CI/CD
        </p>
      </>
    ),
  },
  {
    date: 'April 2021 – October 2021',
    location: 'Full Remote',
    title: 'React Frontend Developper - Obat',
    content: (
      <>
        <p>- Context: Building and SaaS, migration from jquery to react</p>
        <p>- Project: A quotation/billing platform dedicated to building professionals</p>
        <p>
          {' '}
          - Team: One product owner, QA team (3 people), back-end team (PHP Symphonie, 4 people),  front-end team (4
          people)
        </p>
        <p>
          - Main achievements: Takeover of existing codebase, Migration of all listing pages to react, Adherence to Test
          Driven Development approach, Systematic integration of new components into Storybook, Lead of junior
          developers
        </p>
        <p>
          - Stack: React, Storybook, TypeScript, Redux, React-Query, Saga, React-Table, Styled-Components, UX,
          React-Testing, Cypress, Git, CI/CD
        </p>
      </>
    ),
  },
  {
    date: 'August 2020 – December 2020',
    location: 'Full Remote',
    title: 'Lead front end Developer React at Moon - Moona',
    content: (
      <>
        <p>- Context: Fintech and SaaS</p>
        <p>- Project: Development of a payment platform for ecommerce storefronts and a dashboard for merchants.</p>
        <p>- Team: One nodejs/aws backend developer and one product owner/tester</p>
        <p>
          - Main achievements: Front-end development lead for both solutions, from creation to online launch. Backend
          integration via graphql api and aws amplify (AWS Serverless). Mobile-first and and pixel-perfect development.
          Full Stripe integration.
        </p>
        <p>
          - Stack: React, Redux, Saga, Styled Components, TypeScript, Test-Driven Development (TDD), Grapql, AWS
          serverless architecture, Stripe
        </p>
      </>
    ),
  },
  {
    date: 'April 2020 – May 2020',
    location: 'Full Remote',
    title: 'Lead front end Developer React at Moon - Lalilo',
    content: (
      <>
        <p>- Project: Collaborative website between Lalilo and the French Ministry of Education</p>
        <p>- Team: One product owner, one designer and many developers in code review</p>
        <p>
          - Main achievements: Development and launch of p2ia.lalilo.com from scratch for Lalilo in collaboration with
          the French Ministry of Education. Reuse of components used by Lalilo in their SaaS and exposed in Storybook
        </p>
        <p>- Stack: React, CSS, Styled-Components, Storybook</p>
      </>
    ),
  },
  {
    date: 'October 2019 – February 2020',
    location: 'Full Remote',
    title: 'React Frontend Developper - RenovationMan',
    content: (
      <>
        <p className="text-left">- Context: Building and SaaS</p>
        <p>Project: Corporate website redesign on JAMStack architecture</p>
        <p>- Team: Marketing team, CTO</p>
        <p>
          - Main achievements: Explained the JAMStack concept to the marketing team. Drafting of documentation to enable
          the marketing team to update the site's content. Definition of the data model and import of existing data into
          Headless DatoCMS. Development of the corporate site with Gatsby in React and putting it online. Data retrieval
          via Graphql API. Developed a mobile-first approach with a focus on performance and accessibility
        </p>
        <p>- Stack: Gatsby, React, Styled-Component, CSS, DatoCMS, GraphQL</p>
      </>
    ),
  },
  {
    date: 'December 2017 – September 2019',
    location: 'Chorges',
    title: 'React Frontend Developper - Websenso',
    content: (
      <>
        <p>- Context: Web agency</p> <p> Project: Numerous custom websites</p>
        <p>
          {' '}
          - Team: A Product Owner, a designer, a frontend team and a backend team Main achievements: Development of a -
          React website as a PWA with Drupal 8 Headless as back-end. Development of numerous websites with Drupal and
          development of customizations in PHP
        </p>
        <p>- Stack: React, PHP, Drupal, CSS</p>
      </>
    ),
  },
  {
    date: 'September 2012 – September 2017',
    location: 'Chambéry, Valence, Gap',
    title: 'Plumber as a Contractor and as a Business Owner',
    content: (
      <p>
        I completed my plumbing vocational training (CAP) in one year in Chambéry, and then worked as a plumbing and
        heating technician for 5 years, including as a temporary worker, on fixed-term contracts, and as a self-employed
        artisan.
      </p>
    ),
  },
  {
    date: 'September 2003 – September 2012',
    location: 'Paris, Marseille, Dublin, Tunis',
    title: 'Java Backend Developer - Capgemini/Bull',
    content: (
      <p>
        I mainly contributed to the integration of large Java/J2EE software packages for Capgemini and the development
        of Java/J2EE applications from scratch for Bull. EJB3, JPA (Hibernate), Java Web Start, JBoss, Weblogic, Oracle
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Frédéric CEO - Clickn Collect',
      text: 'Ma 3ème mission avec Christophe a été comme les autres fois, une réussite totale ! Il est devenu évident que faire appel à lui est une garantie de qualité. Son professionnalisme exemplaire et son approche méthodique font de chaque mission une expérience fluide. Collaborer avec lui est une valeur ajoutée indéniable !',
      image: '',
    },
    {
      name: 'Aymeric CEO - Rounded Technologies',
      text: 'I had the pleasure of working with Christophe, a front-end developer freelancer, and I must say that my experience with him was truly exceptional. From the start, he was highly professional, communicative, and dedicated to delivering high-quality work. Throughout the project, Christophe maintained clear and consistent communication, keeping us up-to-date on his progress and soliciting feedback to ensure that the end result met our needs. He was highly responsive to our requests and was always willing to go the extra mile to ensure that our project was successful. Overall, I highly recommend Christophe as a front-end developer freelancer. His professionalism, expertise, and dedication to his craft make him a valuable asset to any team, and I look forward to the opportunity to work with him again in the future. Thank you',
      image: '',
    },
    {
      name: 'Florent CTO - Syment',
      text: 'Christophe intervened in a rather difficult technical context and accompanied us in a technical migration allowing us to approach the future more serenely. In parallel to this task, he was able to contribute to the development of new functionalities while respecting the deadlines (sometimes a bit short). I recommend Christophe who has a very good knowledge of React and its eco-system.',
      image: '',
    },
    {
      name: 'Natacha PO - Lalilo',
      text: "It's a pleasure to work with Christophe, he's a great resource, he knows how to organize himself very well and he naturally adapts to the constraints we may encounter. Christophe also has good organizational skills, which makes iterations and improvements of the projects he works on easy and pleasant.",
      image: '',
    },
    {
      name: 'Alexandre Estela CTO - Renovation Man',
      text: 'We called Christophe to help us redesign our website, with the objective to gain in maintainability and SEO performance. Christophe was able to integrate perfectly with our tech and product teams, and was able to carry out this migration project by proposing many technical solutions for our needs. We are very satisfied with this collaboration and the results are up to our expectations, we recommend Christophe without hesitation!',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'christophe.seguinot@gmail.com',
      href: 'mailto:christophe.seguinot@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chorge, France',
      href: 'https://goo.gl/maps/ra4R5ZCRkWaSxYwV7',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/christopheseguinot/'},
];
