// targeting the div w/in overview class 
const overview = document.querySelector(".overview");
const username = "boltofblue";

const gitUserInfo = async function () {
    // fetching user info from GitHub api 
    const userInfo = await fetch(`https://api.github.com/users/${username}`);

    // converting response to JSON 
    const data = await userInfo.json();
    // console.log(data);
    displayUserInfo(data);
};

// calling the function to fetch and log the user info
gitUserInfo();

// displays fetched user info and accepts JSON data as param 
const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;

    // appends div to the overview element 
    overview.append(div);
};