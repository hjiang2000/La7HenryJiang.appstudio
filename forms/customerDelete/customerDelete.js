let query = ""
let req = ""
let pw = "BIA375"
let netID = "hlj85969"
customerDelete.onshow = function() {
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)

  if (req.status == 200) { //transit worked.
    txtaOptions.value = JSON.parse(req.responseText) // parse data in an array
    console.log(allCustomerData)
  } else {
    // transit error
    lblErrorMessage.value = `Error: ${req.status}`
  }

  btnDelete.onclick = function() {
    let customerNameDel = inptNameDel.value
    let found = false
    for (i = 0; i < allCustomerData.length; i++) {
      if (customerNameDel == allCustomerData[i][1]) {
        found = true
        break
      }
    }
    if (found == false)
      lblErrorMessage.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=kes97391&query=" + query)
      if (req.status == 200) //transit worked.
        if (req.responseText == 500)
          txtaOptions.value = `You have successfully deleted the customer named ${customerNameDel}`
      else
        txtaOptions.value = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblErrorMessage.value = `Error: ${req.status}`
    }
  }
}