let topic  = document.getElementById('topic');
let image = document.getElementById('image');
let figcaption = document.getElementById('figcaption');
let highlights = document.getElementById('highlights');
let content = document.getElementById('content');
let hotelLink = document.getElementById('hotelLink');
let high = document.getElementById('high');
let id1 = document.getElementById('RKBeachCottage');
let id2 = document.getElementById('BeachWayHomestay');
let id3 = document.getElementById('ShreeBhadrakaliTemple');
let id4 = document.getElementById('GokarnaMainBeach');
let id5 = document.getElementById('SriMahabaleshwaraTemple');
let id6 = document.getElementById('GobhargaCave');
let id7 = document.getElementById('JatayuTheertha');
let id8 = document.getElementById('WhiteHouseBeachResort');
let id9 = document.getElementById('CoconutTreeResort');
let id10 = document.getElementById('ShriUmamaheshwarCottages');
let id11 = document.getElementById('BindhyasSuperHuts');
let id12 = document.getElementById('OmBeach');
let id13 = document.getElementById('HalfMoonBeach');
let id14 = document.getElementById('ParadiseBeach');
let id15 = document.getElementById('KahaniParadise');

id1.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "RK BEACH COTTAGE";
  image.src = "images/RKBeachCottage.jpg"
  figcaption.innerText = "RK BEACH COTTAGE"
  highlights.innerHTML = `1.Free Wi-Fi<br>
  2.Pool<br>
  3.Air-conditioned<br>
  4.Laundry service<br>
  5.Beach access<br>
  6.Child friendly<br>
  7.Restaurant Fitness centre`;
  content.innerHTML = `Set on a beach along the Arabian Sea, this unassuming hostel is 3 km from the Maha Ganapathi Temple and 14 km from the NH66 road.
  Straightforward dorms provide bunk beds. Private rooms feature colourful accents. Some quarters offer air conditioning and/or beach views.
  A restaurant is set on the sand and has a shaded terrace. There's also a hookah bar with open sides. Wi-Fi and parking are available.`;
  hotelLink.href = "https://asiatech.in/book_now/booking?page=2965&type=googlehotelads&checkin=2023-04-08&checkout=2023-04-09&bookingSource=GoogleCPC";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id2.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Beach Way HomeStay and Resort";
  image.src = "images/BeachWayHome.jpg"
  figcaption.innerText = "Beach Way Home"
  highlights.innerHTML = `1.Free Wi-Fi<br>
  2.Paid breakfast<br>
  3.Free parking<br>
  4.Laundry Services`;
  content.innerHTML = `If you are looking for a beautiful gateway 10 minutes ( by walk) from the main beach of Gokarna this is the perfect place for you to enjoy the bliss of our Homestay...`;
  hotelLink.href = "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id3.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Shree Bhadrakali Temple";
  image.src = "images/BhadrakaliTemple.jpg"
  figcaption.innerText = "Shree Bhadrakali Temple";
  highlights.innerHTML = `Pray n sit for few min <br>..u may feel the vibe`;
  content.innerHTML = `This temple dedicated to the Goddess Uma, is a popular religious site in Gokarna.<br>
  The legends state that the Goddess was requested by Lord Cishnuto reside in this temple after she was abandoned by Ravana.`;
  hotelLink.href = "";
  hotelLink.innerText = "";
  // hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id4.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Gokarna Main Beach";
  image.src = "images/GokarnaBeach.png"
  figcaption.innerText = "Gokarna Beach"
  highlights.innerHTML = `1.Surfing<br>2.Trekking`;
  content.innerHTML = `Gokarna Beach is several kilometres long and is situated at the edge of the temple town. It has recently gained popularity as a go-to beach destination owing to its beautiful stretches of sand and pristine locations. Gokarna beaches were rarely frequented by the locals until foreign tourists started thronging the seaside. Soon, many locals opened stores selling souvenirs, unique cafes and beach shacks. Walking along the coastline here is unique as you will come across many cafes and shacks and this is a place where the hippie culture of Gokarna is at.<br>
  It is quite popular with pilgrims who come to the town to seek the blessings of Shiva, Indian groups and with foreign tourists as well. The muddy uphill roads with forest cover on both sides provide for more than a reason to go for a hike or a family picnic.`;
  hotelLink.href = "https://www.booking.com/hotel/in/namaste-yoga-farm.html?aid=380343&group_adults=2&label=Hotel.Details.Right_side_cta.null&hotelname=Namaste%20Yoga%20Farm";
  hotelLink.innerText = "Resort or Hotel nearby to the spot with rating more than '4.0'";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id5.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Shri Mahabaleshwara Temple";
  image.src = "images/MahabaleshwaraTemple.jpg"
  figcaption.innerText = "Shri Mahabaleshwara temple"
  highlights.innerHTML = `People Believe that this God is very Powerful<br>And the Sculptures are Good.`;
  content.innerHTML = `A 6 feet tall Shiva Linga here at the temple is known as the Atmalinga is worshipped here. Built using white granite, it is a classic example of the beauty of Dravidian architecture. A 1500 years old carved stone Lord Shiva idol in the standing position represents the main deity. The temple has been mentioned in the Hindu Mythics of Mahabharata and Ramayana and it is said to be as significant as Kashi, hence it earning the title, Dakshin (South) Kashi.<br>

  The top of the Atmalinga is the only part of the Linga that is visible to devotees. But during the Ashta Bandana Kumbhahishekam, a festival that happens once every 40 years, is when the entire Atmalinga is shown to the devotees. As per custom, devotees must first take a dip in the Karwar Beach, where the temple faces, visit the Maha Ganapathi Temple that is opposite the temple, then only visit the Mahabaleshwar Temple.`;
  hotelLink.href = "https://www.booking.com/hotel/in/namaste-yoga-farm.html?aid=380343&group_adults=2&label=Hotel.Details.Right_side_cta.null&hotelname=Namaste%20Yoga%20Farm";
  hotelLink.innerText = "Resort or Hotel nearby to the spot with rating more than '4.0'";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id6.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Gobhargha Caves";
  image.src = "images/GobarghaCave.jpg"
  figcaption.innerText = "Gobharga Caves"
  highlights.innerHTML = `1.adventure<br>
  2.Trekking`;
  content.innerHTML = `Hillside cave offering views of the surrounding area & a population of resident bats.`;
  hotelLink.href = ""
  hotelLink.innerText = "";
  image.style.display = "block";
  high.style.display = "block";
})

