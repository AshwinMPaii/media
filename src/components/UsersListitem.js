import { GoTrash } from "react-icons/go";
import { removeUser } from "../store";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListitem({ user }) {
    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);
    const handleDelete = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button className='mr-3' loading={isRemovingUser} onClick={handleDelete} >
            <GoTrash />
        </Button>
        {removingUserError && <div>error deleting user</div>}
        <span className="text-red-500 font-extrabold">{user.name}</span>

    </>
    return (
        <ExpandablePanel header={header} >
            <AlbumsList user={user} />
        </ExpandablePanel>
    )
}

export default UsersListitem