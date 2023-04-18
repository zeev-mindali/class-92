//create our state
export class CategoriesState {
  public categories: string[] = [];
}

//action types
export enum CategoriesActionType {
  addCategory = "addCategory",
  updateCategory = "updateCategory",
  removeCategory = "removeCategory",
}

//action data structure
export interface CategoryAction {
  type: CategoriesActionType;
  payload?: any;
}

//function for dispatch
export function addCategoryAction(newCategory: string): CategoryAction {
  return { type: CategoriesActionType.addCategory, payload: newCategory };
}

export function updateCategoryAction(category: {
  oldName: string;
  newName: string;
}): CategoryAction {
  return { type: CategoriesActionType.updateCategory, payload: category };
}

export function removeCategoryAction(category: string): CategoryAction {
  return { type: CategoriesActionType.removeCategory, payload: category };
}

//reducer
export function CategoriesReducer(
  currentState: CategoriesState = new CategoriesState(),
  action: CategoryAction
): CategoriesState {
  const newState = { ...currentState }; //spread opreator

  switch (action.type) {
    case CategoriesActionType.addCategory:
      newState.categories.push(action.payload);
      break;
    case CategoriesActionType.removeCategory:
      newState.categories = newState.categories.filter(
        (item) => item != action.payload
      );
      break;

    case CategoriesActionType.updateCategory:
      newState.categories = newState.categories.filter(
        (item) => item != action.payload["oldName"]
      );
      newState.categories.push(action.payload["newName"]);
      break;
  }

  return newState;
}
