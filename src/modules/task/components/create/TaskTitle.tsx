import React from 'react'

interface TaskProps {
  setIsOpen: any
}

const TaskTitle: React.FC<TaskProps> = ({ setIsOpen }) => {
  return (
    <div className=' p-4'>
        <div className="flex justify-between items-center align-center">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Task
        </h3>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="w-32 py-2 shadow-sm rounded-md bg-indigo-600 text-white mt-4 flex items-center justify-center"
      >
        Create Task
      </button>
    </div>
      <p className="text-gray-600 mt-2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    </div>
  
  )
}

export default TaskTitle
