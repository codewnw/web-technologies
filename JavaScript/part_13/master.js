let countries = ["India", "SA", "USA", "UK", "USA"]
console.log(countries[0])
console.log(countries[4])
console.log("Length of array is: "+countries.length)
console.log(countries[countries.length - 1])
console.log(countries);

let matrix = [[1,2,3], [4,5,6], [7,8,9]]
console.log(matrix[1][1]);


let languages = ["Python", "Java", "JavaScipt", "Tamil"]

for (var i = 0; i < languages.length; i++) {
    console.log(languages[i])
}

languages[4] = "English"
for (language of languages) {
  console.log(language);
}

let fetchedLang = languages.pop()
console.log("Popped: "+fetchedLang);
for (var index in languages) {
  console.log(languages[index]);
}

languages.push("Hindi")
for (var i = 0; i < languages.length; i++) {
  let lang = languages[i];
  for (var j = 0; j < lang.length; j++) {
    console.log(lang[j])
  }
}
