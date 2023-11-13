# MyAnimeSearch
The idea of the project was to make an web application that takes data from an endpoint on the jikan api that responds with a random anime from the myanimelist database. This api was chosen because it doesn't require an api key.

## Technologies
The technologies used were Reactjs for manipulating the DOM in a more easy way, I also used Vite for generating the files template of the project, and the configuration and setup for executing the project on a development environment and generating the code for production. The last technogie was Tailwindcss used for allowing changes on the styling of the app on a more easy and simple way.

## *******Difficulties*******
I encountered two main difficulties with this projects, the first was the error handing of the api, because, I didn't have the notion of what the api returned when there was an error on the request. I was able to make the error handing for occasions where the fetch of the application failded, as week as making an abort of the request if many where fired. The second difficulty was the styling of the page, more specifically, on the responsiviness and support for different sizes of screens and the standardization of the images' size, where sometimes the images came with different proportions and sizes, as well as the synopsis that came with different lengths of content. The final Result was pleasant, but, there was still a minimal change on width of the images on mobile and the site seems a little empty.

## Images

![WideScreen](Images/widescreen.png)

![Mobile](Images/mobile.png)

## Possible Improvements
- Add Dark Mode
- Add more information about the anime, like: Genre, Reviews, Studio and Source. That would require a change on the structure of the content.
