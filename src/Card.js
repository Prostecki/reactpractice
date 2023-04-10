function Card() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kitsu.io/api/edge/anime', false);
    xhr.send();
    let posts = JSON.parse(xhr.responseText)['data']
    // console.log(posts.map(element => console.log(element)));

    return (
        <>
            {posts.map( item => (
                <div photo={item.attributes.posterImage.large} title={item.attributes.titles.en} /> 
            ))}
        </>
    );
}

export default Card;