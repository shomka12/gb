import './style.css';

const bet=25
// let sliderMoney=1000000
const handleChange = (event) => {
  return console.log(event.target.value)
}


function App() {
  return (
    <div className="App">
      <form>
        <div class="main__calculation">
            <div class="main-slider">
                <p>Сколько нужно</p>
                <input class="main-slider__money" type="range" min="100000" max="3000000" onChange={handleChange}/>
                <p>Срок кредита {handleChange}</p>
                <input class="main-slider__term" type="range" min="6" max="72"/>
            </div>
            <div class="main-display">
                <h5>Срок</h5>
                <span class="main-display__header">{bet}%</span>
                <span></span>
            </div>
        </div>
        </form>
    </div>
  );
}

export default App;
