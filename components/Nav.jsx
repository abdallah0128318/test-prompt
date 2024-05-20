"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from "next-auth/react"
const Nav = () => {
    const {data: session, status} = useSession()
    const [providers, setProviders] = useState(null)
    useEffect(()=>{
        const setUpProvisers = async ()=> {
            const response = await getProviders()
            setProviders(response);
        }
        setUpProvisers();
    }, []);
    const [toggleDropdown, setToggleDropdown] = useState(false)
  return (
    <nav className='flex flex-between w-full mb-16 pt-3'>
        {/* Here is logo section */}
        <Link href="/" className='flex flex-center gap-3'>
            <Image 
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                alt="logo iamge" />
            <p className='logo_text'>Promptopia</p>
        </Link>

        {/* then there is two section one for desktop and the other is for mobile */}


        {/* Desktop section will appear from sm and larger */}
        <div className='sm:flex hidden'>
            {session?.user ?(
                <div className='flex flex-center gap-2 md:gap-3'>
                    <Link href="/create-prompt" className='black_btn'>Create Post</Link>
                    <button type='button' className='outline_btn' onClick={signOut}>Sign out</button>
                    <Link href={`/profile?id=${session?.user.id}`}
                    >
                        <Image 
                            src={session?.user.image}
                            width={30}
                            height={30}
                            className='rounded-full'
                            alt="profile pic" />
                    </Link>
                </div>
            ):(
                <>
               {providers && Object.values(providers).map(provider => (
               <button
               key={provider.name}
               type='button'
               onClick={()=> signIn(provider.id)}
               className='black_btn'
               >SignIn</button>
            ))}
                </>
            )
            }
        </div>


        {/* Mobile section will apear jsut in xs media device */}
        <div className="sm:hidden relative">
            {session?.user ? (
                <div>
                <Image 
                src={session?.user.image}
                width={30}
                height={30}
                onClick={()=>{setToggleDropdown((prev) => !prev)}}
                className='rounded-full'
                alt="profile pic" />

                {toggleDropdown && (
                    <div className='dropdown'>
                        <Link
                        href={`/profile?id=${session?.user.id}`}
                        className='dropdown-link text-center'
                        onClick={()=>{
                            setToggleDropdown(false);
                        }}
                        >
                            Profile
                        </Link>
                        <Link
                        href="/create-prompt"
                        className='dropdown-link'
                        onClick={()=>{
                            setToggleDropdown(false);
                        }}
                        >
                            Create post
                        </Link>
                        <button
                        type='button'
                        className='black_btn w-full mt-5'
                        onClick={()=>{
                            setToggleDropdown(false);
                            signOut();
                        }}
                        >
                            SignOut
                        </button>
                    </div>
                )}
                </div>  
            ):(
            <>
                {providers && Object.values(providers).map(provider => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={()=>signIn(provider.id)}
                    className='black_btn'
                    >SignIn</button>
                ))}
            </>
            )}
        </div>
    </nav>
  )
}

export default Nav