id7.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Jatayu Theertha";
  image.src = "images/JatayuTheertha.jpg"
  figcaption.innerText = "jatayu theertha"
  highlights.innerHTML = `You can drive all the way or can also hike.<br>You can drive up there and can also hike down to the sea shore.<br>It is an ideal place to see sunset.`;
  content.innerHTML = `Beautiful and peaceful location to watch the sunset. No timings as such. You can trek down to reach the rocks and be closer to the sea. Once the sun is set, you get to see the fishing boats turning on their lights one by one across the horizon. It's like a silver lining in the middle of total darkness. Once the night is set, you can watch stars and listen to the waves. It was an amazing experience.`;
  hotelLink.href = "";
  hotelLink.innerText = "";
  image.style.display = "block";
  high.style.display = "block";
})

id8.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "White Beach House Resort";
  image.src = "images/WhiteHouseBeach.jpg"
  figcaption.innerText = "white house beach resort"
  highlights.innerHTML = `1.Free Wi-Fi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  2.Pool<br>
  3.Air-conditioned &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  4.Laundry service<br>
  5.Pet-friendly &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  6.Child friendly<br>
  7.Restaurant Kitchens &nbsp;&nbsp;&nbsp;
  8.Airport shuttle<br>
  9.spa`;
  content.innerHTML = `This simple resort in a rural area is 3 km from Om Beach on the Laccadive Sea, 2 km from Shiva Cave and 11 km from Gokarna Road railway station.<br>
  The unassuming permanent tents provide free Wi-Fi, flat-screen TVs, and tea and coffeemaking facilities, as well as en suite bathrooms.<br>
  Amenities include a functional cafe and parking. A doctor is on-call and a generator is on-site. A campsite is also available.`;
  hotelLink.href = "https://www.makemytrip.com/hotels/white_house_beach_resort_spa-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id9.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Coconut Tree Resort";
  image.src = "images/CoconutResort.jpg"
  figcaption.innerText = "Coconut Tree Resort"
  highlights.innerHTML = `1.Rating : 4.1<br>
  2.Free parking<br>
  3.Popular with families`;
  content.innerHTML = `Coconut Tree Resort has a restaurant, a shared lounge and garden in Gokarna. Boasting family rooms, this property also provides guests with a sun terrace. The accommodations offers a 24-hour front desk, room service and currency exchange for guests. Continental and buffet breakfast options are available every morning at the hotel. The area is popular for cycling, and car hire is available at Coconut Tree Resort.`;
  hotelLink.href = "https://in.via.com/hotels/search/9H1529940/04-08-2023/04-09-2023/1/2-0?=&assumption=272787b11e540782aa517abe4faab7d88b5411a22ba005ee9b41dca4dbeeae703fa0ac9728f8d9a1&api_supplier=1#hotel";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id10.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Shri Umamaheshwar Cottages";
  image.src = "images/ShriUmamaheshwar.jpg"
  figcaption.innerText = "Shri Umamaheshwar Cottages"
  highlights.innerHTML = `A good Resort nearby to the Kudle Beach`;
  content.innerHTML = `It's very good option to stay near to beach 🏖️. 2 mins walk to the kudle beach. It's good to select Deluxe or semi deluxe room`;
  hotelLink.href = "https://mytravaly.com/hotels/hotel-details/?hotelid=SCrEOFen&check_in=2023-04-08&check_out=2023-04-09&adults=2&children=0&bookingSource={%22source%22:%22google%22,%22cin%22:%222023-04-08%22,%22cout%22:%222023-04-09%22,%22packageId%22:%22c2360917a0db3da4586c45f5d66f07f1%22,%22userDevice%22:%22desktop%22,%22userLanguage%22:%22en%22,%22filter%22:{%22adults%22:%222%22,%22children%22:%220%22}}&&adType=0&booking_source=cpc&rid=2&clickType=CRS";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id11.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Bindhyas Super Huts";
  image.src = "images/BindhyasHuts.jpg"
  figcaption.innerText = "Bindhyas Super Huts"
  highlights.innerHTML = `1.Rating : 4.3<br>
  2.Pet-friendly<br>
  3.Great location<br>
  4.Air-conditioned<br>
  5.Closest Beaches : <br>
  <ol style="margin-left:100px;display: flex;gap: 35px;"><li>Kudle Beach</li>
  <li>Om Beach</li>
  <li>Main Gokarna Beach</li></ol>`;
  content.innerHTML = `Bindhya Huts offers accommodations in Gokarna, a 5-minute walk from Kudle Beach and 2.4 km from Om Beach. This homestay offers a garden.<br>
  The homestay provides certain units with sea views, and all units come with a shared bathroom.<br>
  Gokarna Main Beach is 2.9 km from the homestay. The nearest airport is Dabolim Airport, 138.4 km from Bindhya Huts.`;
  hotelLink.href = "https://www.booking.com/hotel/in/bindhya-huts.html";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id12.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Om Beach, Gokarna Overview";
  image.src = "images/omBeach.jpg"
  figcaption.innerText = "Om Beach"
  highlights.innerHTML = `
  1. Banana Boat Rides<br>
  2. Bumper Boat Ride<br>
  3. Dolphin Spotting<br>
  4. Jet Skiing<br>
  5. Speed Boating<br>
  6. Beach Side Trekking`;
  content.innerHTML = `Om beach is a wonderful beach located in the town of Gokarna. Shaped like the symbol 'Om', this beach offers plenty of adventure sports to the thrill-seekers. The view of this beach during sunset is one to be cherished forever. It is usually lined with shacks on the sides offering cheap accommodation and restaurants with global menus. There is also a bunch of fun water sports activities available on Om Beach, including speedboats, surfing etc. Visitors can even enjoy boating here.`;
  hotelLink.href = "https://www.booking.com/hotel/in/swaswara.html?aid=380343&group_adults=2&label=Hotel.Filter.1.null&hotelname=SwaSwara%20Gokarna%20-%20CGH%20Earth";
  hotelLink.innerText = "Resort or Hotel nearby to the spot with rating more than '4.0'";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id13.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Half Moon Beach";
  image.src = "images/HalfMoonBeach.jpg"
  figcaption.innerText = "Half Moon Beach"
  highlights.innerHTML = `1.Hiking<br>2.Trekking<br>3.Best View`;
  content.innerHTML = `Half Moon Beach is a small beach situated in Gokarna. It is separated from the Om Beach by a cliff from where tourists are bound to get an amazing view of the Arabian Sea. Numerous village huts in the classical Indian style can be spotted lined up by the beach giving it a rather traditional and homely touch altogether. The beach got its name from the striking resemblance that it exhibits with a half moon. Away from the civilization and into the arms of nature, this is the best place to spend time at while looking at the caves and gazing at the sky lit with stars.<br>
  Being at the beach is one of the most thrilling experiences as when you are bathing in the water of the Half Moon, all you can see ahead of you is the infinite ocean and behind is the lush and thick jungle making you feel as if you are the last living person left on the face of the earth.`;
  hotelLink.href = "https://www.booking.com/hotel/in/swaswara.html?aid=380343&group_adults=2&label=Hotel.Details.Right_side_cta.null&hotelname=SwaSwara%20Wellness%20Retreat";
  hotelLink.innerText = "Resort or Hotel nearby to the spot with rating more than '4.0'";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id14.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Paradise Beach";
  image.src = "images/ParadiseBeach.jpg"
  figcaption.innerText = "Paradise Beach"
  highlights.innerHTML = `Trekking is the only way to reach from<br>Om Beach and Half Moon Beach.You can feel the Good Experience`;
  content.innerHTML = `The fourth beach lying across the coast of Gokarna Town, Paradise Beach is also well-known by the name of 'Full Moon Beach'. Located in the state of Karnataka, the Paradise Beach is about 150 meters in length and out of this almost seventy percent of the beach is entirely covered in rocks. The rest of the beach is adorned with clean white sand all over. Not much water sports are available here but swimming in the calm waters here is a great way to refresh your mind and body. The serene environment of the beach offers a great opportunity to spend some time in nature's lap and find solace.`;
  hotelLink.href = "https://www.booking.com/hotel/in/viraz-valley.html?aid=380343&group_adults=2&label=Hotel.Details.Right_side_cta.null&hotelname=Viraz%20Valley%20-%20Unit%20of%20White%20Elephant";
  hotelLink.innerText = "Resort or Hotel nearby to the spot with rating more than '4.0'";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

