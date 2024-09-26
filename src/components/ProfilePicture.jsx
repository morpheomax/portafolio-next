"use client";


export const ProfilePicture = () => {


  return (
    <div  className="mt-8" transition-style="in:circle:bottom-right">
      <img 
        src="/assets/images/MaxSandoval.png" 
        alt="Max Sandoval" 
        className="w-32 h-32 rounded-full object-cover shadow-lg transition-opacity duration-500"
      />
    </div>
  );
};

