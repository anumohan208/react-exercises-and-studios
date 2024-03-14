export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://prodimage.images-bn.com/pimages/9781250178657_p0_v3_s192x300.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOrnyYkw6uZj2DJFRYZAclwGwee0BtbJh91UnDVBA0YsTHEYghgEUUWwi0SSRLgBBuIc&usqp=CAU"
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