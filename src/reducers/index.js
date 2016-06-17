/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { VisibilityFilters } from "actions/const";
import { combineReducers } from 'redux';
import todos from './todos'
import counter from './counter'
/* Populated by react-webpack-redux:reducer */
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const todoApp = combineReducers({
  counter,
  todos
})

export default todoApp