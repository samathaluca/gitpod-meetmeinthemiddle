T0 VIEW WEBSITE APPLICATION **MEET ME HALFWAY** AT GIT PAGES follow
[LINK TO MILESTONE PROJECT 2](https://samathaluca.github.io/gitpod-meetmeinthemiddle/)

# The new dating site feature.
## **MEET ME HALFWAY**
- The Meet Me halfway application calculates the midpoint between two towns or cities inputted by the user.
- The user chooses the distance (in KM) around the midpoint that they wish to be displayed. 
- The user can choose the types of meeting place they prefer using checkboxes.

# Quick Guide
## The user is prompted to input:-
1. Town or city 1- The user's starting point- user's nearest town.
2. Town or city 2 - The starting point, also in the form of a town, of the person they are meeting.
3. Their choice of types of places to meet are selected using checkboxes.
4. The user clicks a show button.
5. Reset clears user input. 
   
## Results shown
   1. A selection of places that the user has chosen are marked on the map around the midpoint, exactly halfway between the two addresses supplied by the user.
   2. If the user does not complete the necessary information an alert box asks the user to *"Double check that you have filled in all the options: INVALID_REQUEST"*

## Project brief
Develop a dynamic Front End Project: Written using custom JavaScript, HTML and CSS code creating a front-end web application consisting of one HTML pages with significant interactive functionality.
JavaScript has been used to produce relevant responses dependent on users' actions.

## Project purpose
The aim was to create a feature for a dating website that is useful and fun. 
A local map is displayed around a calculated midpoint (between two towns) and populated with suggested meeting places, the types of which are chosen by the user, from a list of options.
The 'fate driven' selection of first date meeting point is generated. When the map midpoint is populated with potential meetup venues it creates a positive feeling. 
The purpose takes responsibility and stress away from the date by choosing a meeting point narrowed down to the randomly generated venues brought up on the map. 

## Information Architecture 
The layout is structured using Bootstrap grid and components to ensure that application is fully responsive. Design was set out and tested with a mobile first approach. 
### Framework and logic
A simple HTML bootstrap grid and component design was developed considering mobile first, responsive design.
The Google Maps JavaScript API was implemented to customize maps with content and imagery for display on mobile, tablet and desktop devices. The Maps JavaScript API feature chosen was the basic road map type. 
Geocode within the API translated the towns position to a float number which was used as the basis of a mathematical calculation.


```var selLocLatB = results[0].geometry.location.lat();
          var selLocLngB = results[0].geometry.location.lng();

          var MidLat = (selLocLatA + selLocLatB) / 2;
          console.log('MidLat: ' + MidLat);
          var MidLng = (selLocLngA + selLocLngB) / 2;```
```

The calculation for the midpoint was developed so that other APIs may be used in the future, for example ordnance survey maps or hiking/cycling map APIs. 
Google API place libraries are currently important to the feature. 

## UX
### Planning and design
- The strategy plane: To attract users to a website, for example, a dating site. 
  To be useful and so widely used  within other types of websites. 
- The scope plane: The scope was to develop a one page feature to present meeting places to the user, 
  halfway between two different starting points. 
- The Structure plane: Considering IA- Information Architecture  
  The **MEET ME HALFWAY** application will be intuitive and easy to use. The carousel images are meant to invite the user and flow easily to the interactive idea immediately below. 
- The Skeleton plane: A one page  to be housed in any site that would benefit from the functionality. 
  The skeleton was designed to optimize the arrangement of elements for maximum effect and efficiency
- The Surface plane: Images of happiness and connection load above the main feature so that the functionality does         not appear sterile. 
  Fonts chosen are easy to read, up to date choices.
  Colourful images were used to add life to the design. Subtle, soft colours were chosen to complement the images and the loaded map. Colour scheme research revealed that coral has been the most popular in 2019. Coral did not work well. Pale rose pink was chosen based on feedback by users testing the application on their different devices. 
  CSS was mainly dependent on Bootstrap envisaging it could fit in with any potential customers existing sites. 
### User stories
#### Audience
Anyone who wants to arrange to meet someone else half way between two places. 
The user has enough choice to narrow down the best place to meet someone else. Using the familiarity and comfort of google maps and google maps place library, the **MEET ME HALFWAY** application calculates the midpoint between locations based on two selected towns or cities (converted to longitudinal and latitudinal points), the wide choice of place types are marked on a location map around the midway point. 
The user may choose to meet from a list of google API place types,for example, a bar, cafe, bookshop or a church within an area (in KM) decided by themselves.
#### What is the benefit?
The application can prevent obligation, negotiations, awkward expectations and responsibility to fall on one person to suggest a meeting point and venue. There is an element of excitement, a little bit of a gamble and some faith that the right place will be displayed creating interest and memorability.
#### Why would there be any interest?
The initial broad appeal would be a feature within dating sites. 
The benefits and ease of use could be attractive to businesses, walking/ cycling groups, long distance friendships, families or anyone who doesn't want to 'over think' where to meet. 

 ## Wireframes

Wireframe mockups were designed using Balsamiq:

![Desktop wireframe](balsamiq/Desktop.png)
![Mobile wireframe](balsamiq/Mobile.png)
![Tablet wireframe](balsamiq/Tablet.png)


## Features
### Existing Features
Heading 
Carousel of dating images and strap lines.
Jumbotron 
Form for user preference input.
Google map.
Jumbotron

### Future Features
Bespoke place markers which recommend some places as romantic or atmospheric  or simply highly rated for first dates based on user feedback. 


## Tech Used
[HTML5](https://en.wikipedia.org/wiki/HTML5)Semantic markup language as the shell of the site.
[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)This was used to style the elements of the HTML code.
[JAVASCRIPT](https://www.javascript.com/)Primary function of the site for all user interaction.
[JQUERY](https://jquery.com/) Used to simplify some of the DOM manipulations.
[GIMP](https://www.gimp.org/) This was used for formatting images.
[BOOTSTRAP](https://getbootstrap.com/docs/3.4/) This was used to help style the website and as well as the grid layout.
[FONT-GOOGLEAPI](https://fonts.google.com/) a collection of interactive application programming interfaces that allow users to use web fonts on their website. 
[GOOGLEMAPS_API](https://maps.googleapis.com/maps/api/js?key=AIzaSyBNne6TTHmVK0n_fL0ogNWkvNwDTdf9lsI&libraries=places&callback=initialize)
[VISUAL-STUDIO-CODE](https://code.visualstudio.com/) The IDE used for debugging, embedded git control, git commits, previewing and code development.
Cloud9, AWS and Gitpod were initially used but Visual studio code became the best choice for the project development. 
[BEAUTIFY](https://www.freeformatter.com/css-beautifier.html) to check code and improve code readability. 
[HEX CODES](https://www.w3schools.com/colors/colors_picker.asp) different colours experimentation.
[BALSAMIQ](https://balsamiq.com/wireframes/)

## Testing
HTML and CSS validators were used throughout development.
[Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/)
[HTML Validator](https://validator.w3.org/)
[CSS VALIDATOR](https://jigsaw.w3.org/css-validator/)
[HTML AND CSS Beautifier](https://www.freeformatter.com/html-formatter.html)
[Javascript Validator](http://beautifytools.com/javascript-validator.php)
[Markdown live-preview](https://markdownlivepreview.com/) -This project used markdown previewer to check the rendering of the readme.md file content.
[AutoPrefixer](https://autoprefixer.github.io/) -This project used AutoPrefixer to make sure the css code is valid for all browsers.
[JASMINE](https://jasmine.github.io/)

###Final Tests write up as an example of how I ran test during development. 
1. ![Jasmine](assets/testing/jasmine.jpg)
Test driven development was used however for this project the google API key dependency meant it was complex. 
Structured manual testing was used throughout development. 





>>>>>>>>>>>>>>>>>>>>>>>>>>
ALL THE LINKS ON THE SITE AND CONTACT FORM were tested throughout. Contact form required field for email or text type works well. ALL LINKS TESTED to external website links, videos and social media repeatedly tested.

Final tests were made using AutoPrefixer This project used AutoPrefixer to make sure the css code is valid for all browsers. I also loaded the site in each of the following browsers. Google Chrome Bing Ask Jeeves Safari Internet Explorer Mozilla Firefox

Final Google Developer Tools texts completed for all screen sizes.



I did some Jasmine tests but with the map api it wasn't processing a mock api call as intended, and it's something I plan to come back to learn fully when you have more time after the course is complete, but for now you've got a schedule on the course to adhere to.... but still proceed with a large amount of manual tests for sure.





## COMPATIBILITY
To ensure a broad range of users can successfully use this site, I tested it across the 6 major browsers in both desktop, tablet and mobile configuration.

Chrome v.70
Edge v.18
Firefox v.63
Safari v.12
Opera v.56
Internet Explorer v.11
NO ISSUES

### Devices tested
Mobile phones- Samsung S9, Iphone 6/7/7Splus, Sony XA42
Tablets tested - Ipad, LNBEI 10 inch Android tablet. 
Laptop tested - MacBook pro, Sony Vaio
Desktop (unbranded Windows 7 OS) with different monitors 21 and 27inch.

## Version control
In the early developmental stages of the project the IDE cloud9 I was using was taken over by Amazon. As I attempted to learn which development environment I found most useful, I developed, stored and ran my code locally until I became confident in relying upon Gitpod and Visual Studio Code. This became confusing as I was using different computers and synchronisation was sometimes an issue. After a period of experimentation with Local files, AWS and Gitpod, I now use github desktop combined with Visual Studio code for most commits. I still occasionally work and commit to github from  Gitpod if I need Code institute tutor support. Gitpod allows me to share my code easily. 
The main.js file versions previously stored locally were pushed to git in order of development with numerical commit messages.
Each significant change was saved in git repository. https://github.com/samathaluca/gitpod-meetmeinthemiddle
Attention was given to the commit messages to ensure I could find previous versions if any problems began to arise

In summary- This project was mostly developed using local files, then gitpod and finally Visual studio code, committed to git and pushed to GitHub using the built in function within Gitpod and the Git desktop linked to VSC. 

## Deployment
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

From the list of repositories on the screen I select "samathaluca/gitpod-meetmeinthemiddle" From the menu items near the top of the page, I selected Settings. I scrolled down to the GitHub Pages section. Under Source clicked the drop-down menu labelled None and select Master Branch On selecting Master Branch the page was automatically refreshed amd the website was now deployed. I scrolled back down to the GitHub Pages section to retrieve the link to the deployed website.

The URL I was given for  deployed project is https://samathaluca.github.io/gitpod-meetmeinthemiddle/
[LINK TO MILESTONE PROJECT 2](https://samathaluca.github.io/gitpod-meetmeinthemiddle/)


## Content
The photos used in this site were obtained from Google images and Pixabay.
Google maps are called with an API key. 

## Reference
Google developer documentation was the basis of the JAVASCRIPT and JQUERY used. https://developers.google.com/maps/documentation/javascript/tutorial.


Credits and Attribution: 
https://developers.google.com/maps/documentation/javascript/tutorials were the backbone of the project.

Mentor helped with callback issue -double click. Knew the asynch was an issue
Tim's  https://github.com/TravelTimN/ci-milestone02-ifd#testing



Before submission I have filled in the pre-submission check list plus I have checked each of the following aspects of the project.

Project Purpose.
UX design.
Suitability for purpose.
Navigation.
Ease of Use.
Information Architecture
Responsive Design
Image Presentation.
Colour scheme and typography.
Appropriate use of HTML.
Appropriate use of CSS.
Directory Structure and File Naming.
Version Control.
Testing implementation.
Testing write-up.
Readme file.
Comments.
Deployment implementation.
Deployment write-up


Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc
The skeleton of the Javascript main.js file was based upon content within the Maps Javascript API and places API documentation. 
Google suggested using radius to calculate the midpoint but I decided to use the simpler mathematical method. 
Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.




code will then populate the map with destinations based on the user's preference. 

Example:
<div id="map" style="height:600px"></div>
Should be:
<div id="map"></div>

And then you can use that id in css to style the size:
#map {
   height: 600px;
}