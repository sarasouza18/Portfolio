export const introContent = {
    description: `
        Senior Backend Engineer with 8+ years of experience designing, scaling, and operating distributed systems, cloud-native applications, search platforms, and data-intensive backend services.

        My expertise spans AWS, OpenSearch, PostgreSQL, DynamoDB, Python, FastAPI, Laravel, event-driven architectures, and large-scale API development. Throughout my career, I have worked on high-impact platforms involving social media analytics, creator intelligence, search infrastructure, payment processing, and mission-critical production environments.

        I am particularly passionate about distributed systems, platform engineering, data platforms, and search technologies. I enjoy solving complex scalability challenges, improving system reliability, and building architectures capable of processing large volumes of data efficiently.

        Beyond software engineering, I actively contribute to the technology community as a conference speaker, presenting topics related to software architecture, distributed systems, and search technologies at major Brazilian technology events. I am currently pursuing a Master's Degree in Software Engineering, conducting research focused on scalable architectures, OpenSearch, intelligent caching, and distributed systems.
    `,
};

export const experiences = [
    {
        id: 1,
        title: 'Senior Backend & Data Infrastructure Engineer',
        company: 'Zaaz Collective',
        period: '2025 - 2026',
        description: 'Designed and evolved large-scale data platforms supporting creator intelligence, social media analytics, and audience insights. Built distributed ingestion pipelines, analytics services, and event-driven workflows using AWS, OpenSearch, DynamoDB, Redis, PostgreSQL, and Docker. Led production investigations involving indexing failures, queue backlogs, ingestion bottlenecks, and distributed-system incidents while improving platform scalability, observability, and operational reliability.'
    },
    {
        id: 2,
        title: 'Senior Software Engineer & Technical Consultant',
        company: 'Atlas Technologies',
        period: '2022 - 2026',
        description: 'Served as a senior technical consultant supporting multiple engineering teams across different products and business domains. Led architecture reviews, code reviews, onboarding programs, technical assessments, and production investigations. Specialized in Laravel, AWS, Redis, OpenSearch, Docker, distributed systems, and software architecture. Mentored more than 20 senior-level developers while improving engineering standards, operational reliability, and incident response processes.'
    },
    {
        id: 3,
        title: 'Software Engineer',
        company: 'SleepUp',
        period: '2021',
        description: 'Designed the system architecture, database model, and backend services for a sleep management platform. Developed patient management features, administrative modules, and integrated Samsung Health APIs to collect sleep metrics from wearable devices, enabling real-time monitoring and data-driven sleep improvement recommendations.'
    },
    {
        id: 4,
        title: 'Software Engineer',
        company: 'Basico & Co.',
        period: '2021',
        description: 'Improved Shopify-integrated e-commerce APIs, increasing operational efficiency and contributing to a 25% increase in processed orders. Applied software engineering best practices, enhanced code quality and maintainability, supported CI/CD workflows, and worked on high-resolution image processing pipelines.'
    },
    {
        id: 5,
        title: 'Software Engineer',
        company: 'Bee Delivery',
        period: '2020',
        description: 'Modernized a legacy delivery platform through backend refactoring, SOLID principles, and MVC architecture patterns. Led integrations with iFood and Omie ERP using decoupled service-oriented packages. Developed route optimization and geolocation-based delivery systems that reduced delivery times and improved logistics efficiency.'
    },
    {
        id: 6,
        title: 'Full-Stack Programmer',
        company: 'Rits Tecnologia',
        period: '2020',
        description: 'Developed subscription and recurring billing platforms for enterprise customers, integrating payment providers such as Vindi and Pagar.me. Focused on backend development, payment processing, API integrations, and scalable business workflows.'
    },
    {
        id: 7,
        title: 'Full-Stack Programmer',
        company: 'Varejo Mais',
        period: '2018 - 2019',
        description: 'Developed centralized auditing and monitoring systems for Samsung franchise operations, improving visibility, operational control, and data-driven decision-making across multiple business units.'
    },
    {
        id: 8,
        title: 'Research Scholar',
        company: 'Federal University of Rio Grande do Norte (Smart Cities Project)',
        period: '2018 - 2019',
        description: 'Developed IoT-based monitoring solutions for smart city initiatives, including systems for monitoring energy consumption and operational status of university infrastructure assets.'
    },
    {
        id: 9,
        title: 'Intern',
        company: 'Federal University of Rio Grande do Norte (Distance Education Department)',
        period: '2017 - 2018',
        description: 'Developed institutional systems, administrative platforms, and APIs supporting academic and public examination processes, contributing to the modernization of internal university operations.'
    },
    {
        id: 10,
        title: 'Research Scholar',
        company: 'Instituto Metrópole Digital',
        period: '2016 - 2017',
        description: 'Developed internal management systems focused on asset control, room reservations, and operational automation, improving resource utilization and administrative efficiency.'
    }
];

