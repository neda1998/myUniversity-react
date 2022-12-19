import React from "react";
import './NewText.css'

function NewText() {
  return (
    <div className="container-fluid">
        <div className="container-box">
        <div className="notification-box multiple">
      <div className="body-box">
        <div className="count-box">
          <span>3</span>
        </div>
        <div className="close-box">
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
        </div>
        <div className="text-new">
            <h5>
            New message: My university
            </h5>
            <div>
                <p className="notification-text">
                Welcome to "My University" application.
In the tabs at the bottom of the page, from the "Class Assistant" section, you can view the class schedule, and register course resources.
The remaining parts will be completed soon.
If you have any suggestion or criticism, please contact us.
                </p>
            </div>
            <button>
                view all kartable messages
            </button>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
}

export default NewText;
