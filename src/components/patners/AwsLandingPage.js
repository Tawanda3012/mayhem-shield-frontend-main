import React, { useEffect, useRef, useState } from 'react';
import HeroMan from "./images/hero-man.png"
import Hero from "./images/hero.png"
import imageLines5 from "./images/image-lines-5.png"
import imageLines6 from "./images/image-lines-6.png"
import imageRound from "./images/image-round.png"
import Card from '../Card';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import ModalForm from './ModalForm';


const AwsLandingPage = () => {
    const heroMan = HeroMan
    const hero = Hero
    const imageNames = Array.from({ length: 6 }, (_, i) => `icon-${i + 1}`);

    const cardImgs = Array.from({ length: 6 }, (_, i) => `card-img-${i + 1}`);

    const cardTitles = [
        "SMB",
        "Enterprise",
        "Government",
        "Education",
        "Healthcare",
        "Non-Profit"
    ]
    const cardSubs = [
        "Move at the speed of your customers, manage costs, and boost productivity with AWS's suite of SMB solutions.",
        "Move at the speed of your customers, manage costs, and boost productivity with AWS's suite of SMB solutions.",
        "Leverage the cloud to gain the agility, financial flexibility, security, and resilience needed to support the modern citizen",
        "Build the foundation for tomorrow's educational system with AWS's secure, remote-capable, future-ready cloud solutions.",
        "Increase the pace of innovation, unlock the value of health data, and build robust, secure healthcare solutions in the cloud.",
        "Mayhem Shield and AWS are ready to help nonprofits of all sizes overcome barriers to technology adoption, while enhancing their scale, performance, and capabilities."
    ]
    const titles = ["Lower costs",
        "Be more agile",
        "Improve security and resilience",
        "Leave legacy hardware behind",
        "Consolidate data centers",
        "Accelerate digital transformation"

    ]
    const subtitels = [

        "with a data-driven migration assessment",
        "in the cloud",
        "with security best practices",
        "and modernize IT infrastructure",
        "and improve operational efficiency",
        "with flexible, future-ready infrastructure"
    ]

    const FirstNameRef = useRef("")
    const LastNameRef = useRef("")
    const emailRef = useRef("")
    const PhonRef = useRef("")
    const companyRef = useRef("")
    const stateRef = useRef("")
    const countryRef = useRef("")
    const reciveFreeAssesmentRef = useRef("")
    const SubscribeToOurNewsletterRef = useRef("")


    const [showModal, setShowModal] = useState(false)
    const modalHandler = () => setShowModal(!showModal)

    useEffect(() => {
        if (showModal) document.body.style.overflowY = "hidden"
        else document.body.style.overflowY = "scroll"
    }, [showModal])

    const notify = (msg) => toast(msg);

    const handleSubmit = event => {
        event.preventDefault()
        // notify("something");
        const FirstName = FirstNameRef.current.value
        const LastName = LastNameRef.current.value
        const email = emailRef.current.value
        const phone = PhonRef.current.value
        const company = companyRef.current.value
        const state = stateRef.current.value
        const country = countryRef.current.value
        const reciveFreeAssesment = reciveFreeAssesmentRef.current.checked
        const Subscribe = SubscribeToOurNewsletterRef.current.checked

        const data = {
            First_Name: FirstName,
            Last_Name: LastName,
            Email: email,
            Phone: phone,
            Company: company,
            State: state,
            Country: country,
            Recive_free_assesment: reciveFreeAssesment,
            Subscribe: Subscribe,
        }
        console.log(data)

        axios.post("https://sheet.best/api/sheets/471c8d59-149a-4d0f-9d5c-6db9feb28a91", data)
            .then(res => { console.log(res) })


    }
    return (
        <>
            <div className="relative">
                <ModalForm showModal={showModal} modalHandler={modalHandler} />

                <div id="section-1" className={`lg:px-5 relative md:px-3 sm:px-2 border-b-4 bg-contain bg-no-repeat h-fit   overflow-visible lg:flex md:block sm:block justify-between`}
                    style={{
                        backgroundImage: `url(${hero}))`,
                        backgroundPosition: 'left',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '13% auto',
                        backgroundPositionY: ""
                    }}

                >
                    {/* meta title and tag */}
                    <div className="lg:w-[95%] z-10 mb-5 md:w-[95%] sm:w-full lg:h-full md:h-[400px]  mt-[100px] lg:ml-20 sm:ml-auto md:ml-10">
                        <h1 className="text-[60px] mt-20 uppercase font-black italic text-[#00f] max-w-[700px] lg:w-[400px]">Migrate to  aws with </h1>
                        <h1 className="text-[60px] uppercase font-black italic text-Blue-400 max-w-[700px] lg:w-[400px]">Mayhem Shield</h1>

                        <p className='lg:w-[350px] md:w-full sm:w-full text-xl font-medium'>Migrate to the cloud, modernize your IT infrastructure, and drive more innovation in less time with <span className='text-[#00f]'>Mayhem Shield</span> and Amazon Web Services (AWS). With our support, you can move to the cloud quickly, lower migration costs, and jumpstart digital transformation.</p>
                    </div>
                    {/* img */}
                    <div className="w-[100%] bottom-0 lg:mt-[110px] flex justify-center lg:absolute md:relative sm:relative z-0">
                        <img src={heroMan} alt="" className=' md:w-1/2 sm:w-full mx-auto  relative ' />
                    </div>

                    {/* form  */}
                    <div className="bg-[#222328] z-10  lg:mt-0  lg:block md:relative min-w-[40%]  rounded-lg lg:p-10 md:p-8 sm:p-3 h-fit lg:w-[40%] md:w-[95%] sm:w-[95%] text-black mx-auto">
                        <h1 className="text-4xl italic  text-[#00f] font-semibold">Partner With Us</h1>
                        <form onSubmit={handleSubmit} className="mt-10">
                            <input required ref={FirstNameRef} type="text" className="input input-bordered w-full rounded-xl my-3 " name="firstName"
                                placeholder="First Name *" />
                            <input required ref={LastNameRef} type="text" className="input input-bordered w-full rounded-xl my-3 " name="LastName"
                                placeholder="Last Name*" />

                            <input required ref={emailRef} type="email" className="input input-bordered w-full rounded-xl my-3 " name="email" placeholder="Email Address *" />

                            <input required ref={PhonRef} type="tel" className="input input-bordered w-full rounded-xl my-3 " name="phone" placeholder="Phone Number *" />

                            <input required ref={companyRef} type="text" className="input input-bordered w-full rounded-xl my-3 " name="company" placeholder="Company *" />
                            <select ref={stateRef} className="select my-3 rounded-xl w-full" name="stateProv">
                                <option >State ( United States Only ) *
                                </option>
                                <option value="AK">Alaska
                                </option>
                                <option value="AL">Alabama
                                </option>
                                <option value="AR">Arkansas
                                </option>
                                <option value="AS">American Samoa
                                </option>
                                <option value="AZ">Arizona
                                </option>
                                <option value="CA">California
                                </option>
                                <option value="CO">Colorado
                                </option>
                                <option value="CT">Connecticut
                                </option>
                                <option value="DC">D.C.
                                </option>
                                <option value="DE">Delaware
                                </option>
                                <option value="FL">Florida
                                </option>
                                <option value="FM">Micronesia
                                </option>
                                <option value="GA">Georgia
                                </option>
                                <option value="GU">Guam
                                </option>
                                <option value="HI">Hawaii
                                </option>
                                <option value="IA">Iowa
                                </option>
                                <option value="ID">Idaho
                                </option>
                                <option value="IL">Illinois
                                </option>
                                <option value="IN">Indiana
                                </option>
                                <option value="KS">Kansas
                                </option>
                                <option value="KY">Kentucky
                                </option>
                                <option value="LA">Louisiana
                                </option>
                                <option value="MA">Massachusetts
                                </option>
                                <option value="MD">Maryland
                                </option>
                                <option value="ME">Maine
                                </option>
                                <option value="MH">Marshall Islands
                                </option>
                                <option value="MI">Michigan
                                </option>
                                <option value="MN">Minnesota
                                </option>
                                <option value="MO">Missouri
                                </option>
                                <option value="MP">Marianas
                                </option>
                                <option value="MS">Mississippi
                                </option>
                                <option value="MT">Montana
                                </option>
                                <option value="NC">North Carolina
                                </option>
                                <option value="ND">North Dakota
                                </option>
                                <option value="NE">Nebraska
                                </option>
                                <option value="NH">New Hampshire
                                </option>
                                <option value="NJ">New Jersey
                                </option>
                                <option value="NM">New Mexico
                                </option>
                                <option value="NV">Nevada
                                </option>
                                <option value="NY">New York
                                </option>
                                <option value="OH">Ohio
                                </option>
                                <option value="OK">Oklahoma
                                </option>
                                <option value="OR">Oregon
                                </option>
                                <option value="PA">Pennsylvania
                                </option>
                                <option value="PR">Puerto Rico
                                </option>
                                <option value="PW">Palau
                                </option>
                                <option value="RI">Rhode Island
                                </option>
                                <option value="SC">South Carolina
                                </option>
                                <option value="SD">South Dakota
                                </option>
                                <option value="TN">Tennessee
                                </option>
                                <option value="TX">Texas
                                </option>
                                <option value="UT">Utah
                                </option>
                                <option value="VA">Virginia
                                </option>
                                <option value="VI">Virgin Islands
                                </option>
                                <option value="VT">Vermont
                                </option>
                                <option value="WA">Washington
                                </option>
                                <option value="WI">Wisconsin
                                </option>
                                <option value="WV">West Virginia
                                </option>
                                <option value="WY">Wyoming
                                </option>
                            </select>

                            <select ref={countryRef} className="select my-3 rounded-xl w-full border-gray-400 border-2 " >
                                <option >Country *
                                </option>
                                <option value="United States">United States
                                </option>
                                <option value="United Kingdom">United Kingdom
                                </option>
                                <option value="Australia">Australia
                                </option>
                                <option value="Brazil">Brazil
                                </option>
                                <option value="Canada">Canada
                                </option>
                                <option value="France">France
                                </option>
                                <option value="India">India
                                </option>
                                <option value="Italy">Italy
                                </option>
                                <option value="Mexico">Mexico
                                </option>
                                <option value="Netherlands">Netherlands
                                </option>
                                <option value="New Zealand">New Zealand
                                </option>
                                <option value="Spain">Spain
                                </option>
                                <option value="Switzerland">Switzerland
                                </option>

                                <option value="Afghanistan">Afghanistan
                                </option>
                                <option value="Aland Islands">Aland Islands
                                </option>
                                <option value="Albania">Albania
                                </option>
                                <option value="Algeria">Algeria
                                </option>
                                <option value="American Samoa">American Samoa
                                </option>
                                <option value="Andorra">Andorra
                                </option>
                                <option value="Angola">Angola
                                </option>
                                <option value="Anguilla">Anguilla
                                </option>
                                <option value="Antarctica">Antarctica
                                </option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda
                                </option>
                                <option value="Argentina">Argentina
                                </option>
                                <option value="Armenia">Armenia
                                </option>
                                <option value="Aruba">Aruba
                                </option>
                                <option value="Austria">Austria
                                </option>
                                <option value="Azerbaijan">Azerbaijan
                                </option>
                                <option value="Bahamas">Bahamas
                                </option>
                                <option value="Bahrain">Bahrain
                                </option>
                                <option value="Bangladesh">Bangladesh
                                </option>
                                <option value="Barbados">Barbados
                                </option>
                                <option value="Belarus">Belarus
                                </option>
                                <option value="Belgium">Belgium
                                </option>
                                <option value="Belize">Belize
                                </option>
                                <option value="Benin">Benin
                                </option>
                                <option value="Bermuda">Bermuda
                                </option>
                                <option value="Bhutan">Bhutan
                                </option>
                                <option value="Bolivia">Bolivia
                                </option>
                                <option value="Bonaire">Bonaire
                                </option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                </option>
                                <option value="Botswana">Botswana
                                </option>
                                <option value="Bouvet Island">Bouvet Island
                                </option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory
                                </option>
                                <option value="British Virgin Islands">British Virgin Islands
                                </option>
                                <option value="Brunei">Brunei
                                </option>
                                <option value="Bulgaria">Bulgaria
                                </option>
                                <option value="Burkina Faso">Burkina Faso
                                </option>
                                <option value="Burundi">Burundi
                                </option>
                                <option value="Cabo Verde">Cabo Verde
                                </option>
                                <option value="Cambodia">Cambodia
                                </option>
                                <option value="Cameroon">Cameroon
                                </option>
                                <option value="Cape Verde">Cape Verde
                                </option>
                                <option value="Cayman Islands">Cayman Islands
                                </option>
                                <option value="Central African Republic">Central African Republic
                                </option>
                                <option value="Chad">Chad
                                </option>
                                <option value="Chile">Chile
                                </option>
                                <option value="China">China
                                </option>
                                <option value="Christmas Island">Christmas Island
                                </option>
                                <option value="Cocos Islands">Cocos Islands
                                </option>
                                <option value="Colombia">Colombia
                                </option>
                                <option value="Comoros">Comoros
                                </option>
                                <option value="Congo">Congo
                                </option>
                                <option value="Cook Islands">Cook Islands
                                </option>
                                <option value="Costa Rica">Costa Rica
                                </option>
                                <option value="Côte d'Ivoire">Côte d'Ivoire
                                </option>
                                <option value="Croatia">Croatia
                                </option>
                                <option value="Cuba">Cuba
                                </option>
                                <option value="Curacao">Curacao
                                </option>
                                <option value="Cyprus">Cyprus
                                </option>
                                <option value="Czechia">Czechia
                                </option>
                                <option value="Denmark">Denmark
                                </option>
                                <option value="Djibouti">Djibouti
                                </option>
                                <option value="Dominican Republic">Dominican Republic
                                </option>
                                <option value="East Timor">East Timor
                                </option>
                                <option value="Ecuador">Ecuador
                                </option>
                                <option value="Egypt">Egypt
                                </option>
                                <option value="El Salvador">El Salvador
                                </option>
                                <option value="Equatorial Guinea">Equatorial Guinea
                                </option>
                                <option value="Eritrea">Eritrea
                                </option>
                                <option value="Estonia">Estonia
                                </option>
                                <option value="Ethiopia">Ethiopia
                                </option>
                                <option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)
                                </option>
                                <option value="Faroe Islands">Faroe Islands
                                </option>
                                <option value="Federated States of Micronesia">Federated States of Micronesia
                                </option>
                                <option value="Fiji">Fiji
                                </option>
                                <option value="Finland">Finland
                                </option>
                                <option value="French Guiana">French Guiana
                                </option>
                                <option value="French Polynesia">French Polynesia
                                </option>
                                <option value="French Southern Territories">French Southern Territories
                                </option>
                                <option value="Gabon">Gabon
                                </option>
                                <option value="Gambia">Gambia
                                </option>
                                <option value="Georgia">Georgia
                                </option>
                                <option value="Germany">Germany
                                </option>
                                <option value="Ghana">Ghana
                                </option>
                                <option value="Gibraltar">Gibraltar
                                </option>
                                <option value="Grand Cayman">Grand Cayman
                                </option>
                                <option value="Greece">Greece
                                </option>
                                <option value="Greenland">Greenland
                                </option>
                                <option value="Grenada">Grenada
                                </option>
                                <option value="Guadeloupe">Guadeloupe
                                </option>
                                <option value="Guam">Guam
                                </option>
                                <option value="Guatemala">Guatemala
                                </option>
                                <option value="Guernsey">Guernsey
                                </option>
                                <option value="Guinea">Guinea
                                </option>
                                <option value="Guinea-Bissau">Guinea-Bissau
                                </option>
                                <option value="Guyana">Guyana
                                </option>
                                <option value="Haiti">Haiti
                                </option>
                                <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands
                                </option>
                                <option value="Honduras">Honduras
                                </option>
                                <option value="Hong Kong">Hong Kong
                                </option>
                                <option value="Hungary">Hungary
                                </option>
                                <option value="Iceland">Iceland
                                </option>
                                <option value="Indonesia">Indonesia
                                </option>
                                <option value="Iran">Iran
                                </option>
                                <option value="Iraq">Iraq
                                </option>
                                <option value="Ireland">Ireland
                                </option>
                                <option value="Isle of Man">Isle of Man
                                </option>
                                <option value="Israel">Israel
                                </option>
                                <option value="Jamaica">Jamaica
                                </option>
                                <option value="Japan">Japan
                                </option>
                                <option value="Jersey">Jersey
                                </option>
                                <option value="Jordan">Jordan
                                </option>
                                <option value="Kazakhstan">Kazakhstan
                                </option>
                                <option value="Kenya">Kenya
                                </option>
                                <option value="Kiribati">Kiribati
                                </option>
                                <option value="Korea">Korea
                                </option>
                                <option value="Kosovo">Kosovo
                                </option>
                                <option value="Kuwait">Kuwait
                                </option>
                                <option value="Kyrgyzstan">Kyrgyzstan
                                </option>
                                <option value="Laos">Laos
                                </option>
                                <option value="Latvia">Latvia
                                </option>
                                <option value="Lebanon">Lebanon
                                </option>
                                <option value="Lesotho">Lesotho
                                </option>
                                <option value="Liberia">Liberia
                                </option>
                                <option value="Libya">Libya
                                </option>
                                <option value="Liechtenstein">Liechtenstein
                                </option>
                                <option value="Lithuania">Lithuania
                                </option>
                                <option value="Luxembourg">Luxembourg
                                </option>
                                <option value="Macau">Macau
                                </option>
                                <option value="Macedonia">Macedonia
                                </option>
                                <option value="Madagascar">Madagascar
                                </option>
                                <option value="Malawi">Malawi
                                </option>
                                <option value="Malaysia">Malaysia
                                </option>
                                <option value="Maldives">Maldives
                                </option>
                                <option value="Mali">Mali
                                </option>
                                <option value="Malta">Malta
                                </option>
                                <option value="Marshall Islands">Marshall Islands
                                </option>
                                <option value="Martinique">Martinique
                                </option>
                                <option value="Mauritania">Mauritania
                                </option>
                                <option value="Mauritius">Mauritius
                                </option>
                                <option value="Mayotte">Mayotte
                                </option>
                                <option value="Moldova">Moldova
                                </option>
                                <option value="Monaco">Monaco
                                </option>
                                <option value="Mongolia">Mongolia
                                </option>
                                <option value="Montenegro">Montenegro
                                </option>
                                <option value="Montserrat">Montserrat
                                </option>
                                <option value="Morocco">Morocco
                                </option>
                                <option value="Mozambique">Mozambique
                                </option>
                                <option value="Myanmar">Myanmar
                                </option>
                                <option value="Namibia">Namibia
                                </option>
                                <option value="Nauru">Nauru
                                </option>
                                <option value="Nepal">Nepal
                                </option>
                                <option value="New Caledonia">New Caledonia
                                </option>
                                <option value="New Guinea">New Guinea
                                </option>
                                <option value="Nicaragua">Nicaragua
                                </option>
                                <option value="Niger">Niger
                                </option>
                                <option value="Nigeria">Nigeria
                                </option>
                                <option value="Niue">Niue
                                </option>
                                <option value="Norfolk Island">Norfolk Island
                                </option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands
                                </option>
                                <option value="Norway">Norway
                                </option>
                                <option value="Oman">Oman
                                </option>
                                <option value="Pakistan">Pakistan
                                </option>
                                <option value="Palau">Palau
                                </option>
                                <option value="Palestine">Palestine
                                </option>
                                <option value="Panama">Panama
                                </option>
                                <option value="Papua New Guinea">Papua New Guinea
                                </option>
                                <option value="Paraguay">Paraguay
                                </option>
                                <option value="Peru">Peru
                                </option>
                                <option value="Philippines">Philippines
                                </option>
                                <option value="Pitcairn">Pitcairn
                                </option>
                                <option value="Poland">Poland
                                </option>
                                <option value="Portugal">Portugal
                                </option>
                                <option value="Puerto Rico">Puerto Rico
                                </option>
                                <option value="Qatar">Qatar
                                </option>
                                <option value="Reunion">Reunion
                                </option>
                                <option value="Romania">Romania
                                </option>
                                <option value="Russia">Russia
                                </option>
                                <option value="Rwanda">Rwanda
                                </option>
                                <option value="Saint Helena">Saint Helena
                                </option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis
                                </option>
                                <option value="Saint Lucia">Saint Lucia
                                </option>
                                <option value="Saint Martin">Saint Martin
                                </option>
                                <option value="Saint Vincent and Grenadines">Saint Vincent and Grenadines
                                </option>
                                <option value="Samoa">Samoa
                                </option>
                                <option value="San Marino">San Marino
                                </option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe
                                </option>
                                <option value="Saudi Arabia">Saudi Arabia
                                </option>
                                <option value="Scotland">Scotland
                                </option>
                                <option value="Senegal">Senegal
                                </option>
                                <option value="Serbia">Serbia
                                </option>
                                <option value="Seychelles">Seychelles
                                </option>
                                <option value="Sierra Leone">Sierra Leone
                                </option>
                                <option value="Singapore">Singapore
                                </option>
                                <option value="Slovakia">Slovakia
                                </option>
                                <option value="Slovenia">Slovenia
                                </option>
                                <option value="Solomon Islands">Solomon Islands
                                </option>
                                <option value="Somalia">Somalia
                                </option>
                                <option value="South Africa">South Africa
                                </option>
                                <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands
                                </option>
                                <option value="Sri Lanka">Sri Lanka
                                </option>
                                <option value="St. Pierre and Miquelon">St. Pierre and Miquelon
                                </option>
                                <option value="Sudan">Sudan
                                </option>
                                <option value="Suriname">Suriname
                                </option>
                                <option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp; Jan Mayen Islands
                                </option>
                                <option value="Swaziland">Swaziland
                                </option>
                                <option value="Sweden">Sweden
                                </option>
                                <option value="Syria">Syria
                                </option>
                                <option value="Taiwan">Taiwan
                                </option>
                                <option value="Tajikistan">Tajikistan
                                </option>
                                <option value="Tanzania">Tanzania
                                </option>
                                <option value="Thailand">Thailand
                                </option>
                                <option value="Timor-Leste">Timor-Leste
                                </option>
                                <option value="Togo">Togo
                                </option>
                                <option value="Tokelau">Tokelau
                                </option>
                                <option value="Tonga">Tonga
                                </option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago
                                </option>
                                <option value="Tunisia">Tunisia
                                </option>
                                <option value="Turkey">Turkey
                                </option>
                                <option value="Turkmenistan">Turkmenistan
                                </option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands
                                </option>
                                <option value="Tuvalu">Tuvalu
                                </option>
                                <option value="U.S. Virgin Islands">U.S. Virgin Islands
                                </option>
                                <option value="Uganda">Uganda
                                </option>
                                <option value="Ukraine">Ukraine
                                </option>
                                <option value="United Arab Emirates">United Arab Emirates
                                </option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands
                                </option>
                                <option value="Uruguay">Uruguay
                                </option>
                                <option value="Uzbekistan">Uzbekistan
                                </option>
                                <option value="Vanuatu">Vanuatu
                                </option>
                                <option value="Venezuela">Venezuela
                                </option>
                                <option value="Vietnam">Vietnam
                                </option>
                                <option value="Virgin Islands">Virgin Islands
                                </option>
                                <option value="Wallis and Futuna Islands">Wallis and Futuna Islands
                                </option>
                                <option value="Western Sahara">Western Sahara
                                </option>
                                <option value="Yemen">Yemen
                                </option>
                                <option value="Zambia">Zambia
                                </option>
                                <option value="Zimbabwe">Zimbabwe
                                </option>

                            </select>
                            <div className="form-control w-fit ">
                                <label className="label cursor-pointer">
                                    <input ref={reciveFreeAssesmentRef} type="checkbox" className="checkbox border-white checkbox-primary rounded-md" />
                                    <span className="label-text text-white font-semibold text-xl ml-5 "> Recieve free assessment. </span>
                                </label>
                            </div>

                            <div className="form-control w-fit ">
                                <label className="label cursor-pointer">
                                    <input ref={SubscribeToOurNewsletterRef} type="checkbox" className="checkbox border-white checkbox-primary rounded-md" />
                                    <span className="label-text text-white font-semibold text-xl ml-5 "> Subscribe to our newsletter</span>
                                </label>
                            </div>


                            <button type="submit" className="btn mt-5 border-2 border-[#00f] mx-auto hover:bg-[#00f] hover:border-[#00f] hover:text-white  text-2xl h-fit rounded-full text-white font-semibold px-5 py-2 bg-[#00c]  italic">Get Started</button>

                        </form>
                    </div>
                </div>
                <div id="section-2" className="lg:mt-0  border-b-4 py-10 lg:flex md:flex sm:block sm:mt-[5px] bg-left md:mt-[0px]  "
                    style={{
                        backgroundImage: `url(${imageLines5})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "200px",
                        backgroundPositionY: ""
                    }}
                >
                    <div className="w-1/2 mx-auto flex justify-center items-center">
                        <img src={imageRound} className='lg:w-1/2 sm:mt-5 md:w-3/4 sm:w-full ' alt="" />
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full ">
                        <div className="lg:block md:relative w-full font-black p-10  font-sans  text-black mx-auto">
                            <h1 className="text-4xl italic  text-[#00f] ">WHAT AND WHY</h1> <br />
                            <h1 className="text-4xl italic w-[82%] text-[#000000] ">ACCELERATE MIGRATION, ACCELERATE YOUR BUSINESS</h1>
                            <br />
                            <br />
                            <p className='lg:w-full md:w-full sm:w-full text-xl font-medium'><span className='text-[#00f]'>Mayhem Shield</span> is here to help you make responsible, data-driven migration decisions. We will help you replace guesswork with analysis by providing a data-backed blueprint to build, validate, and execute your AWS migration.</p>

                            <Link to="/partners/aws/landing2"><button className="btn mt-5 border-2 border-[#00f] mx-auto hover:bg-[#00f] hover:border-[#00f] hover:text-white  text-2xl h-fit rounded-full text-black font-semibold px-5 py-2 bg-white italic">SEE HOW IT WORKS</button></Link>
                        </div>
                    </div>
                </div>
                <div id="section-3" className="min-h-[400px]  border-b-4">
                    <div className="lg:w-1/2 mt-20 md:w-1/2 sm:w-full mx-auto">
                        <div className="lg:block md:relative w-full font-black p-10  font-sans  text-black mx-auto">
                            <h1 className="text-4xl  text-center italic  text-[#00f] ">AWS MIGRATION</h1>
                            <h1 className="text-4xl text-center  italic  text-[#000000] ">BENEFITS</h1>
                        </div>
                    </div>

                    <div className="flex lg:w-[80%] gap-x-[60px] md:w-[80%] sm:w-[90%] flex-wrap justify-between mx-auto">
                        {imageNames.map((imageName, index) => (
                            <div className='flex mt-5 mx-auto flex-col justify-space-between items-center'>
                                <img className='w-[250px]' key={index} src={require(`./images/${imageName}.png`)} alt={`Icon ${index + 1}`} />
                                <h1 className='font-bold text-3xl w-[250px] text-center'>{titles[index]}</h1>
                                <p className='text-xl  w-[250px] text-center'>{subtitels[index]}</p>
                            </div>

                        ))}
                    </div>
                    <div className="w-fit mx-auto mt-10 mb-20">
                        <button onClick={modalHandler} className="btn mt-5  border-2 border-[#00f] mx-auto hover:bg-[#00f] hover:text-white hover:border-[#00f] text-2xl h-fit rounded-full text-black font-semibold px-5 py-2 bg-white italic">Start now</button>
                    </div>
                </div>
                <div id="section-4" className="border-b-4 py-10 min-h-[400px] ">

                    <div className="flex lg:w-[85%] gap-5 md:w-[80%] sm:w-[90%] flex-wrap justify-between mx-auto">
                        {
                            cardImgs.map((img, i) => (
                                <Card img={img} title={cardTitles[i]} subtitle={cardSubs[i]} />
                            ))
                        }
                    </div>
                    <div className="w-fit mx-auto mt-10 mb-20">
                        {/* <Link to="/lets-talk"> */}
                        <button onClick={modalHandler} className="btn mt-5  border-2 border-[#00f] mx-auto hover:bg-[#00f] hover:border-[#00f] text-2xl h-fit rounded-full text-black font-semibold px-5 hover:text-white py-2 bg-white italic">FIND OUT MORE</button>
                        {/* </Link> */}
                    </div>
                </div>


                <div id="section-5" className="lg:mt-0  border-b-4 py-10 lg:flex md:flex sm:block sm:mt-[5px] bg-right md:mt-[0px]  "
                    style={{
                        backgroundImage: `url(${imageLines6})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "200px",
                        backgroundPositionY: ""
                    }}
                >

                    <div className="lg:w-1/2 md:w-1/2 sm:w-full ">
                        <div className="lg:block md:relative w-full font-black p-10  font-sans  text-black mx-auto">
                            <h1 className="text-4xl italic  text-[#00f] ">WHY MIGRATE TO AWS WITH</h1> <br />
                            <h1 className="text-4xl italic w-[82%] text-[#00f] ">Mayhem Shield</h1>
                            <br />
                            <br />
                            <p className='lg:w-full md:w-full sm:w-full text-xl font-medium'>AWS has helped thousands of organizations, including global enterprises, migrate their business to the cloud. These companies have benefited from substantial IT savings, as well as improvements in productivity, business agility, and operational resilience. Combining the experience and expertise of AWS, along with <a href='/solutions' className='text-[#00f]'>Mayhem Shield solution </a> , AWS and <span className='text-[#00f]'>Mayhem Shield</span> provide a complete and proven approach for migrating to the cloud so that you can achieve cloud benefits faster. </p>

                            <button onClick={() => modalHandler()} className="btn mt-5 border-2 border-[#00f] mx-auto hover:bg-[#00f] hover:border-[#00f] text-2xl h-fit rounded-full text-black font-semibold px-5 py-2 hover:text-white bg-white italic">GET STARTED</button>
                        </div>
                    </div>

                    <div className="w-1/2 mx-auto flex justify-center items-center">
                        <img src={imageRound} className='lg:w-1/2 sm:mt-5 md:w-3/4 sm:w-full ' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwsLandingPage;

