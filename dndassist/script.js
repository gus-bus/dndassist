//Ability Variables

let sorcPoints = 5
let clericDivinity = 1
let monkKi = 5
let barbRage = 3

//Inspiration Tracker

let sorcPort = document.getElementById("sorc")
let roguePort = document.getElementById("rogue")
let clericPort = document.getElementById("cleric")
let barbPort = document.getElementById("barb")
let monkPort = document.getElementById("monk")
let druidPort = document.getElementById("druid")

let sorcInspiration = false;
let rogueInspiration = false;
let clericInspiration = false;
let barbInspiration = false;
let monkInspiration = false;
let druidInspiration = false;

let sorcNorm = "images/sorcnorm.png"
let sorcInsp = "images/sorcinsp.png"

let rogueNorm = "images/roguenorm.png"
let rogueInsp = "images/rogueinsp.png"

let clericNorm = "images/clericnorm.png"
let clericInsp = "images/clericinsp.png"

let barbNorm = "images/barbnorm.png"
let barbInsp = "images/barbinsp.png"

let monkNorm = "images/monknorm.png"
let monkInsp = "images/monkinsp.png"

let druidNorm = "images/druidnorm.png"
let druidInsp = "images/druidinsp.png"

sorcPort.onclick = () => {
    if(sorcInspiration == false) {
      sorcPort.src = sorcInsp;
      sorcInspiration = true;
    } else if (sorcInspiration == true) {
        sorcPort.src = sorcNorm;
        sorcInspiration = false;
    }
  };

roguePort.onclick = () => {
    if(rogueInspiration == false) {
      roguePort.src = rogueInsp;
      rogueInspiration = true;
    } else if (rogueInspiration == true) {
        roguePort.src = rogueNorm;
        rogueInspiration = false;
    }
  };

clericPort.onclick = () => {
    if(clericInspiration == false) {
      clericPort.src = clericInsp;
      clericInspiration = true;
    } else if (clericInspiration == true) {
        clericPort.src = clericNorm;
        clericInspiration = false;
    }
  };

barbPort.onclick = () => {
    if(barbInspiration == false) {
      barbPort.src = barbInsp
      barbInspiration = true;
    } else if (barbInspiration == true) {
        barbPort.src = barbNorm;
        barbInspiration = false;
    }
  };

monkPort.onclick = () => {
    if(monkInspiration == false) {
      monkPort.src = monkInsp;
      monkInspiration = true;
    } else if (monkInspiration == true) {
        monkPort.src = monkNorm;
        monkInspiration = false;
    }
  };
druidPort.onclick = () => {
    if(druidInspiration == false) {
      druidPort.src = druidInsp;
      druidInspiration = true;
    } else if (druidInspiration == true) {
        druidPort.src = druidNorm;
        druidInspiration = false;
    }
};

//Navbar
let statsButton = document.getElementById("showstats")
let equipButton = document.getElementById("showequipment")
let skillsButton = document.getElementById("showskills")
let abilitiesButton = document.getElementById("showabilities")

//Display Window

let sorcDisplay = document.getElementById("sorcdisplay")
let rogueDisplay = document.getElementById("roguedisplay")
let clericDisplay = document.getElementById("clericdisplay")
let barbDisplay = document.getElementById("barbdisplay")
let monkDisplay = document.getElementById("monkdisplay")
let druidDisplay = document.getElementById("druiddisplay")

//Stats HTML
sorcStats = `<p>Initiative: +2</p>
<p>AC: 15</p>
<p>Speed: 30</p>
<p>Strength: 11 (+0)</p>
<p>Dexterity: 14 (+2)</p>
<p>Constitution: 16 (+3)</p>
<p>Intelligence: 12 (+1)</p>
<p>Wisdom: 14 (+2)</p>
<p>Charisma: 20 (+5)</p>`

rogueStats = `<p>Initiative: +3</p>
<p>AC: 15</p>
<p>Speed: 30</p>
<p>Strength: 12 (+1)</p>
<p>Dexterity: 17 (+3)</p>
<p>Constitution: 13 (+1)</p>
<p>Intelligence: 9 (-1)</p>
<p>Wisdom: 14 (+2)</p>
<p>Charisma: 12 (+1)</p>`

