import React from 'react';
import { Page, Text, View, Document, section, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({ family: 'poppin', src: "https://fonts.googleapis.com/css2?family=Poppins&display=swap" });

const MakePDF = () => {
    const styles = StyleSheet.create({
        title: {
            fontFamily: 'poppin'
        },
        page: {
            flexDirection: 'row',
            // backgroundColor: '#E4E4E4'
        },


    });
    const popin = () =>{

    }
    return (
        <div>
            
            <Document>
                <Page wrap={false} size="A4" style={styles.page}>
                    <section className='p-10  min-h-full	  bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhectorkolonas.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fminimal-footer-bg-1024x384.jpg&f=1&nofb=1&ipt=bdeef61d80086f94e1d5a03d88c31283b36c1df9a72dfbabccf68fbaef3cc091&ipo=images)] bg-no-repeat	bg-cover bg-bottom	    '>
                        <View style={styles.section}>
                            <p className='text-5xl text-center font-bold'>This is title</p>
                            <Text className="text-black">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam aspernatur commodi voluptates obcaecati, illum, ducimus magnam amet sint atque dolorum maiores explicabo veniam! Ipsa, maiores obcaecati! Quos tempore earum eius nesciunt sed. Quasi odit vitae facere fuga non ea eligendi magni, similique repudiandae autem soluta. Inventore tenetur, suscipit fugiat voluptas adipisci exercitationem error ducimus optio veritatis sint, pariatur dolore omnis, unde similique nostrum aspernatur quod! Vitae adipisci nemo sint architecto hic in exercitationem magni eaque molestiae quos, amet accusamus repudiandae voluptas incidunt. Expedita iure magni, libero a quas, adipisci ullam quis in laborum suscipit, facilis temporibus saepe voluptates ea perspiciatis praesentium? Nesciunt inventore numquam cupiditate ipsum alias dolore iste et deleniti unde sed! Distinctio autem aperiam illo atque. Voluptate cupiditate animi atq
                            </Text>
                        </View>
                        </section>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>

        </div>
    );
};

export default MakePDF;