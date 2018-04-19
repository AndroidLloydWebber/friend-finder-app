// ===============================================================================
// Friend DATA
// Below data will hold all the friends' data.
// ===============================================================================

var friendArray = [
    {
      name: "Shaquille O'Neil",
      photo:"https://hollowverse.com/wp-content/uploads/2012/06/shaquille-oneal-640x360.jpg",
      "scores": [
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "4",
      "3"
      ]
    },
    {
      "name":"Drake",
      "photo":"https://cdn.vox-cdn.com/thumbor/H-Q069WkhF_xRlZZW6dGHJyc7fY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10644167/DrakeTooBig_Getty_Ringer.jpg",
      "scores":[
         "4",
         "2",
         "2",
         "1",
         "2",
         "2",
         "2",
         "4",
         "3",
         "1"
      ]
   },
   {
      "name":"J. Cole",
      "photo":"https://media.pitchfork.com/photos/5ad5538b2b685709e91edfb6/2:1/w_790/J-Cole.jpg",
      "scores":[
         "3",
         "2",
         "2",
         "2",
         "4",
         "1",
         "1",
         "3",
         "3",
         "3"
      ]
   },
   {
      "name":"RiRi",
      "photo":"https://ssli.ulximg.com/image/740x493/gallery/1524158190_5513486244fc3595b22b50e57c87f216.jpg/9c8be7af72545648a64c497ece72eabb/1524158190_abddada9b316ddce001054d448c6de71.jpg",
      "scores":[
         "3",
         "3",
         "4",
         "2",
         "5",
         "5",
         "5",
         "5",
         "5",
         "3"
      ]
   },
	{
	   "name":"YoungBoy NBA",
	   "photo":"http://s3.amazonaws.com/hiphopdx-production/2017/07/170712-NBA-Youngboy-IG-800x600.jpg",
	   "scores":[
	      "4",
	      "3",
	      "4",
	      "1",
	      "1",
	      "1",
	      "1",
	      "3",
	      "1",
	      "4"
	   ]
  },
  {
    "name":"Lupita",
    "photo":"http://static.oprah.com/images/o2/201609/201609-omag-lupita-nyong-o-portrait-949x1356.jpg",
    "scores":[
       "2",
       "2",
       "4",
       "4",
       "4",
       "4",
       "2",
       "2",
       "5",
       "5"
    ]
    
 },
 {
  "name":"Ryan Gravel",
  "photo":"https://fthmb.tqn.com/S0WuZhTrqffgR7Nqaf5s1FaJx2k=/960x0/filters:no_upscale()/inside-atlantaryan-gravel-574da6175f9b5851657b1f44.jpg",
  "scores":[
     "4",
     "4",
     "5",
     "1",
     "5",
     "2",
     "5",
     "1",
     "1",
     "1"
  ]
},
{
  "name":"Nathaniel Smith",
  "photo":"https://bealocalist.org/wp-content/uploads/2016/07/Nathaniel-Smith-1.jpg",
  "scores":[
     "5",
     "5",
     "4",
     "1",
     "5",
     "2",
     "2",
     "5",
     "1",
     "4"
  ]
},
{
  "name":"Cardi B",
  "photo":"https://img.wennermedia.com/480-width/cardi-b-rolling-stone-interview-cover-3303826b-688e-4aed-9103-da0203f5d6d3.jpg",
  "scores":[
     "2",
     "3",
     "3",
     "5",
     "5",
     "3",
     "5",
     "3",
     "5",
     "4"
  ]
},
  {
    "name":" Eric Clapton",
    "photo":"https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTg1MDAzNTMx/eric-clapton-9249026-2-raw.jpg",
    "scores":[
       "3",
       "5",
       "5",
       "5",
       "5",
       "5",
       "5",
       "4",
       "4",
       "4"
    ]
  },
  {
    "name":" Hope Hicks",
    "photo":"https://www.metro.us/sites/default/files/styles/normal_article/public/main/articles/2018/03/01/is-hope-hicks-married.jpg",
    "scores":[
       "3",
       "5",
       "5",
       "5",
       "3",
       "5",
       "5",
       "4",
       "4",
       "4"
    ]
  },
  {
    "name":" Alice Cooper",
    "photo":"https://www.alternativenation.net/wp-content/uploads/2018/02/alicecooperhands.jpg",
    "scores":[
       "1",
       "1",
       "1",
       "1",
       "3",
       "1",
       "5",
       "1",
       "4",
       "4"
    ]
  },
	{
	   "name":"Johnny Blaze",
	   "photo":"https://vignette.wikia.nocookie.net/marvelmovies/images/c/cd/GR_Home_Pic.jpg/revision/latest/top-crop/width/480/height/480?cb=20120225233736",
	   "scores":[
	      "1",
	      "4",
	      "2",
	      "1",
	      "1",
	      "1",
	      "3",
	      "2",
	      "3",
	      "3"
	   ]
  }
  
]
  
  // I can export the array through a module to allow html and JSON viewing. I can then use require to access it from this file.
  module.exports = friendArray;