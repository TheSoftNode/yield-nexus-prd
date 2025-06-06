import React, { useState } from 'react';
import { technicalSpecs } from '@/data/technicalSpecs';

export const TechnicalSpecs: React.FC = () => {
    const [expandedRequirements, setExpandedRequirements] = useState<string[]>([]);
    const [expandedDependencies, setExpandedDependencies] = useState<string[]>([]);

    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'low': return '#00A478';
            case 'medium': return '#FFB800';
            case 'high': return '#FF4D4F';
            case 'very-high': return '#262626';
            default: return '#8C8C8C';
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'smart-contract': return '📋';
            case 'frontend': return '💻';
            case 'backend': return '⚙️';
            case 'infrastructure': return '🏗️';
            default: return '📄';
        }
    };

    const toggleRequirements = (specId: string) => {
        setExpandedRequirements(prev =>
            prev.includes(specId)
                ? prev.filter(id => id !== specId)
                : [...prev, specId]
        );
    };

    const toggleDependencies = (specId: string) => {
        setExpandedDependencies(prev =>
            prev.includes(specId)
                ? prev.filter(id => id !== specId)
                : [...prev, specId]
        );
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2
                    className="text-3xl font-extrabold mb-3"
                    style={{
                        background: 'linear-gradient(135deg, #5546FF, #141E27)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Technical Specifications
                </h2>
                <p className="text-lg" style={{ color: '#8C8C8C' }}>
                    Detailed technical requirements and constraints for each system component
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {technicalSpecs.map((spec) => {
                    const isRequirementsExpanded = expandedRequirements.includes(spec.id);
                    const isDependenciesExpanded = expandedDependencies.includes(spec.id);
                    const hasMoreRequirements = spec.requirements.length > 4;
                    const hasMoreDependencies = spec.dependencies.length > 4;

                    return (
                        <div
                            key={spec.id}
                            className="p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderColor: 'rgba(85, 70, 255, 0.2)',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(85, 70, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{getCategoryIcon(spec.category)}</span>
                                <div>
                                    <h3 className="text-lg font-bold" style={{ color: '#262626' }}>
                                        {spec.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="px-2 py-1 rounded-full text-xs font-semibold capitalize"
                                            style={{
                                                backgroundColor: 'rgba(85, 70, 255, 0.1)',
                                                color: '#5546FF'
                                            }}
                                        >
                                            {spec.category.replace('-', ' ')}
                                        </span>
                                        <span
                                            className="px-2 py-1 rounded-full text-xs font-semibold capitalize"
                                            style={{
                                                backgroundColor: `${getComplexityColor(spec.estimatedComplexity)}20`,
                                                color: getComplexityColor(spec.estimatedComplexity)
                                            }}
                                        >
                                            {spec.estimatedComplexity.replace('-', ' ')} complexity
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#8C8C8C' }}>
                                {spec.description}
                            </p>

                            {/* Requirements */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                    Requirements:
                                </h4>
                                <ul className="space-y-1">
                                    {(isRequirementsExpanded ? spec.requirements : spec.requirements.slice(0, 4))
                                        .map((requirement, index) => (
                                            <li
                                                key={index}
                                                className="text-xs pl-4 relative"
                                                style={{ color: '#8C8C8C' }}
                                            >
                                                <span
                                                    className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                                                    style={{ backgroundColor: '#00A478' }}
                                                />
                                                {requirement}
                                            </li>
                                        ))}
                                </ul>
                                {hasMoreRequirements && (
                                    <button
                                        onClick={() => toggleRequirements(spec.id)}
                                        className="text-xs mt-2 hover:underline"
                                        style={{ color: '#5546FF' }}
                                    >
                                        {isRequirementsExpanded
                                            ? '↑ Show less'
                                            : `+ ${spec.requirements.length - 4} more requirements...`
                                        }
                                    </button>
                                )}
                            </div>

                            {/* Dependencies */}
                            {spec.dependencies.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
                                        Dependencies:
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {(isDependenciesExpanded ? spec.dependencies : spec.dependencies.slice(0, 4))
                                            .map((dependency, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 rounded-md text-xs"
                                                    style={{
                                                        backgroundColor: 'rgba(247, 147, 26, 0.1)',
                                                        color: '#F7931A'
                                                    }}
                                                >
                                                    {dependency}
                                                </span>
                                            ))}
                                    </div>
                                    {hasMoreDependencies && (
                                        <button
                                            onClick={() => toggleDependencies(spec.id)}
                                            className="text-xs mt-2 hover:underline"
                                            style={{ color: '#5546FF' }}
                                        >
                                            {isDependenciesExpanded
                                                ? '↑ Show less'
                                                : `+ ${spec.dependencies.length - 4} more dependencies...`
                                            }
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
