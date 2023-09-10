const mongoose = require('mongoose');
// const cities = require('./cities');
const cities = require('./cities2');
const users = require('./users');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const dbUrl = process.env.DB_URL
// mongoose.connect(dbUrl)
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 20);
        const price = Math.floor(Math.random() * 20) + 10;
        const images = [        
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325902/Yelpcamp-India/photo-1476522590778-ce524105b925_dcccvp.webp',
                  filename: 'YelpCamp/1',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325900/Yelpcamp-India/photo-1429054145362-bc5bb6e9f863_i3ggtx.webp',
                  filename: 'YelpCamp/2',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325898/Yelpcamp-India/photo-1480365443306-930b898cb434_f4gflm.webp',
                  filename: 'YelpCamp/3',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325895/Yelpcamp-India/photo-1446840959065-353c3a3731a9_qkywvr.webp',
                  filename: 'YelpCamp/4',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325884/Yelpcamp-India/photo-1465383377182-eb49b952f439_laozxs.webp',
                  filename: 'YelpCamp/5',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325882/Yelpcamp-India/photo-1457725798811-c9561232a295_tcsvwo.webp',
                  filename: 'YelpCamp/6',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325880/Yelpcamp-India/photo-1443616527314-4fbb6da1dcf5_adblqj.webp',
                  filename: 'YelpCamp/7',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325877/Yelpcamp-India/photo-1444210971048-6130cf0c46cf_zaa6gi.webp',
                  filename: 'YelpCamp/8',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325875/Yelpcamp-India/photo-1448201509143-782c98e5d1c6_n8p6ov.webp',
                  filename: 'YelpCamp/9',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325873/Yelpcamp-India/photo-1455275613632-79b7c0940983_coltcr.webp',
                  filename: 'YelpCamp/10',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325870/Yelpcamp-India/photo-1455279202464-ad0ff3a59b96_qswegq.webp',
                  filename: 'YelpCamp/11',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325868/Yelpcamp-India/photo-1516077781635-ab43ea75268f_tin9dd.webp',
                  filename: 'YelpCamp/12',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325865/Yelpcamp-India/photo-1516074334002-281e27b5af05_xgefdl.webp',
                  filename: 'YelpCamp/13',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325863/Yelpcamp-India/photo-1516074070605-f1c9299420e7_odc6xr.webp',
                  filename: 'YelpCamp/14',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325861/Yelpcamp-India/photo-1516065186307-6f08290b604b_s3cir2.webp',
                  filename: 'YelpCamp/15',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325855/Yelpcamp-India/photo-1516054719048-38394ee6cf3e_slygmz.webp',
                  filename: 'YelpCamp/16',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325853/Yelpcamp-India/photo-1516060306691-b2e707cb3e77_bzcvhf.webp',
                  filename: 'YelpCamp/17',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325851/Yelpcamp-India/photo-1469806813277-0a53a8996ca4_lgszem.webp',
                  filename: 'YelpCamp/18',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325848/Yelpcamp-India/photo-1516060282066-df53722e8d58_dbozjc.webp',
                  filename: 'YelpCamp/19',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325846/Yelpcamp-India/photo-1516058699957-c0ffff116bc1_p2sayi.webp',
                  filename: 'YelpCamp/20',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325844/Yelpcamp-India/10294420724_0300cf921d_o_mhxy0t.webp',
                  filename: 'YelpCamp/21',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325840/Yelpcamp-India/photo-1516058331010-04f2be7d2aa7_penrhe.webp',
                  filename: 'YelpCamp/22',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325838/Yelpcamp-India/photo-1516077905379-dcee164f6312_cfrprn.webp',
                  filename: 'YelpCamp/23',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325835/Yelpcamp-India/photo-1516058324946-4d9dde96be02_gym8ni.webp',
                  filename: 'YelpCamp/24',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325832/Yelpcamp-India/photo-1516062804944-71becfb4ed5f_monzwr.webp',
                  filename: 'YelpCamp/25',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325829/Yelpcamp-India/photo-1516051662687-567d7c4e8f6a_ipp35c.webp',
                  filename: 'YelpCamp/26',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325827/Yelpcamp-India/photo-1516061098375-6954333b9e92_adhmp2.webp',
                  filename: 'YelpCamp/27',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325822/Yelpcamp-India/photo-1516048118453-1f9748a6781b_u1etnu.webp',
                  filename: 'YelpCamp/28',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325820/Yelpcamp-India/photo-1516051733211-2492fab1d3a5_gc7g8r.webp',
                  filename: 'YelpCamp/29',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325818/Yelpcamp-India/photo-1516044168425-6a460671746f_t6w4np.webp',
                  filename: 'YelpCamp/30',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325816/Yelpcamp-India/photo-1516048941206-05234a3602b2_l1qtvz.webp',
                  filename: 'YelpCamp/31',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325813/Yelpcamp-India/photo-1516043372872-2eabd522b259_lhrr4i.webp',
                  filename: 'YelpCamp/32',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325811/Yelpcamp-India/photo-1516042672411-f212c1410212_tnxokw.webp',
                  filename: 'YelpCamp/33',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325809/Yelpcamp-India/photo-1516042535599-5654293f8ef4_t5hdiu.webp',
                  filename: 'YelpCamp/34',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325800/Yelpcamp-India/photo-1516040291634-333cf00ef086_sw5u6b.webp',
                  filename: 'YelpCamp/35',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325796/Yelpcamp-India/photo-1516038452091-9d805e3d5515_ker4ob.webp',
                  filename: 'YelpCamp/36',
            },
            {
                  url: 'https://res.cloudinary.com/dh76o8sa5/image/upload/v1694325786/Yelpcamp-India/photo-1516034931450-ba421eeb72f6_bb71sr.webp',
                  filename: 'YelpCamp/37',
            },                
          ]
        const shuffledImages = images.sort(() => 0.5 - Math.random());
        const camp = new Campground({
            //YOUR USER ID
            author: '5f5c330c2cd79d538f2c66d9',
            user: users[random1000].name,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: shuffledImages.slice(0, 2),
            // images: [
            //     {
            //         url: 'https://source.unsplash.com/collection/483251' // Replace with actual image URL
            //     }
            // ]
            
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})