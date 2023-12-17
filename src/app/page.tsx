"use client"
import { type NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import QRCode from "qrcode"

const Home:NextPage = () => {
  // const [username, setUsername] = useState<string>("");
  const [src, setSrc] = useState<string>(''); 
  const [userInput, setUserInput] = useState<string>('');
  const [imageIsExist, setImageIsExist] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  const generate = () => {
    QRCode.toDataURL(userInput, {
      margin: 2,
      width: 800,
      // color: {
      //   dark: '#335383',
      //   light: '#000000'
      // }
    }).then((val) => {
      setSrc(val)
      setImageIsExist(true)
    }).catch((err) => setError(true))
  }

  return (
    <>
      <Head>
        <title>Create qrcode app</title>
        <meta name="description" content="Generate qr code app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex pl-6 pt-4 w-full">
        {/* <input placeholder="Generate qrocde for github username" type="text" className="text-black w-1/2 px-2 outline-none" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
        <input placeholder="e.g https://www.google.com" type="text" className="text-black w-1/2 px-2 outline-none" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button type="submit" onClick={generate} className="p-2 border-white border-2 ml-4">Generate</button>
      </main>
      { 
        imageIsExist &&
        <div className="ml-6 mt-4">
          <img src={src} className="w-80 h-80 mb-4" />
          <a href={src} className="p-2 border-white border-2" download="qrcode.png" >Download</a>
        </div>
      }
      { error && <p className="ml-6 text-red-500">Something went wrong, please try Again</p> }
    </>
  )
}

export default Home;
