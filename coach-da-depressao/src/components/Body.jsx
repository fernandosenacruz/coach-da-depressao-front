import { Box, Typography } from '@mui/material';
import { React, useEffect, useState } from 'react';
import CardImage from './CardImage';
import api from '../services/api';

export default function Body () {
  const [desmotivation, setDesmotivation] = useState({
    phrase: 'fail to load',
    thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Ffail.html&psig=AOvVaw1JWlloe-SNJqdUqrTr0fN9&ust=1648424988233000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDaiuH75PYCFQAAAAAdAAAAABAD',
  });

  useEffect(() => {
    async function getDesmotivation () {
      const { data } = await api.get('/');
      setDesmotivation(data);
    }
    getDesmotivation();
  }, []);

  return (
    <>
    <Box mt={2} mb={3}>
        <Typography sx={{ 
          fontSize: {xs: 'medium', md: 'xx-large'},
          fontFamily: 'Montserrat'  
        }}>
          {desmotivation.phrase}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <CardImage desmotivationImage={ desmotivation.thumbnail }/>
      </Box>
    </>
  );
}
