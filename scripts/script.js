const ourForm = document.forms[0];
const errorMsg = document.getElementById("error");
value = ourForm.value;

ourForm.addEventListener("input", check, false);

function check(e) {
  console.log(e);
  const inputString = e.target.value;
  console.log(inputString);

  const regLookup = {
    firstname: new RegExp("^[\\w\\s-']*$"),
    lastname: new RegExp("^[\\w\\s-']*$"),
    username: new RegExp("(?=(?:.*[a-z]){3})(?:.*\\d){2}.*", "gi"),
    date: new RegExp("^\\d{4}(\\/|-)\\d{2}(\\/|-)\\d{2}$"),
    phonenumber: new RegExp("^\\d{11}$"),
    address: new RegExp("\\w{1,50}"),
    postcode: new RegExp(
      "^[a-z]{1,2}\\d{1,2}[a-z]{0,1}\\s{0,1}\\d[a-z]{2}$",
      "i"
    ),
    email: new RegExp("[^@]+@[^@]+"),
    accountnumber: new RegExp("^\\d{8}$"),
    sortcode: new RegExp("^\\d{2}-{0,1}\\d{2}-{0,1}\\d{2}$")
  };

  lastInput = e.data;
  if (!regLookup[e.target.name].test(inputString)) {
    errorMsg.innerHTML = `❌ invalid entry`;
    e.target.className = "error";
  } else {
    errorMsg.innerHTML = "";
    e.target.removeAttribute("class");
  }
}
