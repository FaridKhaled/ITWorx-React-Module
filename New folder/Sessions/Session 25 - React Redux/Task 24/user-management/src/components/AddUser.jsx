import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import AddUserForm from "./AddUserForm";

function AddUser() {
  const [modalShown, setModalShown] = useState(false);

  function handleClick() {
    setModalShown(!modalShown);
  }

  return (
    <>
      <button
        className="bg-add-user-button-color p-2 text-white rounded active:bg-green-700"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        Add New
      </button>

      <Dialog
        open={modalShown}
        handler={handleClick}
        dismiss={{ enabled: false }}
      >
        <DialogHeader className="bg-add-user-modal-header-color text-white">
          <Typography variant="h4">Add New User</Typography>
        </DialogHeader>

        <DialogBody divider className="bg-main-section-color block">
          <AddUserForm />
        </DialogBody>

        <DialogFooter>
          <Button variant="text" className="underline text-black mr-auto">
            Reset fields
          </Button>

          <Button
            variant="outlined"
            className="text-red-600 mx-1"
            color="red"
            onClick={handleClick}
          >
            Cancel
          </Button>

          <Button
            variant="filled"
            className="text-white bg-add-user-button-color mx-1"
          >
            Add User
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default AddUser;
