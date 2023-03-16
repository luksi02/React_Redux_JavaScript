import { combineReducers} from "redux";
import { COUNTING, counting, counterStart, COUNTER_START, rocketLaunch, ROCKET_LAUNCH} from "./actions";

const counterInitialState = {
    counter: 2,
    error: "",
    launched: false,
};

const counterReducer = (state = counterInitialState, {type, payload }) => {
    switch (type) {
        case COUNTING:
            return {
                ...state,
                launched: false,

            };

        case ROCKET_LAUNCH:
            return {
                ...state,
                counter: 0,
                launched: true,
            };

        default:
            return state;
    };
};

export { counterInitialState };
export default combineReducers({
    counterState : counterReducer,
});
