import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className='App'>

      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Hi😄</h1>
      <Post username="music" caption="test1" imageUrl="https://t1.daumcdn.net/cfile/tistory/9960C8455A901F7E29" />
      <Post username="hello" caption="test2" imageUrl="https://source.unsplash.com/random"/>
      <Post username="tree" caption="test3" imageUrl="https://source.unsplash.com/random/tree"/>
      

      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
