document.addEventListener('DOMContentLoaded', function() {
    const characterCards = document.querySelectorAll('.character-card');

    // Character explanations
    const characterInfo = {
        "Trailblazer": "The main protagonist, adaptable to different combat paths.",
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
        "Serval": "The eldest daughter of the Landau Family, and a mechanic in a workshop called Neverwinter.   ",
        "Pela": "A member of the Silvermane Guards, Pela is a strategist and tactician with a sharp mind.",
        "Luka": "An optimistic and carefree member of Wildfire.",
    };

    // Modal elements
    const modal = document.getElementById('character-modal');
    const modalName = document.getElementById('modal-character-name');
    const modalDesc = document.getElementById('modal-character-desc');
    const modalImg = document.getElementById('modal-character-img');
    const closeBtn = document.querySelector('.close-btn');

    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const characterName = this.querySelector('.character-name').textContent;
            const avatarImg = this.querySelector('.character-avatar img');
            modalName.textContent = characterName;
            modalDesc.textContent = characterInfo[characterName] || "No description available.";
            modalImg.src = avatarImg.src;
            modalImg.alt = avatarImg.alt;
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
