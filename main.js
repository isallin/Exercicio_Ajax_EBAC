document.addEventListener('DOMContentLoaded',function(){
    const endpoint = `http://api.github.com/users/ogiansouza`;
    const nameSelector = document.querySelector('#name');
    const usernameSelector = document.querySelector('#username');
    const avatarSelector = document.querySelector('#avatar');
    const repositorySelector = document.querySelector('#repository');
    const followersSelector = document.querySelector('#followers');
    const followingSelector = document.querySelector('#following');
    const linkSelector = document.querySelector('#link');


    fetch(endpoint)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        console.log(json)
        nameSelector.innerHTML=json.name;
        usernameSelector.innerHTML=json.login;
        repositorySelector.innerHTML=json.public_repos;
        followersSelector.innerHTML=json.followers;
        followingSelector.innerHTML=json.following;
        linkSelector.href=json.html_url;
        avatarSelector.src=json.avatar_url;
    })

    .catch(function(){
        alert('Ocorreu um erro');
    })

})