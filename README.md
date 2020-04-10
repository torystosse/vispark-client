# Vispark

An application to show information on U.S. National Parks, created in less than a day.

## About

Vistpark is, first and foremost, and application that lists information about all of the U.S. National Parks. Users can scroll through to read about each park, and parks are listed alphabetically. This application was built using React and Bootstrap.

I chose to use React rather than vanilla Javascript for use of its structure, future use of building out components (in future versions of the application), and simply because it has been gaining in popularity over the past couple of years. Bootstrap was a simple decision, in that useage of its grid layout would be most effective in displaying the data in pleasing way to the user.

In future versions of this application, there are many things that I hope to add:
- Stripping away some of the data on the initial parks page, and integrating usage of either modals, or an individual park page, to clean up the UI, and allow users to read more on just one park when they click on, say, a link that says 'learn more'.
- Building out an API, adding auth components, and fleshing this out to allow for user capabilities. I invision this application being used as sort of a "bucket list" or "tracker". Users can create accounts, click on the parks page, and click on a checkbox if they have visited the park. They can then view how many parks they have visited, and how many more they still have to visit.
  - When users open the application, they will see a landing page with a brief tagline for the application. When they log in, they will see 'Welcome [email]!' on the navbar. There will be a couple links on the navbar -> Parks | Where You've Been | User Settings | Sign Out. The Parks page will look similar to what was described above, with a checkbox under each park to check if they've been there. 'Where you've been' will list each park they've visted. 'User settings' will allow a user to change password.

##### Helpful Links
* [Source for National Parks data](https://prm-interview.s3.amazonaws.com/parks.json)
* [Deployed Application](https://torystosse.github.io/vistpark-client)
* [Heroku](https://blooming-earth-34461.herokuapp.com/)
