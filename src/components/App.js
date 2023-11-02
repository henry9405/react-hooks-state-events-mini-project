// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";
// import { TASKS, CATEGORIES } from "../data";

// function App() {
//   const [tasks, setTasks] = useState(TASKS);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleFilter = category => {
//     setSelectedCategory(category);
//   };

//   const handleTaskFormSubmit = task => {
//     setTasks([...tasks, task]);
//   };

//   const filteredTasks = selectedCategory === "All"
//     ? tasks
//     : tasks.filter(task => task.category === selectedCategory);

//   const handleDeleteTask = id => {
//     const updatedTasks = tasks.filter(task => task.id !== id);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={[...CATEGORIES, "All"]} onFilter={handleFilter} selectedCategory={selectedCategory} />
//       <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
//       <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
//     </div>
//   );
// }

// export default App;
import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
const [task, setTask] = useState(TASKS)
const [categories] = useState(CATEGORIES)
const [selectedCategoryButton, setSelectedCategoryButton] = useState('All')



function addNewItemtoList(newItem){
setTask([...task,newItem])
}

function deletedItem(deletedItem){
setTask(task.filter((item)=>item.text !== deletedItem))
}


const itemDisplayed = task

.filter(
(item)=>{
if(selectedCategoryButton==='All') return true
return selectedCategoryButton === item.category
}
)




return (
<div className="App">
<h2>My tasks</h2>
<CategoryFilter
categories={categories}
onButton={selectedCategoryButton}
selectedButton={setSelectedCategoryButton}
/>
<NewTaskForm
onTaskFormSubmit={addNewItemtoList}
categories={categories}
/>
<TaskList
deletedItem={deletedItem}
tasks={itemDisplayed} />
</div>
);
}

export default App;