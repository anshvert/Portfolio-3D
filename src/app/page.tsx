"use client"
import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import Hero from '@/components/sections/Hero';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
    ISectionCardData,
    backendCard,
    databaseCard,
    devopsCards,
    frontendCard,
    otherCards,
    projectCard,
    web3Cards,
} from '@/components/utils/Data';
import "../utils/css/styles.css"
import React, { useEffect, useState } from 'react';

interface skillSection {
    id: number
    title: string
    data: ISectionCardData[]
}

export default function Home() {
    const sections: skillSection[] = [
        { id: 0, title: "Frontend", data: frontendCard },
        { id: 1, title: "Backend", data: backendCard },
        { id: 2, title: "Database", data: databaseCard },
        { id: 3, title: "DevOps", data: devopsCards },
        { id: 4, title: "Web3", data: web3Cards },
    ];
    return (
        <>
            <Cover />
            <div className="flex flex-col gap-10 lg:px-10">
                {/* <Hero /> */}
                <ProjectCardSection title="Projects" data={projectCard} />
                {sections.map((section: skillSection, index: number) => (
                    <React.Fragment key={index}>
                        <CardSection
                            id={section.id}
                            title={section.title}
                            data={section.data}
                        />
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}
