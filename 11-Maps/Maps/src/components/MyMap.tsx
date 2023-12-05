import React, { useEffect, useRef, useState } from 'react'
import MapView, { MapMarker, Marker, Polyline } from 'react-native-maps';
import { UseLocation } from '../hooks/UseLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { FloatingButton } from './FloatingButton';

interface Props {
  markers?: MapMarker[];
}

export const MyMap = ({ markers }: Props) => {
  const { hasLocation, initialPosition, getCurrentLocation, followUserLocation, userLocation, stopFollowUserLocation, routeLines } = UseLocation()
  const mapViewRef = useRef<MapView>()
  const followingRef = useRef<boolean>(true)
  const [showRouteLine, setShowRouteLine] = useState(true)

  useEffect(() => {
    followUserLocation()

    return () => {
      stopFollowUserLocation()
    }
  }, [])

  useEffect(() => {

    if (!followingRef.current) return

    const { latitude, longitude } = userLocation
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude }
    })

  }, [userLocation])

  const centerPosition = async () => {

    followingRef.current = true
    const { latitude, longitude } = await getCurrentLocation()
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude }
    })
  }

  if (!hasLocation) {
    return <LoadingScreen />
  }

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={(self) => mapViewRef.current = self!}
        onTouchStart={() => followingRef.current = false}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={"My Location"}
          description={"My Location information"}
          image={require('../assets/location-pin.png')}
        />

        {
          (showRouteLine) && (
            <Polyline
              coordinates={routeLines}
              strokeColor='#00C2FF'
              strokeWidth={5}
            />
          )
        }


      </MapView >
      <FloatingButton
        iconName='https://cdn-icons-png.flaticon.com/128/639/639347.png?ga=GA1.1.1965869148.1695848995&track=ais'
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20
        }}
      />

      <FloatingButton
        iconName='https://cdn-icons-png.flaticon.com/128/2554/2554922.png?ga=GA1.1.1965869148.1695848995&track=ais'
        onPress={() => setShowRouteLine(!showRouteLine)}
        style={{
          position: 'absolute',
          bottom: 140,
          right: 20
        }}
      />
    </>
  )
}
