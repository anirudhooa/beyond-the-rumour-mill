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
      <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#253745] text-xs font-medium text-[#CCD0CF] border border-[#4A5C6A]/40">
            <BookMarked className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Curated Resources</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/40">
            <Lock className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Strict Cap: 3 Resources per Topic</span>
          </div>
        </div>

        <div className="max-w-3xl space-y-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#CCD0CF] tracking-tight">
            Curated Study Resources — Top 3 Peer-Vetted Links
          </h1>
          <p className="text-xs md:text-sm text-[#9BA8AB] leading-relaxed">
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
                    ? 'bg-[#253745] border-[#4A5C6A]/70 text-[#CCD0CF] shadow-md'
                    : 'bg-[#11212D] border-[#4A5C6A]/30 text-[#9BA8AB] hover:border-[#9BA8AB]/40 hover:text-[#CCD0CF]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${isSelected ? 'text-[#38bdf8]' : 'text-[#9BA8AB]/70'}`}>
                    Topic Module
                  </span>
                  <span className="text-[11px] font-mono text-[#34d399] font-medium">
                    3 Links
                  </span>
                </div>
                <div className="text-xs md:text-sm font-semibold text-[#CCD0CF] line-clamp-1">
                  {topic.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Topic Details & Capped 3 Links Container */}
      <div className="bg-[#11212D] border border-[#4A5C6A]/35 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        <div className="border-b border-[#4A5C6A]/30 pb-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold text-[#CCD0CF] tracking-tight">
              {currentTopic.name}
            </h2>
            <span className="text-xs text-[#9BA8AB] font-mono font-medium">
              3 Ranked Resources
            </span>
          </div>

          <div className="bg-[#06141B]/60 border border-[#4A5C6A]/30 rounded-2xl p-4 text-xs text-[#9BA8AB]">
            <span className="font-semibold text-[#CCD0CF] block mb-1">
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
                className="bg-[#06141B]/60 border border-[#4A5C6A]/30 hover:border-[#9BA8AB]/40 hover:bg-[#162a39] rounded-3xl p-5 md:p-6 transition-all space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-2xl bg-[#253745] text-[#CCD0CF] font-semibold text-xs flex items-center justify-center shrink-0 border border-[#4A5C6A]/40">
                      #{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#11212D] text-[#9BA8AB] border border-[#4A5C6A]/35">
                          {link.type}
                        </span>
                        <span className="text-xs text-[#9BA8AB] font-mono flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#9BA8AB]/70" />
                          {link.timeEstimate}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-[#CCD0CF] mt-1">
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
                          ? 'bg-[#253745] text-[#CCD0CF] border border-[#4A5C6A]/60 shadow-sm'
                          : 'bg-[#11212D] hover:bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] border border-[#4A5C6A]/35'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? 'text-[#38bdf8]' : 'text-[#f59e0b]'}`} />
                      <span>{currentVotes} Upvotes</span>
                    </button>

                    <button
                      onClick={() => onToggleSaveResource(link.id)}
                      className={`p-2 rounded-2xl text-xs font-medium flex items-center gap-1.5 border transition ${
                        isSaved
                          ? 'bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30'
                          : 'bg-[#11212D] hover:bg-[#253745] text-[#9BA8AB] hover:text-[#CCD0CF] border border-[#4A5C6A]/35'
                      }`}
                      title="Bookmark resource"
                    >
                      {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-[#f59e0b]" /> : <Bookmark className="w-3.5 h-3.5" />}
                      <span>{isSaved ? "Saved" : "Save"}</span>
                    </button>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-full bg-[#CCD0CF] hover:bg-white text-[#06141B] text-xs font-semibold flex items-center gap-1 transition shadow-sm"
                    >
                      <span>Study Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Senior Note */}
                <div className="bg-[#11212D] rounded-2xl p-3.5 border border-[#4A5C6A]/30 text-xs text-[#9BA8AB]">
                  <span className="font-semibold text-[#CCD0CF] block mb-0.5">
                    Senior Review & Key Takeaway:
                  </span>
                  <p className="italic">"{link.seniorNote}"</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Note */}
        <div className="bg-[#34d399]/10 border border-[#34d399]/20 rounded-2xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0" />
          <div className="text-xs text-[#34d399] font-normal">
            <strong className="text-[#CCD0CF] font-semibold">Strict Curation Policy:</strong> Additional links recommended by seniors will only replace an existing resource if they achieve higher verified upvotes, guaranteeing aspirants never face resource overload.
          </div>
        </div>
      </div>
    </div>
  );
}
