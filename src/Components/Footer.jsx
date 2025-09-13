import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <>
      <div className="bg-[rgb(167,193,168)] ">
        <div className="flex justify-center px-5 py-5">
          <Link to={"/"}>
            <h1 className="text-4xl">SOCIOGRAM</h1>
          </Link>
        </div>
        <div className="border"></div>

        <div className="md:flex md:flex-row md:justify-between p-10 grid grid-row-1 justify-center gap-3">
          <div>
            <p>We'd love to hear what you think!</p>
            <textarea
              className="bg-[rgb(238,239,224)] rounded-2xl "
              name="text"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <Button text={"Give Feedback"} />
          </div>
          <div>
            <ul>
              <h3 className="flex  text-2xl mb-5">Contact - Us</h3>
              <li className=" flex gap-4 ">
                <img className="w-6" src="mail.png" alt="" />
                <p>Sociogram@gmail.com</p>
              </li>
              <li className=" flex gap-4">
                <img className="w-6" src="telephone.png" alt="" />
                <p> +977 9812348878</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h3 className="flex  text-2xl mb-5">Support</h3>
              <li>Contact Us</li>
              <li>Report</li>
              <li>Issues & Problems</li>
            </ul>
          </div>
          <div>
            <ul>
              <h3 className="flex  text-2xl mb-5">About - Us</h3>
              <li>Jobs</li>
              <li>Story</li>
              <li>Blog</li>
              <li>Location</li>
            </ul>
          </div>
        </div>

        <div className="border"></div>
        <div className="py-10 px-5">
          <ul className="md:flex md:justify-around ">
            <li>&#169; 2025 SOCIOGRAM, ALL RIGHT RESERVED</li>
            <li>TERMS OF USE</li>
            <li>ACCESSIBILITY STATEMENT</li>
            <li>PRIVACY POLICY</li>

            <li>TILOTTAMA, MANIGRAM, RUPANDEHI, NEPAL</li>
          </ul>
        </div>
      </div>
    </>
  );
};
