import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'src/routes';

export const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to={RoutesEnum.Home}>
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
