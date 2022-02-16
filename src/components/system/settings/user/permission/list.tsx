import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Tooltip,
  IconButton,
  Typography,
  TableFooter,
  TablePagination,
  Paper,
} from '@material-ui/core';
import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Type } from '../../../../../models/type';
import { PaginacaoVirtual } from '../../../../../components/paginacaoVirtual';
import { usePermission } from '../../../../../hooks/usePermission';

interface ListProps {
  edit: (type: Type) => void;
  delete: (type: Type) => void;
  type: Type[];
}

export function List({ type, edit, delete: deleteType }: ListProps) {
  const { permissions } = usePermission();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, type.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? permissions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : permissions
          ).map(type => (
            <TableRow key={type.id}>
              <TableCell>{type.id}</TableCell>
              <TableCell>{type.description}</TableCell>
              <TableCell align='center'>
                <Typography>
                  <Tooltip title='Edit'>
                    <IconButton onClick={() => edit(type)}>
                      <FaEdit size={14} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title='Delete'>
                    <IconButton onClick={() => deleteType(type)}>
                      <FaTrash size={14} />
                    </IconButton>
                  </Tooltip>
                </Typography>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              labelRowsPerPage='Registros por página'
              labelDisplayedRows={({ from, to, count, page }) =>
                `${from}-${to} de ${count} - Página ${++page}`
              }
              rowsPerPageOptions={[5, 10, 15]}
              colSpan={4}
              count={type.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={PaginacaoVirtual}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
