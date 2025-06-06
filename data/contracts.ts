export interface ContractInfo {
    id: string;
    name: string;
    purpose: string;
    keyFunctions: string[];
    integrationPoints: string[];
    priority: 'critical' | 'high' | 'medium' | 'low';
}

export const contracts: ContractInfo[] = [
    {
        id: 'yield-strategy-manager',
        name: 'Yield Strategy Manager Contract',
        purpose: 'Central orchestrator for yield strategies',
        keyFunctions: [
            'register-strategy: Register new yield strategies',
            'deposit-to-strategy: Allocate sBTC to specific strategies',
            'rebalance-portfolio: Automated portfolio rebalancing',
            'emergency-withdraw: Emergency exit from strategies',
            'calculate-yields: Real-time yield calculations'
        ],
        integrationPoints: [
            'Calls sbtc-token.protocol-lock to lock sBTC for strategies',
            'Interacts with external DeFi protocols (lending, staking)',
            'Maintains user portfolio mappings'
        ],
        priority: 'critical'
    },
    {
        id: 'automated-strategy-executor',
        name: 'Automated Strategy Executor Contract',
        purpose: 'Execute predefined trading/yield strategies',
        keyFunctions: [
            'create-automation-rule: Set up automated actions',
            'execute-strategy: Trigger strategy execution',
            'update-parameters: Modify strategy parameters',
            'pause-automation: Emergency pause functionality'
        ],
        integrationPoints: [
            'Uses time-based triggers via Stacks block height',
            'Integrates with DEX contracts for swapping',
            'Manages gas optimization for batch operations'
        ],
        priority: 'critical'
    },
    {
        id: 'risk-management',
        name: 'Risk Management Contract',
        purpose: 'Monitor and manage portfolio risks',
        keyFunctions: [
            'set-risk-limits: Define risk parameters per user',
            'monitor-positions: Track position health',
            'trigger-liquidation: Automated position closure',
            'calculate-risk-metrics: Real-time risk assessment'
        ],
        integrationPoints: [
            'Monitors external price oracles',
            'Integrates with lending protocol health factors',
            'Communicates with Strategy Manager for rebalancing'
        ],
        priority: 'high'
    },
    {
        id: 'yield-aggregator',
        name: 'Yield Aggregator Contract',
        purpose: 'Aggregate yields from multiple sources',
        keyFunctions: [
            'register-yield-source: Add new yield opportunities',
            'optimize-allocation: Optimal capital allocation',
            'compound-rewards: Automated reward compounding',
            'fee-distribution: Platform fee management'
        ],
        integrationPoints: [
            'Interfaces with various DeFi protocols',
            'Manages fee collection and distribution',
            'Handles reward token conversions'
        ],
        priority: 'high'
    },
    {
        id: 'notification-alert',
        name: 'Notification & Alert Contract',
        purpose: 'On-chain alert and notification system',
        keyFunctions: [
            'create-alert: Set up price/yield alerts',
            'process-alerts: Check and trigger alerts',
            'update-alert-params: Modify alert conditions',
            'get-user-alerts: Retrieve active alerts'
        ],
        integrationPoints: [
            'Monitors external data feeds',
            'Emits events for frontend consumption',
            'Integrates with communication services'
        ],
        priority: 'medium'
    },
    {
        id: 'portfolio-analytics',
        name: 'Portfolio Analytics Contract',
        purpose: 'Track and analyze portfolio performance',
        keyFunctions: [
            'record-transaction: Log all portfolio changes',
            'calculate-performance: Historical performance metrics',
            'generate-reports: Portfolio summaries',
            'track-fees: Fee and cost analysis'
        ],
        integrationPoints: [
            'Aggregates data from all other contracts',
            'Provides read-only functions for frontend',
            'Maintains historical data structures'
        ],
        priority: 'medium'
    }
];