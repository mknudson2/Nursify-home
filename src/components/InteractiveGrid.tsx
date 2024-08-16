import { useState, useEffect } from 'react';

import '../styles/InteractiveGrid.css';

interface Item {
    id: number;
    text: string;
    image: string;
    description: string;
}

const universityItems: Item[] = [
    { id: 1, text: 'Exceed Expectations', image: '/1.jpg', description: "Students come to your esteemed University and Nursing program to learn, prepare & pass the NCLEX®, and prepare for their first job. These days, that's the bare minimum. By partnering with Nursify Education, your current & future students won't just remember their education with you, but celebrate it." },
    { id: 2, text: 'Save Your Students', image: '/2.jpg', description: "Every student invests their hard-earned, and often borrowed, money in you in exchange for the best education possible. Nurses want to be confident, knowledgeable, and set up for success, not just for their first job, but their entire career. Nursify Education has identified crucial skills nurses must know to avoid workplace injury and burnout." },
    { id: 3, text: 'Flexible Financing', image: '/3.jpg', description: "Nursify Education understands budget constraints, the growing number of competitive nursing programs, and the financial red tape nursing programs and administrators have to deal with to run a successful program. This is exactly why Nursify Education provides cost-effective, fiscally responsible, value-packed offers that are custom to your needs and economic capacities." },
    { id: 4, text: 'Fortify Their Future', image: '/4.jpg', description: "When you partner with Nursify Education, you're safeguarding your students for life. The transfer and mobility skills alone protect each of your students from injuring themselves or their patients while teaching them the most efficient and safe ways to mobilize all of their patients. They will learn how to confidently move even the most complex patients while maintaining optimal body mechanics." },
];

const employerItems: Item[] = [
    { id: 1, text: 'Improve Patient Satisfaction', image: '/exceed.png', description: "Patients don't always have a choice to come to you, but your healthcare professionals have a choice in how to best help them. Confident, compassionate, and person-centered care are the cornerstone for patient satisfaction. These are deep-seated in everything Nursify Education does. We can help you and your teams be leaders in, and champions of, patient satisfaction!" },
    { id: 2, text: 'Reduce Nurse Burnout', image: '/3.jpg', description: "It can take as little as a few months and as much as a lifetime to become burned out. It can then take years to recover from burnout. Myriad factors lead to nurses burning out, but 3 of the top 10 are: 1) Physical Demands 2) Injury 3) Lack of Support. We have found ways to address each of these issues in our 9-module certification course. This costs an arm and a leg ONLY if you choose NOT to partner with us." },
    { id: 3, text: 'Reduce Staff Turnover', image: '/2.jpg', description: "Caring for others doesn't stop with your patients; you know how important it is to value your employees. With the nursing shortage expected to worsen through at least 2030, championing them has to go beyond words of appreciation and small celebrations of milestones. To keep your best; you must invest. By partnering with Nursify Education, the payoff is enormous and the investment is minimal. What they learn from us will speak volumes for how much you care for their well-being and treasure them for being them." },
    { id: 4, text: 'Reduce Workplace Injury', image: '/4.jpg', description: "Nursify Education was constructed to empower, educate, and motivate nurses primarily to reduce workplace injury and burnout. It is the core of what we achieve with everyone who gets certified in our 9-module Transfer & Mobility course. This is the only evidence-based course of its kind, and teaches your nurses skills they never learned in school, unless the school is one of our cherished partners." }
];

const studentItems: Item[] = [
    { id: 1, text: 'Increase Efficiency', image: '/1.jpg', description: 'Gain valuable time through our proven techniques. Move patients safely without having to wait for a second, or third person to help. Get time added back into your day for all the other important work you do. Your time is too valuable to waste waiting for others to help when we can teach you to do this on your own.' },
    { id: 2, text: 'Increase Control', image: '/4.jpg', description: "With simple and unique moves like the no-lift transfer we will save your back while reducing risk for any type of injury; for you as well as your patient. You only get ONE body and if you get hurt, you're either putting yourself at greater risk of bigger injury or limiting your ability to help all your current and future patients." },
    { id: 3, text: 'Reduce Injury', image: '/2.jpg', description: "Nurses can have an overwhelming amount of responsibilities. We will teach you how to protect yourself physically and mentally from the increasing demands you have on a daily basis. The newest, hardest and most talented nurses are the most vulnerable to burnout. Let us help you avoid it!" },
    { id: 4, text: 'Reduce Burnout', image: '/3.jpg', description: "Any given day for a nurse can be full of stress and feel out of control. Call lights, alarms, demanding patients, supervisors, charting, and so much more adds to the chaos that can be your life. Our techniques will support your growth, help you feel like a champion and offer ongoing support to unlock your abilities to gain confidence and control." },
];

interface InteractiveGridProps {
    category: string;
}

const InteractiveGrid: React.FC<InteractiveGridProps> = ({ category }) => {
    const [items, setItems] = useState<Item[]>(universityItems);
    const [selectedItem, setSelectedItem] = useState<number>(1);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        switch (category) {
            case 'University Administrations':
                setItems(universityItems);
                break;
            case 'Employers':
                setItems(employerItems);
                break;
            case 'Students & Clinicians':
                setItems(studentItems);
                break;
            default:
                setItems(universityItems);
                break;
        }
    }, [category]);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setSelectedItem(prevItem => {
                    const currentIndex = items.findIndex(item => item.id === prevItem);
                    return items[(currentIndex + 1) % items.length].id;
                });
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isHovered, items]);

    const handleItemClick = (id: number) => {
        setSelectedItem(id);
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 10000);
    };

    return (
        <div className="interactive-grid">
            <div className="left-column">
                <h3>Why <span className="highlight">Nursify?</span></h3>
                <ul>
                    {items.map(item => (
                        <li
                            key={item.id}
                            className={item.id === selectedItem ? 'active' : ''}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => handleItemClick(item.id)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right-column">
                {items.map(item => (
                    <div key={item.id} className={`image-container ${item.id === selectedItem ? 'active' : ''}`} style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="overlay">{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveGrid;
