const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = '/web'
  })
})

const CONFIGURATION = {
  locations: [
    {
      title: 'La Plaza Restaurante',
      address1: 'Plaza Mayor, 1',
      address2: '28012 Madrid, Spain',
      coords: { lat: 40.41552, lng: -3.707157 },
      placeId: 'ChIJSRMekDMoQg0R28uNfqwXJX0',
      actions: [
        {
          label: 'Reservar una mesa',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'El Retiro Tapas',
      address1: 'Calle de Alcalá, 78',
      address2: '28009 Madrid, Spain',
      coords: { lat: 40.419305, lng: -3.681816 },
      placeId: 'ChIJhQy2DG4oQg0RqkzHE3LMZG8',
      actions: [
        {
          label: 'Reservar una mesa',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
    {
      title: 'Mercado San Miguel',
      address1: 'Plaza de San Miguel, s/n',
      address2: '28005 Madrid, Spain',
      coords: { lat: 40.415491, lng: -3.708508 },
      placeId: 'ChIJD4pSXDMoQg0RJEqyBz9L21I',
      actions: [
        {
          label: 'Reservar una mesa',
          defaultUrl:
            'https://www.gstatic.com/pantheon/images/maps/reserve_with_google_preview_v1.png',
        },
      ],
    },
  ],
  mapOptions: {
    center: { lat: 40.416775, lng: -3.70379 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 12,
    zoomControl: true,
    maxZoom: 17,
    mapId: '',
  },
  mapsApiKey: 'AIzaSyBhDrKFNN5Qxr10MnBms-OBf-TpJK3oOrs',
  capabilities: {
    input: true,
    autocomplete: true,
    directions: false,
    distanceMatrix: true,
    details: false,
    actions: true,
  },
}

document.addEventListener('DOMContentLoaded', async () => {
  await customElements.whenDefined('gmpx-store-locator')
  const locator = document.querySelector('gmpx-store-locator')
  locator.configureFromQuickBuilder(CONFIGURATION)
})
