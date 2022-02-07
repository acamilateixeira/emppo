import { MenuOption } from './menuOption';
import { FaBook, FaHome, FaProjectDiagram } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { MdPeople, MdWork } from 'react-icons/md';

export function PainelOption() {
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        style={{ marginBottom: 30, padding: 10 }}
      >
        <MenuOption to='/' title='Home' icon={FaHome} />
        <MenuOption to='/' title='Sobre' icon={MdPeople} />
        <MenuOption to='/' title='Educação' icon={FaBook} />
        <MenuOption to='/' title='Experiência' icon={MdWork} />
        <MenuOption to='/' title='Projetos' icon={FaProjectDiagram} />
      </Grid>
    </>
  );
}
