import { useState } from 'react';
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'



function App() {
  const [amount, setAmount] = useState(0);
  const [from ,setFrom]=useState("usd")
  const [to ,setTo]=useState("inr")
  const [convertedAmount ,setConvertedAmount]=useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className=" align-center items-center w-full h-full  flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/19393276/pexels-photo-19393276/free-photo-of-dagestan-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full mb-1">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currenyOptions={options}
                            onCurrnecyChange={(currency)=>setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currenyOptions={options}
                            onCurrnecyChange={(currency)=>setTo(currency)}
                            selectCurrency={from}
                            amountDisable                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {from.toLowerCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
