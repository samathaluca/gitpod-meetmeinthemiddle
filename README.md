
VIEW WEBSITE FEATURE **MEET ME HALFWAY** AT GIT PAGES, FOLLOWING LINK >>>>>>>>>>>MEET ME HALWAY LINK>>>>>>>>>>

#**MEET ME HALFWAY**- the new dating site feature.

>The Meet/Me halfway feature calculates the midpoint between two towns or cities inputted by the user.
>The user chooses the types of meeting place they prefer using checkboxes.
>The user chooses the distance (in KM) from the midpoint that they wish to be displayed. 

##Project purpose
>A local map around the calculated midpoint, is populated with suggested meeting places, the types of which are chosen by the user, from a list of options. The purpose being it takes responsibility and stress away from the date by choosing a meeting point narrowed down to the randomly generated venues brought up on the map. 

#Quick Guide

##The user types in
1. Town or city 1- The user's starting point- user's nearest town.
2. Town or city 2 - The starting point, also in the form of a town, of the person they are meeting.
3. Their choice of types of places to meet are selected using checkboxes.
4. The user clicks a show button.
5. Reset clears user input. 
   
##Results shown
   1. A selection of places the user chose are marked on the map around the midpoint, exactly halfway between the two addresses supplied by the user.


#Getting Started
A simple HTML bootstrap grid and component design was developed to aid mobile first responsive design.
The Google Maps JavaScript API was implemented to customize maps with content and imagery for display on web pages and mobile devices. The Maps JavaScript API feature chosen was the basic road map type. Geocode within the API translated the towns position to a float number which was used as the basis of a mathematical calculation.
The calculation for the midpoint was developed so that other APIs may be used in the future, for example ordnance survey maps or hiking/cycling map APIs. 
Google API place libraries are currently important to the feature. 
CSS was kept very basic envisaging it could fit in with any potential customers existing sites. 

###Audience
The initial broad appeal would be a feature within dating sites. 
The benefits and ease of use could be attractive to businesses, walking/ cycling groups, long distance friendships, families or anyone who does not feel comfortable imposing their choice of venue on another person. 

##UX
###The strategy plane:. The aim is to create a feature for a dating website that is useful and fun. 
    The random 'fate driven' selection by google API makes it exciting. When the map midpoint is populated with potential meetup venues it creates a positive feeling. 


    The scope plane:. The scope was to develop a one page feature to present meeting places to the user, halfway between two starting points. 

    The Structure plane:. Considering IA- Information Architecture 
    The meet me halfway feature will be intuitive and easy to use. The carousel images are meant to intrigue the user and flow easily to the idea immediately below. 

    The Skeleton plane:. The  will be a one page feature to be housed in any site that would benefit from the functionality. 

    The Surface plane:.
    Images of happiness and connection pre-empt the main feature so that the functionality does not appear sterile. 
    Fonts used are easy to read, up to date choices.

    Responsive design was considered throughout and developed with mobile first approach.
##Wireframes

Wireframe mockups:

![Desktop wireframe](balsamiq/Desktop.png)
![Mobile wireframe](balsamiq/Mobile.png)
![Tablet wireframe](balsamiq/Tablet.png)

>>>>>>>>>>>>

Features
Existing Features
Bootstrap navbar linking to each section of the site. The one page project has a section focusing on

Feature to add

CSS classes have been added ready to style to match any dating site wanting to use the meet me halfway feature.
>>>>>>>
>>>>>>>


Future Features
Different distance calcs
2/1 welcome frink at chosen venues
who pays coin flip. 
if you travel 2/3 you pay 1/3 and visa versa.

Features Left to Implement.
A message to thank the customer ---

More understanding of the latest GDPR legislation will be considered for future contact form development. If too many false enquiries are made reCAPTCHA would be set up. The current contact form encourages brief messages with the goal of increasing the number of users prepared to make the effort of completing it.

Tech Used
First , using the google API to calculate the midpoint between locations based on their longitudes and latitudes, the
code will then populate the map with destinations based on the user's preference. The user may choose to meet from a list of google API place types,for example, a bar, cafe, bookshop or a church within
an area (in KM) decided by the user.

