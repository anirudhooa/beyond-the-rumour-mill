import React, { useState } from 'react';
import Header from './components/Header';
import Screen1Home from './components/screens/Screen1Home';
import Screen2Roadmap from './components/screens/Screen2Roadmap';
import Screen3CompanyDossier from './components/screens/Screen3CompanyDossier';
import Screen4VettedLinksDrawer from './components/screens/Screen4VettedLinksDrawer';
import Screen5SeniorDebriefFeed from './components/screens/Screen5SeniorDebriefFeed';
import Screen6SeniorSurveyModal from './components/screens/Screen6SeniorSurveyModal';
import ReportOutdatedModal from './components/ReportOutdatedModal';
import { INITIAL_COMPANIES, SENIOR_DEBRIEFS } from './data/mockData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [companies, setCompanies] = useState(INITIAL_COMPANIES);
  const [debriefs, setDebriefs] = useState(SENIOR_DEBRIEFS);
  const [selectedCompanyId, setSelectedCompanyId] = useState("comp-1");
  const [activeTopicId, setActiveTopicId] = useState("topic-dsa");
  const [savedResources, setSavedResources] = useState([]);
  
  // Modals & Feedback
  const [reportModalState, setReportModalState] = useState({ isOpen: false, targetItem: null });
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleSaveResource = (id) => {
    setSavedResources(prev => {
      const exists = prev.includes(id);
      if (exists) {
        showToast("Removed from saved list");
        return prev.filter(item => item !== id);
      } else {
        showToast("Added to your preparation list");
        return [...prev, id];
      }
    });
  };

  const handleMarkHelpful = (debriefId) => {
    setDebriefs(prev => prev.map(d => {
      if (d.id === debriefId) {
        const nextMarked = !d.markedHelpful;
        showToast(nextMarked ? "Marked as helpful" : "Feedback updated");
        return {
          ...d,
          markedHelpful: nextMarked,
          helpfulCount: nextMarked ? d.helpfulCount + 1 : d.helpfulCount - 1
        };
      }
      return d;
    }));
  };

  const handleOpenReportModal = (item) => {
    setReportModalState({ isOpen: true, targetItem: item });
  };

  const handleReportSuccess = (report) => {
    showToast(`Notice received for ${report.targetName}. Verification flagged.`);
  };

  const handleAddDebrief = (newDebrief) => {
    setDebriefs(prev => [newDebrief, ...prev]);
    showToast("Debrief published to verified feed");
    setCurrentScreen(5);
  };

  const handleOpenDrawerWithTopic = (topicId) => {
    setActiveTopicId(topicId);
    setCurrentScreen(4);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-[#f5f5f7]">
      {/* Apple-style Navigation Bar */}
      <Header
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        savedResourcesCount={savedResources.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {currentScreen === 1 && (
          <Screen1Home
            companies={companies}
            onSelectCompany={(id) => {
              setSelectedCompanyId(id);
              setCurrentScreen(3);
            }}
            onNavigateToRoadmap={() => setCurrentScreen(2)}
            onNavigateToDebriefs={() => setCurrentScreen(5)}
          />
        )}

        {currentScreen === 2 && (
          <Screen2Roadmap
            savedResources={savedResources}
            onToggleSaveResource={handleToggleSaveResource}
            onOpenDrawerWithTopic={handleOpenDrawerWithTopic}
          />
        )}

        {currentScreen === 3 && (
          <Screen3CompanyDossier
            companies={companies}
            selectedCompanyId={selectedCompanyId}
            onSelectCompany={(id) => setSelectedCompanyId(id)}
            onOpenDrawerWithTopic={handleOpenDrawerWithTopic}
            onNavigateToDebriefs={() => setCurrentScreen(5)}
            onOpenReportModal={handleOpenReportModal}
          />
        )}

        {currentScreen === 4 && (
          <Screen4VettedLinksDrawer
            activeTopicId={activeTopicId}
            setActiveTopicId={setActiveTopicId}
            savedResources={savedResources}
            onToggleSaveResource={handleToggleSaveResource}
          />
        )}

        {currentScreen === 5 && (
          <Screen5SeniorDebriefFeed
            debriefs={debriefs}
            onMarkHelpful={handleMarkHelpful}
            onOpenReportModal={handleOpenReportModal}
            onOpenSeniorSurvey={() => setCurrentScreen(6)}
            selectedCompanyId={selectedCompanyId}
          />
        )}

        {currentScreen === 6 && (
          <Screen6SeniorSurveyModal
            companies={companies}
            onAddDebrief={handleAddDebrief}
            onClose={() => setCurrentScreen(5)}
          />
        )}
      </main>

      {/* Apple iOS Style Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#1c1c1e]/90 backdrop-blur-2xl text-white px-4 py-2 rounded-full border border-white/10 shadow-2xl flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#30d158] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Flag / Report Modal */}
      <ReportOutdatedModal
        isOpen={reportModalState.isOpen}
        onClose={() => setReportModalState({ isOpen: false, targetItem: null })}
        targetItem={reportModalState.targetItem}
        onReportSuccess={handleReportSuccess}
      />

      {/* Minimalist Apple Style Footer */}
      <footer className="border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#86868b] bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">RumourMill</span>
            <span>—</span>
            <span>Verified Campus Placement Intelligence & Preparation Hub</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[#86868b]">
            <a href="#drives" onClick={(e) => { e.preventDefault(); setCurrentScreen(1); }} className="hover:text-white transition">Explore Drives</a>
            <a href="#roadmap" onClick={(e) => { e.preventDefault(); setCurrentScreen(2); }} className="hover:text-white transition">Foundation Roadmap</a>
            <a href="#debriefs" onClick={(e) => { e.preventDefault(); setCurrentScreen(5); }} className="hover:text-white transition">Senior Debriefs</a>
            <span>•</span>
            <span className="text-[#636366]">Privacy Policy</span>
            <span className="text-[#636366]">Terms of Service</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-white/[0.04] text-[11px] text-[#636366] text-center md:text-left">
          Copyright © 2026 RumourMill. All company interview data and senior debriefs are verified through student coordinators and campus placement circulars.
        </div>
      </footer>
    </div>
  );
}
