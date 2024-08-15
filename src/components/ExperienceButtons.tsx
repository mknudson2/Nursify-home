import { useState } from 'react';

import '../styles/ExperienceButtons.css'

interface ExperienceButtonsProps {
    onChange: (category: string) => void;
}

const ExperienceButtons: React.FC<ExperienceButtonsProps> = ({ onChange }) => {
    const [activeCategory, setActiveCategory] = useState<string>('University Administrations');

    const handleButtonClick = (category: string) => {
        setActiveCategory(category);
        onChange(category);
    };

    return (
        <div className="exp-buttons-container">
            <button
                className={`exp-btn ${activeCategory === 'Students & Clinicians' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Students & Clinicians')}
            >
                Students & Clinicians
            </button>
            <button
                className={`exp-btn ${activeCategory === 'University Administrations' ? 'active' : ''}`}
                onClick={() => handleButtonClick('University Administrations')}
            >
                University Administrators
            </button>
            <button
                className={`exp-btn ${activeCategory === 'Employers' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Employers')}
            >
                Healthcare Facilities
            </button>
        </div>
    );
};

export default ExperienceButtons;
