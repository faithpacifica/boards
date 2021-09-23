// list of users4
let users = [
        new User('Antionette Martinez', 'UI Designer', 3, undefined, 24, '1 task overdue!'),
        new User('Chris Harris', 'C# Developer', 3, 'images/image.jpg', 24, undefined),
        new User('Dana Sims', 'Front End', 3, undefined, 24, undefined),
        new User('Nick Robins', '.Net Developer', 3, undefined, 24, '2 task overdue!'),
        new User('Sandra Osborne', 'Team Leader', 3, 'images/image1.jpg', 24, undefined),
        new User('Team Johnson', 'Product Owner', 3, undefined, 24, undefined),
        new User('Helen Coppola', 'UI Designer', 3, 'images/image2.jpg', 24, undefined),
        new User('Victor Parker', 'Full Stack', 3, 'images/image3.jpg', 24, undefined),
    ]

    function User(name, profession, boards, image, tasks, overdue) {
        this.name = name;
        this.profession = profession;
        this.boards = boards;
        this.image = image;
        this.tasks = tasks;
        this.overdue = overdue;
    }

    const cards = document.getElementById('cards');

    function createMembersCard(el) {
        let card = document.createElement('div');
        card.className = "cards__member";

        let cardButton = document.createElement('button');
        cardButton.className = 'cards__button';

        let cardIcon = document.createElement('i');
        cardIcon.className = 'icon-menu cards__button';
        cardButton.appendChild(cardIcon);

        // Photo bulsa Bosh harfini olish
        
        let img = document.createElement('img')
            
        if (el.image) {
            img.src = el.image;
            img.className = 'cards__member__image';
        } 
        else{
            let avatar = document.createElement('span');
            avatar.className = 'avatar';
            avatar.style.backgroundColor = generateDarkColorRgb();
            card.appendChild(avatar);
            let a = el.name.split(' ')[0][0];
            let b = el.name.split(' ')[1][0];
            avatar.innerText = a + b;
            card.appendChild(avatar);
        }
        card.appendChild(img);
        

        let memberName = document.createElement('h3');
        memberName.className = 'cards-member__name';
        memberName.innerText = el.name;

        let memberProfession = document.createElement('p');
        memberProfession.className = 'cards-member__profession';
        memberProfession.innerText = el.profession;

      
        card.appendChild(cardButton);
        card.appendChild(memberName);
        card.appendChild(memberProfession);

        let rectangleDiv = document.createElement('div');
        rectangleDiv.className = 'rectangle-box';
        card.appendChild(rectangleDiv);

        let boardsDiv = document.createElement('div');
        boardsDiv.className = 'boards' ;
        rectangleDiv.appendChild(boardsDiv);

        let tasksDiv = document.createElement('div');
        tasksDiv.className = 'tasks';
        rectangleDiv.appendChild(tasksDiv);

        let boardsNumber = document.createElement('span');
        boardsNumber.className = 'boards-span';
        boardsNumber.innerText = el.boards + '\n Boards';
        boardsDiv.appendChild(boardsNumber);

        let tasksNumber = document.createElement('span');
        tasksNumber.className = 'tasks-span';
        tasksNumber.innerText = el.tasks + '\n Tasks';
        tasksDiv.appendChild(tasksNumber);
      


        if(el.overdue){
            let overdueText = document.createElement('p');
            overdueText.className = 'overdue-text';
            overdueText.innerText = el.overdue;
            card.appendChild(overdueText);
        }

        cards.appendChild(card);/*biggest DIV */
    }

    //random background color
    function generateDarkColorRgb() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256/2);
        return "rgb(" + red + ", " + green + ", " + blue + ")";
      }


    function addToMainCard(array) {
        cards.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            createMembersCard(array[i]);
        }
    }

    addToMainCard(users);

    // SEARCH 

    const inputEl = document.getElementById('searchInput');
    const cardsEl = document.getElementsByClassName('cards__member')
    inputEl.addEventListener('keyup', search);
    
    function search() {
        for (el of cardsEl) {
            if (el.innerText.toLowerCase().includes(inputEl.value)) {
                el.style.display = "block";
                
            } else {
                el.style.display = 'none';
            }
        }
    }

    /*--------------------------*/

    /* SIDEBAR */
    const closeSidebarEl = document.getElementById('close-sidebar');
    const openSidebarEl = document.getElementsByClassName('sidebar__logo')[0];
    const wrapperEl = document.getElementsByClassName('wrapper')[0];
    const menuItem = document.getElementById('sub-menu__item');
    const submenuEl = document.getElementById('submenu');
    const iconBottom = document.getElementById('bottom');

   
    closeSidebarEl.addEventListener('click', function () {
      wrapperEl.classList.remove('open');
    });
    openSidebarEl.addEventListener('click', function () {
        wrapperEl.classList.add('open');
      });

      menuItem.addEventListener('click', function() {
        if(submenuEl.style.display == 'block') {
            submenuEl.style.display = 'none';
            iconBottom.style.transform = 'rotate(0deg)'
        } else  {
            submenuEl.style.display = 'block'
            iconBottom.style.transform = 'rotate(180deg)'
        }
    });




    // Get the modal  TODO:not working

    let modal = document.getElementById("myModal");

    document.addEventListener('click', function(event){
        console.log(event.target);
        if(event.target.className == 'cards__button') {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    });