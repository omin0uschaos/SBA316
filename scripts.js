//declarations

class Person {
    constructor(firstname, lastname, nickname, age, homeplanet, militaryfaction, rank, rankclass, jobtitle, dateofbirth, shortbio, longbio, skills){
        this.firstname = firstname;
        this.lastname = lastname;
        this.nickname = nickname;
        this.age = age;
        this.homeplanet = homeplanet;
        this.militaryfaction = militaryfaction;
        this.rank = rank;
        this.rankclass = rankclass;
        this.jobtitle = jobtitle;
        this.dateofbirth = dateofbirth;
        this.shortbio = shortbio;
        this.longbio = longbio;
        this.skills = skills;
    }
}

const jobTitleExpansions = {
    "sup": "Supreme Commander",
    "fa": "Fleet Admiral",
    "va": "Vice Admiral",
    "ra": "Rear Admiral",
    "capt": "Captain",
    "cdr": "Commander",
    "opof": "Operations Officer",
    "cnv": "Chief Navigator",
    "nv": "Navigator",
    "pi": "Pilot",
    "sca": "Stellar Cartographer",
    "dro": "Drone Operator",
    "che": "Chief Engineer",
    "mee": "Mechanical Engineer",
    "eee": "Electrical Engineer",
    "cse": "Computer Systems Engineer",
    "pre": "Propulsion Engineer",
    "cmo": "Chief Medical Officer",
    "sur": "Surgeon",
    "mdc": "Medical Doctor",
    "nrs": "Nurse",
    "par": "Paramedic",
    "cso": "Chief Science Officer",
    "asp": "Astrophysicist",
    "bio": "Biologist",
    "cem": "Chemist",
    "qps": "Quantum Physicist",
    "dan": "Data Analyst",
    "clo": "Chief Logistics Officer",
    "qtm": "Quartermaster",
    "ins": "Inventory Specialist",
    "suo": "Supply Officer",
    "csc": "Chief Security Officer",
    "arm": "Arms Officer",
    "tac": "Tactical Officer",
    "gua": "Guard",
    "tan": "Tactical Analyst",
    "cio": "Chief Intelligence Officer",
    "cry": "Cryptographer",
    "sco": "Scout",
    "ana": "Analyst",
    "cco": "Chief Communications Officer",
    "tra": "Translator",
    "seo": "Sensor Operator",
    "cel": "Celestial Anthropologist",
    "xen": "Xenobiologist",
    "ais": "Ai Systems Analyst",
    "neu": "Neurologist",
    "wao": "Warrant Officer",
    "cfp": "Chief Petty Officer",
    "pet": "Petty Officer",
    "sea": "Seaman"
  };
  
  const rankExpansions = {
    "supcom": "Supreme Commander",
    "fa": "Fleet Admiral",
    "va": "Vice Admiral",
    "ra": "Rear Admiral",
    "capt": "Captain",
    "cdr": "Commander",
    "lcdr": "Lieutenant Commander",
    "lt": "Lieutenant",
    "ens": "Ensign",
    "wo": "Warrant Officer",
    "cpo": "Chief Petty Officer",
    "po": "Petty Officer",
    "sn": "Seaman",
    "nr": "No Rank"
  };
  
  const militaryFactionExpansions = {
    "edf": "Earth Defense Fleet",
    "lsc": "Lunar Sentinel Corps",
    "euf": "Enceladian Unity Fleet",
    "msg": "Martian Stellar Guard",
    "jvg": "The Jupiter Vanguard",
    "tsy": "The Thalan'Syra",
    "non": "Non-military"
  };  

let dateOfBirth = '';

//Calendar System------------------------

//Declaring the different calendars for all planets

