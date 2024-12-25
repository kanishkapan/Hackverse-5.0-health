import React from 'react';

const Footerai = () => {
  return (
    <div>
      <div>
        <h4 className="text-lg font-semibold">Newsletter</h4>
        <form className="mt-2 flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-black"
          />
          <button className="bg-blue-800 px-4 py-2 rounded-r-lg text-white">
            &#8594;
          </button>
        </form>
      </div>
      <div className="mt-6 text-center text-sm border-t border-white pt-4">
        <p>&copy; 2021 Hospital's name. All Rights Reserved by PNTEC-LTD</p>
      </div>
    </div>
  );
};

export default Footerai;