export const skills = [
    'Distributed Systems',
    'OpenSearch / Elasticsearch',
    'AWS',
    'Platform Engineering',
    'Data Platforms',
    'Python',
    'FastAPI',
    'PHP',
    'Laravel',
    'PostgreSQL',
    'MySQL',
    'DynamoDB',
    'Redis',
    'Docker',
    'Kubernetes',
    'System Design',
    'Microservices',
    'Event-Driven Architecture',
    'REST APIs',
    'AWS Lambda',
    'AWS SQS',
    'AWS SNS',
    'Kafka',
    'RabbitMQ',
    'CI/CD',
    'Software Architecture'
];

export const personalProjects = [
    {
        id: 1,
        name: 'PixWave',
        link: 'https://github.com/sarasouza18/PixWave',
        description: 'Distributed payment wallet platform designed around high availability and gateway redundancy. Supports PIX transactions through multiple providers with failover strategies, Redis caching, centralized logging, Docker containers, Kubernetes orchestration, and Elasticsearch-based observability.'
    },
    {
        id: 2,
        name: 'PayWave',
        link: 'https://github.com/sarasouza18/PayWave',
        description: 'Scalable payment processing platform supporting Stripe and PayPal with automated retries, reconciliation workflows, fallback mechanisms, and real-time transaction tracking. Built using Symfony, Docker, RabbitMQ, and modern payment architecture patterns.'
    },
    {
        id: 3,
        name: 'FilmFlare',
        link: 'https://github.com/sarasouza18/FilmFlare',
        description: 'Search-driven movie recommendation platform powered by OpenSearch, Redis, and DynamoDB. Designed to deliver low-latency recommendations, full-text search capabilities, and scalable deployment through Docker and Kubernetes.'
    },
    {
        id: 4,
        name: 'CartLoom',
        link: 'https://github.com/sarasouza18/CartLoom',
        description: 'Scalable e-commerce backend platform designed for high-volume order processing and real-time Shopify synchronization. Focused on performance, reliability, inventory consistency, and distributed integration workflows.'
    },
    {
        id: 5,
        name: 'Invoicely',
        link: 'https://github.com/sarasouza18/Invoicely',
        description: 'Serverless document-processing platform built on AWS. Uses Textract, Lambda, DynamoDB, and SNS to extract structured information from invoices, process documents asynchronously, and provide event-driven notifications.'
    },
    {
        id: 6,
        name: 'EmotionIA',
        link: 'https://github.com/sarasouza18/EmotionIA-deep-learning',
        description: 'Computer vision and deep learning project for facial emotion recognition using DeepFace and the FER-2013 dataset. Evaluates emotional classification performance through accuracy, precision, recall, and F1-score metrics.'
    },
    {
        id: 7,
        name: 'Portfolio',
        link: 'https://github.com/sarasouza18/Portfolio',
        description: 'Personal portfolio showcasing professional experience, software architecture expertise, distributed systems projects, cloud-native solutions, and technical research.'
    }
];
