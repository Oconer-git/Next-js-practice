
interface Props{
    params: {slug: string[]},
    searchParams: {sortOrder: string}
}

const ProductDetailPage = ({params: {slug}, searchParams:{sortOrder}}: Props) => {
    return (
        <>
            <div>Product Detail Page {slug}</div>
            <div>sortOrder: {sortOrder}</div>
        </>
    )
}

export default ProductDetailPage    