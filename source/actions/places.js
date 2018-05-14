import { AsyncStorage } from 'react-native'
import {
  RECEIVE_PLACES,
  RECEIVE_PLACE,
  RECEIVE_PLACE_PHOTOS,
  LIKE_PLACE,
  DISLIKE_PLACE
} from '../constants'
import {
  fetchVenues,
  fetchVenue,
  fetchVenuePhotos
} from '../services/foursquare'
import { Dimensions } from 'react-native'

const {width} = Dimensions.get('window')

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
          let photos = place[1]
          if (photos.length > 5)
            photos = photos.slice(0, 5)
          placesById[details.id] = {
            ...details,
            photos: photos.map(photo => `${photo.prefix}${width}x450${photo.suffix}`),
            previewPhoto: `${photos[0].prefix}90x90${photos[0].suffix}`
          }
          return details.id
        })

        // Get Likes
        AsyncStorage.getItem('LikedIDs').then(value => {
          let ids = value ? JSON.parse(value) : []
          ids.forEach(id => {
            placesById[id].liked = true
          })

          dispatch(receivePlaces(placesById, allPlacesIds))
        })
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

export const likePlace = id => {
  AsyncStorage.getItem('LikedIDs').then(value => {
    let ids = value ? JSON.parse(value) : []
    ids.push(id)
    AsyncStorage.setItem('LikedIDs', JSON.stringify(ids))
  })

  return {
    type: LIKE_PLACE,
    payload: {id}
  }
}

export const dislikePlace = id => {
  AsyncStorage.getItem('LikedIDs').then(value => {
    let ids = value ? JSON.parse(value) : []
    ids.splice(ids.indexOf(id), 1)
    AsyncStorage.setItem('LikedIDs', JSON.stringify(ids))
  })

  return {
    type: DISLIKE_PLACE,
    payload: {id}
  }
}