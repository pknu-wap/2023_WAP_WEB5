import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navigator">
      <a id="festival" link="축제페이지로이동"><strong>행사 목록</strong></a>
      <a id="party" link="파티페이지로이동"><strong>파티 목록</strong></a>
      <a id="login" link="로그인페이지로이동">
        <button title='log in' color="lightgray">버튼</button>
      </a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </nav>
  );
}

export default App;
