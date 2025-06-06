"use client"

import { TutorialGuide } from '@/components/Guides/TutorialGuide';
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F5F7FA' }}>
            <TutorialGuide />
        </div>
    );
}

export default page