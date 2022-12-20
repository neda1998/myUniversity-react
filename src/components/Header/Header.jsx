import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    document.getElementById("sidebar").classList.toggle("open");
  };
  return (
    <div className="header">
      <div className="text-header">
        {/* icon menu */}
        <div onClick={handleNav} className="icon-menu">
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="title-box">
          <h6>My University</h6>
        </div>
      </div>
      <div className="header-content">
        <div class="left-toolbar">
          <div class="score-box">
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_451_196)">
                  <path
                    d="M20 10C20 15.5229 15.5229 20 10 20C7.08857 20 4.46775 18.7559 2.64041 16.7702C2.16041 16.249 1.73551 15.6763 1.37388 15.062C0.500816 13.5771 0 11.8469 0 10C0 4.47714 4.47714 0 10 0C11.8473 0 13.5775 0.500816 15.062 1.37429C15.6763 1.73551 16.2486 2.16041 16.7698 2.64082C18.7555 4.46735 20 7.08857 20 10Z"
                    fill="#F0CD00"
                  />
                  <path
                    d="M20 10C20 15.3984 15.7229 19.7976 10.3723 19.9931C5.02165 19.7976 0.744507 15.3984 0.744507 10C0.744507 4.60165 5.02165 0.202468 10.3723 0.00695801C15.7229 0.202468 20 4.60165 20 10Z"
                    fill="#FFDE50"
                  />
                  <path
                    d="M16.7698 2.6408L2.64043 16.7702C2.16043 16.249 1.73553 15.6763 1.3739 15.062L15.0621 1.37427C15.6763 1.73549 16.2486 2.16039 16.7698 2.6408Z"
                    fill="#FFEA94"
                  />
                  <path
                    d="M19.3103 6.34407L6.34373 19.3106C5.42577 18.9498 4.57393 18.4571 3.81189 17.8559L17.856 3.81183C18.4572 4.57387 18.9498 5.42571 19.3103 6.34407Z"
                    fill="#FFEA94"
                  />
                  <path
                    d="M17.7706 9.99998C17.7706 14.2914 14.2914 17.7706 9.99998 17.7706C8.50529 17.7706 7.10937 17.3486 5.92447 16.6171C5.40815 16.2988 4.93223 15.9212 4.50529 15.4943C4.19141 15.1808 3.90406 14.84 3.64733 14.4763C3.29386 13.9755 2.99794 13.431 2.76978 12.8526C2.43182 11.9975 2.24162 11.0677 2.23019 10.0955C2.22937 10.0637 2.22937 10.0318 2.22937 9.99998C2.22937 5.70855 5.70815 2.22937 9.99998 2.22937C10.0318 2.22937 10.0641 2.22937 10.0959 2.23019C11.0681 2.24162 11.9975 2.43223 12.8526 2.76978C13.431 2.99835 13.9755 3.29386 14.4763 3.64733C14.84 3.90447 15.1804 4.19141 15.4943 4.50529C15.9212 4.93182 16.2988 5.40815 16.6171 5.92447C17.3486 7.10937 17.7706 8.50529 17.7706 9.99998Z"
                    fill="#FAA300"
                  />
                  <path
                    d="M15.4943 4.50529L4.50529 15.4943C4.19141 15.1808 3.90406 14.84 3.64733 14.4763C3.29386 13.9755 2.99794 13.431 2.76978 12.8526C2.43182 11.9975 2.24162 11.0677 2.23019 10.0955C2.22937 10.0637 2.22937 10.0318 2.22937 9.99998C2.22937 5.70855 5.70815 2.22937 9.99998 2.22937C10.0318 2.22937 10.0641 2.22937 10.0959 2.23019C11.0681 2.24162 11.9975 2.43223 12.8526 2.76978C13.431 2.99835 13.9755 3.29386 14.4763 3.64733C14.84 3.90447 15.1804 4.19141 15.4943 4.50529Z"
                    fill="#FFBD00"
                  />
                  <path
                    d="M17.7704 9.99998C17.7704 14.2914 14.2912 17.7706 9.99981 17.7706C9.85246 17.7706 9.70634 17.7665 9.56104 17.7583C13.6484 17.531 16.8925 14.1441 16.8925 9.99998C16.8925 5.8559 13.6484 2.46896 9.56104 2.24161C9.70634 2.23345 9.85246 2.22937 9.99981 2.22937C14.2912 2.22937 17.7704 5.70855 17.7704 9.99998Z"
                    fill="#F68E00"
                  />
                  <path
                    d="M8.25459 5.82116C8.64946 5.21884 9.53234 5.21884 9.92721 5.82116L11.1367 7.66614C11.212 7.7809 11.31 7.87895 11.4248 7.95419L13.2698 9.16371C13.8721 9.55857 13.8721 10.4415 13.2698 10.8363L11.4248 12.0458C11.31 12.1211 11.212 12.2191 11.1367 12.3339L9.92721 14.1789C9.53234 14.7812 8.64946 14.7812 8.25459 14.1789L7.04507 12.3339C6.96983 12.2191 6.87178 12.1211 6.75702 12.0458L4.91204 10.8363C4.30972 10.4415 4.30972 9.55857 4.91204 9.16371L6.75702 7.95419C6.87178 7.87895 6.96983 7.7809 7.04507 7.66614L8.25459 5.82116Z"
                    fill="#F68E00"
                  />
                  <path
                    d="M9.16365 5.82116C9.55851 5.21884 10.4414 5.21884 10.8363 5.82116L12.0458 7.66614C12.121 7.7809 12.2191 7.87895 12.3338 7.95419L14.1788 9.16371C14.7811 9.55857 14.7811 10.4415 14.1788 10.8363L12.3338 12.0458C12.2191 12.1211 12.121 12.2191 12.0458 12.3339L10.8363 14.1789C10.4414 14.7812 9.55851 14.7812 9.16365 14.1789L7.95413 12.3339C7.87889 12.2191 7.78084 12.1211 7.66608 12.0458L5.8211 10.8363C5.21878 10.4415 5.21878 9.55857 5.8211 9.16371L7.66608 7.95419C7.78084 7.87895 7.87889 7.7809 7.95413 7.66614L9.16365 5.82116Z"
                    fill="#FFEA94"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_451_196">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span>coin 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
