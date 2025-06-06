export interface FeatureCategory {
    id: string;
    title: string;
    description: string;
    features: Feature[];
    priority: 'must-have' | 'should-have' | 'could-have' | 'wont-have';
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    userStory: string;
    acceptanceCriteria: string[];
    technicalRequirements: string[];
    designRequirements: string[];
}

export const featureCategories: FeatureCategory[] = [
    {
        id: 'core-platform',
        title: 'Core Platform Features',
        description: 'Essential features for basic platform functionality',
        priority: 'must-have',
        features: [
            {
                id: 'wallet-connection',
                title: 'Multi-Wallet Support',
                description: 'Support for Leather, Xverse, and other Stacks wallets',
                userStory: 'As a user, I want to connect my preferred Stacks wallet so that I can interact with the platform securely',
                acceptanceCriteria: [
                    'User can connect Leather wallet',
                    'User can connect Xverse wallet',
                    'Wallet state persists across sessions',
                    'Connection errors are handled gracefully'
                ],
                technicalRequirements: [
                    'Stacks.js integration',
                    'Wallet state management',
                    'Transaction signing',
                    'Error handling system'
                ],
                designRequirements: [
                    'Wallet selection modal',
                    'Connection status indicator',
                    'Wallet switching interface',
                    'Error message displays'
                ]
            },
            {
                id: 'portfolio-dashboard',
                title: 'Portfolio Dashboard',
                description: 'Overview of user portfolio with real-time data',
                userStory: 'As a user, I want to see my portfolio performance at a glance so that I can make informed decisions',
                acceptanceCriteria: [
                    'Shows total portfolio value',
                    'Displays active strategies',
                    'Shows yield performance',
                    'Updates in real-time'
                ],
                technicalRequirements: [
                    'Real-time data fetching',
                    'Portfolio calculation engine',
                    'Performance tracking',
                    'Data visualization components'
                ],
                designRequirements: [
                    'Clean dashboard layout',
                    'Interactive charts',
                    'Mobile responsive design',
                    'Data loading states'
                ]
            }
        ]
    },
    {
        id: 'yield-strategies',
        title: 'Yield Strategy Features',
        description: 'Features for creating and managing yield strategies',
        priority: 'must-have',
        features: [
            {
                id: 'strategy-marketplace',
                title: 'Strategy Marketplace',
                description: 'Browse and select from available yield strategies',
                userStory: 'As a user, I want to browse available strategies so that I can find the best yield opportunities',
                acceptanceCriteria: [
                    'Displays all available strategies',
                    'Shows strategy performance metrics',
                    'Allows strategy comparison',
                    'Enables one-click deployment'
                ],
                technicalRequirements: [
                    'Strategy registry contract',
                    'Performance calculation system',
                    'Comparison algorithms',
                    'Deployment automation'
                ],
                designRequirements: [
                    'Strategy cards layout',
                    'Filtering and sorting',
                    'Comparison interface',
                    'Deployment workflow'
                ]
            }
        ]
    },
    {
        id: 'automation',
        title: 'Automation Features',
        description: 'Automated trading and portfolio management',
        priority: 'should-have',
        features: [
            {
                id: 'rule-builder',
                title: 'Visual Rule Builder',
                description: 'Create automation rules with visual interface',
                userStory: 'As a user, I want to create automation rules visually so that I can set up complex strategies without coding',
                acceptanceCriteria: [
                    'Can create if-then-else rules',
                    'Supports multiple conditions',
                    'Rules can be tested before deployment',
                    'Performance backtesting available'
                ],
                technicalRequirements: [
                    'Visual rule engine',
                    'Condition evaluation system',
                    'Rule testing framework',
                    'Backtesting algorithms'
                ],
                designRequirements: [
                    'Drag-and-drop interface',
                    'Rule visualization',
                    'Testing interface',
                    'Results display'
                ]
            }
        ]
    },
    {
        id: 'risk-management',
        title: 'Risk Management Features',
        description: 'Tools for monitoring and managing portfolio risks',
        priority: 'must-have',
        features: [
            {
                id: 'risk-monitoring',
                title: 'Real-time Risk Monitoring',
                description: 'Monitor portfolio risks and trigger alerts',
                userStory: 'As a user, I want to monitor my portfolio risks in real-time so that I can avoid significant losses',
                acceptanceCriteria: [
                    'Shows risk metrics in real-time',
                    'Triggers alerts at risk thresholds',
                    'Provides risk recommendations',
                    'Historical risk analysis available'
                ],
                technicalRequirements: [
                    'Risk calculation algorithms',
                    'Real-time monitoring system',
                    'Alert triggering mechanism',
                    'Historical data storage'
                ],
                designRequirements: [
                    'Risk dashboard layout',
                    'Alert notification system',
                    'Risk visualization charts',
                    'Historical analysis interface'
                ]
            }
        ]
    },
    {
        id: 'analytics',
        title: 'Analytics & Reporting',
        description: 'Comprehensive analytics and reporting features',
        priority: 'should-have',
        features: [
            {
                id: 'performance-analytics',
                title: 'Performance Analytics',
                description: 'Detailed performance tracking and analysis',
                userStory: 'As a user, I want detailed performance analytics so that I can optimize my investment strategy',
                acceptanceCriteria: [
                    'Shows historical performance',
                    'Calculates risk-adjusted returns',
                    'Compares against benchmarks',
                    'Generates custom reports'
                ],
                technicalRequirements: [
                    'Performance calculation engine',
                    'Benchmark data integration',
                    'Report generation system',
                    'Data export functionality'
                ],
                designRequirements: [
                    'Analytics dashboard',
                    'Interactive charts',
                    'Report templates',
                    'Export interface'
                ]
            }
        ]
    }
];