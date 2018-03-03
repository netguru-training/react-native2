import { NavigationActions } from "react-navigation";
import { AppNavigator } from "./index";

// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams("Register");
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// // const secondAction = AppNavigator.router.getActionForPathAndParams('Dances');
// const initialNavState = AppNavigator.router.getStateForAction(
//   // firstAction,
//   tempNavState
// );
// export const ActionCreators = {
//   TO_PROFILE: new ActionCreator("TO_PROFILE"),
//   TO_LOGIN: new ActionCreator("TO_LOGIN"),
//   TO_REGISTER: new ActionCreator("TO_REGISTER"),
//   TO_BUILDING_INFO: new ActionCreator("TO_BUILDING_INFO")
// };

export const navReducer = (state, action) => {
  let nextState;
  switch (action.type) {
    // case ActionCreators.TO_PROFILE.type:
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: "Profile" }),
    //     state
    //   );
    //   break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
