import React, { useState, useCallback } from 'react';
import { ArrowLeft, Star, CheckCircle, XCircle } from 'lucide-react'; 
import icium from "../../assets/calcium.png";
import power from "../../assets/tailam.png";
import omega from "../../assets/omega.png";
import multi from "../../assets/multivitamin.png";
import amrutha from "../../assets/amrutha.png";
import powerliquid from "../../assets/powerliquid.png";
import navaglow from "../../assets/navaglow.png";
import kasthuri from "../../assets/kasthuri.png";
import facecrub from "../../assets/facescrub.png";
import herbal from "../../assets/herbal.png";
import facewash from "../../assets/facewash.png";
import aloevera from "../../assets/aloevera.png";
import { useNavigate } from 'react-router-dom';


// --- Data Typing and Structure ---
interface Product {
  id: number;
  image: string; // Path to the product image
  name: string;
  tagline: string;
  rating: number;
  price: number;
  listPrice: number; // For the "Digital List Price" strikethrough
  benefits: string[];
}

interface PurchaseFormState {
  name: string;
  email: string;
  quantity: number; 
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

// --- Hardcoded Product Data Array (6 Objects) ---
const productsData: Product[] = [
  { 
    id: 1, 
    image: powerliquid,
    name: 'Power Liquid', 
    tagline: 'Pain relief liquid say goodbye to pain naturally', 
    rating: 4.8, 
    price: 240, 
    listPrice: 300, 
    benefits: [
      'Fast Relief from Pain',
      'Soothes Muscle Spasms & Cramps.',
      'Improves Joint Flexibility.',
      'Reduces Inflammation.',
      'Soothes Joint Stiffness.',
      'Improves Blood Circulation'
    ]
  },
  { 
    id: 2, 
    image: amrutha,
    name: 'Amrutha Jeevani', 
    tagline: 'The elixir of life for respiratory health.', 
    rating: 4.4, 
    price: 270, 
    listPrice: 350, 
    benefits: [
      'Boosts Lung Immunity',
      'Relieves chronic cough and asthma.',
      'Detoxifies respiratory system.',
      'Enhances stamina and vitality.',
    ]
  },
  { 
    id: 3, 
    image: icium, // Using the imported variable
    name: 'Calcium Plus', 
    tagline: 'Strengthens bones and improves posture.', 
    rating: 4.7, 
    price: 600, 
    listPrice: 750, 
    benefits: [
      'Promotes bone density.',
      'Prevents osteoporosis.',
      'Supports nerve function.',
      '100% natural absorbable formula.',
    ]
  },
  { 
    id: 4, 
    image: power, // Using the imported variable
    name: 'Power Tailam', 
    tagline: 'Ancient oil massage for deep tissue relief.', 
    rating: 4.4, 
    price: 75, 
    listPrice: 100, 
    benefits: [
      'Relieves muscular and joint aches.',
      'Warms and relaxes the body.',
      'Quick absorption for fast action.',
    ]
  },
  { 
    id: 5, 
    image: omega, // Using the imported variable
    name: 'Omega 369 capsule', 
    tagline: 'Essential fatty acids for heart and brain health.', 
    rating: 4.8, 
    price: 700, 
    listPrice: 900, 
    benefits: [
      'Improves cardiovascular health.',
      'Boosts cognitive function.',
      'Reduces harmful cholesterol.',
      'Source of essential vitamins.',
    ]
  },
  { 
    id: 6, 
    image: multi, 
    name: 'Multi Vitamin Tablet', 
    tagline: 'Complete daily nutrition for sustained energy.', 
    rating: 4.4, 
    price: 699, 
    listPrice: 850, 
    benefits: [
      'Fills nutritional gaps.',
      'Increases daily energy levels.',
      'Supports immune system.',
      'Contains Ayurvedic herb extracts.',
    ]
  },
  { 
      id: 7, 
      image: aloevera,
      name: 'Aloe Vera Shampoo', 
      tagline: 'Pain relief liquid say goodbye to pain naturally', 
      rating: 4.7, 
      price: 270, 
      listPrice: 300,
      benefits: [
"Gently cleanses scalp and hair without harshness.",
"Deeply hydrates dry and dull hair.",
"Strengthens hair roots and reduces hair fall.",
"Soothes itchy, irritated scalp.",
"Controls dandruff naturally.",
"Adds shine and smoothness to hair",
      ]
    },
    { 
      id: 8, 
      image: facewash,
      name: 'Red Wine Face Wash', 
      tagline: '',
      rating: 4.8, 
      price: 240, 
      listPrice: 300,
      benefits: [
"Hydrates and nourishes skin for softness",
"Rich in antioxidants to fight free radicals and slow aging.",
"Brightens dull skin and boosts natural glow.",
"Tightens pores for a smoother look.",
"Reduces excess oil and prevents acne breakouts.",
"Hydrates and nourishes skin for softness.",
      ]
    },
    { 
      id: 9, 
      image: herbal , // Using the imported variable
      name: 'Herbal Shampoo', 
      tagline: '',
      rating: 4.8, 
      price: 285, 
       listPrice: 300,
      benefits: [
"Strengthens roots and reduces hair fall.",
"Promotes natural hair growth.",
"Prevents dandruff and scalp irritation.",
"Adds natural shine and smoothness.",
"Keeps scalp cool and healthy.",
"Reduces dryness and nourishes deeply.",
"Repairs damaged hair and split ends.",
"Safe for daily use on all hair types.",
"Enriched with pure herbal extracts for total hair care."
      ]
    },
    { 
      id: 10, 
      image: facecrub, // Using the imported variable
      name: 'Face Scrub', 
      tagline: '',
      rating: 4.6, 
      price: 285, 
       listPrice: 300,
      benefits: [
"Almond gently exfoliates, removing dead skin cells.",
"Papaya enzymes brighten skin and lighten dark spots.",
"Neem fights pimples and prevents breakouts.",
"Aloe Vera soothes, cools, and calms irritated skin.",
"Clears clogged pores for a fresh, clean look.",
"Improves skin texture, leaving it smooth and soft.",
"Reduces excess oil while keeping skin hydrated.",
"Fades tan and restores natural radiance.",
"Boosts skin cell renewal for a youthful glow",
      ]
    },
    { 
      id: 11, 
      image: kasthuri, // Using the imported variable
      name: 'Kasthuri Gold Soap', 
      tagline: '',
      rating: 4.8, 
      price: 180, 
        listPrice: 200,
      benefits: [
"Gives a radiant, natural glow to the skin.",
"Fades acne scars, blemishes, and pigmentation.",
"Prevents pimples and controls breakouts.",
"Tightens pores and firms the skin.",
"Removes tan and brightens dull skin.",
"Delays signs of ageing and enhances skin texture.",
      ]
    },
    { 
      id: 12, 
      image: navaglow, 
      name: 'Nava Glow Soap', 
      tagline: '',
      rating: 4.6, 
      price: 180, 
        listPrice: 200,
      benefits: [
"Aloe Vera",
"Anti-aging & Prevents Skin Dryness,",
"Veppalai Oil: Natural anti-inflammatory, antibacterial, and antifungal properties",
"Glycerin",
"Skin Moisturizer",
"Shea Butter",
"Skin Shining Properties",
      ]
    },
];

// --- Helper Components ---

const StatusMessage: React.FC<{ status: SubmissionStatus }> = ({ status }) => {
  if (status === 'success') {
    return (
      <div className="flex items-center p-3 mb-4 text-green-700 bg-green-100 rounded-lg shadow-sm" role="alert">
        <CheckCircle className="w-5 h-5 mr-2" />
        <span className='text-sm font-medium'>Purchase enquiry sent! We will contact you shortly to confirm details.</span>
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className="flex items-center p-3 mb-4 text-red-700 bg-red-100 rounded-lg shadow-sm" role="alert">
        <XCircle className="w-5 h-5 mr-2" />
        <span className='text-sm font-medium'>Submission failed. Please ensure all required fields are filled correctly.</span>
      </div>
    );
  }
  return null;
};


// --- Component Props and Main Component ---
interface ProductPurchasePageProps {
  productId?: number; // Make prop optional and provide default internally
}

// Added productId = 1 in destructuring for a stable default value
const ProductPurchasePage: React.FC<ProductPurchasePageProps> = ({ productId = 1 }) => {
  const sectionBg = '#fffaf3';
  const labelColor = '#A8795A';
  const buttonBgColor = '#97977E'; 
  const primaryTextColor = '#4A4B46';
  const starColor = '#FFC107'; 

   // *** API Configuration ***
  const API_URL = 'https://jagajothi-backend.vercel.app/product';
  const MAX_RETRIES = 3;

    // --- State ---
  const [formData, setFormData] = useState<PurchaseFormState>({
    name: '',
    email: '',
    quantity: 1, // Default quantity
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errors, setErrors] = useState<Partial<PurchaseFormState>>({});
  const navigate = useNavigate();

  // 1. DYNAMIC DATA FETCHING: Find the product based on the ID
  const product = productsData.find(p => p.id === productId);

  // Fallback for when the product ID is not found
  if (!product) {
    return (
      <div style={{ backgroundColor: sectionBg }} className="min-h-screen p-10 text-center text-red-700">
        <h2 className="text-2xl">Error: Product with ID {productId} not found.</h2>
        <p>Please check the product data source.</p>
      </div>
    );
  }
  
  // --- Utility Functions ---

  const validateForm = (data: PurchaseFormState) => {
    const newErrors: Partial<PurchaseFormState> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      newErrors.email = 'A valid email is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Handlers ---

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'number' ? parseInt(value, 10) || 0 : value 
    }));
    
