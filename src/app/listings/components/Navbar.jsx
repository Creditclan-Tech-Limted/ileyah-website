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
import SuscriptionStandAlone from '@/components/listings/SubStandAlone/SuscriptionStandAlone';

const Navbar = ({ filterAction }) => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [openStandAlonePlans, setOpenStandAlonePlans] = useState(false)

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
    localStorage.removeItem('ileyah_token');
    logout();
    window.location.reload();
  };

  const signIn = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      if (ileyah_token) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    } catch (error) {
      console.log({ error });
    }
  }

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
                <div className="hidden lg:flex md:space-x-3 ml-auto h-full">
                  <Hover className="h-full inline-flex items-center">
                    {
                      hovered => (
                        <div className="relative h-full flex items-center">
                          <Link href='/'>
                            <div className="inline-flex items-center rounded-full py-1 px-4">
                              Products
                            </div>
                          </Link>
                          <AnimatePresence mode="wait">
                            {
                              hovered && (
                                <motion.div
                                  initial={{ opacity: 0, y: 20, x: '-50%', }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 20 }}
                                  className={classNames(
                                    'p-4 rounded-2xl bg-white shadow-md z-50 border text-gray-800 absolute top-full -mt-2 left-1/2 -translate-x-1/2 right-0 w-[630px] grid grid-cols-2 gap-4',
                                  )}
                                >
                                  {
                                    products.map((product, i) => (
                                      <a href={product?.homeLink} key={i}>
                                        <div
                                          key={product.name}
                                          className="rounded-2xl flex items-center hover:bg-gray-200/70 p-4 transition-all cursor-pointer"
                                        >
                                          <div className="mr-4">
                                            <div
                                              className={classNames('w-10 h-10 rounded-full flex items-center justify-center ', product.backgroundColor)}
                                            >
                                              {createElement(product.icon)}
                                            </div>
                                          </div>
                                          <div>
                                            <h4 className="font-medium">{product.name}</h4>
                                            <p className="text-sm opacity-80 leading-tight mt-1">
                                              {product.description}
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    ))
                                  }
                                </motion.div>
                              )
                            }
                          </AnimatePresence>
                        </div>
                      )
                    }
                  </Hover>
                  <div className="inline-flex items-center rounded-full py-1 px-4 cursor-pointer" onClick={() => setOpenStandAlonePlans(true)}>
                    Subscriptions
                  </div>
                  <Link className="inline-flex items-center rounded-full py-1 px-4" href="/landlords">
                    Landlords
                  </Link>
                  <Link className="inline-flex items-center rounded-full py-1 px-4" href="/companies">
                    For Company
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-5 md:gap-x-4 ml-6">
                <div className="hidden lg:block space-x-4">
                  <Button color='white' onClick={signIn}>Sign In</Button>
                </div>
                <div className="-mr-1 lg:hidden">
                  <button
                    onClick={() => setIsMobileNavVisible(true)}
                    className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle Navigation" type="button" aria-expanded="false"
                  >
                    <IconMenu />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className='mt-20 grid-cols-6 gap-5 hidden md:grid'>
            <div onClick={() => filterAction("Festac")} className='rounded px-10 py-6 cursor-pointer' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://fastly.picsum.photos/id/1021/200/303.jpg?hmac=qg2Q16h_k7J1-IykCJ5S4RDIf8sJ136v-aD6tK4NjBw')` }}>
              <p className='text-center'>Festac</p>
            </div>
            <div onClick={() => filterAction("Surulere")} className='rounded px-10 py-6 cursor-pointer bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU')` }}>
              <p className='text-center'>Surulere</p>
            </div>
            <div onClick={() => filterAction("Apapa")} className='rounded px-10 py-6 cursor-pointer bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/305')` }}>
              <p className='text-center'>Apapa</p>
            </div>
            <div onClick={() => filterAction("Oshodi")} className='rounded px-10 py-6 cursor-pointer bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/301` }}>
              <p className='text-center'>Oshodi</p>
            </div>
            <div onClick={() => filterAction("Ikeja")} className='rounded px-10 py-6 cursor-pointer bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/302')` }}>
              <p className='text-center'>Ikeja</p>
            </div>
            <div onClick={() => filterAction("V I")} className='rounded px-10 py-6 cursor-pointer bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('https://picsum.photos/200/304')` }}>
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
                <Link
                  onClick={() => setIsMobileNavVisible(false)} href="/tenants"
                  className="block w-full px-4 py-3 rounded-xl hover:bg-zinc-200"
                >
                  Tenants
                </Link>
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
      <SuscriptionStandAlone isOpen={openStandAlonePlans} onClose={() => setOpenStandAlonePlans(false)} />

    </>
  );
};

export default Navbar;
