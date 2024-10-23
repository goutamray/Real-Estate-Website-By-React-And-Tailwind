import { Link } from "react-router-dom"
import logo from "../../src/assets/logo.png"


const Footer = () => {
  return (
    <div className="py-10 bg-slate-200">
      <div className="container ">
        <div className="flex ">
         <div className="first-box w-1/3">
             <img src={logo} alt="" />
             <p className="mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae necessitatibus repellendus incidunt magni in consequuntur ea voluptatum eius officia, porro voluptatem quam facilis pariatur. Inventore, accusantium natus quo ea, fuga beatae tenetur saepe vitae consectetur esse minima nemo aut quisquam? Harum neque aspernatur deserunt similique, repellendus corrupti voluptates non?</p>
          </div>

          <div className="second-box w-1/3">
              <h2 className="pl-20 text-2xl font-bold mb-4"> Pages </h2>
              <ul className="pl-20">
                <li className="mb-2"> <Link className="text-md font-semibold " href=""> About </Link></li>
                <li className="mb-2"> <Link className="text-md font-semibold " href=""> Contact </Link></li>
                <li className="mb-2"> <Link className="text-md font-semibold " href=""> Privacy Policy </Link></li>
                <li className="mb-2"> <Link className="text-md font-semibold " href=""> Terms And Services </Link></li>
              </ul>
          </div>

          <div className="third-box 1/3">
            <h2 className="pl-0 text-2xl font-bold mb-4"> Contact </h2>
            <h2  className="text-md font-semibold ">
              <span className="text-blue-600"> Address : </span>
              <span> No.69 Xihuan </span>
            </h2>
            <h2  className="text-md font-semibold ">
              <span className="text-blue-600"> Phone : </span>
              <span> +86 19172103489 </span>
            </h2>
            <h2  className="text-md font-semibold ">
              <span className="text-blue-600"> Email : </span>
              <span> No.69 Xihuan </span>
            </h2>
            <h2 className="text-md font-semibold ">
              <span className="text-blue-600"> Time : </span>
              <span> Monday – Saturday </span>
            </h2>
            <h2  className="text-md font-semibold "> 9:00 AM to 18:00 PM </h2>
          </div>
          
        </div>
       </div>
    </div>
  )
}

export default Footer












