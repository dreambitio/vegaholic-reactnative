import {
  RECEIVE_PLACES,
  RECEIVE_PLACE,
  RECEIVE_PLACE_PHOTOS,
  LIKE_PLACE
} from '../constants'
import {
  fetchVenues,
  fetchVenue,
  fetchVenuePhotos
} from '../services/foursquare'

const receivePlaces = (byId, allIds) => ({
  type: RECEIVE_PLACES,
  payload: {
    byId,
    allIds
  }
})

export const fetchPlaces = () => dispatch => {
  fetchVenues().
    then(places => {
      let promises = places.map(place => Promise.all([fetchVenue(place.id), fetchVenuePhotos(place.id)]))

      Promise.all(promises).then(places => {
        let placesById = {}
        let allPlacesIds = places.map(place => {
          const details = place[0]
          const photos = place[1]
          placesById[details.id] = {
            ...details,
            photos: photos.map(photo => ({
              prefix: photo.prefix,
              suffix: photo.suffix
            })),
            previewPhoto: `${photos[0].prefix}90x90${photos[0].suffix}`
          }
          return details.id
        })
        dispatch(receivePlaces(placesById, allPlacesIds))
      })
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
