import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    previousResult: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});