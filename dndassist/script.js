//Stats HTML
sorcStats = `<p>Initiative: +2</p>
<p>AC: 15</p>
<p>Speed: 30</p>
<p>Max Hit Points: 30</p>
<p>Strength: 11 (+0)</p>
<p>Dexterity: 14 (+2)</p>
<p>Constitution: 16 (+3)</p>
<p>Intelligence: 12 (+1)</p>
<p>Wisdom: 14 (+2)</p>
<p>Charisma: 20 (+5)</p>`

rogueStats = `<p>Initiative: +3</p>
<p>AC: 15</p>
<p>Speed: 30</p>
<p>Max Hit Points: 29</p>
<p>Strength: 12 (+1)</p>
<p>Dexterity: 17 (+3)</p>
<p>Constitution: 13 (+1)</p>
<p>Intelligence: 9 (-1)</p>
<p>Wisdom: 14 (+2)</p>
<p>Charisma: 12 (+1)</p>`

clericStats = `<p>Initiative: +0</p>
<p>AC: 16</p>
<p>Speed: 30</p>
<p>Max Hit Points: 36</p>
<p>Strength: 14 (+2)</p>
<p>Dexterity: 11 (+0)</p>
<p>Constitution: 15 (+2)</p>
<p>Intelligence: 14 (+2)</p>
<p>Wisdom: 18 (+4)</p>
<p>Charisma: 13 (+1)</p>`

barbStats = `<p>Initiative: +7</p>
<p>AC: 15</p>
<p>Speed: 30 + 10</p>
<p>Max Hit Points: 56</p>
<p>Strength: 20 (+5)</p>
<p>Dexterity: 15 (+2)</p>
<p>Constitution: 16 (+3)</p>
<p>Intelligence: 11 (+0)</p>
<p>Wisdom: 14 (+2)</p>
<p>Charisma: 11 (+0)</p>`

monkStats = `<p>Initiative: +4</p>
<p>AC: 17</p>
<p>Speed: 30 + 10</p>
<p>Max Hit Points: 26</p>
<p>Strength: 12 (+1)</p>
<p>Dexterity: 19 (+4)</p>
<p>Constitution: 13 (+1)</p>
<p>Intelligence: 12 (+1)</p>
<p>Wisdom: 16 (+3)</p>
<p>Charisma: 14 (+2)</p>`

druidStats = `<p>Initiative: +1</p>
<p>AC: 12</p>
<p>Speed: 30</p>
<p>Max Hit Points: 31</p>
<p>Strength: 12 (+1)</p>
<p>Dexterity: 13 (+1)</p>
<p>Constitution: 15 (+2)</p>
<p>Intelligence: 13 (+1)</p>
<p>Wisdom: 18 (+4)</p>
<p>Charisma: 9 (-1)</p>`

//Equipment HTML

