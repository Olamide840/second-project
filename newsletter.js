document.getElementById('submit').addEventListener('click', function(event){
event.preventDefault();
var prayer = document.getElementById('prayer').value;
if(!prayer){alert('Please Fill in your Prayer Request');return}
else{alert('Prayer Request Submitted Successfully.');return}
});