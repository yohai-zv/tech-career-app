import Login from './pages/Login/Login';
import Home from './HomePage/Home';
import ActionMenu from './pages/ActionMenu';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Home/>
      <Login />
      <ActionMenu />
    </Layout>
  );
}

export default App;
