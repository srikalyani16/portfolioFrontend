import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId,event) => {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="p-5 bg-primary flex justify-between">
      <h1 className="text-secondary text-4xl sm:text-xl font-semibold">Kalyani</h1>
      <h1 className="text-white text-4xl font-semibold sm:text-xl"  onClick={(event) => scrollToSection('about', event)}>About</h1>
      <h1 className="text-secondary text-4xl font-semibold sm:text-xl" onClick={(event) => scrollToSection('projects',event)}>Projects</h1>
    </div>
  )
}

export default Header
