'use client'
import { useState } from 'react'
import Link from 'next/link'
import _ from 'lodash'
import dynamic from 'next/dynamic'

export default function Home() {
  const [visible, setVisible] = useState(false)

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
