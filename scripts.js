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


//Calendar System------------------------


const months = [
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
  const daysOfWeek = ['StelLéo', 'GlaLéo', 'ChiLéo', 'OrbLéo', 'NoLéo', 'CoLéo', 'LuLéo'];
  
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
      for (let i = 0; i < daysOfWeek.length && day <= month.days; i++) {
        const dayCell = document.createElement('td');
        dayCell.textContent = day++;
        weekRow.appendChild(dayCell);
      }
      tbody.appendChild(weekRow);
    }
    table.appendChild(tbody);
    calendarDiv.appendChild(table);
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
  
  drawCalendar(currentMonth);




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

  //Skill Picker----------------------

  const skills = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3'];

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