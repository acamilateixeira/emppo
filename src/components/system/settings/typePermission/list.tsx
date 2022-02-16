import { TableContainer, TableHead, Table, TableCell, TableRow, TableBody } from '@material-ui/core';
import { Type } from '../../../../models/type';

interface ListProps {
  edit: (id: Type) => void;
  delete: (id: Type) => void;
  type: Type[];
}

export function List({ edit, delete, type }: ListProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* <TableRow>

        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
