
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function makeid(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function requestUserRepos(username){
    
    const xhr = new XMLHttpRequest();
    
    const url = `https://api.github.com/users/${username}/repos`;
   
    xhr.open('GET', url, true);
    
    xhr.onload = function () {
    
        const data = JSON.parse(this.response);
        
        for (let i in data) {

            let ul = document.getElementById('userRepos');
            let li = document.createElement('li');
            li.classList.add('list-group-item')
            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);
            
            ul.appendChild(li);
        
        }

    }
    xhr.send();
    
}

const gitHubUsername=makeid(2);

requestUserRepos(gitHubUsername);