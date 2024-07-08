
import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        // margin:35,
        // paddingTop: 3,   
        // paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PDFFile = ({ result }) => {
    console.log("clg in pdff file", result)
    return (
        <Document className="mt-20">
            <Page className="" >
                <Text style={styles.text}></Text>
                <Text fixed className="text-5xl text-center font-medium mx-auto">Dear Mahmudul,</Text> <br />
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere ratione aperiam, maiores dignissimos perferendis neque odio pariatur praesentium, provident vitae debitis itaque illum consectetur quaerat consequatur quidem voluptatibus quisquam.
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>

    );
};

export default PDFFile;