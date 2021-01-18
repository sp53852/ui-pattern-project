
/* Set the width of the sidebar to 250px (show it) */
 function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 

// Startwars API declaration.
  let url = "https://swapi.dev/api/films/"

// fetching movie info 
  fetch(url)
      .then(res => res.json())
      .then(json => handleJson(json))

// number of movies
  var numberOfFilms;

//Clear div tags (hide).
  function blockDivTags(){
    for(i=0;i<numberOfFilms;i++){
    document.getElementById("div" + i).style.display = "none";
    }
  }

  //event handler for displaying movie information
  function myEventHandler(e) {
    blockDivTags();
    var id = e.target.id;
    var element = document.getElementById("div"+id);
    //console.log(element);
    element.style.display = 'block';
  }

  //create content for film menu and film information
  function handleJson(json) {
    var temp = json.results;
    let filmsMenu = document.getElementById('mySidepanel');
    let filmInfo = document.getElementById("filmInformation");
    numberOfFilms = temp.length;

    for(i = 0 ; i < numberOfFilms; i++){
       obj = temp[i];
       console.log(obj.title);

       // create a div tag for each film
       var divElement = document.createElement('div');
       divElement.id = "div" + i;
       divElement.style.display = 'none';

       var movieName = document.createElement("h2");
       movieName.innerText = obj.title;

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

       
      // apend all elements to div tag
      divElement.appendChild(movieName);
      divElement.appendChild(created);
      divElement.appendChild(director);
      divElement.appendChild(edited);
      divElement.appendChild(episode_id);
      divElement.appendChild(opening_crawl);

      //apend div tag to film info
      filmInfo.appendChild(divElement);

      // End of div creation
      

      // Create anchors for side panel/films menu
       var element = document.createElement('a');
       element.text = obj.title;
       element.id = i;
       element.href = "#";

       // Create event listener for side panel
       element.addEventListener('click', myEventHandler);
       
      // append films menu
       filmsMenu.appendChild(element);

    }
  }
