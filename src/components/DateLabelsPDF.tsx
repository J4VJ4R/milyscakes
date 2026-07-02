import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface DateLabelsPDFProps {
  ffDate: string;
  fvDate: string;
  columns: number;
  rows: number;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    padding: 0,
    fontFamily: 'Helvetica',
  },
  labelContainer: {
    width: 80,
    height: 35,
  },
  cutLine: {
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'dashed',
    width: '100%',
    height: '100%',
  },
  label: {
    borderWidth: 5,
    borderColor: '#f8bbd0', // Light pink border matching the image
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 7,
    color: '#000000', // Black text
    textAlign: 'center',
    lineHeight: 1,
    fontWeight: 'bold', // Bold text
  },
});

const DateLabelsPDF: React.FC<DateLabelsPDFProps> = ({ ffDate, fvDate, columns, rows }) => {
  // Parse FF date (using UTC to avoid timezone issues)
  const ffDateObj = new Date(ffDate);
  const ffDay = String(ffDateObj.getUTCDate()).padStart(2, '0');
  const ffMonth = String(ffDateObj.getUTCMonth() + 1).padStart(2, '0');
  const ffYear = String(ffDateObj.getUTCFullYear()).slice(-2); // Last 2 digits

  // Parse FV date (using UTC to avoid timezone issues)
  const fvDateObj = new Date(fvDate);
  const fvDay = String(fvDateObj.getUTCDate()).padStart(2, '0');
  const fvMonth = String(fvDateObj.getUTCMonth() + 1).padStart(2, '0');
  const fvYear = String(fvDateObj.getUTCFullYear()).slice(-2); // Last 2 digits

  const labels = [];
  const totalLabels = columns * rows;

  for (let i = 0; i < totalLabels; i++) {
    labels.push(
      <View key={i} style={styles.labelContainer}>
        <View style={styles.cutLine}>
          <View style={styles.label}>
            <Text style={styles.labelText}>FF {ffDay}-{ffMonth}-{ffYear}</Text>
            <Text style={styles.labelText}>FV {fvDay}-{fvMonth}-{fvYear}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Document>
      <Page size="LETTER" orientation="landscape" style={styles.page}>
        {labels}
      </Page>
    </Document>
  );
};

export default DateLabelsPDF;
