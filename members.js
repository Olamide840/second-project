const members = [
    { id: 1, Name: 'Adekunle Glory Olamide', Username: 'Olami001', Email: 'gloryadekunle94@gmail.com', PhoneNumber: '07026300956', image: 'happy.jpg', Country: 'Nigeria'},
    { id: 2, Name: 'Jhon Doe Jeremiah', Username: 'Jhon02$', Email: 'jhondoe88@gmail.com', Username: 'Johnd$2', PhoneNumber: '+1 98532546', image: 'Google.JPEG', Country: 'United States of America'},
    { id: 3, Name: 'Harryls Job Smith', Username: 'SmithJob52', Email: 'HarrylsJob62@gmail.com', PhoneNumber: '+44 34519768', image: 'dark.JPEG', Country: 'United Kingdom'},
    { id: 4, Name: 'Ademola Joseh Akorede', Username: 'Akorede2', Email: 'Akorede69@gmail.com', PhoneNumber: '08023416548', image: 'happy.jpg', Country: 'Nigeria'},
    { id: 5, Name: 'Olayiwola Joseph Akano', Username: 'Akano11', Email: 'Akano21@gmail.com', PhoneNumber: '07025308762', image: 'photo.jpg', Country: 'Nigeria'},
    { id: 6, Name: 'Adewale Jhonson Samuel', Username: 'Samuel52', Email: 'Adewale22@gmail.com', PhoneNumber: '07012433278', image: 'Google.JPEG', Country: 'Nigeria'},
    { id: 7, Name: 'Babarinde Joshua Oluwakayode', Username: 'Joshuadgreat', Email: 'Oluwakayode54@gmail.com', PhoneNumber: '09034218741', image: 'dark.JPEG', Country: 'Nigeria'},
    { id: 8, Name: 'Sarafadeen Aishat Ayomide', Username: 'Aishatbaby001', Email: 'Aishatbaby65@gmail.com', PhoneNumber: '09013226547', image: 'happy.jpg', Country: 'Nigeria'},
    { id: 9, Name: 'Ojetayo Emmanuel Samson', Username: 'emmaofGod', Email: 'emmaunel90@gmail.com', PhoneNumber: '08123451324', image: 'Google.JPEG', Country: 'Nigeria'},
    { id: 10, Name: 'Olushola Marvellous Adebayo', Username: 'marvehDC', Email: 'adebayo89@gmail.com', PhoneNumber: '09014257613', image: 'dark.JPEG', Country: 'Nigeria'},
    { id: 11, Name: 'Godwin Elizabeth Precious', Username: 'precygirl45', Email: 'preciouselizabeth654@gmail.com', PhoneNumber: '07024311873', image: 'happy.jpg', Country: 'Nigeria'},
    { id: 12, Name: 'Muriel Friday Espinoza', Username: 'Friday Espinoza', Email: 'fridayespinoza143@gmail.com', PhoneNumber: '+1 24433765', image: 'Google.JPEG', Country: 'United States of America'},
    { id: 13, Name: 'Olusegun Adebisi Praise', Username: 'Adebisipraise32', Email: 'adebisipraise092@gmail.com',  PhoneNumber: '07065244139', image: 'dark.JPEG', Country: 'Nigeria'},
    { id: 14, Name: 'Olayiwola Ahmed Abdrokeeb', Username: 'Rokeeb43', Email: 'abdrokeeb16@gmail.com', PhoneNumber: '08123175720', image: 'photo.jpg', Country: 'Nigeria'},
    { id: 15, Name: 'Jessica Perry Roseline', Username: 'Roseline1234', Email: 'jessicarose231@gmail.com', PhoneNumber: '+1 246143316', image: 'happy.jpg', Country: 'United States of America'},
    { id: 16, Name: 'Adewale Adesewa Ayomide', Username: 'Ayomide218', Email: 'adesewaayomide98@gmail.com', PhoneNumber: '07024127613', image: 'photo.jpg', Country: 'Nigeria'},
    
];
function renderMemberList(membersToRender = members) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';
    membersToRender.forEach((member) => {
        const memberHTML = `
    <li class="member">
        <img src="${member.image}" alt="${member.Name}">
        <div class="member-info">
            <h2>${member.Name}</h2>
            <p>Username: ${member.Username}</p>
            <p>Email: ${member.Email}</p>
            <p>Phone Number: ${member.PhoneNumber}</p>
            <p>Country: ${member.Country}</p>
            <label style="color: #ff4200;font-weight: 700;">Active Now *</label><br><br>
            <button style="background: red;padding: 12px;border: none;border-radius: 10px;width: 100px;cursor: pointer;"><a href="message.html" style="color: white;text-decoration: none;">Message</a></button>
        
        </div>
    </li>
 `;
 memberList.insertAdjacentHTML('beforeend', memberHTML);
    });
}

function handleSearch(event) { 
    const searchQuery = event.target.value.toLowerCase();
    const filteredMembers = members.filter((member) => member.Name.toLowerCase().includes(searchQuery));

    renderMemberList(filteredMembers);
}
renderMemberList();
document.getElementById('search').addEventListener('input', handleSearch);