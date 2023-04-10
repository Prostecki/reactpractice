// import Card from './Card.js';

function Card({photo, title, description}) {
  return (
    <div className="card-box">
      {/* <div>{key}</div> */}
      <div>{title}</div>
      <img className="widthPic" alt="pic" src={photo}/>
      {/* <div>{description}</div> */}
    </div>
  );
}

// function OneOfCard({id, photo, title, description}) {
//   return (
//     <div>
//       <div>{id}</div>
//       <div>{title}</div>
//       <img className="widthPic" alt="pic" src={photo} />
//       <div>{description}</div>
//     </div>
//   );
// }

function sendRequestGet(url) {

  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send()

  return xhr.responseText;

}

// function RenderCard(id) {
  
//   let json = sendRequestGet("https://kitsu.io/api/edge/anime" + id);
//   let posts = JSON.parse(json);

//   console.log(posts(id));

//   posts(id).map(
//     <OneOfCard
//     title={id.attributes.titles.en_jp}
//     photo={id.attributes.posterImage.medium}
//     description={id.attributes.description}
//     />
//   );
// }

function Catalog() {

  let json = sendRequestGet("https://kitsu.io/api/edge/anime");

  let posts = JSON.parse(json)['data'];

  const items = [];

  let key = 0;

  posts.forEach((item) => {

    items.push(

    <Card
      key={key}
      title={item.attributes.titles.en_jp}
      photo={item.attributes.posterImage.medium}
      // description={item.attributes.description}

    />)

    key++

    });


  return (
    <>
      <div className="wrap-box">
          {items}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Catalog />
    </>
  );
}

export default App;