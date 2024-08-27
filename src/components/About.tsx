import { useEffect, useRef } from 'react';
import '../styles/About.css';
import { about, AboutInterface } from '../data/AboutData';

const About = () => {
    const aboutGroup1 = about.filter((data: AboutInterface) => data.id >= 1 && data.id <= 3);
    const aboutGroup2 = about.filter((data: AboutInterface) => data.id === 4);

    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible'); 
                    }
                });
            },
            { threshold: 0.1 }
        );

        const aboutCards = document.querySelectorAll('.about-card');

        aboutCards.forEach((card) => {
            observer.observe(card);
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            aboutCards.forEach((card) => {
                observer.unobserve(card);
            });
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <section className="about-flex" id="about">
            <div className="about-head">
                <h3>What is <span className="highlight">Nursify Education</span>?</h3>
            </div>
            <div className="about-body group1">
                {aboutGroup1.map((data: AboutInterface) => (
                    <div key={data.id} className="about-card">
                        <h4>{data.title}</h4>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
            {aboutGroup2 && (
                <div className="about-body group2">
                    <div className="about-card special-card">
                        <h4>{aboutGroup2[0].title}</h4>
                        <p>{aboutGroup2[0].description}</p>
                    </div>
                </div>
            )}
            <img ref={imageRef} className="about-image" src="/CertificationBadge.png" alt="Nursify Education" />
        </section>
    );
};

export default About;
