import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { fireBaseApp } from "../firebase";


const Profile = () => {

  const { currentUser } = useSelector((state) => state.user);

  const fileRef = useRef(null); 
  const [file, setFile] = useState(undefined); 
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({})

 console.log(formData);
 
 
  
  // firebase storage 
  // allow read;
  // allow write: if 
  // request.resource.size < 5 * 1024 * 1024 && 
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
   if (file) {
     handleFileUpload(file); 
   }
  }, [file]); 

  const handleFileUpload = () => {
    const storage = getStorage(fireBaseApp); 
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
   

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100 ;
        
        setFilePerc(Math.round(progress)); 
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => {
            setFormData({ ...formData, photo : downloadURL})
          }
        )
      }
    )
  }

  return (
    <div className="my-8">
      <div className="container">
        <h2 className="text-3xl text-center font-semibold mb-5 "> Profile </h2>
        <div className="form-data w-[500px] mx-auto">
          <form  className="text-center ">
            <input 
               onChange={(e) => setFile(e.target.files[0])}
               type="file" 
               ref={fileRef} 
               hidden 
               accept="image/*" 
              />
            <img 
               onClick={() => fileRef.current.click()} 
               src={formData?.photo || currentUser?.photo} 
               alt="photo" 
              className="h-24 w-24 object-cover rounded-full text-center mx-auto cursor-pointer"
            />
            <p>
              {
                fileUploadError ? 
                <span className="text-red-700"> Image Upload Failed  </span>
                : (filePerc > 0 && filePerc < 100 ? (
                  <span className="text-slate-700"> {`Uploading .. ${filePerc}% `}</span>) : filePerc === 100 ?  <span className="text-green-700"> Successfull Uploaded </span> : ""
                )
              }
            </p>
            <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-lg w-full my-2"
                name="Name"
              />
            <input
                type="text"
                placeholder="Email"
                className="border p-3 rounded-lg w-full my-2"
                name="Email"
              />
            <button
                type="submit"
                className="p-3 bg-slate-700 text-center text-white font-medium rounded-lg uppercase hover:opacity-90 w-full"
              >
              Update 
              </button>
          </form>
          <div className="flex justify-between mt-5">
            <span className="text-red-700 font-medium cursor-pointer"> Delete account </span>
            <span className="text-red-700 font-medium cursor-pointer"> Sign out </span>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Profile
