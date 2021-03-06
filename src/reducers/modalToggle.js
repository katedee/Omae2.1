/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = '';

const modalReducer = (state=initialState, action) => {
  const actionsToTake = {
    TOGGLE_MODAL: () => {
      return state === action.parameter ? '' : action.parameter;
    },

    DEFAULT: () => { return state; }
  };
  return (actionsToTake[action.type] || actionsToTake.DEFAULT)();
};

module.exports = modalReducer;
