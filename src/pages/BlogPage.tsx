import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  image: string;
  url: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Como atrair mais clientes com marketing digital",
    summary: "Descubra estratégias práticas para gerar mais leads e aumentar suas vendas usando o marketing digital.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    url: "/blog/marketing-digital-clientes",
    date: "26 de Junho de 2025"
  },
  {
    id: 2,
    title: "SEO em 2025: o que realmente importa?",
    summary: "Veja quais são os fatores de ranqueamento mais importantes para o Google hoje e como aplicá-los.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    url: "/blog/seo2025",
    date: "20 de Junho de 2025"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-dark-900 via-dark-600 to-dark-500 min-h-screen text-white pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-300">
            Dicas, novidades e estratégias para você dominar o marketing digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white text-black rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-800">{post.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                <p className="text-gray-800 mb-4">{post.summary}</p>
                <Link
                  to={post.url}
                  className="text-green-600 font-semibold hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
