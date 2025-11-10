// ContactUsSection.tsx

import React, { useCallback, useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// Assume you're importing your support image.
// Replace with the actual path to your image.
import SupportAgentImage from '../assets/contact.jpg'; // e.g., an image of a support agent

interface ContactFormState {
  name: string;
  email: string;
  productName: string; // Changed 'product' to 'productName' for form consistency
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactUsSection: React.FC = () => {
  // Background color for the section, as provided
  const sectionBg = '#fffaf3';
  // Specific background color for the "Enquiry now" button
  const buttonBgColor = '#97977E'; // This color is derived visually from the image you provided.

  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    productName: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});

  // --- Utility Functions ---

  const validateForm = (data: ContactFormState) => {
    const newErrors: Partial<ContactFormState> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      newErrors.email = 'A valid email is required.';
    }
    // Note: ProductName is not strictly required but highly recommended for context
    // if (!data.productName.trim()) {
    //   newErrors.productName = 'Please specify a product or your query subject.';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Handlers ---

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error immediately on change
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!validateForm(formData)) {
      setStatus('error'); // Indicate error status temporarily
      return;
    }

    setStatus('loading');
    setErrors({}); // Clear old errors

    // The backend expects 'product', so map 'productName' to 'product' for the payload
    const payload = {
      name: formData.name,
      email: formData.email,
      product: formData.productName, 
    };

    // Retry configuration
    const MAX_RETRIES = 3;
    let success = false;
    
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
            const response = await fetch('https://jagajothi-backend.vercel.app/landing', {
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
                // Server returned non-200, maybe recoverable on retry
                const errorData = await response.json();
                console.error(`Server submission failed on attempt ${attempt + 1}:`, errorData);
            }
        } catch (error) {
            // Network error, try again after exponential backoff delay
            console.error(`Network Error on attempt ${attempt + 1}:`, error);
        }

        // Apply exponential backoff delay before next retry
        if (!success && attempt < MAX_RETRIES - 1) {
            const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }


    if (success) {
        setStatus('success');
        // Clear form data on successful submission
        setFormData({ name: '', email: '', productName: '' });
    } else {
        // Final failure handling
        setStatus('error');
    }
  };


  // --- Helper Component for Status Message (replaces alert/confirm) ---
  const StatusMessage: React.FC<{ status: SubmissionStatus }> = ({ status }) => {
    if (status === 'success') {
      return (
        <div className="flex items-center p-3 mb-4 text-green-700 bg-green-100 rounded-md shadow-sm">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span className='text-sm font-medium'>Enquiry submitted successfully! We'll be in touch shortly.</span>
        </div>
      );
    }
    if (status === 'error') {
      return (
        <div className="flex items-center p-3 mb-4 text-red-700 bg-red-100 rounded-md shadow-sm">
          <XCircle className="w-5 h-5 mr-2" />
          <span className='text-sm font-medium'>Submission failed. Please check your inputs and try again later.</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      style={{ backgroundColor: sectionBg }}
      className="py-12 sm:py-16 lg:py-20"
      aria-labelledby="contact-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 
            id="contact-us-heading" 
            className="font-bold tracking-tight text-4xl md:text-5xl text-[#6E684A] sm:text-4xl" // Darker text color derived visually
          >
            Contact Us
          </h2>
          <p className="mt-2 text-md text-[#A8795A] sm:text-lg"> {/* Slightly lighter brown for subtext */}
            Need support? Our dedicated team is ready to assist you.
          </p>
        </div>

        {/* Main Content Area: Form on left, Image on right */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2">
          <StatusMessage status={status} />
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3 outline-none"
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3 outline-none"
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Product Name Input */}
              <div>
                <label htmlFor="productName" className="block text-md font-medium text-gray-700">
                  Product name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="Enter product name"
                    value={formData.productName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3 outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ backgroundColor: buttonBgColor }}
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  {status === 'loading' ? 'Sending Enquiry...' : 'Enquiry now'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src={SupportAgentImage} 
              alt="Friendly customer support agent wearing a headset and looking at a laptop" 
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-none lg:w-[500px] h-auto object-cover" // Adjust max-w and w/h as needed for your desired image size
              onError={(e) => {
                // Fallback in case the placeholder image fails
                e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Available';
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;