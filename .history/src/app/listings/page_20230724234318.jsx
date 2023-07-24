import ListingFlex from '@/components/listings/ListingFlex'
import React from 'react'

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  return (
    <div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
      
      <ListingFlex
        houseImg={image1}
        heading="For Rent"
        price="$34,900/Month"
        title="New Apartment Nice View"
        avatar={imageAvatar}
        name="Jonathan Reinink"
        role="Estate Agents"
        location=" Belmore Garden, Chicago"
        lengthNum='3450'
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