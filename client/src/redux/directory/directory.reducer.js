const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://www.thelist.com/img/gallery/when-you-wear-a-hat-every-day-this-is-what-happens-to-your-body/intro-1615925741.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://media.istockphoto.com/photos/denim-jacket-picture-id174847208?k=6&m=174847208&s=612x612&w=0&h=qe4BtPqJkWXtipZtbu7241QQ2nzDlTxAsrPZOvtW9i8=',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F12%2F2015%2F12%2Fsneakers-for-walking-400x400.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://media.istockphoto.com/photos/young-woman-walking-on-street-picture-id1134003334?k=20&m=1134003334&s=612x612&w=0&h=_BETFn_2s45rU5SV7p1h0I0XIC_wMO72hRq5hIfO73w=',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://media.istockphoto.com/photos/happy-smiling-african-american-man-picture-id1037004418?k=20&m=1037004418&s=612x612&w=0&h=_mTo0T0_TgcrnWJLYKn_i8rLFH-6EA23xixxpYw8r2w=',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer;