clericStats = `<p>Initiative: +0</p>
<p>AC: 16</p>
<p>Speed: 30</p>
<p>Strength: 14 (+2)</p>
<p>Dexterity: 11 (+0)</p>
<p>Constitution: 15 (+2)</p>
<p>Intelligence: 14 (+2)</p>
<p>Wisdom: 18 (+4)</p>
<p>Charisma: 13 (+1)</p>`

barbStats = `<p>Initiative: +7</p>
<p>AC: 15</p>
<p>Speed: 30</p>
<p>Strength: 20 (+5)</p>
<p>Dexterity: 15 (+2)</p>
<p>Constitution: 16 (+3)</p>
<p>Intelligence: 11 (+0)</p>
<p>Wisdom: 14 (+2)</p>
<p>Charisma: 11 (+0)</p>`

monkStats = `<p>Initiative: +4</p>
<p>AC: 17</p>
<p>Speed: 40</p>
<p>Strength: 12 (+1)</p>
<p>Dexterity: 19 (+4)</p>
<p>Constitution: 13 (+1)</p>
<p>Intelligence: 12 (+1)</p>
<p>Wisdom: 16 (+3)</p>
<p>Charisma: 14 (+2)</p>`

druidStats = `<p>Initiative: +1</p>
<p>AC: 12</p>
<p>Speed: 30</p>
<p>Strength: 12 (+1)</p>
<p>Dexterity: 13 (+1)</p>
<p>Constitution: 15 (+2)</p>
<p>Intelligence: 13 (+1)</p>
<p>Wisdom: 18 (+4)</p>
<p>Charisma: 9 (-1)</p>`

//Equipment HTML

sorcEquip = `<p>Some stuff</p>`
rogueEquip = `<p>Some stuff</p>`
clericEquip = `<p>Some stuff</p>`
barbEquip = `<p>Greatsword<br><span class="subscript">Atk Bonus: +7<br>Damage: 2D6+5</span></p>`
monkEquip = `<p>Some stuff</p>`
druidEquip = `<p>Some stuff</p>`

//Skills HTML
sorcSkills = `<p>Strength Saving Throw: +0<br>Athletics: +0</p>
<p>Dexterity Saving Throw: +2<br>Acrobatics: +4<br>Sleight of hand: +2<br>Stealth: +2</p>
<p>Constitution Saving Throw: +5</p>
<p>Intelligence Saving Throw: +1<br>Arcana: +3<br>History: +3<br>Investigation: +1<br>Nature: +1<br>Religion: +1</p>
<p>Wisdom Saving Throw: +2<br>Animal Handling: +2<br>Insight: +2<br>Medicine: +2<br>Perception: +4<br>Survival: +2</p>
<p>Charisma Saving Throw: +7<br>Deception: +7<br> Intimidation: +5<br>Performance: +5<br>Persuasion: +7</p>`
rogueSkills = `<p>Strength Saving Throw: +1<br>Athletics: +5</p>
<p>Dexterity Saving Throw: +5<br>Acrobatics: +5<br>Sleight of hand: +3<br>Stealth: +5</p>
<p>Constitution Saving Throw: +1</p>
<p>Intelligence Saving Throw: +1<br>Arcana: -1<br>History: -1<br>Investigation: +1<br>Nature: -1<br>Religion: -1</p>
<p>Wisdom Saving Throw: +2<br>Animal Handling: +2<br>Insight: +2<br>Medicine: +2<br>Perception: +4<br>Survival: +2</p>
<p>Charisma Saving Throw: +1<br>Deception: +5<br> Intimidation: +3<br>Performance: +1<br>Persuasion: +1</p>`
clericSkills = `<p>Strength Saving Throw: +2<br>Athletics: +2</p>
<p>Dexterity Saving Throw: +0<br>Acrobatics: +0<br>Sleight of hand: +0<br>Stealth: +0</p>
<p>Constitution Saving Throw: +2</p>
<p>Intelligence Saving Throw: +4<br>Arcana: +2<br>History: +8<br>Investigation: +4<br>Nature: +2<br>Religion: +4</p>
<p>Wisdom Saving Throw: +6<br>Animal Handling: +4<br>Insight: +6<br>Medicine: +4<br>Perception: +4<br>Survival: +4</p>
<p>Charisma Saving Throw: +3<br>Deception: +0<br> Intimidation: +0<br>Performance: +0<br>Persuasion: +3</p>`
barbSkills = `<p>Strength Saving Throw: +7<br>Athletics: +7</p>
<p>Dexterity Saving Throw: +2<br>Acrobatics: +4<br>Sleight of hand: +2<br>Stealth: +2</p>
<p>Constitution Saving Throw: +5</p>
<p>Intelligence Saving Throw: +0<br>Arcana: +0<br>History: +0<br>Investigation: +0<br>Nature: +0<br>Religion: +0</p>
<p>Wisdom Saving Throw: +2<br>Animal Handling: +2<br>Insight: +2<br>Medicine: +2<br>Perception: +4<br>Survival: +4</p>
<p>Charisma Saving Throw: +0<br>Deception: +0<br> Intimidation: +7<br>Performance: +0<br>Persuasion: +0</p>`
monkSkills = `<p>Strength Saving Throw: +3<br>Athletics: +3</p>
<p>Dexterity Saving Throw: +6<br>Acrobatics: +6<br>Sleight of hand: +4<br>Stealth: +6</p>
<p>Constitution Saving Throw: +1</p>
<p>Intelligence Saving Throw: +1<br>Arcana: +1<br>History: +1<br>Investigation: +1<br>Nature: +1<br>Religion: +1</p>
<p>Wisdom Saving Throw: +3<br>Animal Handling: +3<br>Insight: +5<br>Medicine: +3<br>Perception: +3<br>Survival: +3</p>
<p>Charisma Saving Throw: +2<br>Deception: +2<br> Intimidation: +2<br>Performance: +2<br>Persuasion: +2</p>`
druidSkills = `<p>Strength Saving Throw: +1<br>Athletics: +1</p>
<p>Dexterity Saving Throw: +1<br>Acrobatics: +1<br>Sleight of hand: +1<br>Stealth: +1</p>
<p>Constitution Saving Throw: +2</p>
<p>Intelligence Saving Throw: +3<br>Arcana: +1<br>History: +1<br>Investigation: +1<br>Nature: +3<br>Religion: +1</p>
<p>Wisdom Saving Throw: +6<br>Animal Handling: +4<br>Insight: +4<br>Medicine: +4<br>Perception: +4<br>Survival: +6</p>
<p>Charisma Saving Throw: -1<br>Deception: -1<br> Intimidation: -1<br>Performance: -1<br>Persuasion: -1</p>`

