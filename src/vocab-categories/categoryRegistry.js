import { clothingCategory } from "./clothingCategory.js"
import { groceryCategory } from "./groceryCategory.js"
import { landAnimalsCategory } from "./landAnimalsCategory.js"

export const categoryRegistry = {

  clothing: { label: "Clothing/Accessory", data: clothingCategory },
  grocery: { label: "Grocery", data: groceryCategory },
  landAnimal: { label: "Land Animal", data: landAnimalsCategory },
}