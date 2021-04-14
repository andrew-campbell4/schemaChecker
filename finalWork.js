function schemaChecker( body, schema ){
  
  for (let [key, value] of Object.entries(schema)) { // iterate through the elements in the schema
    	if (key == "type" || key == "required") { // ignore these during the recursive iteration- they belong to the first iteration
          continue;
        }
    
    
    	if (value.type == "object") { // checking if recursion is needed
          if(body[key] === undefined && value.required == true) { // making sure the body has an object also- saving time
            return false;
          }
          else {
            if (schemaChecker(body[key],schema[key]) == false) { // recursive call to schemaChecker with the object inside of the object
              return false;
            }
           
          }
          
        }
    
    	if (value.required === true && body[key] === undefined) { // making sure the required fields are there- NOTE: if they are empty- but still exist, this func will return true still.
          	
        	return false;
        }
    
        if (body[key] !== undefined && typeof(body[key]) != value.type) { // making sure they are of the correct type
          	
        	return false;
        }
  }
  
  return true;
  
};
