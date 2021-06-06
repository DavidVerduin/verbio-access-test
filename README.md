<h1>David Verduin Cortés Verbio Test</h1>
<h2>Description</h2>
<p>
  This is an app with a login and a chat page. It´s made in AngularJS using latest tech as ES2020, Webpack for the bundling,
  Jest for the test and ESLint for the linting. 
</p>
<h2>Architecture</h2>
<p>
  The project is based on components, so we created login and chat components. They are instanciated by the router, which is defined in app.routing.js.
  The app module is the one who initializes every library needed, which is only @uiRouter for the routing.
  Component module, which is a dependency of the App Module, is the one who owns the components created.
</p>
<p>Backend API_URL variable is created in the webpack files so it can be easily changed.</p>
<p>
  All the project is documented with JSDoc, which I´ve found the greatest way to document (and pseudo-type, since we are not using TypeScript) the code
</p>
<h2>Functionality flow</h2>
<p>
  There is a rigid way of communication between the different file types. 
  HTML is handled by Controllers, which are are a part of the Components. Those Components are instanciated in the HTML via tag or via router.
  Controllers don´t make any computation non related to their HTML. In order to make those computations, Factories are called<strong>*1</strong>. 
  Those Factories are responsible of every data handling, and are the only ones who can interact with Services.
  Services only purpose is making HTTP requests.
</p>

<h2>PD:</h2>
<ul>
  <li>*1: Factories and Services in AngularJS have very subtle differences (some people use them indistinctly), so I like to divide them this way as I feel is 
  easier to understand and work with.</li>
  <li>You might be curious about why Factories are defined as functions stored in a constant and Services are defined as Classes 
  (when they basically turn out to be the same thing at the end of the day). 
  It´s because it is recommended to do so in the docs <a href="https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md">AngularJS Style Guide</a></li>
</ul>