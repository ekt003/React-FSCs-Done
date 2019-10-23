//Function to 'Render' for our HelloWorld React Component
/**
  We will set a React render method to this function.
  A React render method will usually generate appropriate
  HTML or JSX and return it.
  
  Notice the syntax of this is not valid JS, but more like HTML. 
  
  React has a special syntax called JSX which looks like HTML
  but not stored as a string. 
  
  When React calls this, it will convert the JSX/HTML into real
  HTML behind the scenes in a very fast way using a virtual DOM. 
  
  JSX is an HTML/XML like syntax in JS that also allows for
  JS expressions such as variable names. 
  
  JSX let's us write the structure we want on the page, but
  more securely (limiting injection and other security issues)
  and easily than making our own HTML strings. 
  
  JSX can use JS expressions by the use of curly braces.
  For example <p> {user.name} </p> would put the user.name
  variable inside of a <p> tag. 
  Similarly, <p> { user('name') } </p> would call a user function
  with the parameter 'name' and put the return value into the <p> tag.
  
  JSX also let's us reference React Components. 
  For example, if we have a React Component called CustomDiv,
  we could create elements of that (and subsequently call their render functions)
  inside of our JSX.
  It might look like this
  <div>
    <CustomDiv />
  </div>
  
  The following function is fairly simple as it
  just generates <div> Hello World! </div> 
  any time someone adds a <HelloWorld /> tag to the page.
**/
//React - Functional State Component (FSC)
// An FSC is a function that returns JSX (and may contain logic to do it)
const HelloWorld = () => {
  return (
    <div>
      Hello World!
    </div>
  );  
};


const init = () => {
  //ReactDOM.render allows us to 'render' React components
  //to the page. 
  /**
    ReactDOM.render will generate or update HTML on the page
    very quickly with the new structure given.
    
    The first argument is the JSX to render to the page
    and all subsequent JSX elements. The JSX will be 
    converted into normal valid HTML. 
    
    The second argument is where on the page to add it.
    
    In this example, we are adding a <HelloWorld /> JSX
    tag to the app div. Since <HelloWorld /> is JSX, 
    it will get converted to HTML by calling the HelloWorld
    component function. That function will give back
    the HTML for the this element (or more JSX that will
    also be converted to HTML).
  **/
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
  );  
};

window.onload = init;