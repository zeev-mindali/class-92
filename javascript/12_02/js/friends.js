var friendList = [];

const getData = () => {
  var fName = document.getElementById("fName").value;
  var fTel = document.getElementById("fTel").value;
  var fPhoto = document.getElementById("fImg").value;

  console.log(fName, fTel, fPhoto);

  var newFriend = new Object();
  newFriend.name = fName;
  newFriend.tel = fTel;
  newFriend.photo = fPhoto;

  friendList.push(newFriend);

  console.log(friendList);
  document.getElementById("friendForm").reset();
};
