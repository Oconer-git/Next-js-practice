'use client'
import Link from 'next/link'
import _ from 'lodash'

export default function Home() {

  return (
    <main className="relative h-screen">
      <Link href="/users"> Users </Link>
      <button onClick={async () => {
        const x = (await import('lodash')).default  
        const users = [{name: 'a'}, {name: 'c'}, {name: 'b'}];
        const sorted = x.orderBy(users, ['name']);
        console.log(sorted);
      }} className="btn btn-primary">Render</button>
    </main>
  )
}
