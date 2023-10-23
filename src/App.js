import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
function App() {
  const [todo,setTodo] = useState('');
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
    </div>
  );
}

export default App;
