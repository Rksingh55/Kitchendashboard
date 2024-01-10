import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='mainbanner '><br /><br /><br />
        <div className="  border-t-[3px]">
          <div className=" w-[70%] m-auto my-[150px]">
            <p className="text-white">Welcome Back </p>
            <h1 className="text-[100px] text-white shadow-lg shadow-black">
              Lets Make <span className="text-orange-400 font-bold">Declecious</span> Food
              ......!!!!
            </h1>
            <Link href="/dashboard">
              <button class="cssbuttons-io-button">
                Get started
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}
