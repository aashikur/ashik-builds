// src/components/Reviews.jsx
import React from 'react';
import { Star, CheckCircle2, Video } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import reviewsData from '@/data/ReviewsData.json';

// --- Sub-Components for Clarity ---

// StarRating Component: Renders a number of filled stars.
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
      ))}
    </div>
  );
};

// ReviewCard Component: Renders a single testimonial card.
const ReviewCard = ({ review }) => {
  return (
    <Card
      className={`flex transition-all duration-300 hover:-translate-y-1 ease-in-out hover:border-blue-500/80 h-full flex-col border-gray-800 justify-between rounded-2xl border bg-[#121214] p-7`}
    >
      <div className="flex-grow">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={review.avatar} 
              alt={review.name} 
              className="h-12 w-12 rounded-full object-cover border border-zinc-700" 
            />
            <div>
              <p className="font-semibold text-white text-base">{review.name}</p>
              <p className="text-xs text-gray-400">{review.title}</p>
            </div>
          </div>
          {review.videoUrl && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
              <Video className="w-3.5 h-3.5" /> Video
            </span>
          )}
        </div>

        {/* Review Text with Quote */}
        <div className="relative mt-5">
          <p className="absolute -top-4 left-0 text-5xl font-serif text-gray-700/40 select-none">“</p>
          <p className="relative z-10 leading-relaxed text-gray-300 text-sm">
            {review.reviewText}
          </p>
        </div>

        {/* Video Link if provided */}
        {review.videoUrl && (
          <div className="mt-4">
            <a
              href={review.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 hover:text-blue-300 transition"
            >
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                ▶
              </span>
              Watch Client Feedback Video
            </a>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-800/80 pt-4">
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} />
          {review.isVerified && (
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <p className="text-xs font-medium text-emerald-400">Verified Client</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

// --- Main Reviews Component ---
const Reviews = () => {
  return (
    <Section
      title="What Our Clients Say"
      subtitle="Client Testimonials"
      description="Real feedback and video proof from founders, coordinators, and teams I've partnered with."
      id="reviewsSection" 
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
