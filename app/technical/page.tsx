"use client"

import { TechnicalSpecs } from '@/components/features/TechnicalSpecs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: '#F5F7FA' }}>
            <div className="max-w-7xl mx-auto">
                <TechnicalSpecs />
            </div>
        </div>
    );
}

export default page