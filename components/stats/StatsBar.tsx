import React from 'react';
import { ContractInfo } from '@/data/contracts';
import { Milestone } from '@/data/milestones';
import { FeatureCategory } from '@/data/features';

interface StatsBarProps {
    contracts: ContractInfo[];
    milestones: Milestone[];
    features: FeatureCategory[];
}

export const StatsBar: React.FC<StatsBarProps> = ({ contracts, milestones, features }) => {
    // Calculate dynamic stats from data
    const totalContracts = contracts.length;
    const totalMilestones = milestones.length;
    const totalWeeks = 32; // From roadmap
    const totalFeatures = features.reduce((total, category) => total + category.features.length, 0);

    const stats = [
        { number: totalContracts.toString(), label: 'Core Contracts' },
        { number: totalWeeks.toString(), label: 'Week Roadmap' },
        { number: totalMilestones.toString(), label: 'Major Milestones' },
        { number: totalFeatures.toString(), label: 'Platform Features' },
    ];

    return (
        <div
            className="rounded-2xl p-8 mb-10"
            style={{ backgroundColor: '#F5F7FA' }}
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div
                            className="text-3xl font-extrabold mb-2"
                            style={{ color: '#5546FF' }}
                        >
                            {stat.number}
                        </div>
                        <div
                            className="text-sm font-semibold uppercase tracking-wide"
                            style={{ color: '#8C8C8C' }}
                        >
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};