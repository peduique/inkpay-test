As requested in the document, I've created the application using the React CLI, installed the React Router and Redux dependencies.

I created the home and counter components and also a menu component in which each click on the options increased a new record in the store. Simple. However, I thought that the increment should happen only in a component switch and not just in the click of the menu.

So I used the hook useLocation to get the pathname, the useState to store it in the state and the useEffect to capture the transition between the components. If there is a transition, I increment it on the redux store. 