sorcEquip = `<p>Light Crossbow<br><span class="subscript">Atk Bonus: +4</span><br><span class="subscript">Damage: 1d8+2 Piercing</span><br><span class="subscript">Range: 80/320ft</span></p>
<p>Dagger<br><span class="subscript">Atk Bonus: +4</span><br><span class="subscript">Damage: 1d4+2 Piercing</span><br><span class="subscript">Range: 20/60  ft</span></p>`
rogueEquip = `<p>Longbow<br><span class="subscript">Atk Bonus: +5</span><br><span class="subscript">Damage: 1d8+2 Piercing</span><br><span class="subscript">Range: 150/600ft</span></p>
<p>Shortsword<br><span class="subscript">Atk Bonus: +5</span><br><span class="subscript">Damage: 1d6+2 Piercing</span><br><span class="subscript">Range: 5ft</span></p>
<p>Shortsword<br><span class="subscript">Atk Bonus: +5</span><br><span class="subscript">Damage: 1d6+2 Piercing</span><br><span class="subscript">Range: 5ft</span></p>`
clericEquip = `<p>Warhammer<br><span class="subscript">Atk Bonus: +4</span><br><span class="subscript">Damage: 1d10+2 Bludgeoning</span><br><span class="subscript">Range: 5ft</span></p>
<p>Light Crossbow<br><span class="subscript">Atk Bonus: +2</span><br><span class="subscript">Damage: 1d8 Piercing</span><br><span class="subscript">Range: 80/320ft</span></p>`
barbEquip = `<p>Greatsword<br><span class="subscript">Atk Bonus: +7</span><br><span class="subscript">Damage: 2d6+5 Slashing</span><br><span class="subscript">Range: 5ft</span></p>
<p>Javelin<br><span class="subscript">Atk Bonus: +7</span><br><span class="subscript">Damage: 1d6+5 Piercing</span><br><span class="subscript">Range: 30/120ft</span></p>`
monkEquip = `<p>Quarterstaff<br><span class="subscript">Atk Bonus: +6</span><br><span class="subscript">Damage: 1d8+4 Bludgeoning</span><br><span class="subscript">Range: 5ft</span></p>
<p>Darts<br><span class="subscript">Atk Bonus: +6</span><br><span class="subscript">Damage: 1d4+4 Piercing</span><br><span class="subscript">Range: 20/60ft</span></p>
<p>Unarmed Strike<br><span class="subscript">Atk Bonus: +6</span><br><span class="subscript">Damage: 1d6+4 Slashing</span><br><span class="subscript">Range: 5ft</span></p>`
druidEquip = `<p>Quarterstaff<br><span class="subscript">Atk Bonus: +3</span><br><span class="subscript">Damage: 1d8+1 Bludgeoning</span><br><span class="subscript">Range: 5ft</span></p>
<p>Shortbow<br><span class="subscript">Atk Bonus: +3</span><br><span class="subscript">Damage: 1d6+1 Piercing</span><br><span class="subscript">Range: 80/320ft</span></p>
<p>Sickle<br><span class="subscript">Atk Bonus: +3</span><br><span class="subscript">Damage: 1d4+1 Slashing</span><br><span class="subscript">Range: 5ft</span></p>`

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

