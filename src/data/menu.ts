export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export interface Category {
  id: string;
  title: string;
  products: Product[];
}

export const menuData: Category[] = [
  {
    id: "tortas",
    title: "Tortas",
    products: [
      {
        id: "t-1",
        name: "María Luisa",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
        description: "Clásica torta suave rellena de arequipe o mermelada.",
      },
      {
        id: "t-2",
        name: "Amapola",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800",
        description: "Deliciosa torta con semillas de amapola y toque cítrico.",
      },
      {
        id: "t-3",
        name: "Café",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
        description: "Para los amantes del café, sabor intenso y aroma perfecto.",
      },
      {
        id: "t-4",
        name: "Red Velvet",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=800",
        description: "Esponjosa torta roja con suave frosting de queso crema.",
      },
      {
        id: "t-5",
        name: "Arándanos",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=800",
        description: "Fresca y frutal, cargada de arándanos naturales.",
      },
      {
        id: "t-6",
        name: "Chocolate",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        description: "Intenso chocolate para los verdaderos chocoholics.",
      },
      {
        id: "t-7",
        name: "Zanahoria",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
        description: "Húmeda y especiada, con nueces y crema de queso.",
      },
      {
        id: "t-8",
        name: "Tres Leches",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800",
        description: "Jugosa y dulce, bañada en nuestra mezcla especial de tres leches.",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    products: [
      {
        id: "p-1",
        name: "Brownie con Helado",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "p-2",
        name: "Fresas con Crema",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1563200138-0975e54d80db?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "p-3",
        name: "Arroz con Leche",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1631857187642-83b6528784d5?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "p-4",
        name: "Cheesecake",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
        description: "Disponible frío o horneado.",
      },
      {
        id: "p-5",
        name: "Rollitos de Canela",
        price: "$9.000",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "sal-y-dulce",
    title: "Sal y Dulce",
    products: [
      {
        id: "s-1",
        name: "Sándwich Carne Mechada",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "s-2",
        name: "Sándwich Pollo",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "s-3",
        name: "Waffle Dulce",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "s-4",
        name: "Empanadas",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1649080755106-905187796016?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "s-5",
        name: "Dedito de Queso",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1626505470258-05206236b356?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "s-6",
        name: "Parfait",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1488477181946-6428a029177b?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    products: [
      {
        id: "b-1",
        name: "Americano",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "b-2",
        name: "Capuchino",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "b-3",
        name: "Mocca",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "b-4",
        name: "Frappe Café",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "b-5",
        name: "Malteadas",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "b-6",
        name: "Limonada",
        price: "Consultar",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];
