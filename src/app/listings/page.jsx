'use client'
import ListingFlex from '@/components/listings/ListingFlex'
import ListingsGrid from '@/components/listings/ListingsGrid'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Explore from '@/components/listings/Explore'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollToTopBtn from '@/components/ScrollToTpBtn'
import Footer from '@/components/Footer'
import axios from 'axios'
import ProDetails from '@/components/listings/modals/property_details'
import useSignupStore from '@/store/signup'
import Button from '@/components/global/Button'
import Navbar from './components/Navbar'
import { IconChevronRight, IconListNumbers, IconMoodCry, IconSearch } from '@tabler/icons-react'
import WeCall from '@/components/WeCall'
import PostRequest from './modals/PostRequest'
import { usePropertyQuery } from '@/hooks/use-property-query'
import Input from '@/global/Input'
import { useForm } from 'react-hook-form'
import { areas, availableAreas } from '@/lib/utils'
import { MultiSelect } from 'react-multi-select-component';
import SuscriptionStandAlone from '@/components/listings/modals/SuscriptionStandAlone'

const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [isGridView, setIsGridView] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [call, setCall] = useState(false)
  const [properties, setProperties] = useState([])
  const [current, setCurrent] = useState()
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false)
  const { data: signupData, updateData } = useSignupStore((state) => state);
  const [loading, setLoading] = useState(true);
  const [openFindHouse, setOpenFindHouse] = useState(false)
  const [checkedInput, setCheckedInput] = useState(null)
  const [selectedFilterArea, setSelectedFilterArea] = useState([]);
  const [loadingFilter, setLoadingFilter] = useState(false)
  const [isFilterAboveMarkAction, setIsFilterAboveMarkAction] = useState(true)
  const [isFiltering, setIsFiltering] = useState(false)
  const [filterData, setFilterData] = useState([])
  const containerRef = useRef(null)
  const bottomRef = useRef(null)
  const [openStandAlonePlans, setOpenStandAlonePlans] = useState(false)

  const apiUrl = 'https://kuda-creditclan-api.herokuapp.com/'

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePropertyQuery({
    apiUrl,
  });

  const handleClose = async () => {
    try {
      setOpenPropertyDetails(false)
    } catch (error) {
      console.log({ error })
    }
  }

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const getPorperties = useCallback(
    (returnedData) => {
      try {
        if (returnedData) {
          let array = [...returnedData]
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }

          let a = [...properties, ...array];

          let updatedProducts = a.map(product => {
            let markupPercentage = 0.42; // 42%
            let percentage = +product.price * markupPercentage;
            let newPrice = +percentage + +product.price
            return { ...product, newPrice };
          });

          setProperties(updatedProducts)
          setLoading(false)
        }
      } catch (error) {
        console.log({ error });
      }
    },
    [properties],
  )

  useEffect(() => {
    if (data && data?.pages[0]?.array?.length > 0) {
      getPorperties(data?.pages[0]?.array)
    }
  }, [data])

  useEffect(() => {
    const bottom = bottomRef?.current;

    const handlePropScroll = () => {
      const rect = bottom.getBoundingClientRect()
      let isBottom = rect.bottom <= window.innerHeight + 2000;

      if (isBottom) {
        if (!isFetchingNextPage && hasNextPage && isFilterAboveMarkAction && !isFiltering) {
          fetchNextPage()
        }
      }
    }

    window?.addEventListener("scroll", handlePropScroll)
    return () => {
      window?.removeEventListener("scroll", handlePropScroll);
    }
  }, [isFetchingNextPage, hasNextPage, bottomRef, isFilterAboveMarkAction, fetchNextPage, isFiltering])

  const onFilterProperty = async (data) => {
    const { price } = data
    try {
      setLoadingFilter(true)
      const areas = selectedFilterArea?.map(filterArea => filterArea.value)
      const res = await axios.post(`${apiUrl}filter_by_search_params`, {
        beds: checkedInput,
        area: areas,
        price: price
      })
      setLoadingFilter(false)
      setIsFiltering(true)
      setFilterData([...res?.data])
      if (res.data.length < 50) {
        setIsFilterAboveMarkAction(false)
      }
    } catch (error) {
      console.log(error)
      setLoadingFilter(false)
    }
  }


  const onTopCategoryAreaFilter = async (filter) => {
    try {
      setLoadingFilter(true)
      const res = await axios.get(`${apiUrl}filter_by_search_params?area=${filter}`)
      setLoadingFilter(false)
      setIsFiltering(true)
      setFilterData([...res?.data])

      if (res.data.length < 50) {
        setIsFilterAboveMarkAction(false)
      }
    } catch (error) {
      console.log(error)
      setLoadingFilter(false)
    }
  }

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageHeight = document.body.offsetHeight
      const middleOfPage = pageHeight / 2
      setScrollTop(event.target.scrollingElement.scrollTop)
      if (scrollPosition >= middleOfPage) {
        if (call) return
        setCall(true)
        setShowModal(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [call])

  const toggleView = () => {
    setIsGridView((prev) => !prev)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleClick = () => {
    console.log('Button clicked!')
  }

  const checkLegacyRoute = async () => {
    try {
      if (signupData?.property) {
        setCurrent(signupData?.property)
        setOpenPropertyDetails(true)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const cancelFilter = () => {
    reset()
    setCheckedInput(null)
    setIsFiltering(false),
      setIsFilterAboveMarkAction(true)
    setSelectedFilterArea([])
  }

  return (
    <div className='bg-gray-100'>
      <ScrollToTop />
      <Navbar filterAction={onTopCategoryAreaFilter} />
      <div className='grid gap-10 container mt-[10px]'>
        <div className=''>
          {loading && (
            <>
              <div className='grid grid-cols-3 gap-10'>
                {
                  [1, 2, 3, 4].map((m, i) => (
                    <div
                      role='status'
                      className='max-w-sm p-4  rounded shadow animate-pulse md:p-6'
                      key={i}
                    >
                      <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
                        <svg
                          className='w-10 h-10 text-gray-200 dark:text-gray-600'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 16 20'
                        >
                          <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                          <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                        </svg>
                      </div>
                      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                      <div className='flex items-center mt-4 space-x-3'>
                        <svg
                          className='w-10 h-10 text-gray-200 dark:text-gray-700'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                        </svg>
                        <div>
                          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2'></div>
                          <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                        </div>
                      </div>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  ))
                }
              </div>
            </>
          )}

          <div className="border-gray-300 border px-8 py-6 bg-blue-900 rounded-2xl text-white space-y-6 navbar_bg2 mt-4 md:hidden">
            <p className='inline-flex'>
              <IconMoodCry className='mr-2' />
              <span className=''>
                Didn't find what you're looking for?
              </span>
            </p>
            <Button color='white' size='sm' onClick={() => (
              setCall(true),
              setShowModal(true)
            )} >Post a Request</Button>
          </div>

          <div className={`md:grid md:grid-cols-[1fr_350px] gap-10 mt-10`}>
            {isGridView ? (
              <>
                <div className=' grid md:grid-cols-2 gap-10'>
                  {isFiltering && filterData?.length === 0 && (
                    <div className='border-2 bg-red-300 w-full'>
                      <span className='mb-4'>property currently unavailable for selected filters</span>
                      <Button variant='outlined' color='red' size='md' onClick={cancelFilter} >Clear Filter</Button>
                    </div>
                  )}
                  {(isFiltering ? filterData : properties)?.map((m, i) => (
                    <div key={i}>
                      <ListingsGrid
                        index={i}
                        key={i}
                        houseImg={m.image}
                        heading='For Rent'
                        price={m?.newPrice}
                        title={m?.description}
                        avatar={imageAvatar}
                        name='Jonathan Reinink'
                        role='Estate Agents'
                        location={m?.area}
                        lengthNum='3450'
                        bedNum={m?.beds}
                        bathNum={m?.baths}
                        bed='Bed'
                        bath='Bath'
                        length='Square Ft'
                        property={m}
                        onClick={() => {
                          setCurrent(m)
                          setOpenPropertyDetails(true)
                        }}
                      />
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>
              </>
            ) : (
              <div className=''>
                {(isFiltering ? filterData : properties)?.map((m, i) => (
                  <div key={i}>
                    <ListingFlex
                      key={i}
                      index={i}
                      houseImg={m.image}
                      heading='For Rent'
                      price={m?.newPrice}
                      title={m?.description}
                      avatar={imageAvatar}
                      name='Jonathan Reinink'
                      role='Estate Agents'
                      location={m?.address}
                      lengthNum='3450'
                      bedNum={m?.beds}
                      bathNum={m?.baths}
                      bed='Bed'
                      bath='Bath'
                      length='Square Ft'
                      property={m}
                      onClick={() => {
                        setCurrent(m)
                        setOpenPropertyDetails(true)
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className='hidden md:block'>
              <div className="border-gray-300 border px-8 py-6 bg-blue-900 rounded-2xl text-white space-y-6 navbar_bg2 mt-4">
                <p className='inline-flex'>
                  <span className='text-3xl'>
                    Didn't find what you're looking for?
                  </span>
                </p>
                <Button color='white' size='sm' onClick={() => (
                  setCall(true),
                  setShowModal(true)
                )} >Post a Request</Button>
              </div>

              <div>
                <p className='mb-3 italic mt-10'>Setup your Subscription Services</p>
                <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={() => setOpenStandAlonePlans(true)}>
                  <div className="flex">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center my-auto">
                        <IconListNumbers size="20" />
                      </div>
                    </div>
                    <div className="px-5 my-auto">
                      <p className="text-lg font-medium text-left">
                        Choose Subscriptions
                      </p>
                    </div>
                  </div>
                  <div>
                    <IconChevronRight className="text-black ml-auto" size="20" />
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-2xl p-10 max-h-[770px] space-y-10 sticky top-[30px] mt-10'>
                <form onSubmit={handleSubmit(onFilterProperty)} className='space-y-6'>
                  <div>
                    <p>House Type</p>
                    <div className='flex items-center my-5'>
                      <input
                        id='default-checkbox1'
                        type='checkbox'
                        value='1'
                        checked={checkedInput === '1'}
                        onChange={() => setCheckedInput('1')}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                      />

                      <label htmlFor='default-checkbox1' className='ml-2 text-base'>
                        One Bedroom
                      </label>
                    </div>
                    <div className='flex items-center mb-4'>
                      <input
                        id='default-checkbox2'
                        type='checkbox'
                        value='2'
                        checked={checkedInput === '2'}
                        onChange={() => setCheckedInput('2')}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                      />
                      <label htmlFor='default-checkbox2' className='ml-2 text-base'>
                        Two Bedroom
                      </label>
                    </div>
                    <div className='flex items-center mb-4'>
                      <input
                        id='default-checkbox3'
                        type='checkbox'
                        value='3'
                        checked={checkedInput === '3'}
                        onChange={() => setCheckedInput('3')}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                      />
                      <label htmlFor='default-checkbox3' className='ml-2 text-base'>
                        Three Bedroom
                      </label>
                    </div>
                    <span className='text-red-400'>{errors?.beds?.message}</span>
                  </div>

                  <div>
                    <div className='w-full my-4'>
                      <Input
                        bordered label='Maximum Rent Amount'

                        {...register("price", {
                          min: {
                            value: 300000,
                            message: "Please provide an amount greater than ₦100,000",
                          },
                          max: {
                            value: 3000000,
                            message: "Please provide an amount less than ₦3million",
                          },
                        })}
                        error={errors?.price?.message}
                      />
                    </div>
                  </div>

                  <div>
                    <p>Location (Select Multiple)</p>
                    <div className='w-full my-4'>
                      {/* <Select
                        options={areas}
                        {...register("area", {
                          
                        })}
                        error={errors?.area?.message}
                      /> */}
                      <MultiSelect
                        options={availableAreas}
                        value={selectedFilterArea}
                        onChange={setSelectedFilterArea}
                        labelledBy="Please select area"
                      />

                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button type="submit" leftIcon={<IconSearch />} loading={loadingFilter}  >Apply Filter</Button>
                    {
                      isFiltering && (
                        <Button variant='outlined' color='red' size='md' onClick={cancelFilter} >Clear Filter</Button>
                      )
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explore />
      <div className='pt-24'>
        <Footer />
      </div>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
      <ProDetails isOpen={openPropertyDetails} onClose={handleClose} property={current} />
      <WeCall isOpen={showModal} onClose={() => setShowModal(false)} />
      <PostRequest isOpen={openFindHouse} onClose={() => setOpenFindHouse(false)} />
      <SuscriptionStandAlone isOpen={openStandAlonePlans} onClose={() => setOpenStandAlonePlans(false)} />
    </div>
  )
}

export default Page;