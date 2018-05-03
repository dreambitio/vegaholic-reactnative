import { combineReducers } from 'redux'

import { RECEIVE_PLACES_IDS, RECEIVE_PLACE } from '../constants'

const placesById = (state = {}, {type, payload}) => {
  switch (type) {
    case RECEIVE_PLACES_IDS:
      const newState = {}
      payload.ids.forEach(id => {
        newState[id] = {
          id,
          readyToRender: false
        }
      })
      return newState
    case RECEIVE_PLACE:
      const {id} = payload
      return {
        ...state,
        [id]: {
          ...payload.record,
          readyToRender: true
        }
      }
    default:
      return state
  }
}

const allPlaces = (state = [], {type, payload}) => {
  switch (type) {
    case RECEIVE_PLACES_IDS:
      return payload.ids
    default:
      return state
  }
}

export default combineReducers({
  byId: placesById,
  allIds: allPlaces
})