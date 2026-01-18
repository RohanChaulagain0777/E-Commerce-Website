import { useState } from "react"

const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        setEmail(e.target.value);
    };

    const handleClick = () =>{   
        if(email === ""){
            alert("Please enter a valid email address");
        } else{
           alert(`Thank you for subscribing with ${email}`); 
        }
        
        
    }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white mt-8">
        <div>
        <h3 className="mb-2 font-semibold">Subscribe to our Newsletter</h3>
      <div>
        <input type="email" placeholder="Enter your Email Here" value={email} onChange={handleSubscribe}  className="bg-white text-black rounded-2xl px-4 py-1.5"/>
        <button onClick={handleClick} className="ml-2 bg-blue-500 text-white px-4 py-1.5 rounded-2xl cursor-pointer">Subscribe</button>
      </div>
      </div>
      <div className="mt-10">
        <p className="text-sm">© {year} DILDO, Inc. All Rights Reserved</p>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Connect with Us</h3>
        <div className="flex flex-row gap-4 text-2xl">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
