import logo from './logo.svg';
import './App.css';
import { rpc, sc, u, Neon} from "@cityofzion/neon-core";

const url = "http://seed1t4.neo.org:20332";


function App() {
  const rpcClient = new rpc.RPCClient(url);
console.log(rpcClient)

rpcClient.getNep17Balances("NMo2NZqzmpHbwX61FpimmfkVdCPzYgCvdk").then(res => {
  console.log(res)
}



) 
rpcClient.getNep17Transfers("NMo2NZqzmpHbwX61FpimmfkVdCPzYgCvdk").then(res => {
  console.log(res)
}
)
const contractHash = "0x0d33c38d1a85232200ef6fb81e4423054f7119c4"


rpcClient.invokeFunction(contractHash, "getNumber").then(res => {
  console.log("Calling function [getNumber] =>", res)
}
)
// Get an instance of Neoscan so we can find a working node

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
