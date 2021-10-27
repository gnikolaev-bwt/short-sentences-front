import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from 'src/routes';

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to={Routes.Home}>
          Short sentences
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Using public <b>Amazon API</b>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
