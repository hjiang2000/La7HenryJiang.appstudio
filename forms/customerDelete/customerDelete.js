let customerNameDel = inptNameDel.value
    let found = false
    for (i = 0; i < allcustomerData.length; i++) {
        if (customerNameDel == allPetData[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage5.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customers WHERE customerName = '" + customerNameDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage5.textContent = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblMessage5.textContent = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblMessage5.textContent = `Error: ${req.status}`
    } 

