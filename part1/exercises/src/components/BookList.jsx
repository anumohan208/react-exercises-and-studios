export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://prodimage.images-bn.com/pimages/9781250178657_p0_v3_s192x300.jpg";
   let book2 = "data:image/jpeg;base64,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";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2le0a7LLXSq9vXkeqib0XjGRUff0xf-uK8kDC0wwl7x7aIQQ-sZwhY0ioYmgciCIjUw&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Women" />
         <img src={book2} alt="Angel Falls" />
         <img src={book3} alt="Listen for the lie" />
      </div>      
   );
}