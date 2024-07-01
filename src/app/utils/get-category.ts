import { FilterCategory } from "../types/filter-category";

export function getCategory(category: FilterCategory) {
    if(category === FilterCategory.beauty) return "beauty"
    if(category === FilterCategory.fragrances) return "fragrances"
    if(category === FilterCategory.groceries) return "groceries"
    if(category === FilterCategory.furniture) return "furniture"
}