// src/components/Sections.js

import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import sectionsData from './sectionsData';
import SectionCard from './SectionCard';
import SectionDetail from './SectionDetail';
import './Sections.css';

const Sections = () => {
    const [selectedSection, setSelectedSection] = useState(null);

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const handleBackClick = () => {
        setSelectedSection(null);
    };

    return (
        <div className="mt-5 text-center">
            <h1>Mental Health Resources</h1>
            <p>Select a section to learn more about it.</p>

            {/* Display Section Cards or Section Detail */}
            {selectedSection ? (
                <SectionDetail 
                    data={sectionsData[selectedSection]} 
                    onBack={handleBackClick} 
                />
            ) : (
                <Row className="mt-4">
                    {Object.keys(sectionsData).map((section) => (
                        <SectionCard 
                            key={section} 
                            section={section} 
                            data={sectionsData[section]} 
                            onClick={handleSectionClick} 
                        />
                    ))}
                </Row>
            )}
        </div>
    );
};

export default Sections;
