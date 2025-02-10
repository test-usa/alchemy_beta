
import { FormEvent } from "react";
import Breadcrumbs from "@/components/breadcrumbs"
import { Link } from "react-router-dom";
import Steps from "@/section/signup/Steps";

const SignupPage = () => {
  const handle = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div>
      <Breadcrumbs
        bg="https://img.freepik.com/premium-photo/muscular-strong-guy-exercising-slim-man-doing-some-push-ups-gym-man-doing-pushups-black-white_293990-2679.jpg?w=1380"
        title="Sign up"
      />
      <div className="max-w-2xl my-20 mx-auto bg-white rounded-lg px-3">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#6636EE]">Create an Account!</h2>

        <form onSubmit={handle}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  "
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  "
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  "
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 cursor-pointer rounded bg-[#6636EE] text-white outline-none  "
          >
            Sign up
          </button>
        </form>

        <div className="my-10">
          <p className="text-center mb-3">Sign up  with</p>
          <div className="flex justify-center items-center gap-3 mb-3">
            <img className="h-5 w-5 cursor-pointer rounded-full" src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png" alt="F" />
            <img className="h-5 w-5 cursor-pointer rounded-full" src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome-thumbnail.png" alt="G" />
            <img className="h-5 w-5 cursor-pointer rounded-full" src="https://banner2.cleanpng.com/20190113/ayk/kisspng-apple-logo-portable-network-graphics-vector-graphi-1713909341758.webp" alt="A" />
          </div>
          <p className="text-center">Already have an account? <Link to="/login" className="text-[#6636EE] cursor-pointer">Sign in</Link></p>
        </div>
      </div>

      <div>
        <Steps />
      </div>
    </div>
  )
}

export default SignupPage;
