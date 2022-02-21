async function apiCall(url) {


    //add api call logic here
    try {
        
        let res = await fetch(url);

        let data = await res.json();

        return data; 

    } catch (error) {
        console.log("error:",error);
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(element => {
        
        let div = document.createElement('div');
        div.id="news"

        let image = document.createElement('img');

        image.src = element.urlToImage;

        let title = document.createElement('div');
        title.innerText =element.title;

        let description = document.createElement('div');
        description.innerText =element.description;

        div.append(title,description,image);

        div.onclick = () =>{
            localStorage.setItem('article',JSON.stringify(element));
            window.location.href = "news.html";
        }

        main.append(div);
    });
}


export { apiCall, appendArticles }