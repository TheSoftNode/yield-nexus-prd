import React from 'react';

interface FeatureItemProps {
    text: string;
    iconColor: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text, iconColor }) => {
    return (
        <li
            className="flex items-center p-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
        >
            <div
                className="w-4 h-4 rounded-full mr-4 flex-shrink-0"
                style={{ backgroundColor: iconColor }}
            />
            <span
                className="font-medium leading-relaxed"
                style={{ color: '#8C8C8C' }}
            >
                {text}
            </span>
        </li>
    );
};