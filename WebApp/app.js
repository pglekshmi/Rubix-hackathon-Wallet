

async function  signUp(){
  
  //let res = await axios.get(' http://localhost:1898/getAccountInfo')
   let res = await fetch("http://localhost:1898/getAccountInfo")
  //  ,{
  //   method: 'GET'
  //  });
  resp =await res.json();
   console.log( resp);
   document.getElementById("did").innerHTML=resp.data.response.did;
 
 

  }
 
     
async function  posts(){
   
    message = document.getElementById("txnid").value;
    console.log(message);
   
    axios.post('http://localhost:1898/getTxnDetails', {
      'transactionID' : message
     
   })
   .then((response) => {
     console.log(response.data);
     document.getElementById("tid").innerHTML=response.data.data.message;
     
     
    
   }, (error) => {
     console.log(error);
   });
   

}
async function  postDate(){
  
   sdate = document.getElementById("sdate").value;
   console.log(sdate)
   edate = document.getElementById("edate").value;
  
  let response =await axios.post('http://localhost:1898/getTxnByDate', {
     sDate:sdate,
     eDate:edate
    
  })
  
    console.log(response);
    
    
   
  }
  



