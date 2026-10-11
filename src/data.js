export const phone = '+47 929 43 090'
export const phoneHref = 'tel:+4792943090'
export const email = 'support@appollo.no'
export const linkedin = 'https://www.linkedin.com/company/appollo-it-consulting'

export const partners = ['Oslobygg', 'Brakon', 'Oslo Forsikring', 'KFiO']

export const videos = {
  hero: '/videos/oslo-skyline.mp4',
  closing: '/videos/oslo-waterfront.mp4',
}

export const images = {
  hero: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2000&q=80',
  apartments: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
  facade: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
  glass: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  brick: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
  plans: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  atrium: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
  white: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80',
  street: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
  interior: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
  dusk: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1800&q=80',
  oslo: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1600&q=80',
}

export const modules = [
  {
    slug: 'property-register',
    title: 'Property register',
    image: images.facade,
    summary:
      'A living database of every property, building, installation and object in the portfolio.',
    lead: 'Eiendomsoversikt is the register Appollo FDVU is built on. It keeps a detailed, dynamic picture of properties, buildings, installations and the other objects an organisation is responsible for.',
    body: 'Teams stop reconstructing the building from inboxes and shared drives. The register is the place drawings, use, installations and responsibilities stay attached to the asset they belong to.',
    points: [
      'Properties, buildings, installations and other objects',
      'Building-technical overview and drawings',
      'Use of the buildings, occupancy and security overview',
      'Agreement register and information for users',
      'Objectives set for each property',
    ],
  },
  {
    slug: 'deviations',
    title: 'Deviations and work orders',
    image: images.plans,
    summary:
      'Register a deviation, define the action, and follow the work order through to completion.',
    lead: 'Avvik og tiltak keeps the path from a finding to a finished repair in one place. Deviations are registered, actions are defined, and work orders go to the supplier with the full history attached.',
    body: 'Outstanding items stay visible across the portfolio, not only inside the building where they were found. The people responsible can see what is open, who has it, and whether it has actually been closed.',
    points: [
      'Register deviations and define actions',
      'Work orders to suppliers',
      'Follow-up of open deviations and actions',
      'Undesired events',
      'Portfolio-wide view of outstanding items',
    ],
  },
  {
    slug: 'routines',
    title: 'Inspections and annual wheel',
    image: images.brick,
    summary:
      'Control intervals and planned activity for operation, maintenance and the rest of the routine year.',
    lead: 'The annual wheel — årshjulet — is the year’s work, made visible. It holds control intervals and planned activities for day-to-day operation, maintenance and the other routines a building depends on.',
    body: 'Instructions sit with the wheel, so a control is not only a date. It is a task with a scope, an owner and a record when it is done.',
    points: [
      'Annual wheel with instructions',
      'Control intervals for operation and maintenance',
      'Inspection status across the portfolio',
      'Maintenance annual wheel on Entreprise and above',
      'Several wheel types when the portfolio needs them',
    ],
  },
  {
    slug: 'documentation',
    title: 'Technical documentation',
    image: images.office,
    summary:
      'Import, export and share FDV documentation and other files across organisations and roles.',
    lead: 'FDV documentation is part of running a Norwegian building, not an archive project at the end. Appollo lets teams import, export and share documentation and other files across organisations and roles.',
    body: 'Files stay with the property they describe. Sorting and copying, and a portfolio-level archive, are available as the plan grows — so a handover does not mean starting again.',
    points: [
      'FDV documentation on the property',
      'Document archive per property',
      'Import, export and sharing across roles',
      'Portfolio document archive on Entreprise',
      'FDV sorting and copying',
    ],
  },
  {
    slug: 'fire-safety',
    title: 'Fire safety',
    image: images.glass,
    summary:
      'ORRABrann keeps fire measures, inspections and the duties in the building regulations on record.',
    lead: 'ORRABrann is widely used by Appollo customers. It is the fire-safety side of the platform: measures, inspections and the documentation a property manager needs in order to know the regulations are being looked after.',
    body: 'The point is confidence. The customer should be able to see that inspections and fire measures are handled inside the rules that govern the building — not reconstructed after the fact.',
    points: [
      'Fire measures followed through on the property',
      'Inspections kept with the building record',
      'Flammable goods and related registers',
      'Risk assessments',
      'Access for supervisory authorities',
    ],
  },
  {
    slug: 'mobile',
    title: 'Mobile operations',
    image: images.street,
    summary:
      'Air App carries the work from the desktop system onto the phone, on site.',
    lead: 'Air App is the mobile client. It brings key functions from the main system to a phone, so the people on site can reach the record, the control and the information they need without going back to a desk.',
    body: 'Every plan includes the app for the modules in use. The building register is useful only if it can be opened where the building actually is.',
    points: [
      'Key functions from the main system',
      'Access to information and controls on site',
      'Included with the modules you set up',
      'Same property record as the desktop system',
      'Built for the people doing the round, not only the people filing it',
    ],
  },
  {
    slug: 'reports',
    title: 'Status and reports',
    image: images.atrium,
    summary:
      'Dashboards and reports shaped around the status the organisation actually needs to see.',
    lead: 'Status og rapporter gives user-defined dashboards and a full status picture, including automatic and tailored reports.',
    body: 'Aqua, the standalone reporting and statistics tool, goes further when a portfolio needs a wider read of the numbers — for decisions, not only for the archive.',
    points: [
      'Status overview for the portfolio',
      'Status of controls',
      'User-defined dashboards',
      'Automatic and tailored reports',
      'Aqua reporting on the Entreprise plan',
    ],
  },
  {
    slug: 'claims',
    title: 'Claims',
    image: images.interior,
    summary:
      'A record of purchased goods and services, ready if a delivery is not what was agreed.',
    lead: 'The claims module documents purchased goods and services so there is a basis for a claim when a delivery falls short.',
    body: 'It sits with the property, next to the rest of the operational record, instead of in a separate folder that nobody can find when the guarantee period is running out.',
    points: [
      'Documentation of purchased goods and services',
      'A basis for claims on incomplete deliveries',
      'Follow-up of open claims',
      'Available on the Entreprise plan',
      'Kept on the property it belongs to',
    ],
  },
  {
    slug: 'desktop',
    title: 'Desktop platform',
    image: images.white,
    summary:
      'Appollo, also known as Abis air, is the desktop system the rest of the modules sit in.',
    lead: 'Appollo — also known as Abis air — is the desktop building-management system. It is the full set of tools for running a property, so maintenance, documentation and follow-up are handled in one place rather than optimised one spreadsheet at a time.',
    body: 'It is web-based, used on desktop and accompanied by the mobile app. The same platform is what ORRABrann, the annual wheel and the document archive plug into.',
    points: [
      'Web-based FDVU for desktop',
      'Also known as Abis air',
      'Modular: choose the scope you need',
      'Used together with Air App',
      'Shaped around NS 3456 and the duties that sit beside it',
    ],
  },
  {
    slug: 'aqua',
    title: 'Aqua reporting',
    image: images.office,
    summary:
      'A standalone reporting and statistics tool for a wider read of the portfolio.',
    lead: 'Aqua is a standalone reporting and statistics tool. It is there when the organisation needs more than an operational list — a broader picture of the properties, for decisions and for how the portfolio is actually running.',
    body: 'On the Entreprise plan it is part of the same Appollo setup, so the reports are drawn from the register rather than from a parallel set of numbers.',
    points: [
      'Reporting and statistics beyond the daily list',
      'Insight across properties',
      'Support for operational decisions',
      'Included from the Entreprise plan',
      'Fed by the Appollo property record',
    ],
  },
  {
    slug: 'digital-twin',
    title: 'Digital twin',
    image: images.glass,
    summary:
      'A virtual picture of the property, fed by IoT sensors and the operational data you already keep.',
    lead: 'The digital twin is a virtual replica of the property, built with IoT sensors and analysis of the data the building produces, so operation can be tuned rather than only recorded.',
    body: 'It extends the register. The object in Appollo can carry a live picture, not only a name, a drawing and a service interval.',
    points: [
      'Virtual replicas of properties',
      'IoT sensors and data analysis',
      'A closer link between the record and the building',
      'Aimed at how the property actually performs',
      'Used alongside the FDVU register',
    ],
  },
  {
    slug: 'condition',
    title: 'Condition assessment',
    image: images.plans,
    summary:
      'Condition assessment according to NS 3424, so maintenance can be planned from the state of the building.',
    lead: 'Tilstandsvurdering i henhold til NS 3424 is a structured reading of the building’s condition. It gives maintenance planning something more reliable than the last urgent repair.',
    body: 'The assessment lives on the property, with the rest of the technical record, and is part of the full plan together with work orders, drawing markup and custom registration.',
    points: [
      'Condition assessment according to NS 3424',
      'A basis for maintenance planning',
      'Kept on the property record',
      'Part of the full plan',
      'Alongside work orders and drawing markup',
    ],
  },
]

