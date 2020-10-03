<p align="center">
<a href="https://marvel-jolisdegats.netlify.app/ ">
  <img src="https://res.cloudinary.com/dqp905mfv/image/upload/v1601687272/portfolio/ReadMe/marvel_kuviwj.jpg" alt ="Marvel Portfolio Project - Banner"  />
  </a>
</p>

<h1>Marvel project (React/Node)</h1>
<br/>
<p> Personnal fullstack project based on the <a href=https://developer.marvel.com/>Marvel Developper API</a>. You can find the Backend code I made <a href=https://github.com/jolisdegats/marvel-backend> here</a>.<p><p>
The project is currently hosted on Netlify (frontend) and Heroku (backend). Have a look at the live demo below and feel free to give me some feedback. </p>

<h3>
<a href="https://marvel-jolisdegats.netlify.app/">Demo</a>
</h3>
<br/>
<br/>
<h2>Features</h2>
<ul>
  <li>Get the list of all existing comics and characters from the Marvel Universe with dynamic pagination</li>
  
  <li>On a character&apos;s page, get the list of all comics where it appears</li>
  
  <li>On a comic&apos;s page, get the list of character you will find in it</li>
  
  <li>Add characters or Comics to your favlist and find them all on the "Favs" page</li>
 
  </ul>







<h3>Further development ideas</h3>
<ul>
  <li>Reduce loading time</li>
  <li>Improve searchbar to avoid content loading while typing and add filters</li>
  <li>Refactor, implement useContext or Redux and rework CSS with CSS-preprocessors (SCSS/SASS)</li>
  <li>Add authentication (account creation, favs...)</li>
  </ul>


<br/>
<h2>Stack</h2>

Initialized with `create-react-app` and made with the following stack :
Frontend : React, axios, react-pagination, react-router-dom
Backend : NodeJS, cors, dotenv, express, express-formidable, mongoose


<br/>
<h2>Install</h2>

Just run `yarn` in your console to install all dependencies and `yarn start` to launch. Local demo should open on http://localhost:3000.


<h3>Environment variables</h3>

<h5>IMPORTANT: DO THIS OR YOUR PROJECT WON&apos;T RUN</h5>
<p>In the <b>src</b> folder, create a <b>.env</b> file. </p>

Copy/paste the following 
`REACT_APP_APIURL=https://marvel-backend-jolisdegats.herokuapp.com` 
This will set up the variables I declared in the project to make the backend calls. Don&apos;t forget to relaunch your frontend if it was already running before adding or modifiying your .env file. For more info, please refer to <a href=https://github.com/jolisdegats/marvel-backend>my backend repo</a>.

In case you&apos;d like to run the backend locally as well, just replace `https://marvel-backend-jolisdegats.herokuapp.com/` with `http://localhost:3100` (3100 may change depending on which port your backend is running).
<br/>

## Contact
💼 Find me on [LinkedIn](https://www.linkedin.com/in/julieszwarc/ "LinkedIn")

🦄 Stop by my [portfolio](https://julieszwarc.com/ "portfolio")

👩🏼‍💻 Take a look at my [GitHub](https://github.com/jolisdegats "GitHub")
<br/>

[![Marvel banner end](https://res.cloudinary.com/dqp905mfv/image/upload/v1601688053/portfolio/ReadMe/marvel-end_dyrjao.jpg "Marvel banner end")](https://marvel-jolisdegats.netlify.app/ "Marvel banner end")
