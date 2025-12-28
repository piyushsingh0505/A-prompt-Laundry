// ============================================
// BLOG DATA ARRAY
// Contains all blog posts with complete information
// ============================================
const blogPosts = [
    {
        id: 1,
        title: "How to Wash Clothes Without Losing Color",
        description: "Discover expert techniques to keep your colorful garments vibrant and prevent fading. Learn the secrets to maintaining color integrity in your laundry routine.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        date: "2024-01-15",
        author: "Laundry Expert",
        category: "Washing Tips",
        readTime: "5 min read",
        content: {
            intro: "One of the most common laundry problems is color fading. Whether it's your favorite red shirt or vibrant blue jeans, nothing is more frustrating than watching colors fade after just a few washes. But fear not! With the right techniques and care, you can keep your colorful clothes looking vibrant for years to come.",
            sections: [
                {
                    heading: "Sort Your Laundry by Color",
                    text: "The golden rule of laundry is to separate your clothes. Sort them into three main categories: whites, darks, and colors. Washing dark colors with lights or colors can cause bleeding and fading. Always wash new colorful items separately for the first few washes as they're more likely to bleed."
                },
                {
                    heading: "Turn Clothes Inside Out",
                    text: "This simple trick protects the outer surface of your garments from friction and direct contact with detergent. By turning clothes inside out, you minimize color loss from rubbing against other items in the wash."
                },
                {
                    heading: "Use Cold Water",
                    text: "Hot water opens fabric fibers, allowing dye to escape. Always wash colored clothes in cold water (30°C or below). Cold water is gentler on fabrics and helps preserve colors while still effectively cleaning your clothes."
                },
                {
                    heading: "Choose Color-Safe Detergent",
                    text: "Invest in detergents specifically designed for colored fabrics. These detergents are formulated without bleach or harsh chemicals that strip color. Look for products labeled 'color-safe' or 'for colors'."
                },
                {
                    heading: "Avoid Overwashing",
                    text: "Washing clothes too frequently can accelerate color fading. Only wash when necessary, and spot clean minor stains instead of washing the entire garment. This reduces wear and color loss."
                },
                {
                    heading: "Air Dry When Possible",
                    text: "Heat from dryers can cause colors to fade faster. Whenever possible, air dry colored clothing, especially darker items. If you must use a dryer, use the lowest heat setting and remove items while they're still slightly damp."
                }
            ],
            conclusion: "By following these simple yet effective tips, you can significantly extend the life and vibrancy of your colorful wardrobe. Remember, prevention is always better than cure when it comes to maintaining garment colors. Treat your colored clothes with care, and they'll reward you with long-lasting beauty and vibrancy."
        }
    },
    {
        id: 2,
        title: "Dry Cleaning vs Normal Washing: What's the Difference?",
        description: "Understand when to choose dry cleaning over regular washing. Learn about the differences, benefits, and which garments require professional dry cleaning services.",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
        date: "2024-01-22",
        author: "Laundry Expert",
        category: "Dry Cleaning",
        readTime: "7 min read",
        content: {
            intro: "Many people wonder whether to dry clean or wash their clothes at home. The decision isn't always straightforward, and choosing the wrong method can damage expensive garments. Let's explore the key differences and help you make the right choice for your clothing.",
            sections: [
                {
                    heading: "What is Dry Cleaning?",
                    text: "Dry cleaning uses chemical solvents instead of water to clean clothes. The most common solvent is perchloroethylene (perc), though eco-friendly alternatives are available. This process is ideal for delicate fabrics that would be damaged by water and agitation."
                },
                {
                    heading: "Fabrics That Need Dry Cleaning",
                    text: "Silk, wool, cashmere, velvet, suede, and leather should typically be dry cleaned. These materials can shrink, stretch, or lose their shape when exposed to water. Additionally, structured garments like suits and formal dresses often require dry cleaning to maintain their shape and pressing."
                },
                {
                    heading: "Benefits of Dry Cleaning",
                    text: "Dry cleaning preserves fabric integrity, prevents shrinking, removes stubborn stains effectively, and maintains garment structure. It's particularly effective for oil-based stains that water-based cleaning can't handle. Professional pressing also gives clothes a crisp, professional appearance."
                },
                {
                    heading: "When Normal Washing Works",
                    text: "Regular washing is perfect for everyday items made from cotton, polyester, linen, and most synthetic blends. These fabrics are designed to withstand water, detergent, and machine agitation. Everyday casual wear, undergarments, and most home textiles should be machine or hand washed."
                },
                {
                    heading: "Check Care Labels",
                    text: "Always read garment care labels. They provide specific instructions: 'Dry Clean Only' means you should always dry clean, while 'Dry Clean Recommended' suggests dry cleaning for best results but home washing may be acceptable. 'Machine Wash' means you can safely wash at home."
                },
                {
                    heading: "Cost Considerations",
                    text: "Dry cleaning costs more than home washing, but it's an investment in preserving expensive garments. For everyday items, home washing is economical and practical. Consider dry cleaning for special occasions, expensive pieces, or when dealing with difficult stains."
                }
            ],
            conclusion: "The choice between dry cleaning and normal washing depends on fabric type, garment structure, and care label instructions. When in doubt, especially with expensive or delicate items, opt for professional dry cleaning. It's better to spend a little more on proper care than to risk ruining a favorite piece of clothing."
        }
    },
    {
        id: 3,
        title: "How Often Should You Wash Jeans?",
        description: "Discover the truth about washing jeans. Learn the ideal washing frequency to keep your denim clean without over-washing, which can damage the fabric and fade colors.",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
        date: "2024-02-01",
        author: "Laundry Expert",
        category: "Fabric Care",
        readTime: "6 min read",
        content: {
            intro: "Jeans are a wardrobe staple, but there's ongoing debate about how often they should be washed. Some people wash after every wear, while others go weeks or even months between washes. What's the right answer? Let's break it down based on expert advice and fabric care science.",
            sections: [
                {
                    heading: "The General Rule",
                    text: "Most denim experts recommend washing jeans every 4-6 wears, or when they're visibly dirty or smell. Washing too frequently can cause excessive fading, shrinkage, and wear. However, this varies based on activity level, climate, and personal preference."
                },
                {
                    heading: "Signs It's Time to Wash",
                    text: "Wash your jeans when they have visible stains, unpleasant odors, feel sticky or stiff, or after heavy sweating or physical activity. A quick sniff test is often the best indicator—if they smell less than fresh, it's time for a wash."
                },
                {
                    heading: "Spot Cleaning Between Washes",
                    text: "Extend time between full washes by spot cleaning minor stains with a damp cloth and mild soap. This addresses small issues without subjecting the entire garment to a full wash cycle, preserving color and fit."
                },
                {
                    heading: "How to Wash Jeans Properly",
                    text: "Turn jeans inside out, use cold water on a gentle cycle, skip the dryer (air dry instead), and avoid bleach or harsh detergents. Add a cup of white vinegar to the rinse cycle to help maintain color and eliminate odors naturally."
                },
                {
                    heading: "Freezing Jeans (Myth or Fact?)",
                    text: "The idea that freezing jeans kills bacteria is partially true but not a replacement for washing. Freezing can reduce some odor-causing bacteria, but it doesn't remove dirt, oils, or all microorganisms. It's a temporary measure, not a cleaning solution."
                },
                {
                    heading: "Special Considerations",
                    text: "Raw or unwashed denim requires special care—wash as infrequently as possible (every 6 months for some enthusiasts). Stretchy jeans with spandex may need more frequent washing. Work jeans exposed to heavy dirt should be washed after each use."
                }
            ],
            conclusion: "The key to maintaining great-looking jeans is finding the right balance. Don't overwash, but don't wait too long either. Listen to your jeans—if they look and smell clean, they probably are. With proper care, your favorite pair of jeans can last for years while maintaining their fit and color."
        }
    },
    {
        id: 4,
        title: "Laundry Tips During Monsoon Season",
        description: "Keep your clothes fresh and mold-free during humid monsoon weather. Essential tips for drying, storing, and caring for your laundry when humidity is high.",
        image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&q=80",
        date: "2024-02-10",
        author: "Laundry Expert",
        category: "Seasonal Care",
        readTime: "8 min read",
        content: {
            intro: "Monsoon season brings high humidity, frequent rain, and challenging conditions for laundry care. Clothes take longer to dry, mold and mildew can develop, and that fresh laundry smell can be hard to achieve. But with the right strategies, you can keep your clothes clean, fresh, and damage-free throughout the rainy season.",
            sections: [
                {
                    heading: "Faster Drying Strategies",
                    text: "Use a dehumidifier in your laundry room to reduce moisture and speed up drying. If using a dryer, add dry towels to the load to absorb excess moisture. For air drying, place clothes near a fan or in a well-ventilated area. Avoid hanging wet clothes in closed spaces where air can't circulate."
                },
                {
                    heading: "Prevent Mold and Mildew",
                    text: "The biggest monsoon challenge is preventing mold and mildew. Never leave wet clothes in the washer overnight—transfer immediately to dryer or hang. Add a cup of white vinegar to the rinse cycle to inhibit mold growth. Use moisture-absorbing products like silica gel packets in closets."
                },
                {
                    heading: "Proper Storage",
                    text: "Store only completely dry clothes in closets and drawers. Ensure good air circulation by not overstuffing storage spaces. Use cedar blocks or moisture absorbers in wardrobes. Consider using padded hangers to prevent shoulder bumps that can trap moisture."
                },
                {
                    heading: "Extra Rinse Cycle",
                    text: "During monsoon, use an extra rinse cycle to ensure all detergent is removed. Detergent residue can trap moisture and create a musty smell. This extra step prevents clothes from feeling sticky or developing odors later."
                },
                {
                    heading: "Indoor Drying Tips",
                    text: "When forced to dry indoors, spread clothes on drying racks in the driest room of your house. Use a fan to circulate air. Turn clothes inside out to expose more surface area. Separate items so they don't touch—this allows better air flow around each piece."
                },
                {
                    heading: "Quick-Dry Fabrics",
                    text: "During monsoon season, prioritize wearing quick-dry synthetic fabrics or moisture-wicking materials. Save heavy cotton items for drier weather. These fabrics dry faster and are less prone to developing musty smells when drying conditions are poor."
                },
                {
                    heading: "Emergency Measures",
                    text: "If clothes develop a musty smell, wash again with baking soda added to the detergent. For persistent odors, soak clothes in a solution of water and white vinegar before washing. Use a fabric refresher spray between washes if needed, but address the root cause—incomplete drying."
                }
            ],
            conclusion: "Monsoon season requires extra diligence in laundry care, but these strategies will help you maintain fresh, clean clothes even when humidity is high. The key is ensuring complete drying and preventing moisture buildup. With patience and the right techniques, you can keep your wardrobe in perfect condition throughout the rainy season."
        }
    },
    {
        id: 5,
        title: "Common Laundry Mistakes to Avoid",
        description: "Learn about the most common laundry mistakes that damage clothes, waste money, and waste time. Avoid these errors to keep your wardrobe in top condition.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        date: "2024-02-18",
        author: "Laundry Expert",
        category: "Best Practices",
        readTime: "9 min read",
        content: {
            intro: "We all do laundry regularly, but many of us are making mistakes that damage our clothes, waste money on replacement items, and don't achieve the best cleaning results. By identifying and correcting common laundry errors, you can extend the life of your wardrobe and save money in the long run.",
            sections: [
                {
                    heading: "Using Too Much Detergent",
                    text: "More detergent doesn't mean cleaner clothes. Excess detergent can leave residue, attract dirt, and cause skin irritation. It also wastes money. Follow the detergent's instructions and use measuring caps. Modern detergents are concentrated—a little goes a long way. Use 1-2 tablespoons for most loads."
                },
                {
                    heading: "Ignoring Care Labels",
                    text: "Care labels exist for a reason—they tell you exactly how to care for each garment. Ignoring them can lead to shrinking, fading, stretching, or permanent damage. Always check labels before washing, especially for new items or expensive pieces."
                },
                {
                    heading: "Overstuffing the Washer",
                    text: "Cramming too many clothes into the washer prevents proper cleaning and rinsing. Clothes need room to move and water needs space to circulate. Load should be loosely filled—about ¾ full maximum. If you can't easily fit your hand into the drum, you've overloaded it."
                },
                {
                    heading: "Not Sorting Properly",
                    text: "Washing all clothes together can cause color bleeding, fabric damage, and poor cleaning. Always sort by color (whites, darks, colors) and fabric type. Wash delicates separately. Heavy items like towels should be washed with similar items, not with delicate fabrics."
                },
                {
                    heading: "Using Hot Water for Everything",
                    text: "Hot water is only needed for whites and heavily soiled items. Most clothes should be washed in cold water, which saves energy and prevents shrinking and fading. Reserve hot water for disinfecting needs or when specifically recommended by care labels."
                },
                {
                    heading: "Forgetting to Check Pockets",
                    text: "Checking pockets prevents disaster. Pens, lip balms, tissues, and money can damage clothes and stain entire loads. Make it a habit to check every pocket before loading items into the washer. This simple step saves time, money, and frustration."
                },
                {
                    heading: "Overdrying Clothes",
                    text: "Leaving clothes in the dryer too long causes shrinkage, fading, and unnecessary wear. Remove clothes when they're still slightly damp, especially natural fibers. This also reduces wrinkles. Use dryer balls to speed up drying and reduce static."
                },
                {
                    heading: "Not Cleaning the Washer",
                    text: "A dirty washer can't clean clothes properly. Run an empty cycle with hot water and vinegar monthly to remove buildup, mildew, and odors. Clean the lint filter regularly. This ensures your machine works efficiently and clothes come out truly clean."
                },
                {
                    heading: "Treating All Stains the Same",
                    text: "Different stains require different treatments. Grease needs dish soap, protein stains need cold water, and ink needs alcohol-based solutions. Always blot, never rub. Treat stains immediately for best results. Keep a stain removal guide handy for reference."
                }
            ],
            conclusion: "Avoiding these common laundry mistakes will significantly improve your clothing's longevity and appearance. Take time to read labels, sort properly, use appropriate amounts of detergent, and follow best practices. Your clothes—and your wallet—will thank you. Good laundry habits are an investment in your wardrobe that pays dividends over time."
        }
    }
];

