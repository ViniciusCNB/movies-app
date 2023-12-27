import { Pressable, Text, View, Image } from "react-native"
import { styles } from "./styles"

interface Movie {
  id: number
  poster_path: string
}

interface CardMoviesProps {
  data: Movie
  onPress?: () => void
}

const CardMovies = ({ data, ...rest }: CardMoviesProps) => {
  return (
    <Pressable {...rest} style={styles.cardMovies}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
        style={styles.cardImage}
      />
    </Pressable>
  )
}

export default CardMovies
