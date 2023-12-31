'use client'

import { useState } from "react"
import { Toaster } from "react-hot-toast"

import YoutubeQuestions from "@/components/YoutubeQuestions"
import DocQuestions from "@/components/DocQuestions"
import PdfQuestions from "@/components/PdfQuestions"
import WebQuestions from "@/components/WebQuestions"
import TextQuestions from "@/components/TextQuestions"


export default function Home() {

  const [currTab, setCurrTab] = useState<number>(0)

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "1rem",
          },
        }}
      />
      <main
        className = "flex flex-col items-center"
      >
        <div>
          <h1
            className = "text-3xl font-bold mt-5"
          >
            Polymath Questions Generator
          </h1>
        </div>
        {/* tabs */}
        <div
          className = "flex gap-1 border-2 border-black border-dashed mt-6 rounded-md p-1" 
        >
          <div
            className = {`text-lg font-bold px-3 py-2 rounded-md cursor-pointer ${currTab === 0 ? "text-white bg-black":""} hover:text-white hover:bg-black`}
            onClick = {() => {
              setCurrTab(0)
            }}
          >
            Youtube Video
          </div>
          <div
            className = {`text-lg font-bold px-3 py-2 rounded-md cursor-pointer ${currTab === 1 ? "text-white bg-black":""} hover:text-white hover:bg-black`}
            onClick = {() => {
              setCurrTab(1)
            }}
          >
            PDF
          </div>
          <div
            className = {`text-lg font-bold px-3 py-2 rounded-md cursor-pointer ${currTab === 2 ? "text-white bg-black":""} hover:text-white hover:bg-black`}
            onClick = {() => {
              setCurrTab(2)
            }}
          >
            Website
          </div>
          <div
            className = {`text-lg font-bold px-3 py-2 rounded-md cursor-pointer ${currTab === 3 ? "text-white bg-black":""} hover:text-white hover:bg-black`}
            onClick = {() => {
              setCurrTab(3)
            }}
          >
            Text
          </div>
          {/* <div
            className = {`text-lg font-bold px-3 py-2 rounded-md cursor-pointer ${currTab === 2 ? "text-white bg-black":""} hover:text-white hover:bg-black`}
            onClick = {() => {
              setCurrTab(2)
            }}
          >
            Doc
          </div> */}
        </div>
        {/* containers */}
        <div
          className = "p-1 w-4/5 mt-9"
        >
          {currTab === 0 && <YoutubeQuestions/>}
          {currTab === 1 && <PdfQuestions/>}
          {currTab === 2 && <WebQuestions/>}
          {currTab === 3 && <TextQuestions/>}
          {/* {currTab === 2 && <DocQuestions/>} */}
        </div>
      </main>
    </>
  )
}
