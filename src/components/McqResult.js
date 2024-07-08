import React, { useEffect } from 'react';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './PDFFile';
const McqResult = ({ result }) => {
    // console.log(result)
    const [totalScore, setTotalScore] = useState(0);

    // console.log(result)
    useEffect(() => {
        // console.log(result)
        let sum = 0;
        result.map((item, i) => {

            if (item && typeof item[0][0] === 'number') {
                if (i === 12) {
                    item.map(j => {
                        // console.log(j)
                        sum += j[0]
                    })
                } else {
                    sum += item[0][0]
                }
            }
            else if (item && typeof item[0][0][0] === 'number') {
                // console.log("hited for checkbox nimber")
            }
        });
        setTotalScore(sum);
    }, [result]);
    return (
        <div id='result' className='text-white'>
            
            {/* <MakePDF/> */}
            <p className="text-center">
                Your total score is: {totalScore}
            </p>
            <PDFDownloadLink
                document={<PDFFile result={result} />} filename="FORM">
                {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
            </PDFDownloadLink>
            <ol className='text-lg list-disc	lg:w-1/2 md:w-3/4 sm:w-full mx-auto  bg-gray-600 p-8 rounded mt-10 transparent'>
                {result.map((item, index) => {

                    return <li key={index}>{index + 1}.  {item ? (item.length >3 ?

                        <ol>
                            {
                                item.map((item2, i2) => {

                                    <li>{item2[1]}</li>
                                    // console.log(item2[1])
                                })
                            }
                        </ol>
                        :
                        item[0][1]) 

                        : 'null'}</li>  //first null for checkbox and the second is for radio btn, if no value found then put null as place holder. 
                })}

            </ol>
        </div >
    );
};

export default McqResult;
