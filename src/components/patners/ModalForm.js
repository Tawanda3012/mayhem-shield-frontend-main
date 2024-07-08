import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ModalForm = ({ showModal, modalHandler }) => {
    const fields = [
        {
            text: "First Name",
            ref: "Fname",
            type: "text"
        },
        {
            text: "Last Name",
            ref: "Lname",
            type: "text"
        },
        {
            text: "Email Address",
            ref: "Email",
            type: "email"
        },
        {
            text: "Company",
            ref: "Company",
            type: "text"
        },
        {
            text: "Company Website",
            ref: "Website",
            type: "text"
        }
    ]



    const [input, setInput] = useState({});

    const handleInputChange = (event) => {   // find all inputed values
        const { name, value } = event.target;
        setInput((prevData) => ({ ...prevData, [name]: value }));
    };

    const [Country, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {  // gety the selected country 
        const selectedValue = event.target.value;
        setSelectedCountry(selectedValue);
    };
    const [selectedYesNo, setSelectedOption] = useState('');
    const [marketVerticals, setSelectedFirstCheckBoxOptions] = useState([]);
    const [selectedWorkloads, setSelectedWorkloads] = useState([]);
    const [selectedTransformTime, setSelectedTransformTime] = useState('');
    const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);
    const [agreeMarketingContact, setAgreeMarketingContact] = useState(false);
    const [submitting, setsubmitting] = useState(false);




    const handleYesNoOptionChange = (event) => {
        const YesNo = event.target.value
        setSelectedOption(YesNo);
    };
    const handleOptionChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedFirstCheckBoxOptions([...marketVerticals, value]);
        } else {
            setSelectedFirstCheckBoxOptions(marketVerticals.filter((option) => option !== value));
        }
    };
    const handleWorkloadChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedWorkloads([...selectedWorkloads, value]);
        } else {
            setSelectedWorkloads(selectedWorkloads.filter((option) => option !== value));
        }
    };
    const handleTransformTimeChange = (event) => {
        setSelectedTransformTime(event.target.value);
    };
    const handleAgreePrivacyPolicyChange = () => {
        setAgreePrivacyPolicy(!agreePrivacyPolicy);
    };

    const handleAgreeMarketingContactChange = () => {
        setAgreeMarketingContact(!agreeMarketingContact);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            ...input,
            Country: Country,
            Migrating: selectedYesNo,
            Market_verticals: marketVerticals,
            Aselected_Workloads: selectedWorkloads,
            Selected_Transform_Time: selectedTransformTime,
            Agree_Privacy_Policy: agreePrivacyPolicy,
            Agree_Marketing_Contact: agreeMarketingContact
        }
        setsubmitting(true)

        console.log(submitting);
        console.log(formData)
        fetch('https://sheetdb.io/api/v1/mv7w429h2a9b4', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    formData
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {

                console.log(data)
                console.log(submitting);
                setsubmitting(false)
                setInput({})
                setSelectedCountry("")
                setAgreeMarketingContact("")
                setAgreePrivacyPolicy("")

                setSelectedFirstCheckBoxOptions("")
                setSelectedTransformTime('')
                setSelectedWorkloads('')
                setSelectedOption('')
            });





    }
    return (
        <div>
            <div className={`${showModal ? "block" : "hidden"} fixed z-10 overflow-scroll w-full  p-10 h-full bg-[#acabab75] top-[50px] left-0 flex justify-center items-center`}>
                <div id="my_modal_3" className="lg:w-1/2 sm:w-[95%] md:w-3/4 max-w-3/4    mt-10  min-h-[80vh] bg-white p-10 rounded-xl absolute top-0">
                    <button onClick={() => modalHandler()} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2  ">✕</button>
                    <div className="">
                        <h1 className='text-3xl font-bold'>Contact Us</h1>
                        <form onSubmit={handleSubmit} className='my-5'>
                            {
                                fields.map((field, i) => <>
                                    <div className='flex items-center'>
                                        <label className='w-48'>{field.text} :</label>
                                        <input className='border-1 input my-2 w-full border-gray-400 mx-3 rounded-full p-3' name={field.ref} type={field.type} placeholder={"Enter your " + field.text}
                                            value={input[field.ref] || ""}
                                            onChange={handleInputChange} />
                                    </div>
                                </>)
                            }
                            <div className='flex items-center '>        {/* cuntry selection dropdown*/}
                                <label className='w-48'>Country : </label>
                                <select className="select my-3 border-1 w-3/4 border-gray-400 rounded-full first-letter:" name="country" data-
                                    value={Country}
                                    onChange={handleCountryChange}
                                >
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
                            </div>
                            <p className='text-xl mt-5'>Are you looking forward to migrating your workload to AWS?*</p>
                            <div className=" flex">
                                <label>
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={selectedYesNo === 'yes'}
                                        onChange={handleYesNoOptionChange}
                                        className='mx-2'
                                    />
                                    Yes
                                </label>
                                <label className='mx-5'
                                >
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={selectedYesNo === 'no'}
                                        onChange={handleYesNoOptionChange}
                                        className='mx-2'
                                    />
                                    No
                                </label>
                            </div>


                            <p className='text-xl  my-3 mt-5'>Which market verticals do you serve?</p>
                            <div className='flex justify-between flex-wrap'>
                                <span>
                                    <label>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            value="Server and storage"
                                            checked={marketVerticals.includes('Server and storage')}
                                            onChange={handleOptionChange}
                                        />
                                        Server and storage
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            value="Windows-based migration"
                                            checked={marketVerticals.includes('Windows-based migration')}
                                            onChange={handleOptionChange}
                                        />
                                        Windows-based migration
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            value="Communication and collaboration"
                                            checked={marketVerticals.includes('Communication and collaboration')}
                                            onChange={handleOptionChange}
                                        />
                                        Communication and collaboration
                                    </label>


                                </span>
                                <span>
                                    <label>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            value="Backup/DR and replication"
                                            checked={marketVerticals.includes('Backup/DR and replication')}
                                            onChange={handleOptionChange}
                                        />
                                        Backup/DR and replication
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            value="Amazon workspace"
                                            checked={marketVerticals.includes('Amazon workspace')}
                                            onChange={handleOptionChange}
                                        />
                                        Amazon workspace
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            value="AI & ML"
                                            checked={marketVerticals.includes('AI & ML')}
                                            onChange={handleOptionChange}
                                        />
                                        AI & ML
                                    </label>
                                </span>
                            </div>


                            <div>
                                <p className=" my-3 mt-5 text-xl">Types of workloads are you planning to migrate to AWS?*</p>
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        value="Commercial/Private"
                                        checked={selectedWorkloads.includes('Commercial/Private')}
                                        onChange={handleWorkloadChange}
                                    />
                                    Commercial/Private
                                </label>
                                <br />
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        value="Commercial/Public Sector"
                                        checked={selectedWorkloads.includes('Commercial/Public Sector')}
                                        onChange={handleWorkloadChange}
                                    />
                                    Commercial/Public Sector
                                </label>
                                <br />
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        value="Public Sector"
                                        checked={selectedWorkloads.includes('Public Sector')}
                                        onChange={handleWorkloadChange}
                                    />
                                    Public Sector
                                </label>
                                <br />
                                <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        value="Non-Profit"
                                        checked={selectedWorkloads.includes('Non-Profit')}
                                        onChange={handleWorkloadChange}
                                    />
                                    Non-Profit
                                </label>
                            </div>


                            <div>
                                <p className=" my-3 mt-5 text-xl">How soon would you like to transform your business to AWS Cloud?*</p>
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="transformTime"
                                        value="Less than 30 days"
                                        checked={selectedTransformTime === 'Less than 30 days'}
                                        onChange={handleTransformTimeChange}
                                    />
                                    Less than 30 days
                                </label>
                                <br />
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="transformTime"
                                        value="Less than 3 months"
                                        checked={selectedTransformTime === 'Less than 3 months'}
                                        onChange={handleTransformTimeChange}
                                    />
                                    Less than 3 months
                                </label>
                                <br />
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="transformTime"
                                        value="Less than 2 months"
                                        checked={selectedTransformTime === 'Less than 2 months'}
                                        onChange={handleTransformTimeChange}
                                    />
                                    Less than 2 months
                                </label>
                                <br />
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="transformTime"
                                        value="Less than 6 months"
                                        checked={selectedTransformTime === 'Less than 6 months'}
                                        onChange={handleTransformTimeChange}
                                    />
                                    Less than 6 months
                                </label>
                            </div>
                            <br />
                            <br />

                            <div>
                                <input
                                    className='mr-3'
                                    type="checkbox"
                                    id="privacyPolicyCheckbox"
                                    checked={agreePrivacyPolicy}
                                    onChange={handleAgreePrivacyPolicyChange}
                                    required
                                />
                                <label htmlFor="privacyPolicyCheckbox">
                                    Agree to the <Link to="/pivacy-policy">Privacy Policy <span className='text-rose-500'>*</span></Link>
                                </label>
                            </div>
                            <div>
                                <input
                                    className='mr-3 mt-3'
                                    type="checkbox"
                                    id="marketingContactCheckbox"
                                    checked={agreeMarketingContact}
                                    onChange={handleAgreeMarketingContactChange}
                                />
                                <label htmlFor="marketingContactCheckbox">
                                    By providing my personal data, including name and contact information to Mayhem Shield and its affiliates,
                                    I agree to be contacted for marketing purposes. Mayhem Shield will collect and process your personal data,
                                    in compliance with our <Link to="/pivacy-policy">Privacy Policy <span className='text-rose-500'>*</span></Link> Statement.
                                </label>
                            </div>

                            <button className={`btn btn-primary rounded-full px-5 py-1 mt-5 ${submitting ? "loading" : ""}`}>{submitting ? "Submitting" : "Submit"}</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ModalForm;