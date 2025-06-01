
import './App.css';
import Header from './components/Header';
import { HomePage } from './Pages/HomePage';
import { Route, Routes } from 'react-router';
import { RelatedBlogsPage } from './Pages/RelatedBlogsPage';
import { CategoryPage } from './Pages/CategoryPage';
import { TagsPage } from './Pages/TagsPage';

function App() {
  // console.log("inside app comp")
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blogs/:blogId" element={<RelatedBlogsPage/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
        <Route path='/tags/:tag' element={<TagsPage/>} />
      </Routes>
      {/* <Body/>
      <Footer/> */}

    </div>
  );
}

export default App;
