import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  redirect ("/login");
  return null;
}

export default page