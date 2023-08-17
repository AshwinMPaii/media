import { GoTrash } from "react-icons/go";
import { removeUser } from "../store";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";

function UsersListitem({ user }) {
    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);
    const handleDelete = () => {
        doRemoveUser(user);
    }
    return (
        <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <Button loading={isRemovingUser} onClick={handleDelete} >
                    <GoTrash />
                </Button>
                {removingUserError && <div>error deleting user</div>}
                {user.name}
            </div>
        </div>
    )
}

export default UsersListitem