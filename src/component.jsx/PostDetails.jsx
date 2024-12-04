import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import client from "../sanityClient";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import imageUrlBuilder from "@sanity/image-url";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@mui/material/Divider";

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => {
    return builder.image(source);
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
      setNewDescription('');
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onNewDescription = (e) => {
    setNewDescription(e.target.value);

  };

  console.log(postDetails?.images);

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card sx={{ width: 500, maxWidth: 600, height: 600, marginTop: "25px" }}>
        <CardMedia
          sx={{ height: 190 }}
          image={ 
            postDetails?.images?.[0]?.asset && urlFor(postDetails.images[0].asset)
            // urlFor(postDetails?.images[0])
          }
        />
        <CardContent>
          PostDetails
          <Typography variant="h6" component="h2" noWrap>
            {postDetails?.description}
          </Typography>
          <TextField
            name="description"
            value={newDescription.description}
            onChange={onNewDescription}
          />
          <Button
            onClick={() =>
              updatePosting({
                _id: postDetails._id,
                description: newDescription,
              })
            }
            disabled={!postDetails}
          >
            Update
          </Button>
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
