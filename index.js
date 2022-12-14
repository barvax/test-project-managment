let counter = 0;
let activeUserId = "";
let room = [{
	users:[{
		
	}],
	roomName:"",
	roomId:""
}];
let users = [{
	id:counter,
	userName:"ron",
	password:"1234",
	fName:"r",
	lName:"n",
	picture:"",
	rooms:[],
	reportToUser:activeUserId,///
	users:[]
	
	
},]

function addUser(userName,password,fName,lName,pictureLink){
	counter++;
	let user = {
		id:counter,
	userName:userName,
	password:password,
	fName:fName,
	lName:lName,
	picture:pictureLink,
	rooms:[],
	reportToUser:activeUserId,
	
	}
	getUserById(activeUserId).users.push(user);
	users.push(user)
	console.log(users)
	addUserElenent();
}
function addUserWithForm(){
	let userName = document.getElementById('input1');
	let password = document.getElementById('input2');
	let fName = document.getElementById('input3');
	let lName = document.getElementById('input4');
	let picture = document.getElementById('input5');
	addUser(userName.value,password.value,fName.value,lName.value,picture.value);
}


function getUserById(id){
	for(i=0;i<users.length;i++){
		if(id===users[i].id){
			const user =  users[i];
			console.log(user)
		return user;
		}
	}
}
function checkUserEnterSystem(userName,password){

	for(i=0;i<users.length;i++){
		if(userName===users[i].userName){
			console.log("found")
			if(password===users[i].password){
				console.log("enter system")
				activeUserId=users[i].id;
				 ShowUserOnScreen();
			}else{
				console.log("bad password")
			}
		}else{
			alert("userName not found")
			 LogIn();
		}
	}
	
}

function LogIn(){
	let name = prompt("enter user name");
	let password = prompt("enter password")
	checkUserEnterSystem(name,password)
}



////////////////////
function isRoomExist(id){
	let activeUser = getUserById(id);
	if(activeUser.rooms.length ===0){
		alert('no avalble room')
		let roomName = prompt("create room enter room name..")
		createRoom(roomName)
	}else{
		//alert('room found: ' + activeUser.rooms[0].roomName)
	}
}


function createRoom(roomName){
	let user = {
	id:getUserById(activeUserId).id,
	userName:getUserById(activeUserId).userName,
	
	fName:getUserById(activeUserId).fName,
	lName:getUserById(activeUserId).lName,
	picture:getUserById(activeUserId).picture,
	
	}

	console.log(user)
	let room = {
		roomName:roomName,
		roomId : (counter+roomName),
		users:user
	}
    getUserById(activeUserId).rooms.push(room)
	let roomHTML = document.getElementById('userRooms');
	roomHTML.innerHTML ='room name: '+ getUserById(activeUserId).rooms[0].roomName;
	
}
function ShowUserOnScreen(){
	let name = document.getElementById('userName');
	let id = document.getElementById('userId');
	
	
	name.innerHTML = getUserById(activeUserId).userName;
	id.innerHTML = getUserById(activeUserId).id;
	
	
}

function addUserElenent(){
	let root = document.getElementById('ul');
	let li = document.createElement('li');
	root.append(li);
	li.innerHTML=getUserById(activeUserId).rooms[0].users[0];
}

function addUserBtn(){
let x=	document.getElementById('enter-user');
x.style.visibility='visible';
}
console.log(users)
 LogIn();
 isRoomExist(activeUserId);