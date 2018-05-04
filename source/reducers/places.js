import { combineReducers } from 'redux'

import { RECEIVE_PLACES_IDS, RECEIVE_PLACE, LIKE_PLACE } from '../constants'

const placesByIdInitialState = {}

const insertPlaces = (state, payload) => {
  const newState = {}
  payload.ids.forEach(id => {
    newState[id] = {
      id,
      readyToRender: false,
      liked: false
    }
  })
  return newState
}

const insertPlace = (state, payload) => {
  const {id} = payload
  return {
    ...state,
    [id]: {
      ...state[id],
      ...payload.record,
      readyToRender: true
    }
  }
}

const likePlace = (state, payload) => {
  const {id} = payload
  return {
    ...state,
    [id]: {
      ...state[id],
      liked: true
    }
  }
}

const placesById = (state = placesByIdInitialState, {type, payload}) => {
  switch (type) {
    case RECEIVE_PLACES_IDS:
      return insertPlaces(state, payload)
    case RECEIVE_PLACE:
      return insertPlace(state, payload)
    case LIKE_PLACE:
      return likePlace(state, payload)
    default:
      return state
  }
}

const allPlacesInitialState = []

const allPlaces = (state = allPlacesInitialState, {type, payload}) => {
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