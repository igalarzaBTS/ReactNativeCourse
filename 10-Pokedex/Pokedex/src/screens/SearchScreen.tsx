import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { PokemonCard } from '../components/PokemonCard'
import { styles as globalStyles } from '../theme/apptheme'
import { Loading } from '../components/Loading'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { EmptySearch } from '../components/EmptySearch'

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()
    const screenWidth = Dimensions.get('screen').width
    const [term, setTerm] = useState('')
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

    useEffect(() => {
        if (term.length === 0) {
            return setPokemonFiltered([])
        }

        if (isNaN(Number(term))) {
            setPokemonFiltered(simplePokemonList.filter(poke => poke.name.toLowerCase().includes(term.toLowerCase())))
        } else {
            const pokemonbyId = simplePokemonList.find(poke => poke.id === term)
            setPokemonFiltered(pokemonbyId ? [pokemonbyId] : [])
        }

    }, [term])


    if (isFetching) {
        return ( <Loading /> )
    }

    return (
        <View style={{ flex: 1,
            marginHorizontal: 8
        }}
        >
            <SearchInput
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 16,
                    top: (Platform.OS === 'ios') ? top : top + 30
                }}
                onDebounce={(text) => setTerm(text)}
            />

            <FlatList
                data={pokemonFiltered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}

                // Header
                ListHeaderComponent={(
                    <Text style={{
                        ...globalStyles.title,
                        ...globalStyles.globalMargin,
                        paddingBottom: 5,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80
                    }}>{term}</Text>
                )}
                ListEmptyComponent={<EmptySearch searchTerm={term} />}
            />
        </View>
    )
}