import { FlatList, Text, TextInput, View } from "react-native"
import { MagnifyingGlass } from "phosphor-react-native"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import CardMovies from "../../components/CardMovies"

interface Movie {
  id: number
  title: string
  poster_path: string
  overview: string
}

const Home = () => {
  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await api.get("/movie/popular")
    setDiscoveryMovies(response.data.results)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>O que você quer assistir hoje?</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Buscar"
            placeholderTextColor={"#FFF"}
          />
          <MagnifyingGlass size={24} color="#FFF" weight="light" />
        </View>
        <View>
          <FlatList
            data={discoveryMovies}
            numColumns={3}
            renderItem={(item) => <CardMovies data={item.item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
          />
        </View>
      </View>
    </>
  )
}

export default Home
