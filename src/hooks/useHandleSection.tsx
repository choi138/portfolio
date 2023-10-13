import { useRef, useState } from 'react';

export const useHandleSection = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const handleNext = () => {
    console.log(currentSection);
    if (currentSection === sectionsRef.current.length - 1) return;
    setCurrentSection((prev) => prev + 1);
    sectionsRef.current[currentSection + 1].scrollIntoView({
      behavior: 'smooth',
    });
  };

  const hanlePrev = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
    sectionsRef.current[currentSection - 1].scrollIntoView({
      behavior: 'smooth',
    });
  };

  return { currentSection, sectionsRef, handleNext, hanlePrev };
};
