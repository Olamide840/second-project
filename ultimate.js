
// Show a section when clicked
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
  
    document.getElementById(sectionId).style.display = 'block';
  };
  //to make user enter their nickname that will display on dashboard
  
  if (localStorage.getItem('use') === null) {
    const use = prompt('Please Enter Your Nickname:');
    localStorage.setItem('use',use);
    document.getElementById('use').textContent = use;
  } else {
    const storedUse = localStorage.getItem('use');
    document.getElementById('use').textContent = storedUse;
  };
 
 //activities of other users
 const activityList = document.getElementById('activity-list');
 const activityItems = [
  'Jhon Doe posted A new comment',
  'Sarah Teresa added a new Photo',
  'Job Saint posted on the Community Chats',
  'Micheal Cena deleted a Post',
  'Adekunle Glory,Joined the community via the Commmunity Group link',
  'Robert Greenhood updated a New Profile Picture', 
 ];
 activityItems.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  activityList.appendChild(listItem);
 });
 document.getElementById('total-posts').textContent = 213282 + 'Posts';
 document.getElementById('total-users').textContent = 317 + 'Users';
 document.getElementById('total-active').textContent = 123 + 'Users';

 const light = document.getElementById('light');
 const dark = document.getElementById('dark');
 const body = document.body;

 light.addEventListener('click', () => {
  body.classList.remove('dark');
 });
 dark.addEventListener('click', () => {
  body.classList.add('dark');
 });

 const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', () => {
        const confirmLogout = confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            window.location.href = 'ultimateapp.html';
        } else {
            return;
        }
    });