"use client"
import { FC, useEffect } from 'react';
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
        const tabsBox = document.querySelectorAll(".tabs-box")[id]
        console.log(tabsBox)
        if (tabsBox) {
            const handleDragging = (e: any) => {
                tabsBox.scrollLeft -= e.movementX;
            };
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
                    <div className="icon"><i id="right" className="fa-solid fa-angle-right"></i></div>
                        <div className="tabs-box" key={title}>
                            {data.concat(data.concat(data)).map((card: ISectionCardData) => (
                                <div className='tab'>
                                    <Card
                                        href={card.href}
                                        key={card.id}
                                        title={card.title}
                                        src={card.src}
                                    />
                                </div>
                            ))}
                        </div>
                    <div className="icon"><i id="right" className="fa-solid fa-angle-right"></i></div>
                </div>
        </>

    );
};

export default CardSection;
