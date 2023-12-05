import { useEffect, useRef, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';

export interface Location {
  latitude: number;
  longitude: number;
}

export const UseLocation = () => {

  const [hasLocation, setHasLocation] = useState(false)
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0
  })
  const [userLocation, setUserLocation] = useState<Location>({
    latitude: 0,
    longitude: 0
  })

  const [routeLines, setRouteLines] = useState<Location[]>([])
  const watchIdRef = useRef<number>()
  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])


  useEffect(() => {
    getCurrentLocation()
      .then(location => {

        if (!isMounted.current) return

        setInitialPosition(location)
        setUserLocation(location)
        setRouteLines(routes => [...routes, location])

        setHasLocation(true)
      })

  }, [])

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({ latitude: coords.latitude, longitude: coords.longitude })
        },
        error => reject({ error }), { enableHighAccuracy: true }
      );
    })
  }

  const followUserLocation = () => {
    watchIdRef.current = Geolocation.watchPosition(
      ({ coords }) => {
        console.log(coords)

        if (!isMounted.current) return

        setUserLocation({ latitude: coords.latitude, longitude: coords.longitude })

        const location: Location = {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
        setRouteLines(routes => [...routes, location])
      },
      error => console.log({ error }), { enableHighAccuracy: true }
    )
  }

  const stopFollowUserLocation = () => {
    if (watchIdRef.current) {
      Geolocation.clearWatch(watchIdRef.current)
    }
  }

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines
  }
}
