document.addEventListener('DOMContentLoaded', function() {
    const characterCards = document.querySelectorAll('.character-card');

    // Character explanations
    const characterInfo = {
        "Trailblazer": "The main protagonist of Honkai: Star Rail. A mysterious individual who boarded the Astral Express to traverse the galaxy.",
        "Dan Heng": "A reserved guard of the Astral Express, skilled with his spear.",
        "March 7th": "A cheerful girl with mysterious origins and a camera.",
        "Himeko": "A scientist and navigator, she discovered the Astral Express.",
        "Welt": "A wise former leader, brings knowledge from another world.",
        "Kafka": "A mysterious Stellaron Hunter, manipulates fate and memories.",
        "Firefly": "A new Stellaron Hunter, shrouded in secrecy and fire.",
        "Silver Wolf": "A genius hacker, loves games and digital battles.",
        "Blade": "A cold swordsman, his body heals as he fights.",
        "Seele": "A spirited and valiant key member of Wildfire who grew up in the perilous Underworld of Belobog.",
        "Bronya": "The current Supreme Guardian of Belobog, she is the young and capable commander of the Silvermane Guards.",
        "Gepard": "The honorable and upstanding captain of the Silvermane Guards who bears the noble Landau family name.",
        "Clara": "She is a shy young girl orphaned at an early age, accompanied by an ancient mech named Svarog.",
        "Hook": "The self-proclaimed boss of The Moles adventure squad and Fersman's adopted daughter.",
        "Sampo": "A silver-tongued salesman. Where there is profit to be made, you can be sure Sampo is nearby.",
        "Lynx": "The youngest daughter of the Landau Family, and one of Belobog's best extreme environments explorers.",
        "Natasha": "Fastidious and kind, she is one of the few doctors from the Underworld where medical resources are scarce.",
        "Serval": "The eldest daughter of the Landau Family, and a mechanic in a workshop called Neverwinter.",
        "Pela": "A member of the Silvermane Guards, Pela is a strategist and tactician with a sharp mind.",
        "Luka": "An optimistic and carefree member of Wildfire.",
    };

    // Character details (example, add more as needed)
    const characterDetails = {
        "Trailblazer": {
            "Rarity": "★★★★★",
            "Element": "Physical/Fire",
            "Path": "Destruction/Preservation",
            "Weapon": "Bat/Lance",
            "Origin": "Unknown",
            "Affiliation": "Astral Express"
        },
        "Dan Heng": {
            "Rarity": "★★★★",
            "Element": "Wind",
            "Path": "Hunt",
            "Weapon": "Spear",
            "Origin": "Xianzhou",
            "Affiliation": "Astral Express"
        },
        "March 7th": {
            "Rarity": "★★★★",
            "Element": "Ice",
            "Path": "Preservation",
            "Weapon": "Bow",
            "Origin": "Unknown",
            "Affiliation": "Astral Express"
        },
        "Himeko": {
            "Rarity": "★★★★★",
            "Element": "Fire",
            "Path": "Erudition",
            "Weapon": "Greatsword",
            "Origin": "Unknown",
            "Affiliation": "Astral Express"
        },
        "Welt": {
            "Rarity": "★★★★★",
            "Element": "Imaginary",
            "Path": "Nihility",
            "Weapon": "Cane",
            "Origin": "Earth",
            "Affiliation": "Astral Express"
        },
        "Kafka": {
            "Rarity": "★★★★★",
            "Element": "Lightning",
            "Path": "Nihility",
            "Weapon": "Sword/UZI",
            "Origin": "Unknown",
            "Affiliation": "Stellaron Hunters"
        },
        "Firefly": {
            "Rarity": "★★★★★",
            "Element": "Fire",
            "Path": "Destruction",
            "Weapon": "Strategic Assault Mech/Sword",
            "Origin": "Unknown",
            "Affiliation": "Stellaron Hunters"
        },
        "Silver Wolf": {
            "Rarity": "★★★★★",
            "Element": "Quantum",
            "Path": "Nihility",
            "Weapon": "Blaster",
            "Origin": "Unknown",
            "Affiliation": "Stellaron Hunters"
        },
        "Blade": {
            "Rarity": "★★★★★",
            "Element": "Wind",
            "Path": "Destruction",
            "Weapon": "Sword",
            "Origin": "Xianzhou Luofu",
            "Affiliation": "Stellaron Hunters"
        },
        "Seele": {
            "Rarity": "★★★★★",
            "Element": "Quantum",
            "Path": "Hunt",
            "Weapon": "Scythe",
            "Origin": "Belobog",
            "Affiliation": "Wildfire"
        },
        "Bronya": {
            "Rarity": "★★★★★",
            "Element": "Wind",
            "Path": "Harmony",
            "Weapon": "Kilo-bolt rifle",
            "Origin": "Belobog",
            "Affiliation": "Silvermane Guards"
        },
        "Gepard": {
            "Rarity": "★★★★★",
            "Element": "Ice",
            "Path": "Preservation",
            "Weapon": "Guitar case",
            "Origin": "Belobog",
            "Affiliation": "Silvermane Guards"
        },
        "Clara": {
            "Rarity": "★★★★★",
            "Element": "Physical",
            "Path": "Destruction",
            "Weapon": "Svarog",
            "Origin": "Belobog",
            "Affiliation": "Svarog's Scavengers/The Moles"
        },
        "Hook": {
            "Rarity": "★★★★",
            "Element": "Fire",
            "Path": "Destruction",
            "Weapon": "Diggerton",
            "Origin": "Belobog",
            "Affiliation": "The Moles"
        },
        "Sampo": {
            "Rarity": "★★★★",
            "Element": "Wind",
            "Path": "Nihility",
            "Weapon": "Dagger",
            "Origin": "Unknown",
            "Affiliation": "Masked Fools"
        },
        "Lynx": {
            "Rarity": "★★★★",
            "Element": "Quantum",
            "Path": "Abundance",
            "Weapon": "Climbing ark",
            "Origin": "Belobog",
            "Affiliation": "Landau Family"
        },
        "Natasha": {
            "Rarity": "★★★★",
            "Element": "Physical",
            "Path": "Abundance",
            "Weapon": "Grenade launcher",
            "Origin": "Belobog",
            "Affiliation": "Wildfire"
        },
        "Serval": {
            "Rarity": "★★★★",
            "Element": "Lightning",
            "Path": "Erudition",
            "Weapon": "Guitar",
            "Origin": "Belobog",
            "Affiliation": "Neverwinter Workshop"
        },
        "Pela": {
            "Rarity": "★★★★",
            "Element": "Ice",
            "Path": "Nihility",
            "Weapon": "Catalyst",
            "Origin": "Belobog",
            "Affiliation": "Silvermane Guards"
        },
        "Luka": {
            "Rarity": "★★★★",
            "Element": "Physical",
            "Path": "Nihility",
            "Weapon": "Iron fist",
            "Origin": "Belobog",
            "Affiliation": "Wildfire"
        },
        
    };

    // Modal elements
    const modal = document.getElementById('character-modal');
    const modalName = document.getElementById('modal-character-name');
    const modalDesc = document.getElementById('modal-character-desc');
    const modalImg = document.getElementById('modal-character-img');
    const modalDetails = document.getElementById('modal-character-details');
    const closeBtn = document.querySelector('.close-btn');

    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const characterName = this.querySelector('.character-name').textContent;
            const avatarImg = this.querySelector('.character-avatar img');
            modalName.textContent = characterName;
            modalDesc.textContent = characterInfo[characterName] || "No description available.";
            modalImg.src = avatarImg.src;
            modalImg.alt = avatarImg.alt;

            // Fill details
            const details = characterDetails[characterName];
            if (details) {
                let html = `<div class="modal-character-details-title">Character Details</div><div class="details-grid">`;
                for (const [label, value] of Object.entries(details)) {
                    html += `<div class="detail-item"><span class="detail-label">${label}:</span> <span class="detail-value">${value}</span></div>`;
                }
                html += `</div>`;
                modalDetails.innerHTML = html;
            } else {
                modalDetails.innerHTML = '';
            }

            modal.classList.add('show');
        });

        card.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.character-avatar');
            avatar.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.character-avatar');
            avatar.style.transform = 'scale(1)';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    // Close modal when clicking outside modal-content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    function setupSlider(sliderId, leftBtnClass, rightBtnClass, scrollAmount = 200) {
        const slider = document.getElementById(sliderId);
        const leftBtn = slider.parentElement.querySelector(leftBtnClass);
        const rightBtn = slider.parentElement.querySelector(rightBtnClass);

        leftBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    setupSlider('jarilo-vi-slider', '.slider-btn.left', '.slider-btn.right', 220);
});
