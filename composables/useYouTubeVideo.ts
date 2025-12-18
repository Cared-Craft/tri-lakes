export function useYouTubeVideo(videoId: string) {
  const videoLoaded = ref(false);
  const videoError = ref(false);
  const playerRef = ref<any>(null);
  const containerRef = ref<HTMLElement | null>(null);
  const retryCount = ref(0);
  const maxRetries = 3;

  // Load YouTube IFrame API
  const loadYouTubeAPI = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if API is already loaded
      if (window.YT && window.YT.Player) {
        resolve();
        return;
      }

      // Set up callback for when API is ready
      window.onYouTubeIframeAPIReady = () => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          reject(new Error('YouTube API loaded but Player not available'));
        }
      };

      // Check if script is already being loaded
      if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        // Wait for YT to be available via callback or polling
        const checkInterval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);

        // Timeout after 10 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          reject(new Error('YouTube API timeout'));
        }, 10000);
        return;
      }

      // Load the script
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => reject(new Error('Failed to load YouTube API'));
      document.head.appendChild(script);
    });
  };

  // Initialize YouTube player
  const initializePlayer = () => {
    if (!containerRef.value) return;

    loadYouTubeAPI()
      .then(() => {
        try {
          playerRef.value = new window.YT.Player(containerRef.value!, {
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              mute: 1,
              loop: 1,
              playlist: videoId, // Required for loop to work
              controls: 0,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              disablekb: 1,
              fs: 0,
              cc_load_policy: 0,
              playsinline: 1,
              enablejsapi: 1,
            },
            events: {
              onReady: (event: any) => {
                console.log('YouTube player ready');
                videoLoaded.value = true;
                videoError.value = false;
                retryCount.value = 0;
                // Ensure video plays
                event.target.playVideo();
              },
              onStateChange: (event: any) => {
                // Handle video state changes
                if (event.data === window.YT.PlayerState.PLAYING) {
                  videoLoaded.value = true;
                } else if (event.data === window.YT.PlayerState.ENDED) {
                  // Restart video if it ends (backup for loop)
                  event.target.playVideo();
                }
              },
              onError: (event: any) => {
                console.error('YouTube player error:', event.data);
                handleError();
              },
            },
          });
        } catch (error) {
          console.error('Error creating YouTube player:', error);
          handleError();
        }
      })
      .catch((error) => {
        console.error('Error loading YouTube API:', error);
        handleError();
      });
  };

  // Handle errors with retry logic
  const handleError = () => {
    videoError.value = true;
    videoLoaded.value = false;

    if (retryCount.value < maxRetries) {
      retryCount.value++;
      console.log(`Retrying YouTube video load (attempt ${retryCount.value}/${maxRetries})`);
      setTimeout(() => {
        initializePlayer();
      }, 2000 * retryCount.value); // Exponential backoff
    } else {
      console.error('YouTube video failed to load after maximum retries');
    }
  };

  // Fallback to simple iframe if API fails
  const createFallbackIframe = () => {
    if (!containerRef.value) return;

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1`;
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.style.pointerEvents = 'none';
    
    containerRef.value.appendChild(iframe);

    iframe.addEventListener('load', () => {
      console.log('YouTube iframe loaded (fallback)');
      videoLoaded.value = true;
      videoError.value = false;
    });

    iframe.addEventListener('error', () => {
      console.error('YouTube iframe failed to load');
      handleError();
    });

    // Fallback timeout
    setTimeout(() => {
      if (!videoLoaded.value && !videoError.value) {
        console.log('YouTube iframe load timeout, marking as loaded');
        videoLoaded.value = true;
      }
    }, 5000);
  };

  onMounted(() => {
    // Try API first, fallback to simple iframe
    if (process.client) {
      // Wait for next tick to ensure DOM element is available
      nextTick(() => {
        if (containerRef.value) {
          initializePlayer();
          // Also set up fallback
          setTimeout(() => {
            if (!videoLoaded.value && !playerRef.value) {
              console.log('Using fallback iframe method');
              createFallbackIframe();
            }
          }, 3000);
        }
      });
    }
  });

  onBeforeUnmount(() => {
    if (playerRef.value && typeof playerRef.value.destroy === 'function') {
      playerRef.value.destroy();
    }
  });

  return {
    videoLoaded,
    videoError,
    containerRef,
    retryCount,
  };
}

// TypeScript declarations for YouTube API
declare global {
  interface Window {
    YT: {
      Player: new (elementId: string | HTMLElement, options: any) => any;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

