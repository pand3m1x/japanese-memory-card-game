import { useState } from "react"

export function useCategoryToast() {

  const [ categorySelect, setCategorySelect ] = useState(0)
  const [ isOpen, setIsOpen ] = useState(0)
  const [ closeToast, setCloseToast ] = useState(0)
  

  return (
    <>
      <div className="category-toast-container">
        <div className="category-grid">
          <div className="category-card">
            <p>Clothing/Accessories</p>
          </div>
          <div className="category-card">
            <p>Land Animals</p>
          </div>
          <div className="category-card">
            <p>Grocery Category</p>
          </div>
        </div>
      </div>
    </>
  )
}