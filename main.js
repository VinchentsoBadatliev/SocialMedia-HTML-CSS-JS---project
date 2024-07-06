// SIDEBAR VAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES VAR
const messagesNotification = document.querySelector('#messages-notifications');
/* message box */
const messages = document.querySelector('.messages');
/* search bar filter message , get all individual messages */
const message = messages.querySelectorAll('.message');
/* get message search box */
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
/* font size */
const fontSize = document.querySelectorAll('.choose-size span');
/* change top sticky on different font sizes - grab root element*/
var root = document.querySelector(':root');
/* change primary colors */
const colorPalette = document.querySelectorAll('.choose-color span')
/*bg change */
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');





//  ============ SIDEBAR ==================

// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    /* remove active of all items */
    changeActiveItem();
    /* active is only one ho is clicked */
    item.classList.add('active');
    /* if dont have class notifaction display none */
    if(item.id != 'notifications'){
      document.querySelector('.notifications-popup')
      .style.display = 'none';
      /* other wise if have class notif.-popup show pop-up on click */
    } else{
      document.querySelector('.notifications-popup')
      .style.display = 'block';
      /* in notf. grab class notif count and  hide notif count on click */
      document.querySelector('#notifications .notification-count').style.display ='none';
    }
  })
})

//  ============ MESSAGES ==================

//search chats
const searchMessage = () => {
  /* turn all text to lower case */
  const val = messageSearch.value.toLowerCase();
 
  /* grab user and turn text to lower case */
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    /* match the names i get to names that i type in if match index cant be -1 */
    if(name.indexOf(val) != -1){
      /* if it is a match */
      chat.style.display = 'flex';
    }else{
      chat.style.display = 'none';
    }

  })
}


// search chat 
messageSearch.addEventListener('keyup', searchMessage);

// hightlight message card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  /* hide notif. count on messages */
  messagesNotification.querySelector('.notification-count').style.display = 'none'
  /* disapear after 2 sec */
  setTimeout(() => {
    messages.style.boxShadow ='none';
  },2000);

})

// THEME/DISPLAY CUSTOMIZATION

/* open and close modal */

/* open on click modal*/
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
// close modal e = even , to use target for close , .customize-theme is in container ho holds theme custmization
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none';
  }
}

/* closing modal on click outside of card */
themeModal.addEventListener('click', closeThemeModal);



theme.addEventListener('click', openThemeModal);



// =============================== FONTS ================================ //

//remove active class of dots 
const removeSizeSelector = () => {
  fontSize.forEach(size => {
    size.classList.remove('active');
  })
}

fontSize.forEach(size => {
  

  /* on wat calss we select we give sertant font size */
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
  /* change background of dot on click */
    size.classList.toggle('active');


    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      /* chane top sticky */
      root.style.setProperty('---sticky-top-left', '5.4rem');
      root.style.setProperty('---sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('---sticky-top-left', '5.4rem');
      root.style.setProperty('---sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('---sticky-top-left', '-2rem');
      root.style.setProperty('---sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('---sticky-top-left', '-5rem');
      root.style.setProperty('---sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('---sticky-top-left', '-12rem');
      root.style.setProperty('---sticky-top-right', '-33rem');
    }
    // Change font size of the root html element
  document.querySelector('html').style.fontSize = fontSize;
    })
    
})

  // remove active class from colors
  const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
      colorPicker.classList.remove('active');
    })
  }


 // CHANGE PRIMARY COLORS 
 colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
     // remove active class from colors
    changeActiveColorClass();

    if(color.classList.contains('color-1')){
      primaryHue = 252;
    }else if (color.classList.contains('color-2')){
      primaryHue = 52;
    }else if (color.classList.contains('color-3')){
      primaryHue = 352;
    }else if (color.classList.contains('color-4')){
      primaryHue = 152;
    }else if (color.classList.contains('color-5')){
      primaryHue = 202;
    }
    /* white border */
    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue)

   }) 
})







// Theme BG values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Function to change background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

// Add event listeners for background options

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');

  // Define color lightness values for Bg1 (adjust these values as needed)
  darkColorLightness = '17%';
  whiteColorLightness = '100%';
  lightColorLightness = '95%';

  // Apply background changes
  changeBG();
});

Bg2.addEventListener('click', () => {
  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');

  // Define color lightness values for Bg2 (adjust these values as needed)
  darkColorLightness = '40%';
  whiteColorLightness = '90%';
  lightColorLightness = '75%';

  // Apply background changes
  changeBG();
});

Bg3.addEventListener('click', () => {
  Bg3.classList.add('active');
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');

  // Define color lightness values for Bg3 (adjust these values as needed)
  darkColorLightness = '60%';
  whiteColorLightness = '80%';
  lightColorLightness = '50%';

  // Apply background changes
  changeBG();
});

// THE END