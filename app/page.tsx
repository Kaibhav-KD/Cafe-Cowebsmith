import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Coffee beans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6"
          >
            Welcome to Café Delight
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Experience the perfect blend of tradition and innovation
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="btn-primary"
          >
            Explore Our Menu
          </motion.button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Signature Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Espresso Delight",
              description: "Rich and bold espresso with a perfect crema",
              image: "https://images.unsplash.com/photo-1511920170033-f839b4c1d888"
            },
            {
              title: "Matcha Latte",
              description: "Premium matcha with creamy steamed milk",
              image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9"
            },
            {
              title: "Caramel Macchiato",
              description: "Espresso with vanilla and caramel",
              image: "https://images.unsplash.com/photo-1561047029-3000c68339ca"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
} 
