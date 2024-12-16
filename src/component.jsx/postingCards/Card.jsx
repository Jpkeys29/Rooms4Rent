import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import { CardMedia } from '@mui/material'
import Typography from '@material-ui/core/Typography'
import { Container, Image, Badge } from './Cardstyles'
import { Box } from '@material-ui/core'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../sanityClient'

function CardPosting({posting}) {
    const builder = imageUrlBuilder(client)
    const urlFor = (source) => {
        return builder.image(source).url()
    }

  return (
    <Container>
      <CardActionArea  >
        {posting && posting.images && posting.images.length !== 0 &&
        <CardMedia
        component="img"
        image={ urlFor(posting?.images[0])}
        loading='lazy'
        style={{ aspectRatio: '3/2'}}
        /> 
        }
        <CardContent>
          <Typography variant="subtitle2">
            {/* <Badge>NEW</Badge> 3 BEDS &bull; 2 BATHS */}
          </Typography>
          <Typography variant="h6" component="h2" noWrap>
            {posting?.description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {posting?.neighborhood}({posting?.area})
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            ${posting?.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Container>
  )
}

export default CardPosting
