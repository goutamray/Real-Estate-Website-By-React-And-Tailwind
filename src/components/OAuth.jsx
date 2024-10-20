import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fireBaseApp } from "../firebase";
import { loginGoogleUserData } from "../../api/api.js";
import createToast from "../utilis/toastify";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess, signInFailure } from "../redux/userSlice";


const provider = new GoogleAuthProvider();
const auth = getAuth(fireBaseApp);

const OAuth = () => {
  const navigate = useNavigate(); 

  const disPatch = useDispatch();
  
  // handle google login 
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      
      const fields = {
        name : user.providerData[0].displayName,
        email: user.providerData[0].email,
        password : null,
        photo : user.providerData[0].photoURL,
      }
     
      loginGoogleUserData("/authwithgoogle", fields).then((res) => {
        try {
           if (res.error !== true) {
            disPatch(signInSuccess(fields)); 
            
            createToast("User Login Successfull", "success");
            setTimeout(() => {
              navigate("/");
            }, 2000);

           }else{
            // setLoading(false);
           }
        } catch (error) {
           console.log(error.message);
          disPatch(signInFailure())
        }

      })
      

    }).catch((error) => {
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  return (
    <>
        <button 
           onClick={signInWithGoogle}
           type="button"
           className="text-center text-white bg-red-700 p-3 rounded-lg uppercase hover:opacity-90"> Continue With Google
        </button>
    </>
  )
}

export default OAuth










