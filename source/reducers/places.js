import { combineReducers } from 'redux'

import {
  RECEIVE_PLACES,
  RECEIVE_PLACE,
  RECEIVE_PLACE_PHOTOS,
  LIKE_PLACE,
  DISLIKE_PLACE
} from '../constants'

const placesByIdInitialState = {}

const insertPlace = (state, payload) => {
  const {id, record} = payload
  return {
    ...state,
    [id]: {
      ...state[id],
      ...record,
      readyToRender: true
    }
  }
}

const insertPhotos = (state, payload) => {
  const {id, photos} = payload
  const photoPreviewUrl = `${photos[0].prefix}90x90${photos[0].suffix}`
  return {
    ...state,
    [id]: {
      ...state[id],
      photoPreview: photoPreviewUrl
    }
  }
}

const likePlace = (state, {id}) => {
  return {
    ...state,
    [id]: {
      ...state[id],
      liked: true
    }
  }
}

const dislikePlace = (state, {id}) => {
  return {
    ...state,
    [id]: {
      ...state[id],
      liked: false
    }
  }
}

const placesById = (state = placesByIdInitialState, {type, payload}) => {
  switch (type) {
    case RECEIVE_PLACES:
      return payload.byId
    case RECEIVE_PLACE:
      return insertPlace(state, payload)
    case RECEIVE_PLACE_PHOTOS:
      return insertPhotos(state, payload)
    case LIKE_PLACE:
      return likePlace(state, payload)
    case DISLIKE_PLACE:
      return dislikePlace(state, payload)
    default:
      return state
  }
}

const allPlacesInitialState = []

const allPlaces = (state = allPlacesInitialState, {type, payload}) => {
  switch (type) {
    case RECEIVE_PLACES:
      return payload.allIds
    default:
      return state
  }
}

export default combineReducers({
  byId: placesById,
  allIds: allPlaces
})