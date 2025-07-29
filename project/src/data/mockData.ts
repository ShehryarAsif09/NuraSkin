import { BlogPost, BlogCategory } from '../types/blog';

export const categories: BlogCategory[] = [
  { id: '1', name: 'Skincare', slug: 'skincare', description: 'Essential skincare tips and routines', color: 'bg-pink-100 text-pink-800' },
  { id: '2', name: 'DIY', slug: 'diy', description: 'Homemade beauty recipes', color: 'bg-green-100 text-green-800' },
  { id: '3', name: 'Ingredients', slug: 'ingredients', description: 'Understanding skincare ingredients', color: 'bg-purple-100 text-purple-800' },
  { id: '4', name: 'Anti-Aging', slug: 'anti-aging', description: 'Age-defying skincare solutions', color: 'bg-blue-100 text-blue-800' },
  { id: '5', name: 'Acne Solutions', slug: 'acne-solutions', description: 'Clear skin strategies', color: 'bg-yellow-100 text-yellow-800' },
];

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Building Your Perfect Skincare Routine',
    slug: 'ultimate-guide-perfect-skincare-routine',
    excerpt: 'Discover the essential steps to create a personalized skincare routine that works for your unique skin type and concerns.',
    content: `<p>Creating the perfect skincare routine doesn't have to be complicated. With the right approach and understanding of your skin's needs, you can develop a regimen that delivers beautiful, healthy results.</p>

<h2>Understanding Your Skin Type</h2>
<p>The foundation of any great skincare routine starts with understanding your skin type. Whether you have dry, oily, combination, or sensitive skin, each type requires specific care and attention.</p>

<h3>The Basic Steps</h3>
<ol>
<li><strong>Cleanse:</strong> Start with a gentle cleanser that removes impurities without stripping your skin's natural oils.</li>
<li><strong>Tone:</strong> Use a balancing toner to prepare your skin for the next steps.</li>
<li><strong>Treat:</strong> Apply serums or treatments targeting specific concerns.</li>
<li><strong>Moisturize:</strong> Lock in hydration with a suitable moisturizer.</li>
<li><strong>Protect:</strong> Never skip sunscreen during your morning routine.</li>
</ol>

<p>Remember, consistency is key. It takes time for skincare products to show their full benefits, so be patient and stick to your routine for at least 6-8 weeks before making changes.</p>`,
    category: 'Skincare',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    author: 'Sarah Chen',
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['skincare routine', 'skincare basics', 'beauty tips'],
    metaDescription: 'Learn how to build the perfect skincare routine with our comprehensive guide. Expert tips for all skin types.',
    featured: true,
  },
  {
    id: '2',
    title: 'DIY Honey and Oatmeal Face Mask for Glowing Skin',
    slug: 'diy-honey-oatmeal-face-mask-glowing-skin',
    excerpt: 'Create a nourishing face mask at home using simple ingredients from your kitchen for naturally radiant skin.',
    content: `<p>Sometimes the best skincare solutions are right in your kitchen. This simple honey and oatmeal face mask is perfect for achieving that natural glow we all crave.</p>

<h2>Ingredients You'll Need</h2>
<ul>
<li>2 tablespoons rolled oats</li>
<li>1 tablespoon raw honey</li>
<li>1 teaspoon plain yogurt (optional)</li>
<li>A few drops of rose water</li>
</ul>

<h2>Benefits of Each Ingredient</h2>
<p><strong>Honey:</strong> A natural humectant that draws moisture to the skin while providing antibacterial properties.</p>
<p><strong>Oats:</strong> Gentle exfoliation that removes dead skin cells without irritation.</p>
<p><strong>Yogurt:</strong> Contains lactic acid for mild exfoliation and probiotics for skin health.</p>

<h2>How to Make and Apply</h2>
<ol>
<li>Grind the oats into a fine powder using a coffee grinder or food processor.</li>
<li>Mix with honey and yogurt until you have a smooth paste.</li>
<li>Add rose water if the mixture is too thick.</li>
<li>Apply to clean skin and leave for 15-20 minutes.</li>
<li>Rinse with warm water while gently massaging in circular motions.</li>
</ol>`,
    category: 'DIY',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    author: 'Emma Rodriguez',
    publishedAt: '2024-01-12',
    readTime: 5,
    tags: ['DIY skincare', 'face mask', 'natural beauty'],
    metaDescription: 'Make your own honey and oatmeal face mask for glowing skin with this easy DIY recipe using kitchen ingredients.',
    featured: true,
  },
  {
    id: '3',
    title: 'Retinol vs Retinoids: Understanding the Difference',
    slug: 'retinol-vs-retinoids-understanding-difference',
    excerpt: 'Confused about retinol and retinoids? Learn the key differences and which one is right for your anti-aging skincare routine.',
    content: `<p>When it comes to anti-aging skincare, few ingredients are as celebrated—and as confusing—as retinol and retinoids. Let's break down the differences and help you choose the right option for your skin.</p>

<h2>What Are Retinoids?</h2>
<p>Retinoids are a class of compounds derived from Vitamin A. They're the umbrella term that includes both over-the-counter and prescription options.</p>

<h2>Types of Retinoids</h2>
<h3>Over-the-Counter Options:</h3>
<ul>
<li><strong>Retinol:</strong> The most popular and gentle option</li>
<li><strong>Retinyl Palmitate:</strong> The mildest form, good for beginners</li>
<li><strong>Retinaldehyde:</strong> More potent than retinol but gentler than prescription options</li>
</ul>

<h3>Prescription Options:</h3>
<ul>
<li><strong>Tretinoin:</strong> The gold standard for anti-aging</li>
<li><strong>Adapalene:</strong> Originally for acne, now available OTC</li>
<li><strong>Tazarotene:</strong> The strongest option</li>
</ul>

<h2>Which Should You Choose?</h2>
<p>Start with retinol if you're new to retinoids. It's effective yet gentle enough for most skin types. As your skin builds tolerance, you can consider stronger options if needed.</p>`,
    category: 'Ingredients',
    image: 'https://images.pexels.com/photos/4041290/pexels-photo-4041290.jpeg',
    author: 'Dr. Michael Kim',
    publishedAt: '2024-01-10',
    readTime: 6,
    tags: ['retinol', 'anti-aging', 'skincare ingredients'],
    metaDescription: 'Learn the difference between retinol and retinoids to choose the best anti-aging ingredient for your skincare routine.',
    featured: false,
  },
  {
    id: '4',
    title: '10 Natural Ingredients for Glowing Skin',
    slug: '10-natural-ingredients-glowing-skin',
    excerpt: 'Discover powerful natural ingredients that can transform your skin and give you that coveted healthy glow.',
    content: `<p>Nature provides us with incredible ingredients that can transform our skin. These 10 natural powerhouses have been used for centuries and are now backed by modern science.</p>

<h2>1. Vitamin C from Kakadu Plum</h2>
<p>This Australian superfruit contains the highest concentration of vitamin C in the world - up to 100 times more than oranges. It brightens skin and boosts collagen production.</p>

<h2>2. Hyaluronic Acid from Plant Sources</h2>
<p>While often synthetic, plant-derived hyaluronic acid from wheat and soy provides the same incredible hydrating benefits, holding up to 1000 times its weight in water.</p>

<h2>3. Bakuchiol from Babchi Plant</h2>
<p>This natural retinol alternative provides anti-aging benefits without irritation. It's perfect for sensitive skin and safe during pregnancy.</p>

<h2>4. Niacinamide from Nicotinic Acid</h2>
<p>This form of vitamin B3 regulates oil production, minimizes pores, and improves skin texture. It's suitable for all skin types.</p>

<h2>5. Squalane from Olives</h2>
<p>This lightweight oil mimics our skin's natural sebum, providing deep hydration without clogging pores.</p>

<p>Incorporating these natural ingredients into your routine can provide powerful results while being gentle on your skin and the environment.</p>`,
    category: 'Ingredients',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    author: 'Dr. Sarah Chen',
    publishedAt: '2024-01-08',
    readTime: 7,
    tags: ['natural skincare', 'ingredients', 'glowing skin'],
    metaDescription: 'Discover 10 powerful natural ingredients that can transform your skin and give you a healthy, radiant glow.',
    featured: false,
  },
  {
    id: '5',
    title: 'The Science Behind Acne: Understanding Your Skin',
    slug: 'science-behind-acne-understanding-skin',
    excerpt: 'Learn the root causes of acne and discover evidence-based treatments that actually work for clearer skin.',
    content: `<p>Acne affects millions of people worldwide, yet many don't understand the science behind breakouts. Let's explore what really causes acne and how to treat it effectively.</p>

<h2>What Causes Acne?</h2>
<p>Acne develops when four key factors come together:</p>
<ol>
<li><strong>Excess sebum production:</strong> Hormones trigger oil glands to produce more sebum than needed</li>
<li><strong>Clogged pores:</strong> Dead skin cells don't shed properly, blocking hair follicles</li>
<li><strong>Bacterial growth:</strong> P. acnes bacteria multiply in the clogged, oil-rich environment</li>
<li><strong>Inflammation:</strong> Your immune system responds to the bacteria, causing redness and swelling</li>
</ol>

<h2>Evidence-Based Treatments</h2>
<h3>Topical Retinoids</h3>
<p>Tretinoin, adapalene, and tazarotene help normalize skin cell turnover and prevent clogged pores.</p>

<h3>Benzoyl Peroxide</h3>
<p>This antimicrobial agent kills P. acnes bacteria and helps prevent resistance when combined with antibiotics.</p>

<h3>Salicylic Acid</h3>
<p>This beta-hydroxy acid penetrates oil-filled pores and helps remove dead skin cells.</p>

<h2>The Importance of Patience</h2>
<p>Most acne treatments take 6-12 weeks to show significant improvement. Consistency is key to achieving clear skin.</p>`,
    category: 'Acne Solutions',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    author: 'Dr. Michael Kim',
    publishedAt: '2024-01-05',
    readTime: 9,
    tags: ['acne treatment', 'skincare science', 'clear skin'],
    metaDescription: 'Understand the science behind acne and discover evidence-based treatments for clearer, healthier skin.',
    featured: true,
  },
  {
    id: '6',
    title: 'Anti-Aging Skincare Routine for Your 30s',
    slug: 'anti-aging-skincare-routine-30s',
    excerpt: 'Your 30s are the perfect time to start a preventative anti-aging routine. Learn which ingredients to prioritize.',
    content: `<p>Your 30s mark a turning point in skincare. This is when collagen production begins to slow down, making it the perfect time to start a preventative anti-aging routine.</p>

<h2>Key Changes in Your 30s</h2>
<ul>
<li>Collagen production decreases by 1% per year</li>
<li>Cell turnover slows down</li>
<li>Fine lines may start to appear</li>
<li>Skin may become drier</li>
<li>Sun damage from your 20s becomes more visible</li>
</ul>

<h2>Essential Anti-Aging Ingredients</h2>
<h3>Morning Routine</h3>
<ol>
<li><strong>Vitamin C Serum:</strong> Protects against free radicals and brightens skin</li>
<li><strong>Hyaluronic Acid:</strong> Provides deep hydration</li>
<li><strong>Broad-spectrum SPF 30+:</strong> Prevents further sun damage</li>
</ol>

<h3>Evening Routine</h3>
<ol>
<li><strong>Retinol:</strong> Stimulates collagen production and cell turnover</li>
<li><strong>Peptides:</strong> Support skin structure and firmness</li>
<li><strong>Rich moisturizer:</strong> Repairs and nourishes overnight</li>
</ol>

<h2>Professional Treatments to Consider</h2>
<p>Regular facials, chemical peels, and microneedling can enhance your at-home routine and provide more dramatic results.</p>

<p>Remember, consistency is more important than perfection. Start slowly and build your routine gradually.</p>`,
    category: 'Anti-Aging',
    image: 'https://images.pexels.com/photos/4041290/pexels-photo-4041290.jpeg',
    author: 'Emma Rodriguez',
    publishedAt: '2024-01-03',
    readTime: 8,
    tags: ['anti-aging', '30s skincare', 'preventative care'],
    metaDescription: 'Learn how to build an effective anti-aging skincare routine in your 30s with the right ingredients and techniques.',
    featured: false,
  },
];