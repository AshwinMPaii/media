import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UsersListitem from "./UsersListitem";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doAddUser();
    }



    const { data } = useSelector((state) => {
        return state.users
    })
    // console.log(data.length);


    let content;
    if (isLoadingUsers) {
        content = <div><Skeleton times={3} className='h-10 w-full' /></div>
    } else if (loadingUsersError) {
        content = <div>Error Fetching Data</div>
    }
    else {
        content = data.map((user) => {
            return <UsersListitem key={user.id} user={user} />
        })
    }
    return (
        <div>
            <div className='flex flex-row justify-between items-center m-3'>
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add user
                </Button>
                {
                    creatingUserError && 'error creating user'
                }
            </div>
            {content}
        </div>
    )
}

export default UsersList