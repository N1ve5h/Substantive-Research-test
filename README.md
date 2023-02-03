
# Substantive Research Task

Fetch data from an API and then display total interactions in a table.




## Deployment

To deploy this project download packages
```bash
  npm install
```

```bash
  npm run dev
```


## Before Coding

I just listed the important things from the task description:

- Pull data from API
- Create Web App to output the data
- Web App must consist of percentages of interaction a client has for each sector
- Nice UI
- CSS preprocessor
- Graphs/Tables

Then I thought about what I can complete with the 90 minute deadline to complete the task:

- Use SASS as a CSS preprocessor
- Use table to output the data


## Coding
### Setback

The one bug that delayed in completing the task on time was when I was filtering all sectors by their ID using a for-loop. The cause was that the data from the API that have stored in the useState, was not being processed in the filter. Additionally, commenting the for-loop out and adding a Console.log then adding the for-loop back in after it allowed the function to work.

Error Console Message: "cannot read properties of undefined (reading 'filter')".

Solution: Passed the data straight through the function instead of useState.
## Improvements
### Major Features
- Converting the table into a pie chart. 

### Minor Features
- Add click event listener on each sector, which will open up a pop-up window of another table with more details of the sector interations.

- Add From Date - To Date Input so that the user can customise exactly they want to see. Furthermore, we can preset buttons like Week, Month, Year to make it easier for the user.
