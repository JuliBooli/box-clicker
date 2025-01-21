import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const [addedValue, setAddedValue] = useState(1);

    const [amountOfButtons, setamountOfButtons] = useState(1);

    const [buttonLevel, setButtonLevel] = useState(1);

    return (
        <>
            <h1>Points Earned: {Math.floor(count)}</h1>
            <h2>Box Clicker</h2>
            <a className="button">
                {Array.from( {length: amountOfButtons}).map((_, i) =>
                    <div>
                        <button key={i} className="button" onClick={() => setCount((count) => count + addedValue)}/>
                        <button className={"buyButton"} onClick={() => setButtonLevel((buttonLevel) => buttonLevel + 1)}>
                            Upgrade Button
                        </button>
                    </div>
                )}
            </a>
            <button className={"upgradeButton"} onClick={() => setAddedValue((addedValue) => buttonLevel/10 * addedValue + 1)}>
                Upgrade
            </button>
            <button className={"buyButton"} onClick={() => setamountOfButtons((amountOfButtons) => amountOfButtons + 1)}>
                Buy Box
            </button>
        </>
    )
}

export default App
