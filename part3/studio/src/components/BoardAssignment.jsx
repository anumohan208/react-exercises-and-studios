import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      { label: "Breakfast Ideas", value: "breakfast" },
      { label: "Lunch Ideas", value: "lunch" },
      { label: "Dinner Ideas", value: "dinner" }];

   const [boardName, setBoardName] = useState('no boards yet!');

   const handleChange = (event) => {

      setBoardName(event.target.value);
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map((board, index) => (
               <option key={index} value={board.value}>{board.label}</option>
            ))}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
