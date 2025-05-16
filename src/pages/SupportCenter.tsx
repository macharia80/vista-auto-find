
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  Search, 
  Info,
  Clipboard, 
  DollarSign, 
  Car, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const SupportCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const faqs = [
    {
      id: 1,
      question: "How do I list my car for sale?",
      answer: "To list your car for sale, navigate to the 'Sell Your Car' page from the top navigation menu. Fill in all the required information about your vehicle including make, model, year, condition, photos, and your asking price. Once submitted, your listing will be reviewed and published within 24 hours."
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards (Visa, Mastercard), PayPal, M-Pesa, Absa, and Standard Chartered Bank transfers. All payments are securely processed and protected with industry-standard encryption."
    },
    {
      id: 3,
      question: "How do I contact a seller?",
      answer: "When viewing a car listing, you'll see a 'Contact Seller' button. Click on it to send a message directly to the seller through our secure messaging system. Your contact information remains private until you decide to share it."
    },
    {
      id: 4,
      question: "Is there a fee for listing my car?",
      answer: "Basic listings are free for individual sellers. We also offer premium listing options that include featured placement, highlighted listings, and extended visibility for a small fee. Dealerships have different pricing plans available."
    },
    {
      id: 5,
      question: "How long will my listing stay active?",
      answer: "Standard listings remain active for 30 days. If your car hasn't sold within that time, you can renew your listing with a single click. Premium listings have longer durations depending on the package chosen."
    },
    {
      id: 6,
      question: "How do I know if a listing is legitimate?",
      answer: "We verify all sellers through a comprehensive verification process. Look for the 'Verified Seller' badge on listings. Additionally, we provide vehicle history reports for many listings, and our secure messaging system helps protect against fraud."
    },
    {
      id: 7,
      question: "Can I edit my listing after it's published?",
      answer: "Yes, you can edit your listing at any time through your seller dashboard. Simply log in to your account, navigate to 'My Listings', and select the 'Edit' option for the listing you wish to modify."
    },
    {
      id: 8,
      question: "What happens after I purchase a car?",
      answer: "After completing a purchase, you'll receive a confirmation email with all transaction details. For the transfer of ownership, we provide a step-by-step guide and necessary documentation templates to ensure a smooth process."
    }
  ];
  
  const toggleFaq = (id: number) => {
    setExpandedFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond shortly.",
    });
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Support Center</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get answers to your questions and find help with using our car marketplace
        </p>
      </div>
      
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search for help articles, FAQs, or topics..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Car className="h-12 w-12 text-orange mb-4" />
            <h3 className="font-semibold text-lg mb-2">Buying & Selling</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Tips for buying or selling your vehicle
            </p>
            <Link to="#buying-section" className="text-orange hover:text-orange/80 text-sm">
              Learn More
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <DollarSign className="h-12 w-12 text-orange mb-4" />
            <h3 className="font-semibold text-lg mb-2">Payments</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Payment methods and security info
            </p>
            <Link to="#payment-section" className="text-orange hover:text-orange/80 text-sm">
              Learn More
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Clipboard className="h-12 w-12 text-orange mb-4" />
            <h3 className="font-semibold text-lg mb-2">Documentation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Vehicle paperwork and legal guides
            </p>
            <Link to="#docs-section" className="text-orange hover:text-orange/80 text-sm">
              Learn More
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Info className="h-12 w-12 text-orange mb-4" />
            <h3 className="font-semibold text-lg mb-2">Account Help</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Login, registration and profile help
            </p>
            <Link to="#account-section" className="text-orange hover:text-orange/80 text-sm">
              Learn More
            </Link>
          </CardContent>
        </Card>
      </div>
      
      {/* Tabs Section */}
      <Tabs defaultValue="faqs" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="faqs">Frequently Asked Questions</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faqs">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    {expandedFaqs.includes(faq.id) ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  
                  {expandedFaqs.includes(faq.id) && (
                    <div className="p-4 bg-white dark:bg-gray-900">
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't find what you're looking for?
              </p>
              <Link to="#contact-form">
                <Button className="bg-orange hover:bg-orange/90 text-white">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contact">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="lg:col-span-2">
              <div id="contact-form">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={contactForm.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={contactForm.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-orange hover:bg-orange/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      46 Tausilane<br />
                      Ongata Rongai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-orange h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      +254740036785
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-orange h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      mrmachariaorsam@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-orange h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 3pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="text-center">
                <p className="font-medium mb-3">Follow Us</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange dark:text-gray-400 dark:hover:text-orange" aria-label="Facebook">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/masarietsuma/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange dark:text-gray-400 dark:hover:text-orange" aria-label="Instagram">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange dark:text-gray-400 dark:hover:text-orange" aria-label="Twitter">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Help Topics */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card id="buying-section">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Car className="mr-2 h-5 w-5 text-orange" />
                Buying a Car
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">How to search for cars</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Vehicle inspection checklist</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Understanding car history reports</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Test drive tips</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Negotiating prices</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card id="selling-section">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-orange" />
                Selling Your Car
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Creating an effective listing</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Taking great photos</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Setting the right price</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Meeting with potential buyers</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Safety tips for test drives</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card id="payment-section">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-orange" />
                Payments & Security
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Secure payment methods</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Avoiding scams and fraud</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Using escrow services</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Payment protection</Link>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <Link to="#" className="hover:text-orange">Transaction safety guide</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-navy text-white rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <MessageSquare className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="mb-6">
            Our support team is available 7 days a week to help with any questions you might have about buying, selling, or using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Chat With Us
            </Button>
            <Link to="/pricing-guide">
              <Button className="bg-orange hover:bg-orange/90 text-white">
                Browse Help Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
