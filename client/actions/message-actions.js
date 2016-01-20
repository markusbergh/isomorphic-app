import { UPDATE_MESSAGE, ADD_MESSAGE } from '../constants';

export function updateMessage(message) {
    return {
        type: UPDATE_MESSAGE,
        message
    };
}

export function addMessage() {
    return {
        type: ADD_MESSAGE
    };
}