// ============================================
// RENDER BLOG CARDS ON BLOGS.HTML
// ============================================
function renderBlogCards() {
    const blogsGrid = document.getElementById('blogsGrid');
    
    if (!blogsGrid) {
        return; // Not on blogs.html page
    }

    // Sort blogs by date (newest first)
    const sortedBlogs = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

    blogsGrid.innerHTML = sortedBlogs.map(blog => `
        <article class="blog-card">
            <div class="blog-card-image">
                <img src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80';">
                <span class="blog-category">${blog.category}</span>
            </div>
            <div class="blog-card-content">
                <div class="blog-meta">
                    <span class="blog-date">
                        <i class="far fa-calendar"></i>
                        ${formatDate(blog.date)}
                    </span>
                    <span class="blog-read-time">
                        <i class="far fa-clock"></i>
                        ${blog.readTime}
                    </span>
                </div>
                <h2 class="blog-card-title">${blog.title}</h2>
                <p class="blog-card-description">${blog.description}</p>
                <div class="blog-card-footer">
                    <span class="blog-author">
                        <i class="far fa-user"></i>
                        ${blog.author}
                    </span>
                    <a href="blog-detail.html?id=${blog.id}" class="btn btn-primary btn-read-more">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// ============================================
// LOAD BLOG DETAIL ON BLOG-DETAIL.HTML
// ============================================
function loadBlogDetail() {
    // Get blog ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'));

    if (!blogId) {
        // Redirect to blogs page if no ID provided
        window.location.href = 'blogs.html';
        return;
    }

    // Find the blog post
    const blog = blogPosts.find(post => post.id === blogId);

    if (!blog) {
        // Blog not found, redirect to blogs page
        window.location.href = 'blogs.html';
        return;
    }

    // Render the blog detail page
    renderBlogDetail(blog);
}

// ============================================
// RENDER BLOG DETAIL PAGE
// ============================================
function renderBlogDetail(blog) {
    // Update page title
    document.title = `${blog.title} | Aprompt Laundry Blog`;

    // Find the blog content container
    const blogContent = document.getElementById('blogContent');
    if (!blogContent) {
        return; // Not on blog-detail.html page
    }

    // Build sections HTML
    const sectionsHTML = blog.content.sections.map(section => `
        <div class="blog-section">
            <h2>${section.heading}</h2>
            <p>${section.text}</p>
        </div>
    `).join('');

    // Render full blog content
    blogContent.innerHTML = `
        <article class="blog-detail">
            <div class="blog-detail-header">
                <span class="blog-category-badge">${blog.category}</span>
                <h1 class="blog-detail-title">${blog.title}</h1>
                <div class="blog-detail-meta">
                    <div class="blog-author-info">
                        <div class="author-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="author-details">
                            <span class="author-name">${blog.author}</span>
                            <span class="blog-date-time">
                                <i class="far fa-calendar"></i>
                                ${formatDate(blog.date)} • 
                                <i class="far fa-clock"></i>
                                ${blog.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="blog-featured-image">
                <img src="${blog.image}" alt="${blog.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80';">
            </div>

            <div class="blog-detail-body">
                <p class="blog-intro">${blog.content.intro}</p>
                
                ${sectionsHTML}
                
                <div class="blog-conclusion">
                    <p>${blog.content.conclusion}</p>
                </div>
            </div>
        </article>
    `;

    // Load related blogs (exclude current blog)
    renderRelatedBlogs(blog.id);
}

// ============================================
// RENDER RELATED BLOGS
// ============================================
function renderRelatedBlogs(currentBlogId) {
    const relatedBlogsContainer = document.getElementById('relatedBlogs');
    
    if (!relatedBlogsContainer) {
        return; // Not on blog-detail.html page
    }

    // Get 3 related blogs (excluding current blog)
    const relatedBlogs = blogPosts
        .filter(blog => blog.id !== currentBlogId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    if (relatedBlogs.length === 0) {
        relatedBlogsContainer.innerHTML = '<p>No related articles available.</p>';
        return;
    }

    relatedBlogsContainer.innerHTML = relatedBlogs.map(blog => `
        <article class="blog-card">
            <div class="blog-card-image">
                <img src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80';">
                <span class="blog-category">${blog.category}</span>
            </div>
            <div class="blog-card-content">
                <div class="blog-meta">
                    <span class="blog-date">
                        <i class="far fa-calendar"></i>
                        ${formatDate(blog.date)}
                    </span>
                    <span class="blog-read-time">
                        <i class="far fa-clock"></i>
                        ${blog.readTime}
                    </span>
                </div>
                <h2 class="blog-card-title">${blog.title}</h2>
                <p class="blog-card-description">${blog.description}</p>
                <div class="blog-card-footer">
                    <span class="blog-author">
                        <i class="far fa-user"></i>
                        ${blog.author}
                    </span>
                    <a href="blog-detail.html?id=${blog.id}" class="btn btn-primary btn-read-more">
                        Read More
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format date from YYYY-MM-DD to readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and render accordingly
    if (document.getElementById('blogsGrid')) {
        renderBlogCards();
    } else if (document.getElementById('blogContent')) {
        loadBlogDetail();
    }
});

