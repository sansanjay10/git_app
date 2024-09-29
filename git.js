function git() {
    var orignalName = document.getElementById("text").value;
    console.log(orignalName);
    
    fetch("https://api.github.com/users/" + orignalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        document.getElementById("result").innerHTML = `
            <img src="${data.avatar_url}" alt="user_avatar" class="avatar"><br>
            <span class="username">${data.login}</span><br><br>
            <div>
                <span class="label">Name:</span> <span class="value">${data.name}</span><br><br>
                <span class="label">Location:</span> <span class="value">${data.location}</span><br><br>
                <span class="label">Total Repositories:</span> <span class="value">${data.public_repos}</span><br><br>
            </div>
        `;
         document.querySelector('.input-container').style.display = 'none';
    })
    .catch(error => {
        document.getElementById("result").innerHTML = `<p>User not found</p>`;
    });
}
