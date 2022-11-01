import { combineReducers } from 'redux';


const medPhone = (state = '', action) => {
  switch (action.type) {
    case 'SET_MED_PHONE':
      return action.payload;
    default:
      return state;
  }
};

const med = (state = '', action) => {
  switch (action.type) {
    case 'SET_MED':
      return action.payload;
    default:
      return state;
  }
};

const medNotes = (state = '', action) => {
  switch (action.type) {
    case 'SET_MED_NOTES':
      return action.payload;
    default:
      return state;
  }
};

const procedurePhone = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROCEDURE_PHONE':
      return action.payload;
    default:
      return state;
  }
};

const procedure = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROCEDURE':
      return action.payload;
    default:
      return state;
  }
};

const procedureNotes = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROCEDURE_NOTES':
      return action.payload;
    default:
      return state;
  }
};

const scanPhone = (state = '', action) => {
  switch (action.type) {
    case 'SET_SCAN_PHONE':
      return action.payload;
    default:
      return state;
  }
};

const scan = (state = '', action) => {
  switch (action.type) {
    case 'SET_SCAN':
      return action.payload;
    default:
      return state;
  }
};

const scanNotes = (state = '', action) => {
  switch (action.type) {
    case 'SET_SCAN_NOTES':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  medPhone,
  med,
  medNotes,
  procedurePhone,
  procedure,
  procedureNotes,
  scanPhone,
  scan,
  scanNotes
});