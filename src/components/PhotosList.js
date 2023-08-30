import { useAddPhotoMutation, useFetchPhotosQuery } from "../store"
import PhotosListItem from "./PhotosListItem";
import Skeleton from './Skeleton';
import Button from "./Button";

function PhotosList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album);

    const [addPhoto, addPhotoresults] = useAddPhotoMutation();
    const handlePhotoAdd = () => {
        addPhoto(album)
    }
    let content;
    if (isFetching) {
        content = <Skeleton className='h-128 w-128 mr-3' times={4} />
    } else if (error) {
        content = <div>Error Fetching Photos</div>
    } else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />
        })
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className='text-blue-500 font-semibold'>Photos for {album.title}</h3>
                <Button loading={addPhotoresults.isLoading} onClick={handlePhotoAdd} className='text-blue-500 font-sans'>+ Add Photo</Button>
            </div>
            <div className='flex flex-row flex-wrap justify-center '>{content}</div>
        </div>
    )
}

export default PhotosList