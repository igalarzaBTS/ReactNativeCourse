import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 8
    },
    mainTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 15,
    },
    menuContainer: {
        marginHorizontal: 30,
        marginVertical: 30
    },
    textMenu: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    profileInstructions: {
      marginTop: 25,
      marginBottom: 25,
      fontSize: 16,
      textAlign: 'center'
    },
    buttonMenu: {
        marginVertical: 10
    },
    customButton: {
      width: 150,
      height: 50,
      backgroundColor: '#31304D',
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'center',
      marginTop: 15
    },
    customTextButton: {
      fontSize: 18,
      color: 'white'
  },
});