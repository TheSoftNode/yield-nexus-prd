import React, { useState } from 'react';

export const TutorialGuide: React.FC = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', title: 'Project Overview', icon: '🎯' },
        { id: 'navigation', title: 'Navigation Guide', icon: '🧭' },
        { id: 'features', title: 'Features Page', icon: '⚡' },
        { id: 'technical', title: 'Technical Specs', icon: '⚙️' },
        { id: 'roadmap', title: 'Roadmap Structure', icon: '🗺️' },
        { id: 'terminology', title: 'Key Terms', icon: '📖' },
        { id: 'development', title: 'Development Process', icon: '🚀' }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Project Overview
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    What is Yield Nexus?
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#8C8C8C' }}>
                                    Yield Nexus is a unified DeFi platform designed for Bitcoin-based yield strategies.
                                    Built on the Stacks blockchain, it enables Bitcoin holders to earn yield through various
                                    DeFi protocols while maintaining Bitcoin's security and decentralization.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Key Value Propositions
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        'Native Bitcoin yield generation without wrapping',
                                        'Automated strategy execution and portfolio management',
                                        'Multi-protocol aggregation for optimal returns',
                                        'Advanced risk management and monitoring',
                                        'One-click strategy deployment'
                                    ].map((item, index) => (
                                        <li key={index} className="text-sm pl-4 relative" style={{ color: '#8C8C8C' }}>
                                            <span
                                                className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: '#F7931A' }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Project Status
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="p-4 rounded-lg"
                                        style={{ backgroundColor: 'rgba(247, 147, 26, 0.1)' }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: '#F7931A' }}>
                                            Planning Phase
                                        </div>
                                        <div className="text-xs" style={{ color: '#8C8C8C' }}>
                                            Development planning and architecture design
                                        </div>
                                    </div>
                                    <div
                                        className="p-4 rounded-lg"
                                        style={{ backgroundColor: 'rgba(85, 70, 255, 0.1)' }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: '#5546FF' }}>
                                            32 Weeks
                                        </div>
                                        <div className="text-xs" style={{ color: '#8C8C8C' }}>
                                            Estimated development timeline
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'navigation':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Navigation Guide
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    tab: 'Overview',
                                    description: 'Main presentation with project highlights, stats, and roadmap access',
                                    features: [
                                        'Project introduction and value proposition',
                                        'Dynamic statistics from project data',
                                        'Core features and smart contract architecture',
                                        'Access to detailed roadmap modal'
                                    ]
                                },
                                {
                                    tab: 'Features',
                                    description: 'Detailed breakdown of platform features organized by categories',
                                    features: [
                                        'Feature categories with priority levels',
                                        'User stories and acceptance criteria',
                                        'Technical and design requirements',
                                        'Expandable details for comprehensive view'
                                    ]
                                },
                                {
                                    tab: 'Technical',
                                    description: 'Technical specifications for each system component',
                                    features: [
                                        'Smart contract, frontend, backend, and infrastructure specs',
                                        'Complexity levels and category classifications',
                                        'Detailed requirements and constraints',
                                        'Dependencies and integration points'
                                    ]
                                },
                                {
                                    tab: 'Roadmap',
                                    description: 'Comprehensive 32-week development timeline',
                                    features: [
                                        '8 major milestones with detailed tasks',
                                        'Critical path vs supporting milestones',
                                        'Task dependencies and acceptance criteria',
                                        'Estimated hours and deliverables'
                                    ]
                                }
                            ].map((section, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg border"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        borderColor: 'rgba(85, 70, 255, 0.2)'
                                    }}
                                >
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#5546FF' }}>
                                        {section.tab} Tab
                                    </h3>
                                    <p className="text-sm mb-3" style={{ color: '#8C8C8C' }}>
                                        {section.description}
                                    </p>
                                    <ul className="space-y-1">
                                        {section.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="text-xs pl-4 relative" style={{ color: '#8C8C8C' }}>
                                                <span
                                                    className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: '#00A478' }}
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'features':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Features Page Guide
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Feature Categories
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Core Platform Features', priority: 'Must-Have', color: '#FF4D4F', description: 'Essential features for basic platform functionality' },
                                        { name: 'Yield Strategy Features', priority: 'Must-Have', color: '#FF4D4F', description: 'Features for creating and managing yield strategies' },
                                        { name: 'Automation Features', priority: 'Should-Have', color: '#F7931A', description: 'Automated trading and portfolio management' },
                                        { name: 'Risk Management Features', priority: 'Must-Have', color: '#FF4D4F', description: 'Tools for monitoring and managing portfolio risks' },
                                        { name: 'Analytics & Reporting', priority: 'Should-Have', color: '#F7931A', description: 'Comprehensive analytics and reporting features' }
                                    ].map((category, index) => (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg flex items-center gap-3"
                                            style={{ backgroundColor: `${category.color}10` }}
                                        >
                                            <span
                                                className="px-2 py-1 rounded text-xs font-semibold"
                                                style={{ backgroundColor: category.color, color: 'white' }}
                                            >
                                                {category.priority}
                                            </span>
                                            <div>
                                                <div className="font-semibold text-sm" style={{ color: '#262626' }}>
                                                    {category.name}
                                                </div>
                                                <div className="text-xs" style={{ color: '#8C8C8C' }}>
                                                    {category.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    How to Use
                                </h3>
                                <ol className="space-y-2">
                                    {[
                                        'Click on category tabs to switch between feature groups',
                                        'Each feature shows title, description, and user story',
                                        'View acceptance criteria to understand completion requirements',
                                        'Check technical requirements for implementation details',
                                        'Use expand buttons to see all criteria and requirements'
                                    ].map((step, index) => (
                                        <li key={index} className="text-sm pl-6 relative" style={{ color: '#8C8C8C' }}>
                                            <span
                                                className="absolute left-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                                style={{ backgroundColor: '#5546FF' }}
                                            >
                                                {index + 1}
                                            </span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                );

            case 'technical':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Technical Specifications Guide
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Component Categories
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        { icon: '📋', name: 'Smart Contract', description: 'Clarity contracts on Stacks blockchain' },
                                        { icon: '💻', name: 'Frontend', description: 'Next.js application with TypeScript' },
                                        { icon: '⚙️', name: 'Backend', description: 'API services and data processing' },
                                        { icon: '🏗️', name: 'Infrastructure', description: 'Deployment and DevOps systems' }
                                    ].map((category, index) => (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg border"
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                borderColor: 'rgba(85, 70, 255, 0.2)'
                                            }}
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-lg">{category.icon}</span>
                                                <div className="font-semibold text-sm" style={{ color: '#262626' }}>
                                                    {category.name}
                                                </div>
                                            </div>
                                            <div className="text-xs" style={{ color: '#8C8C8C' }}>
                                                {category.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Complexity Levels
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        { level: 'Low', color: '#00A478', description: 'Simple implementation with minimal dependencies' },
                                        { level: 'Medium', color: '#FFB800', description: 'Moderate complexity with some technical challenges' },
                                        { level: 'High', color: '#FF4D4F', description: 'Complex implementation requiring advanced expertise' },
                                        { level: 'Very High', color: '#262626', description: 'Highly complex with significant technical risks' }
                                    ].map((complexity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <span
                                                className="px-2 py-1 rounded text-xs font-semibold"
                                                style={{ backgroundColor: `${complexity.color}20`, color: complexity.color }}
                                            >
                                                {complexity.level}
                                            </span>
                                            <span className="text-sm" style={{ color: '#8C8C8C' }}>
                                                {complexity.description}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'roadmap':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Roadmap Structure Guide
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Milestone Numbering System
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="px-2 py-1 rounded font-bold text-white"
                                            style={{ backgroundColor: '#F7931A' }}
                                        >
                                            M1
                                        </span>
                                        <span className="text-sm" style={{ color: '#8C8C8C' }}>
                                            Milestone 1 - Project Foundation & Architecture
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="px-2 py-1 rounded font-bold text-white"
                                            style={{ backgroundColor: '#5546FF' }}
                                        >
                                            M1-T1
                                        </span>
                                        <span className="text-sm" style={{ color: '#8C8C8C' }}>
                                            Milestone 1, Task 1 - Development Environment Setup
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Critical Path vs Supporting Milestones
                                </h3>
                                <div className="space-y-3">
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ backgroundColor: 'rgba(247, 147, 26, 0.1)' }}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: '#F7931A' }}
                                            />
                                            <span className="font-semibold text-sm" style={{ color: '#262626' }}>
                                                Critical Path Milestones
                                            </span>
                                        </div>
                                        <p className="text-xs" style={{ color: '#8C8C8C' }}>
                                            Essential milestones that must be completed on time. Delays here affect the entire project timeline.
                                        </p>
                                    </div>
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ backgroundColor: 'rgba(85, 70, 255, 0.1)' }}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: '#5546FF' }}
                                            />
                                            <span className="font-semibold text-sm" style={{ color: '#262626' }}>
                                                Supporting Milestones
                                            </span>
                                        </div>
                                        <p className="text-xs" style={{ color: '#8C8C8C' }}>
                                            Important but can run in parallel with critical path items. Some flexibility in timing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Task Information
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        'Estimated Hours: Time needed for completion',
                                        'Dependencies: Tasks that must be completed first',
                                        'Deliverables: Concrete outputs expected',
                                        'Acceptance Criteria: How to know task is complete'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full mt-2"
                                                style={{ backgroundColor: '#00A478' }}
                                            />
                                            <span className="text-sm" style={{ color: '#8C8C8C' }}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'terminology':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Key Terms & Definitions
                        </h2>

                        <div className="space-y-4">
                            {[
                                { term: 'sBTC', definition: 'Synthetic Bitcoin - a Bitcoin-backed asset on the Stacks blockchain that maintains 1:1 peg with Bitcoin' },
                                { term: 'Stacks', definition: 'A blockchain that enables smart contracts and decentralized applications for Bitcoin' },
                                { term: 'Yield Strategy', definition: 'A method to generate returns on cryptocurrency holdings through various DeFi protocols' },
                                { term: 'DeFi', definition: 'Decentralized Finance - financial services built on blockchain without traditional intermediaries' },
                                { term: 'Liquidity Provision', definition: 'Providing tokens to a liquidity pool to earn fees and rewards' },
                                { term: 'Automated Strategy Executor', definition: 'Smart contract that automatically executes predefined trading or yield strategies' },
                                { term: 'Risk Management', definition: 'Processes and tools to monitor, assess, and mitigate investment risks' },
                                { term: 'Portfolio Rebalancing', definition: 'Automatically adjusting asset allocation to maintain target percentages' },
                                { term: 'Yield Aggregation', definition: 'Combining yields from multiple sources to optimize returns' },
                                { term: 'Impermanent Loss', definition: 'Temporary loss of funds when providing liquidity due to price volatility' },
                                { term: 'MEV Protection', definition: 'Mechanisms to protect against Maximal Extractable Value attacks' },
                                { term: 'Clarity', definition: 'The smart contract programming language used on Stacks blockchain' }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-lg border"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        borderColor: 'rgba(85, 70, 255, 0.2)'
                                    }}
                                >
                                    <div className="font-semibold text-sm mb-1" style={{ color: '#5546FF' }}>
                                        {item.term}
                                    </div>
                                    <div className="text-sm" style={{ color: '#8C8C8C' }}>
                                        {item.definition}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'development':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            Development Process
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Development Phases
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { phase: 'Phase 1: Foundation', weeks: 'Weeks 1-8', focus: 'Environment setup, architecture design, core contracts' },
                                        { phase: 'Phase 2: Core Development', weeks: 'Weeks 9-16', focus: 'Frontend foundation, strategy implementation, automation' },
                                        { phase: 'Phase 3: Advanced Features', weeks: 'Weeks 17-24', focus: 'Analytics, optimization, mobile support' },
                                        { phase: 'Phase 4: Launch Preparation', weeks: 'Weeks 25-32', focus: 'Security audit, mainnet deployment, community features' }
                                    ].map((phase, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-lg"
                                            style={{ backgroundColor: `rgba(${index % 2 === 0 ? '247, 147, 26' : '85, 70, 255'}, 0.1)` }}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <span
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                                    style={{ backgroundColor: index % 2 === 0 ? '#F7931A' : '#5546FF' }}
                                                >
                                                    {index + 1}
                                                </span>
                                                <div>
                                                    <div className="font-semibold text-sm" style={{ color: '#262626' }}>
                                                        {phase.phase}
                                                    </div>
                                                    <div className="text-xs" style={{ color: '#8C8C8C' }}>
                                                        {phase.weeks}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-sm" style={{ color: '#8C8C8C' }}>
                                                {phase.focus}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: '#262626' }}>
                                    Best Practices
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        'Follow milestone dependencies to avoid blockers',
                                        'Complete acceptance criteria before marking tasks done',
                                        'Regular testing and security audits throughout development',
                                        'Maintain documentation for each completed component',
                                        'Use version control and proper branching strategies',
                                        'Conduct code reviews for all major changes',
                                        'Monitor project metrics and adjust timeline as needed'
                                    ].map((practice, index) => (
                                        <li key={index} className="text-sm pl-4 relative" style={{ color: '#8C8C8C' }}>
                                            <span
                                                className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: '#00A478' }}
                                            />
                                            {practice}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1
                    className="text-4xl font-bold mb-4"
                    style={{
                        background: 'linear-gradient(135deg, #F7931A, #5546FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Complete Guide & Tutorial
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive guide to understanding the Yield Nexus project, navigation,
                    features, and development process. This serves as both tutorial and project documentation.
                </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <h3 className="font-semibold mb-4" style={{ color: '#262626' }}>
                            Guide Sections
                        </h3>
                        <nav className="space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`
                                        w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                        ${activeSection === section.id
                                            ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                        }
                                    `}
                                >
                                    <span className="mr-2">{section.icon}</span>
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <div
                        className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
                    >
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};