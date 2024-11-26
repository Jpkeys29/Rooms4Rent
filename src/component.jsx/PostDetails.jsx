import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import client from "../sanityClient";
import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Container, Typography, Button } from "@mui/material";
import imageUrlBuilder from '@sanity/image-url'
import CardActionArea from '@material-ui/core/CardActionArea'
import Divider from '@mui/material/Divider';


export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const builder = imageUrlBuilder(client)
    const urlFor = (source) => {
        return builder.image(source)
    }
  const _id = searchParams.get("_id");

  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchSinglePosting = async () => {
      let posting = await client.getDocument(_id);
      setPostDetails(posting);
      console.log("posting", posting, _id);
    };
    fetchSinglePosting();
  }, []);

  const deletePosting = async (_id) => {
    try {
      // await client.delete(_id);
      await fetch(`/api/posting/${_id}`, {
        method: 'DELETE'
      });
      navigate('/');
      console.log(`Posting with ID ${_id} deleted successfully.`);

      const updatedPostDetails = {...postDetails};
      delete updatedPostDetails[_id];

      setPostDetails(updatedPostDetails);
    } catch (error) {
      console.log('Error deleting data:', error);
    }  
  };



  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{width: 500, maxWidth: 500, height: 500, marginTop: "25px"}}>
        <CardMedia
        sx={{height: 190}}
        />
        <CardContent >
          PostDetails
          <Typography variant="h6" component="h2" noWrap gutterBottom="true">
            {postDetails?.description}
          </Typography>
          <Divider />
          <Typography variant="body1" component="p" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {postDetails?.neighborhood}
          </Typography>
          <Typography component='div' sx={{ color: 'text.secondary', mb: 1.5 }}>
            {postDetails?.area}
          </Typography>
          <Typography variant="body1" component="p" sx={{ color: 'text.secondary', mb: 1.5 }}>
            ${postDetails?.price}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }} component="p">
            {postDetails?.availability}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }} component="p">
            {postDetails?.amenities}
          </Typography>
        </CardContent>
        <Divider />
        <Button sx={{ color: 'danger', mb: 1.5 }} onClick={() =>deletePosting(postDetails._id)}>Delete Posting</Button>
      </Card>
    </Container>
  );
}
