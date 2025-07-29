// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
  const characters = document.querySelectorAll('.character');
  
  // Create detailed popup HTML
  const popupHTML = `
    <div id="popup" class="popup">
      <div class="popup-content">
        <span class="close-btn">&times;</span>
        <img id="popup-image" src="" alt="Character Image" class="popup-image">
        <h2 id="popup-title" class="popup-title"></h2>
        <p id="popup-description" class="popup-description"></p>
        <div class="popup-details">
          <h3>Character Details</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">Rarity:</span>
              <span id="popup-rarity" class="detail-value">★★★★★</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Element:</span>
              <span id="popup-element" class="detail-value">Various</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Path:</span>
              <span id="popup-path" class="detail-value">Various</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Weapon:</span>
              <span id="popup-weapon" class="detail-value">Various</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Origin:</span>
              <span id="popup-origin" class="detail-value">Unknown</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Affiliation:</span>
              <span id="popup-affiliation" class="detail-value">Various</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing popup and add new one
  const existingPopup = document.getElementById('popup');
  if (existingPopup) {
    existingPopup.remove();
  }
  document.body.insertAdjacentHTML('beforeend', popupHTML);
  
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const popupRarity = document.getElementById('popup-rarity');
  const popupElement = document.getElementById('popup-element');
  const popupPath = document.getElementById('popup-path');
  const popupWeapon = document.getElementById('popup-weapon');
  const popupOrigin = document.getElementById('popup-origin');
  const popupAffiliation = document.getElementById('popup-affiliation');
  const closeBtn = document.querySelector('.close-btn');
  
  // Character data
  const characterData = {
    0: {
      name: "Trailblazer",
      description: "The main protagonist of Honkai: Star Rail. A mysterious individual who boarded the Astral Express to traverse the galaxy.",
      rarity: "★★★★★",
      element: "Physical/Fire",
      path: "Destruction/Preservation",
      weapon: "Bat/Lance",
      origin: "Unknown",
      affiliation: "Astral Express"
    },
    1: {
      name: "Dan Heng", 
      description: "A cold and reserved young man who is a guard of the Astral Express. He wields a spear in battle and has a mysterious past.",
      rarity: "★★★★",
      element: "Wind",
      path: "The Hunt",
      weapon: "Spear",
      origin: "Xianzhou Luofu",
      affiliation: "Astral Express"
    },
    2: {
      name: "March 7th",
      description: "A spirited girl who was saved from eternal ice. She's optimistic, curious, and loves taking photos of her adventures.",
      rarity: "★★★★",
      element: "Ice",
      path: "Preservation",
      weapon: "Bow",
      origin: "Unknown (Found in Ice)",
      affiliation: "Astral Express"
    },
    3: {
      name: "Himeko",
      description: "The navigator of the Astral Express. A mature and reliable woman with a passion for coffee and stellar exploration.",
      rarity: "★★★★★",
      element: "Fire",
      path: "Erudition",
      weapon: "Greatsword",
      origin: "Unknown",
      affiliation: "Astral Express"
    },
    4: {
      name: "Welt",
      description: "A wise gentleman and former sovereign of Anti-Entropy. He possesses the power of gravity and vast experience.",
      rarity: "★★★★★",
      element: "Imaginary",
      path: "Nihility",
      weapon: "Cane",
      origin: "Earth",
      affiliation: "Astral Express"
    },
    5: {
      name: "Kafka",
      description: "A member of the Stellaron Hunters who is calm, collected, and beautiful.",
      rarity: "★★★★★",
      element: "Lightning",
      path: "Nihility",
      weapon: "Katana/UZI",
      origin: "Unknown",
      affiliation: "Stellaron Hunter"
    },
    6: {
      name: "Firefly",
      description: "A member of the Stellaron Hunters and a young girl clad in a mechanical armor SAM.",
      rarity: "★★★★★",
      element: "Fire",
      path: "Destruction",
      weapon: "Strategic Assault Mech/Sword",
      origin: "Unknown",
      affiliation: "Stellaron Hunter"
    },
    7: {
      name: "Silver Wolf",
      description: "A member of the Stellaron Hunters and a genius hacker.",
      rarity: "★★★★★",
      element: "Quantum",
      path: "Nihility",
      weapon: "Blaster",
      origin: "Unknown",
      affiliation: "Stellaron Hunter"
    },
    8: {
      name: "Blade",
      description: "A member of the Stellaron Hunters and a swordsman who abandoned his body to become a blade.",
      rarity: "★★★★★",
      element: "Wind",
      path: "Destruction",
      weapon: "Sword",
      origin: "Xianzhou Luofu",
      affiliation: "Stellaron Hunter"
    },
    9: {
      name: "The Herta",
      description: "Esteemed member #83 of the Genius Society, human, female, young, beautiful, attractive.",
      rarity: "★★★★★",
      element: "Ice",
      path: "Erudition",
      weapon: "Key",
      origin: "The Blue",
      affiliation: "Genius Society"
    },
    10: {
      name: "Ruan Mei",
      description: "A sweet-tempered and elegant scholar, and Member #81 of the Genius Society.",
      rarity: "★★★★★",
      element: "Ice",
      path: "Harmony",
      weapon: "Ruan",
      origin: "Unknown",
      affiliation: "Genius Society"
    },
    11: {
      name: "Asta",
      description: "She is the inquisitive lead astronomer responsible for handling the Herta Space Station's affairs, including managing the staff and responding to the Intelligentsia Guild.",
      rarity: "★★★★",
      element: "Fire",
      path: "Harmony",
      weapon: "Telescopic Staff",
      origin: "Unknown",
      affiliation: "Herta Space Station"
    },
    12: {
      name: "Arlan",
      description: "He is the head of Herta Space Station's security department, often seen with a dog named Peppy.",
      rarity: "★★★★",
      element: "Lightning",
      path: "Destruction",
      weapon: "Greatsword",
      origin: "Unknown",
      affiliation: "Herta Space Station"
    },
    13: {
      name: "Herta",
      description: "A puppet of Herta, Member #83 of the Genius Society and master of the eponymous Herta Space Station, modeled after her younger self.",
      rarity: "★★★★",
      element: "Ice",
      path: "Erudition",
      weapon: "Hammer",
      origin: "The Blue",
      affiliation: "Herta Space Station"
    },
    14: {
      name: "Seele",
      description: "A spirited and valiant key member of Wildfire who grew up in the perilous Underworld of Belobog.",
      rarity: "★★★★★",
      element: "Quantum",
      path: "Hunt",
      weapon: "Scythe",
      origin: "Belobog",
      affiliation: "Wildfire"
    },
    15: {
      name: "Bronya",
      description: "The current Supreme Guardian of Belobog,[4] she is the young and capable commander of the Silvermane Guards.",
      rarity: "★★★★★",
      element: "Wind",
      path: "Harmony",
      weapon: "Bolt action Rifle",
      origin: "Belobog",
      affiliation: "Silvermane Guards"
    },
    16: {
      name: "Gepard",
      description: "The honorable and upstanding captain of the Silvermane Guards who bears the noble Landau family name. ",
      rarity: "★★★★★",
      element: "Ice",
      path: "Preservation",
      weapon: "Modified Guitar Case",
      origin: "Belobog",
      affiliation: "Wildfire"
    },
    17: {
      name: "Clara",
      description: "She is a shy young girl orphaned at an early age, accompanied by an ancient mech named Svarog.",
      rarity: "★★★★★",
      element: "Physical",
      path: "Destruction",
      weapon: "Svarog",
      origin: "Belobog",
      affiliation: "Svarog's Scavengers/The Moles"
    },
    18: {
      name: "Natasha",
      description: "Fastidious and kind, she is one of the few doctors from the Underworld where medical resources are scarce.",
      rarity: "★★★★",
      element: "Physical",
      path: "Abundance",
      weapon: "Grenade Launcher",
      origin: "Belobog",
      affiliation: "Wildfire"
    },
    19: {
      name: "Sampo",
      description: "A silver-tongued salesman. Where there is profit to be made, you can be sure Sampo is nearby.",
      rarity: "★★★★",
      element: "Wind",
      path: "Nihility",
      weapon: "Dagger",
      origin: "Unknown",
      affiliation: "Masked Fools"
    },
    20: {
      name: "Luka",
      description: "An optimistic and carefree member of Wildfire.",
      rarity: "★★★★",
      element: "Physical",
      path: "Nihility",
      weapon: "Iron Fist",
      origin: "Belobog",
      affiliation: "Wildfire"
    },
    21: {
      name: "Hook",
      description: "The self-proclaimed boss of The Moles adventure squad and Fersman's adopted daughter.",
      rarity: "★★★★",
      element: "Fire",
      path: "Destruction",
      weapon: "Diggerton",
      origin: "Belobog",
      affiliation: "The Moles"
    },
    22: {
      name: "Lynx",
      description: "The youngest daughter of the Landau Family, and one of Belobog's best extreme environments explorers.",
      rarity: "★★★★",
      element: "Quantum",
      path: "Abundance",
      weapon: "Climbing Ark",
      origin: "Belobog",
      affiliation: "Landau Family"
    },
    23: {
      name: "Serval",
      description: "The eldest daughter of the Landau Family, and a mechanic in a workshop called Neverwinter.",
      rarity: "★★★★",
      element: "Lightning",
      path: "Erudition",
      weapon: "Electric Guitar",
      origin: "Belobog",
      affiliation: "Neverwinter Workshop"
    },
    24: {
      name: "Pela",
      description: "The meticulous Intelligence Officer of the Silvermane Guards. While young, she is undeniably brilliant.",
      rarity: "★★★★",
      element: "Ice",
      path: "Nihility",
      weapon: "Catalyst",
      origin: "Belobog",
      affiliation: "Silvermane Guard"
    },
    
  };

  
  // Add click event to each character
  characters.forEach((character, index) => {
    character.addEventListener('click', function() {
      const img = character.querySelector('img');
      
      // Set popup content
      popupImage.src = img.src;
      popupImage.alt = img.alt;
      
      // Use character data if available, otherwise use card content
      if (characterData[index]) {
        const char = characterData[index];
        popupTitle.textContent = char.name;
        popupDescription.textContent = char.description;
        popupRarity.textContent = char.rarity;
        popupElement.textContent = char.element;
        popupPath.textContent = char.path;
        popupWeapon.textContent = char.weapon;
        popupOrigin.textContent = char.origin;
        popupAffiliation.textContent = char.affiliation;
      } else {
        popupTitle.textContent = `Character ${index + 1}`;
        popupDescription.textContent = "A mysterious character from Honkai: Star Rail.";
        popupRarity.textContent = "★★★★";
        popupElement.textContent = "Unknown";
        popupPath.textContent = "Unknown";
        popupWeapon.textContent = "Unknown";
        popupOrigin.textContent = "Unknown";
        popupAffiliation.textContent = "Unknown";
      }
      
      // Show popup
      popup.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });
  
  // Close popup functionality
  function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
  
  closeBtn.addEventListener('click', closePopup);
  
  // Close popup when clicking outside content
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      closePopup();
    }
  });
  
  // Close popup with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      closePopup();
    }
  });
});
