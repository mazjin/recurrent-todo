import { Icon } from '@mui/material'
import Image from 'next/image'
import Todos from './Todos'

export default function Home() {
  return (
    <main className='flex m-8 flex-col'>
      <h1 className='text-4xl'>
        ReCurrent <Icon>waves</Icon>
      </h1>
      <Todos/>
    </main>
  )
}
