
/* Set the width of the sidebar to 250px (show it) */
 function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 

  function handleJson(json) {
    var temp = json.results;
    let filmsMenu = document.getElementById('mySidepanel');
    let filmInfo = document.getElementById("filmInformation");
    for(i = 0 ; i < temp.length; i++){
       obj = temp[i];
       console.log(obj.title);

       var element = document.createElement('a');
       element.text = obj.title;
       element.href = obj.url;

       var created = document.createElement('p');
       created.innerText = "Created: " + obj.created;

       var director = document.createElement('p');
       director.innerText = "Director: " + obj.director;

       var edited = document.createElement('p');
       edited.innerText = "Edited: " + obj.edited;

       var episode_id = document.createElement('p');
       episode_id.innerText = "Episode Id: " + obj.episode_id;

       var opening_crawl = document.createElement('p');
       opening_crawl.innerText = "Opening Crawl: " + obj.opening_crawl;


       filmsMenu.appendChild(element);
       filmInfo.appendChild(created);
       filmInfo.appendChild(director);
       filmInfo.appendChild(edited);
       filmInfo.appendChild(episode_id);
       filmInfo.appendChild(opening_crawl);
       console.log(obj.url);
    }
    //console.log(temp.length);
    //console.log(json.parse("title"));
  }


let url = "https://swapi.dev/api/films/"

fetch(url)
    .then(res => res.json())
    .then(json => handleJson(json))



