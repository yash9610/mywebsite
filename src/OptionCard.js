import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OptionCard = ({ icon, title, isSelected, handleSelect, showDescription }) => (
  <div
    className={`flex flex-col items-center space-y-4 p-4 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ${
      isSelected ? 'bg-blue-100' : 'bg-white hover:bg-yellow-100'
    }`}
    onClick={handleSelect}
  >
    <div className="p-2 bg-blue-500 rounded-full">{icon}</div>
    <p className="text-gray-700 font-semibold text-center">{title}</p>
    {isSelected && showDescription && (
      <div className="text-gray-600 text-sm">
        {showDescription}
        {isSelected && (
          <div className="ml-auto mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    )}
  </div>
);

const OptionCardPage = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedImage = location.state && location.state.selectedImage;

  const handleSelect = (option) => {
    // If the clicked option is already selected, deselect it
    if (selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter((selected) => selected !== option));
    } else {
      // If the clicked option is not already selected, toggle its selection
      setSelectedOption([...selectedOption, option]);
    }
  };

  const handleFinishClick = () => {
    // Redirect to VerifyEmailPage page
    navigate('/verify-email', { state: { selectedImage } });
  };
  const handleReturnClick = () => {
    // Navigate back to ProfileSetup page
    navigate('/profile-setup');
  };

  const options = [
    {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          fillRule="evenodd"
          d="M3.672 3.172A.75.75 0 014.343 4h6.516a.75.75 0 01.658.435l4.154 7.521a.75.75 0 01-.53 1.115l-6.516-.002a.75.75 0 01-.658-.435L5.007 6.115A.75.75 0 015.537 5H3.672zM9.75 21a.75.75 0 01-.53-1.219l4.154-7.522a.75.75 0 01.659-.435h6.516a.75.75 0 01.671.939l-4.154 7.521a.75.75 0 01-.659.435H9.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "I'm a designer looking to share my work",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "I'm looking to hire a designer",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          fillRule="evenodd"
          d="M10.5 6a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM10.5 2a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "I'm looking for design inspiration",
    description: "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
  },

  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 px-4">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-3xl w-full">
          <h1 className="text-3xl font-bold mb-4 md:mb-8">What brings you to MGS?</h1>
          <p className="text-gray-600 mb-4">
            Select the options that best describe you. Don't worry, you can explore other options later.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {options.map((option, index) => (
              <OptionCard
                key={index}
                icon={option.icon}
                title={option.title}
                isSelected={selectedOption.includes(option.title)}
                handleSelect={() => handleSelect(option.title)}
                showDescription={selectedOption.includes(option.title) ? option.description : null}
              />
            ))}
          </div>
          <p className="text-gray-600 mt-4">Anything else? You can select multiple</p>
          <button onClick={handleFinishClick} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded mt-2 md:mt-4">
            Finish
          </button>
          <p onClick={handleReturnClick} className="text-gray-600 mt-2 md:mt-4 cursor-pointer">or Press RETURN</p>
        </div>
      </div>
    </div>
  );
};

export default OptionCardPage;
