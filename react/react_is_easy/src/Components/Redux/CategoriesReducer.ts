//create our state
export class CategoriesState {
  public categories: string[] = [];
}

//action types
export enum CategoriesActionType {
  addCategory = "addCategory",
  updateCategory = "updateCategory",
  removeCategory = "removeCategory",
  theBest = "theBest",
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

export function updateCategoryAction(category: string): CategoryAction {
  return { type: CategoriesActionType.updateCategory, payload: category };
}

export function remoteCategoryAction(category: string): CategoryAction {
  return { type: CategoriesActionType.removeCategory, payload: category };
}

export function ShirCategoryAction(shir: object): CategoryAction {
  return { type: CategoriesActionType.theBest, payload: shir };
}

//reducer
export function CategoriesReducer(
  currentState: CategoriesState = new CategoriesState(),
  action: CategoryAction
): CategoriesState {
  const newState = { ...currentState }; //spread opreator

  switch (action.type) {
  }

  return newState;
}
