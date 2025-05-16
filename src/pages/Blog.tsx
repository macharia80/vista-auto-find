
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FileText, Clock, Search, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  // Example blog posts data
  const featuredPost = {
    id: 1,
    title: "Top 10 Tips for Buying a Used Car in 2025",
    excerpt: "Avoid costly mistakes and find the perfect used car with our comprehensive guide to the used car market in 2025.",
    category: "Buying Guide",
    date: "May 12, 2025",
    author: "John Smith",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    readTime: "8 min read"
  };
  
  const recentPosts = [
    {
      id: 2,
      title: "Electric vs. Hybrid Cars: Which Is Right For You?",
      excerpt: "An in-depth comparison of electric and hybrid vehicles to help you make the most environmentally friendly and economical choice.",
      category: "Technology",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "How to Negotiate the Best Deal When Buying a Car",
      excerpt: "Learn essential negotiation tactics to save thousands on your next car purchase with these expert tips.",
      category: "Finance",
      date: "April 28, 2025",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Car Maintenance Schedule: What to Do and When",
      excerpt: "Keep your vehicle running smoothly with this comprehensive maintenance schedule for all types of cars.",
      category: "Maintenance",
      date: "April 21, 2025",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      readTime: "7 min read"
    }
  ];
  
  const popularPosts = [
    {
      id: 5,
      title: "Best Family SUVs for 2025",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Should You Buy or Lease Your Next Car?",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1518987048-93e29699e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 7,
      title: "Understanding Car Insurance: A Beginner's Guide",
      date: "April 1, 2025",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      title: "How to Sell Your Car for the Best Price",
      date: "March 25, 2025",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    }
  ];
  
  const categories = [
    { name: "Buying Guide", count: 12 },
    { name: "Selling Tips", count: 8 },
    { name: "Maintenance", count: 15 },
    { name: "Finance", count: 10 },
    { name: "Technology", count: 7 },
    { name: "Industry News", count: 14 }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main content */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Car Hub Blog</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Expert tips, guides, and news about buying, selling, and maintaining vehicles
          </p>
          
          {/* Featured Post */}
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <Badge className="mb-3 w-fit bg-orange text-white hover:bg-orange/90">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center text-white/80 text-sm">
                  <img 
                    src={featuredPost.authorImage} 
                    alt={featuredPost.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {featuredPost.excerpt}
            </p>
            
            <Button className="bg-orange hover:bg-orange/90 text-white">
              Read Full Article
            </Button>
          </div>
          
          {/* Recent Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange text-white hover:bg-orange/90">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <div className="text-sm text-gray-500 flex items-center mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link to="#" className="text-orange hover:text-orange/80 text-sm font-medium flex items-center">
                      Read More
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="bg-navy text-white p-8 rounded-lg mb-12">
            <div className="max-w-lg mx-auto text-center">
              <FileText className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="mb-6 text-gray-300">
                Get the latest automotive news, reviews, and buying guides delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-orange hover:bg-orange/90 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles"
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4">
              {categories.map((category, index) => (
                <React.Fragment key={category.name}>
                  <div className="flex justify-between py-2">
                    <Link to="#" className="text-gray-700 dark:text-gray-300 hover:text-orange">
                      {category.name}
                    </Link>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      ({category.count})
                    </span>
                  </div>
                  {index < categories.length - 1 && (
                    <Separator className="my-1" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Popular Posts */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 space-y-4">
              {popularPosts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <div className="flex gap-3">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        <Link to="#" className="hover:text-orange">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  {index < popularPosts.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Car Buying", "SUVs", "Electric Cars", "Finance", "Maintenance", "Car Insurance", 
                "Safety", "Technology", "Family Cars", "Luxury Cars"].map((tag) => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
