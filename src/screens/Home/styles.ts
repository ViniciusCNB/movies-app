import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A32',
    padding: 25
  },
  headerText: {
    marginTop: 30,
    fontSize: 24,
    lineHeight: 45,
    color: '#FFF',
  },
  containerInput: {
    backgroundColor: '#67686D',
    height: 42,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: '#FFF',
    width: '80%',
  },
  movieList: {
    marginTop: 10,
    paddingLeft: 15
  },
  noResult: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10
  }
})