sorcAbility = `<div class = "abilityPage"><p class="tooltip" data-tooltip="Hello">Sorcery</p>
<p class="tooltip" data-tooltip="">Draonic Resilience</p>
<p class="tooltip" data-tooltip="">Bronze Dragon Ancestor</p>
<p class="tooltip" data-tooltip="">Font of Magic</p>
<p class="tooltip" data-tooltip="">Meta Magic<p>
</div>
`
rogueAbility = `<div class = "abilityPage"><p class="tooltip" data-tooltip="">Sneak Attack</p>
<p class="tooltip" data-tooltip="">Cunning Action</p>
<p class="tooltip" data-tooltip="">Assassin</p>
<p class="tooltip" data-tooltip="">Uncanny Dodge<p>
<p class="tooltip" data-tooltip="">Hellish Rebuke</p>
<p class="tooltip" data-tooltip="">Thaumaturgy</p>
</div>
`
clericAbility = `<div class = "abilityPage"><p class="tooltip" data-tooltip="">Channel Divinity</p>
<p class="tooltip" data-tooltip="">Wrath of the Storm</p>
<p class="tooltip" data-tooltip="">Destructive Wrath</p>
<p class="tooltip" data-tooltip="">Turn Undead</p>
<p class="tooltip" data-tooltip="">Destroy Undead<p>
</div>
`
barbAbility = `<div class = "abilityPage"><p class="tooltip" data-tooltip="Enter a Rage as a bonus action. If not wearing Heavy Armour you have advantage on Strength Checks and Saving Throws, gain +2 Rage Damage for melee Strength Attacks and have resistance to bludgeoning, piercing and slashing damage. All Rage charges are regained after a long rest">Rage</p>
<p class="tooltip" data-tooltip="For the first attack of your turn, you can attack recklessly to gain advantage on melee Strength attacks but attacks against have you disadvantage until your next turn">Reckless Attack</p>
<p class="tooltip" data-tooltip="You have advantange on Dexterity saving throws against effects you can see. To gain this benefit, you cannot be blinded, deafened or incapacitated">Danger Sense</p>
<p class="tooltip" data-tooltip="While raging you have resistance to all damage except psychic damage">Totem of the Bear<p>
<p class="tooltip" data-tooltip="You can attack twice instead of once for each Attack action">Extra Attack</p>
<p class="tooltip" data-tooltip="Speed increases by 10 feet if not wearing heavy armour">Fast Movement</p>
<p class="tooltip" data-tooltip="Can't be surprised, gain +5 initiative and other creatures don't gain advantage on attack rolls against you when hidden">Alert</p>
</div>
`
monkAbility = `<div class = "abilityPage"><p class="tooltip" data-tooltip="Used to fuel Monk abilities, all expended Ki is regained after a short or long rest">Ki</p>
<p class="tooltip" data-tooltip="Gain the following if wielding only monk weapons and not wearing armour or shield: Can use Dexterity instead of Strength for attack and damage rolls; Can roll a d6 instead for unarmed strikes and monk weapons; If you make an Attack, can also make one unarmed strike as a bonus action">Martial Arts</p>
<p class="tooltip" data-tooltip="Cost: 1 Ki - Immediately after an Attack action can make two unarmed strikes as a bonus action">Flurry of Blows</p>
<p class="tooltip" data-tooltip="Cost: 1 Ki - Can take the Dodge action as a bonus action">Patient Defence</p>
<p class="tooltip" data-tooltip="Cost: 1 Ki - Can take the disengage or dash action as a bonus action and jump distance is doubled">Step of the Wind<p>
<p class="tooltip" data-tooltip="Can use your reaction to deflect or catch ">Deflect Missiles</p>
<p class="tooltip" data-tooltip="Cost 1 Ki - When you hit a creature with a melee attack, it must succeed a Constitution saving throw or be stunned until the end of your next turn">Stunning Strike</p>
<p class="tooltip" data-tooltip="Speed increases by 10ft if not wearing armour or a shield">Unarmoured Movement</p>
<p class="tooltip" data-tooltip="You can impose one of the following on a creature hit by your flurry of blows: It must succeed a Dexterity saving throw or be knocked prone; It must succeed a Strength saving throw or be pushed up to 15 ft away; It can't take any reactions until the end of your next turn">Way of the Open Hand - Open Hand Technique</p>
<p class="tooltip" data-tooltip="">Slow Fall</p>
<p class="tooltip" data-tooltip="">Extra Attack</p>
<p class="tooltip" data-tooltip="Climbing speed of 20ft">Cat's Claws</p>
<p class="tooltip" data-tooltip="">Darkvision</p>
<p class="tooltip" data-tooltip="">Feline Agility</p>
</div>
`
druidAbility = `<p>Sorry Phil, you're on your own!</p>`

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

//Class Ability Variables - Not in use now as these are tracked by icons, may need to be implemented for database at later stage

let sorcPoints = 5
let clericDivinity = 1
let monkKi = 5
let barbRage = 3

//Class Ability Assignment
let sorcAbilityInfo = document.getElementById("sorcAbilityInfo")
let rogueAbilityInfo = document.getElementById("rogueAbilityInfo")
let clericAbilityInfo = document.getElementById("clericAbilityInfo")
let barbAbilityInfo = document.getElementById("barbAbilityInfo")
let monkAbilityInfo = document.getElementById("monkAbilityInfo")
let druidAbilityInfo = document.getElementById("druidAbilityInfo")

//Sorcery Points
let sorcOn = "images/sorc-on.png"
let sorcOff = "images/sorc-off.png"

