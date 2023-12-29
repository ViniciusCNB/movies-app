import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { api } from "../../services/api"
import { styles } from "./styles"
import {
  BookmarkSimple,
  CalendarBlank,
  CaretLeft,
  Clock,
  Star,
} from "phosphor-react-native"

interface MovieDetails {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  runtime: string
  release_date: string
  vote_average: number
}

interface RouteProps {
  movieId: number
}

const Details = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
  const [loading, setLoading] = useState(false)

  const route = useRoute()
  const { movieId } = route.params as RouteProps

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/movie/${movieId}`)
        setMovieDetails(response.data)
        setLoading(false)
        setMovieDetails(response.data)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    fetchMovieDetails()
  }, [movieId])

  const getYear = (date: string) => {
    const year = new Date(date).getFullYear()
    return year
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <CaretLeft color="#FFF" size={32} weight="thin" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalhes</Text>
        <TouchableOpacity>
          <BookmarkSimple color="#FFF" size={32} weight="thin" />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`,
          }}
          style={styles.detailsImage}
        />
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
          }}
          style={styles.detailsPosterImage}
        />
        <Text style={styles.movieTitle}>{movieDetails?.title}</Text>
        <View style={styles.description}>
          <View style={styles.descriptionGroup}>
            <CalendarBlank color="#92929D" size={25} weight="thin" />
            <Text style={styles.descriptionText}>
              {getYear(movieDetails?.release_date)}
            </Text>
          </View>
          <View style={styles.descriptionGroup}>
            <Clock color="#92929D" size={25} weight="thin" />
            <Text style={styles.descriptionText}>
              {`${movieDetails?.runtime} min`}
            </Text>
          </View>
          <View style={styles.descriptionGroup}>
            <Star
              color={
                movieDetails?.vote_average.toFixed(2) >= "7"
                  ? "#FF8700"
                  : "#92929D"
              }
              size={25}
              weight={
                movieDetails?.vote_average.toFixed(2) >= "7"
                  ? "duotone"
                  : "thin"
              }
            />
            <Text
              style={[
                movieDetails?.vote_average.toFixed(2) >= "7"
                  ? styles.descriptionText1
                  : styles.descriptionText,
              ]}
            >
              {movieDetails?.vote_average.toFixed(1)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>Sinopse</Text>
        <Text style={styles.aboutText}>
          {movieDetails?.overview === ""
            ? "Este filme não possui sinopse."
            : movieDetails?.overview}
        </Text>
      </View>
    </View>
  )
}

export default Details
