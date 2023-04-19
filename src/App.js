import './main.css';
import ShopItemFunc from './ShopItemFunc';

function App() {
// Внутри компонента App
return (
  <div className="App">
  <header className="App-header">
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
  </header>
  </div>
)
}

export default App;