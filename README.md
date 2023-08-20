# English Dictionary 
##  Description
#### 1. Introduction
An English dictionary was done using the [WordsAPI from RapidAPI](https://rapidapi.com/dpventures/api/wordsapi/). Each word includes its meanings, examples, syllables, antonyms and synonyms.

#### 2. Home Page
In the home page you can ***(1)*** type the word in the <u>search bar</u> and seek it with the *Search* button or ***(2)*** you can read a random word  pressing the *Random* button.
- You CAN'T search an empty search bar
- If the word DOESN'T exist, you will see an error page.

#### 3. Word Page
In the word page, you ***may not*** see all the fields (depending on the API database): in that case  a *No results founds* message will be displayed. 
- The only field always present would be *meanings*
- You can visit the url for each synonym and antonym available
- In case there are too many results for a  field, a *View More* button will limit the first-hand results.

## Technologies Used
- React
- JavaScript
- CSS

## Concepts Applied
- ***Routing*** (React Router)
- ***Data fetching*** from external API
- ***Custom Hook*** for data fetching
- Responsive for all devices
- ***Hooks***: useState, useEffect, useNavigate, useParams
- Error Handling


