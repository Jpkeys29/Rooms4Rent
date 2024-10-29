import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from "@mui/material/TextField"

const PostRoom = () => {
    const [roomPosting, setRoomPosting] = useState({
        id: '',
        area: '',
        neighborhood: '',
        description: '',
        price: '',
        photo: '',
        availability: '',
        amenities: ''
    })

    const addRoomPosting = async (roomPosting) => {
        try {
            const response = await fetch('URL', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json ; charset=UTF-8'
                },
                body: JSON.stringify(roomPosting)
            });

        } catch (error) {
            console.log('Error:', error)
        }
    };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            bgcolor: '#f5f5f5',
            p: 2,
        }}>
            <Card sx={{ width: 600, p:3 }}>
                <CardHeader>
                    title={
                        <Typography variant="h4" color="textPrimary" align="center">
                            Post a room
                        </Typography>
                    }
                </CardHeader>
                <CardContent component="form" >
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Area</FormLabel>
                        <TextField
                        name='area'
                        value={roomPosting.area}
                        onChange={null}
                        variant='outlined'
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Neighborhood</FormLabel>
                        <TextField
                        name='neighborhood'
                        value={roomPosting.neighborhood}
                        onChange={null}
                        variant='outlined'
                        />

                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Description</FormLabel>
                        <TextField
                        name='description'
                        value={roomPosting.description}
                        onChange={null}
                        variant='outlined'
                        multiline
                        rows={3}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Price</FormLabel>
                        <TextField
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Photos</FormLabel>
                        <TextField
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Availability</FormLabel>
                        <TextField
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <FormLabel>Amenities</FormLabel>
                        <TextField
                        name='description'
                        value={roomPosting.description}
                        onChange={null}
                        variant='outlined'
                        multiline
                        rows={3}
                        />
                    </FormControl>
                </CardContent>
            </Card>
        </Box>
    )
}

export default PostRoom;