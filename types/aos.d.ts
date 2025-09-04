declare module 'aos' {
  interface AOSSettings {
    /** Duration of animation (in milliseconds) */
    duration?: number;
    /** Whether elements should animate out while scrolling past them */
    disable?: boolean | string | (() => boolean);
    /** Whether to once trigger animation on elements */
    once?: boolean;
    /** Easing function for animations */
    easing?: string;
    /** Timing function for animations */
    timing?: number | string;
    /** Delay before animation (in milliseconds) */
    delay?: number;
    /** Additional settings for animations */
    offset?: number;
    /** Animation anchor placement */
    anchorPlacement?: 
      | 'top-bottom' 
      | 'top-center' 
      | 'top-top' 
      | 'center-bottom' 
      | 'center-center' 
      | 'center-top' 
      | 'bottom-bottom' 
      | 'bottom-center' 
      | 'bottom-top';
    /** Mirror animations when scrolling past */
    mirror?: boolean;
    /** Custom animations */
    animatedClassName?: string;
    /** Class applied on initialization */
    initClassName?: string;
    /** Enable/disable animations on mobile devices */
    useClassNames?: boolean;
    /** Whether to disable animations while resizing */
    disableMutationObserver?: boolean;
    /** Debug mode */
    debounceDelay?: number;
    /** Throttle delay */
    throttleDelay?: number;
  }

  interface AOS {
    /** Initialize AOS with custom settings */
    init(settings?: AOSSettings): void;
    /** Refresh all AOS animations */
    refresh(hard?: boolean): void;
    /** Refresh all AOS elements */
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
}
