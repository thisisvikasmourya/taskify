import * as Dialog from "@radix-ui/react-dialog";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Define the types for the task form state
interface Task {
  title: string;
  project: string;
  labels: string[];
  description: string;
  duedate: string;
  status: string;
  assignedTo: string;
  createdBy: string;
  priority: string;
}

interface Project {
  _id: string;
  name: string;
}

interface User {
  _id: string;
  name: string;
}

interface TaskProps{
  isOpen:any;
  setIsOpen:any
}

const TaskFormModal: React.FC<TaskProps> = ({isOpen,setIsOpen}) => {
  const [task, setTask] = useState<Task>({
    title: "",
    project: "",
    labels: [],
    description: "",
    duedate: "",
    status: "To Do",
    assignedTo: "",
    createdBy: "",
    priority: "High",
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   // Fetch projects and users to populate dropdowns
  //   axios.get("/api/projects").then((response) => setProjects(response.data));
  //   axios.get("/api/users").then((response) => setUsers(response.data));
  // }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleLabelsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      labels: value.split(","),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/tasks", task);
      alert("Task created successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Error creating task.");
    }
  };



    return (
      <div>
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <div />
          </Dialog.Trigger>
  
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
            <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-xl mx-auto px-4">
              <div className="bg-white rounded-md shadow-lg">
                <div className="flex items-center justify-between p-4 border-b">
                  <Dialog.Title className="text-lg font-medium text-gray-800 ">
                    Create Task
                  </Dialog.Title>
                  <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="space-y-2 p-4 mt-3 text-[15.5px] h-[500px] overflow-y-scroll	 leading-relaxed text-gray-500">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block text-gray-700">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
  
                    {/* Project */}
                    <div>
                      <label className="block text-gray-700">Project</label>
                      <select
                        name="project"
                        value={task.project}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select Project</option>
                        {projects.map((project) => (
                          <option key={project._id} value={project._id}>
                            {project.name}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    {/* Labels */}
                    <div>
                      <label className="block text-gray-700">Labels</label>
                      <input
                        type="text"
                        name="labels"
                        value={task.labels.join(",")}
                        onChange={handleLabelsChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter labels separated by commas"
                      />
                    </div>
  
                    {/* Description */}
                    <div>
                      <label className="block text-gray-700">Description</label>
                      <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
  
                    {/* Due Date */}
                    <div>
                      <label className="block text-gray-700">Due Date</label>
                      <input
                        type="date"
                        name="duedate"
                        value={task.duedate}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </div>
  
                    {/* Status */}
                    <div>
                      <label className="block text-gray-700">Status</label>
                      <select
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                    </div>
  
                    {/* Assigned To */}
                    <div>
                      <label className="block text-gray-700">Assigned To</label>
                      <select
                        name="assignedTo"
                        value={task.assignedTo}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select User</option>
                        {users.map((user) => (
                          <option key={user._id} value={user._id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    {/* Priority */}
                    <div>
                      <label className="block text-gray-700">Priority</label>
                      <select
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
  
                    {/* Submit Button */}
                    </form>
                </Dialog.Description>
                <div className="flex items-center gap-3 p-4 border-t">
                  <Dialog.Close>
                  
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Create Task
                      </button>
                    
                 
                    <button
                      className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </Dialog.Close>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    );
  };
  
export default TaskFormModal;
