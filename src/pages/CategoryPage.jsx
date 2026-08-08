import { categoryRegistry } from "../vocab-categories/categoryRegistry.js";

export const CategoryPage = ({ onSelect }) => {

  return(
    <>
      <div className="category-toast-container">
        <div className="category-grid">

          {Object.entries(categoryRegistry).map(([ key, { label } ]) => (
            <div
              key={ key }
              className="category-card"
              onClick={ () => onSelect(key) } >
              <p>{ label }</p>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}