import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Layout from './Layout';
import EditorWindow from './components/EditorWindow';
const Main = () => {
  return (
    <>
      <Layout>
        <h1>VsEdit++</h1>
        <EditorWindow />
      </Layout>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
