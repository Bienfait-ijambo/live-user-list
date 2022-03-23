document.addEventListener("DOMContentLoaded", function () {
  let userList = document.querySelector("#result");
  let searchInput = document.querySelector("#filter");
  let html = "";
  let filteredName = [];

  let userName = [
    {
      name: "Bienfait ijambo",
      bio: "SoftWare ingeneer",
    },
    {
      name: "David",
      bio: "SoftWare ingeneer",
    },
    {
      name: "Chritobale",
      bio: "SoftWare ingeneer",
    },
    {
      name: "Benois",
      bio: "SoftWare ingeneer",
    },
    {
      name: "Xavier",
      bio: "SoftWare ingeneer",
    },
  ];

  if (searchInput.value === "") {
    displayUserName(userName);
  }

  searchInput.addEventListener("keyup", (e) => {
    userName.filter((user, index) => {
      if (user.name.includes(e.target.value)) {
        const bool = filteredName.some((el) => el.name == user.name);
        if (!bool) {
          filteredName.push(userName[index]);
        }
      }
      // document.querySelector("#result").innerHTML=""
      // displayUserName(filteredName);
      // console.log(filteredName);
    });
  });

  // function findElementInArray(array){
  //   const bool=array.some((el)=>el.name=array.name)

  // }

  function displayUserName(userArray) {
    // userList.innerHTML="";
    setTimeout(() => (userList.innerHTML = ""), 2000);
    userArray.forEach((user) => {
      html += ` <li>
            <img  src="./img/avatar.png" alt="">
            <div class="user-info">
                <h4>${user.name}</h4>
                <p>${user.bio}</p>
            </div>
         </li>`;
      userList.innerHTML = html;
    });
  }
});
