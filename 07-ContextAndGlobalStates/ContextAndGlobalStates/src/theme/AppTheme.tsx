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
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#0433FF',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 15

  },
  textButton: {
    fontSize: 20,
    color: 'white'
  },
  menuContainer: {
    marginHorizontal: 30,
    marginVertical: 30
  },
  textMenu: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonMenu: {
    flexDirection: 'row',
    marginVertical: 10
  },
  iconMenu: {
    paddingRight: 8
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
  marginIcons: {
    marginHorizontal: 30,
    marginVertical: 30
  }
});

export const Colors = {
  primary: '#527853',
  activeBackground: '#F9E8D9',
  secondary: '#EE7214'
}