import * as types from '../actions/actionTypes.js';

const initialState = {
    eventList: [], // state holds array of objects (containing event information)
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_EVENT_LIST: // input: array of objects (containing event information)
            return { // return updated state with array of events (passed in via payload information)
                ...state,
                eventList: action.payload,
            }
        case types.DELETE_EVENT: // input: single event id
            const deleteOneArr = [];
            for (let i = 0; i < state.eventList; i++) {
                // push to deletedOneArr if it does NOT match the specified eventID to be deleted
                if (state.eventList[i].eventID !== action.payload) deleteOneArr.push(state.eventList[i]);
            }
            return { // return updated state with new array which has specified event deleted from it
                ...state,
                eventList: deleteOneArr,
            }
        default: {
            return state;
        }
    }
};



export default eventsReducer;