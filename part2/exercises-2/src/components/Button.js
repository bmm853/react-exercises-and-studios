import './styles.css';

function Button() {
   const onLearnMore = () => {
      alert("Ahoy!");
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;