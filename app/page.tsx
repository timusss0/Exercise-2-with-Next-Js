import { Counter } from "./counter"
import Image from 'next/image'
import gambarKucing from '../public/miaw.jpg'
 
export default function Home() {

  return (
    <div>
      <h1>HOME</h1>
      {/* Abstract Components */}
      <Counter/>
      <Image
      src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      alt="Picture cat"
      width={900}
      height={500}
    />
     <Image src={gambarKucing} alt="image cat" width={900}
      height={500} loading="eager" placeholder="blur" 
      />
    </div>
  );
}
