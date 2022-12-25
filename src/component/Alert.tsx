type Props = {};

const Alert = (props: Props) => {
  return (
    <>
      <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
          <use xlinkHref="#check-circle-fill" />
        </svg>
        <div>An example success alert with an icon</div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
