import styles from "./ButtonComponent.module.css";

const  ButtonComponent = ({onButtonClick}) => {
    const buttonNames = ['c', '1', '2', '+', '3', '4', '_', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
return (
   <div className={styles.buttonContainer}>
    {buttonNames.map(buttonName=> <button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button> )}


    </div> 
)

}
export default ButtonComponent;