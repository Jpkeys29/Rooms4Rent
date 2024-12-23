import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import client from "../sanityClient";
import { useState } from "react";
import {Box,Card,CardContent,CardMedia,Container,Typography,Button,} from "@mui/material";
import TextField from "@mui/material/TextField";
import imageUrlBuilder from "@sanity/image-url";
import Divider from "@mui/material/Divider";
import ContactForm from "./ContactForm";
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid2';

export default function PostDetails({user}) {
  const [postDetails, setPostDetails] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [editMode, setEditMode ] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => {
    return builder.image(source).url();
  };
  const _id = searchParams.get("_id");

  const navigate = useNavigate();

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
      await client.delete(_id);
      navigate("/");
      console.log(`Posting with ID ${_id} deleted successfully.`);
      setPostDetails({});
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const updatePosting = async (updatedData) => {
    try {
      const { _id, ...rest } = updatedData;
      const updatedPosting = await client.patch(_id).set(rest).commit();

      console.log(
        `Posting with _id ${_id} updated successfully.`,
        updatedPosting
      );
      setPostDetails(updatedPosting);
      navigate('/post')
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onNewDescription = (e) => {
    // console.log(e)
    setNewDescription(e.target.value);
  };

  // console.log(postDetails?.images);

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
       sx={{ width: 500, maxWidth: 600, height: 600, marginTop: "25px" }}
      >
        <CardMedia 
        component='img'
        sx={{ height: 190 }}
        image={postDetails?.images?.[0].asset && urlFor(postDetails.images[0].asset)}
        />
        {/* <Box>
          {postDetails?.images?.map((image, index) => ( 
            <CardMedia
            key={image._key || index}
            sx={{ height: 190 }}
            image={ 
              image?.asset && urlFor(image.asset) 
            }
            />
            ))}
        </Box> */}
        <CardContent>
          <Grid container spacing={2}>
          {!editMode && 
          <Typography variant="h6" component="h2" noWrap>
            {postDetails?.description}
          </Typography>
          }
          {user && <Button onClick={(e) => setEditMode(!editMode)}><EditIcon/> </Button> }
          {editMode && 
          <>
          <TextField
            name="description"
            value={newDescription.description}
            onChange={onNewDescription}
            variant="standard" 
            />
            
          <Button 
            onClick={() =>updatePosting({
              _id: postDetails._id,
              description: newDescription,
            })
          }
          disabled={!postDetails}
          >
            Update
          </Button>
            </>
          }
          </Grid>

          <Divider />
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "text.secondary", mb: 1.5 }}
          >
            {postDetails?.neighborhood}
          </Typography>
          <Typography component="div" sx={{ color: "text.secondary", mb: 1.5 }}>
            {postDetails?.area}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "text.secondary", mb: 1.5 }}
          >
            ${postDetails?.price}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 1.5 }}
            component="p"
          >
            {postDetails?.availability}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 1.5 }}
            component="p"
          >
            {postDetails?.amenities}
          </Typography>

        <ContactForm/>

        </CardContent>
        <Divider />
        <Button
          sx={{ color: "error.main", mb: 1.5 }}
          onClick={() => deletePosting(postDetails._id)}
        >
          Delete Posting
        </Button>
      </Card>
    </Container>
  );
}