The use of jquery was resourced from examples in Bootstrap, W3schools and Code institute modules.
The Javascript code was developed using google developer documentation.
https://developers.google.com/maps/documentation/javascript/tutorial


-Cloud9, AWS, AWS-educate Visual studio code and Gitpod were all- IDE used throughout development.

-HTML - This was used to create the markupl

-CSS - This was used to style the elements of the HTML code.
>>>>>>>>>>>>>
[samsi](https://www.samsi.co.uk)
-Bootstrap - https://getbootstrap.com/docs/4.3/getting-started/introduction/ - (src=://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css)
- This was used to help style the website and as well as the grid layout.

-Font Awesome -https://fontawesome.com/ -(src://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900|Audiowide|Ubuntu&display=swap - This was used to create a choice of fonts for the website) -(src=://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css - This was used for icons e.g. social media and flags )

-Gimp- This was used for resizing, cropping, fading and changing images to fit the site.

-Jquery, JS and poppers

-https://code.jquery.com/jquery-3.3.1.slim.min.js"> -This added functionality to the site e.g. naivation toggle.

>>>>>>>>-https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js

>>>>>>>>-https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" -supports logic for use of the bootstrap components within the site.

-Git - used for version control and deployment.

-AutoPrefixer - https://autoprefixer.github.io/ -This project used AutoPrefixer to make sure the css code is valid for all browsers.

-Markdown live preview - https://markdownlivepreview.com/ -This project used markdown previewer to check the rendering of the readme.md file content.

Testing
HTML and CSS validators were used throughout development.

HTML Validator

CSS VALIDATOR https://jigsaw.w3.org/css-validator/

Markdown test

Each time I was happy with the functionality of a section I checked the code . I tested repeatedly using google developer tools and in different browsers. Chrome, Firefox, Opera, Internet explorer, microsoft edge. 
I posted my code for peer review in slack . I asked lead students, tutors and mentors to check the code 
The only other error shown by the validator in the final code that I did not correct was an amendment I had made to a link listing the different fonts used. That is | between fonts. All CSS errors were corrected.

>>>>>>>>>>>>>>>>>>>>>>>>>>
ALL THE LINKS ON THE SITE AND CONTACT FORM were tested throughout. Contact form required field for email or text type works well. ALL LINKS TESTED to external website links, videos and social media repeatedly tested.

Final tests were made using AutoPrefixer This project used AutoPrefixer to make sure the css code is valid for all browsers. I also loaded the site in each of the following browsers. Google Chrome Bing Ask Jeeves Safari Internet Explorer Mozilla Firefox

Final Google Developer Tools texts completed for all screen sizes.

Devices used for testing included
Mobile phones- Samsung S9, Iphone 6, Iphone 7S, Sony Xseries

Tablets tested - Ipad

Laptop tested - MacBook pro, Sony Vaio

Desktop (unbranded Windows 7 OS) with different monitors 21, 27 and 43inches.

Version control
Each significant change was saved in git repository. 
Attention was given to the commit messages to ensure I could find previous versions if any problems began to arise.
Check the git status to double-check that they've been added
git status

>>>>>>>>>>>>>>>>>>
Add a remote
git remote add origin https://github.com/samathaluca/ticketsales.git
Final Project version control

Deployment
This project was mostly developed using gitpod and Visual studio code, committed to git and pushed to GitHub using the built in function within Gitpod and the Git desktop linked to VSC. T


To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

From the list of repositories on the screen I select "samathaluca/ticketsales.git" From the menu items near the top of the page, I selected Settings. I scrolled down to the GitHub Pages section. Under Source clicked the drop-down menu labelled None and select Master Branch On selecting Master Branch the page was automatically refreshed amd the website was now deployed. I scrolled back down to the GitHub Pages section to retrieve the link to the deployed website.

The link supplied did not show the most recent version of the website. Recent image changes had not been deployed. I added the images from my cloud9 IDE to the git repository. These changes were reflected in the deployed sites almost immediately.

The URL I was given was deployed project

##Content
The photos used in this site were obtained from google images and pixabay

##Reference
google developer documentation.
students work benhassell....

Credits
Mentor helped with callback issue -double click. Knew the asynch was an issue

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




These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

Prerequisites
What things you need to install the software and how to install them

Give examples
Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc