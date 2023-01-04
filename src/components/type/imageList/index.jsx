import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

const ImageListComponent = ({ setType, data, page }) => {
  console.log();
  return (
    <ImageList sx={{ width: '100%' }}  cols={6} gap={5}>
      {data.map((item) => (
        <ImageListItem key={item.content.content_idx} sx={{ width: '220px', height: '220px'}} >
          <img
            src={item.content.poster_url || item.content.content_url}
            srcSet={item.content.content_url || item.content.poster_url}
            alt={item.creator_nick}
            style={{height:"220px", objectFit: 'contain'}}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.creator_profile_id || ''}
            subtitle={item.creator_profile_id || ''}
           
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.creator_nick}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageListComponent;
