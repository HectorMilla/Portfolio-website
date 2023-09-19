"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SQL</li>
                <li>Bash</li>
                <li>Java</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ul>
                <li>
                    B.S Cybersecurity and Information Assurance
                </li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>CompTIA Security+</li>
                <li>CompTIA Network+</li>
                <li>CompTIA A+</li>
                <li>CompTIA Project+</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white md-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>s a Software Engineer, I am driven by a passion for crafting elegant and
                        efficient solutions to complex technical challenges. With a solid foundation
                        in computer science, a knack for innovation, and a commitment to delivering high-quality software,
                        I have dedicated myself to advancing the frontiers of technology.</p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection