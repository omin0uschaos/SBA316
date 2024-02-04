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

  let homePlanet = document.getElementById("home-planet");

  
homePlanet.addEventListener("change", function(event){
    switch (event.target.value) {
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
})


  
  let currentMonth = 0;
  
function drawCalendar(monthIndex) {
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
            // Use an immediately-invoked function expression (IIFE) to capture the current day value
            (function(d) {
                dayCell.addEventListener('click', function() { 
                    selectDate(d, month.name, i);
                    dayCell.classList.toggle("date-selected"); 
                });
            })(day);
            weekRow.appendChild(dayCell);
        }
        tbody.appendChild(weekRow);
    }
    table.appendChild(tbody);
    calendarDiv.appendChild(table);
}


function selectDate(day, month, dayOfWeekIndex) {
    const dayOfWeek = daysOfWeek[dayOfWeekIndex % daysOfWeek.length];
    let dob = `${dayOfWeek}, ${month} ${day}`;
    console.log(day); 
    dateOfBirth = dob;
     // Assign the date string to dob variable
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

// Initialize dropdown on page load
document.addEventListener('DOMContentLoaded', () => {
    populateDropdown();
    document.getElementById('dropdown-btn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submit action
      toggleDropdown();
    });
  });

  //Form----------------------------------------



  const form = document.querySelector('form');


  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission


    let firstName = form.elements['firstname'].value;
    let lastName = form.elements['lastname'].value;
    let nickName = form.elements['nickname'].value;
    let ageOfPerson = form.elements['age'].value;
    let homePlanet = form.elements['home'].value;
    let militaryDes = form.elements['military'].value;
    let rank = form.elements['rank'].value;
    let classNum = form.elements['class'].value;
    let jobTitle = form.elements['job'].value;
    let fullDob = `${dateOfBirth} ${getBirthYear(ageOfPerson, homePlanet)}`;
    let summary = form.elements['summary'].value;
    let longbio = form.elements['longbio'].value;
    let skills = getSelectedSkills();

    // Object to store form data
    const formData = {
        name: {
            first: firstName,
            last: lastName
        },
        nickname: nickName,
        age: ageOfPerson,
        home: homePlanet,
        military: militaryDes,
        rank: rank,
        class: classNum,
        job: jobTitle,
        dob: fullDob,
        summary: summary,
        longbio: longbio,
        skills: skills, 
    };

    // Save the data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    console.log('Form data saved:', formData);
});

function getSelectedSkills() {
    const selectedSkills = [];
    document.querySelectorAll('.dropdown-list input[type="checkbox"]:checked').forEach((checkbox) => {
        selectedSkills.push(checkbox.value);
    });
    return selectedSkills;
}