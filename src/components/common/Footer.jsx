export default function Footer() {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <div className=" pb-12 flex flex-col md:flex-row justify-evenly items-center bg-black text-white p-4 space-y-4 md:space-y-0">
      <p className="text-center md:text-left">
        Copyright © 2021 Amayra Enterprises - All Rights Reserved.
      </p>
      <div className="flex flex-row justify-center md:justify-evenly items-center space-x-4">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="40px"
          height="40px"
          data-ux="IconSocial"
          className="x-el x-el-svg"
        >
          <path d="M16.604 8.516c.13.35.198.719.203 1.091.033.622.033.811.033 2.386 0 1.574-.004 1.763-.033 2.385a3.273 3.273 0 0 1-.203 1.091 1.956 1.956 0 0 1-1.12 1.12c-.35.13-.719.198-1.091.204-.622.032-.811.032-2.386.032-1.574 0-1.763-.003-2.385-.032a3.273 3.273 0 0 1-1.091-.204 1.956 1.956 0 0 1-1.12-1.12 3.273 3.273 0 0 1-.204-1.09c-.032-.623-.032-.812-.032-2.386 0-1.575.003-1.764.032-2.386.006-.372.074-.741.204-1.09a1.956 1.956 0 0 1 1.12-1.12c.35-.13.718-.199 1.09-.204.623-.033.812-.033 2.386-.033 1.575 0 1.764.004 2.386.033.372.005.741.074 1.09.203.515.2.922.606 1.12 1.12zM12 15.033a3.033 3.033 0 1 0 0-6.066 3.033 3.033 0 0 0 0 6.066zm3.153-5.477a.71.71 0 1 0 0-1.418.71.71 0 0 0 0 1.418zM12 13.967a1.967 1.967 0 1 1 0-3.934 1.967 1.967 0 0 1 0 3.934zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm5.87 12.433c-.01.49-.102.974-.274 1.432a3.018 3.018 0 0 1-1.727 1.728 4.335 4.335 0 0 1-1.433.272c-.629.03-.829.037-2.432.037-1.604 0-1.819 0-2.433-.037a4.335 4.335 0 0 1-1.433-.272 3.018 3.018 0 0 1-1.727-1.728 4.335 4.335 0 0 1-.273-1.432c-.029-.63-.036-.83-.036-2.433 0-1.604 0-1.818.036-2.433.01-.49.102-.974.273-1.432a3.018 3.018 0 0 1 1.727-1.728 4.335 4.335 0 0 1 1.433-.272c.629-.03.829-.037 2.433-.037 1.603 0 1.818 0 2.432.037.49.009.974.101 1.433.272.794.307 1.42.934 1.727 1.728.172.458.264.943.273 1.432.03.63.036.83.036 2.433 0 1.604-.007 1.804-.036 2.433z"></path>
        </svg>

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="40px"
          height="40px"
          data-ux="IconSocial"
          className="x-el x-el-svg"
        >
          <path
            fillRule="evenodd"
            d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"
          ></path>
        </svg>
      </div>
      <p className="text-center md:text-right">
        Powered by Amayra Enterprises since {currentYear}
      </p>
    </div>
  );
}
