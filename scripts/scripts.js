let testTypes = ["Programming"];
let testString = "c";
let jokesData;

async function getJokes (type, string) {

    let fetchString = "https://v2.jokeapi.dev/joke/"

    if (type.length < 6) {
        for(let i = 0; i < type.length; i++) {
            fetchString = fetchString + type[i];
            if (i != type.length-1) {
                fetchString = fetchString + ","
            }
        }
    } else if (type.length == 6) {
        fetchString = fetchString + "Any";
    }

    fetchString = fetchString + "?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    if (string.length > 0) {
        fetchString = fetchString + "&contains=" + string;
    }

    fetchString = fetchString + "&amount=10"

    console.log(fetchString);

    let jokesResult = await fetch(fetchString);
    console.log(jokesResult);

    jokesData = await jokesResult.json();
    console.log(jokesData);

    listJokeText();

}

getJokes(testTypes, testString);

function listJokeText() {

    let jokeArray = [];


    for(let i = 0; i < jokesData.jokes.length; i++) {

        if (jokesData.jokes[i].type == "single") {
            jokeArray[i] = jokesData.jokes[i].joke;
        } else if (jokesData.jokes[i].type == "twopart") {
            jokeArray[i] = jokesData.jokes[i].setup + "\n" + jokesData.jokes[i].delivery;
        }
    }

    console.log("jokes:" + jokeArray);
}

