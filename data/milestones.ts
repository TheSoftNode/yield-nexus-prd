export interface Task {
    id: string;
    title: string;
    description: string;
    estimatedHours: number;
    dependencies: string[];
    deliverables: string[];
    acceptanceCriteria: string[];
}

export interface Milestone {
    id: string;
    title: string;
    duration: string;
    description: string;
    objectives: string[];
    tasks: Task[];
    criticalPath: boolean;
    blockers: string[];
}

export const milestones: Milestone[] = [
    {
        id: 'M1',
        title: 'Project Foundation & Architecture',
        duration: 'Weeks 1-4',
        description: 'Establish solid foundation with proper tooling, environment setup, and architectural decisions',
        objectives: [
            'Set up complete development environment',
            'Design and document system architecture',
            'Establish coding standards and workflows',
            'Create initial project structure'
        ],
        tasks: [
            {
                id: 'M1-T1',
                title: 'Development Environment Setup',
                description: 'Configure Clarinet, Node.js, and development tools',
                estimatedHours: 16,
                dependencies: [],
                deliverables: [
                    'Clarinet project initialized',
                    'Package.json with all dependencies',
                    'Development scripts configured',
                    'Git repository with proper structure'
                ],
                acceptanceCriteria: [
                    'Clarinet commands work correctly',
                    'Tests can be run successfully',
                    'Contracts can be deployed to testnet',
                    'Documentation is complete'
                ]
            },
            {
                id: 'M1-T2',
                title: 'System Architecture Design',
                description: 'Design complete system architecture and contract interactions',
                estimatedHours: 24,
                dependencies: ['M1-T1'],
                deliverables: [
                    'System architecture diagrams',
                    'Contract interaction flows',
                    'Database schema design',
                    'API specification document'
                ],
                acceptanceCriteria: [
                    'All contract relationships documented',
                    'Data flow diagrams complete',
                    'Security considerations addressed',
                    'Scalability requirements defined'
                ]
            },
            {
                id: 'M1-T3',
                title: 'Coding Standards & CI/CD',
                description: 'Establish coding standards, linting, and continuous integration',
                estimatedHours: 12,
                dependencies: ['M1-T1'],
                deliverables: [
                    'ESLint configuration',
                    'Prettier configuration',
                    'GitHub Actions workflows',
                    'Code review guidelines'
                ],
                acceptanceCriteria: [
                    'Automated testing on commits',
                    'Code quality checks pass',
                    'Deployment pipeline works',
                    'Documentation standards defined'
                ]
            },
            {
                id: 'M1-T4',
                title: 'sBTC Integration Research',
                description: 'Deep dive into sBTC contracts and integration patterns',
                estimatedHours: 20,
                dependencies: ['M1-T2'],
                deliverables: [
                    'sBTC integration guide',
                    'Contract interface documentation',
                    'Test integration examples',
                    'Security considerations document'
                ],
                acceptanceCriteria: [
                    'Can interact with sBTC contracts',
                    'Understand all available functions',
                    'Test transactions work',
                    'Security risks identified'
                ]
            }
        ],
        criticalPath: true,
        blockers: []
    },
    {
        id: 'M2',
        title: 'Core Smart Contracts Development',
        duration: 'Weeks 5-10',
        description: 'Develop and test the core smart contracts that form the foundation of the platform',
        objectives: [
            'Build Yield Strategy Manager contract',
            'Implement Automated Strategy Executor',
            'Create Risk Management contract',
            'Establish comprehensive testing suite'
        ],
        tasks: [
            {
                id: 'M2-T1',
                title: 'Yield Strategy Manager Contract',
                description: 'Core contract for managing yield strategies',
                estimatedHours: 40,
                dependencies: ['M1-T4'],
                deliverables: [
                    'Complete contract implementation',
                    'Unit tests with >95% coverage',
                    'Integration tests with sBTC',
                    'Documentation and examples'
                ],
                acceptanceCriteria: [
                    'All functions work as specified',
                    'Security audit passes',
                    'Gas optimization completed',
                    'Error handling robust'
                ]
            },
            {
                id: 'M2-T2',
                title: 'Automated Strategy Executor',
                description: 'Contract for executing automated strategies',
                estimatedHours: 35,
                dependencies: ['M2-T1'],
                deliverables: [
                    'Automation contract code',
                    'Time-based trigger system',
                    'Emergency controls',
                    'Performance optimization'
                ],
                acceptanceCriteria: [
                    'Automated execution works',
                    'Emergency stops function',
                    'Gas costs optimized',
                    'Integration tests pass'
                ]
            },
            {
                id: 'M2-T3',
                title: 'Risk Management Contract',
                description: 'Contract for monitoring and managing risks',
                estimatedHours: 30,
                dependencies: ['M2-T1'],
                deliverables: [
                    'Risk calculation algorithms',
                    'Position monitoring system',
                    'Liquidation mechanisms',
                    'Alert integration'
                ],
                acceptanceCriteria: [
                    'Risk metrics accurate',
                    'Liquidation triggers work',
                    'Oracle integration secure',
                    'Performance acceptable'
                ]
            },
            {
                id: 'M2-T4',
                title: 'Contract Integration Testing',
                description: 'Comprehensive testing of contract interactions',
                estimatedHours: 25,
                dependencies: ['M2-T1', 'M2-T2', 'M2-T3'],
                deliverables: [
                    'Integration test suite',
                    'Load testing results',
                    'Security test report',
                    'Performance benchmarks'
                ],
                acceptanceCriteria: [
                    'All contracts interact correctly',
                    'Performance meets requirements',
                    'Security tests pass',
                    'No critical bugs found'
                ]
            }
        ],
        criticalPath: true,
        blockers: ['sBTC testnet availability', 'Oracle price feeds']
    },
    {
        id: 'M3',
        title: 'Frontend Application Foundation',
        duration: 'Weeks 8-12',
        description: 'Build the core frontend application with wallet integration and basic UI',
        objectives: [
            'Set up Next.js application with TypeScript',
            'Implement wallet connection functionality',
            'Create core UI components and layouts',
            'Integrate with smart contracts'
        ],
        tasks: [
            {
                id: 'M3-T1',
                title: 'Next.js Application Setup',
                description: 'Initialize and configure the frontend application',
                estimatedHours: 20,
                dependencies: ['M1-T3'],
                deliverables: [
                    'Next.js project structure',
                    'TypeScript configuration',
                    'Tailwind CSS setup',
                    'Component library foundation'
                ],
                acceptanceCriteria: [
                    'Application runs without errors',
                    'Hot reloading works',
                    'Build process optimized',
                    'Type checking enabled'
                ]
            },
            {
                id: 'M3-T2',
                title: 'Wallet Integration',
                description: 'Implement multi-wallet support for Stacks ecosystem',
                estimatedHours: 30,
                dependencies: ['M3-T1'],
                deliverables: [
                    'Leather wallet integration',
                    'Xverse wallet integration',
                    'Wallet state management',
                    'Transaction handling'
                ],
                acceptanceCriteria: [
                    'Both wallets connect successfully',
                    'Transactions can be signed',
                    'State persists correctly',
                    'Error handling robust'
                ]
            },
            {
                id: 'M3-T3',
                title: 'Core UI Components',
                description: 'Build reusable UI components following design system',
                estimatedHours: 35,
                dependencies: ['M3-T1'],
                deliverables: [
                    'Component library',
                    'Storybook documentation',
                    'Design system implementation',
                    'Responsive layouts'
                ],
                acceptanceCriteria: [
                    'Components are reusable',
                    'Design system consistent',
                    'Mobile responsive',
                    'Accessibility compliant'
                ]
            },
            {
                id: 'M3-T4',
                title: 'Smart Contract Integration',
                description: 'Connect frontend to smart contracts',
                estimatedHours: 25,
                dependencies: ['M3-T2', 'M2-T4'],
                deliverables: [
                    'Contract interaction hooks',
                    'Transaction state management',
                    'Error handling system',
                    'Real-time data updates'
                ],
                acceptanceCriteria: [
                    'Can read contract data',
                    'Can write to contracts',
                    'Real-time updates work',
                    'Error states handled'
                ]
            }
        ],
        criticalPath: false,
        blockers: []
    },
    {
        id: 'M4',
        title: 'Strategy Implementation & Marketplace',
        duration: 'Weeks 11-16',
        description: 'Implement yield strategies and create strategy marketplace',
        objectives: [
            'Build strategy marketplace interface',
            'Implement lending strategies',
            'Create staking mechanisms',
            'Add liquidity provision options'
        ],
        tasks: [
            {
                id: 'M4-T1',
                title: 'Strategy Marketplace',
                description: 'Build interface for browsing and selecting strategies',
                estimatedHours: 35,
                dependencies: ['M3-T4'],
                deliverables: [
                    'Strategy browsing interface',
                    'Strategy details pages',
                    'Performance metrics display',
                    'Strategy comparison tools'
                ],
                acceptanceCriteria: [
                    'Users can browse strategies',
                    'Performance data accurate',
                    'Comparison features work',
                    'UI is intuitive'
                ]
            },
            {
                id: 'M4-T2',
                title: 'Lending Strategies',
                description: 'Implement lending protocol integrations',
                estimatedHours: 40,
                dependencies: ['M2-T4'],
                deliverables: [
                    'Lending protocol adapters',
                    'Interest rate optimization',
                    'Risk assessment integration',
                    'Automated rebalancing'
                ],
                acceptanceCriteria: [
                    'Lending strategies work',
                    'Rates are competitive',
                    'Risk management active',
                    'Auto-rebalancing functions'
                ]
            },
            {
                id: 'M4-T3',
                title: 'Staking Mechanisms',
                description: 'Build staking strategy implementations',
                estimatedHours: 30,
                dependencies: ['M2-T4'],
                deliverables: [
                    'Staking contract integrations',
                    'Reward claiming automation',
                    'Validator selection logic',
                    'Slashing risk management'
                ],
                acceptanceCriteria: [
                    'Staking rewards accumulate',
                    'Auto-claiming works',
                    'Risk mitigation active',
                    'Performance tracking accurate'
                ]
            },
            {
                id: 'M4-T4',
                title: 'Liquidity Provision',
                description: 'Implement LP strategy options',
                estimatedHours: 35,
                dependencies: ['M2-T4'],
                deliverables: [
                    'DEX integrations',
                    'Impermanent loss calculations',
                    'Fee optimization',
                    'Position management tools'
                ],
                acceptanceCriteria: [
                    'LP positions can be created',
                    'IL calculations accurate',
                    'Fee harvesting works',
                    'Position management complete'
                ]
            }
        ],
        criticalPath: false,
        blockers: ['DeFi protocol APIs', 'Oracle integrations']
    },
    {
        id: 'M5',
        title: 'Automation & Risk Management',
        duration: 'Weeks 15-20',
        description: 'Build automation engine and comprehensive risk management',
        objectives: [
            'Create rule-based automation system',
            'Implement risk monitoring dashboard',
            'Build liquidation mechanisms',
            'Add portfolio rebalancing'
        ],
        tasks: [
            {
                id: 'M5-T1',
                title: 'Automation Rule Builder',
                description: 'Visual interface for creating automation rules',
                estimatedHours: 40,
                dependencies: ['M4-T1'],
                deliverables: [
                    'Visual rule builder interface',
                    'Conditional logic system',
                    'Rule testing framework',
                    'Performance backtesting'
                ],
                acceptanceCriteria: [
                    'Rules can be created visually',
                    'Logic executes correctly',
                    'Testing framework works',
                    'Backtesting is accurate'
                ]
            },
            {
                id: 'M5-T2',
                title: 'Risk Monitoring Dashboard',
                description: 'Real-time risk monitoring and alerts',
                estimatedHours: 35,
                dependencies: ['M2-T3', 'M3-T4'],
                deliverables: [
                    'Risk metrics dashboard',
                    'Real-time alert system',
                    'Risk visualization charts',
                    'Historical risk analysis'
                ],
                acceptanceCriteria: [
                    'Risk metrics display correctly',
                    'Alerts trigger appropriately',
                    'Visualizations are clear',
                    'Historical data accurate'
                ]
            },
            {
                id: 'M5-T3',
                title: 'Liquidation Engine',
                description: 'Automated liquidation system for risk management',
                estimatedHours: 30,
                dependencies: ['M2-T3'],
                deliverables: [
                    'Liquidation trigger algorithms',
                    'Partial liquidation support',
                    'Slippage protection',
                    'Emergency liquidation modes'
                ],
                acceptanceCriteria: [
                    'Liquidations trigger correctly',
                    'Partial liquidations work',
                    'Slippage minimized',
                    'Emergency modes function'
                ]
            },
            {
                id: 'M5-T4',
                title: 'Portfolio Rebalancing',
                description: 'Automated portfolio rebalancing system',
                estimatedHours: 25,
                dependencies: ['M2-T1', 'M4-T4'],
                deliverables: [
                    'Rebalancing algorithms',
                    'Cost optimization',
                    'Frequency controls',
                    'Performance tracking'
                ],
                acceptanceCriteria: [
                    'Rebalancing maintains targets',
                    'Costs are optimized',
                    'Frequency is appropriate',
                    'Performance improves'
                ]
            }
        ],
        criticalPath: false,
        blockers: ['Oracle reliability', 'Gas cost optimization']
    },
    {
        id: 'M6',
        title: 'Advanced Features & Analytics',
        duration: 'Weeks 19-24',
        description: 'Implement advanced features, analytics, and optimization',
        objectives: [
            'Build comprehensive analytics dashboard',
            'Implement yield optimization algorithms',
            'Create notification system',
            'Add mobile responsive design'
        ],
        tasks: [
            {
                id: 'M6-T1',
                title: 'Analytics Dashboard',
                description: 'Comprehensive portfolio and performance analytics',
                estimatedHours: 45,
                dependencies: ['M2-T4', 'M4-T4'],
                deliverables: [
                    'Performance tracking charts',
                    'Risk-adjusted returns',
                    'Benchmark comparisons',
                    'Custom report generation'
                ],
                acceptanceCriteria: [
                    'Analytics are accurate',
                    'Charts are interactive',
                    'Comparisons meaningful',
                    'Reports exportable'
                ]
            },
            {
                id: 'M6-T2',
                title: 'Yield Optimization',
                description: 'Advanced yield optimization algorithms',
                estimatedHours: 35,
                dependencies: ['M4-T4', 'M5-T4'],
                deliverables: [
                    'Yield aggregation engine',
                    'Auto-compounding mechanisms',
                    'Fee optimization',
                    'MEV protection'
                ],
                acceptanceCriteria: [
                    'Yields are maximized',
                    'Compounding works automatically',
                    'Fees are minimized',
                    'MEV protection active'
                ]
            },
            {
                id: 'M6-T3',
                title: 'Notification System',
                description: 'Multi-channel notification and alert system',
                estimatedHours: 30,
                dependencies: ['M5-T2'],
                deliverables: [
                    'Email notifications',
                    'Push notifications',
                    'Webhook integrations',
                    'Notification preferences'
                ],
                acceptanceCriteria: [
                    'Notifications deliver reliably',
                    'Multiple channels work',
                    'Preferences are respected',
                    'No spam or false alerts'
                ]
            },
            {
                id: 'M6-T4',
                title: 'Mobile Optimization',
                description: 'Mobile-responsive design and PWA features',
                estimatedHours: 25,
                dependencies: ['M3-T3'],
                deliverables: [
                    'Mobile-responsive layouts',
                    'PWA configuration',
                    'Offline functionality',
                    'Mobile wallet integration'
                ],
                acceptanceCriteria: [
                    'All screens work on mobile',
                    'PWA installs correctly',
                    'Offline mode functions',
                    'Mobile wallets connect'
                ]
            }
        ],
        criticalPath: false,
        blockers: []
    },
    {
        id: 'M7',
        title: 'Security Audit & Testing',
        duration: 'Weeks 23-26',
        description: 'Comprehensive security audit, testing, and optimization',
        objectives: [
            'Conduct security audit of all contracts',
            'Perform comprehensive testing',
            'Optimize performance and gas usage',
            'Prepare for mainnet deployment'
        ],
        tasks: [
            {
                id: 'M7-T1',
                title: 'Security Audit',
                description: 'Professional security audit of smart contracts',
                estimatedHours: 60,
                dependencies: ['M2-T4', 'M4-T4', 'M5-T4'],
                deliverables: [
                    'Security audit report',
                    'Vulnerability assessments',
                    'Fix recommendations',
                    'Re-audit confirmation'
                ],
                acceptanceCriteria: [
                    'No critical vulnerabilities',
                    'All fixes implemented',
                    'Re-audit passes',
                    'Security documentation complete'
                ]
            },
            {
                id: 'M7-T2',
                title: 'Comprehensive Testing',
                description: 'Full system testing including edge cases',
                estimatedHours: 40,
                dependencies: ['M6-T4'],
                deliverables: [
                    'End-to-end test suite',
                    'Load testing results',
                    'Edge case coverage',
                    'User acceptance testing'
                ],
                acceptanceCriteria: [
                    'All tests pass consistently',
                    'Performance meets targets',
                    'Edge cases handled',
                    'User feedback positive'
                ]
            },
            {
                id: 'M7-T3',
                title: 'Performance Optimization',
                description: 'Optimize gas usage and application performance',
                estimatedHours: 30,
                dependencies: ['M7-T1'],
                deliverables: [
                    'Gas optimization report',
                    'Frontend performance audit',
                    'Database optimization',
                    'CDN configuration'
                ],
                acceptanceCriteria: [
                    'Gas costs reduced by 20%',
                    'Page load times <2s',
                    'Database queries optimized',
                    'CDN improves performance'
                ]
            },
            {
                id: 'M7-T4',
                title: 'Mainnet Preparation',
                description: 'Prepare all systems for mainnet deployment',
                estimatedHours: 25,
                dependencies: ['M7-T1', 'M7-T2', 'M7-T3'],
                deliverables: [
                    'Mainnet deployment scripts',
                    'Production configuration',
                    'Monitoring systems',
                    'Incident response plan'
                ],
                acceptanceCriteria: [
                    'Deployment scripts tested',
                    'Production config secure',
                    'Monitoring comprehensive',
                    'Response plan documented'
                ]
            }
        ],
        criticalPath: true,
        blockers: ['Security auditor availability']
    },
    {
        id: 'M8',
        title: 'Mainnet Launch & Community',
        duration: 'Weeks 27-32',
        description: 'Deploy to mainnet and build community features',
        objectives: [
            'Deploy contracts to Stacks mainnet',
            'Launch beta program with selected users',
            'Build community and social features',
            'Plan for future development'
        ],
        tasks: [
            {
                id: 'M8-T1',
                title: 'Mainnet Deployment',
                description: 'Deploy all contracts and systems to mainnet',
                estimatedHours: 30,
                dependencies: ['M7-T4'],
                deliverables: [
                    'Mainnet contract deployment',
                    'Production environment setup',
                    'DNS and domain configuration',
                    'SSL certificate installation'
                ],
                acceptanceCriteria: [
                    'All contracts deployed successfully',
                    'Production environment stable',
                    'Domain accessible globally',
                    'SSL certificate valid'
                ]
            },
            {
                id: 'M8-T2',
                title: 'Beta Program Launch',
                description: 'Launch beta program with limited users',
                estimatedHours: 25,
                dependencies: ['M8-T1'],
                deliverables: [
                    'Beta user onboarding flow',
                    'Feedback collection system',
                    'User support documentation',
                    'Beta metrics dashboard'
                ],
                acceptanceCriteria: [
                    'Beta users successfully onboarded',
                    'Feedback system functional',
                    'Documentation comprehensive',
                    'Metrics tracking accurately'
                ]
            },
            {
                id: 'M8-T3',
                title: 'Community Features',
                description: 'Build social trading and community features',
                estimatedHours: 40,
                dependencies: ['M8-T1'],
                deliverables: [
                    'Strategy sharing platform',
                    'Social trading features',
                    'Leaderboards',
                    'Community governance'
                ],
                acceptanceCriteria: [
                    'Users can share strategies',
                    'Social features work correctly',
                    'Leaderboards update properly',
                    'Governance system functional'
                ]
            },
            {
                id: 'M8-T4',
                title: 'Future Development Planning',
                description: 'Plan and document future development phases',
                estimatedHours: 20,
                dependencies: ['M8-T2'],
                deliverables: [
                    'Product roadmap document',
                    'Feature prioritization matrix',
                    'Technical debt assessment',
                    'Growth strategy plan'
                ],
                acceptanceCriteria: [
                    'Roadmap clearly defined',
                    'Priorities are data-driven',
                    'Technical debt documented',
                    'Growth plan actionable'
                ]
            }
        ],
        criticalPath: true,
        blockers: ['Mainnet stability', 'User acquisition']
    }
];