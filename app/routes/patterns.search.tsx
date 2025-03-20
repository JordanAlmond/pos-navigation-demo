import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Patterns Demo" },
    { name: "description", content: "Different search pattern implementations" },
  ];
};

type SearchResult = {
  id: string;
  label: string;
  type: 'section' | 'subsection' | 'action' | 'report' | 'list' | 'user';
  section?: string;
  icon?: React.ReactNode;
  description?: string;
  confidence?: number;
  aiSuggestion?: boolean;
  matchQuality?: number;
  tags?: string[];
  date?: Date;
  preview?: string;
  email?: string;
  status?: string;
  lastActive?: string;
  phone?: string;
  location?: string;
  membershipTier?: string;
  totalWashes?: number;
  lastWashDate?: string;
  points?: number;
};

type SearchHistory = {
  query: string;
  timestamp: Date;
  result: SearchResult;
};

type KeyboardShortcut = {
  key: string;
  description: string;
};

type FilterOption = {
  id: string;
  label: string;
  type: 'checkbox' | 'date' | 'select';
  options?: string[];
  value?: any;
};

// Add new type for command categories
type CommandCategory = {
  id: string;
  label: string;
  commands: SearchResult[];
};

// Add new type for sorting
type SortConfig = {
  key: keyof SearchResult;
  direction: 'asc' | 'desc';
};

const keyboardShortcuts: KeyboardShortcut[] = [
  { key: "⌘K", description: "Open Command Palette" },
  { key: "⌘/", description: "Show Keyboard Shortcuts" },
  { key: "⌘J", description: "Toggle Global Search" },
  { key: "⌘⇧F", description: "Focus Contextual Search" },
  { key: "⌘⇧P", description: "Focus Predictive Search" },
  { key: "⌘⇧A", description: "Toggle Advanced Filters" },
  { key: "Esc", description: "Close any search" },
  { key: "↑↓", description: "Navigate results" },
  { key: "Enter", description: "Select result" },
];

const filterOptions: FilterOption[] = [
  {
    id: 'type',
    label: 'Type',
    type: 'select',
    options: ['All', 'Reports', 'Actions', 'Sections'],
  },
  {
    id: 'date',
    label: 'Date Range',
    type: 'date',
  },
  {
    id: 'tags',
    label: 'Tags',
    type: 'checkbox',
    options: ['Important', 'Recent', 'Frequent', 'AI Suggested'],
  },
];

// Update the command palette results to match VS Code style
const commandPaletteCategories: CommandCategory[] = [
  {
    id: 'sales',
    label: 'Sales & Analytics',
    commands: [
      {
        id: 'sales-dashboard',
        label: 'Sales Dashboard',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        description: 'View sales dashboard and analytics',
        shortcut: '⌘⇧D'
      },
      {
        id: 'member-dashboard',
        label: 'Member Dashboard',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        description: 'View member-specific dashboard',
        shortcut: '⌘⇧M'
      },
      {
        id: 'leaderboard',
        label: 'Leaderboard',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        description: 'View sales leaderboard',
        shortcut: '⌘⇧L'
      }
    ]
  },
  {
    id: 'widgets',
    label: 'Widgets & Monitoring',
    commands: [
      {
        id: 'live-wash-count',
        label: 'Live Wash Count',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        description: 'Monitor active washes across locations',
        shortcut: '⌘⇧W'
      },
      {
        id: 'sales-comparison',
        label: 'Online vs Membership Sales',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        description: 'Compare online and membership sales',
        shortcut: '⌘⇧C'
      }
    ]
  },
  {
    id: 'membership',
    label: 'Membership Management',
    commands: [
      {
        id: 'manage-memberships',
        label: 'Manage Memberships & Add-Ons',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        description: 'Configure membership tiers and features',
        shortcut: '⌘⇧A'
      },
      {
        id: 'prepaid-washes',
        label: 'Manage Prepaid Washes',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        description: 'Configure prepaid wash packages',
        shortcut: '⌘⇧P'
      }
    ]
  }
];

