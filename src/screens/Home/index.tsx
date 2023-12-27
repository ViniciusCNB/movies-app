import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>O que você quer assistir hoje?</Text>
        <View style={styles.containerInput}>
          <TextInput placeholder="Buscar" />
        </View>
      </View>
    </>
  )
}

export default Home