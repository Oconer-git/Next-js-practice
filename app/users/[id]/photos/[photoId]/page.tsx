interface Props{
    params: {id:number; photoId: number},
}

const UsersPhotosPage = ({params:{id, photoId}}: Props) => {
    return (
        <>
            <div>Users Photos Page {id} {photoId}</div>
        </>
    )
}

export default UsersPhotosPage;