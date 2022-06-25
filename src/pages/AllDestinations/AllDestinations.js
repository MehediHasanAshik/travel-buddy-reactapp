import React from 'react';
import './AllDestinations.css';
import sajek from '../../../src/assets/images/sajek (5).jpg'
import nilgiri from '../../assets/images/Nilgiri (2).jpg'
import jaflong from '../../assets/images/jaflong (1).jpg'
import kuakata from '../../assets/images/kuakata (5).jpg'
import cox from '../../assets/images/cox-bazar (7).jpg'
import kaptai from '../../assets/images/kaptai-lake (1).jpg'

const AllDestinations = () => {
    return (
        <div>
            <h2 style={{color: "rgb(209, 76, 24)"}}>Some Favourite Travel Destinations in Bangladesh</h2>
            <div className='alldestination-container'>
                <div className='cart'>
                    <img src={sajek} alt="" className='img-fluid' />
                    <div className='detail-cart'>
                        <h2>Sajek Valley</h2>
                        <h4>District: Rangamati</h4>
                        <p>Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet (610 m) above sea level .Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati.</p>
                        <a href="https://en.wikipedia.org/wiki/Sajek_Valley" target="_blank">Read More</a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={nilgiri} alt="" className='img-fluid' />
                    <div className='detail-cart'>
                        <h2>Nilgiri Rangamati</h2>
                        <h4>District: Rangamati</h4>
                        <p>Nilgiri is a collection of multiple variable sizes hill area in Bandarban. Bandarban itself is a hill district in Banglades. The mountains with Covering trees look very beautiful from Nilgiri.The journey with locally called Chader gari (Moon Car) is very much enjoyble and full of thrills. The Nilgiri tourist area is very clean and is under supervision of Bangladesh Army.Clean wash rooms and cafeteria also availabl.</p>
                        <a href="https://en.wikipedia.org/wiki/Nilgiri_Mountains" target="_blank">Read More</a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={cox} alt="" className='img-fluid' />
                    <div className='detail-cart'>
                        <h2>Cox's Bazar</h2>
                        <h4>District: Chittagong</h4>
                        <p>Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach. It is located 150 km (93 mi) south of the city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as "yellow flower". Another old name was "Palongkee". The city has the longest uninterrupted natural beach in the world.</p>
                        <a href="https://en.wikipedia.org/wiki/Cox%27s_Bazar" target="_blank">Read More</a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={jaflong} alt="" className='img-fluid' />
                    <div className='detail-cart'>
                        <h2>Jaflong</h2>
                        <h4>District: Sylhet</h4>
                        <p>Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests. It is known for its stone collections and is home of the Khasi tribe.</p>
                        <a href="https://en.wikipedia.org/wiki/Jaflong" target="_blank">Read More</a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={kuakata} alt="" className='img-fluid' />
                    <div className='detail-cart'>
                        <h2>Kuakata</h2>
                        <h4>District: Patuakhali</h4>
                        <p>Kuakata (Bengali: কুয়াকাটা) is a town in southern Bangladesh known for its panoramic sea beach. Kuakata beach is a sandy expanse 18 kilometres (11 mi) long and 3 kilometres (1.9 mi) wide.From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal.</p>
                        <a href="https://en.wikipedia.org/wiki/Kuakata" target="_blank">Read More</a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={kaptai} alt="" className='img-fluid' />
                    <div className='detail-cart'>
                        <h2>Kaptai Lake</h2>
                        <h4>District: Rangamati</h4>
                        <p>Kaptai Lake is the largest lake in Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division. The lake was created as a result of building the Kaptai Dam on the Karnaphuli River, as part of the Karnaphuli Hydro-electric project. Kaptai Lake's average depth is 100 feet (30 m) and maximum depth is 490 feet (150 m).</p>
                        <a href="https://en.wikipedia.org/wiki/Kaptai_Lake" target="_blank">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllDestinations;