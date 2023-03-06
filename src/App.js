import logo from './logo.svg';
import './App.css';
import Container from './templates/Container';
import Login from './login/Login';
import NewLogin from './login/AdminLogin';

function App() {
  return (
    <Container className="Apps">
      <h1 className='welcome'>WELCOME TO AURIONPRO LMS</h1>
      <img className='image_aurion' src={require('./Mogo_lms.jpg')} alt='Logo'   />
      <Login />
    </Container>
     
  );
}

export default App;
