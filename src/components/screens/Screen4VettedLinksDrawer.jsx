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
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-neutral-800">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Curated Resources</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700">
            <Lock className="w-3.5 h-3.5 text-amber-500" />
            <span>Strict Cap: 3 Resources per Topic</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Curated Study Resources — Top 3 Peer-Vetted Links
          </h1>
          <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
            Eliminates online resource selection paralysis. Placed seniors have evaluated and ranked the top 3 high-yield links per interview topic.
          </p>
        </div>

        {/* Topic Selector Tabs (from insp1.jpg & placement.jpg) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {CURATED_TOPICS.map((topic) => {
            const isSelected = topic.topicId === currentTopic.topicId;
            return (
              <button
                key={topic.topicId}
                onClick={() => setActiveTopicId(topic.topicId)}
                className={`p-4 rounded-3xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-neutral-900 border-neutral-900 text-white shadow-md'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                    Topic Module
                  </span>
                  <span className="text-[11px] font-mono text-emerald-500 font-bold">
                    3 Links
                  </span>
                </div>
                <div className="text-xs md:text-sm font-bold line-clamp-1">
                  {topic.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Topic Details & Capped 3 Links Container */}
      <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="border-b border-neutral-100 pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
              {currentTopic.name}
            </h2>
            <span className="text-xs text-neutral-500 font-mono font-bold">
              3 Ranked Resources
            </span>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-xs text-neutral-700">
            <span className="font-extrabold text-neutral-900 block mb-1">
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
                className="bg-neutral-50 border border-neutral-200 hover:border-neutral-300 rounded-3xl p-5 md:p-6 transition-all space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-2xl bg-neutral-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-neutral-700 border border-neutral-200">
                          {link.type}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono flex items-center gap-1 font-semibold">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          {link.timeEstimate}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 mt-1">
                        {link.title}
                      </h3>
                    </div>
                  </div>

                  {/* Actions: Save + Upvote + Open */}
                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <button
                      onClick={() => handleUpvote(link.id, link.upvotes)}
                      className={`px-3 py-1.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition ${
                        hasVoted
                          ? 'bg-neutral-900 text-white shadow-sm'
                          : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? 'text-white' : 'text-amber-500'}`} />
                      <span>{currentVotes} Upvotes</span>
                    </button>

                    <button
                      onClick={() => onToggleSaveResource(link.id)}
                      className={`p-2 rounded-2xl text-xs font-bold flex items-center gap-1.5 border transition ${
                        isSaved
                          ? 'bg-amber-50 text-amber-700 border-amber-300'
                          : 'bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                      }`}
                      title="Bookmark resource"
                    >
                      {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" /> : <Bookmark className="w-3.5 h-3.5" />}
                      <span>{isSaved ? "Saved" : "Save"}</span>
                    </button>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold flex items-center gap-1 transition"
                    >
                      <span>Study Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Senior Note */}
                <div className="bg-white rounded-2xl p-3.5 border border-neutral-200/80 text-xs text-neutral-700">
                  <span className="font-bold text-neutral-900 block mb-0.5">
                    Senior Review & Key Takeaway:
                  </span>
                  <p className="italic">"{link.seniorNote}"</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Note */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div className="text-xs text-emerald-800 font-medium">
            <strong className="text-emerald-950 font-bold">Strict Curation Policy:</strong> Additional links recommended by seniors will only replace an existing resource if they achieve higher verified upvotes, guaranteeing aspirants never face resource overload.
          </div>
        </div>
      </div>
    </div>
  );
}
