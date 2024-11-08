import React from 'react'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardMedia } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'

function renderedPosting() {
    return (
        <Card>
            <CardHeader title="My Account"
                titleTypographyProps={{ align: 'center', variant: 'h5' }}
            />
            <CardMedia
            />
            <CardContent>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
            </CardContent>
        </Card>
    )
}

export default renderedPosting