import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='logo-box'>
      <img src = "./logo.png" alt='logo' className='logo'/>
      <h2>Sign In to Twitter</h2>
      <button>
      <img src = "./google.png" alt='google' className='google'/>
          Sign in  with google
       </button>
       <button>
      <img src = "./apple.png" alt='apple' className='apple'/>
          Sign in  with apple
       </button>

       <hr></hr>
       <span>or</span>
       <form>
        <input type = "text" placeholder='Phone email or username' />
        <button>Next</button>
       </form>
       <form>
        <button>Forget Password</button>
        <p>
        Don't Have an account <a>Sign up</a>
        </p>
       </form>
     </div>
    </div>
  );
}

export default App;
