async function getData() {
    let data = await fetch("https://api.github.com/users/KenanAlekber");

    if (!data.ok) {
        alert("Something is wrong");
    }
    else {
        return data.json();
    }
}
getData().then((newData) => {
    console.log(newData);
    document.querySelector(".profile img").src = newData.avatar_url
    document.querySelector(".name h1").innerHTML = newData.name
    document.querySelector(".name p").innerHTML = newData.login
    document.querySelector(".follower").innerHTML = newData.followers
    document.querySelector(".following").innerHTML = newData.following
    document.querySelector(".btn").href = newData.html_url
    document.querySelector(".bio p").innerHTML = newData.bio
});