let sorcStatus = document.getElementById("sorcIcon")
let sorcBoolean = true;
sorcStatus.onclick = () => {
  if(sorcBoolean == false) {
    sorcStatus.src = sorcOn;
    sorcBoolean = true;
  } else if (sorcBoolean == true) {
    sorcStatus.src = sorcOff;
    sorcBoolean = false;
  }
};
let sorcStatus1 = document.getElementById("sorcIcon1")
let sorcBoolean1 = true;
sorcStatus1.onclick = () => {
  if(sorcBoolean1 == false) {
    sorcStatus1.src = sorcOn;
    sorcBoolean1 = true;
  } else if (sorcBoolean1 == true) {
    sorcStatus1.src = sorcOff;
    sorcBoolean1 = false;
  }
};
let sorcStatus2 = document.getElementById("sorcIcon2")
let sorcBoolean2 = true;
sorcStatus2.onclick = () => {
  if(sorcBoolean2 == false) {
    sorcStatus2.src = sorcOn;
    sorcBoolean2 = true;
  } else if (sorcBoolean2 == true) {
    sorcStatus2.src = sorcOff;
    sorcBoolean2 = false;
  }
};
let sorcStatus3 = document.getElementById("sorcIcon3")
let sorcBoolean3 = true;
sorcStatus3.onclick = () => {
  if(sorcBoolean3 == false) {
    sorcStatus3.src = sorcOn;
    sorcBoolean3 = true;
  } else if (sorcBoolean3 == true) {
    sorcStatus3.src = sorcOff;
    sorcBoolean3 = false;
  }
};
let sorcStatus4 = document.getElementById("sorcIcon4")
let sorcBoolean4 = true;
sorcStatus4.onclick = () => {
  if(sorcBoolean4 == false) {
    sorcStatus4.src = sorcOn;
    sorcBoolean4 = true;
  } else if (sorcBoolean4 == true) {
    sorcStatus4.src = sorcOff;
    sorcBoolean4 = false;
  }
};

//Rogue Sneak Attack
let rogueOn = "images/rogue-on.png"
let rogueOff = "images/rogue-off.png"

let rogueStatus = document.getElementById("rogueIcon")
let rogueBoolean = true;
rogueStatus.onclick = () => {
  if(rogueBoolean == false) {
    rogueStatus.src = rogueOn;
    rogueBoolean = true;
  } else if (rogueBoolean == true) {
    rogueStatus.src = rogueOff;
    rogueBoolean = false;
  }
};

//Cleric Channel Divinity
let clericOn = "images/cleric-on.png"
let clericOff = "images/cleric-off.png"

let clericStatus = document.getElementById("clericIcon")
let clericBoolean = true;
clericStatus.onclick = () => {
  if(clericBoolean == false) {
    clericStatus.src = clericOn;
    clericBoolean = true;
  } else if (clericBoolean == true) {
    clericStatus.src = clericOff;
    clericBoolean = false;
  }
};

//Barbarian Rage
let barbOn = "images/barb-on.png"
let barbOff = "images/barb-off.png"

let barbStatus = document.getElementById("barbIcon")
let barbBoolean = true;
barbStatus.onclick = () => {
  if(barbBoolean == false) {
    barbStatus.src = barbOn;
    barbBoolean = true;
  } else if (barbBoolean == true) {
    barbStatus.src = barbOff;
    barbBoolean = false;
  }
};
let barbStatus1 = document.getElementById("barbIcon1")
let barbBoolean1 = true;
barbStatus1.onclick = () => {
  if(barbBoolean1 == false) {
    barbStatus1.src = barbOn;
    barbBoolean1 = true;
  } else if (barbBoolean1 == true) {
    barbStatus1.src = barbOff;
    barbBoolean1 = false;
  }
};
let barbStatus2 = document.getElementById("barbIcon2")
let barbBoolean2 = true;
barbStatus2.onclick = () => {
  if(barbBoolean2 == false) {
    barbStatus2.src = barbOn;
    barbBoolean2 = true;
  } else if (barbBoolean2 == true) {
    barbStatus2.src = barbOff;
    barbBoolean2 = false;
  }
};

//Monk Ki
let monkOn = "images/monk-on.png"
let monkOff = "images/monk-off.png"

