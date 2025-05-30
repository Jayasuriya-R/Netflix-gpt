export const netflixLogo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const netflixBg = "https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"

export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
    }
  };

  export const IMG_CDN = "https://image.tmdb.org/t/p/w500"

  export const Support_Language = [
    {
    identifier:"en",name:'English'
  },
  {
    identifier:"hindi",name:'Hindi'
  },
  {
    identifier:"spanish",name:'Spanish'
  },
]

export const API_KEY = import.meta.env.VITE_API_KEY;
 