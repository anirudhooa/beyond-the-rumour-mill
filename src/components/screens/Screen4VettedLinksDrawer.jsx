import React, { useState } from 'react';
import { 
  BookMarked, 
  ThumbsUp, 
  Clock, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  ShieldCheck, 
  Lock, 
  CheckCircle2
} from 'lucide-react';
import { CURATED_TOPICS } from '../../data/mockData';

export default function Screen4VettedLinksDrawer({ 
  activeTopicId, 
  setActiveTopicId, 
  savedResources, 
  onToggleSaveResource 
}) {
  const [upvotes, setUpvotes] = useState({});
  const [userVoted, setUserVoted] = useState({});

  const currentTopic = CURATED_TOPICS.find(t => t.topicId === activeTopicId) || CURATED_TOPICS[0];

  const handleUpvote = (linkId, currentCount) => {
    if (userVoted[linkId]) {
      setUpvotes(prev => ({ ...prev, [linkId]: (prev[linkId] || currentCount) - 1 }));
      setUserVoted(prev => ({ ...prev, [linkId]: false }));
    } else {
      setUpvotes(prev => ({ ...prev, [linkId]: (prev[linkId] || currentCount) + 1 }));
      setUserVoted(prev => ({ ...prev, [linkId]: true }));
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a84ff]/10 border border-[#0a84ff]/20 text-xs font-medium text-[#0a84ff]">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Curated Resources</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#141416] border border-white/[0.06] text-[#86868b]">
            <Lock className="w-3.5 h-3.5 text-[#ff9f0a]" />
            <span>Strict Cap: 3 Resources per Topic</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Curated Study Resources — Top 3 Peer-Vetted Links
          </h1>
          <p className="text-xs md:text-sm text-[#a1a1a6] leading-relaxed">
            Eliminates online resource selection paralysis. While the internet offers hundreds of tutorials, placed seniors have evaluated and ranked the top 3 high-yield links per interview topic.
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {CURATED_TOPICS.map((topic) => {
            const isSelected = topic.topicId === currentTopic.topicId;
            return (
              <button
                key={topic.topicId}
                onClick={() => setActiveTopicId(topic.topicId)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#2c2c2e] border-white/20 text-white shadow-sm'
                    : 'bg-[#141416] border-white/[0.06] text-[#86868b] hover:bg-[#202022] hover:text-[#f5f5f7]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isSelected ? 'text-[#0a84ff]' : 'text-[#636366]'}`}>
                    Topic Module
                  </span>
                  <span className="text-[11px] font-mono text-[#30d158] font-medium">
                    3 Links
                  </span>
                </div>
                <div className="text-xs md:text-sm font-medium text-white line-clamp-1">
                  {topic.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Topic Details & Capped 3 Links Container */}
      <div className="bg-[#1c1c1e] border border-white/[0.08] rounded-3xl p-6 md:p-8 space-y-6">
        <div className="border-b border-white/[0.06] pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              {currentTopic.name}
            </h2>
            <span className="text-xs text-[#86868b] font-mono">
              3 Ranked Resources
            </span>
          </div>

          <div className="bg-[#141416] border border-white/[0.04] rounded-2xl p-3.5 text-xs text-[#a1a1a6]">
            <span className="font-semibold text-white block mb-0.5">
              Senior Review Context:
            </span>
            {currentTopic.seniorRationale}
          </div>
        </div>

        {/* Capped 3 Cards */}
        <div className="space-y-3.5">
          {currentTopic.links.map((link, idx) => {
            const currentVotes = upvotes[link.id] !== undefined ? upvotes[link.id] : link.upvotes;
            const hasVoted = !!userVoted[link.id];
            const isSaved = savedResources.includes(link.id);

            return (
              <div
                key={link.id}
                className="bg-[#141416] border border-white/[0.06] hover:border-white/15 rounded-2xl p-5 md:p-6 transition-all duration-200 space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2c2c2e] border border-white/10 text-white font-semibold text-xs flex items-center justify-center shrink-0">
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#2c2c2e] text-[#a1a1a6]">
                          {link.type}
                        </span>
                        <span className="text-xs text-[#86868b] font-mono flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#636366]" />
                          {link.timeEstimate}
                        </span>
                      </div>
                      <h3 className="text-base font-medium text-white mt-1">
                        {link.title}
                      </h3>
                    </div>
                  </div>

                  {/* Actions: Save + Upvote + Open */}
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <button
                      onClick={() => handleUpvote(link.id, link.upvotes)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition ${
                        hasVoted
                          ? 'bg-[#0a84ff] text-white shadow-sm'
                          : 'bg-[#1c1c1e] hover:bg-[#2c2c2e] text-[#86868b]'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? 'text-white' : 'text-[#ff9f0a]'}`} />
                      <span>{currentVotes} Upvotes</span>
                    </button>

                    <button
                      onClick={() => onToggleSaveResource(link.id)}
                      className={`p-2 rounded-full text-xs font-medium flex items-center gap-1.5 border transition ${
                        isSaved
                          ? 'bg-[#ff9f0a]/10 text-[#ff9f0a] border-[#ff9f0a]/20'
                          : 'bg-[#1c1c1e] hover:bg-[#2c2c2e] text-[#86868b] border-white/[0.08]'
                      }`}
                      title="Bookmark resource"
                    >
                      {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-[#ff9f0a]" /> : <Bookmark className="w-3.5 h-3.5" />}
                      <span>{isSaved ? "Saved" : "Save"}</span>
                    </button>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#0a84ff] hover:bg-[#0071e3] text-white text-xs font-medium flex items-center gap-1 transition"
                    >
                      <span>Study Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Senior Note */}
                <div className="bg-[#1c1c1e] rounded-xl p-3 border border-white/[0.04] text-xs text-[#a1a1a6]">
                  <span className="font-semibold text-white block mb-0.5">
                    Senior Review & Key Takeaway:
                  </span>
                  <p className="italic">"{link.seniorNote}"</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Note */}
        <div className="bg-[#141416] border border-white/[0.04] rounded-2xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#30d158] shrink-0" />
          <div className="text-xs text-[#a1a1a6]">
            <strong className="text-white">Strict Curation Policy:</strong> Additional links recommended by seniors will only replace an existing resource if they achieve higher verified upvotes, guaranteeing aspirants never face resource overload.
          </div>
        </div>
      </div>
    </div>
  );
}
