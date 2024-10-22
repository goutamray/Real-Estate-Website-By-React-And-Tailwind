import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
      <div className="container ">
        <div className="flex justify-between">
         <div className="first-box">
             <img src="" alt="" />
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestiae necessitatibus repellendus incidunt magni in consequuntur ea voluptatum eius officia, porro voluptatem quam facilis pariatur. Inventore, accusantium natus quo ea, fuga beatae tenetur saepe vitae consectetur esse minima nemo aut quisquam? Harum neque aspernatur deserunt similique, repellendus corrupti voluptates non?</p>
          </div>

          <div className="second-box">
              <h2> Pages </h2>
              <ul>
                <li> <Link href=""> About </Link></li>
                <li> <Link href=""> Contact </Link></li>
                <li> <Link href=""> Privacy Policy </Link></li>
                <li> <Link href=""> Terms And Services </Link></li>
              </ul>
          </div>

          <div className="third-box">
            <h2> Contact </h2>
            <h2>
              <span> Address </span>
              <span> No.69 Xihuan </span>
            </h2>
            <h2>
              <span> Phone </span>
              <span> +86 19172103489 </span>
            </h2>
            <h2>
              <span> Email </span>
              <span> No.69 Xihuan </span>
            </h2>
            <h2>
              <span> Time </span>
              <span> Monday – Saturday </span>
            </h2>
            <h2> 9:00 AM to 18:00 PM </h2>
          </div>
          
        </div>
       </div>
    </div>
  )
}

export default Footer












