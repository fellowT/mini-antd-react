import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e)=> {e.preventDefault();alert(123)}} className="custom">Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled> Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger</Button>
        <Button  btnType={ButtonType.Link} href='http://ww.baidu.link' > Baidu Link</Button>
        <Button disabled btnType={ButtonType.Link} href='http://ww.baidu.link' > Disabled Link</Button>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <hr/>
        <code>
          const a = 'b'
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
