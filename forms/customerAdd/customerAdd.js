btnSubmit22.onclick=function(){
    name = inptName1.value
    animalType = inptType.value
    query = "INSERT INTO customers (customerName,customerType) VALUES ('" + name + "', '" + customerType + "')"
    // look at how the query is rendered
    alert(query)
    

    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage6.textContent = "You have successfully added the customer!"
        else
            lblMessage6.textContent = "There was a problem with adding the customer to the database."
    } else 
        // transit error
        lblMessage6.textContent = "Error: " + req.status
}
