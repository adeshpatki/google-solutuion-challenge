
//sign up

const signupForm = document.querySelector('#signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const username = signupForm['sgusername'].value;
    const email = signupForm['sgemail'].value;
    const password = signupForm['sgpass'].value;

    

    //signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        window.location.href = "home.html";
        const signup = document.querySelector('#sign-up-form');
        M.signup.getInstance(signup).close();
        signupForm.reset();
        
         
        
    })

})

//login user

const loginForm = document.querySelector('#loginform');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['lgemail'].value;
    const password = loginForm['lgpass'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        console.log(cred.user)
        window.location.href = "home.html";
    })

   
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;
         
         
          // ...
        } else {
            
            var cred = firebase.auth.EmailAuthProvider.credential(
                email,
                password 
                
                
            );
              var cred = firebase.auth.EmailAuthProvider.credential(
                email,
                password
            );
            
          // User is signed out
          // ...
        }
        });

      
   /* firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          // User is signed in.
          document.getElementById("loginform").onchange();
          
          window.location.href="home.html";
        } else {
          // No user is signed in.
          document.getElementById("loginform").style.display="block";
    
        }
      });*/
})

