import React from 'react'

const Header = () => {
  return (
    <div className="mx-auto px-4 md:px-8 border-b">
        <div className="flex justify-between py-4  ">
            <div>
                <h3 className="text-gray-800 text-2xl font-bold">
                    Taskify
                </h3>
            </div>
            <div className="flex gap-2">
                <a
                    href="javascript:void(0)"
                    className="block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                >
                    Create Task
                </a>
                <a
                    href="javascript:void(0)"
                    className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
                >
                  Profile
                </a>
            </div>
        </div>
    </div>
)

}

export default Header