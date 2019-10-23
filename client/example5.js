//controlling our state manually (though this could be done through libraries such as flux, redux or others)

/** State of our song list **/
const songState = {
  songs: []
};

//function to grab songs from our server and add them to the song container's state
const loadSongsFromServer = () => {
  const xhr = new XMLHttpRequest();  //new ajax request
  
  //function to parse the response and set the song container's state.
  const setSongs = () => {
    //parse response from server into JSON
    const songResponse = JSON.parse(xhr.response);
    
	//set our songState to have the songs array set to the array from the server.
    songState.songs = songResponse;
    
    /**
	  When the data is changed, we will re-render the components for the updated change.
	  This will automatically update what you see on the screen so the changes so up 
	  to the user immediately (though asynchronously in JS)
	  
	  When you have a small amount of data, this manual re-render is quick and 
	  keeps the code clean. 
	  
	  !!Although!!
	  If you have larger or more complex structures (not just a couple simple elements),
	  then this (FSCs) becomes much more expensive and slow. In those cases, 
	  using classes extending React.Component makes more sense. The code is more complicated,
	  but it is much more performant.
	  
	  React is working hard on making FSCs to be much more performance optimized in future
	  releases with the goal of moving towards them.
	**/
    ReactDOM.render(
      <SongContainer songs={songState.songs} />,
      document.getElementById('app')
    );
  };
  
  //set the ajax's onload function
  xhr.onload = setSongs;
  
  //set request to /getSongs
  xhr.open('GET', '/getSongs');
  
  //send request
  xhr.send();
};

//Creating a new React component
/**
  This will create a component we can call in JSX generates HTML
  or other JSX that will be rendered.
  
  The following will create a React component called 
  AddFriend that, when we make <AddFriend /> tags,
  will render out AddFriend JSX.
  
  React has special events different from the normal events. 
  Instead of onclick or onchange, React has custom events with camelcase
  that automatically set up listeners and scope. 
  These are events like onClick and onChange. They work similarly, but
  have a lot of special code involved. 
  
  Items passed in as attributes are called props.
  These will be inherited as this.props in children
  made by this element. 
**/
const Song = (props) => {
  //returns JSX based on the props passed in as attributes from SongContainers
  //This will be rendered out as HTML for each Song created
  return (
    <div>
      <h2>{props.artist} <i>{props.songTitle}</i></h2>
    </div>
  )
};

/**
  propTypes allows us to specify the variable type of custom
  props passed in from the parent. It will ensure the parent
  provides the correct variables and functions to the child element.
  
  PropTypes allow type checking on a variable.
  Check out prop type options here
  https://facebook.github.io/react/docs/typechecking-with-proptypes.html
**/
Song.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired
}

//Creating a new React component
/**
  This will create a component we can call in JSX generates HTML
  or other JSX that will be rendered.
  
  The following will create a React component called 
  AddFriend that, when we make <AddFriend /> tags,
  will render out AddFriend JSX.
  
  React has special events different from the normal events. 
  Instead of onclick or onchange, React has custom events with camelcase
  that automatically set up listeners and scope. 
  These are events like onClick and onChange. They work similarly, but
  have a lot of special code involved. 
  
  Items passed in as attributes are called props.
  These will be inherited as this.props in children
  made by this element. 
**/
const SongContainer = (props) => {
  //check if we have any songs
  //checks our props song list. The props are sent in by the attributes of the JSX. 
  // This means that something had to call <SongContainer songs={[someArray]} /> 
  // in order for props.songs to come in here as an array
  if(props.songs.length === 0) {
    return (
      <div>
        <h3>No Songs Yet!</h3>
      </div>
    );
  }
  
  //For each song, create a div structure of the song and store it in the songList array. 
  /**
    Inside of JSX, curly braces will replace the variable with its value or function call. This allows us to dynamically drop values into our JSX.
    
    The .map function loops through an array
    and generates a different array based on the return values.
    
    In this case, for each song, we create a Song component with the artist and title and return it (thus adding it) to the songList array
	
	This will trigger our JSX to create Song components and pass in artist and songTitle in a props object to those containers
  **/
  const songList = props.songs.map((song) => {
    return (
      <Song artist={song.artist} songTitle={song.title} />
    );
  });
  
  //return our song container JSX for the page
  //This will show the Song container JSX, then replace
  //{songList} with the Song containers created above.
  //The Song containers will trigger renders of the JSX in Song containers into HTML
  //The curly braces in JSX let us drop in a variable or function call and put in its value.
  return (
    <div>
      <h1> My favoritest songs ever!!@! </h1>
      {songList}
    </div>
  )
};

//ReactDOM.render allows us to 'render' React components
//to the page. 
/**
  ReactDOM.render will generate or update HTML on the page
  very quickly with the new structure given.

  The first argument is the JSX to render to the page
  and all subsequent JSX elements. The JSX will be 
  converted into normal valid HTML. 

  The second argument is where on the page to add it.
**/
const init = () => {
  ReactDOM.render(
    <SongContainer songs={[]} />,
    document.getElementById('app')
  );
  
  //kick off our call to get the latest data from the server
  loadSongsFromServer();
};

window.onload = init;