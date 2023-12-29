import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  header: {
    paddingTop: 30,
    height: 115,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
  },
  detailsImage: {
    width: "100%",
    height: 210,
    position: "absolute",
  },
  detailsPosterImage: {
    width: 100,
    height: 160,
    borderRadius: 16,
    left: 29,
    right: 251,
    top: 140,
  },
  movieTitle: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
    position: "absolute",
    height: 50,
    top: 240,
    right: 32,
    left: 140,
    lineHeight: 27,
  },
  description: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 170,
  },
  descriptionGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  descriptionText: {
    marginRight: 10,
    color: "#92929D",
  },
  descriptionText1: {
    marginRight: 10,
    color: "#FF8700",
  },
  about: {
    padding: 20
  },
  aboutTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  aboutText: {
    color: "#FFF",
    textAlign: "justify",
  }
})
