import Header from './components/Header';
import Nav from './components/Nav';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Slider />
      <Products sectionId="pizzas" title="Пицца" fetch="pizzas" />
      <Products sectionId="snacks" title="Закуски" fetch="snacks" />
      <Products sectionId="desserts" title="Десерты" fetch="desserts" />
      <Products sectionId="drinks" title="Напитки" fetch="drinks" />
    </div>
  );
}

export default App;
