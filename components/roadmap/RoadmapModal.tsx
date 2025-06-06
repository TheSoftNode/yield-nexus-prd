import React, { useEffect } from 'react';
import { milestones } from '@/data/milestones';
import { MilestoneCard } from './MilestoneCard';

interface RoadmapModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Separate critical path and supporting milestones from data
    const criticalPathMilestones = milestones.filter(m => m.criticalPath);
    const supportingMilestones = milestones.filter(m => !m.criticalPath);

    // Calculate totals from data
    const totalTasks = milestones.reduce((total, m) => total + m.tasks.length, 0);
    const totalHours = milestones.reduce((total, m) =>
        total + m.tasks.reduce((taskTotal, t) => taskTotal + t.estimatedHours, 0), 0
    );

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-5 overflow-y-auto"
            style={{
                backgroundColor: 'rgba(20, 30, 39, 0.8)',
                backdropFilter: 'blur(10px)'
            }}
            onClick={onClose}
        >
            <div
                className="w-full max-w-7xl rounded-3xl p-12 relative max-h-[90vh] overflow-y-auto"
                style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 border-none cursor-pointer text-lg"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#8C8C8C',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(247, 147, 26, 0.1)';
                        e.currentTarget.style.color = '#F7931A';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.color = '#8C8C8C';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    ×
                </button>

                {/* Header */}
                <div className="text-center mb-10 pb-5" style={{ borderBottom: '2px solid rgba(247, 147, 26, 0.3)' }}>
                    <h2
                        className="text-4xl font-extrabold mb-3"
                        style={{
                            background: 'linear-gradient(135deg, #5546FF, #141E27)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Comprehensive Development Roadmap
                    </h2>
                    <p className="text-lg mb-4" style={{ color: '#8C8C8C' }}>
                        32-Week Implementation Plan with {milestones.length} Major Milestones
                    </p>
                    <div className="flex justify-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F7931A' }} />
                            <span className="text-sm" style={{ color: '#8C8C8C' }}>Critical Path</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5546FF' }} />
                            <span className="text-sm" style={{ color: '#8C8C8C' }}>Supporting Tasks</span>
                        </div>
                    </div>
                </div>

                {/* Critical Path Section */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#F7931A' }}>
                        🎯 Critical Path Milestones
                    </h3>
                    <div className="grid gap-6">
                        {criticalPathMilestones.map((milestone) => (
                            <MilestoneCard key={milestone.id} milestone={milestone} isCritical={true} />
                        ))}
                    </div>
                </div>

                {/* Supporting Milestones Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-6" style={{ color: '#5546FF' }}>
                        🔧 Supporting Milestones
                    </h3>
                    <div className="grid gap-6">
                        {supportingMilestones.map((milestone) => (
                            <MilestoneCard key={milestone.id} milestone={milestone} isCritical={false} />
                        ))}
                    </div>
                </div>

                {/* Project Summary */}
                <div className="mt-10 pt-8" style={{ borderTop: '2px solid rgba(85, 70, 255, 0.2)' }}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                            <div className="text-2xl font-bold mb-2" style={{ color: '#F7931A' }}>
                                {totalTasks}
                            </div>
                            <div className="text-sm" style={{ color: '#8C8C8C' }}>Total Tasks</div>
                        </div>
                        <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                            <div className="text-2xl font-bold mb-2" style={{ color: '#5546FF' }}>
                                {totalHours}
                            </div>
                            <div className="text-sm" style={{ color: '#8C8C8C' }}>Estimated Hours</div>
                        </div>
                        <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                            <div className="text-2xl font-bold mb-2" style={{ color: '#00A478' }}>
                                {criticalPathMilestones.length}
                            </div>
                            <div className="text-sm" style={{ color: '#8C8C8C' }}>Critical Milestones</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};