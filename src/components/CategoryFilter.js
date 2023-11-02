// import React from "react";

// function CategoryFilter({ categories, onFilter, selectedCategory }) {
//   const handleCategoryClick = category => {
//     onFilter(category);
//   };

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       <button key="All" onClick={() => handleCategoryClick("All")} className={selectedCategory === "All" ? "selected" : ""}>
//         All
//       </button>
//       {categories.map(category => (
//         <button key={category} onClick={() => handleCategoryClick(category)} className={selectedCategory === category ? "selected" : ""}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default CategoryFilter;
import React from "react";

function CategoryFilter({onButton,selectedButton,categories}) {



return (
<div className="categories">
<h5>Category filters</h5>
{/* render <button> elements for each category here */}
{categories.map((category,index)=>(
<button
className={onButton===category?'selected':''}
key={index}
onClick={()=>{selectedButton(category)}}

>
{category}
</button>
))}
</div>
);
}

export default CategoryFilter;
