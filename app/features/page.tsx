"use client"

import { FeatureDetails } from '@/components/features/FeatureDetails';
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: '#F5F7FA' }}>
            <div className="max-w-7xl mx-auto">
                <FeatureDetails />
            </div>
        </div>
    );
}

export default page