import React from "react";

class GetUpdates extends React.Component {
  render() {
    return (
      <>
        {/* receive frequent updates */}
        <form  action="#" method="POST">
          <label
            className="py-5 font-sans capitalize block"
            htmlFor="email"
          >
            enter valid email
          </label>
          <input
            id="email"
            name="email"
            className="py-2  w-30 mx-2 md:w-80 px-0 border-b border-red-900"
            type="email"
            placeholder="johnbrown@example.com"
            required
          />
        </form>
      </>
    );
  }
}

export default GetUpdates;
