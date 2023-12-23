import { useState } from "react";
import styles from "./App.module.css";
import ButtonComponent from "./components/ButtonComponent";
import Display from "./components/Display";

function App() {

  const [calVal, setCalVal] = useState("");
const onButtonClick = (buttonText) => 
{
  if(buttonText ==='c'){
    setCalVal("");
  }else if (buttonText ==='='){
   const result = eval(calVal);
   setCalVal(result);
  }else{
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }
}

  return (
   <div className={styles.calculator}>
     <Display displayValue={calVal}></Display>
    <ButtonComponent onButtonClick={onButtonClick} ></ButtonComponent>

   </div>
  )
}

export default App
