import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
//import ExpandablePanel from "./ExpandablePanel";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    const handleAlbumAdd = () => {
        addAlbum(user)
    }
    let content;
    if (isFetching) {
        content = <div><Skeleton times={3} className='h-10 w-full' /></div>
    } else if (error) {
        content = <div>Error Fetching Albums</div>
    }
    else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album} />
        })
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className='text-lg font-bold'>Albums for {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAlbumAdd} className='text-green-500'>+ Add Album</Button>
            </div>
            <div>{content}</div>
        </div>

    )
}

export default AlbumsList