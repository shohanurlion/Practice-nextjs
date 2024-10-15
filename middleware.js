import { NextResponse } from 'next/server'
const ueser = false
const middleware = (request) => {
    if(!ueser){
        return NextResponse.redirect(new URL('/login', request.url))
    } return NextResponse.next()
   
}
export const config = {
    matcher: '/profile',
  }

export default middleware