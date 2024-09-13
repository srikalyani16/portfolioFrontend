import React from "react";

const Leftsider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="mailto:srikalyanichowdary@gmail.com"> <i class="ri-mail-line text-gray-400"></i></a>
         
          <a href="https://www.instagram.com/srikalyanimanukonda?igsh=dDBxdXVmdjQ4M2Fh"><i class="ri-instagram-line text-gray-400"></i></a>
          <a href="https://www.linkedin.com/in/sri-kalyani-manukonda-bb26ba241/?trk=public_profile_browsemap&originalSubdomain=in"><i class="ri-linkedin-box-fill text-gray-400"></i></a>
          <a href="https://github.com/srikalyani16"><i class="ri-github-fill text-gray-400"></i></a>
        </div>

        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
};

export default Leftsider;
