import { Category } from "../modal/Category";

//1. reducer state
export class CategoriesState {
  //public categories:string[] = [];
  public categories: Category[] = [];
}

//2. action types
export enum CategoriesActionType {
  addCategory = "addCategory",
  updateCategory = "updateCategory",
  deleteCategory = "deleteCategory",
  downloadCategory = "downloadCategory",
  clearAllCategories = "clearAllCategories",
}

//3. action data structure
export interface CategoryAction {
  type: CategoriesActionType;
  payload?: any;
}

//4. function for dispatch
export const addCategoryAction = (newCategory: Category): CategoryAction => {
  return { type: CategoriesActionType.addCategory, payload: newCategory };
};

//                                    {1,rock}=>{1,Rock'n'Roll}
export const updateCategoryAction = (
  updateCategory: Category
): CategoryAction => {
  return { type: CategoriesActionType.updateCategory, payload: updateCategory };
};

export const deleteCategoryAction = (id: number): CategoryAction => {
  return { type: CategoriesActionType.deleteCategory, payload: id };
};

export const downloadCategoryAction = (
  allCategories: Category[]
): CategoryAction => {
  return {
    type: CategoriesActionType.downloadCategory,
    payload: allCategories,
  };
};

export const clearAllCategoriesAction = (): CategoryAction => {
  return { type: CategoriesActionType.clearAllCategories };
};

//5. our reducer
export const CategoriesReducer = (
  currentState: CategoriesState = new CategoriesState(),
  action: CategoryAction
): CategoriesState => {
  const newState = { ...currentState };
  switch (action.type) {
    case CategoriesActionType.addCategory:
      newState.categories = [...newState.categories, action.payload];
      break;

    case CategoriesActionType.clearAllCategories:
      newState.categories = [];
      break;

    case CategoriesActionType.deleteCategory:
      newState.categories = [...newState.categories].filter(
        (item) => item.id !== action.payload
      );
      break;

    case CategoriesActionType.downloadCategory:
      newState.categories = action.payload;
      break;

    case CategoriesActionType.updateCategory:
      break;
  }
  return newState;
};
