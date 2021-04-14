function schemaChecker( body, schema ){
  
  for (let [key, value] of Object.entries(schema)) {
    	if (key == "type" || key == "required") {
          continue;
        }
    
    
    	if (value.type == "object") {
          if(body[key] === undefined && value.required == true) {
            return false;
          }
          else {
            if (schemaChecker(body[key],schema[key]) == false) {
              return false;
            }
           
          }
          
        }
    
    	if (value.required === true && body[key] === undefined) {
          	
        	return false;
        }
    
        if (body[key] !== undefined && typeof(body[key]) != value.type) {
          	
        	return false;
        }
  }
  
  return true;
  
};
