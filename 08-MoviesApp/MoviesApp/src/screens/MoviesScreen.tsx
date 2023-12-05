import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalMovieList } from '../components/HorizontalMovieList';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradiantContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: windowWidth } = Dimensions.get('window');

export const MoviesScreen = () => {

  const navigation = useNavigation<any>();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { setMainColors } = useContext(GradientContext)
  const { top } = useSafeAreaInsets()


  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [primary, secondary] = await getImageColors(imgUrl)

    console.log({ primary, secondary })
    setMainColors({ primary, secondary })
  }

  useEffect(() => { if (nowPlaying.length > 0) {} }, [nowPlaying])

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color={'blue'} size={50} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ height: 320, top: top + 8 }}  >
          <Carousel
            layout={'default'}
            data={nowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={200}
            onSnapToItem={index => {}}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalMovieList title='Popular' movies={popular} />
        <HorizontalMovieList title='Top Rated' movies={topRated} />
        <HorizontalMovieList title='Upcoming' movies={upcoming} />

      </ScrollView>
    </GradientBackground>
  )
}