export const homeModules = modules.filter((item) =>
  [
    'property-register',
    'deviations',
    'routines',
    'documentation',
    'fire-safety',
    'mobile',
  ].includes(item.slug),
)

export const customers = [
  {
    slug: 'oslobygg',
    name: 'Oslobygg',
    image: images.oslo,
    summary: 'A named Appollo customer in Oslo’s public property portfolio.',
    body: 'Oslobygg is one of the organisations Appollo names as a customer. The platform is used where operational reliability matters, and where documentation has to stand up to the rules and standards that govern public buildings.',
  },
  {
    slug: 'brakon',
    name: 'Brakon',
    image: images.brick,
    summary: 'Named by Appollo among the customers running property operations on FDVU.',
    body: 'Brakon is named on Appollo’s own site alongside Oslobygg and Oslo Forsikring. They are part of the group of customers who use the platform to keep property operations documented and follow-up visible.',
  },
  {
    slug: 'oslo-forsikring',
    name: 'Oslo Forsikring',
    image: images.glass,
    summary: 'Chosen Appollo for operational reliability and compliance with the rules that apply.',
    body: 'Oslo Forsikring is named by Appollo as a customer that uses the platform to secure operational reliability and compliance with statutory rules and standards. The record is the point: what was inspected, what is open, and what has been documented.',
  },
  {
    slug: 'kfio',
    name: 'KFiO',
    image: images.white,
    summary: 'Named on Appollo’s client list alongside other Oslo institutions.',
    body: 'KFiO is named by Appollo among the organisations it has worked with. As with the rest of the client list, the engagement is property operations: documentation, maintenance and the follow-up those buildings require.',
  },
]

