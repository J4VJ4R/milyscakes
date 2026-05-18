import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Svg, Defs, LinearGradient, Stop, Path, Circle } from '@react-pdf/renderer';
import { Category } from '@/data/menu';

// Register a font if we had one, but we'll stick to standard Helvetica for reliability
// Font.register({ family: 'DancingScript', src: '/fonts/DancingScript-Bold.ttf' }); // Example if we had local fonts

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  coverPage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff', 
    position: 'relative',
    overflow: 'hidden',
  },
  coverContent: {
    zIndex: 10,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    margin: 40,
  },
  coverTitle: {
    fontSize: 54,
    color: '#a66ec7', // mily-purple-dark
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -2,
  },
  coverSubtitle: {
    fontSize: 24,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 6,
    textTransform: 'uppercase',
    fontWeight: 'light',
  },
  coverDate: {
    fontSize: 12,
    color: '#999',
    position: 'absolute',
    bottom: 30,
    letterSpacing: 2,
    right: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e6cff5',
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 10,
    color: '#a66ec7',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 36,
    color: '#a66ec7',
    marginTop: 20,
    marginBottom: 30,
    paddingBottom: 5,
    borderBottomWidth: 0,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'right',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#C996EB',
  },
  productContainerRight: {
    flexDirection: 'row-reverse',
    backgroundColor: '#FDF4FF', // Slight purple tint for alternating items
    borderLeftWidth: 0,
    borderRightWidth: 4,
    borderRightColor: '#C996EB',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    objectFit: 'cover',
    backgroundColor: '#f0f0f0', 
  },
  productInfo: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  productPrice: {
    fontSize: 16,
    color: '#fff', 
    backgroundColor: '#a66ec7', // Darker purple for price
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 11,
    color: '#666',
    lineHeight: 1.6,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#ccc',
    fontSize: 9,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
    paddingTop: 10,
    letterSpacing: 1,
  },
  tocItem: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  qualityBadge: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#a66ec7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  qualityText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

