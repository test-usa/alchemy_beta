
import { FormEvent } from "react";
import Breadcrumbs from "../components/breadcrumbs"
import { Link } from "react-router-dom";
import Steps from "@/section/SIgnup/Steps";

const SignupPage = () => {
  const handle = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div>
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg/v1/fill/w_320,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title="Sign up"
      />
      <div className="max-w-2xl my-20 mx-auto bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#6636EE]">Create an Account!</h2>

        <form onSubmit={handle}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 cursor-pointer rounded bg-[#6636EE] text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign up
          </button>
        </form>

        <div className="my-10">
          <p className="text-center mb-3">Sign up  with</p>
          <div className="flex justify-center items-center gap-3 mb-3">
            <img className="h-5 w-5 cursor-pointer rounded-full" src="data:image/png;base64,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" alt="" />
            <img className="h-5 w-5 cursor-pointer rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABL1BMVEX////lQzU0o1NCgO/2twQ+fu/T3vpMhu9aj/Hu8/02eu77/f+Dp/PlQTP2tADkOywln0n1sADj6/zl8egsoU7++fnkNiX63Nr3y8j+8toFmjv86+rkMR/jKRHoYlfmSTznVkosdu6n0rGez6r30tD1wLzyqaTjIwTth4HztLDukovqdW3968L4x2D//Pb50H351Iv84bH3vSX87cz5z2n73qb4x1P+9unE1Pmjvva6zPhHqmJds3TS59eJxpi73MNyu4TwnJfreTXjLjbvkDLlPkPzpSrpaz3nVDnzqyLxmSTthDLqcAD3wTmpsTmQr/SJsVlwq1HIukOxuE3gtyyPsU0LbO3OtDVhrl5qmPFLlcQ/evxMnahEoIY4oWdNj9ZGlbc6mJMznXNCh9yNt9bjx0FtAAAHiUlEQVR4nO2a+3fSSBSAIUBpaZNJmxBoCIHyLKCodW1tCS8fre5ut+tbu1VX3f//b9gJD8sjk0wewwTPfL94PKdw8nHn3jv3QiTCYDAYDAaDwWAwGAwGg8FgMBgMBoPB+NVIT6D9HP5I5zKZSrbaqNWGw2Gt1qhmK5lMbg2lcpVsY3ioF7R6Pp/XTPL5el0r6IfDRnadjNKZaq2l85qmAJ6PzsLzQNFMo1o1Q/spscjUYEAU6BFFAY2UQqvZyNF+VAfSjUOdXwqIhQ8UggHK0n5eG3JNvQBsQrIYIFBoNUKaPblDFyY/ffQw6uSamuLOZKKTL1RDppOrgbwHlRGgrldCpJPO6p5VTJR6MzSVLQNPmA8Vk7CctXS26CssY4AyDEFwckPeb1hG8EqLeteptBQQhItpU6Rcpau6y85iB4gOKdqkG4UAXaANOKRmk655aZN28PkWLZdmPWCXqBKlVNKgS8AqUUX/ZVx4Rac0saWHgbsAai41LejcB3qFjkukGg069+m5VIpu2j4/xvZvlCItl0wL1wUoWr4+2tKAfD2vIVssoOaSa+I1S/j8hdawWqlkTCqVRlPX6pa5BvLUNk9VnOSHJsVaZm4rC/+TqzRBfemjoOiSiToeMnOyr6EaYKWVn/80gELNJdfSHFWAbjub5JrRmewBBXrbzYZDt+QBr1ed3sRcS0106OU+fAyHSz9sfjWce3y2xQPaLpFD+0MG+EPMQ5MbFoDZKykOyxn7QwaKyLxfIp0tKqBIc/Bv2W4vFD3rZlSs6DxNl6ztIdPcziMZqguZ4ydP0fmvFUOw+sLnzpHw7DnKRiuGYimJzV0hHj8vWNsohbWKS+TOZRzy8sLqOg/WzCVyLz5i98myC887dv1wsX8sjG3iz14sugCsth8iHsV/cn4xPzcrrTU7ZO17wq3NyyezVY1uI/fC7SkzEZ7dVjUe0Nx4e+JBfJ7fXzydBobWxssz7fvCgs35xfg6wPM12g/nlv27izLx3T+ejjNmzbI/Enm4qDKq0WbigCbtZ3PNg10rm/MXPK+sW/ZbpMzkqF0otL4g8s7JcspM+HPdShnM/yOUTNz5xdt7G57ZIiBjmf8mwm8YMlexpEdiGwRkrPPfTJoHGDI7qYRHDgjItB8hZU6wZGIeOTgjIHMPlTJHbbIyp9uBy5wcI2SEY4xX+5G5WqHM7n2yMqmd4MvZySVKBiP//cgkNgnIHKHy/+EayiBc4rv7hGWSwcvsU5OJ7a1QBqPNMJmfrFJmDY8ZvQJAQoZaaSYhc4mSId00ScjQus6Q6DPULpokZKiNACSuM9SGMxK3Zt9js1eZAxIy/hYa4Zo00asmAWfVtHPgtLhAypwRkEEtAQXhr66zzFVy0wGUzcHj4F1Q61nh6G+x5/zqLSf2UOcwQWJvZl0BhLevZE4O4N03DhAuyeAvABHLCiAIrz9yHCeW/b/7FUIm9YmIzPKXTcLRG85E7ki+3z2JyBkixcwiaYS372RuTMnvm2+9RxazIJ59mfkvaAXhw6uJCicbfkODOmUxInvzyMJX50J8lC5TG59Zs4UqzIRSZv6uKVy+6XAzMh3nXmPHKaowk1jOjrn9uYnw4R03hzjwc9C2kC0zQShlbs8ZrMivuAVkPzXgFHWbSW0SSpnI9Cda04o8L8N5P2gbyMCkdkidMvNXjeMLzLKLn2azZXOlPg30+eeBfVN4+9HKBaaNVxtk9hM9ZTA0ceE1J1vLcKKBMUAvcxZDXv9TO0ELzHFskS7+bB7H0IcsSayWjeiLNjJeCvTjTbRL4hO59B9h2NsYLmvamU1cYgmS6W/SVe1kYBUouQjO1qmtC4El0wI9exuZ62Hb7O0gr5ej9CcdmEhEklHVbGpj4F0G2iXj+h9kITOXzIQzxqRkH5qRDkbm9A1O5G7QWxk4lpF3iUgD2xow0hEHDjr9gRlgWfycRJ20RHIFLrAGINvmjI5q9JFNRyp31MkHIn75irB5T7L5z2DfbCaIqjjoL9WC7bZU6qjq7achcv9a3gDIDTILtHs4NqaPavRK3a40ptvtlw151mR8JG9+LNukyJflKZJ965x7VBWeqA5k5CZavE5WP39NLegkEiSWsgi6Hee0mXncMegIfrleaJ6pq5UFBtLHKAL4iOJNbLYOEFtjICjhHjQsZPHbj1sbsmOMFQ7XGreI36+nNgnCN/9V2Hy5mSROgsxGdqU2svwtadockB0vV2TDqd9/pGi5mFUgyJoGj5p8TXjst7Vx1W8wbNT/qLmYF/kgSzScUym6wLvAwGFYc+Ni9Km6mPd5LpjgOA9BK6Dd7QRR1US57P/LxACQeqrv4Kgd9DC3YrqG6itzRDUcYRkjla1GFUzgjE0/W+aQeh51ZJWjXcQskHqc6zINZzbKvQWJVDbc+Mii3BmEMCpTpH7P4LBubLIodoxeyHJlCalk+tgKQREYk97yJiqMdPvlQQcKLSvJ0EM1RUrdtTAZI3X7pfLA6IiqiTj+B/ZWA3r0u1JYGiQ+bXPxB6VK5RH9fne0EKT9WH7ZpjDVMxgMBoPBYDAYDAaDwWAwGAwGg8FgMEjzP/g/9vHETwNZAAAAAElFTkSuQmCC" alt="" />
            <img className="h-5 w-5 cursor-pointer rounded-full" src="data:image/jpeg;base64,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" alt="" />
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

export default SignupPage
