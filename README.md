# UFOs

## Project Overview
Dana, a UFO enthusiast, has asked our team to assist in creating a dynamic webpage of UFO data. The webpage needs to include a table with data stored in a JavaScript array, have filters to make a table fully dynamic, and present on a HTML page for easy viewing. To provide an in-depth analysis of the UFO data, Dana would like to be able to filter the UFO table by: 
- Date
- City
- State
- Country
- Shape
## Resources
- Data Source: data.js, starter_code.js
- Software: JavaScript, Bootstrap, D3, HTML
## UFO Website Basics
The webpage is set up in a simple but interactive manner. When the user enters the index.html file the top of the webpage will show a brief history of the UFO research  and an introduction to the data provided in the created table.
### The Data
The data in the table presents recorded sightings of UFOs all over the world. It provides a record of the date, city, state, and country of the sighting, the shape of the object spotted, and a duration and brief description of the sighting.
To filter the table the user can enter specific data for the Date, City, State, Country, or Shape in the respective field under the Filter Search section, as shown in the below image.

![ Fig 1]( https://github.com/lmacera/UFOs/blob/main/Resources/Fig%201.PNG )

Once the user enters the wanted criteria, the table will automatically update with fields containing the specific criteria. As shown in the image below we have entered criteria for the date, city, and state we would like data on. The filter search and our table show only data that matches the criteria specified. In this case we see 4 recorded sightings on 1/1/2010 in El Cajon, California. 

![ Fig 2]( https://github.com/lmacera/UFOs/blob/main/Resources/Fig%202.PNG )

It is important to note that the filter criteria has to be entered exactly how it is presented on the table, otherwise it will not filter the data accordingly. As an example, if we enter the same criteria as above but in a different format (i.e. added capitalization) the same data will not be presented. See the image below showing the search and the resulting data returned, or lack thereof.

![ Fig 3]( https://github.com/lmacera/UFOs/blob/main/Resources/Fig%203.png )

## Summary
In summary the webpage is visually appealing, and the table summarizes the data on various UFO sightings in a dynamic manner. However, as mentioned above a drawback to the current design in the lack of variability in which the filter criteria can be entered. Some recommendations for further development would be to expand the filter criteria formatting, so various forms of the criteria can be entered. Additionally, it would be beneficial to add an error message letting the user know if an invalid format is entered into the filter criteria. For example, if someone entered the date as 1/2010 an error would tell the user the format needs to be entered as MM/DD/YYYY. An addition outside of the filter criteria, would be added visualization. For example, if we filter for sightings in California, it would be beneficial to have an option to see a bar graph showing the frequency of sightings per city in California.


