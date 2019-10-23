/**
  Essentially handleChange is a custom function in our HelloUser component
  mapped to this handleNameChange function. 
  
  Then in our Function Stateless Component (FSC) function for HelloUser, 
  we set the onChange event equal to the this handleChange function.
  
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
const handleNameChange = (e) => {
  ReactDOM.render(
    <HelloUser username={e.target.value} />,
    document.getElementById('app')
  );
};


//Creating a new React Functional Stateless Component (FSC)
/**
  This will create a component we can call in JSX generates HTML
  or other JSX that will be rendered.
  
  The following will create a React component called 
  HelloWorld that, when we make <HelloWorld /> tags,
  will render out HelloWorld JSX.
  
  React has special events different from the normal events. 
  Instead of onclick or onchange, React has custom events with camelcase
  that automatically set up listeners and scope. 
  These are events like onClick and onChange. They work similarly, but
  have a lot of special code involved. 
  
  handleChange is a custom function we made and attached
  to HelloUser components that we can call to have certain events fire.
**/
const HelloUser = (props) => {
  //onChange is a custom react listener for element.onchange. 
  //We can embed it in elements, but it doesn't get rendered into the HTML
  //Instead it gets interpreted by JSX and adds a listener
  return (
    <div>
      Hello {props.username}
      <p>Change Name:</p>
      <input type="text" value={props.username} onChange={handleNameChange} />
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

  In this example, we are adding a <HelloUser /> JSX
  tag to the app div. Since <HelloUser /> is JSX, 
  it will get converted to HTML by calling the HelloUser
  function. That function will give back
  the HTML for the this element (or more JSX that will
  also be converted to HTML).
**/
const init = () => {
  ReactDOM.render(
    <HelloUser username='Cody' />,
    document.getElementById('app')
  );
};


window.onload = init;