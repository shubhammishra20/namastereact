import React from 'react' //it meant react come from in node_modules.
import ReactDOM from 'react-dom/client'
/**
 * Header
 *    - Logo
 *    - Nav Items
 * Body
 *   - Search
 *   - RestaurantContainer
 *       - RestaurantCard
 *           - img
 *           - Name od Res, star Rating, cusine, delivery time
 * Footer
 *    - Copyright
 *    - Link
 *    - Address
 *    - Contact
 *
 */

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = prop => {
  const { resData } = prop
  const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resData?.data
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img
        alt='ref-logo'
        className='res-logo'
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(' ,')}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

const resList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '65797',
      name: "Leon's - Burgers & Wings (Leon Grill)",
      uuid: '2ecdca25-3954-4f2e-8d50-4e13e2faf73e',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'r4ufflqojich0r29efvc',
      cuisines: ['American', 'Snacks', 'Turkish', 'Portuguese', 'Continental'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: '26 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: 'leon-grill-koramangala-koramangala',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95',
      locality: 'Koramangala',
      parentId: 371281,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      ribbon: [
        {
          type: 'PROMOTED'
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3900,
            message: ''
          },
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3900,
        message: '',
        title: 'Delivery Charge',
        amount: '3900',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6432613~p=4~eid=00000187-622d-1d9c-1c53-450c00a90413',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '65797',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: true,
      avgRating: '4.3',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '337335',
      name: 'Kannur food kitchen',
      uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'a27weqanhnszqiuzsoik',
      cuisines: ['Kerala', 'Biryani', 'Beverages'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: 'kannur-food-kitchen-btm-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
      locality: '1st  Stage',
      parentId: 114756,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '337335',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '428',
      name: 'Biryani Pot',
      uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
      cuisines: ['North Indian', 'Biryani'],
      tags: [],
      costForTwo: 50000,
      costForTwoString: '₹500 FOR TWO',
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: '21 MINS',
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: 'biryani-pot-madiwala-junction-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
      locality: 'Maruti Nagar',
      parentId: 21798,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '20% off',
        shortDescriptionList: [
          {
            meta: '20% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '20% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '2.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '428',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '42579',
      name: 'Burger King',
      uuid: '40d6f523-e29a-4ea6-b2f8-d1b87950df64',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: '28fb13049b4e55297bb3f703cde63c35',
      cuisines: ['Burgers', 'American'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: '27 MINS',
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: 'burger-king-vega-city-mall-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'Burger King India Pvt Ltd, Unit No QSR 1, 3rd Floor , Vega City Mall, Srinivas Industrial Estate Bannerghatta Road Bangalore  560076',
      locality: 'Vega City Mall',
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.7 kms',
      hasSurge: false,
      sla: {
        restaurantId: '42579',
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '94703',
      name: 'Sri Punjabi Dhaba',
      uuid: '244943ac-cb6b-439f-9a09-687af66615b1',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'i53hrycmcn2oehrojag0',
      cuisines: ['North Indian', 'Biryani', 'Chinese', 'Kebabs'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: '21 MINS',
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: 'sri-punjabi-dhaba-bangalore-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029',
      locality: 'Cashier Layout',
      parentId: 21426,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '60% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '60% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.1 kms',
      hasSurge: false,
      sla: {
        restaurantId: '94703',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '3.1',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '211192',
      name: "La Pino'z Pizza",
      uuid: 'f75bc4b3-6507-408f-8667-c6fefa151aa3',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'lczhp9lptdzbqn09nfns',
      cuisines: ['Pizzas', 'Italian', 'Snacks', 'Continental', 'Desserts'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "la-pino'z-pizza-btm-btm",
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'SILVER BIJOUX, Opp to Pizza Hut, Sunshine Colony, BTM 2nd Stage, Bengaluru, Karnataka, India',
      locality: '2nd Stage',
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '211192',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 5000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '229',
      name: 'Meghana Foods',
      uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
      cuisines: [
        'Biryani',
        'Andhra',
        'South Indian',
        'North Indian',
        'Chinese',
        'Seafood'
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: '₹500 FOR TWO',
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: '21 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: 'meghana-foods-5th-block-koramangala',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
      locality: '5th Block',
      parentId: 635,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3900,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3900,
        message: '',
        title: 'Delivery Charge',
        amount: '3900',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '229',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '4.3',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '580691',
      name: 'Rollsking',
      uuid: 'ff723013-9943-4fa5-9972-a5e9de1b7de1',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'vzhxq7jvtpx1qllxdbpp',
      cuisines: ['North Indian', 'Fast Food', 'Beverages'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: '27 MINS',
      lastMileTravel: 3.5,
      slugs: {
        restaurant: 'rolls-king-koramangala-koramangala',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        '1ST AND 2ND FLOOR, MUNICIPAL NO.114, INDUSTRIAL LAYOUT, BANGALORE., BTM Layout , B.B.M.P South, Karnataka, 560095',
      locality: '5th Block',
      parentId: 4697,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹100 | Use code GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹100 | Use code GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      ribbon: [
        {
          type: 'PROMOTED'
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3900,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3900,
        message: '',
        title: 'Delivery Charge',
        amount: '3900',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6394157~p=10~eid=00000187-622d-1d9c-1c53-450e00a90a25',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '3.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '580691',
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 3.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 500,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '300642',
      name: 'Al-Bek',
      uuid: '0628c01e-4bb8-42b6-9c89-5a808d535771',
      city: '1',
      area: 'J P Nagar',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'wyt8ymz3qwspvgvsthxr',
      cuisines: ['Indian', 'Chinese'],
      tags: [],
      costForTwo: 60000,
      costForTwoString: '₹600 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: 'al-bek-jp-nagar-jp-nagar-2',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'No.118/47, GR Basement and First Floor , Opp. Jayadeva Hospital , 2nd Main , 3rd Phase , JP Nagar , Bangalore , District - B.B.M.P South, STATE - Karnataka - 560078',
      locality: '3rd phase',
      parentId: 9911,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.1 kms',
      hasSurge: false,
      sla: {
        restaurantId: '300642',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 5000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '425',
      name: 'Hotel Empire',
      uuid: 'c0c37758-2e83-4429-aad6-eb94debb48f5',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
      cuisines: ['North Indian', 'Kebabs', 'Biryani'],
      tags: [],
      costForTwo: 45000,
      costForTwoString: '₹450 FOR TWO',
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: '29 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: 'hotel-empire-5th-block-koramangala',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        '103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore',
      locality: 'Koramangala',
      parentId: 475,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '10% off',
        shortDescriptionList: [
          {
            meta: '10% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '10% off up to ₹40 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '10% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '10% off up to ₹40 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3900,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3900,
        message: '',
        title: 'Delivery Charge',
        amount: '3900',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '425',
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '203015',
      name: 'Shapana dhaba',
      uuid: '3e69b27f-104b-400d-b238-494ebf8e4688',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'dlx42acjc2yqzajz714i',
      cuisines: ['Chinese', 'North Indian', 'Biryani'],
      tags: [],
      costForTwo: 15000,
      costForTwoString: '₹150 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 2,
      slugs: {
        restaurant: 'shapana-dhaba-btm-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address: 'H.NO 267, 26 main, 7th cross road 26th main EWS Layout',
      locality: 'EWS Layout',
      parentId: 181928,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '60% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '60% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '203015',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '3.4',
      totalRatings: 1000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '193210',
      name: 'Chopstick',
      uuid: '259b62fa-9764-4c6f-b915-0988773dc3e4',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'h7h8vt4y5cur3plpkf1x',
      cuisines: [
        'Chinese',
        'Thai',
        'Seafood',
        'Asian',
        'Combo',
        'Healthy Food',
        'Beverages'
      ],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: '33 MINS',
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: 'the-chopstick-btm-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'No. 805/A, 16th Mai, 7th Cross , Next to Pizza Hut, Stage 2, BTM Layout, Bangalore, Karnataka',
      locality: '2nd Stage',
      parentId: 1783,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'FLAT150 off',
        shortDescriptionList: [
          {
            meta: 'FLAT150 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: 'FLAT150 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '₹150 OFF',
        shortDescriptionList: [
          {
            meta: 'Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: 'FLAT150 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      ribbon: [
        {
          type: 'PROMOTED'
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6417297~p=16~eid=00000187-622d-1d9c-1c53-451000a91047',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.7 kms',
      hasSurge: false,
      sla: {
        restaurantId: '193210',
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '217048',
      name: 'Chinese BAE',
      uuid: 'f053c092-04d2-4551-b081-4449cf1a559f',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'n2lfnd2v4jf4x6l7rnos',
      cuisines: [
        'Chinese',
        'Thai',
        'Seafood',
        'Asian',
        'Combo',
        'Healthy Food',
        'Beverages'
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: '31 MINS',
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: 'chinese-bae-btm-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address:
        'NO.805/A, 1ST FLOOR, 7TH CROSS, BTM LAYOUT 2ND STAGE, MICO LAYOUT, BANGALORE., B.B.M.P South (Karnataka) - 560076',
      locality: '2nd Stage',
      parentId: 9769,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'FLAT150 off',
        shortDescriptionList: [
          {
            meta: 'FLAT150 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: 'FLAT150 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '₹150 OFF',
        shortDescriptionList: [
          {
            meta: 'Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: 'FLAT150 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      ribbon: [
        {
          type: 'PROMOTED'
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6417296~p=19~eid=00000187-622d-1d9c-1c53-451100a91361',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '217048',
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '71042',
      name: 'NEW Mahesh friends food center',
      uuid: '4b562172-019f-4ac2-9a01-7185a0397ab3',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'w2rjn1jnaz4obj2nexaq',
      cuisines: ['Chinese', 'North Indian'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: '27 MINS',
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant:
          'mahesh-friends-food-center-13th-a-main-ns-palya-btm-layout-2nd-stage-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address: '397 16th main 7th Cross Btm layout 2nd stage Bangalore,560068',
      locality: '2nd Stage',
      parentId: 16767,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '2.4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '71042',
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '3.2',
      totalRatings: 5000,
      new: false
    },
    subtype: 'basic'
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '10894',
      name: 'Pizza Hut',
      uuid: '536afd2e-b67d-44d0-bb39-d0b0f9d3a984',
      city: '1',
      area: 'BTM',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'gejt5b389nmaneodl1mx',
      cuisines: ['Pizzas'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: 'pizza-hut-btm-2-20t-btm',
        city: 'bangalore'
      },
      cityState: '1',
      address: '#805, Mico Emplyee, EGNS Lay out, BTM 2nd Stage',
      locality: 'Mico Layout',
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code SWIGGYIT',
            discountType: 'Percentage',
            operationType: 'RESTAURANT'
          }
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: ''
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3100,
            message: ''
          },
          {
            name: 'time',
            fee: 0,
            message: ''
          },
          {
            name: 'special',
            fee: 0,
            message: ''
          }
        ],
        totalFees: 3100,
        message: '',
        title: 'Delivery Charge',
        amount: '3100',
        icon: ''
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: ''
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '10894',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY'
      },
      promoted: false,
      avgRating: '4.0',
      totalRatings: 10000,
      new: false
    },
    subtype: 'basic'
  }
]

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resList.map((val) => (
          <RestaurantCard key ={val.data.id} resData={val} />
        ))}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