const earthMonths = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
  ];
  
  const earthDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  const marsianMonths = [
    { name: 'Aresia', days: 56 },
    { name: 'Phobium', days: 56 },
    { name: 'Deimosis', days: 55 },
    { name: 'Terranum', days: 56 },
    { name: 'Olympium', days: 55 },
    { name: 'Vallesium', days: 55 },
    { name: 'Marinum', days: 55 },
    { name: 'Solisium', days: 55 },
    { name: 'Tharsium', days: 55 },
    { name: 'Caelum', days: 55 },
    { name: 'Aurora', days: 56 },
    { name: 'Nocturnum', days: 55 },
    { name: 'Stellium', days: 56 }
  ]

  const marsianDaysOfWeek = ['Zorqat','Vendax','Mirqun','Telpor','Rindax','Jenquix','Ulzorn','Cryvok','Skelbran','Folgrin','Xyptor'];

  const lunaMonths = [
    { name: 'Heliona', days: 13 },
    { name: 'Selunis', days: 13 },
    { name: 'Argentis', days: 13 },
    { name: 'Lunara', days: 13 },
    { name: 'Gravita', days: 13 },
    { name: 'Phasin', days: 13 },
    { name: 'Apogis', days: 13 },
    { name: 'Stellara', days: 13 },
    { name: 'Umbra', days: 13 },
    { name: 'Tidae', days: 13 },
    { name: 'Aurora', days: 13 },
    { name: 'Radiant', days: 13 },
    { name: 'Nubila', days: 13 },
    { name: 'Perigis', days: 12 }
  ];
  const lunaDaysOfWeek = ['StelLéo', 'GlaLéo', 'ChiLéo', 'OrbLéo', 'NoLéo', 'CoLéo', 'LuLéo'];

  const enceladianMonths = [
    { name: 'Glacium', days: 23 },
    { name: 'Aurium', days: 22 },
    { name: 'Crystallum', days: 22 },
    { name: 'Solstium', days: 22 },
    { name: 'Celestium', days: 22 },
    { name: 'Luminium', days: 22 },
    { name: 'Equinum', days: 22 },
    { name: 'Nocturium', days: 22 },
    { name: 'Vernum', days: 22 },
    { name: 'Florium', days: 22 },
    { name: 'Terrarium', days: 22 },
    { name: 'Aquamoon', days: 22 },
    { name: 'Penumilum', days: 10 }//Leap month, added every 22nd year
  ]

  const enceladianDaysOfWeek = ['Zaquarr','Taquaar','Gliquaar','Vexquaar','Tiquaar','Roquaar','Waquaar'];

  const europanMonths = [
    { name: 'Sobeki', days: 30 },
    { name: 'Horushi', days: 30 },
    { name: 'Anubiki', days: 30 },
    { name: 'Baste', days: 30 },
    { name: 'Raitaro', days: 30 },
    { name: 'Osiri', days: 30 },
    { name: 'Setari', days: 30 },
    { name: 'Thotaru', days: 30 },
    { name: 'Netsu', days: 30 },
    { name: 'Ptahari', days: 30 },
    { name: 'Setomi', days: 30 },
    { name: 'Nutomari', days: 40 }//Leap cycle, added every 3rd year
  ]

  const europanDaysOfWeek = ['XyloMor','XyloZen','XyloTwi','ZephyMor','ZephyZen','ZephyTwi','QuilaMor','QuilaZen','QuilaTwi', "SlavaLuxe"];

  const ganymedianMonths = [
    { name: 'Lumelle', days: 5 },
    { name: 'Nucan', days: 5 },
    { name: 'Aurique', days: 5 },
    { name: 'Crepule', days: 5 },
    { name: 'Helite', days: 5 },
    { name: 'Etoilique', days: 5 },
    { name: 'Nebulique', days: 5 },
    { name: 'Galaxique', days: 5 },
    { name: 'Cosomique', days: 5 },
    { name: 'Sirique', days: 4 },
    { name: 'Exorique', days: 1 }//L11. (Leap month, added every 5th year)
  ]

  const ganymedianDaysOfWeek = ['Solixar','Lunthora','Tempoxis','Aetholux','Kosmorae','Phorixal','Galacteon'];

  const titanianMonths = [
    { name: `Kur'xal`, days: 5 },
    { name: `N'vaxt`, days: 5 },
    { name: `Thal'kai `, days: 5 },
    { name: `Xyr'zul`, days: 5 },
    { name: `W'yrin`, days: 5 },
    { name: `Draa'koth `, days: 5 },
    { name: `Kraa'zoth`, days: 5 }//Leap month, added every 5th year)
  ]

  const titanianDaysOfWeek = [`Zel'mar`,'Krynnax','Valtorin','Nythiria'];

  let months = [];
  let daysOfWeek = [];



  
  function updateBasedOnHomePlanet(planetValue) {
    switch (planetValue) {
        case "earth":
            months = [...earthMonths];
            daysOfWeek = [...earthDaysOfWeek];
            break;
        case "mars":
            months = [...marsianMonths];
            daysOfWeek = [...marsianDaysOfWeek];
            break;
        case "luna-prime":
            months = [...lunaMonths];
            daysOfWeek = [...lunaDaysOfWeek];
            break;
        case "enceladus":
            months = [...enceladianMonths];
            daysOfWeek = [...enceladianDaysOfWeek];
            break;       
        case "europa":
            months = [...europanMonths];
            daysOfWeek = [...europanDaysOfWeek];
            break;
        case "ganymede":
            months = [...ganymedianMonths];
            daysOfWeek = [...ganymedianDaysOfWeek];
            break;
        case "titan":
            months = [...titanianMonths];
            daysOfWeek = [...titanianDaysOfWeek];
            break;
        default:
            months = [];
            daysOfWeek = [];
            break;
    }
    drawCalendar(currentMonth);
}

