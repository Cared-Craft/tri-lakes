export function useAffiliates() {
  // Use Nuxt's useState for SSR compatibility and global state
  const affiliates = useState("affiliates", () => []);
  const categories = useState("categories", () => []);
  const isLoading = useState("affiliatesLoading", () => true);
  const isLoaded = useState("affiliatesLoaded", () => false);

  // Load data only once
  if (!isLoaded.value) {
    loadData();
  }

  async function loadData() {
    try {
      isLoading.value = true;

      // Try to fetch data from public directory with fallback for SSR
      const [affiliatesResponse, categoriesResponse] = await Promise.all([
        $fetch("/data/data.json").catch((error) => {
          console.warn("Could not load affiliate data:", error.message);
          return [];
        }),
        $fetch("/data/categories.json").catch((error) => {
          console.warn("Could not load categories data:", error.message);
          return [];
        }),
      ]);

      const decodedAffiliates = (affiliatesResponse || []).map((a) =>
        decodeFields(a)
      );

      // Shuffle on every client-side load for true randomization
      let processedAffiliates = decodedAffiliates;
      if (process.client) {
        processedAffiliates = shuffleArray(decodedAffiliates);
      }

      affiliates.value = processedAffiliates;
      categories.value = categoriesResponse || [];
      isLoaded.value = true;
    } catch (error) {
      console.error("Error loading affiliate data:", error);
      // Set empty arrays as fallback
      affiliates.value = [];
      categories.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  // Simple HTML entity decoder for common entities
  function decode(str = "") {
    return str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }

  function decodeFields(affiliate) {
    return {
      ...affiliate,
      title: decode(affiliate.title),
      organization: decode(affiliate.organization),
      addressLine1: decode(affiliate.addressLine1),
      addressLine2: decode(affiliate.addressLine2),
    };
  }

  // Fisher-Yates shuffle
  function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return {
    affiliates: readonly(affiliates),
    categories: readonly(categories),
    isLoading: readonly(isLoading),
  };
}