let monkStatus = document.getElementById("monkIcon")
let monkBoolean = true;
monkStatus.onclick = () => {
  if (monkBoolean == false) {
    monkStatus.src = monkOn;
    monkBoolean = true;
  } else if (monkBoolean == true) {
    monkStatus.src = monkOff;
    monkBoolean = false;
  }
};
let monkStatus1 = document.getElementById("monkIcon1")
let monkBoolean1 = true;
monkStatus1.onclick = () => {
  if (monkBoolean1 == false) {
    monkStatus1.src = monkOn;
    monkBoolean1 = true;
  } else if (monkBoolean1 == true) {
    monkStatus1.src = monkOff;
    monkBoolean1 = false;
  }
};
let monkStatus2 = document.getElementById("monkIcon2")
let monkBoolean2 = true;
monkStatus2.onclick = () => {
  if (monkBoolean2 == false) {
    monkStatus2.src = monkOn;
    monkBoolean2 = true;
  } else if (monkBoolean2 == true) {
    monkStatus2.src = monkOff;
    monkBoolean2 = false;
  }
};
let monkStatus3 = document.getElementById("monkIcon3")
let monkBoolean3 = true;
monkStatus3.onclick = () => {
  if (monkBoolean3 == false) {
    monkStatus3.src = monkOn;
    monkBoolean3 = true;
  } else if (monkBoolean3 == true) {
    monkStatus3.src = monkOff;
    monkBoolean3 = false;
  }
};
let monkStatus4 = document.getElementById("monkIcon4")
let monkBoolean4 = true;
monkStatus4.onclick = () => {
  if (monkBoolean4 == false) {
    monkStatus4.src = monkOn;
    monkBoolean4 = true;
  } else if (monkBoolean4 == true) {
    monkStatus4.src = monkOff;
    monkBoolean4 = false;
  }
};

//Druid Wild Shape
let druidOn = "images/druid-on.png"
let druidOff = "images/druid-off.png"

let druidStatus = document.getElementById("druidIcon")
let druidBoolean = true;
druidStatus.onclick = () => {
  if (druidBoolean == false) {
    druidStatus.src = druidOn;
    druidBoolean = true;
  } else if (druidBoolean == true) {
    druidStatus.src = druidOff;
    druidBoolean = false;
  }
};
let druidStatus1 = document.getElementById("druidIcon1")
let druidBoolean1 = true;
druidStatus1.onclick = () => {
  if (druidBoolean1 == false) {
    druidStatus1.src = druidOn;
    druidBoolean1 = true;
  } else if (druidBoolean1 == true) {
    druidStatus1.src = druidOff;
    druidBoolean1 = false;
  }
};

//Gold Variables

let sorcGold = 203;
let rogueGold = 208;
let clericGold = 286;
let barbGold = 160;
let monkGold = 87;
let druidGold = 189;

//Gold Assignment
let sorcGoldInfo = document.getElementById("sorcGoldInfo")
let sorcGoldOutput = document.getElementById("sorcGoldOut")
let sorcPlusGold = document.getElementById("sorcAddGold")
let sorcMinusGold = document.getElementById("sorcSubtractGold")

let rogueGoldInfo = document.getElementById("rogueGoldInfo")
let rogueGoldOutput = document.getElementById("rogueGoldOut")
let roguePlusGold = document.getElementById("rogueAddGold")
let rogueMinusGold = document.getElementById("rogueSubtractGold")

let clericGoldInfo = document.getElementById("clericGoldInfo")
let clericGoldOutput = document.getElementById("clericGoldOut")
let clericPlusGold = document.getElementById("clericAddGold")
let clericMinusGold = document.getElementById("clericSubtractGold")

let barbGoldInfo = document.getElementById("barbGoldInfo")
let barbGoldOutput = document.getElementById("barbGoldOut")
let barbPlusGold = document.getElementById("barbAddGold")
let barbMinusGold = document.getElementById("barbSubtractGold")

let monkGoldInfo = document.getElementById("monkGoldInfo")
let monkGoldOutput = document.getElementById("monkGoldOut")
let monkPlusGold = document.getElementById("monkAddGold")
let monkMinusGold = document.getElementById("monkSubtractGold")