let homePlanet = document.getElementById("home-planet");
homePlanet.addEventListener("change", function() {
    updateBasedOnHomePlanet(this.value);
});
  
  let currentMonth = 0;
  
  function drawCalendar(monthIndex) {
    if (monthIndex < 0 || monthIndex >= months.length) {
        console.error("Invalid month index:", monthIndex);
        return; // Exit the function to prevent further errors
    }
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = ''; // Clear previous content

    const month = months[monthIndex];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const monthRow = document.createElement('tr');
    const monthName = document.createElement('th');
    monthName.colSpan = daysOfWeek.length;
    monthName.innerHTML = `<span class="month-navigation" onclick="changeMonth(-1)">&#9664;</span> ${month.name} <span class="month-navigation" onclick="changeMonth(1)">&#9654;</span>`;
    monthRow.appendChild(monthName);
    thead.appendChild(monthRow);

    const daysRow = document.createElement('tr');
    daysOfWeek.forEach(day => {
        const dayCell = document.createElement('th');
        dayCell.textContent = day;
        daysRow.appendChild(dayCell);
    });
    thead.appendChild(daysRow);
    table.appendChild(thead);

    let day = 1;
    while (day <= month.days) {
        const weekRow = document.createElement('tr');
        for (let i = 0; i < daysOfWeek.length && day <= month.days; i++, day++) {
            const dayCell = document.createElement('td');
            dayCell.textContent = day;
            (function(d) {
                dayCell.addEventListener('click', function() { 
                    // Call selectDate with the cell element to manage selection
                    selectDate(d, month.name, i, this); 
                });
            })(day);
            weekRow.appendChild(dayCell);
        }
        tbody.appendChild(weekRow);
    }
    table.appendChild(tbody);
    calendarDiv.appendChild(table);
}


function selectDate(day, month, dayOfWeekIndex, cellElement) {
    const previouslySelected = document.querySelector('.date-selected');
    // If there's a previously selected date and it's not the same cell, remove the class
    if (previouslySelected && previouslySelected !== cellElement) {
        previouslySelected.classList.remove('date-selected');
    }

    // Toggle the class on the clicked cell
    cellElement.classList.toggle('date-selected');
    
    // Update the dob variable only if the date is selected
    if (cellElement.classList.contains('date-selected')) {
        const dayOfWeek = daysOfWeek[dayOfWeekIndex % daysOfWeek.length];
        let dob = `${dayOfWeek}, ${month} ${day}`;
        dateOfBirth = dob;
    } else {
        dateOfBirth = ''; // Clear dob if no date is selected
    }
}
  
  function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth >= months.length) {
      currentMonth = 0;
    } else if (currentMonth < 0) {
      currentMonth = months.length - 1;
    }
    drawCalendar(currentMonth);
  }

  //get planet year----------------------------------------------
function getBirthYear(age, home) {
    let earthYear = 2610 - age;
    let yearStr; // Declare a variable to hold the year string
    switch (home) {
        case "mars":
            yearStr = getMarsYear(earthYear);
            break;
        case "luna-prime":
            yearStr = getLunarPrimeYear(earthYear);
            break;
        case "enceladus":
            yearStr = getEnceladusYear(earthYear);
            break;       
        case "europa":
            yearStr = getJupiterYear(earthYear);
            break;
        case "ganymede":
            yearStr = getJupiterYear(earthYear);
            break;
        case "titan":
            yearStr = getTitanYear(earthYear);
            break;
        default:
            yearStr = `EE${earthYear}`;
            break;
    }
    return yearStr;
}

  function getLunarPrimeYear(earthYear) {
    const earthDaysPerYear = 365.25;
    const lunarPrimeHoursPerDay = 50;
    const lunarPrimeDaysPerEarthYear = earthDaysPerYear * 24 / lunarPrimeHoursPerDay;
    const lunarPrimeYear = earthYear * lunarPrimeDaysPerEarthYear / earthDaysPerYear;
    return `L${lunarPrimeYear.toFixed(1)}`;
}

