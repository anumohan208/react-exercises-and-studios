import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
      
    return(
       <div> 
        <div>
           <h1>Tomato Soup</h1>
           <p>Tomato soup is a soup with tomatoes as the primary ingredient. It can be served hot or cold, and may be made in a variety of ways. It may be smooth in texture, and there are also recipes that include chunks of tomato, cream, chicken or vegetable stock, vermicelli, chunks of other vegetables and meatballs.</p>
        </div>
        <RecipeAuthor />
     </div>
       );
    }
 }

    function RecipeAuthor() {
    let authorLink = "https://smittenkitchen.com/";
    let authorPhoto = "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2021/07/YT_Thumb_MacCheese_v2.jpg?resize=640%2C360&ssl=1";
    let authorName = "Deb Perelman";
    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Deb Perelman" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Smitten Kitchen</a> 
        </div>
        </div>     
    );
 }

 export default RecipeDescription;