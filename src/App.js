import { ProductProvider } from './context/ProductContext';
import { UserProvider } from './context/UserContext';
import Routes from './Routes';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <Routes />
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