const CatalogDocument = ({ origin, data }: { origin: string, data?: Category[] }) => {
  const currentDate = new Date().toLocaleDateString('es-CO', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const categories = data || [];

  return (
    <Document>
      <Page size="A4" style={styles.coverPage}>
        {/* Background SVG Patterns */}
        <Svg width={600} height={900} fixed style={{ position: 'absolute', top: 0, left: 0 }}>
            <Defs>
                <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor="#C996EB" stopOpacity={0.2} />
                    <Stop offset="100%" stopColor="#a66ec7" stopOpacity={0.6} />
                </LinearGradient>
                <LinearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0%" stopColor="#e6cff5" stopOpacity={0.5} />
                    <Stop offset="100%" stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
            </Defs>
            {/* Top Right Blob */}
            <Circle cx="500" cy="100" r="300" fill="url(#grad1)" />
            {/* Bottom Left Blob */}
            <Circle cx="100" cy="800" r="400" fill="url(#grad2)" />
            {/* Decorative Lines */}
            <Path d="M0 400 Q 300 300 600 500" stroke="#C996EB" strokeWidth="2" strokeOpacity={0.3} fill="none" />
            <Path d="M0 420 Q 300 320 600 520" stroke="#C996EB" strokeWidth="2" strokeOpacity={0.2} fill="none" />
        </Svg>
        
        <View style={styles.coverContent}>
            <Text style={styles.coverTitle}>{"Mily's Cakes"}</Text>
            <Text style={styles.coverSubtitle}>Catálogo {new Date().getFullYear()}</Text>
            <View style={{ width: 100, height: 4, backgroundColor: '#a66ec7', marginBottom: 20, borderRadius: 2 }} />
            <Text style={{ fontSize: 16, color: '#555', marginBottom: 5, letterSpacing: 2, fontWeight: 'bold' }}>PASTELERÍA ARTESANAL</Text>
            <Text style={{ fontSize: 14, color: '#777', textAlign: 'center', maxWidth: 400, fontStyle: 'italic', marginTop: 10 }}>
            «Dulces que cuentan historias. Hechos con amor en Ibagué.»
            </Text>
            
            <View style={styles.qualityBadge}>
                <Text style={styles.qualityText}>PREMIUM</Text>
                <Text style={{...styles.qualityText, fontSize: 14}}>2026</Text>
                <Text style={styles.qualityText}>EDITION</Text>
            </View>
        </View>

        <Text style={styles.coverDate}>Generado: {currentDate}</Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Svg width={600} height={900} fixed style={{ position: 'absolute', top: 0, left: 0, opacity: 0.5 }}>
             <Circle cx="600" cy="50" r="100" fill="#FDF4FF" />
             <Circle cx="0" cy="850" r="150" fill="#FDF4FF" />
        </Svg>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>{"Mily's Cakes - Índice"}</Text>
        </View>
        <Text style={{...styles.sectionTitle, textAlign: 'left'}}>Contenido</Text>
        <View style={{ marginTop: 20 }}>
          {categories.map((category) => (
            <View key={category.id} style={styles.tocItem}>
              <Text>{category.title}</Text>
              <Text style={{ color: '#a66ec7' }}>Ir a sección</Text>
            </View>
          ))}
        </View>
        <View style={{ marginTop: 'auto', padding: 25, backgroundColor: '#FDF4FF', borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#a66ec7' }}>
          <Text style={{ fontSize: 16, color: '#a66ec7', marginBottom: 15, fontWeight: 'bold' }}>Contacto & Pedidos</Text>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
             <Text style={{ fontSize: 12, color: '#333', fontWeight: 'bold', width: 80 }}>WhatsApp:</Text>
             <Text style={{ fontSize: 12, color: '#666' }}>+57 313 458 3730</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
             <Text style={{ fontSize: 12, color: '#333', fontWeight: 'bold', width: 80 }}>Instagram:</Text>
             <Text style={{ fontSize: 12, color: '#666' }}>@milyscakes27</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
             <Text style={{ fontSize: 12, color: '#333', fontWeight: 'bold', width: 80 }}>Web:</Text>
             <Text style={{ fontSize: 12, color: '#666' }}>www.milyscake.com</Text>
          </View>
        </View>
        <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>

      {categories.map((category) => (
        <Page key={category.id} size="A4" style={styles.page}>
           <Svg width={600} height={900} fixed style={{ position: 'absolute', top: 0, left: 0, opacity: 0.4, zIndex: -1 }}>
               <Circle cx="600" cy="50" r="120" fill="#FDF4FF" />
               <Circle cx="0" cy="800" r="180" fill="#F8E8FF" />
               <Path d="M0 100 Q 300 50 600 150" stroke="#F3E5F5" strokeWidth="3" fill="none" />
          </Svg>

          <View style={styles.header} fixed>
              <Text style={styles.headerTitle}>{`Mily's Cakes - ${category.title}`}</Text>
          </View>
          
          <Text style={styles.sectionTitle}>{category.title}</Text>

          <View>
            {category.products.map((product, index) => {
              const isEven = index % 2 === 0;
              const containerStyle = isEven ? styles.productContainer : [styles.productContainer, styles.productContainerRight];
              
              return (
                <View key={product.id} style={containerStyle} wrap={false}>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image 
                    style={styles.productImage} 
                    src={product.image || origin + '/img/placeholder.png'} 
                  />
                  <View style={styles.productInfo}>
                    <Text style={{...styles.productName, textAlign: isEven ? 'left' : 'right'}}>{product.name}</Text>
                    <View style={{alignSelf: isEven ? 'flex-start' : 'flex-end'}}>
                        <Text style={styles.productPrice}>{product.price}</Text>
                    </View>
                    {product.description && (
                      <Text style={{...styles.productDescription, textAlign: isEven ? 'left' : 'right'}}>{product.description}</Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>

          <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </Page>
      ))}
    </Document>
  );
};

export default CatalogDocument;
