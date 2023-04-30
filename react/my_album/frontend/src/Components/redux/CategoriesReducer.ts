import { Category } from "../Modal/Category";

//1 reducer state
export class CategoriesState {
  public categories: Category[] = [];
}

//2 action types
export enum CategoriesActionType {
  addCategory = "addCategory",
  updateCategory = "updateCategory",
  deleteCategory = "deleteCategory",
  downloadCategory = "downloadCategory",
}

//3 action data structure
export interface CategoryAction {
  type: CategoriesActionType;
  payload?: any;
}

//4  functions->dispatch
export const addCategoryAction = (newCategory: Category): CategoryAction => {
  return { type: CategoriesActionType.addCategory, payload: newCategory };
};

export const updateCategoryAction = (
  updatedCategory: Category
): CategoryAction => {
  return {
    type: CategoriesActionType.updateCategory,
    payload: updatedCategory,
  };
};

export const deleteCategoryAction = (id: number): CategoryAction => {
  return { type: CategoriesActionType.deleteCategory, payload: id };
};

export const downloadCategoriesAction = (
  categories: Category[]
): CategoryAction => {
  return { type: CategoriesActionType.downloadCategory, payload: categories };
};

//5 reducer
export const CategoriesReducer = (
  currentState: CategoriesState = new CategoriesState(),
  action: CategoryAction
): CategoriesState => {
  const newState = { ...currentState };

  switch (action.type) {
    case CategoriesActionType.addCategory:
        newState.categories = [...newState.categories, action.payload];
      break;
    case CategoriesActionType.deleteCategory:
      break;
    case CategoriesActionType.downloadCategory:
      newState.categories = action.payload;
      break;
    case CategoriesActionType.updateCategory:
      break;
  }

  return newState;
};