    setErrors(prev => ({ ...prev, [name]: undefined }));
    if (status === 'error') setStatus('idle');
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!validateForm(formData)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrors({}); 

    // *** CRUCIAL: Map form data to the backend payload ***
    const payload = {
      name: formData.name,
      email: formData.email,
      product: product.name, // Sending the name of the currently displayed product
      quantity: formData.quantity,
    };

    let success = false;
    
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                success = true;
                break; // Exit loop on success
            } else {
                // Server returned non-200
                const errorData = await response.json().catch(() => ({ message: 'Unknown server error' }));
                console.error(`Server submission failed on attempt ${attempt + 1}:`, errorData.message);
            }
        } catch (error) {
            // Network error (CORS, server down, etc.)
            console.error(`Network Error on attempt ${attempt + 1}:`, error);
        }

        // Apply exponential backoff delay before next retry
        if (!success && attempt < MAX_RETRIES - 1) {
            const delay = Math.pow(2, attempt) * 1000; // 1s, 2s
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }


    if (success) {
        setStatus('success');
        // Clear form data on successful submission, keep quantity at 1
        setFormData({ name: '', email: '', quantity: 1 }); 
    } else {
        // Final failure handling
        setStatus('error');
    }
  };

  // Helper component for dynamic benefit list
  const BenefitList: React.FC<{ benefits: string[] }> = ({ benefits }) => (
    <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1 text-sm">
      {benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>
  );

  return (
    <div style={{ backgroundColor: sectionBg }} className="min-h-screen pb-16">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* --- Header: Back Button --- */}
        <div className="mb-8">
          {/* Linked to the products list page route */}
          <p onClick={()=>navigate(-1)} className="flex items-center cursor-pointer text-lg font-medium" style={{ color: primaryTextColor }}>
            <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Back
          </p>
        </div>

        {/* --- Main Content Grid: Product Details (Left) and Form (Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT SIDE: Product Image and Details (Spans 2/3 of the width on large screens) */}
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-8">
            
            {/* Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold mb-1" style={{ color: primaryTextColor }}>
                {product.name}
              </h2>
              
              <p className="text-lg text-gray-600 mb-3">{product.tagline}</p>
              
              {/* Price and List Price */}
              <div className="flex items-center mb-6">
                <p className="text-3xl font-bold mr-3" style={{ color: primaryTextColor }}>
                  {product.price} ₹
                </p>
                <span className="text-sm text-gray-500 line-through">
                  Digital List Price: {product.listPrice} ₹
                </span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <Star style={{ color: starColor }} className="w-5 h-5 fill-current mr-1" aria-hidden="true" />
                <span className="text-xl font-semibold text-gray-800">{product.rating.toFixed(1)}</span>
              </div>
              
              {/* Benefits */}
              <div className="mt-4">
                <p className="text-lg font-semibold mb-2" style={{ color: primaryTextColor }}>
                  Benifits :
                </p>
                <BenefitList benefits={product.benefits} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Purchase Form (Spans 1/3 of the width on large screens) */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-xl h-fit">
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: primaryTextColor }}>
                Place Your Order
            </h3>

            <StatusMessage status={status} />
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="space-y-1">
                <label htmlFor="purchase-name" className="block text-md font-medium" style={{ color: labelColor }}>
                  Name
                </label>
                <input
                  type="text"
                  id="purchase-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base p-3 outline-none transition-colors`}
                  required
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label htmlFor="purchase-email" className="block text-md font-medium" style={{ color: labelColor }}>
                  Email
                </label>
                <input
                  type="email"
                  id="purchase-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base p-3 outline-none transition-colors`}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Quantity Input */}
              <div className="space-y-1">
                <label htmlFor="purchase-quantity" className="block text-md font-medium" style={{ color: labelColor }}>
                  Quantity
                </label>
                <input
                  type="number"
                  id="purchase-quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  defaultValue="1"
                  className={`block w-full rounded-lg border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base p-3 outline-none transition-colors`}
                  required
                />
                {errors.quantity && <p className="mt-1 text-xs text-red-500">{errors.quantity}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ backgroundColor: buttonBgColor }}
                  className="w-full justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-md text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  {status === 'loading' ? 'Sending Order...' : 'Buy Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchasePage;