export default function SearchLayout() {
  // Command Palette State
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [commandPaletteQuery, setCommandPaletteQuery] = useState("");
  const [commandPaletteResults, setCommandPaletteResults] = useState<SearchResult[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const commandPaletteRef = useRef<HTMLDivElement>(null);

  // Global Search State
  const [globalSearchQuery, setGlobalSearchQuery] = useState("");
  const [globalSearchResults, setGlobalSearchResults] = useState<SearchResult[]>([]);
  const [showGlobalResults, setShowGlobalResults] = useState(false);
  const globalSearchRef = useRef<HTMLDivElement>(null);

  // Contextual Search State
  const [contextualSearchQuery, setContextualSearchQuery] = useState("");
  const [contextualSearchResults, setContextualSearchResults] = useState<SearchResult[]>([]);
  const [selectedContext, setSelectedContext] = useState("all");

  // Predictive Search State
  const [predictiveQuery, setPredictiveQuery] = useState("");
  const [predictiveResults, setPredictiveResults] = useState<SearchResult[]>([]);
  const [showPredictiveResults, setShowPredictiveResults] = useState(false);
  const predictiveSearchRef = useRef<HTMLDivElement>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);

  // Additional state for AI features
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);
  const shortcutsRef = useRef<HTMLDivElement>(null);

  // Add new state for table features
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'label', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchFields, setSearchFields] = useState<string[]>(['name', 'email', 'phone', 'location']);

  // Fuzzy search implementation
  const fuzzySearch = (query: string, items: SearchResult[]): SearchResult[] => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return items
      .map(item => {
        const label = item.label.toLowerCase();
        const description = item.description?.toLowerCase() || '';
        const section = item.section?.toLowerCase() || '';
        
        // Calculate match quality
        let matchQuality = 0;
        
        // Exact match in label
        if (label === searchTerm) matchQuality += 1;
        // Partial match in label
        else if (label.includes(searchTerm)) matchQuality += 0.8;
        // Match in description
        if (description.includes(searchTerm)) matchQuality += 0.4;
        // Match in section
        if (section.includes(searchTerm)) matchQuality += 0.2;
        
        // Levenshtein distance for fuzzy matching
        const distance = levenshteinDistance(searchTerm, label);
        matchQuality += (1 - distance / Math.max(searchTerm.length, label.length)) * 0.5;
        
        return {
          ...item,
          matchQuality,
        };
      })
      .filter(item => item.matchQuality > 0)
      .sort((a, b) => (b.matchQuality || 0) - (a.matchQuality || 0));
  };

  // Levenshtein distance calculation
  const levenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = Array(b.length + 1).fill(null).map(() => 
      Array(a.length + 1).fill(null)
    );

    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + cost
        );
      }
    }

    return matrix[b.length][a.length];
  };

  // Handle filter changes
  const handleFilterChange = (filterId: string, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value,
    }));
  };

  // Apply filters to results
  const applyFilters = (results: SearchResult[]): SearchResult[] => {
    return results.filter(result => {
      if (activeFilters.type && activeFilters.type !== 'All' && result.type !== activeFilters.type) {
        return false;
      }
      if (activeFilters.date) {
        const resultDate = result.date;
        if (!resultDate || resultDate < activeFilters.date.start || resultDate > activeFilters.date.end) {
          return false;
        }
      }
      if (activeFilters.tags?.length) {
        return activeFilters.tags.some((tag: string) => result.tags?.includes(tag));
      }
      return true;
    });
  };

  // Handle drag and drop
  const handleDragStart = (result: SearchResult) => {
    setDragState('dragging');
    // Add drag data
  };

  const handleDragEnd = () => {
    setDragState('idle');
  };

  const handleDrop = (targetId: string) => {
    // Handle drop logic
    setDragState('idle');
  };

  // Handle keyboard shortcuts for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command Palette shortcut
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
      // Close command palette
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setCommandPaletteQuery("");
        setSelectedResultIndex(0);
      }
      if (isCommandPaletteOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedResultIndex(prev => 
            prev < commandPaletteResults.length - 1 ? prev + 1 : 0
          );
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedResultIndex(prev => 
            prev > 0 ? prev - 1 : commandPaletteResults.length - 1
          );
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          const selectedResult = commandPaletteResults[selectedResultIndex];
          if (selectedResult) {
            handleSearchResultSelect(selectedResult);
          }
        }
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        setShowShortcuts(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, commandPaletteResults, selectedResultIndex]);

  // Handle click outside for Global Search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (globalSearchRef.current && !globalSearchRef.current.contains(event.target as Node)) {
        setShowGlobalResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Command Palette Search
  useEffect(() => {
    if (!commandPaletteQuery.trim()) {
      setCommandPaletteResults([]);
      return;
    }

    const results: SearchResult[] = commandPaletteCategories.flatMap(cat => cat.commands);

    setCommandPaletteResults(results);
    setSelectedResultIndex(0);
  }, [commandPaletteQuery]);

  // Global Search
  useEffect(() => {
    if (!globalSearchQuery.trim()) {
      setGlobalSearchResults([]);
      return;
    }

    const results: SearchResult[] = [
      {
        id: 'sales-dashboard',
        label: 'Sales Dashboard',
        type: 'section',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        id: 'member-list',
        label: 'Member List',
        type: 'subsection',
        section: 'Membership',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        id: 'product-catalog',
        label: 'Product Catalog',
        type: 'section',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      }
    ];

    setGlobalSearchResults(results);
  }, [globalSearchQuery]);

  // Contextual Search
  useEffect(() => {
    if (!contextualSearchQuery.trim()) {
      setContextualSearchResults([]);
      return;
    }

    const results: SearchResult[] = [
      {
        id: 'user-1',
        label: 'John Doe',
        type: 'user',
        description: 'Premium Member',
        email: 'john.doe@example.com',
        phone: '(555) 123-4567',
        location: 'New York, NY',
        status: 'Active',
        lastActive: '2 minutes ago',
        membershipTier: 'Premium',
        totalWashes: 45,
        lastWashDate: '2024-03-15',
        points: 1250,
        matchQuality: 0.95
      },
      {
        id: 'user-2',
        label: 'Jane Smith',
        type: 'user',
        description: 'Basic Member',
        email: 'jane.smith@example.com',
        phone: '(555) 234-5678',
        location: 'Los Angeles, CA',
        status: 'Active',
        lastActive: '5 minutes ago',
        membershipTier: 'Basic',
        totalWashes: 28,
        lastWashDate: '2024-03-14',
        points: 750,
        matchQuality: 0.85
      },
      {
        id: 'user-3',
        label: 'Mike Johnson',
        type: 'user',
        description: 'Premium Member',
        email: 'mike.j@example.com',
        phone: '(555) 345-6789',
        location: 'Chicago, IL',
        status: 'Inactive',
        lastActive: '1 hour ago',
        membershipTier: 'Premium',
        totalWashes: 62,
        lastWashDate: '2024-03-10',
        points: 1850,
        matchQuality: 0.75
      },
      {
        id: 'user-4',
        label: 'Sarah Wilson',
        type: 'user',
        description: 'Elite Member',
        email: 'sarah.w@example.com',
        phone: '(555) 456-7890',
        location: 'Miami, FL',
        status: 'Active',
        lastActive: '15 minutes ago',
        membershipTier: 'Elite',
        totalWashes: 89,
        lastWashDate: '2024-03-15',
        points: 2500,
        matchQuality: 0.90
      }
    ];

    const filteredResults = results.filter(result => {
      const searchTerm = contextualSearchQuery.toLowerCase();
      return searchFields.some(field => {
        switch (field) {
          case 'name':
            return result.label.toLowerCase().includes(searchTerm);
          case 'email':
            return result.email?.toLowerCase().includes(searchTerm);
          case 'phone':
            return result.phone?.toLowerCase().includes(searchTerm);
          case 'location':
            return result.location?.toLowerCase().includes(searchTerm);
          default:
            return false;
        }
      });
    });

    // Sort results
    const sortedResults = [...filteredResults].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setContextualSearchResults(sortedResults);
  }, [contextualSearchQuery, sortConfig, searchFields]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contextualSearchResults.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(contextualSearchResults.length / itemsPerPage);

  // Handle sort
  const handleSort = (key: keyof SearchResult) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Enhanced Predictive Search with AI-like features
  useEffect(() => {
    if (!predictiveQuery.trim()) {
      setPredictiveResults([]);
      setAiThinking(false);
      return;
    }

    // Simulate AI thinking
    setAiThinking(true);
    const timer = setTimeout(() => {
      setAiThinking(false);
      const suggestions: SearchResult[] = [
        {
          id: 'frequent-dashboard',
          label: 'Dashboard',
          type: 'section',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
          description: 'Frequently accessed dashboard',
          confidence: 0.95,
          aiSuggestion: true
        },
        {
          id: 'recent-report',
          label: 'Monthly Sales Report',
          type: 'subsection',
          section: 'Reports',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          description: 'Last viewed 2 hours ago',
          confidence: 0.85,
          aiSuggestion: true
        },
        {
          id: 'suggested-action',
          label: 'Add New Product',
          type: 'action',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          ),
          description: 'Based on your recent activity',
          confidence: 0.75,
          aiSuggestion: true
        },
        {
          id: 'ai-suggestion',
          label: 'Generate Sales Report',
          type: 'action',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          description: 'AI-powered report generation',
          confidence: 0.65,
          aiSuggestion: true
        }
      ];

      setPredictiveResults(suggestions.slice(0, 5)); // Show top 5 results
    }, 500); // Simulate AI processing time

    return () => clearTimeout(timer);
  }, [predictiveQuery, searchHistory]);

  const handleSearchResultSelect = (result: SearchResult) => {
    // Add to search history
    setSearchHistory(prev => [
      {
        query: commandPaletteQuery || globalSearchQuery || contextualSearchQuery || predictiveQuery,
        timestamp: new Date(),
        result
      },
      ...prev
    ].slice(0, 5));

    // Close search interfaces
    setIsCommandPaletteOpen(false);
    setShowGlobalResults(false);
    setCommandPaletteQuery("");
    setGlobalSearchQuery("");
    setContextualSearchQuery("");
    setPredictiveQuery("");
  };

  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [fuzzyResults, setFuzzyResults] = useState<SearchResult[]>([]);
  const [showPreview, setShowPreview] = useState<string | null>(null);
  const [dragState, setDragState] = useState<'idle' | 'dragging'>('idle');
  const filtersRef = useRef<HTMLDivElement>(null);

  // Add predictive search handler
  const handlePredictiveSearch = (query: string) => {
    setPredictiveQuery(query);
    if (!query.trim()) {
      setPredictiveResults([]);
      setShowPredictiveResults(false);
      return;
    }

    const searchTerm = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search through command categories
    commandPaletteCategories.forEach(category => {
      category.commands.forEach(command => {
        const label = command.label.toLowerCase();
        const description = command.description?.toLowerCase() || '';
        
        // Calculate match quality
        let matchQuality = 0;
        
        // Exact match in label
        if (label === searchTerm) matchQuality += 1;
        // Partial match in label
        else if (label.includes(searchTerm)) matchQuality += 0.8;
        // Match in description
        if (description.includes(searchTerm)) matchQuality += 0.4;
        
        // Levenshtein distance for fuzzy matching
        const distance = levenshteinDistance(searchTerm, label);
        matchQuality += (1 - distance / Math.max(searchTerm.length, label.length)) * 0.5;
        
        if (matchQuality > 0) {
          results.push({
            ...command,
            section: category.label,
            matchQuality
          });
        }
      });
    });

    // Sort by match quality
    results.sort((a, b) => (b.matchQuality || 0) - (a.matchQuality || 0));
    setPredictiveResults(results.slice(0, 5)); // Show top 5 results
    setShowPredictiveResults(true);
  };

  // Add click outside handler for predictive search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (predictiveSearchRef.current && !predictiveSearchRef.current.contains(event.target as Node)) {
        setShowPredictiveResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Search Patterns Demo</h1>
          <div className="flex items-center space-x-4">
            {/* Add Command Palette button */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Command Palette (⌘K)
            </button>
            <button
              onClick={() => setShowShortcuts(prev => !prev)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Keyboard Shortcuts (⌘/)
            </button>
            <Link 
              to="/" 
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Back to Demo
            </Link>
          </div>
        </div>

        {/* Keyboard Shortcuts Modal */}
        {showShortcuts && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div 
              ref={shortcutsRef}
              className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 animate-fade-in"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Keyboard Shortcuts</h2>
                <button
                  onClick={() => setShowShortcuts(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {keyboardShortcuts.map((shortcut) => (
                  <div key={shortcut.key} className="flex items-center space-x-2">
                    <kbd className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
                      {shortcut.key}
                    </kbd>
                    <span className="text-sm text-gray-600">{shortcut.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Command Palette Modal */}
        {isCommandPaletteOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div 
              ref={commandPaletteRef}
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 animate-fade-in"
            >
              <div className="p-4 border-b">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type a command or search..."
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-lg"
                    value={commandPaletteQuery}
                    onChange={(e) => {
                      const results = fuzzySearch(e.target.value, commandPaletteCategories.flatMap(cat => cat.commands));
                      setCommandPaletteResults(results);
                      setCommandPaletteQuery(e.target.value);
                    }}
                    autoFocus
                  />
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {commandPaletteResults.length > 0 ? (
                  <div className="py-2">
                    {commandPaletteCategories.map(category => {
                      const categoryResults = commandPaletteResults.filter(result => 
                        category.commands.some(cmd => cmd.id === result.id)
                      );
                      if (categoryResults.length === 0) return null;
                      
                      return (
                        <div key={category.id} className="mb-2">
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {category.label}
                          </div>
                          <ul>
                            {categoryResults.map((result, index) => (
                              <li
                                key={result.id}
                                draggable
                                onDragStart={() => handleDragStart(result)}
                                onDragEnd={handleDragEnd}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => handleDrop(result.id)}
                                className={`group ${
                                  dragState === 'dragging' ? 'cursor-move' : ''
                                }`}
                              >
                                <button
                                  onClick={() => handleSearchResultSelect(result)}
                                  className={`w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                                    index === selectedResultIndex ? 'bg-blue-50' : ''
                                  }`}
                                >
                                  <div className="flex items-center space-x-2">
                                    {result.icon}
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">{result.label}</div>
                                      {result.description && (
                                        <div className="text-xs text-gray-500">{result.description}</div>
                                      )}
                                    </div>
                                  </div>
                                  {result.shortcut && (
                                    <kbd className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-500">
                                      {result.shortcut}
                                    </kbd>
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No commands found
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Global Search */}
          <div className="bg-white rounded-lg shadow p-6 transform transition-all duration-200 hover:shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Global Search</h2>
            <div className="relative" ref={globalSearchRef}>
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={globalSearchQuery}
                onChange={(e) => {
                  const results = fuzzySearch(e.target.value, globalSearchResults);
                  setGlobalSearchResults(results);
                  setGlobalSearchQuery(e.target.value);
                }}
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search Results */}
            {globalSearchResults.length > 0 && (
              <div className="mt-2 border rounded-md animate-fade-in">
                <ul className="py-2">
                  {globalSearchResults.map((result, index) => (
                    <li
                      key={result.id}
                      draggable
                      onDragStart={() => handleDragStart(result)}
                      onDragEnd={handleDragEnd}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleDrop(result.id)}
                      className={`group ${
                        dragState === 'dragging' ? 'cursor-move' : ''
                      }`}
                    >
                      <button
                        onClick={() => handleSearchResultSelect(result)}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
                      >
                        {result.icon}
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                            {result.label}
                          </div>
                          {result.description && (
                            <div className="text-xs text-gray-500">{result.description}</div>
                          )}
                          {result.matchQuality && (
                            <div className="flex items-center space-x-1 mt-1">
                              <div className="w-16 h-1 bg-gray-200 rounded-full">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{ width: `${result.matchQuality * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-500">
                                {Math.round(result.matchQuality * 100)}% match
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Predictive Search */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Predictive Search</h2>
            <div className="relative" ref={predictiveSearchRef}>
              <input
                type="text"
                placeholder="Start typing to see AI-powered suggestions..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={predictiveQuery}
                onChange={(e) => handlePredictiveSearch(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            
            {/* Predictive Search Results */}
            {showPredictiveResults && predictiveResults.length > 0 && (
              <div className="mt-2 border rounded-md shadow-lg animate-fade-in">
                <ul className="py-2">
                  {predictiveResults.map((result, index) => (
                    <li key={result.id}>
                      <button
                        onClick={() => {
                          handleSearchResultSelect(result);
                          setShowPredictiveResults(false);
                          setPredictiveQuery('');
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150"
                      >
                        <div className="flex items-center space-x-2">
                          {result.icon}
                          <div>
                            <div className="text-sm font-medium text-gray-900">{result.label}</div>
                            {result.description && (
                              <div className="text-xs text-gray-500">{result.description}</div>
                            )}
                          </div>
                        </div>
                        {result.shortcut && (
                          <kbd className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-500">
                            {result.shortcut}
                          </kbd>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4 text-sm text-gray-500">
              This search pattern provides real-time suggestions as you type, with AI-powered recommendations.
            </div>
          </div>

          {/* Search History with Animation */}
          <div className="bg-white rounded-lg shadow p-6 transform transition-all duration-200 hover:shadow-lg md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
            {searchHistory.length > 0 ? (
              <ul className="space-y-2">
                {searchHistory.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <button
                      onClick={() => handleSearchResultSelect(item.result)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {item.query}
                    </button>
                    <span className="text-xs text-gray-500">
                      {Math.floor((Date.now() - item.timestamp.getTime()) / 1000 / 60)}m ago
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No recent searches</p>
            )}
          </div>

          {/* Filter Search Patterns Section */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Filter Search Patterns</h2>
            
            {/* Contextual Table Search */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h3 className="text-lg font-medium mb-4">Contextual Table Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search within table..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={contextualSearchQuery}
                  onChange={(e) => setContextualSearchQuery(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              
              {/* Search Fields Selection */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['name', 'email', 'phone', 'location', 'status', 'membershipTier'].map(field => (
                  <button
                    key={field}
                    onClick={() => setSearchFields(prev => 
                      prev.includes(field) 
                        ? prev.filter(f => f !== field)
                        : [...prev, field]
                    )}
                    className={`px-3 py-1 rounded-full text-sm ${
                      searchFields.includes(field)
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </button>
                ))}
              </div>

              {/* Table with Search Results */}
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('label')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Name</span>
                          {sortConfig.key === 'label' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('email')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Email</span>
                          {sortConfig.key === 'email' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('phone')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Phone</span>
                          {sortConfig.key === 'phone' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('location')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Location</span>
                          {sortConfig.key === 'location' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('status')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Status</span>
                          {sortConfig.key === 'status' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('membershipTier')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Tier</span>
                          {sortConfig.key === 'membershipTier' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <button
                          onClick={() => handleSort('points')}
                          className="flex items-center space-x-1 hover:text-gray-700"
                        >
                          <span>Points</span>
                          {sortConfig.key === 'points' && (
                            <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.map((result) => (
                      <tr key={result.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">
                                  {result.label.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{result.label}</div>
                              <div className="text-sm text-gray-500">{result.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{result.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{result.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{result.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            result.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {result.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            result.membershipTier === 'Elite' ? 'bg-purple-100 text-purple-800' :
                            result.membershipTier === 'Premium' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {result.membershipTier}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{result.points}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, contextualSearchResults.length)} of {contextualSearchResults.length} results
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h3 className="text-lg font-medium mb-4">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={activeFilters.status || ''}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>

                {/* Membership Tier Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership Tier</label>
                  <select
                    className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={activeFilters.membershipTier || ''}
                    onChange={(e) => handleFilterChange('membershipTier', e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="Elite">Elite</option>
                    <option value="Premium">Premium</option>
                    <option value="Basic">Basic</option>
                  </select>
                </div>

                {/* Points Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Points Range</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={activeFilters.pointsMin || ''}
                      onChange={(e) => handleFilterChange('pointsMin', e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={activeFilters.pointsMax || ''}
                      onChange={(e) => handleFilterChange('pointsMax', e.target.value)}
                    />
                  </div>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Active</label>
                  <select
                    className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={activeFilters.lastActive || ''}
                    onChange={(e) => handleFilterChange('lastActive', e.target.value)}
                  >
                    <option value="">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Quick Filters</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleFilterChange('quickFilter', 'highValue')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilters.quickFilter === 'highValue'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  High Value Members
                </button>
                <button
                  onClick={() => handleFilterChange('quickFilter', 'inactive')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilters.quickFilter === 'inactive'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Inactive Members
                </button>
                <button
                  onClick={() => handleFilterChange('quickFilter', 'recent')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilters.quickFilter === 'recent'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Recently Active
                </button>
                <button
                  onClick={() => handleFilterChange('quickFilter', 'elite')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeFilters.quickFilter === 'elite'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Elite Members
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Preview</h2>
              <button
                onClick={() => setShowPreview(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose max-w-none">
              {/* Preview content */}
              <p>Preview content for {showPreview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 