let druidGoldInfo = document.getElementById("druidGoldInfo")
let druidGoldOutput = document.getElementById("druidGoldOut")
let druidPlusGold = document.getElementById("druidAddGold")
let druidMinusGold = document.getElementById("druidSubtractGold")


//Gold Modifier
sorcPlusGold.onclick = () => {
  sorcGold ++;
  sorcGoldOutput.innerHTML = `<p>Gold: </p> `+ sorcGold
}
sorcMinusGold.onclick = () => {
  sorcGold --;
  sorcGoldOutput.innerHTML = `<p>Gold: </p> `+ sorcGold
}

roguePlusGold.onclick = () => {
  rogueGold ++;
  rogueGoldOutput.innerHTML = `<p>Gold: </p> `+ rogueGold
}
rogueMinusGold.onclick = () => {
  rogueGold --;
  rogueGoldOutput.innerHTML = `<p>Gold: </p> `+ rogueGold
}

clericPlusGold.onclick = () => {
  clericGold ++;
  clericGoldOutput.innerHTML = `<p>Gold: </p> `+ clericGold
}
clericMinusGold.onclick = () => {
  clericGold --;
  clericGoldOutput.innerHTML = `<p>Gold: </p> `+ clericGold
}

barbPlusGold.onclick = () => {
  barbGold ++;
  barbGoldOutput.innerHTML = `<p>Gold: </p> `+ barbGold
}
barbMinusGold.onclick = () => {
  barbGold --;
  barbGoldOutput.innerHTML = `<p>Gold: </p> `+ barbGold
}

monkPlusGold.onclick = () => {
  monkGold ++;
  monkGoldOutput.innerHTML = `<p>Gold: </p> `+ monkGold
}
monkMinusGold.onclick = () => {
  monkGold --;
  monkGoldOutput.innerHTML = `<p>Gold: </p> `+ monkGold
}

druidPlusGold.onclick = () => {
  druidGold ++;
  druidGoldOutput.innerHTML = `<p>Gold: </p> `+ druidGold
}
druidMinusGold.onclick = () => {
  druidGold --;
  druidGoldOutput.innerHTML = `<p>Gold: </p> `+ druidGold
}

//Navbar Assignment
let statsButton = document.getElementById("showstats")
let equipButton = document.getElementById("showequipment")
let skillsButton = document.getElementById("showskills")
let abilitiesButton = document.getElementById("showabilities")
let spellsButton = document.getElementById("showspells")

//Entire Character Assignment
let cardsAll = document.getElementById("cardsWhole")

let rogueAll = document.getElementById("rogueWhole")
let barbAll = document.getElementById("barbWhole")
let monkAll = document.getElementById("monkWhole")
let druidAll = document.getElementById("druidWhole")

//Display Window Assignment

let sorcDisplay = document.getElementById("sorcdisplay")
let rogueDisplay = document.getElementById("roguedisplay")
let clericDisplay = document.getElementById("clericdisplay")
let barbDisplay = document.getElementById("barbdisplay")
let monkDisplay = document.getElementById("monkdisplay")
let druidDisplay = document.getElementById("druiddisplay")

//Set Display Window

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

  sorcAbilityInfo.style.display = "inline-block";
  rogueAbilityInfo.style.display = "inline-block";
  clericAbilityInfo.style.display = "inline-block";
  barbAbilityInfo.style.display = "inline-block";
  monkAbilityInfo.style.display = "inline-block";
  druidAbilityInfo.style.display = "inline-block";

  sorcGoldInfo.style.display = "none";
  rogueGoldInfo.style.display = "none";
  clericGoldInfo.style.display = "none";
  barbGoldInfo.style.display = "none";
  monkGoldInfo.style.display = "none";
  druidGoldInfo.style.display = "none";

  rogueAll.style.display = "block"
  barbAll.style.display = "block"
  monkAll.style.display = "block"
  druidAll.style.display = "block"

  cardsAll.style.gridTemplateColumns = "repeat(6, 1fr)"
};

