import * as types from './actionTypes.js';

export const updateEventListActionCreator = selectionOptionsArr => ({
    type: types.UPDATE_EVENT_LIST,
    payload: selectionOptionsArr,
});

export const deleteEventActionCreator = eventId => ({
    type: types.DELETE_EVENT,
    payload: eventId,
});

