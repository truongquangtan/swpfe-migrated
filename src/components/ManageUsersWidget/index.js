import { confirmAlert } from "react-confirm-alert";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import * as _ from "lodash";

import userGroup from "../../assets/images/user-group.png";
import AddOwnerModal from "../../modals/AddOwnerModal";
import { searchAllUsers, updateUser } from "../../services/admin.service";
import Modal, { useModal } from "../Modal";
import "./style.scss";
import { TOAST_CONFIG } from "../../constants/default";
import empty from "../../assets/images/empty.png";
import Pagination from "../Pagination";
import DisableElement from "../DisableElement";
import SearchBar from "../SearchBar";

function ManageUsersWidget() {
  const ITEMS_PER_PAGE = 10;
  const [showAddOwnerModal, toggleShowAddOwnerModal] = useModal();
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [account, setAccount] = useState(null);

  const onSimpleClick = (title, question, callback) => {
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

  const handleDisableUser = (account) => {
    updateUser(account.userId, { isActive: false }).then(() => {
      toast.success(
        `Deactivate account ${account.fullName} successfully.`,
        TOAST_CONFIG
      );
      searchUsers(currentPage);
    });
  };

  const handleEnableUser = (account) => {
    updateUser(account.userId, { isActive: true }).then(() => {
      toast.success(
        `Activate account ${account.fullName} successfully.`,
        TOAST_CONFIG
      );
      searchUsers(currentPage);
    });
  };

  const onInviteClick = (account) => {
    setAccount(account);
    toggleShowAddOwnerModal();
  };

  const searchUsers = (page, itemsPerPage = ITEMS_PER_PAGE) => {
    setIsLoading(true);
    searchAllUsers({ page, itemsPerPage })
      .then((res) => {
        setAccounts(res.accounts);
        setMaxPage(
          res.maxResult % ITEMS_PER_PAGE === 0 && res.maxResult !== 0
            ? res.maxResult / ITEMS_PER_PAGE
            : Math.floor(res.maxResult / ITEMS_PER_PAGE) + 1
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onChangePage = (page) => {
    setCurrentPage(page);
    searchUsers(page);
  };

  useEffect(() => {
    searchUsers(1, ITEMS_PER_PAGE);
  }, []);

  const onSave = () => {
    searchUsers(currentPage);
  };

  return (
    <>
      <Modal isShowing={showAddOwnerModal} hide={toggleShowAddOwnerModal}>
        <AddOwnerModal
          toggleModal={toggleShowAddOwnerModal}
          account={account}
          onSave={onSave}
        />
      </Modal>
      <div className="pt-5 w-100 mt-5">
        <div>
          <h4 className="mb-4 d-inline-block">
            <img src={userGroup} alt="User" className="width-60 pe-3" />
            Users
          </h4>
          <SearchBar />
          <button
            className="btn btn-primary px-4 ms-5"
            onClick={() => onInviteClick(null)}
          >
            <i
              className="fas fa-user-plus me-2"
              style={{ fontSize: "0.8rem" }}
            ></i>
            <b>Add Owner</b>
          </button>
        </div>
        {isLoading && (
          <div className="w-100 d-flex justify-content-center pt-5">
            <DisableElement />
          </div>
        )}
        {!accounts.length && !isLoading && (
          <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column h-300">
            <img src={empty} style={{ width: 80 }} />
            <p
              className="text-center nodata-text"
              style={{ fontSize: "0.9rem" }}
            >
              No result available
            </p>
          </div>
        )}
        {!!accounts.length && !isLoading && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{ width: "10%" }}>
                  Actions
                </th>
                <th scope="col">Display Name</th>
                <th scope="col" style={{ width: "20%" }}>
                  Email
                </th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => {
                return (
                  <tr key={account.userId}>
                    <td>
                      <i
                        className="trash-icon fas fa-edit col-4"
                        title="Edit"
                        onClick={() => onInviteClick(account)}
                      ></i>
                      {account.isActive ? (
                        <i
                          className="trash-icon fas fa-ban col-4"
                          title="Deactive"
                          onClick={() =>
                            onSimpleClick(
                              "Disable",
                              `Are you sure to disable ${account.fullName}?`,
                              () => handleDisableUser(account)
                            )
                          }
                        ></i>
                      ) : (
                        <i
                          className="trash-icon fas fa-check-circle col-4"
                          title="Active"
                          onClick={() =>
                            onSimpleClick(
                              "Enable",
                              `Are you sure to activate ${account.fullName}?`,
                              () => handleEnableUser(account)
                            )
                          }
                        ></i>
                      )}
                    </td>
                    <td>{account.fullName}</td>
                    <td className="text-truncate" title={account.email}>
                      {account.email}
                    </td>
                    <td>{account.phone || "N/A"}</td>
                    <td>{account.role}</td>
                    <td
                      className={account.isActive ? "green bold" : "red bold"}
                    >
                      {account.isActive ? "ACTIVE" : "INACTIVE"}
                    </td>
                    <td>{account.createAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <Pagination maxPage={maxPage} onChangePage={onChangePage} />
      </div>
      <ToastContainer />
    </>
  );
}

export default ManageUsersWidget;
