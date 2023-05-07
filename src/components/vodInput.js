import React, { useRef } from "react";
import { useNavigate } from "react-router";

function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();

  const onKeyboardClick = (e) => {
    if (e.key == "Enter") {
      onSearchClick();
    }
  };
  const onSearchClick = () => {
    let input = inputRef.current.value;
    nav(`./?s=${input}`);
  };

  return (
    <header className="container-fluid bg-dark p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h2 className="text-white">My vod</h2>
          </div>
          <nav className="d-flex col-md-6">
            <input
              onKeyDown={onKeyboardClick}
              ref={inputRef}
              placeholder="search..."
              type="search"
              className="form-control"
            />
            <button onClick={onSearchClick} className="btn btn-warning">
              Search
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default VodInput;
