
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) =>{
    console.log("hasil",response);
  }

  return (
    <div className="App">
      <GoogleLogin
        clientId="994293385945-11gku0gpl9gca72427ndtl25rq7sjmu2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      
    </div>
  );
}

export default App;
