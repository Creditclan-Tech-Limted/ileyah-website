"use client"
import { createElement, useState } from 'react';
import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";
import { useIsomorphicLayoutEffect } from "react-use";
import classNames from "classnames";
import Button from "@/components/global/Button.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Hover from '@/global/Hover';
import products from '@/lib/products';
import useGlobalStore from '@/store/global';
import PostRequest from '@/app/listings/modals/PostRequest';

const Navbar = ({ name }) => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [openPostRequest, setOpenPostRequest] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (isMobileNavVisible) document.scrollingElement.style.overflowY = 'hidden';
    else document.scrollingElement.style.overflowY = 'initial';
  }, [isMobileNavVisible]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    setScrolled(scrollTop > 50);
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <header className={classNames(
        'top-0 inset-x-0 z-50 h-100 py-[30px] transition-all navbar_bg !bg-gray-900',
        { 'bg-black text-white shadow !h-100 py-[30px] navbar_bg': scrolled },
        { 'text-white shadow navbar_bg': !scrolled },
      )}>
        <div className="container h-full flex flex-col">
          <div className='my-auto'>
            <nav className="relative z-50 flex justify-between h-full">
              <div className="flex items-center md:gap-x-12 flex-1 h-full">
                <Link href="/" className="text-xl w-[170px]">
                  <img src='/assets/images/ileyah logo white.png' alt="logo" />
                </Link>
                <div className="inline-flex items-center rounded-full py-1 px-4 ml-auto">
                  Welcome, {name}
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-5 md:gap-x-4 ml-6">
                <div className="hidden lg:block space-x-4">
                  <Button color='white' onClick={() => setOpenPostRequest(true)}>Post new Request</Button>
                </div>
                {/* <div className="-mr-1 lg:hidden">
                                    <button
                                        onClick={() => setIsMobileNavVisible(true)}
                                        className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none"
                                        aria-label="Toggle Navigation" type="button" aria-expanded="false"
                                    >
                                        <IconMenu />
                                    </button>
                                </div> */}
              </div>
            </nav>
          </div>
          <div className='mt-20 grid grid-cols-6 gap-5'>
            <div className='rounded px-10 py-6' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://fastly.picsum.photos/id/1021/200/303.jpg?hmac=qg2Q16h_k7J1-IykCJ5S4RDIf8sJ136v-aD6tK4NjBw')` }}>
              <p className='text-center'>Festac</p>
            </div>
            <div className='rounded px-10 py-6 bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU')` }}>
              <p className='text-center'>Surulere</p>
            </div>
            <div className='rounded px-10 py-6 bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/305')` }}>
              <p className='text-center'>Apapa</p>
            </div>
            <div className='rounded px-10 py-6 bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/301` }}>
              <p className='text-center'>Oshodi</p>
            </div>
            <div className='rounded px-10 py-6 bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/302')` }}>
              <p className='text-center'>Ikeja</p>
            </div>
            <div className='rounded px-10 py-6 bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/304')` }}>
              <p className='text-center'>V I</p>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {
          isMobileNavVisible && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileNavVisible(false)}
                className="fixed inset-0 bg-zinc-900/80 z-50"
                aria-hidden="true"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed inset-x-0 top-24 mt-4 flex origin-top flex-col rounded-3xl bg-white px-4 py-6 text-lg tracking-tight shadow-xl z-50 space-y-2"
              >
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Product
                </Link>
                {/* <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/tenants"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Tenants
                </Link> */}
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/landlords"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Landlords
                </Link>
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/companies"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  For Companies
                </Link>
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/find-artisans"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Find Artisans
                </Link>
                <div>
                  <hr className="mx-2 my-2 border-zinc-300/40" />
                </div>
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/login"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Sign in
                </Link>
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/register"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Sign up
                </Link>
              </motion.div>
            </>
          )
        }
      </AnimatePresence>

      <PostRequest isOpen={openPostRequest} onClose={() => setOpenPostRequest(false)} />
    </>
  );
};

export default Navbar;