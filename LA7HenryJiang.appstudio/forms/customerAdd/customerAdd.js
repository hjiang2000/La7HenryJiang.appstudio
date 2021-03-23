customerAdd.onshow=function(){
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`the results are \n ${results}`)
        if (results.length == 0)    
           lblCustomerAdd.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaAddCustomer.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblCustomerAdd.value = "Error code: " + req.status
}


btnAddCustomer.onclick=function(){
  let customerName = ""
  customerName = inptCustomerName.value
  let customerStreet = ""
  customerStreet = inptStreet.value
  let customerCity = ""
  customerCity = inptCity.value
  let customerState = ""
  customerState = inptState.value
  let customerZip = ""
  customerZip = inptZipcode.value
  query = "INSERT INTO customer(name, street, city, state, zipcode) VALUES ('" + customerName + "','" + customerStreet + "','" + customerCity + "','" + customerState + "','" + customerZip + "')"   
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}





