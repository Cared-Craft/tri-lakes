export const useSearchStore = defineStore(
  "search",
  () => {
    // Connection directory search state
    const connectionFilters = ref({
      category: "",
      location: "",
      searchQuery: "",
      featured: false,
      sortBy: "name",
    });

    // Affiliate directory search state
    const affiliateFilters = ref({
      company: "",
      specialty: "",
      location: "",
      searchQuery: "",
    });

    // Forms library search state
    const formsFilters = ref({
      category: "",
      searchQuery: "",
      fileType: "",
      lastUpdated: "",
    });

    // Events calendar filters
    const eventFilters = ref({
      category: "",
      dateRange: "",
      location: "",
      searchQuery: "",
    });

    // Search history for better UX
    const searchHistory = ref<string[]>([]);

    // Actions
    function updateConnectionFilters(
      filters: Partial<typeof connectionFilters.value>
    ) {
      connectionFilters.value = { ...connectionFilters.value, ...filters };
    }

    function updateAffiliateFilters(
      filters: Partial<typeof affiliateFilters.value>
    ) {
      affiliateFilters.value = { ...affiliateFilters.value, ...filters };
    }

    function updateFormsFilters(filters: Partial<typeof formsFilters.value>) {
      formsFilters.value = { ...formsFilters.value, ...filters };
    }

    function updateEventFilters(filters: Partial<typeof eventFilters.value>) {
      eventFilters.value = { ...eventFilters.value, ...filters };
    }

    function addToSearchHistory(query: string) {
      if (query && !searchHistory.value.includes(query)) {
        searchHistory.value.unshift(query);
        // Keep only last 10 searches
        if (searchHistory.value.length > 10) {
          searchHistory.value = searchHistory.value.slice(0, 10);
        }
      }
    }

    function clearAllFilters() {
      connectionFilters.value = {
        category: "",
        location: "",
        searchQuery: "",
        featured: false,
        sortBy: "name",
      };
      affiliateFilters.value = {
        company: "",
        specialty: "",
        location: "",
        searchQuery: "",
      };
      formsFilters.value = {
        category: "",
        searchQuery: "",
        fileType: "",
        lastUpdated: "",
      };
      eventFilters.value = {
        category: "",
        dateRange: "",
        location: "",
        searchQuery: "",
      };
    }

    return {
      // State
      connectionFilters,
      affiliateFilters,
      formsFilters,
      eventFilters,
      searchHistory,

      // Actions
      updateConnectionFilters,
      updateAffiliateFilters,
      updateFormsFilters,
      updateEventFilters,
      addToSearchHistory,
      clearAllFilters,
    };
  },
  {
    persist: {
      // This is WHY Pinia is essential for static sites!
      // State persists across page reloads and navigation
      storage: persistedState.localStorage,
      paths: [
        "connectionFilters",
        "affiliateFilters",
        "formsFilters",
        "eventFilters",
        "searchHistory",
      ],
    },
  }
);
