// This is an app to seacrch for substrings within a string
const programmingLanguages = "C++, JavaScript, Ruby, COBOL, Visual Basic, FORTRAN";
const searchTerm = "JavaScript";

//using string.indexOf() - returns the starting index of the substring;
function findNewINDEXOF(language) {
  console.log("\nSTRING.INDEXOF()" + "searching |" + programmingLanguages + "| for " + "|" + searchTerm + "|")
  if (programmingLanguages.indexOf(language) >=0) {
    console.log(language + " is present");
    //logs the index position of the starting letter
    console.log(programmingLanguages.indexOf(language));

  } else {
    console.log(language + " is absent!");
  }

}

findNewINDEXOF(searchTerm);


//using regexp.test() -returns a boolean

function findNewREGEXP(language) {
  console.log("\nREGEXP.TEST()" + "searching |" + programmingLanguages + "| for " + "|" + searchTerm + "|")
  var programmingReg = new RegExp(searchTerm);
  console.log("!"+ programmingReg);
  console.log(programmingReg.test(programmingLanguages));
  if (programmingReg.test(programmingLanguages)) {

   console.log("\n"+language + " is present");

 }

 else {

   console.log("\n"+language + " is absent");

 }

}

findNewREGEXP(searchTerm);


//using string.includes() -returns a boolean

function findNewSTRINGINCLUDES(lanuage) {
    console.log(programmingLanguages.includes(searchTerm));

}

findNewSTRINGINCLUDES()
