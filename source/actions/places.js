import { RECEIVE_PLACES_IDS, RECEIVE_PLACE } from '../constants'
import { fetchVenues, fetchVenue } from '../services/foursquare'

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