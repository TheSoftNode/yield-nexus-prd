import React from 'react';
import { FeatureItem } from './FeatureItem';

interface FeatureSectionProps {
    title: string;
    features: string[];
    sectionType: 'features' | 'architecture';
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    features,
    sectionType,
}) => {
    const isFeatures = sectionType === 'features';

    const sectionStyle = {
        backgroundColor: isFeatures ? 'rgba(247, 147, 26, 0.05)' : 'rgba(85, 70, 255, 0.05)',
        borderColor: isFeatures ? 'rgba(247, 147, 26, 0.2)' : 'rgba(85, 70, 255, 0.2)',
    };

    const iconColor = isFeatures ? '#F7931A' : '#5546FF';

    return (
        <div
            className="p-8 rounded-2xl border-2 transition-all duration-300"
            style={sectionStyle}
        >
            <h2
                className="text-xl font-bold mb-6 flex items-center gap-3"
                style={{ color: '#262626' }}
            >
                <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: iconColor }}
                />
                {title}
            </h2>

            <ul className="space-y-4">
                {features.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        text={feature}
                        iconColor={iconColor}
                    />
                ))}
            </ul>
        </div>
    );
};