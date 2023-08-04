import React from 'react';
import styles from "./Description.module.css";

function RecipeAuthor() {
    let authorLink = "https://www.budgetbytes.com/crunchy-asian-salad/";
    let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-120x120.jpg";
    let authorName = "Beth";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Chef Beth" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Budget Bytes</a> 
            </div>
        </div>
    );
} 

class RecipeDescription extends React.Component {
    render() {
       return(
            <div> 
                <div>
                    <h1>Crunchy Cabbage Salad</h1>
                    <p>Shredded cabbage and carrot salad with sesame ginger dressing</p>
                </div>
                <RecipeAuthor />
            </div>
       );
    }
 }

 export default RecipeDescription;