function getEnceladusYear(earthYear) {
    const enceladusDaysPerEarthYear = 265;
    const enceladusYear = earthYear * 365.25 / enceladusDaysPerEarthYear;
    return `E${enceladusYear.toFixed(2)}`;
}

function getMarsYear(earthYear) {
    const marsDaysPerYear = 669;
    const marsYear = earthYear * 365.25 / marsDaysPerYear;
    return `M${marsYear.toFixed(1)}`;
}

function getJupiterYear(earthYear) {
    const jupiterCycle = earthYear / 3;
    return `J${jupiterCycle.toFixed(1)}`;
}

function getTitanYear(earthYear) {
    const titanYearsPerEarthYear = 1 / 29;
    const titanYear = earthYear * titanYearsPerEarthYear;
    return `T${titanYear.toFixed(2)}`;
}


  
//edit-modal-------------------------------------------------------

const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        event.stopPropagation;
        const listItem = this.closest('li'); // Find the closest li element
        const modal = document.getElementById('edit-modal');
        const rect = listItem.getBoundingClientRect(); // Get the position of the list item
        if(modal.style.display === 'block'){
            modal.style.display = 'none';
        } else {
            modal.style.display = 'block';
        }
        // Set the position of the modal
        modal.style.top = `${rect.top}px`;

        // Show the modal

    });
});


  //Skill Picker----------------------

  const skills = ['Survival', 'Combat', 'Engineering', 'Navigation', 'Science', 'Diplomacy', 'Stealth', 'Leadership', 'Medical', 'Linguistic', 'Technical', 'Physical Fitness'];

let selectedSkills = [];

function populateDropdown() {
  const dropdown = document.getElementById('dropdown');
  skills.forEach((skill, index) => {
    const skillDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'skill' + index;
    checkbox.value = skill;
    checkbox.addEventListener('change', handleSelection);
    const label = document.createElement('label');
    label.htmlFor = 'skill' + index;
    label.textContent = skill;
    skillDiv.appendChild(checkbox);
    skillDiv.appendChild(label);
    dropdown.appendChild(skillDiv);
  });
}

function handleSelection(event) {
  const { checked, value } = event.target;
  if (checked) {
    if (selectedSkills.length < 4) {
      selectedSkills.push(value);
    } else {
      alert('Maximum of 4 skills can be selected');
      event.preventDefault(); // Prevent the checkbox from being checked
      event.target.checked = false;
    }
  } else {
    selectedSkills = selectedSkills.filter(item => item !== value);
  }
  updateSelectedSkillsDisplay();
}

function updateSelectedSkillsDisplay() {
  const display = document.getElementById('selected-skills');
  display.textContent = selectedSkills.length > 0 ? selectedSkills.join(', ') : 'None';
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateDropdown();
    document.getElementById('dropdown-btn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submit action
      toggleDropdown();
    });
  });

  //Form----------------------------------------

  function expandRank(rank) {
    return rankExpansions[rank];
  }

  function expandJob(job) {
    return jobTitleExpansions[job];
  }

  function expandMilitary(military) {
    return militaryFactionExpansions[military];
  }

  const form = document.querySelector('form');


  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

  

    let firstName = form.elements['firstname'].value;
    let lastName = form.elements['lastname'].value;
    let nickName = form.elements['nickname'].value;
    let ageOfPerson = form.elements['age'].value;
    let homePlanet = form.elements['home'].value;
    let militaryDes = expandMilitary(form.elements['military'].value);
    let rank = expandRank(form.elements['rank'].value);
    let classNum = form.elements['class'].value;
    let jobTitle = expandJob(form.elements['job'].value);
    let fullDob = `${dateOfBirth} ${getBirthYear(ageOfPerson, homePlanet)}`;
    let summary = form.elements['summary'].value;
    let longBio = form.elements['longbio'].value;
    let skills = getSelectedSkills();

    // Object to store form data
    const newPerson = new Person(firstName, lastName, nickName, ageOfPerson, homePlanet, militaryDes, rank, classNum, jobTitle, fullDob, summary, longBio, skills);

    // Save the data to localStorage
    localStorage.setItem(`${firstName} ${lastName}`, JSON.stringify(newPerson));

    console.log('Form data saved:', newPerson);
    form.reset();
    document.getElementById('selected-skills').textContent = "None";
    selectedSkills = [];
    const checkboxes = document.querySelectorAll('#dropdown input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    // clear 'selected-person' class and date selection
    const previouslySelectedDate = document.querySelector('.date-selected');
    if (previouslySelectedDate) {
        previouslySelectedDate.classList.remove('date-selected');
    }
    dateOfBirth = '';
    const listItems = document.querySelectorAll('#peopleList .sidebar-li');
    listItems.forEach(item => item.classList.remove('selected-person'));

    populatePeopleList();
});

