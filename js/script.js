document.addEventListener("DOMContentLoaded", function () {
  let userList = document.querySelector("#result");
  let searchVal = document.querySelector("#filter");
  let html = "";

  let apiUser = [
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
        name: "Bisimwa",
        bio: "SoftWare ingeneer",
      },
  ];

  function displayUser(searchVal = "") {
    apiUser.forEach((user, index) => {
      html += ` <li>
            <img  src="./img/avatar.png" alt="">
            <div class="user-info">
                <h4>${user.name}</h4>
                <p>${user.bio}</p>
            </div>
            </li>`;

      userList.innerHTML = html;
      //   console.log(user)
    });
  }

  displayUser();

  searchVal.addEventListener("keyup", (e) => {
    displayUser();
  });

});
