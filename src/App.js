import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {


  useEffect(()=>{
    window.fbAsyncInit = function() {
        window.FB.init({
            appId            : '2759697500978446',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v8.0'
        });
    };
},[]);


function myFunction() {
  /*prompt user for user name password and gets access token*/
  window.FB.init({
      appId            : '2759697500978446',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v8.0'
  });

  document.getElementById("demo").style.color = "red";


  window.FB.login(function(response) {
      if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          window.FB.api('/me', function(response) {
              console.log('Good to see you, ' + response.name + '.');
          });
      } else {
          console.log('User cancelled login or did not fully authorize.');
      }
  });
  /*var request = {
    "access_token": FB.getAccessToken(),
    "requests": [
      {
        "method": "CREATE",
        "data": {
          "availability": "in stock",
          "description": "A Movie by sivakarthikeyan aka SK expected to be released on 2021 ",
          "image_url": "https://a10.gaanacdn.com/images/albums/78/3296978/crop_175x175_3296978.jpg",
          "name": "Doctor",
          "price": "5.00",
          "currency": "USD",
          "condition": "new",
          "url":"https://gaana.com/album/doctor-tamil",
        }
      }
    ]
  }*/
  var access_token =  window.FB.getAccessToken();

  window.FB.api("/1054421811682437/batch",'post',{
      "access_token":  window.FB.getAccessToken(),
      "requests": [
          {
              "method": "CREATE",
              "data": {
                  "availability": "in stock",
                  "description": "A Movie by sivakarthikeyan aka SK expected to be released on 2021 ",
                  "image_url": "https://a10.gaanacdn.com/images/albums/78/3296978/crop_175x175_3296978.jpg",
                  "name": "Doctor",
                  "price": "5.00",
                  "currency": "USD",
                  "condition": "new",
                  "url":"https://gaana.com/album/doctor-tamil",
              }
          }
      ]
  },function(response){
      if (!response || response.error) {
          console.log('Batch, ' + response.error + '.');
      } else {
          console.log('User cancelled login or did not fully authorize.');
      }
  })
  //https://gaana.com/album/doctor-tamil

  /*FB.api('/me/feed', 'post', { message: message_str}, function(response) {
  if (!response || response.error) {
    alert('Couldn't Publish Data');
  } else {
    alert("Message successfully posted to your wall");
  }
});*/

  //catalogid= 1054421811682437
}
  
  return (
    <div className="App">
      <h1 id="demo">This is a Heading</h1>
      <button onClick={()=>myFunction()}>ADD ITEM</button>
    </div>
  );
}

export default App;
