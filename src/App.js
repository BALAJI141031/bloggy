import './App.css';
import PostList from './features/posts/postList'
import CreatePost from './features/posts/createPostForm'

function App() {
  return (
    <div className="App">
      <CreatePost/>
      <PostList/>
      </div>
  );
}

export default App;
