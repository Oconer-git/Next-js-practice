import Link from 'next/link'
import ProductCard from './compoents/ProductCard'

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/users"> Users </Link>
      <ProductCard/>
    </>
  )
}
