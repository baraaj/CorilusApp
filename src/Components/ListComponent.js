import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Alert from 'react-popup-alert'


export default function ListComponent() {
  
    const [list,setList]=useState([]);
    const [file,setFile]=useState(null);
  
    const [files, setFiles] = useState([]);
    const [fileContents, setFileContents] = useState([]);
  
    const [alert, setAlert] = React.useState({
      type: 'error',
      text: 'This is a alert message',
      show: false
    })
  
    function onCloseAlert() {
      setAlert({
        type: '',
        text: '',
        show: false
      })
    }
  
    function onShowAlert(type) {
      setAlert({
        type: type,
        text: 'Demo alert',
        show: true
      })
    }
    
    const show=()=>{
        axios.get("http://localhost:8089/file/getAll")
        .then(response=>{
           const list=response.data;
          console.log(list);
            setList(list);
        })
    }
    
 



    const ajout = () =>{
        var formdata = new FormData();
formdata.append("file",  file);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};



fetch("https://localhost:7059/api/FileAPI", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    
   
  return (
    <div>
       <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        {list.map(elt=> 
           <p>{elt.name}</p>
        )}
        <section id="Get-loan">
       
       <div class="container">
           <div class="row">
               <div class="col-md-6">
              
               <form onSubmit={(e)=>{ e.preventDefault();
          ajout();}}>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button onClick={() => onShowAlert('success')}class="nav-link btn border-0 btn-primary" type="submit" >submit file for tracability</button></form>
        
        </div>
             



             
       

             
               <div class="col-md-6">
                   <div class="choose-img">
                       <img src="./source/images/gestion.png" alt=""/>
                     
                      

                   </div>
               </div>
           </div>
       </div>
       
 
</section>
 
</div> 
        
<Alert
        header={'Header'}
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />

    </div>
    
  )
}
//rfc

