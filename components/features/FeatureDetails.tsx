import React, { useState } from 'react';
import { featureCategories } from '@/data/features';

export const FeatureDetails: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(featureCategories[0]?.id || '');
    const [expandedCriteria, setExpandedCriteria] = useState<string[]>([]);
    const [expandedRequirements, setExpandedRequirements] = useState<string[]>([]);

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'must-have': return '#FF4D4F';
            case 'should-have': return '#F7931A';
            case 'could-have': return '#5546FF';
            case 'wont-have': return '#8C8C8C';
            default: return '#8C8C8C';
        }
    };

    const toggleCriteria = (featureId: string) => {
        setExpandedCriteria(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    const toggleRequirements = (featureId: string) => {
        setExpandedRequirements(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    const activeFeatureCategory = featureCategories.find(cat => cat.id === activeCategory);

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2
                    className="text-3xl font-extrabold mb-3"
                    style={{
                        background: 'linear-gradient(135deg, #F7931A, #5546FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Platform Features Overview
                </h2>
                <p className="text-lg" style={{ color: '#8C8C8C' }}>
                    Comprehensive feature breakdown with user stories and technical requirements
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
                {featureCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                        style={{
                            backgroundColor: activeCategory === category.id
                                ? getPriorityColor(category.priority)
                                : 'rgba(0, 0, 0, 0.05)',
                            color: activeCategory === category.id ? 'white' : '#8C8C8C'
                        }}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Active Category Details */}
            {activeFeatureCategory && (
                <div
                    className="p-6 rounded-2xl border-2"
                    style={{
                        backgroundColor: `${getPriorityColor(activeFeatureCategory.priority)}10`,
                        borderColor: `${getPriorityColor(activeFeatureCategory.priority)}30`
                    }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold" style={{ color: '#262626' }}>
                            {activeFeatureCategory.title}
                        </h3>
                        <span
                            className="px-3 py-1 rounded-full text-xs font-semibold uppercase"
                            style={{
                                backgroundColor: getPriorityColor(activeFeatureCategory.priority),
                                color: 'white'
                            }}
                        >
                            {activeFeatureCategory.priority.replace('-', ' ')}
                        </span>
                    </div>

                    <p className="text-sm mb-6 leading-relaxed" style={{ color: '#8C8C8C' }}>
                        {activeFeatureCategory.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {activeFeatureCategory.features.map((feature) => {
                            const isCriteriaExpanded = expandedCriteria.includes(feature.id);
                            const isRequirementsExpanded = expandedRequirements.includes(feature.id);
                            const hasMoreCriteria = feature.acceptanceCriteria.length > 2;
                            const hasMoreRequirements = feature.technicalRequirements.length > 3;

                            return (
                                <div
                                    key={feature.id}
                                    className="p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                                    }}
                                >
                                    <h4 className="text-lg font-bold mb-2" style={{ color: '#262626' }}>
                                        {feature.title}
                                    </h4>

                                    <p className="text-sm mb-3 leading-relaxed" style={{ color: '#8C8C8C' }}>
                                        {feature.description}
                                    </p>

                                    {/* User Story */}
                                    <div className="mb-3">
                                        <h5 className="font-semibold text-sm mb-1" style={{ color: '#262626' }}>
                                            User Story:
                                        </h5>
                                        <p
                                            className="text-xs italic p-2 rounded"
                                            style={{
                                                backgroundColor: 'rgba(85, 70, 255, 0.1)',
                                                color: '#5546FF'
                                            }}
                                        >
                                            {feature.userStory}
                                        </p>
                                    </div>

                                    {/* Acceptance Criteria */}
                                    <div className="mb-3">
                                        <h5 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                            Acceptance Criteria:
                                        </h5>
                                        <ul className="space-y-1">
                                            {(isCriteriaExpanded ? feature.acceptanceCriteria : feature.acceptanceCriteria.slice(0, 2))
                                                .map((criteria, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-xs pl-4 relative"
                                                        style={{ color: '#8C8C8C' }}
                                                    >
                                                        <span
                                                            className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                                                            style={{ backgroundColor: '#00A478' }}
                                                        />
                                                        {criteria}
                                                    </li>
                                                ))}
                                        </ul>
                                        {hasMoreCriteria && (
                                            <button
                                                onClick={() => toggleCriteria(feature.id)}
                                                className="text-xs mt-2 hover:underline"
                                                style={{ color: '#5546FF' }}
                                            >
                                                {isCriteriaExpanded
                                                    ? '↑ Show less'
                                                    : `+ ${feature.acceptanceCriteria.length - 2} more criteria...`
                                                }
                                            </button>
                                        )}
                                    </div>

                                    {/* Technical Requirements */}
                                    <div>
                                        <h5 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                            Technical Requirements:
                                        </h5>
                                        <div className="flex flex-wrap gap-1">
                                            {(isRequirementsExpanded ? feature.technicalRequirements : feature.technicalRequirements.slice(0, 3))
                                                .map((requirement, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 rounded-md text-xs"
                                                        style={{
                                                            backgroundColor: 'rgba(247, 147, 26, 0.1)',
                                                            color: '#F7931A'
                                                        }}
                                                    >
                                                        {requirement}
                                                    </span>
                                                ))}
                                        </div>
                                        {hasMoreRequirements && (
                                            <button
                                                onClick={() => toggleRequirements(feature.id)}
                                                className="text-xs mt-2 hover:underline"
                                                style={{ color: '#5546FF' }}
                                            >
                                                {isRequirementsExpanded
                                                    ? '↑ Show less'
                                                    : `+ ${feature.technicalRequirements.length - 3} more...`
                                                }
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
