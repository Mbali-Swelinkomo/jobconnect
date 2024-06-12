// import { HomeProductCarousel } from "../components/Carousel";
// import { DeviceCards } from "../components/Cards";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const latestDevices = [
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-1.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-2.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-1.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-2.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-1.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-2.png"

//     }
// ]

// const HomeProductCarouselSection: React.FC<{}> = () => {

//     return(
//         <div className="bg-devices-bg-linear-gradient lg:bg-none mt-6 lg:mt-6 mb-6 lg:mb-10"> 
//             <div className="container mx-auto px-10">
//                 <div className="bg-[transparent] lg:bg-devices-bg-linear-gradient px-[0px] lg:px-[35px] py-[40px] lg:py-[80px]
//                 lg:bg-xlLightGrey rounded-0 lg:rounded-[20px]">                    
//                 <div className="grid grid-cols-1 lg:grid-cols-3 mb-16 gap-4">
//                     <div>
//                         <h2 className="lg:text-center font-TelkomLight font-[300] 
//                         text-[22px] lg:text-[40px] leading-[24px] lg:leading-[52px] text-white ">Shop our latest devices</h2>
//                     </div>
//                     <div className="lg:pt-8">
//                         <Link href="/" className="flex items-center lg:justify-end gap-3
//                          text-white font-TelkomLight font-[400] text-[14px] leading-[20px]">
//                             <h4>View all devices</h4>
//                             <Image 
//                                 src="/images/icons/arrow-pink-right.png"
//                                 alt="View All Devices"
//                                 width="7"
//                                 height="13"                            
//                             />
//                         </Link>
//                     </div>
//                 </div> 
//                     <HomeProductCarousel />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HomeProductCarouselSection;