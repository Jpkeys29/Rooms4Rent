import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const Post = ({ p }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ margin: "3%", width: "70vw", }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={p.image}
                    title="home"
                />
                <CardContent>
                    <div >
                        <CardMedia image={p.image} />
                        <Typography gutterBottom variant="h5" component="div">{p.title}</Typography>
                        <Typography>{p.address}</Typography>
                        <Typography>{p.price}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{p.description}</Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Contact</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post;