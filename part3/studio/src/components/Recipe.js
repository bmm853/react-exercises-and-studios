const RecipeAuthor = () => {
   let authorLink = "https://www.budgetbytes.com/about/";
   let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-SQ-380x380.jpg";
   let authorName = "Beth Moncel";

   return (
      <div>
         <img src={authorPhoto} alt = "Beth Moncel 2022" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>About Beth</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["shredded purple cabbage", "carrots", "green onion", "tahini", "grated fresh ginger"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Crunchy Cabbage Salad</h1>
            <p>crunchy red cabbage and carrots coated in a yummy sesame ginger dressing</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.budgetbytes.com/wp-content/uploads/2012/02/Crunchy-Cabbage-Salad-dressing-V2.jpg" alt="Crunchy Cabbage Salad in a white serving dish with two forks, drizzled with sesame ginger dressing" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}