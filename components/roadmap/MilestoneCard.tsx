import React, { useState } from 'react';
import { Milestone } from '@/data/milestones';
import { TaskCard } from './TaskCard';

interface MilestoneCardProps {
  milestone: Milestone;
  isCritical: boolean;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone, isCritical }) => {
  const [expanded, setExpanded] = useState(false);

  const cardStyle = {
    backgroundColor: isCritical ? 'rgba(247, 147, 26, 0.05)' : 'rgba(85, 70, 255, 0.05)',
    borderColor: isCritical ? 'rgba(247, 147, 26, 0.2)' : 'rgba(85, 70, 255, 0.2)',
  };

  const accentColor = isCritical ? '#F7931A' : '#5546FF';
  const totalHours = milestone.tasks.reduce((total, task) => total + task.estimatedHours, 0);

  return (
    <div
      className="border-2 rounded-2xl transition-all duration-300"
      style={cardStyle}
    >
      {/* Milestone Header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: accentColor }}
            >
              {milestone.id.replace('M', '')}
            </div>
            <div>
              <h4 className="text-xl font-bold" style={{ color: '#262626' }}>
                {milestone.title}
              </h4>
              <p className="text-sm" style={{ color: '#8C8C8C' }}>
                {milestone.duration} • {milestone.tasks.length} tasks • {totalHours}h estimated
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {isCritical && (
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(247, 147, 26, 0.1)', color: '#F7931A' }}
              >
                CRITICAL PATH
              </span>
            )}
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              ↓
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed" style={{ color: '#8C8C8C' }}>
          {milestone.description}
        </p>

        {/* Objectives */}
        <div className="mt-4">
          <h5 className="font-semibold mb-2" style={{ color: '#262626' }}>Key Objectives:</h5>
          <div className="flex flex-wrap gap-2">
            {milestone.objectives.map((objective, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: isCritical ? 'rgba(247, 147, 26, 0.1)' : 'rgba(85, 70, 255, 0.1)',
                  color: accentColor
                }}
              >
                {objective}
              </span>
            ))}
          </div>
        </div>

        {/* Blockers (if any) */}
        {milestone.blockers.length > 0 && (
          <div className="mt-4">
            <h5 className="font-semibold mb-2" style={{ color: '#FF4D4F' }}>⚠️ Potential Blockers:</h5>
            <div className="flex flex-wrap gap-2">
              {milestone.blockers.map((blocker, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{ backgroundColor: 'rgba(255, 77, 79, 0.1)', color: '#FF4D4F' }}
                >
                  {blocker}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Expanded Tasks */}
      {expanded && (
        <div className="px-6 pb-6">
          <div className="border-t pt-6" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
            <h5 className="font-semibold mb-4" style={{ color: '#262626' }}>
              Detailed Tasks:
            </h5>
            <div className="space-y-4">
              {milestone.tasks.map((task) => (
                <TaskCard key={task.id} task={task} accentColor={accentColor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};