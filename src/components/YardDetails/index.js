import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";
import "./style.scss";

function YardDetails() {
  const handleDisableYard = () => {};

  const handleEnableYard = () => {};

  const handleDeleteClick = () => {};

  const onSimpleClick = async (title, question, callback) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>{title}</h4>
            <p className="mb-3">{question}</p>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                callback();
                onClose();
              }}
            >
              Confirm
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <div className="mt-5">
      <h4>Create Yard</h4>
      <div className="d-flex">
        <form className="my-3 col-3 mw-410">
          <div className="row p-2 py-1">
            <label for="yard-name" style={{ paddingLeft: 0 }}>
              Name
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Name">
              <i className="fas fa-address-card"></i>
            </span>
            <input
              id="yard-name"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="row p-2 py-1">
            <label for="yard-province" style={{ paddingLeft: 0 }}>
              Province
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Province">
              <i className="far fa-map"></i>
            </span>
            <input
              id="yard-province"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Province"
            />
          </div>
          <div className="row p-2 py-1">
            <label for="yard-district" style={{ paddingLeft: 0 }}>
              District
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="District">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <input
              id="yard-district"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="District"
            />
          </div>
          <div className="row p-2 py-1">
            <label for="yard-address" style={{ paddingLeft: 0 }}>
              Address Details
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Address">
              <i className="fas fa-map-pin"></i>
            </span>
            <input
              id="yard-address"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Address Details"
            />
          </div>
          <div className="row p-2 py-1">
            <label for="yard-open-time" style={{ paddingLeft: 0 }}>
              Open Time
            </label>
            <span
              className="col-1 lh-44 signup__icon-wrapper"
              title="Open Time"
            >
              <i className="fas fa-clock"></i>
            </span>
            <input
              id="yard-open-time"
              type="time"
              name="appt"
              className="col-11 outline-none p-2 signup__input-border"
              min="09:00"
              max="18:00"
              required
              placeholder="Open time"
            />
          </div>
          <div className="row p-2 py-1">
            <label for="yard-close-time" style={{ paddingLeft: 0 }}>
              Close Time
            </label>
            <span
              className="col-1 lh-44 signup__icon-wrapper"
              title="Close Time"
            >
              <i className="fas fa-clock"></i>
            </span>
            <input
              id="yard-close-time"
              type="time"
              name="appt"
              className="col-11 outline-none p-2 signup__input-border"
              min="09:00"
              max="18:00"
              required
              placeholder="Close time"
            />
          </div>
          <div className="row p-2 py-1">
            <label for="yard-duration" style={{ paddingLeft: 0 }}>
              Duration
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Duration">
              <i className="fas fa-hourglass-half"></i>
            </span>
            <input
              id="yard-duration"
              type="time"
              name="appt"
              className="col-11 outline-none p-2 signup__input-border"
              min="09:00"
              max="18:00"
              required
              placeholder="Duration"
            />
          </div>
        </form>
        <div className="flex-1 ps-3">
          <div className="row h-50">
            <div className="col-4 p-3">
              <div className="upload__img-wrapper mb-2 color-blur">
                Intro image
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
              />
            </div>
            <div className="col-4 p-3">
              <div className="upload__img-wrapper mb-2 color-blur">
                Intro image
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
              />
            </div>
            <div className="col-4 p-3">
              <div className="upload__img-wrapper mb-2 color-blur">
                Intro image
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
              />
            </div>
          </div>
          <div className="p-3 overflow-y-auto h-300 pt-4">
            <h4 className="d-inline-block">Sub Yards</h4>
            <button className="btn btn-primary px-4 ms-5" onClick={() => {}}>
              <i class="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
              <b>Add</b>
            </button>
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Actions
                  </th>
                  <th scope="col">Reference</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() =>
                        onSimpleClick(
                          "Delete",
                          "Are you sure to delete this yard permanently?",
                          handleDeleteClick
                        )
                      }
                    ></i>
                    <i
                      className="trash-icon fas fa-ban col-4"
                      title="Deactive"
                      onClick={() =>
                        onSimpleClick(
                          "Disable",
                          "Are you sure to disable this yard?",
                          handleDisableYard
                        )
                      }
                    ></i>
                    <i
                      className="trash-icon fas fa-check-circle col-4"
                      title="Active"
                      onClick={() =>
                        onSimpleClick(
                          "Enable",
                          "Are you sure to activate this yard?",
                          handleEnableYard
                        )
                      }
                    ></i>
                  </td>
                  <td>
                    <b className="trash-icon" onClick={() => {}}>
                      1009
                    </b>
                  </td>
                  <td className="text-truncate" title="Sân quận 9">
                    Sân quận 9
                  </td>
                  <td>3 vs 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button className="btn btn-primary me-3 px-4" onClick={() => {}}>
        Save
      </button>
      <Link to="/admin/yards">
        <button className="btn btn-light">Back</button>
      </Link>
    </div>
  );
}

export default YardDetails;
