import { TableRow, TableCell } from '@mui/material';
//
import EmptyContent from '@/components/empty-content';

interface ITableNoData {
  isNotFound: boolean;
}

export default function TableNoData({ isNotFound }: ITableNoData): JSX.Element {
  return (
    <TableRow>
      {isNotFound ? (
        <TableCell colSpan={12}>
          <EmptyContent
            title="No Data"
            sx={{
              '& span.MuiBox-root': { height: 160 },
            }}
            description=""
          />
        </TableCell>
      ) : (
        <TableCell colSpan={12} sx={{ p: 0 }} />
      )}
    </TableRow>
  );
}
