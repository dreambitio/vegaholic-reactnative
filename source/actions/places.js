import {
  RECEIVE_PLACES_IDS,
  RECEIVE_PLACE,
  RECEIVE_PLACE_PHOTOS,
  LIKE_PLACE
} from '../constants'
import {
  fetchVenues,
  fetchVenue,
  fetchVenuePhotos
} from '../services/foursquare'

const receivePlacesList = ids => ({
  type: RECEIVE_PLACES_IDS,
  payload: {
    ids
  }
})

export const fetchPlacesList = () => dispatch => {
  fetchVenues().
    then(places => {
      let ids = places.map(place => place.id)
      dispatch(receivePlacesList(ids))
    })
}

const receivePlace = (id, record) => ({
  type: RECEIVE_PLACE,
  payload: {id, record}
})

export const fetchPlace = id => dispatch => {
  fetchVenue(id).then(place => dispatch(receivePlace(id, place)))
}

const receivePlacePhotos = (id, photos) => ({
  type: RECEIVE_PLACE_PHOTOS,
  payload: {id, photos}
})

export const fetchPlacePhotos = id => dispatch => {
  fetchVenuePhotos(id).then(photos => {
    photos = photos.map(photo => ({
      prefix: photo.prefix,
      suffix: photo.suffix
    }))
    return dispatch(receivePlacePhotos(id, photos))
  })
}


export const likePlace = id => ({
  type: LIKE_PLACE,
  payload: {id}
})