export const faqs = [
  {
    q: 'What does property operations software mean to us?',
    a: 'Appollo FDVU is not only a place to store building data. It helps the people who own, manage and answer for a property feel confident in it. The platform keeps maintenance, inspections, documentation and responsibilities together, so the building stays understandable — day to day, and when someone asks for the record.',
  },
  {
    q: 'What does Appollo FDVU include?',
    a: 'A modular, web-based FDVU system. The core is the property register, deviations and actions, status and reports, the annual wheel, FDV documentation and claims. Around that sit fire safety (ORRABrann), the Air App on mobile, Aqua reporting, condition assessment according to NS 3424, and room for custom roles and forms. You choose the scope. The same platform is used daily by several thousand users.',
  },
  {
    q: 'Why does this matter for a building owner?',
    a: 'A building does not document itself, and a missing record costs more later. Appollo keeps maintenance and compliance visible: what is open, what is due, and what has been handed to a supplier. Preventative routines and a clear status reduce the risk of finding the gap when an inspector, a buyer or a tenant is already waiting.',
  },
  {
    q: 'Who is Appollo for?',
    a: 'Organisations that run buildings. That includes public and municipal portfolios, residential and mixed-use properties, owners’ organisations, developers, and insurance or asset teams who need the operational picture rather than another inbox. One building or many: the modules are chosen around the organisation’s size and goals. The same platform is used daily by several thousand users.',
  },
  {
    q: 'What does working with Appollo mean for you?',
    a: 'It means the day-to-day is simpler to see. Appollo is focused on practical follow-up: a scope of work that is easier to run, documentation that can be shared across roles, and reporting that keeps you informed. Quality, security and integrity are the values the product is held to. Where the standard modules are not enough, consultants and the development team adapt what exists or build what is missing.',
  },
]

export const plans = [
  {
    name: 'Basic',
    note: 'The operational register and the follow-up a property has to have.',
    groups: [
      {
        label: 'Across the portfolio',
        items: [
          'Property database',
          'Follow-up of open deviations and actions',
          'Undesired events',
          'Organisation register',
          'Person register',
          'Status overview',
          'Inspection status',
        ],
      },
      {
        label: 'Per property',
        items: [
          'Outstanding items',
          'Objectives for the property',
          'Annual wheel with instructions',
          'Building-technical overview',
          'Security overview',
          'Use of the buildings',
          'Information for users',
          'Drawings',
          'Installations',
          'Flammable goods',
          'Occupancy load',
          'Agreement register',
          'Document archive',
          'FDV documentation',
          'Risk assessments',
          'Access for supervisory authorities',
        ],
      },
    ],
  },
  {
    name: 'Entreprise',
    note: 'Everything in Basic, plus portfolio documents, claims, Aqua and maintenance planning.',
    groups: [
      {
        label: 'Also across the portfolio',
        items: [
          'Portfolio document archive',
          'Follow-up of claims and HSE deviations',
          'Aqua reporting module',
          'Training module',
          'FDV sorting and copying',
          'Annual wheel types',
        ],
      },
      {
        label: 'Also per property',
        items: [
          'Invoice details',
          'Events module',
          'Registration setup',
          'Claims module',
          'Maintenance actions with pricing',
          'Maintenance annual wheel',
        ],
      },
    ],
  },
  {
    name: 'Full plan',
    note: 'Everything in Basic and Entreprise, plus work orders, custom roles and NS 3424.',
    groups: [
      {
        label: 'Also across the portfolio',
        items: [
          'Overview of all work orders',
          'Forms module',
          'Custom roles',
          'Custom training modules',
          'Custom groups',
          'Custom authorisation',
        ],
      },
      {
        label: 'Also per property',
        items: [
          'Inventory and art',
          'Occupancy',
          'Work orders',
          'HSE deviations',
          'Event overview',
          'Case module with drawing markup',
          'Condition assessment according to NS 3424',
          'Registration base for your own setup',
        ],
      },
    ],
  },
]

export const included = [
  {
    title: 'As many users as you need',
    text: 'User access is not metered. The app is included for the modules you set up.',
  },
  {
    title: 'Help during startup',
    text: 'Specialists assist through the first setup after you start.',
  },
  {
    title: 'Training support',
    text: 'The people who will use the system get support while they learn it.',
  },
]

export const values = [
  {
    title: 'Quality',
    text: 'The product, and the work around it, is held to the same standard as the buildings it documents.',
  },
  {
    title: 'Security',
    text: 'Customer-specific servers, GDPR and deliberate data handling. Operational reliability is part of the delivery, not a footnote.',
  },
  {
    title: 'Integrity',
    text: 'Clear records, clear reporting, and a platform that shows what is actually done.',
  },
]
