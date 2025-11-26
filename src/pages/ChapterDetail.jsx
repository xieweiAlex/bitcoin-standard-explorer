import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { chapters } from '../data/chapters';

// Normalize colon-delimited strings into nested nodes
const normalizeArguments = (items) => {
  if (!Array.isArray(items)) return [];
  const normalized = [];
  let currentParent = null;
  items.forEach((item) => {
    if (typeof item === 'string') {
      const trimmed = item.trim();
      const isParent = /:\s*$/.test(trimmed);
      if (isParent) {
        currentParent = { text: trimmed.replace(/:\s*$/, ''), children: [] };
        normalized.push(currentParent);
      } else if (currentParent) {
        currentParent.children.push(trimmed);
      } else {
        normalized.push(trimmed);
      }
    } else if (item && typeof item === 'object') {
      currentParent = null;
      const text = item.text || item.title || '';
      const children = item.children || item.items || [];
      normalized.push({ text, children });
    }
  });
  return normalized;
};

// Recursive renderer for nested arguments
const ArgumentList = ({ items, level = 0 }) => {
  if (!Array.isArray(items) || items.length === 0) return null;
  const normalized = normalizeArguments(items);
  const indentClass = level === 0 ? 'mt-3' : 'mt-2 ml-4 sm:ml-6';
  return (
    <ul className={`list-disc list-inside text-content-color ${indentClass} text-sm sm:text-base text-left`}>
      {normalized.map((item, idx) => {
        if (typeof item === 'string') {
          return <li key={idx} className="mb-1">{item}</li>;
        }
        if (item && typeof item === 'object') {
          const text = item.text || '';
          const children = item.children || [];
          return (
            <li key={idx} className="mb-1">
              {text}
              {Array.isArray(children) && children.length > 0 && (
                <ArgumentList items={children} level={level + 1} />
              )}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

const ChapterDetail = () => {
  const { id } = useParams();
  const [expanded, setExpanded] = useState(new Set());

  const chapter = useMemo(() => {
    return chapters.find((c) => String(c.id) === String(id));
  }, [id]);

  if (!chapter) {
    return (
      <section className="section py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-title font-bold mb-6">Chapter Not Found</h2>
          <p className="mb-6">We couldn't find the chapter you were looking for.</p>
          <Link to="/" className="btn btn-primary">← Back to Explorer</Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="section py-12 bg-gradient-to-b from-white to-gray-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0v24M0 12h24' stroke='%23718096' stroke-opacity='0.06'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero header */}
          <div className="mb-10 text-center">
            <span className="inline-block px-3 py-1 bg-bitcoin-orange text-white rounded-full text-xs sm:text-sm font-bold mb-3">Chapter {chapter.id}</span>
            <h2 className="font-title font-bold text-2xl sm:text-3xl lg:text-4xl text-title-color mb-2">{chapter.title}</h2>
            <div className="bg-white/70 backdrop-blur rounded-xl shadow p-5 sm:p-6 lg:p-8">
              <p className="font-description text-description-color text-base sm:text-lg lg:text-xl">{chapter.summary}</p>
            </div>
          </div>

          {/* Key Ideas grid */}
          <div>
            <h3 className="text-center text-title-color font-title font-bold text-xl sm:text-2xl lg:text-3xl mb-6">Key Ideas</h3>
            {Array.isArray(chapter.keyIdeas) && chapter.keyIdeas.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center md:justify-items-center mx-auto max-w-6xl">
                {chapter.keyIdeas.map((idea, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white to-[#FFF6E9] shadow-sm hover:shadow-md p-4 sm:p-5 lg:p-6 text-center"
                  >
                    <button
                      type="button"
                      aria-expanded={expanded.has(idx)}
                      onClick={() => {
                        setExpanded((prev) => {
                          const next = new Set(prev);
                          if (next.has(idx)) next.delete(idx); else next.add(idx);
                          return next;
                        });
                      }}
                      className="w-full flex items-start justify-between text-center"
                    >
                      <div className="pr-3 w-full">
                        <h4 className="font-title font-bold text-lg sm:text-xl text-title-color">{idea.title}</h4>
                        <div className="mt-1 h-1 w-12 bg-bitcoin-orange rounded-full" />
                      </div>
                      <span
                        className={`ml-2 text-bitcoin-orange transition-transform duration-200 ${expanded.has(idx) ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded.has(idx) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          {Array.isArray(idea.arguments) && idea.arguments.length > 0 ? (
                            <ArgumentList items={idea.arguments} />
                          ) : (
                            <p className="text-description-color mt-3 text-sm text-left">Supporting arguments will be added.</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-description-color text-center">Key ideas will be provided for this chapter.</p>
            )}
          </div>

          <div className="mt-10 text-center">
            <Link to="/" className="btn btn-primary">← Back to Explorer</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterDetail;
