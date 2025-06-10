'use client';

import React, { useState } from 'react';
import { FeatureSection } from '../features/FeatureSection';
import { contracts } from '@/data/contracts';
import { featureCategories } from '@/data/features';
import { milestones } from '@/data/milestones';
import { StatsBar } from '../stats/StatsBar';
import { RoadmapModal } from '../roadmap/RoadmapModal';
import { VisionModal } from '../vision/VisionModal';

export const PresentationSlide: React.FC = () => {
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showVision, setShowVision] = useState(false);

  // Extract core features from data
  const coreFeatures = featureCategories
    .find(cat => cat.id === 'core-platform')?.features
    .map(feature => feature.title) || [];

  const yieldFeatures = featureCategories
    .find(cat => cat.id === 'yield-strategies')?.features
    .map(feature => feature.title) || [];

  const automationFeatures = featureCategories
    .find(cat => cat.id === 'automation')?.features
    .map(feature => feature.title) || [];

  const riskFeatures = featureCategories
    .find(cat => cat.id === 'risk-management')?.features
    .map(feature => feature.title) || [];

  const analyticsFeatures = featureCategories
    .find(cat => cat.id === 'analytics')?.features
    .map(feature => feature.title) || [];

  // Combine features for display
  const allCoreFeatures = [
    ...coreFeatures,
    ...yieldFeatures,
    ...automationFeatures.slice(0, 1), // Take first automation feature
    ...riskFeatures,
  ];

  // Extract contract names for architecture section
  const architectureFeatures = contracts.map(contract => contract.name);

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#141E27' }}>
      <div
        className="w-full max-w-6xl rounded-3xl p-10 relative overflow-hidden"
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3)'
        }}
      >

        {/* Top Border */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{
            background: 'linear-gradient(90deg, #F7931A, #5546FF, #141E27)'
          }}
        />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              top: '10%',
              right: '10%',
              backgroundColor: '#F7931A',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
          <div
            className="absolute w-20 h-20 rounded-full opacity-10"
            style={{
              bottom: '15%',
              left: '8%',
              backgroundColor: '#5546FF',
              animation: 'float 6s ease-in-out infinite -4s'
            }}
          />
          <div
            className="absolute w-16 h-16 rounded-full opacity-10"
            style={{
              top: '30%',
              left: '5%',
              backgroundColor: '#141E27',
              animation: 'float 6s ease-in-out infinite -2s'
            }}
          />
        </div>

        {/* Header */}
        <header className="text-center mb-8 pt-6">
          <h1
            className="text-4xl font-extrabold mb-3"
            style={{
              background: 'linear-gradient(135deg, #5546FF, #141E27)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Yield Nexus
          </h1>
          <p className="text-lg mb-3" style={{ color: '#8C8C8C' }}>
            Unified DeFi Platform for Bitcoin-Based Yield Strategies
          </p>
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#F7931A' }}
          >
            Built on Stacks • Powered by Bitcoin
          </p>
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs" style={{ color: '#8C8C8C' }}>Phase 1 of</span>
            <span
              className="px-2 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: 'rgba(85, 70, 255, 0.1)', color: '#5546FF' }}
            >
              Yield Nexus Platform
            </span>
          </div>
        </header>

        {/* Multi-Chain Vision Section */}
        <div className="mb-6">
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: 'rgba(85, 70, 255, 0.05)',
              borderColor: 'rgba(85, 70, 255, 0.2)'
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: '#262626' }}>
                  🌐 Yield Nexus Platform Vision
                </h3>
                <p className="text-xs" style={{ color: '#8C8C8C' }}>
                  Yield Nexus is the foundation for multi-chain expansion
                </p>
              </div>
              <button
                onClick={() => setShowVision(true)}
                className="px-3 py-1 rounded-lg text-xs font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: '#5546FF',
                  color: 'white'
                }}
              >
                View Vision
              </button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs" style={{ color: '#8C8C8C' }}>Future Phases:</span>
              {['Ethereum', 'Solana', 'Polygon', 'Arbitrum'].map((chain, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: 'rgba(140, 140, 140, 0.1)',
                    color: '#8C8C8C'
                  }}
                >
                  {chain}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <FeatureSection
            title="Platform Features"
            features={allCoreFeatures}
            sectionType="features"
          />
          <FeatureSection
            title="Smart Contract Architecture"
            features={architectureFeatures}
            sectionType="architecture"
          />
        </div>

        {/* Stats Bar */}
        <StatsBar
          contracts={contracts}
          milestones={milestones}
          features={featureCategories}
        />

        {/* CTA */}
        <div className="flex justify-center gap-4 pb-6">
          <button
            onClick={() => setShowRoadmap(true)}
            className="text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 border-none cursor-pointer"
            style={{
              backgroundColor: '#F7931A',
              boxShadow: '0 10px 30px rgba(247, 147, 26, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(247, 147, 26, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(247, 147, 26, 0.3)';
            }}
          >
            Development Roadmap
          </button>

          <button
            onClick={() => setShowVision(true)}
            className="text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 border-none cursor-pointer"
            style={{
              backgroundColor: '#5546FF',
              boxShadow: '0 10px 30px rgba(85, 70, 255, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(85, 70, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(85, 70, 255, 0.3)';
            }}
          >
            Platform Vision
          </button>
        </div>
      </div>

      {/* Roadmap Modal */}
      <RoadmapModal
        isOpen={showRoadmap}
        onClose={() => setShowRoadmap(false)}
      />

      {/* Vision Modal */}
      <VisionModal
        isOpen={showVision}
        onClose={() => setShowVision(false)}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
      `}</style>
    </div>
  );
};
