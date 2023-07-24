import ListingFlex from '@/components/listings/ListingFlex'
import ListingsGrid from '@/components/listings/ListingsGrid'
import React from 'react'

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  return (
    <div>

      <ListingsGrid
        houseImg={image1}
        heading="For Rent"
        price="$34,900/Month"
        title="New Apartment Nice View"
        avatar={imageAvatar}
        name="Jonathan Reinink"
        role="Estate Agents"
        location=" Belmore Garden, Chicago"
        lengthNum="3450"
        bedNum="3"
        bathNum="2"
        bed="Bed"
        bath="Bath"
        length="Square Ft"
      />
    </div>
  )
}

export default Page