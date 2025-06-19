import Goggles1 from '../../assets/goggles1.webp';
import Goggles2 from '../../assets/goggles2.webp';
import Goggles3 from '../../assets/goggles3.webp';
import Goggles4 from '../../assets/goggles4.webp';
import Goggles5 from '../../assets/goggles5.webp';
import Mensshirt from '../../assets/mensshirt.webp';
import Mensshirt2 from '../../assets/mensshirt2.webp';
import Mensshirt3 from '../../assets/mensshirt3.webp';
import Mensshirt4 from '../../assets/mensshirt4.webp';
import Mensshirt5 from '../../assets/mensshirt5.webp';
import Mensshirt6 from '../../assets/mensshirt6.webp';
import Pents1 from '../../assets/pents1.webp';
import Pents2 from '../../assets/pents2.webp';
import Pents3 from '../../assets/pents3.webp';
import Pents4 from '../../assets/pents4.webp';
import Pents5 from '../../assets/pents5.webp';
import Shoes1 from '../../assets/shoes1.webp';
import Shoes2 from '../../assets/shoes2.webp';
import Shoes3 from '../../assets/shoes3.webp';
import Shoes4 from '../../assets/shoes4.webp';
import Shoes5 from '../../assets/shoes5.webp';
import Shooes2 from '../../assets/shooes2.png';
import Watch1 from '../../assets/watch1.jpg';
import Watch2 from '../../assets/watch2.jpg';
import Wome11 from '../../assets/wome11.webp';
import Wome6 from '../../assets/wome6.webp';
import Women1 from '../../assets/women1.webp';
import Women10 from '../../assets/women10.webp';
import Women2 from '../../assets/women2.webp';
import Women3 from '../../assets/women3.webp';
import Women4 from '../../assets/women4.webp';
import Women5 from '../../assets/women5.webp';
import Women7 from '../../assets/women7.webp';
import Women8 from '../../assets/women8.webp';
import Women9 from '../../assets/women9.webp';
import Womendres from '../../assets/womendres.png';
import beg1 from '../../assets/beg1.webp';
import beg2 from '../../assets/beg2.webp';
import beg3 from '../../assets/begs.3.webp';
import shirt1_1 from '../../assets/shirt1.1.webp'
import shirt1_2 from '../../assets/shirt1.2.webp'
import shirt1_3 from '../../assets/shirt1.3.webp'

const ProductData = [
  { name: 'goggles1', src1: shirt1_1, src2: shirt1_2, src3: shirt1_3, src: Goggles1, description: 'A sample image named goggles1.', price: '$20', category: 'goggles' },
  { name: 'goggles2', src: Goggles2, description: 'A sample image named goggles2.', price: '$25', category: 'goggles' },
  { name: 'goggles3', src: Goggles3, description: 'A sample image named goggles3.', price: '$30', category: 'goggles' },
  { name: 'goggles4', src: Goggles4, description: 'A sample image named goggles4.', price: '$35', category: 'goggles' },
  { name: 'goggles5', src: Goggles5, description: 'A sample image named goggles5.', price: '$40', category: 'goggles' },
  { name: 'mensshirt', src: Mensshirt, description: 'A sample image named mensshirt.', price: '$50', category: 'shirt' },
  { name: 'mensshirt2', src: Mensshirt2, description: 'A sample image named mensshirt2.', price: '$55', category: 'shirt' },
  { name: 'mensshirt4', src: Mensshirt4, description: 'A sample image named mensshirt4.', price: '$60', category: 'shirt' },
  { name: 'mensshirt3', src: Mensshirt3, description: 'A sample image named mensshirt3.', price: '$60', category: 'shirt' },
  { name: 'mensshirt5', src: Mensshirt5, description: 'A sample image named mensshirt5.', price: '$60', category: 'shirt' },
  { name: 'mensshirt6', src: Mensshirt6, description: 'A sample image named mensshirt6.', price: '$60', category: 'shirt' },
  { name: 'pents1', src: Pents1, description: 'A sample image named pents1.', price: '$60', category: 'pants' },
  { name: 'pents2', src: Pents2, description: 'A sample image named pents2.', price: '$60', category: 'pants' },
  { name: 'pents3', src: Pents3, description: 'A sample image named pents3.', price: '$60', category: 'pants' },
  { name: 'pents4', src: Pents4, description: 'A sample image named pents4.', price: '$60', category: 'pants' },
  { name: 'pents5', src: Pents5, description: 'A sample image named pents5.', price: '$60', category: 'pants' },
  { name: 'shoes1', src: Shoes1, description: 'A sample image named shoes1.', price: '$60', category: 'shoes' },
  { name: 'shoes2', src: Shoes2, description: 'A sample image named shoes2.', price: '$60', category: 'shoes' },
  { name: 'shoes3', src: Shoes3, description: 'A sample image named shoes3.', price: '$60', category: 'shoes' },
  { name: 'shoes4', src: Shoes4, description: 'A sample image named shoes4.', price: '$60', category: 'shoes' },
  { name: 'shoes5', src: Shoes5, description: 'A sample image named shoes5.', price: '$60', category: 'shoes' },
  { name: 'shooes2', src: Shooes2, description: 'A sample image named shooes2.', price: '$60', category: 'shoes' },
  { name: 'watch1', src: Watch1, description: 'A sample image named watch1.', price: '$60', category: 'watches' },
  { name: 'watch2', src: Watch2, description: 'A sample image named watch2.', price: '$60', category: 'watches' },
  { name: 'wome11', src: Wome11, description: 'A sample image named wome11.', price: '$60', category: 'women' },
  { name: 'wome6', src: Wome6, description: 'A sample image named wome6.', price: '$60', category: 'women' },
  { name: 'women1', src: Women1, description: 'A sample image named women1.', price: '$60', category: 'women' },
  { name: 'women10', src: Women10, description: 'A sample image named women10.', price: '$60', category: 'women' },
  { name: 'women2', src: Women2, description: 'A sample image named women2.', price: '$60', category: 'women' },
  { name: 'women3', src: Women3, description: 'A sample image named women3.', price: '$60', category: 'women' },
  { name: 'women4', src: Women4, description: 'A sample image named women4.', price: '$60', category: 'women' },
  { name: 'women5', src: Women5, description: 'A sample image named women5.', price: '$60', category: 'women' },
  { name: 'women7', src: Women7, description: 'A sample image named women7.', price: '$60', category: 'women' },
  { name: 'women8', src: Women8, description: 'A sample image named women8.', price: '$60', category: 'women' },
  { name: 'women9', src: Women9, description: 'A sample image named women9.', price: '$60', category: 'women' },
  { name: 'womendres', src: Womendres, description: 'A sample image named womendres.', price: '$60', category: 'women' },
  { name: 'beg1', src: beg1, description: 'A sample image named begs.', price: '$10', category: 'beg' },
  { name: 'beg2', src: beg2, description: 'A sample image named begs.', price: '$20', category: 'beg' },
  { name: 'beg3', src: beg3, description: 'A sample image named begs.', price: '$10', category: 'beg' },

];

export default ProductData;
