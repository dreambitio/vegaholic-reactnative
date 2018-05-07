import queryString from 'query-string'

import { FOURSQUARE_CLIENT_ID, FOURSQUARE_CLIENT_SECRET } from '../config'

const apiUrl = 'https://api.foursquare.com/v2/venues'
const version = '20171001'

const defaultParams = {
  client_id: FOURSQUARE_CLIENT_ID,
  client_secret: FOURSQUARE_CLIENT_SECRET,
  v: version
}

const request = urlString => {
  return new Promise((resolve, reject) => {
    fetch(urlString).then(response => response.json()).then(response => {
      if (response.meta.code === 200) {
        resolve(response.response)
      } else {
        reject(new Error(
          `Code ${response.meta.code}; Message: ${response.meta.errorDetail}`))
      }
    }).catch(error => {
      reject(error)
    })
  })
}

export const fetchVenues = () => {
  let params = {
    query: 'vegan',
    intent: 'global',
    limit: 5
  }
  params = {...params, ...defaultParams}

  let urlString = `${apiUrl}/search?${queryString.stringify(params)}`

  return request(urlString).then(response => response.venues)
}

export const fetchVenue = id => {
  let urlString = `${apiUrl}/${id}?${queryString.stringify(defaultParams)}`

  return request(urlString).then(response => response.venue)
}

export const fetchVenuePhotos = id => {
  let urlString = `${apiUrl}/${id}/photos?${queryString.stringify(defaultParams)}`

  return request(urlString).then(response => response.photos.items)
}
