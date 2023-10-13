import { useRef, useState } from 'react';

export const useHandleSection = () => {
  const [page, setPage] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const handleNext = () => {
    if (currentSection === sectionsRef.current.length - 1) return;
    setPage((prev) => prev + 1);
    setCurrentSection((prev) => prev + 1);
    sectionsRef.current[currentSection + 1].scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    if (currentSection === 0) return;
    setPage((prev) => prev - 1);
    setCurrentSection((prev) => prev - 1);
    sectionsRef.current[currentSection - 1].scrollIntoView({
      behavior: 'smooth',
    });
  };

  return { page, currentSection, sectionsRef, handleNext, handlePrev };
};
