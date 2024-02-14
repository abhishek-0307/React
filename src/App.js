import ButtonComponent from "./components/functional-components/button/button";
import OrderList from "./components/functional-components/list/order-list/order-list";
import UnorderList from "./components/functional-components/list/unorder-list/unorder-list";
import Image from "./components/functional-components/image/image";
import TableComponent from "./components/functional-components/table/table";
function App() {
  return (
    
       <div>
        <h1>
          Hello World
        </h1>
        <ButtonComponent/>
        <OrderList/>
        <UnorderList/>
        <Image/>
        <TableComponent/>
        
        </div>
      
  );
}

export default App;
