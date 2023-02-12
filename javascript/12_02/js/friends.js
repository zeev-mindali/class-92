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
  makeTable();
};

const makeTable = () => {
  var result = "";
  for (var index = 0; index < friendList.length; index++) {
    result += `
            <tr>
                <td>${friendList[index].name}</td>
                <td>${friendList[index].tel}</td>
                <td><img src="${friendList[index].photo}" width="100"/></td>
            </tr>
        `;
  }
  document.getElementById("friendTable").innerHTML = result;
};
