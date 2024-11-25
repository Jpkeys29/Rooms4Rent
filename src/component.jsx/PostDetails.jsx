import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import client from '../sanityClient';
import { useState } from 'react';

export default function PostDetails() {
  const [postDeatils, setPostDetails] = useState(null)
  
  const [searchParams, setSearchParams] = useSearchParams();
  const _id = searchParams.get("_id"); 
  const fetchSinglePosting = async () => {
    let posting = await client.getDocument(_id)
    setPostDetails(posting)
    console.log("posting", posting, _id)
  }
  useEffect(() => {
    fetchSinglePosting()

  },[])

  const deletePosting = async (_id) => {
    let postingdelete = client.delete(_id)

  }

  // const updatePosting = async (posting) => {
  //   let posting = {
  //     _id:_id,
  //     _type:"postingdetail",
  //     area:"Manhattan",
  //   }

  //   await client.createOrReplace(posting)


  // }
  
  
  return (
    <div>
        PostDetails
        {postDeatils?.area}
        </div>
  )
}
