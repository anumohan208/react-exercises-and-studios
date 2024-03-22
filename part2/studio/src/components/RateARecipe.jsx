let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

export default function RateARecipe(props) {

  function GiveRating() {

    return props.rating>=1 || props.rating<=5 ?<h3>{stars[props.rating - 1]}</h3>:null;

 }
 
  return GiveRating();
}

//conditional to render stars based on a number provided in App.js 
