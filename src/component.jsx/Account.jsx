import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from "@mui/material/TextField"
import client from "../sanityClient";
import { auth } from "../firebase/config"
import axios from "axios";


  const Account = () => {
    const [userProfile, setUserProfile] = useState({
      id:'' ,
      name: '',
      email: '',
      photo: '',
      gender: '',
      occupation: ''
    });

    const navigate = useNavigate();

    const addAccount = async (userProfile) => {
      try {
        const response = await fetch('URL', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json ; charset=UTF-8'
          },
          body: JSON.stringify(userProfile),

        });
        console.log('FROM REACT:', response);
        if (response.status === 201) {
          alert('Profile created, Yay!')
            .then(response => response.json())
            .then(data => {
              setUserProfile(data);
            })
          navigate('/account');
        } else {
          console.error('No dashboard for you')
        }
      } catch (error) {
        console.log('Error:', error)
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(userProfile,auth.currentUser.uid)
      client.createOrReplace({_id:auth.currentUser.uid , _type:"accountdetails",name:userProfile.name, email:userProfile.email, gender:userProfile.gender, occupation:userProfile.occupation})

    }

    const handleChange = (e) => {
      setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
    }

    const handleRadioButton = (e) => {
      const { name, value } = e.target;
      setUserProfile({
        ...userProfile, [name] : value,
      })
    }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Card sx={{ width: 440, height: 600 }} variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)", textAlign: "center" }}
        >
          Account{" "}
        </Typography>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: 2,
          width: 400
        }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <TextField
              onChange={handleChange}
              id="name"
              type="name"
              name="name"
              placeholder="name"
              autoComplete="name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: "name" }}

            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              onChange={handleChange}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: "email" }}
            />
          </FormControl>

          <FormLabel>Photo</FormLabel>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={userProfile.gender}
              onChange={handleRadioButton}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Occupation</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="occupation"
              value={userProfile.occupation}
              onChange={handleRadioButton}
            >
              <FormControlLabel value="professional" control={<Radio />} label="Professional" />
              <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>Create</Button>
        </CardContent>

      </Card>
    </Box>
  )
}

export default Account