function getSelectedSkills() {
    const selectedSkills = [];
    document.querySelectorAll('.dropdown-list input[type="checkbox"]:checked').forEach((checkbox) => {
        selectedSkills.push(checkbox.value);
    });
    return selectedSkills;
}

//Loading persons from localstorage-------------------------------
let localStorageReturn = {...localStorage};
console.log(localStorageReturn);

function populatePeopleList() {
    const peopleList = document.getElementById('peopleList');
    peopleList.innerHTML = ''; // Clear existing list items

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const personJSON = localStorage.getItem(key);
        try {
            const person = JSON.parse(personJSON);
            if(person && person.firstname && person.lastname) {
                const listItem = document.createElement('li');
                listItem.classList.add('sidebar-li');

                listItem.onclick = function() { loadPersonDetails(this); };

                listItem.innerHTML = `<span class="personNameLabel">${person.firstname} ${person.lastname}</span><a href="#"><img class="edit-button" src="./images/editbutton.png" width="5px"></a>`;
                peopleList.appendChild(listItem);
                //insert hr between list items
                const hr = document.createElement('hr');
                peopleList.appendChild(hr);
            }
        } catch(e) {
            console.error("Error parsing person from localStorage:", e);
            // Handle error or invalid data
        }
    }
}

function loadPersonDetails(element) {

    const personName = element.querySelector('.personNameLabel').textContent;
    updateNavBarPerson(personName);
    
    // Loop through localStorage to find a match
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes(personName)) {
        const personDetailsJSON = localStorage.getItem(key);
        const personDetails = JSON.parse(personDetailsJSON);

  //inputting loaded details back into the form
        document.querySelector('input[name="firstname"]').value = personDetails.firstname;
        document.querySelector('input[name="lastname"]').value = personDetails.lastname;
        document.querySelector('input[name="nickname"]').value = personDetails.nickname;
        document.querySelector('input[name="age"]').value = personDetails.age;
        document.querySelector('select[name="home"]').value = personDetails.homeplanet;
        document.querySelector('select[name="military"]').value = minimizeMilitary(personDetails.militaryfaction);
        document.querySelector('select[name="rank"]').value = minimizeRank(personDetails.rank);
        document.querySelector('select[name="class"]').value = personDetails.rankclass;
        document.querySelector('select[name="job"]').value = minimizeJob(personDetails.jobtitle);

        document.querySelector('textarea[name="summary"]').value = personDetails.shortbio;
        document.querySelector('textarea[name="longbio"]').value = personDetails.longbio;
        
        document.querySelector('select[name="home"]').value = personDetails.homeplanet;

        const homePlanetSelect = document.querySelector('select[name="home"]');
        homePlanetSelect.value = personDetails.homeplanet;

        updateBasedOnHomePlanet(personDetails.homeplanet);


        const skillsCheckboxes = document.querySelectorAll('#dropdown input[type="checkbox"]');
        skillsCheckboxes.forEach(checkbox => {
            checkbox.checked = false; // Reset all checkboxes first
        });
    
        if (personDetails.skills) {
            personDetails.skills.forEach(skill => {
                let checkbox = document.querySelector(`#dropdown input[value="${skill}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
            selectedSkills = [...personDetails.skills]; // Update the selectedSkills array
            updateSelectedSkillsDisplay(); // Reflect the changes in the UI
        }

        if (personDetails.dateofbirth) {
            setDateOfBirthFromFullDob(personDetails.dateofbirth);
        }
    }

    }
}

function setDateOfBirthFromFullDob(fullDob) {
    // Parse the date of birth to extract the necessary parts
    const dobParts = fullDob.match(/^(.*), (\w+) (\d+)/);
    if (dobParts) {
        const dayOfWeek = dobParts[1];
        const monthName = dobParts[2];
        const day = parseInt(dobParts[3], 10);

        // Find the month index based on the month name
        const monthIndex = months.findIndex(m => m.name === monthName);
        if (monthIndex !== -1) {
            // Set the global currentMonth variable to ensure calendar is drawn for the correct month
            currentMonth = monthIndex;
            drawCalendar(currentMonth);

            // Programmatically select the day
            programmaticallySelectDay(day, dayOfWeek);

        }
    }
}

function programmaticallySelectDay(day, dayOfWeek) {
    const daysCells = document.querySelectorAll('#calendar td');
    daysCells.forEach(cell => {
        if (parseInt(cell.textContent, 10) === day) {
            // Mark the cell as selected
            cell.classList.add('date-selected');
            // Update the dateOfBirth with the correct format including day of the week
            dateOfBirth = `${dayOfWeek}, ${months[currentMonth].name} ${day}`;
        }
    });
}


populatePeopleList();

function updateNavBarPerson(name) {
    let navbarTitle = document.getElementById("navbar-person");
    navbarTitle.textContent = name;

    // Retrieve all list items within the peopleList
    const listItems = document.querySelectorAll('#peopleList .sidebar-li');

    // Loop through all list items to remove the 'selected-person' class
    listItems.forEach(item => {
        item.classList.remove('selected-person');
    });

    // Add 'selected-person' class to the clicked list item
    // Find the list item that matches the provided name
    const selectedItem = Array.from(listItems).find(item => item.querySelector('.personNameLabel').textContent === name);
    if (selectedItem) {
        selectedItem.classList.add('selected-person');
    }
}

function minimizeRank(rankLong) {
    const rankShort = Object.keys(rankExpansions).find(key => rankExpansions[key] === rankLong);
    return rankShort;
}

function minimizeJob(jobLong) {
    const jobShort = Object.keys(jobTitleExpansions).find(key => jobTitleExpansions[key] === jobLong);
    return jobShort; 
}

function minimizeMilitary(militaryLong) {
    const militaryShort = Object.keys(militaryFactionExpansions).find(key => militaryFactionExpansions[key] === militaryLong);
    return militaryShort; 
}

function loadCalendarWithDOB(dob) {
    // Ensure dob is a defined and non-empty string
    if (!dob || dob.split(', ').length < 2) {
        console.error("Invalid or undefined dob:", dob);
        return;
    }

    const parts = dob.split(', ')[1].split(' '); // Splits "DayOfWeek, MonthName Day" to get "MonthName Day"
    const monthName = parts[0];
    const day = parts[1];
    // Find the index of the month
    const monthIndex = months.findIndex(m => m.name === monthName);
    if (monthIndex !== -1) {
        currentMonth = monthIndex; // Set the current month
        drawCalendar(currentMonth); // Redraw the calendar for the selected month
        // After calendar redraw, highlight the day
        setTimeout(() => highlightDOB(day), 0);
    } else {
        console.error("Month not found:", monthName);
    }
}

function highlightDOB(day) {
    // Ensure the calendar has been drawn
    const daysElements = document.querySelectorAll('#calendar td');
    daysElements.forEach(elem => {
        if (elem.textContent === day) {
            // Remove any previous selection
            daysElements.forEach(de => de.classList.remove('date-selected'));
            // Highlight the correct day
            elem.classList.add('date-selected');
        }
    });
    day = day.toString();
}

document.addEventListener('DOMContentLoaded', () => {
    const initialHomePlanetValue = homePlanet.value;
    if (initialHomePlanetValue !== "chooseplanet") {
        updateBasedOnHomePlanet(initialHomePlanetValue);
    }
});

let addNewPerson = document.getElementById("add-new-person");
addNewPerson.addEventListener("click", function(event) {
    // Reset the form
    form.reset();
    
    // Clear the text content for selected skills
    document.getElementById('selected-skills').textContent = "None";

    // Clear any previously selected date
    const previouslySelected = document.querySelector('.date-selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('date-selected');
    }

    // Reset the selectedSkills array
    selectedSkills = [];

    // Uncheck all checkboxes in the dropdown
    const checkboxes = document.querySelectorAll('#dropdown input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Clear any 'selected-person' class from the people list
    const listItems = document.querySelectorAll('#peopleList .sidebar-li');
    listItems.forEach(item => {
        item.classList.remove('selected-person');
    });

    // Clear dateOfBirth variable
    dateOfBirth = '';
});