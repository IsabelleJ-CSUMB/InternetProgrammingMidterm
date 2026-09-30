let testTypes = ["Christmas", "Programming"];
let testString = "tree";

async function getJokes (type, string) {

    let fetchString = "https://v2.jokeapi.dev/joke/"

    if (type.length < 6) {
        for(let i = 0; i < type.length; i++) {
            fetchString = fetchstring + type[i];
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

    let jokesData = await jokesResult.json();
    console.log(jokesData);

}

getJokes(testTypes, testString);