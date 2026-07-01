import { TextAlignCenter } from 'lucide-react'
import {  DNA, FidgetSpinner } from 'react-loader-spinner'

export function AudioSpinner() {
  return (
    <DNA
visible={true}
height="80"
width="80"
ariaLabel="dna-loading"
wrapperStyle={{}}
wrapperClass="dna-wrapper"

/>
  )
}