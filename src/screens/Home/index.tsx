import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native"
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
  const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [noResult, setNoResult] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    const response = await api.get("/movie/popular", {
      params: {
        page,
      },
    })
    setDiscoveryMovies([...discoveryMovies, ...response.data.results])
    setPage(page + 1)
    setLoading(false)
  }

  const searchMovies = async (query: string) => {
    setLoading(true)
    const response = await api.get("/search/movie", {
      params: {
        query,
      },
    })

    if (response.data.results.length === 0) {
      setNoResult(true)
    } else {
      setSearchResultMovies(response.data.results)
      setNoResult(false)
    }
    setLoading(false)
  }

  const handleSearch = (text: string) => {
    setSearch(text)
    if (text.length > 2) {
      searchMovies(text)
    } else {
      setSearchResultMovies([])
    }
  }

  const movieData = search.length > 2 ? searchResultMovies : discoveryMovies

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>O que você quer assistir hoje?</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Buscar"
            placeholderTextColor={"#FFF"}
            onChangeText={handleSearch}
            value={search}
          />
          <MagnifyingGlass size={24} color="#FFF" weight="light" />
        </View>
        <View style={styles.movieList}>
          <FlatList
            data={movieData}
            numColumns={3}
            renderItem={(item) => <CardMovies data={item.item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 150,
              justifyContent: "center",
            }}
            onEndReached={() => loadData()}
          />
          {loading && <ActivityIndicator size={50} color="#0296e5" />}
        </View>
      </View>
    </>
  )
}

export default Home
