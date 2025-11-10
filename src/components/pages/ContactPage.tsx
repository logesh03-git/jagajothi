import React, { useState, useCallback } from 'react';
import { CheckCircle, XCircle } from 'lucide-react'; 

// Use a placeholder URL instead of a local file path
import SupportAgentImage from '../../assets/contact.jpg';

// --- Data Typing and Structure ---
interface ContactFormState {
  name: string;
  email: string;
  productName: string; 
  requirements: string; // New field for detailed inquiry
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

// --- Helper Component for Status Message (replaces alert/confirm) ---
const StatusMessage: React.FC<{ status: SubmissionStatus }> = ({ status }) => {
  if (status === 'success') {
    return (
      <div className="flex items-center p-3 mb-4 text-green-700 bg-green-100 rounded-md shadow-sm" role="alert">
        <CheckCircle className="w-5 h-5 mr-2" />
        <span className='text-sm font-medium'>Enquiry submitted successfully! We'll reach out to you within 24 hours.</span>
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className="flex items-center p-3 mb-4 text-red-700 bg-red-100 rounded-md shadow-sm" role="alert">
        <XCircle className="w-5 h-5 mr-2" />
        <span className='text-sm font-medium'>Submission failed. Please correct the errors and try again.</span>
      </div>
    );
  }
  return null;
};


const ContactPage: React.FC = () => {
  // Background color for the section
  const sectionBg = '#fffaf3';
  // Specific color for the form labels
  const labelColor = '#A8795A';
  // Specific background color for the "Enquiry now" button
  const buttonBgColor = '#97977E'; 
const API_URL = 'https://jagajothi-backend.vercel.app/contact';
  const MAX_RETRIES = 3;

  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    productName: '',
    requirements: '',
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
    if (!data.requirements.trim()) {
      newErrors.requirements = 'Please describe your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Handlers ---

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error immediately on change
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

    // The backend expects 'product', so map 'productName' to 'product' for the payload
    const payload = {
      name: formData.name,
      email: formData.email,
      product: formData.productName,
      requirements: formData.requirements,
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
                // Server returned non-200, log error but continue trying
                const errorData = await response.json().catch(() => ({ message: 'Unknown server error' }));
                console.error(`Server submission failed on attempt ${attempt + 1}:`, errorData.message);
            }
        } catch (error) {
            // Network error
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
        // Clear form data on successful submission
        setFormData({ name: '', email: '', productName: '', requirements: '' });
    } else {
        // Final failure handling
        setStatus('error');
    }
  };
  return (
    <section 
      style={{ backgroundColor: sectionBg }}
      className="py-12 sm:py-16 lg:py-20 flex justify-center"
      aria-labelledby="contact-form-heading"
    >
      <div className="w-full max-w-lg px-4 sm:px-6 lg:px-8">
        
        {/* --- Image at the Top --- */}
        <div className="mb-8 rounded-lg shadow-lg overflow-hidden">
          <img 
            src={SupportAgentImage} 
            alt="Friendly customer support agent wearing a headset and looking at a laptop" 
            className="w-full h-auto object-cover" 
          />
        </div> 

        <StatusMessage status={status} />
        {/* --- Form --- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Input */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-md font-medium" style={{ color: labelColor }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base p-3 outline-none transition-colors`}
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-md font-medium" style={{ color: labelColor }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your mail"
              className={`block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base p-3 outline-none transition-colors`}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Product Name Input */}
          <div className="space-y-1">
            <label htmlFor="productName" className="block text-md font-medium" style={{ color: labelColor }}>
              Product name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3 outline-none"
            />
          </div>

          {/* Requirements Textarea (NEW) */}
          <div className="space-y-1">
            <label htmlFor="requirements" className="block text-md font-medium" style={{ color: labelColor }}>
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={4} // Allows for multiple lines of input
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Briefly describe your requirements or detailed question here."
              className={`block w-full rounded-lg border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-gray-500 focus:ring-gray-500 text-base p-3 outline-none resize-none transition-colors`}
              required
            />
            {errors.requirements && <p className="mt-1 text-sm text-red-500">{errors.requirements}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{ backgroundColor: buttonBgColor }}
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-md text-sm font-medium rounded-md text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              {status === 'loading' ? 'Sending Enquiry...' : 'Enquiry now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;