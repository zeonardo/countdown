import Content from './components/Content';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

/* const images = {
  small: 'https://source.unsplash.com/480x853/?time',
  medium: 'https://source.unsplash.com/768x1024/?time',
  large: 'https://source.unsplash.com/1366x768/?time'
} */
const background = 'https://source.unsplash.com/1280x720/?time'

function App() {
  return (
    <>
      <div className="App">
        <Header>
          <Logo />
          Countdown
        </Header>
        <Content  background={background} /* images={images} */ align='center'>
          <Countdown/>
        </Content>
        <Footer>
          © 2022 - zeonardo
        </Footer>
      </div>
    </>
  );
}

export default App;

