import React, { useState } from 'react';
import { Task } from '@/data/milestones';

interface TaskCardProps {
  task: Task;
  accentColor: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, accentColor }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="p-4 rounded-xl transition-all duration-300"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <div>
            <h6 className="font-semibold" style={{ color: '#262626' }}>
              {task.title}
            </h6>
            <p className="text-xs" style={{ color: '#8C8C8C' }}>
              {task.estimatedHours}h estimated
              {task.dependencies.length > 0 && ` • Depends on: ${task.dependencies.join(', ')}`}
            </p>
          </div>
        </div>
        <button
          className="text-xs px-2 py-1 rounded transition-colors"
          style={{
            backgroundColor: showDetails ? accentColor : 'rgba(0, 0, 0, 0.1)',
            color: showDetails ? 'white' : '#8C8C8C'
          }}
        >
          {showDetails ? 'Hide' : 'Details'}
        </button>
      </div>

      {showDetails && (
        <div className="mt-4 space-y-3">
          <p className="text-sm" style={{ color: '#8C8C8C' }}>
            {task.description}
          </p>

          <div>
            <h6 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
              Deliverables:
            </h6>
            <ul className="space-y-1">
              {task.deliverables.map((deliverable, index) => (
                <li
                  key={index}
                  className="text-xs pl-4 relative"
                  style={{ color: '#8C8C8C' }}
                >
                  <span
                    className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-sm mb-2" style={{ color: '#262626' }}>
              Acceptance Criteria:
            </h6>
            <ul className="space-y-1">
              {task.acceptanceCriteria.map((criteria, index) => (
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
          </div>
        </div>
      )}
    </div>
  );
};