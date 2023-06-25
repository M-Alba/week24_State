import './App.css';
import './components/RateCard/RateCard.css';
import RateCard from './components/RateCard/RateCard';
import rates from './rateData';

function App() {
    return (
        <div className="App">
            {
                rates.map((rate) => 
                    <RateCard
                        key = { rate.id }
                        name = { rate.name } 
                        price = { rate.price } 
                        speed = { rate.speed }
                        traffic = { rate.traffic } 
                        isSelected = { rate.isSelected }
                    />
                )
            }
        </div>
    );
}

export default App;
