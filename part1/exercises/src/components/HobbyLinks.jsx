export default function HobbyLinks() {
    const hobbyLinks = [
        'https://www.cnn.com/cnn-underscored/home/how-to-clean-dishwasher',
        'https://forum.wordreference.com/threads/empty-the-dishwasher.3374914/'
      ];
    
      return (
        <div>
          <h2>Favorite Hobby Websites:</h2>
          <ul>
            {hobbyLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Hobby Website {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
 }