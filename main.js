fetch("https:api.github.com/users/KinanAshkar/repos").then(
    (result) => {
        let allRepos = result.json();
        console.log(allRepos);
        return allRepos;
    }
).then(
    (repos) => {
        console.log(repos.length);
        return repos;
    }
).then(
    (repos) => {
        console.log(`the first repo is ${repos[0].name}`);
        return repos;
    }
).then(
    (repos) => {
        console.log(`the last repo is ${repos[repos.length-1].name}`);
        return repos;
    }
).then(
    (repos) => {
        for(let i = 0; i < repos.length; i ++){
            let newElement = document.createElement("div");
            let newTextElement = document.createTextNode(repos[i].name);
            newElement.appendChild(newTextElement);
            document.body.appendChild(newElement);
        }
    }
);