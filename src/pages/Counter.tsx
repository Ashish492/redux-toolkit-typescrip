import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app";
import { increment, decrement, reset } from "../features/counter/counter";
function Counter() {
  let count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();
  const incrementClickHandler = (): void => {
    dispatch(increment());
  };
  const resetClickHandler = (): void => {
    dispatch(reset());
  };
  const decrementClickHandler = () => {
    dispatch(decrement());
  };
  return (
    <>
      <p className="h1 text-center">counter</p>
      <div className="d-flex align-items-center justify-content-center flex-column min-vh-100 m-0">
        <p className="display-1 fs-1 mb-5 fw-bold text-center">{count}</p>
        <div className="row row-cols-3  gx-4 mx-auto w-50">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={incrementClickHandler}
            >
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary btn-lg "
              onClick={resetClickHandler}
            >
              reset
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary btn-lg "
              onClick={decrementClickHandler}
            >
              <i className="bi bi-dash-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;
