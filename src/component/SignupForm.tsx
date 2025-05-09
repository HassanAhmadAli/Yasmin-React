import React from "react";
const hostName = "http://localhost:3000";

export default function SignupForm() {
  // const [x, y] = useState(0);
  const onClickCancleButton = () => {
    alert("You clicked Ok!");
  };
  const onFormSubmit = () => {};
  return (
    <>
      <form
        action={`${hostName}/api/signup`}
        method="POST"
        className="border-gray rounded border"
        onSubmit={onFormSubmit}
      >
        <div className="container flex-col py-4">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr className="hr" />
          <div className="form-group">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required={true}
              className="w-full rounded-b-full border"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required={true}
            />
          </div>

          <p className="text-sm">
            by Creating an Account you agree to our terms and conditions
          </p>
          <div className="clearfix container">
            {" "}
            <div>
              <button
                type="button"
                id="cancelbtn"
                onClick={onClickCancleButton}
              >
                Ok
              </button>
            </div>
            <button type="submit" id="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