//Abilities HTML

sorcAbility = `<p>Sorcery Points : ` + sorcPoints + `</p>`
rogueAbility = `<p>Some stuff</p>`
clericAbility = `<p>Channel Divinity Uses: ` + clericDivinity + `</p>`
barbAbility = `<p>Rages: ` + barbRage + `</p>`
monkAbility = `<p>Some stuff</p>`
druidAbility = `<p>Some stuff</p>`

//Display Window

sorcDisplay.innerHTML = sorcStats;
rogueDisplay.innerHTML = rogueStats;
clericDisplay.innerHTML = clericStats;
barbDisplay.innerHTML = barbStats;
monkDisplay.innerHTML = monkStats;
druidDisplay.innerHTML = druidStats;

statsButton.onclick = () => {
  sorcDisplay.innerHTML = sorcStats;
  rogueDisplay.innerHTML = rogueStats;
  clericDisplay.innerHTML = clericStats;
  barbDisplay.innerHTML = barbStats;
  monkDisplay.innerHTML = monkStats;
  druidDisplay.innerHTML = druidStats;
};

equipButton.onclick = () => {
  sorcDisplay.innerHTML = sorcEquip;
  rogueDisplay.innerHTML = rogueEquip;
  clericDisplay.innerHTML = clericEquip;
  barbDisplay.innerHTML = barbEquip;
  monkDisplay.innerHTML = monkEquip;
  druidDisplay.innerHTML = druidEquip;
};

skillsButton.onclick = () => {
  sorcDisplay.innerHTML = sorcSkills;
  rogueDisplay.innerHTML = rogueSkills;
  clericDisplay.innerHTML = clericSkills;
  barbDisplay.innerHTML = barbSkills;
  monkDisplay.innerHTML = monkSkills;
  druidDisplay.innerHTML = druidSkills;
};

abilitiesButton.onclick = () => {
  sorcDisplay.innerHTML = sorcAbility;
  rogueDisplay.innerHTML = rogueAbility;
  clericDisplay.innerHTML = clericAbility;
  barbDisplay.innerHTML = barbAbility;
  monkDisplay.innerHTML = monkAbility;
  druidDisplay.innerHTML = druidAbility;
};