equipButton.onclick = () => {
  sorcDisplay.innerHTML = sorcEquip;
  rogueDisplay.innerHTML = rogueEquip;
  clericDisplay.innerHTML = clericEquip;
  barbDisplay.innerHTML = barbEquip;
  monkDisplay.innerHTML = monkEquip;
  druidDisplay.innerHTML = druidEquip;

  sorcAbilityInfo.style.display = "none";
  rogueAbilityInfo.style.display = "none";
  clericAbilityInfo.style.display = "none";
  barbAbilityInfo.style.display = "none";
  monkAbilityInfo.style.display = "none";
  druidAbilityInfo.style.display = "none";

  sorcGoldInfo.style.display = "block";
  rogueGoldInfo.style.display = "block";
  clericGoldInfo.style.display = "block";
  barbGoldInfo.style.display = "block";
  monkGoldInfo.style.display = "block";
  druidGoldInfo.style.display = "block";

  rogueAll.style.display = "block"
  barbAll.style.display = "block"
  monkAll.style.display = "block"
  druidAll.style.display = "block"

  cardsAll.style.gridTemplateColumns = "repeat(6, 1fr)"
};

skillsButton.onclick = () => {
  sorcDisplay.innerHTML = sorcSkills;
  rogueDisplay.innerHTML = rogueSkills;
  clericDisplay.innerHTML = clericSkills;
  barbDisplay.innerHTML = barbSkills;
  monkDisplay.innerHTML = monkSkills;
  druidDisplay.innerHTML = druidSkills;

  sorcAbilityInfo.style.display = "none";
  rogueAbilityInfo.style.display = "none";
  clericAbilityInfo.style.display = "none";
  barbAbilityInfo.style.display = "none";
  monkAbilityInfo.style.display = "none";
  druidAbilityInfo.style.display = "none";

  sorcGoldInfo.style.display = "none";
  rogueGoldInfo.style.display = "none";
  clericGoldInfo.style.display = "none";
  barbGoldInfo.style.display = "none";
  monkGoldInfo.style.display = "none";
  druidGoldInfo.style.display = "none";

  rogueAll.style.display = "block"
  barbAll.style.display = "block"
  monkAll.style.display = "block"
  druidAll.style.display = "block"

  cardsAll.style.gridTemplateColumns = "repeat(6, 1fr)"
};

abilitiesButton.onclick = () => {
  sorcDisplay.innerHTML = sorcAbility;
  rogueDisplay.innerHTML = rogueAbility;
  clericDisplay.innerHTML = clericAbility;
  barbDisplay.innerHTML = barbAbility;
  monkDisplay.innerHTML = monkAbility;
  druidDisplay.innerHTML = druidAbility;

  sorcAbilityInfo.style.display = "inline-block";
  rogueAbilityInfo.style.display = "inline-block";
  clericAbilityInfo.style.display = "inline-block";
  barbAbilityInfo.style.display = "inline-block";
  monkAbilityInfo.style.display = "inline-block";
  druidAbilityInfo.style.display = "inline-block";

  sorcGoldInfo.style.display = "none";
  rogueGoldInfo.style.display = "none";
  clericGoldInfo.style.display = "none";
  barbGoldInfo.style.display = "none";
  monkGoldInfo.style.display = "none";
  druidGoldInfo.style.display = "none";

  rogueAll.style.display = "block"
  barbAll.style.display = "block"
  monkAll.style.display = "block"
  druidAll.style.display = "block"

  cardsAll.style.gridTemplateColumns = "repeat(6, 1fr)"
};

spellsButton.onclick = () => {
  rogueAll.style.display = "none"
  barbAll.style.display = "none"
  monkAll.style.display = "none"
  druidAll.style.display = "none"

  sorcGoldInfo.style.display = "none";
  rogueGoldInfo.style.display = "none";
  clericGoldInfo.style.display = "none";
  barbGoldInfo.style.display = "none";
  monkGoldInfo.style.display = "none";
  druidGoldInfo.style.display = "none";

  cardsAll.style.gridTemplateColumns = "repeat(2, 1fr)"
}