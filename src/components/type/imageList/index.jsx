import { Divider, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React, { useCallback } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { TablePaginationCustom } from '@/components/table';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';

const ImageListComponent = ({ setType, data, page, total, limit, modalType }) => {
  const { setModal } = useGlobalModal();
  const onChangeOffset = useCallback(
    (e, newPage) => {
      console.log(newPage, limit);
      setType({ offset: newPage * limit });
    },
    [limit, setType]
  );

  const onChangeLimit = useCallback(
    (e) => {
      console.log(e.target.value);
      setType({ limit: parseInt(e.target.value, 10) });
    },
    [setType]
  );

  return (
    <>
      <TablePaginationCustom
        count={total}
        page={page}
        rowsPerPage={limit}
        onPageChange={onChangeOffset}
        onRowsPerPageChange={onChangeLimit}
      />
      <Divider variant="middle" sx={{ margin: '15px 0' }} />
      <ImageList sx={{ width: '100%' }} cols={6}>
        {data &&
          data.map((item) => (
            <ImageListItem key={item.content.content_idx} sx={{ alignItems: 'center' }}>
              <img
                src={item.content.poster_url || item.content.content_url}
                srcSet={item.content.content_url || item.content.poster_url}
                alt={item.creator_nick}
                style={{ height: '220px', width: '220px', objectFit: 'contain' }}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.creator_profile_id || ''}
                subtitle={item.creator_profile_id || ''}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.creator_nick}`}
                    onClick={() =>
                      setModal({
                        type: modalType,
                        props: {
                          // cb: () => alert('modal test'),
                        },
                      })
                    }
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
      <Divider variant="middle" sx={{ margin: '15px 0' }} />

      <TablePaginationCustom
        count={total}
        page={page}
        rowsPerPage={limit}
        onPageChange={onChangeOffset}
        onRowsPerPageChange={onChangeLimit}
      />
    </>
  );
};

export default ImageListComponent;
