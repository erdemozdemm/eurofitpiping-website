export interface BlogPost {
  slug: string
  titleKey: string // Corresponds to blogPage.posts.[slug].title
  date: string // YYYY-MM-DD
  authorKey: string // e.g., "blogPage.authorDefault" or a specific author key
  imageQuery?: string // For placeholder image generation
  imageSrc: string,
  excerptKey: string // Corresponds to blogPage.posts.[slug].excerpt
  content: string // Actual Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanife-marine",
    titleKey: "blogPage.posts.cuanife-marine.title",
    date: "2025-06-10",
    authorKey: "blogPage.authorDefault",
    imageQuery: "CuNiFe pipe fittings on a ship",
    imageSrc: "/images/blog/blog_post1.png",
    excerptKey: "blogPage.posts.cuanife-marine.excerpt",
    content: `
CuNiFe (Copper-Nickel-Iron) alloys, particularly **90/10 and 70/30 compositions**, are renowned for their outstanding performance in marine environments. Their inherent resistance to seawater corrosion, biofouling, and erosion makes them a prime choice for shipbuilding and offshore applications.

### Key Advantages:
*   **Corrosion Resistance**: Exceptional in saltwater.
*   **Biofouling Resistance**: Reduces marine growth attachment.
*   **Durability**: Long service life in harsh conditions.

Eurofit Piping's cold-formed CuNiFe fittings offer enhanced structural integrity and precise dimensions, ensuring long-lasting, leak-free systems for critical applications like:
- Seawater cooling systems
- Fire mains
- Desalination plants

The cold forming process further improves the material's grain structure, contributing to its overall strength and reliability under pressure. This makes them superior to traditionally manufactured fittings in many aspects.
    `,
  },
  {
    slug: "cold-forming-vs-welding",
    titleKey: "blogPage.posts.cold-forming-vs-welding.title",
    date: "2025-05-22",
    authorKey: "blogPage.authorDefault",
    imageQuery: "comparison of cold formed vs welded pipe",
    imageSrc: "/images/blog/blog_post2.png",
    excerptKey: "blogPage.posts.cold-forming-vs-welding.excerpt",
    content: `
Traditional pipe fitting manufacturing often involves welding segments together. This can introduce several challenges:
*   **Heat-Affected Zones (HAZs)**: These areas can have altered material properties and may be more susceptible to corrosion or failure.
*   **Potential Weak Points**: Welds themselves can be points of weakness if not executed perfectly.
*   **Post-Weld Operations**: Extensive cleaning, grinding, and inspection are often required, adding time and cost.

## The Cold Forming Advantage

Cold forming, on the other hand, shapes fittings from a single piece of material (a blank) at room temperature using immense pressure. This process offers significant benefits:

| Feature             | Cold Forming                     | Traditional Welding              |
|---------------------|----------------------------------|----------------------------------|
| **Material Integrity** | Enhanced (work hardening)        | Can be compromised in HAZs       |
| **Weak Points**     | None (seamless)                  | Weld seams                       |
| **Internal Surface**| Smooth, promoting better flow    | Can be rough, requiring finishing|
| **Dimensional Accuracy**| High, consistent tolerances    | Variable, depends on weld quality|
| **Production Speed**| Generally faster                 | Slower due to multi-step process |

Eurofit's cold forming technology results in fittings with superior dimensional accuracy, a smoother internal surface for better flow, and faster production times. This offers a significant advantage in terms of quality, performance, and cost-effectiveness.
    `,
  },
  {
    slug: "cnc-integration-2025",
    titleKey: "blogPage.posts.cnc-integration-2025.title",
    date: "2025-04-15",
    authorKey: "blogPage.authorDefault",
    imageQuery: "CNC machine in a factory setting",
    imageSrc: "/images/blog/blog_post3.png",
    excerptKey: "blogPage.posts.cnc-integration-2025.excerpt",
    content: `
As part of our ongoing commitment to innovation and quality, Eurofit Piping is excited to announce the successful integration of new advanced **CNC (Computer Numerical Control)** machining centers into our production line in early 2025.

### What This Means for Our Customers:
1.  **Even Tighter Tolerances**: CNC machining allows for unparalleled precision, ensuring our fittings meet the most stringent specifications.
2.  **Complex Custom Geometries**: We can now produce more intricate and specialized custom parts with greater ease and accuracy.
3.  **Faster Turnaround Times**: For specialized fittings requiring secondary machining, CNC integration streamlines the process.
4.  **Enhanced Quality Control**: Automated precision reduces the margin for error.

The synergy between our state-of-the-art cold forming presses and precision CNC machining ensures that Eurofit continues to deliver pipe fittings that meet the most demanding specifications across all industries we serve. This investment underscores our dedication to providing cutting-edge solutions to our valued clients.

Stay tuned for more updates on how Eurofit Piping is shaping the future of pipe fitting manufacturing!
    `,
  },
]

// Helper function to get all posts (simulates fetching)
export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Helper function to get a single post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}
