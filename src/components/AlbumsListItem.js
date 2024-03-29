import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }
    const header = <>
        <Button className='mr-3' loading={results.isLoading} onClick={handleRemoveAlbum}>
            <GoTrash />
        </Button>
        <span className="text-green-500 font-bold">{album.title}</span>

    </>
    return (

        <div>
            <ExpandablePanel key={album.id} header={header}>
                <PhotosList album={album} />
            </ExpandablePanel>
        </div>

    )
}

export default AlbumsListItem