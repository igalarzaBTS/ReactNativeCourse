import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { styles } from '../../theme/appTheme'
import { MenuItemSeparator } from '../../components/MenuItemSeparator';

interface Technologies {
    area: string;
    data: string[];
}

const technologies: Technologies[] = [
    {
        area: "Mobile",
        data: ["Android", "iOS", "React Native", 'Flutter']
    },
    {
        area: "Backend",
        data: ["Node JS", "Nest JS", ".net"]
    },
    {
        area: "Fronted",
        data: ["React", "Angular"]
    }
];

export const SectionListScreen = () => {

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <View style={styles.globalMargin}>
                <Header title='Section List' />
                <MenuItemSeparator />
                <SectionList
                    sections={technologies}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={myStyles.item}>
                            <Text style={myStyles.title}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <View style={myStyles.headerView}>
                            <Text style={myStyles.header}>{section.area}</Text>
                        </View>
                    )}
                    stickySectionHeadersEnabled={true}
                    ListFooterComponent={() => (
                        <View style={myStyles.footer}>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>{'Technologies total: ' + technologies.length}</Text>
                        </View>
                    )}
                    renderSectionFooter={({ section }) => (
                        <View style={{ backgroundColor: '#F0ECE5', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{'Data count: ' + section.data.length}</Text>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <MenuItemSeparator />}
                />
            </View>
        </View>
    )
}

const myStyles = StyleSheet.create({
    item: {
        height: 34,
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        paddingLeft: 10
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: 'white'
    },
    headerView: {
        backgroundColor: '#31304D',
        borderRadius: 3,
        height: 30,
        marginBottom: 15
    },
    footer: {
        backgroundColor: 'silver',
        borderRadius: 10
    }
});