const weirdWords = {
    foo: "bars",
    bar: "fizz",
    fum: "fiizbars",
    quux: "what?",
    spam: "inacan"
};

for (let key in weirdWords) {
    //console.log(key);
    console.log(key + " : " + weirdWords[key]);
}