id15.addEventListener('click',(e)=>{
  e.preventDefault();
  topic.textContent = "Kahani Paradise";
  image.src = "images/KahaniParadise.jpg"
  figcaption.innerText = "Kahani Paradise"
  highlights.innerHTML = `1.Pool<br>
  2.Pet-friendly<br>
  3.Free breakfast<br>
  4.Free parking`;
  content.innerHTML = `Nestled to the south of Gokarna, along the picturesque coastline where the cliffs of the Western Ghats plunge into the Arabian Ocean, lies an unexplored expanse of beach and jungle. Here, where the ocean gently folds into an estuary lies a glimmer of paradise.`;
  hotelLink.href = "https://www.booking.com/searchresults.en-gb.html?aid=1288252&label=metagha-link-MRIN-hotel-3034954_dev-desktop_los-1_bw-1_dow-Saturday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-6642513999_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20230408__lp-1007810_r-19508361232069880512&sid=1a44404507aac89236f25dbb384c3767&checkin=2023-04-08&checkout=2023-04-09&city=900051864&ext_price_total=53572.00&group_adults=2&group_children=0&highlighted_hotels=3034954&hlrd=with_dates&keep_landing=1&no_rooms=1&redirected=1&show_room=303495401_369715777_3_17_0&source=hotel&room1=A,A,;"
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
})

console.log("This page is Not Mobile Responsive");