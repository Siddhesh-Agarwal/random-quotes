import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import './App.css'

function App() {
    const [quoteData, setQuoteData] = useState({});
    const generate = async () => await fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setQuoteData(data);
        })
        .catch(err => {
            console.log(err)
        })

    useEffect(() => {
        generate();
    }, [])

    return (
        <div className="App">
            <div className="box">
                <h1>Random Quote Generator</h1>
                {
                    (quoteData.content) ? (
                        <div>
                            <q>{quoteData.content}</q>
                            <p>- {quoteData.author}</p>
                        </div>
                    ) : (
                        <div>
                            <ClipLoader
                                color={"#123abc"}
                                loading={true}
                                // cssOverride={override}
                                size={72}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                            <p>Loading...</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App
