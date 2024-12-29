"use client"

import React, { useState } from 'react'
import TaskForm from './create/TaskForm'
import TaskListing from './create/TaskListing'
import TaskTitle from './create/TaskTitle'

const Task = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal open state

  return (
    <>
    <TaskTitle setIsOpen={setIsOpen} />
      <TaskListing />
      <TaskForm isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Task