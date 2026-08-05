import { useState } from "react"

const DEFAULT_CATEGORY = "clothing";

export function useCategoryToast() {

  const [isOpen, setIsOpen] = useState(true); // true on mount = shows every page load
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(defaultCategory);

  const openToast = () => setIsOpen(true);
  const closeToast = () => setIsOpen(false);

  const selectCategory = (key) => {
    setSelectedCategoryKey(key);
    setIsOpen(false);
  }

  return { isOpen, selectedCategoryKey, openToast, closeToast, selectCategory }
  
}