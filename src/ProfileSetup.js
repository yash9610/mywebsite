import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (selectedImage) {
      setSelectedImage(null); // Deselect the image if it's already selected
    } else {
      fileInputRef.current.click(); // Open file input dialog to choose image
    }
  };

  const handleNextClick = () => {
    // Redirect to OptionCard page
    navigate('/option-card', { state: { selectedImage } });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
        <h1 className="text-3xl font-bold mb-7 text-dribbble">Welcome! Let's create your profile</h1>
        <p className="text-gray-600 mb-7">Let others get to know you better! You can do these later</p>
        <h2 className="text-2xl font-bold mb-5 text-dribbble">Add an Avatar</h2>
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 mb-4">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Avatar"
                className="rounded-full w-full h-full object-cover cursor-pointer"
                onClick={handleImageClick}
              />
            ) : (
              <div className="absolute inset-0 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 512 512"><circle cx="256" cy="272" r="64" fill="currentColor"/><path fill="currentColor" d="M456 144h-83c-3 0-6.72-1.94-9.62-5L336.1 96.2C325 80 320 80 302 80h-92c-18 0-24 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 0 0-8-8H92a8 8 0 0 0-8 8v16H56a24 24 0 0 0-24 24v240a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V168a24 24 0 0 0-24-24M260.51 367.9a96 96 0 1 1 91.39-91.39a96.11 96.11 0 0 1-91.39 91.39"/></svg>
              </div>
            )}
          </div>
          <button
            onClick={handleImageClick}
            className="w-full bg-white-600 text-black font-semibold py-3 rounded-md hover:bg-white-700 transition-colors duration-300 cursor-pointer"
          >
            {selectedImage ? 'Remove image' : 'Choose image'}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <p className="text-gray-400 text-sm">Or choose one of our defaults</p>
        </div>
        <h3 className="text-black-600">Add your location</h3>
        <div className="flex flex-col items-center mb-8">
          <input
            type="text"
            placeholder="Enter a location"
            className="border border-gray-300 rounded-md py-2 px-2 mb-1 focus:outline-none focus:ring-2 focus:ring-dribbble"
          />
        </div>
        <button onClick={handleNextClick} className="bg-dribbble text-red py-2 px-4 rounded-md hover:bg-dribbble-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
