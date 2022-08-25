import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import GlobalStyle from './styles/global'

function App() {
  const [backgroundImage, setBackgroundImage] = useState('')
  
  const fetchBackground = () => {
    fetch(`https://source.unsplash.com/1600x900/?time`)
      .then(response => {
        if(response.ok){
          setBackgroundImage(response.url)
        }
        else{
          console.error('error fetching background', response)
        }
      })
      .catch(error => {
        console.error('error fetching data from unsplash', error)
      })
  }

  useEffect(() => {
    fetchBackground()
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Logo />
          Countdown
        </Header>
        <Content background={backgroundImage} align='center'>
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

