import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IRoutes } from 'src/routes';

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to={IRoutes.Home}>
          Short Sentences
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
