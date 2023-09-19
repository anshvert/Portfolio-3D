"use client"
import { FC, useEffect, useState } from 'react';
import Card from '../ui/Card';
import { ISectionCardData } from '../utils/Data';;

interface CardSectionProps {
    title: string;
    version?: string;
    data: ISectionCardData[];
    id: number
}

const CardSection: FC<CardSectionProps> = ({ id, title, version, data }) => {
    useEffect(() => {
        const handleDragging = (e: any) => {
            tabsBox.scrollLeft -= e.movementX*0.5;
            handleArrowIcons()
        };
        const handleArrowIcons = () => {
            const scrollVal: number = tabsBox.scrollLeft
            const maxScrollableWidth: number = tabsBox.scrollWidth - tabsBox.clientWidth
            arrowIcons.forEach((icon: Element, index: number) => {
                if (index % 2 == 0){
                    scrollVal > 50 ? icon.parentElement!.style.display = "flex" : icon.parentElement!.style.display = "none"
                } else {
                    scrollVal < maxScrollableWidth ? icon.parentElement!.style.display = "flex" : icon.parentElement!.style.display = "none"}
            })
        }
        const tabsBox = document.querySelectorAll(".tabs-box")[id]
        const arrowIcons = tabsBox?.querySelectorAll(".icon i")
        arrowIcons?.forEach((icon: Element) => {
            icon.addEventListener("click",() => {
                tabsBox.scrollLeft += icon.id == "left" ? -140: 140;
                handleArrowIcons()
            })
        })
        if (tabsBox) {
            tabsBox.addEventListener("mousemove", handleDragging);
            return () => {
                tabsBox.removeEventListener("mousemove", handleDragging);
            };
        }
    }, []);
    return (
        <>
            <div className="text-xl font-bold text-highlight">{title}</div> 
                <div className="wrapper">
                        <div className="tabs-box" key={title}>
                            {data.map((card: ISectionCardData, idx: number) => (
                                <div className='tab' key={idx}>
                                    <div className="icon"><i id="left">{"<<"}</i></div>
                                    <Card
                                        href={card.href}
                                        key={card.id}
                                        title={card.title}
                                        src={card.src}
                                    />
                                    <div className="icon"><i id="right">{">>"}</i></div>
                                </div>
                            ))}
                        </div>
                </div>
        </>
    );
};

export default CardSection;
