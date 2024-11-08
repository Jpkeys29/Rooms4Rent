import React from 'react'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardMedia } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import imageUrlBuilder from '@sanity/image-url'
import client from '../sanityClient'


const RenderedAccount = ({ userDetails }) => {
    const builder = imageUrlBuilder(client)

    const urlFor = (source) => {
        return builder.image(source)
    }

console.log(urlFor(userDetails.image))
    return (
        <Card sx={{ maxWidth: 550, margin: 'auto', boxShadow: 3, borderRadius: 2, p: 4 }}>
            <CardHeader title="My Account"
                titleTypographyProps={{ align: 'center', variant: 'h5' }}
            />
            <CardMedia
                component="img"
                height="140"
                image={ urlFor(userDetails.image)}
                alt='profile image'
            />
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {userDetails.name}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    Email: {userDetails.email}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Gender: {userDetails.gender}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Occupation: {userDetails.occupation}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RenderedAccount;