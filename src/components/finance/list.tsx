import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Tooltip,
  IconButton,
  TableFooter,
  TablePagination,
  Paper,
} from '@material-ui/core';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { Finance } from '../../models/finance';
import { PaginacaoVirtual } from '../paginacaoVirtual';

interface ListProps {
  edit: (finance: Finance) => void;
  delete: (finance: Finance) => void;
  finances: Finance[];
}

export function List({ edit, delete: deleteFinance, finances }: ListProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, finances.length - page * rowsPerPage);

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
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Update by user</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? finances.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : finances
          ).map(finance => (
            <TableRow key={finance.id}>
              <TableCell>{finance.id}</TableCell>
              <TableCell>{finance.name}</TableCell>
              <TableCell>{finance.description}</TableCell>
              <TableCell>{finance.type.description}</TableCell>
              <TableCell>{finance.category.description}</TableCell>
              <TableCell>{finance.user}</TableCell>
              <TableCell align='center'>
                <Tooltip title='Edit'>
                  <IconButton onClick={() => edit(finance)}>
                    <FaEdit size={14} />
                  </IconButton>
                </Tooltip>

                <Tooltip title='Delete'>
                  <IconButton onClick={() => deleteFinance(finance)}>
                    <FaTrash size={14} />
                  </IconButton>
                </Tooltip>
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
              count={finances.length}
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
