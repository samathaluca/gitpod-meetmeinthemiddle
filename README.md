# T0 VIEW WEBSITE APPLICATION *MEET ME HALFWAY* AT GIT PAGES follow

[LINK TO MILESTONE PROJECT 2](https://samathaluca.github.io/gitpod-meetmeinthemiddle/)

## A new dating site application **MEET ME HALFWAY**

- The Meet Me halfway application calculates the midpoint between two towns or cities input by the user.
- The user chooses the distance (in KM) around the midpoint that they wish to be displayed.
- The user can choose the types of meeting place they prefer using checkboxes.

## Quick Guide

### The user is prompted to input:-

1. Town or city 1- The user's starting point- user's nearest town.
2. Town or city 2 - The starting point, also in the form of a town, of the person they are meeting.
3. Their choice of types of places to meet are selected using checkboxes.
4. The user clicks a show button.
5. Reset clears user input.

### Results shown:-

   1. A selection of places that the user has chosen are marked on the map around the midpoint, exactly halfway between the two addresses supplied by the user.
   2. If the user does not complete the necessary information an alert box asks the user to *"Double check that you have filled in all the options: INVALID_REQUEST"*

### Project brief

Develop a dynamic Front End Project: Written using custom JavaScript, HTML and CSS code creating a front-end web application consisting of one HTML pages with significant interactive functionality.
JavaScript has been used to produce relevant responses dependent on users' actions.

### Project purpose

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

```
          var MidLat = (selLocLatA + selLocLatB) / 2;
          var MidLng = (selLocLngA + selLocLngB) / 2;
```

The calculation for the midpoint was developed so that other APIs may be used in the future, for example ordnance survey maps or hiking/cycling map APIs. Google API place libraries are currently important to the feature

## UX

### Planning and design

- The strategy plane: To attract users to a website, for example, a dating site.
  To be useful and so widely used  within other types of websites.
  Broad appeal offering benefits to web site owners and front end developers.
- The scope plane: The scope was to develop a one page feature to present meeting places to the user,
  halfway between two different starting points.
- The Structure plane: Considering IA- Information Architecture  
  The **MEET ME HALFWAY** application will be intuitive and easy to use. The carousel images are meant to engage the user and flow easily to the interactive idea immediately below.
- The Skeleton plane: A one page  to be housed in any site that would benefit from the functionality.
  The skeleton was designed to optimize the arrangement of elements for maximum effect and efficiency
- The Surface plane: Images of happiness and connection load above the main feature so that the functionality does    not appear sterile. Perky text. 
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

Colourful Heading.
Carousel of dating images and strap lines.
Jumbotron with subtle message.
Form for user preference input.
Google map.
Second Jumbotron with subtle message.

### Future Features

Bespoke place markers which recommend some places as romantic or atmospheric  or simply highly rated for first dates based on user feedback.

## Tech Used


- [HTML5](https://en.wikipedia.org/wiki/HTML5)Semantic markup language as the shell of the site.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)This was used to style the elements of the HTML code.
- [JAVASCRIPT](https://www.javascript.com/)Primary function of the site for all user interaction.
- [JQUERY](https://jquery.com/) Used to simplify some of the DOM manipulations.
- [GIMP](https://www.gimp.org/) This was used for formatting images.
- [BOOTSTRAP](https://getbootstrap.com/docs/3.4/) This was used to help style the website and as well as the grid layout.
- [FONT-GOOGLEAPI](https://fonts.google.com/) a collection of interactive application programming interfaces that allow users to use web fonts on their website.
- [GOOGLEMAPS_API](https://maps.googleapis.com/maps/api/js?key=AIzaSyBNne6TTHmVK0n_fL0ogNWkvNwDTdf9lsI&libraries=places&callback=initialize)
- [VISUAL-STUDIO-CODE](https://code.visualstudio.com/) The IDE used for debugging, embedded git control, git commits, previewing and code development.
- [BEAUTIFY](https://www.freeformatter.com/css-beautifier.html) to check code and improve code readability.
- [HEX CODES](https://www.w3schools.com/colors/colors_picker.asp) different colours experimentation.
- [BALSAMIQ](https://balsamiq.com/wireframes/) wireframe design

Cloud9, AWS and Gitpod were initially used but Visual studio code became the best choice for the project development.

## Testing

- [Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/)
- [HTML Validator](https://validator.w3.org/)
- [CSS VALIDATOR](https://jigsaw.w3.org/css-validator/)
- [HTML AND CSS Beautifier](https://www.freeformatter.com/html-formatter.html)
- [Javascript Validator](http://beautifytools.com/javascript-validator.php)
- [Markdown live-preview](https://markdownlivepreview.com/) -This project used markdown previewer to check the rendering of the readme.md file content.
- [AutoPrefixer](https://autoprefixer.github.io/) -This project used AutoPrefixer to make sure the css code is valid for all browsers.
- [JASMINE](https://jasmine.github.io/)- framework for testing javascript code.

### Final Testing to demonstrate thorough testing carried out throughout development

1. Jasmine Test driven development. The final Jasmine test reflected the difficulty using the framework with the google maps API. 
![Jasmine](assets/testing/jasmine.jpg)
During development I had used some Jasmine tests but when using the google map api key, Jasmine wasn't processing a mock api call as intended so the tests would not pass either on small sections or the complete javascript file.
I do see the benefit of TDD and it is something I plan to use more fully in the next project. I was advised that Jasmine is not a requirement for Milestone2 assuming a large number of manual tests were run.
I have been working with Tutor Support to try and get Jasmine functioning, but ultimately decided to put it aside temporarily so you can proceed with the course material, and you plan to come back and revisit later.
2. Chrome Developer tools 
Final error is js?key=AIzaSyBNne6TTHmVK0n_fL0ogNWkvNwDTdf9lsI&libraries=places&callback=initialize:70 InvalidValueError: not an instance of HTMLInputElement.
Google maps is producing an error that does not effect the functionality of the Javascript code long term. I have not rewritten the code because I do not want the application to be dependent on google maps only.
Console tests were run with different device sizes within Chrome Developer tools. Final tests on small devices revealed poor readability of carousel text. Media queries were added to remove the text and carousel indicator on small devices.
A colourful poor resolution image of choice was replaced by a better quality image using media queries. 
3. Javascript Validator
 23 errors listed all relating to the validator not recognising how to read built-in variable names. It's a known issue for JS online validators.
 3 errors were corrected. autocomplete variables had undergone name changes and were inconsistent.
 An old variable had not been removed. This was commented out pending final preview and deployment tests.
4. HTML Validator
 Known error of bar pipe between fonts in googleapi is not necessary to change.
 Validator showed an error suggesting I move a </div> before a </form> tag in previous test. This time the error suggests I need to revert the change to how it had been previously. As the bootstrap grid becomes less responsive if I do reverse the previous change I have left it.
5. Markdown live preview. Readme.md file all checked.
6. CSS beautifier and validator
No changes needed
7. Autoprefixer test run.
No prefixes needed. 
8. Slack request for other students to preview and test the deployed site revealed a problem
A fellow student noticed that the type of meeting place selection had been broken during the final amendment and testing process. When she selected bars, accommodation was shown on the map instead. 
Previous versions were referred to and the changes to variable types to the clearer meetingplace_types suggested by my mentor was reverted. The word type is thought to have special meaning when using  google maps API place library.
Corrections were made. Correct type selection now populates the map again. 


### Compatibility

To ensure a broad range of users can successfully use this site, I tested it across the 6 major browsers in desktop, tablet and mobile configuration.

1. Chrome 
2. Edge 
3. Firefox 
4. Safari 
5. Opera 
6. Internet Explorer  . warning in google documentation is as follows: Notice: Support for Internet Explorer 10 will end between November 2019 and May 2020 depending on the release channel or version number you use.


NO ISSUES

### Devices tested

#### Mobile phones

1. Samsung S9, 
2. Iphone 6/7/7S plus, 
3. Sony XA42
   
#### Tablets tested 
1. Ipad 
2. LNBEI 10 inch Android tablet
   
#### Laptop tested 
1. MacBook pro, 
2. Sony Vaio
   
#### Desktop 

1. (unbranded Windows 7 OS) with different monitors 21 and 27inch.

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

The photos used in this site were obtained from Google images and [Pixabay](https://pixabay.com/).
Google maps are called with a dedicated API key.

## Reference

Google developer documentation was the basis of the JAVASCRIPT and JQUERY used. https://developers.google.com/maps/documentation/javascript/tutorial.
I researched other apps and sites that had the same function. The two I found were (https://www.whatshalfway.com/)
and https://www.meetways.com/meet-business.
I studied their code in detail but opted for a different calculation method for midpoint. The google developer documents suggest a method accounting for the curvature of the earth. I wanted to develop a method that would work if I did not want to use google maps api key any longer and could easily translate to other map APIs available in the future.
Student projects recommended by tutor support included https://benhasselgren.github.io/ifd-milestone-project-pages/.
I used this project for CSS ideas. Notably map dimensions that worked responsively.


## Credits and Attribution
https://developers.google.com/maps/documentation/javascript/tutorials were the backbone of the project.

My Mentor Brian Macharia helped with a callback issue that I had not been able to solve. The show button always need to be double clicked to show the midpoint and load the places. 
Brian advised me that the asynchronicity of my javascript code was an issue. This meant that the page was loading before the results could be calculated and displayed. The calculation was effectively completed too late so that the page was always displaying the previous out dated requests to the google maps API. 
Restructuring my code and removing the callback meant up to date responses to user input are loaded each time. 
Tutor support, most recently Tim trying to help me get to grips with test driven development and subjective discussions around CSS.

A grateful acknowledgement of Edel Sullivan's help in Slack. She noticed that when she selected bars in cork, she was presented with accommodation. I was able to correct this before submission. 

## Submission 

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

