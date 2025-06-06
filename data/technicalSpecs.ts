export interface TechnicalSpecification {
    id: string;
    category: 'smart-contract' | 'frontend' | 'backend' | 'infrastructure';
    title: string;
    description: string;
    requirements: string[];
    constraints: string[];
    dependencies: string[];
    estimatedComplexity: 'low' | 'medium' | 'high' | 'very-high';
}

export const technicalSpecs: TechnicalSpecification[] = [
    {
        id: 'contract-architecture',
        category: 'smart-contract',
        title: 'Smart Contract Architecture',
        description: 'Overall architecture for smart contract system',
        requirements: [
            'Modular contract design',
            'Upgradeable proxy patterns',
            'Gas optimization',
            'Security best practices',
            'Event emission for frontend',
            'Access control mechanisms'
        ],
        constraints: [
            'Stacks blockchain limitations',
            'Clarity language constraints',
            'Block size limits',
            'Transaction throughput limits'
        ],
        dependencies: [
            'sBTC token contracts',
            'Stacks blockchain',
            'Oracle price feeds'
        ],
        estimatedComplexity: 'very-high'
    },
    {
        id: 'frontend-architecture',
        category: 'frontend',
        title: 'Frontend Application Architecture',
        description: 'Next.js application with TypeScript and modern tooling',
        requirements: [
            'Next.js 14+ with App Router',
            'TypeScript for type safety',
            'Tailwind CSS for styling',
            'React Query for data fetching',
            'Zustand for state management',
            'Wallet connection libraries',
            'Chart.js for data visualization',
            'PWA capabilities'
        ],
        constraints: [
            'Browser compatibility requirements',
            'Mobile responsiveness',
            'Performance budgets',
            'Accessibility standards'
        ],
        dependencies: [
            'Smart contracts',
            'Wallet providers',
            'API endpoints',
            'External data sources'
        ],
        estimatedComplexity: 'high'
    },
    {
        id: 'backend-services',
        category: 'backend',
        title: 'Backend Services Architecture',
        description: 'API services and data processing systems',
        requirements: [
            'REST API endpoints',
            'Real-time data streaming',
            'Background job processing',
            'Database management',
            'Cache management',
            'Authentication/authorization',
            'Rate limiting',
            'Monitoring and logging'
        ],
        constraints: [
            'Scalability requirements',
            'Data consistency needs',
            'Performance requirements',
            'Security standards'
        ],
        dependencies: [
            'Database systems',
            'External APIs',
            'Message queues',
            'Monitoring services'
        ],
        estimatedComplexity: 'high'
    },
    {
        id: 'infrastructure',
        category: 'infrastructure',
        title: 'Infrastructure and DevOps',
        description: 'Deployment and infrastructure management',
        requirements: [
            'Container orchestration',
            'CI/CD pipelines',
            'Environment management',
            'Monitoring and alerting',
            'Backup and recovery',
            'Load balancing',
            'SSL/TLS certificates',
            'Domain management'
        ],
        constraints: [
            'Budget limitations',
            'Security requirements',
            'Compliance needs',
            'Performance SLAs'
        ],
        dependencies: [
            'Cloud providers',
            'DNS services',
            'CDN services',
            'Monitoring tools'
        ],
        estimatedComplexity: 'medium'
    }
];