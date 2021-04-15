function formatCsv( rawData ){

  const headers = rawData.slice(0, rawData.indexOf('\n')).split(','); // get the first row off the data - these are the headers
  const actualInfo = rawData.slice(rawData.indexOf('\n') + 1).split('\n'); // acquire all real data into one array

  return actualInfo.map(row => {

    const values = row.split(','); // split up entries

    return headers.reduce((formattedData, counter, x) => { // convert current row to object with reduce function
      formattedData[counter] = values[x];
	  
      
      // console.log(formattedData);
      return formattedData; // return the data in correct object form
      

    }, {})


  });




};



// let dataTest;

// data = 'id, name, email\n0, Andy, andrew.campbell-2@colorado.edu\n1, Jamie, jarford@gmail.com';
